var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sect-intro-lop",
  "level": "1",
  "url": "sect-intro-lop.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction to Linear Optimization",
  "body": " Introduction to Linear Optimization    The toy car problem  Luis is a toymaker who builds toy cars with wood. His most popular toys are car, an SUV and a truck. The car is made with 6 units of pine, 3 units of birch and take a total of 45 minutes to make. The SUV is made with 5 units of pine, 6 units of birch and takes a total of 75 minutes to make. The truck takes 4 units of pine, 7 units of birch and takes a total of 90 minutes to make. For each car he make $10 in profit, for each SUV is $15 in project and for each truck is $12 in profit.  Luis take a look at his shop on a Monday and has ?? units of pine, ?? units of birch. For the week, he has a total of 30 hours of time he can spend in the shop. How many of each toy should he make to maximize his profit?   Consider the set of inequalities:        Graph the set of points that satisfy all 4 inequalities.    Find the maximum of the function on this set.    Where does the maximum occur?        hi   "
},
{
  "id": "sect-intro-lop-2-1",
  "level": "2",
  "url": "sect-intro-lop.html#sect-intro-lop-2-1",
  "type": "Problem",
  "number": "1.1.1",
  "title": "The toy car problem.",
  "body": " The toy car problem  Luis is a toymaker who builds toy cars with wood. His most popular toys are car, an SUV and a truck. The car is made with 6 units of pine, 3 units of birch and take a total of 45 minutes to make. The SUV is made with 5 units of pine, 6 units of birch and takes a total of 75 minutes to make. The truck takes 4 units of pine, 7 units of birch and takes a total of 90 minutes to make. For each car he make $10 in profit, for each SUV is $15 in project and for each truck is $12 in profit.  Luis take a look at his shop on a Monday and has ?? units of pine, ?? units of birch. For the week, he has a total of 30 hours of time he can spend in the shop. How many of each toy should he make to maximize his profit?  "
},
{
  "id": "sect-geometry",
  "level": "1",
  "url": "sect-geometry.html",
  "type": "Section",
  "number": "1.2",
  "title": "Geometry of Feasible Sets",
  "body": " Geometry of Feasible Sets    "
},
{
  "id": "sect-intro-simplex",
  "level": "1",
  "url": "sect-intro-simplex.html",
  "type": "Section",
  "number": "2.1",
  "title": "Slack Variables and Dictionaries",
  "body": " Slack Variables and Dictionaries   In , we examined feasible sets using geometry. As we saw in that section, solutions occur on the boundary of the feasible set,    Slack Variables  Let’s return to the LOP found at the beginning of the section, that is maximize  subject to     Another way to look at this problem is to introduce slack variables to the first three inequalities that will convert the inequality to an equation. If we introduce and in the following way:     and and must be nonnegative in order for the above inequalities to remain true. Solving these three equations for and , we can write the LOP as     This is called the dictionary form of the LOP. Note that the variables on the left of the equals signs are only and . These are called the nonbasic variables or parameters of the problem. These are the original variables. The four variables on the left side are are called the basic variables and the set of these are called the basis of the problem. For this example, these are the objective and slack variables, however as we update the dictionary, these will change.  Note also, that when and are 0, these are the 5 lines that define the feasible set.  The basic variables and nonbasic are often distinguished from one another using the variables and respectively. For example, in the dictionary above, and .  A plot of the feasible set listed in the dictionary form in is        In this form, it is easy to see that the boundaries of the feasible set occur when either the slack variables or the original variables are zero. Note that the original variables are zero on the coordinate axes. You can also notice that the vertices of the feasible set occur where two of the variables are zero. Note that there are 5 of these. Also, there are other intersection points between lines where the variables are 0, 4 of these are not within the feasible set.  Recall that from the previous chapter, that the optimal point occurs on one of the vertices of the feasible set. We will see here in this chapter how to walk from vertex to vertex not leaving the feasible set and also stopping when reaching the maximum of the objective.    Tableaus  Another way to look at these algebraic equations are in a matrix form, generally called a tableau . Rewrite all of the equations with the variables on the left side and the constant on the right to get the following standard augmented coefficient matrix:     The first two columns are the variables and , the original variables, the next block of four columns are and and the last column is the -column of right hand sides. Also, the last row is the objective row.  A solution to either the dictionary or the tableau is any set of values for that satisfy the problem constraints written as equalities. For example, is a solution to the LOP above. This is because if we substitute these values of and , then each line of the dictionary is satified.  For example, plugging these into the dictionary is   The value of that corresponds to is solution is .   The term solution is not a (or the) solution to the LOP, that is this may not maximize the function. We use the term solution here as a indication that a point satifies all of the equations.   A solution is basic if the parameters or nonbasic variables are all zero. In the LOP problem above, the solution is basic with value . If we have a problem in dictionary form, we will set the basic variables to 0 and the parameters will be constants on right side of the equations.  A dictionary or tableau is feasible if its corresponding basic solution is feasible. Both and are feasible solutions, whereas is not because and does not satisfy the nonnegative constraint.  We are now going to develop the Simplex Method to solving the LOP using either the dictionary or the tableau. If either the dictionary or tableau is infeasible, then we saw that we are in Phase I of the simplex method, otherwise we are in Phase II .  Lastly, the tableau or dictionary is optimal if its basic solution is optimal. The simplex method will stop when we reach an optimal solution.    Developing the Simplex Method  If we return to examining the dictionary in , we notice that if either or increases in value then increases, which is desireable. We must be careful however, because as and increases, and decrease and they must stay nonnegative. If we let (a basic solution), then we see that     If we increase , and keep and nonnegative, we require that     The largest value of that ensure both of these stay true is . If we let in , notice that when the variable becomes zero, therefore it appears that we have interchanged and between basic and nonbasic variables. We can see this as a dictionary, by solving the equation in for or     and if we substitute this into , we get the following new dictionary:     which is a bit annoying with the fractions, so multiplying each row each by 4 to get:     (Note: there was no reason to multiply the last row by 4, but you will see later why we want to do this.)  We can again write the tableau associated with this dictionary as:     Since there is a 1-to-1 correspondence between the dictionaries and the tableaus, we could have used elementary row operations to go from to . In fact, these steps are:     This operation on the tableau is referred to as a pivot (altered to clear fractions). Notice that is now a basic variables and has replaced . The notation for such a pivot will be .  Also, we have a new basic solution for the tableau in as . where the superscript denotes the first step of the simplex method. Also, the sets of basic and nonbasic variables are and . The notation shows that 1 has left the set (nonbasic) to become a basic variable replacing 3.  The objective row of or the dictionary above it shows that if increases in value, then will also increase. This argument shows that this point is not an optimal point. We can increase so long that it satisfies:     This occurs by selecting     The minimum value to keep all inequalities in check above occurs in the 2nd row. Thus we can solve for in the third line of the dictionary in (eq:dict:LOP1:step2) and substituting to the rest. Alternately we can to a pivot on the tableau in (eq:tableau:LOP1:step2) or     to get:     The basic solution of this tableau is with objective function value .  Note that the objective row still contains a negative number. This means that if is increased then the objective function will be increased. In order to ensure that we remain in the feasible set, we required that   This occurs by selecting   where the second inequality has been ignored because it is automatically satisfied. The minimum occurs in row 3, and we can pivot by to get:   The basic solution of this tableau is with the objective function taking on the value . Now since there are no additional negative numbers is the objective row, this value is optimal.   "
},
{
  "id": "sect-intro-simplex-3-4",
  "level": "2",
  "url": "sect-intro-simplex.html#sect-intro-simplex-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slack variables "
},
{
  "id": "sect-intro-simplex-3-8",
  "level": "2",
  "url": "sect-intro-simplex.html#sect-intro-simplex-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dictionary nonbasic variables parameters basic variables basis "
},
{
  "id": "sect-intro-simplex-3-10",
  "level": "2",
  "url": "sect-intro-simplex.html#sect-intro-simplex-3-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basic nonbasic "
},
{
  "id": "fig-lop-1",
  "level": "2",
  "url": "sect-intro-simplex.html#fig-lop-1",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": "     "
},
{
  "id": "sect-tableaus-2",
  "level": "2",
  "url": "sect-intro-simplex.html#sect-tableaus-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tableau "
},
{
  "id": "sect-tableaus-5",
  "level": "2",
  "url": "sect-intro-simplex.html#sect-tableaus-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution "
},
{
  "id": "sect-tableaus-8",
  "level": "2",
  "url": "sect-intro-simplex.html#sect-tableaus-8",
  "type": "Note",
  "number": "2.1.2",
  "title": "",
  "body": " The term solution is not a (or the) solution to the LOP, that is this may not maximize the function. We use the term solution here as a indication that a point satifies all of the equations.  "
},
{
  "id": "sect-tableaus-9",
  "level": "2",
  "url": "sect-intro-simplex.html#sect-tableaus-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basic nonbasic variables "
},
{
  "id": "sect-tableaus-10",
  "level": "2",
  "url": "sect-intro-simplex.html#sect-tableaus-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "feasible "
},
{
  "id": "sect-tableaus-11",
  "level": "2",
  "url": "sect-intro-simplex.html#sect-tableaus-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Simplex Method Phase I Phase II "
},
{
  "id": "sect-tableaus-12",
  "level": "2",
  "url": "sect-intro-simplex.html#sect-tableaus-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "optimal "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
