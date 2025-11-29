module SimplexTableau

import Base.show, Base.==, Base.copy
import LinearAlgebra: I
using Printf

export Tableau, pivot, phaseI, phaseII, basic_solution, dual_solution, objective_val,
  cuttingPlane, gomory, SimplexSteps, isFeasible, isOptimal

struct Tableau
  A::Matrix{Int}
  d::Int
  β::Vector{Int} # Basis: sorted array to mimic a set
  π::Vector{Int} # parameters: sorted array to mimic a set
  num_slack::Int
  free::Vector{Int} # list of free variables
  eq::Vector{Int} # list of equality constraints

  function Tableau(A::Matrix{Int}, b::Vector{Int}, c::Vector{Int}; free=Int[], equality=Int[])
    m = size(A, 1)
    n = size(A, 2)
    m == length(b) || error("Dimension error.  The number of rows of the first matrix "
                            *
                            "must be the same and the number of elements of the second argument.")
    n == length(c) || error("Dimension error.  The number of columns of the first matrix "
                            *
                            "must be the same and the number of elements of the third argument.")
    # determine the default slack_vars and store the number of them. 
    slack_vars = setdiff(collect(1:m), equality)
    num_slack = length(slack_vars)
    iMat = Matrix(I(m))[:, slack_vars]
    new([A iMat zeros(Int, m) b; -c' zeros(1, m - length(equality)) [1 0]], 1,
      collect(n+1:n+m-length(equality)), collect(1:n), num_slack, free, equality)
  end

  function Tableau(A::Matrix{Int}, d::Int, β::Vector{Int}, π::Vector{Int}, num_slack::Int; free=Int[], equality=Int[])
    new(A, d, sort(β), sort(π), num_slack, free, equality)
  end
end

function Tableau(A::Matrix{Int})
  m = size(A, 1) - 1 # number of constraints
  n = size(A, 2) - m - 2 # number of variables
  Tableau(A, 1, collect(n+1:n+m), collect(1:n), m)
end
Tableau(A::Matrix{Int}, d::Int, β::Vector{Int}, π::Vector{Int}) = Tableau(A, d, β, π, length(β))

function ==(T1::Tableau, T2::Tableau)
  T1.A == T2.A && T1.d == T2.d && T1.β == T2.β && T1.π == T2.π && T1.num_slack == T2.num_slack &&
    T1.free == T2.free && T1.eq == T2.eq
end

function copy(t::Tableau)
  Tableau(copy(t.A), t.d, copy(t.β), copy(t.π), t.num_slack, free = copy(t.free), equality = copy(t.eq))
end

function Base.show(io::IO, T::Tableau)
  # Find the largest string size for all values in A
  mx = max(map(str -> length(string(str)), (maximum(T.A), minimum(T.A)))...)
  fmt = Printf.Format("%$(mx)i")

  array_str = join([string(join(map(v -> Printf.format(fmt, v), T.A[r, :]), " ")) for r = 1:size(T.A, 1)], "\n")

  str = """A =
  $array_str

  d = $(T.d)
  π = {$(join(T.π, ", "))}
  β = {$(join(T.β, ", "))}
  """
  if length(T.free) > 0
    str *= "\nF = {$(join(T.free, ", "))}"
  end
  if length(T.eq) > 0
    str *= "\nE = {$(join(T.eq, ", "))}"
  end
  print(io, str)
end

struct SimplexSteps
  initial::Tableau
  final::Tableau
  pivots::Vector{Pair{T,T}} where T<:Int
  message::String
  success::Bool
end

function tableauToTeX(t::Tableau)
  k = size(t.A, 2) - t.num_slack - 2
  """\\left[ \\begin{array}{$("r"^k)|$("r"^(t.num_slack+1))|r}
    $(join([ join( t.A[r,:], " & " ) for r=1:size(t.A,1)-1], "\\\\ \n "))
    \\\\ \\hline
    $(join(t.A[end,:], " & "))
    \\end{array}\\right]"""
end

function Base.show(io::IO, ::MIME"text/latex", T::Tableau)
  local bottom_row = "d & = $(T.d), \\qquad
    \\pi = \\{$(join(T.π, ", "))\\}, \\qquad
    \\beta = \\{$(join(T.β, ", "))\\},"
  if length(T.free) > 0
    bottom_row *= "\\quad F = \\{$(join(T.free, ", "))\\},"
  end
  if length(T.eq) > 0
    bottom_row *= "\\quad E = \\{$(join(T.eq, ", "))\\}"
  end
  print(
    io,
    """\\begin{aligned}
    A & =  $(tableauToTeX(T)) \\\\
    ~ & \\\\
    $bottom_row
    \\end{aligned}"""
  )
end

function Base.show(io::IO, mime::MIME"text/latex", ss::SimplexSteps)

  pivots = join(map(piv -> "$(piv.first) \\mapsto $(piv.second)", ss.pivots), ", ")

  print(
    io,
    """
\\begin{aligned}
\\text{Initial Tableau} \\qquad & $(tableauToTeX(ss.initial)) \\\\
d & = $(ss.initial.d) \\qquad
\\pi = \\{$(join(ss.initial.π, ", "))\\} \\qquad
\\beta = \\{$(join(ss.initial.β, ", "))\\} \\\\
\\text{pivots} \\qquad & $pivots \\\\
~ & \\\\\
\\text{Final Tableau} \\qquad & $(tableauToTeX(ss.final)) \\\\
d & = $(ss.final.d) \\qquad
\\pi = \\{$(join(ss.final.π, ", "))\\} \\qquad
\\beta = \\{$(join(ss.final.β, ", "))\\} \\\\
\\text{Succeeded} \\qquad & $(ss.success) \\\\
\\text{Message} \\qquad & $(ss.message)
\\end{aligned}
"""
  )
end

function pivot(T::Tableau, piv::Pair{Int,Int})
  piv.first ∈ T.π || error("The variable $(piv.first) must be a parameter")
  (piv.second ∈ T.β || piv.second == 0) || error("The variable $(piv.second) must be a basic variable")

  length(T.eq) == 0 && piv.second == 0 && 
    error("A pivot that doesn't remove a basis variable cannot be applied if there are not equality constraints.")
  # find the row corresponding to the exiting basic variable
  local k
  if piv.second == 0
    for i = T.eq
      if T.A[i, T.β] == zeros(Int, length(T.β))
        k = i
        break
      end 
    end
    k === nothing && error("All equality variables have basis variables.")
  else
    k = findfirst(i -> i == T.d, T.A[1:length(T.β), piv.second])
  end


  local A = copy(T.A)
  if A[k, piv.first] < 0
    A[k, :] = -A[k, :]
  end
  local d = A[k, piv.first]
  for kk = 1:size(A, 1)
    kk == k && continue
    A[kk, :] = (-A[kk, piv.first] * A[k, :] + A[k, piv.first] * A[kk, :]) .÷ T.d
  end

  piv.second == 0 ?
  Tableau(A, d, union(T.β, piv.first),
    setdiff(T.π, piv.first), T.num_slack, free=T.free, equality=T.eq) :
  Tableau(A, d, union(setdiff(T.β, piv.second), piv.first),
    union(setdiff(T.π, piv.first), piv.second), T.num_slack, free=T.free, equality=T.eq)
end

function pivot(T::Tableau, pivots::Vector{Pair{Int,Int}})
  length(pivots) > 0 || error("The number of elements in the second arguments must be at least one.")
  Tp = pivot(T, first(pivots))
  for k = 2:length(pivots)
    Tp = pivot(Tp, pivots[k])
  end
  Tp
end

function phaseI(T::Tableau; show_steps=false)
  T0 = copy(T)
  pivots::Vector{Pair{Int,Int}} = []

  # run this loop until the tableau becomes feasible or it is determined infeasible
  while true
    # Find the smallest number in the last column
    (min_b, i) = findmin(T0.A[1:size(T0.A, 1)-1, end])
    if min_b >= 0
      return show_steps ? SimplexSteps(T, T0, pivots, "", true) : T0
    end

    # Find the leftmost number in the k-th row.
    j = findfirst(v -> v < 0, T0.A[i, 1:end-1])
    if j === nothing
      if show_steps
        return SimplexSteps(T, T0, pivots, "This tableau is infeasible.", false)
      else
        error("This tableau is infeasible.")
      end
    end

    # Find the basic variable in the i-th row
    k = findfirst(kk -> kk == T0.d, T0.A[i, T0.β])
    push!(pivots, j => T0.β[k])
    T0 = pivot(T0, j => T0.β[k])

  end
  show_steps ? SimplexSteps(T, T0, pivots, "", true) : T0
end

function phaseII(T::Tableau; show_steps=false)
  T0 = copy(T)
  pivots::Vector{Pair{Int,Int}} = []

  while true
    # Check if there are negatives in the bottom row.
    j = findfirst(v -> v < 0, T0.A[end, 1:end-1])
    j === nothing && break
    # b-ratios
    local ( min_ratio = Inf64, i = 0 )
    for kk = 1:size(T0.A, 1)-1
      if T0.A[kk, j] > 0 && T0.A[kk, end] / T0.A[kk, j] < min_ratio
        min_ratio = T0.A[kk, end] / T0.A[kk, j]
        i = kk
      end
    end
    if i == 0
      if show_steps
        return SimplexSteps(T, T0, pivots, "This tableau is not bounded", false)
      else
        error("This tableau is not bounded.")
      end
    end

    # find the leaving variable:
    k = findfirst(kk -> kk == T0.d, T0.A[i, T0.β])
    push!(pivots, j => T0.β[k])
    T0 = pivot(T0, j => T0.β[k])
  end
  show_steps ? SimplexSteps(T, T0, pivots, "", true) : T0
end

function basic_solution(T::Tableau)
  B = T.A[1:end-1, T.β] .÷ T.d
  x = zeros(Int, length(T.β) + length(T.π))
  x[T.β] = round.(Int, inv(B)) * T.A[1:end-1, end]
  x[T.π] = zeros(Int, length(T.π))
  x // T.d
end

function isFeasible(T::Tableau)
  # need to update when free variables are available
  all(T.A[1:end-1, end] .>= zeros(Int, size(T.A, 1) - 1))
end

function isOptimal(T::Tableau)
  isFeasible(T) && all(T.A[end, 1:end-1] .>= zeros(Int, 1, size(T.A, 2) - 1))
end

function dual_solution(T::Tableau)
  T.A[end, T.π] // T.d
end

function objective_val(T::Tableau)
  T.A[end, end] // T.d
end

function cuttingPlane(T::Tableau)
  max_mod = findmax(mod.(T.A[1:end-1, end], T.d))
  new_row = zeros(Int, 1, size(T.A, 2) + 1)
  new_row[T.π] = -mod.(T.A[max_mod[2], T.π], T.d)'
  new_row[1, end-2:end] = [T.d 0 -max_mod[1]]
  Tableau(vcat(hcat(T.A[1:size(T.A, 1)-1, 1:size(T.A, 2)-1], zeros(Int, size(T.A, 1) - 1), T.A[1:size(T.A, 1)-1, end]),
      new_row,
      hcat(T.A[end, 1:size(T.A, 2)-2]', [0 T.d T.A[end, end]])),
    T.d, union(T.β, size(T.A, 2) - 1), T.π)
end

function gomory(t::Tableau; max_steps=20)

  local t0 = Tableau(t.A, t.d, t.β, t.π)
  n = 1
  while true
    t0 = phaseII(phaseI(t0))
    # test for integer solution
    if all(v -> v.den == 1, basic_solution(t0))
      return t0
    end
    n > max_steps && error("The maximum number of steps of $max_steps is reached without a solution.")
    t0 = cuttingPlane(t0)
    n += 1
  end
end

end