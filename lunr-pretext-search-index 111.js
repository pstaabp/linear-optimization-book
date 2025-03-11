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
  "id": "sect-lines-planes",
  "level": "1",
  "url": "sect-lines-planes.html",
  "type": "Section",
  "number": "1.1",
  "title": "Lines and Planes",
  "body": " Lines and Planes   I'm guessing that if you are reading this book (either you picked it up or have been assigned it) that you have a fair bit of mathematical background. If you haven't read through the preface with some additional information, but typically this is a upper-level undergraduate or early graduate-level class.  That being said, I'm guessing that you are quite familiar with lines you may even be embarrased if you seen reading a section on lines. However, you may not have seen lines and planes in the context that you will seen them here. It will be worth your while to read through this chapter.    Lines  When most mathematics students are asked above lines, the response is , the slope-intercept form of the line. This is often presented in a precalculus class in which linear functions fall from this naturally. However, not all lines can be written in this form. The exception is vertical lines, like .  Instead, we will use the general form of the line or     as long as and are both not zero, A nice was to ensure this is . and the in this formula is not the -intercept. This form allows both horizontal, vertical and any line with any other slope.  This form is quite nice in that if is zero, then the line is horizontal, if is zero, then the line is vertical and if both are non-zero then the line is oblique with -intercept of , -intercept of and slope of .  If we take the line in for oblique lines and divide through by , this can take on the intercept form of the line :     and in this form the -intercept is and the -intercept is .    Put the line given by into intercept form and find the intercepts.    Divide through by 30 to get     This shows that the -intercept is 10 and the -intercept is 6.    The above example showed how we can use the intercept form to easily read off the intercepts. The following exercise will use these to plot the lines.   Plot the following lines: , , and on the same axes. Note: do this by hand instead of graphing calculator\/website\/software.   Use the information above to note if it is horizontal, vertical or oblique and in the latter case, use intercepts to plot the line.   In this case, note that the first line is vertical, the second is horizontal. For the third line, divide through by and simplify to    which will have the intercepts and and the last line can be simplified to     which will have the intercepts and .            Linear Inequalities  Related to lines is that of linear inequalities. Consider the inequality and if we have the set is the set of all points that satisfy the inequality. The line cuts the -plane into two regions and in this case, the line is included in the set along with the side of the line containing the origin.   "
},
{
  "id": "sect-lines-2",
  "level": "2",
  "url": "sect-lines-planes.html#sect-lines-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope-intercept form "
},
{
  "id": "sect-lines-3",
  "level": "2",
  "url": "sect-lines-planes.html#sect-lines-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general form "
},
{
  "id": "sect-lines-7",
  "level": "2",
  "url": "sect-lines-planes.html#sect-lines-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intercept form of the line "
},
{
  "id": "sect-lines-10",
  "level": "2",
  "url": "sect-lines-planes.html#sect-lines-10",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  Put the line given by into intercept form and find the intercepts.    Divide through by 30 to get     This shows that the -intercept is 10 and the -intercept is 6.   "
},
{
  "id": "sect-lines-12",
  "level": "2",
  "url": "sect-lines-planes.html#sect-lines-12",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "",
  "body": " Plot the following lines: , , and on the same axes. Note: do this by hand instead of graphing calculator\/website\/software.   Use the information above to note if it is horizontal, vertical or oblique and in the latter case, use intercepts to plot the line.   In this case, note that the first line is vertical, the second is horizontal. For the third line, divide through by and simplify to    which will have the intercepts and and the last line can be simplified to     which will have the intercepts and .         "
},
{
  "id": "sect-matrix-reduction",
  "level": "1",
  "url": "sect-matrix-reduction.html",
  "type": "Section",
  "number": "1.2",
  "title": "Matrices and Matrix Reduction",
  "body": " Matrices and Matrix Reduction   Matrices are generally presented in either a linear algebra or matrix methods class. The material presented here is some basics behing matrices that are needed for performing linear optimization. This should be review for most readers of the text, but is helpful for the context and notation later in the text.    Linear Systems  Let's start with an example.   Traffic Flow   A simple model of traffic flow can be represented by the following graph:   A map of a few streets in Boston where the arrows denote the direction of traffic flow (all of these streets are one-way) and the numbers represent the numbers of cars driving down the street in a given time period. The letters through will be the names of the intersections.      Write down the equations that balance each of the numbers of cars entering and leaving each of the intersections and .    In this case, we have:     for intersections , , and respectively.         A linear combination of has the form     where the constants are the combinations coefficients.    A linear equation has the form     where is a constant and .    The -tuple  satisfies or is a solution of if this point satisfies or       A system of linear equations or linear system is a set of linear equations:     and this linear system has equations and unknowns (variables).    The -tuple  satisfies or is a solution of if this point satisfies every equation of .        Linear Equations  The following are linear equations:     where summation notation has been used in the last one and note the variable names can vary. The following equations are not linear:     Each of the equations in the latter group have multiplications, squares division or other functions between variables.   The next two examples give a way to determine if a point or -tuple is a solution to a linear system.   Showing a Point is a Solution to a Linear System   Show that the point is a solution of the linear system:       Substitute and into both equations and check.     Since each equation is satisfied at the point is a solution to the linear system.      Find a few solutions of the traffic flow problem.          Matrices and Row Operations  You probably recall that a matrix is a compact way of writing a linear system in which only the coefficients are stored.  The linear system in can be written as the augmented coefficient matrix      Solutions of linear systems are usually found by performing row operations on the matrix which do not change the solution. These include multiplying a row by a constant, taking a linear combination of rows and replacing one of the rows, and swapping rows. If this is done in a systematic way, generally using Gauss-Jordon reduction, the resulting matrix can be put in either row-echelon or reduced row-echelon form (RREF).   Put the linear system from in a augmented coefficient matrix and using row operations to put the equation in reduced row-echelon form.   First, ensure that all of the variables are on the left of the equations in and the constants on the right. This can be written as the augmented coefficient matrix,     Row operations are now performed       Solve a basically random matrix.     Matrix Pivots  Matrix Pivots   "
},
{
  "id": "ex-streets",
  "level": "2",
  "url": "sect-matrix-reduction.html#ex-streets",
  "type": "Example",
  "number": "1.2.1",
  "title": "Traffic Flow.",
  "body": " Traffic Flow   A simple model of traffic flow can be represented by the following graph:   A map of a few streets in Boston where the arrows denote the direction of traffic flow (all of these streets are one-way) and the numbers represent the numbers of cars driving down the street in a given time period. The letters through will be the names of the intersections.      Write down the equations that balance each of the numbers of cars entering and leaving each of the intersections and .    In this case, we have:     for intersections , , and respectively.   "
},
{
  "id": "sect-linear-systems-4",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-linear-systems-4",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "     A linear combination of has the form     where the constants are the combinations coefficients.    A linear equation has the form     where is a constant and .    The -tuple  satisfies or is a solution of if this point satisfies or       A system of linear equations or linear system is a set of linear equations:     and this linear system has equations and unknowns (variables).    The -tuple  satisfies or is a solution of if this point satisfies every equation of .      "
},
{
  "id": "sect-linear-systems-5",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-linear-systems-5",
  "type": "Example",
  "number": "1.2.4",
  "title": "Linear Equations.",
  "body": " Linear Equations  The following are linear equations:     where summation notation has been used in the last one and note the variable names can vary. The following equations are not linear:     Each of the equations in the latter group have multiplications, squares division or other functions between variables.  "
},
{
  "id": "sect-linear-systems-7",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-linear-systems-7",
  "type": "Example",
  "number": "1.2.5",
  "title": "Showing a Point is a Solution to a Linear System.",
  "body": " Showing a Point is a Solution to a Linear System   Show that the point is a solution of the linear system:       Substitute and into both equations and check.     Since each equation is satisfied at the point is a solution to the linear system.   "
},
{
  "id": "sect-linear-systems-8",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-linear-systems-8",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "  Find a few solutions of the traffic flow problem.       "
},
{
  "id": "sect-matrices-3",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-matrices-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented coefficient matrix "
},
{
  "id": "sect-matrices-5",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-matrices-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row operations "
},
{
  "id": "sect-matrices-6",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-matrices-6",
  "type": "Checkpoint",
  "number": "1.2.7",
  "title": "",
  "body": " Put the linear system from in a augmented coefficient matrix and using row operations to put the equation in reduced row-echelon form.   First, ensure that all of the variables are on the left of the equations in and the constants on the right. This can be written as the augmented coefficient matrix,     Row operations are now performed     "
},
{
  "id": "sect-matrices-7",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-matrices-7",
  "type": "Example",
  "number": "1.2.8",
  "title": "",
  "body": " Solve a basically random matrix.  "
},
{
  "id": "sect-linear-models",
  "level": "1",
  "url": "sect-linear-models.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to Linear Optimization",
  "body": " Introduction to Linear Optimization    The toy car problem  Luis is a toymaker who builds toy cars with wood. His most popular toys are car, an SUV and a truck. The car is made with 6 units of pine, 3 units of birch and take a total of 45 minutes to make. The SUV is made with 5 units of pine, 6 units of birch and takes a total of 75 minutes to make. The truck takes 4 units of pine, 7 units of birch and takes a total of 90 minutes to make. For each car he make $10 in profit, for each SUV is $15 in project and for each truck is $12 in profit.  Luis take a look at his shop on a Monday and has ?? units of pine, ?? units of birch. For the week, he has a total of 30 hours of time he can spend in the shop. How many of each toy should he make to maximize his profit?   Consider the set of inequalities:        Graph the set of points that satisfy all 4 inequalities.    Find the maximum of the function on this set.    Where does the maximum occur?       Other Examples  hi   Shipping Coffee Problem   A major coffee supplier has warehouses in Seattle and San José. The coffee supplier receives orders from coffee retailers in Salt Lake City and Reno.  The retailer in Salt Lake City needs 400 pounds of coffee and the the retailer in Reno needs 350 pounds of coffee. The Seattle warehouse has 700 pounds available and the San José warehouse has 500 pounds available.  The cost of shipping from Seattle to Salt Lake City is $2.50 per pound, from Seattle to Reno $3 per pound, from San José to Salt Lake is $4 per pound and from San José to Reno is $2 per pound.  Find the number of pounds to be shipped from each warehouse to each retailer to minimize the cost.     Scheduling Librarians   The FSU library needs to make sure that there is at least one reference librarian on duty during open hours. If there are 3 reference librarians, how do you schedule them to work such that a) each one works at least 30 hours per week. b) No one work longer than 10 hours in a given day. How would you schedule them such that the total number of hours worked by all reference librarians is minimized.      Creating Linear Models  How do we create a linear model.    Write the LOP for     In this case, first note that we need to know the amount of coffeed shipped between warehouses and retail outlets. The following graph is helpful for this:         The variables are going to be the total amount of coffee to be shipped from the two warehouses to the two retail locations. If we look first at the amount of coffee that the Salt Lake City and Reno locations need then we need to ship at least this amount or     Since the warehouse have a limited supply, they can only ship what they have so there are two additional constraints, one for each warehouse     There are other constraints on the variables in that each amount must be nonnegative, so . Lastly, the objective can be written:     We can combine all of these into the following LOP:        "
},
{
  "id": "sect-linear-models-2-1",
  "level": "2",
  "url": "sect-linear-models.html#sect-linear-models-2-1",
  "type": "Problem",
  "number": "2.1.1",
  "title": "The toy car problem.",
  "body": " The toy car problem  Luis is a toymaker who builds toy cars with wood. His most popular toys are car, an SUV and a truck. The car is made with 6 units of pine, 3 units of birch and take a total of 45 minutes to make. The SUV is made with 5 units of pine, 6 units of birch and takes a total of 75 minutes to make. The truck takes 4 units of pine, 7 units of birch and takes a total of 90 minutes to make. For each car he make $10 in profit, for each SUV is $15 in project and for each truck is $12 in profit.  Luis take a look at his shop on a Monday and has ?? units of pine, ?? units of birch. For the week, he has a total of 30 hours of time he can spend in the shop. How many of each toy should he make to maximize his profit?  "
},
{
  "id": "prob-coffee",
  "level": "2",
  "url": "sect-linear-models.html#prob-coffee",
  "type": "Problem",
  "number": "2.1.2",
  "title": "Shipping Coffee Problem.",
  "body": " Shipping Coffee Problem   A major coffee supplier has warehouses in Seattle and San José. The coffee supplier receives orders from coffee retailers in Salt Lake City and Reno.  The retailer in Salt Lake City needs 400 pounds of coffee and the the retailer in Reno needs 350 pounds of coffee. The Seattle warehouse has 700 pounds available and the San José warehouse has 500 pounds available.  The cost of shipping from Seattle to Salt Lake City is $2.50 per pound, from Seattle to Reno $3 per pound, from San José to Salt Lake is $4 per pound and from San José to Reno is $2 per pound.  Find the number of pounds to be shipped from each warehouse to each retailer to minimize the cost.   "
},
{
  "id": "sect-other-4",
  "level": "2",
  "url": "sect-linear-models.html#sect-other-4",
  "type": "Problem",
  "number": "2.1.3",
  "title": "Scheduling Librarians.",
  "body": " Scheduling Librarians   The FSU library needs to make sure that there is at least one reference librarian on duty during open hours. If there are 3 reference librarians, how do you schedule them to work such that a) each one works at least 30 hours per week. b) No one work longer than 10 hours in a given day. How would you schedule them such that the total number of hours worked by all reference librarians is minimized.   "
},
{
  "id": "prob-coeff-setup",
  "level": "2",
  "url": "sect-linear-models.html#prob-coeff-setup",
  "type": "Problem",
  "number": "2.1.4",
  "title": "",
  "body": "  Write the LOP for     In this case, first note that we need to know the amount of coffeed shipped between warehouses and retail outlets. The following graph is helpful for this:         The variables are going to be the total amount of coffee to be shipped from the two warehouses to the two retail locations. If we look first at the amount of coffee that the Salt Lake City and Reno locations need then we need to ship at least this amount or     Since the warehouse have a limited supply, they can only ship what they have so there are two additional constraints, one for each warehouse     There are other constraints on the variables in that each amount must be nonnegative, so . Lastly, the objective can be written:     We can combine all of these into the following LOP:      "
},
{
  "id": "sect-geometry",
  "level": "1",
  "url": "sect-geometry.html",
  "type": "Section",
  "number": "2.2",
  "title": "Geometry of Feasible Sets",
  "body": " Geometry of Feasible Sets   In the previous section, we saw many different type of problems that fall into linear optimization. Many of these problems had a lot of variables and as we will see in this course is it easy to get tens or hundreds of variables. But we return to a two variable setup.  First, as noted in , a single linear inequality cuts the -plane into two regions in the plane. As noted in , Linear Optimization Problems (LOPs) have a set of linear inequalities which lead to the following.    Consider a set of linear inequalities:     The feasible set for the set of inequalites is the set of all points that satisfy all of the inequalities.     If there are no points in the feasible set, then the feasible set is empty.     Graph the feasible set given by the inequalites:       In this case, we use the techniques from to graph each of the following inequalities. Note that line part of the first inequalities has intercepts of and . The line part of the second inequality has intercepts of and .      Feasible Sets are Convex     "
},
{
  "id": "def-feasible-set",
  "level": "2",
  "url": "sect-geometry.html#def-feasible-set",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  Consider a set of linear inequalities:     The feasible set for the set of inequalites is the set of all points that satisfy all of the inequalities.   "
},
{
  "id": "sect-geometry-2-4",
  "level": "2",
  "url": "sect-geometry.html#sect-geometry-2-4",
  "type": "Note",
  "number": "2.2.2",
  "title": "",
  "body": " If there are no points in the feasible set, then the feasible set is empty.  "
},
{
  "id": "sect-geometry-2-5",
  "level": "2",
  "url": "sect-geometry.html#sect-geometry-2-5",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  Graph the feasible set given by the inequalites:       In this case, we use the techniques from to graph each of the following inequalities. Note that line part of the first inequalities has intercepts of and . The line part of the second inequality has intercepts of and .   "
},
{
  "id": "sect-slack-dict",
  "level": "1",
  "url": "sect-slack-dict.html",
  "type": "Section",
  "number": "3.1",
  "title": "Slack Variables and Dictionaries",
  "body": " Slack Variables and Dictionaries   In , we examined feasible sets using geometry. As we saw in that section, solutions occur on the boundary of the feasible set,    Slack Variables  Let’s return to the LOP found at the beginning of the section, that is maximize  subject to     Another way to look at this problem is to introduce slack variables to the first three inequalities that will convert the inequality to an equation. If we introduce and in the following way:     and and must be nonnegative in order for the above inequalities to remain true. Solving these three equations for and , we can write the LOP as     This is called the dictionary form of the LOP. Note that the variables on the right of the equals signs are only and . These are called the nonbasic variables or parameters of the problem. These are the original variables. The four variables on the left side are . The three variables are called the basic variables and the set of these are called the basis of the problem. For this example, these are the objective and slack variables, however as we update the dictionary, these will change.  Note also, that when and are 0, these are the 5 lines that define the feasible set.  The basic variables and nonbasic are often distinguished from one another using the variables and respectively. For example, in the dictionary above, and .  A plot of the feasible set listed in the dictionary form in is        In this form, it is easy to see that the boundaries of the feasible set occur when either the slack variables or the original variables are zero. Note that the original variables are zero on the coordinate axes. You can also notice that the vertices of the feasible set occur where two of the variables are zero. Note that there are 5 of these. Also, there are other intersection points between lines where the variables are 0, 4 of these are not within the feasible set.  Recall that from the previous chapter, that the optimal point occurs on one of the vertices of the feasible set. We will see here in this chapter how to walk from vertex to vertex not leaving the feasible set and also stopping when reaching the maximum of the objective.    Basic Solutions  A solution to either the dictionary or the tableau is any set of values for that satisfy the problem constraints written as equalities. For example, is a solution to the LOP above. This is because if we substitute these values of and , then each line of the dictionary is satisfied.  For example, plugging these into the dictionary is   The value of that corresponds to is solution is .   The term solution is not a (or the) solution to the LOP, that is this may not be a value that is the optimum value of the function. We use the term solution here as a indication that a point satisfies all of the equations.   A solution is basic if the parameters or nonbasic variables are all zero. In the LOP problem above, the solution is basic with value . If we have a problem in dictionary form, we will set the basic variables to 0 and the parameters will be constants on right side of the equations.  In the example where and is a basic solution with the basis . Recall that we mention above that when two variables (in this case, not in general) are zero, then we are at a vertex of the feasible set. This vertex is at the origin.  A dictionary or tableau is feasible if its corresponding basic solution is feasible. Both and are feasible solutions, whereas is not because and does not satisfy the nonnegative constraint.  We are now going to develop the Simplex Method to solve the LOP using the dictionary. This technique will be systematically going from vertex to vertex of the feasible set until the optimal solution is reached. This is perhaps a bit too simplistic, because as we will see that the starting basis may not be in the feasible set and we need to get there first.   Lastly, the dictionary is optimal if its basic solution is optimal. The simplex method will stop when we reach an optimal solution.    Developing the Simplex Method  If we return to the dictionary in , we notice that if either or increases in value then increases and since we are seeking a maximum of , this is desirable, so we want to increase either , or both. We must be careful however, because as and increases, and decrease and they must stay nonnegative. Before increasing these variables, recall that the basis is indicating that these two variables are in the basis (recall that the basic variables are the ones on the right side of all of the equations in a dictionary). The variable will be increased, so will set in :     If we increase , and keep and nonnegative, we require that     The largest value of that ensure both of these stay true is . If we let in , notice that when the variable becomes zero, therefore it appears that we have interchanged and between basic and nonbasic variables. Thus the new basis is and the parameters is . This switch of variables is called a pivot and is denoted , where the first number 1 is the variable entering the basis and the second number is the one leaving.  If we want to be in the basis and to leave we use the 2nd equation in the dictionary in and solve for or     To get a basic variable for the rest of the dictionary, we plug this in the other equations in , resulting in the new dictionary:     which is a bit annoying with the fractions, so multiplying each row each by 4 to get:     (Note: there was no reason to multiply the last row by 4, but you will see later why we want to do this.)  Also, we have a new basic solution for the dictionary in as . where the superscript denotes the first step of the simplex method. Also, this dictionary corresponds to the basis of and parameters . The notation shows that 1 has left the set (nonbasic) to become a basic variable replacing 3.  The objective in the first row of is , shows first that it has increased from the initial dictionary, but also that if we increase , then will increase. Because of this, we also know that the current solution is not optimal. We can increase so long that it satisfies:     This occurs by selecting     Because the 8 came from the the 3rd equation of , we are going to solve for (or actually ) in this equation or     We now take the other three equations in and multiply by 5 because of the coefficient of the variable above to get:     and then in each of the terms in the parentheses substitute , to get     If we note that each of the first, second and fourth equations above are factors of 4 (the previous coefficient of all parameters), if we divide these three equations by 4 to get:     which is the current dictionary. Note that 4 is now a basic variable and 2 is now a parameter. This means that we have done the pivot: and the basis is and parameter is . The basic solution of this dictionary or tableau is with objective function value .  If we look at the dictionary, the top row is . If we increase the variable , then the objective function will be increased. We will increase , but in order to ensure that we remain in the feasible set, we required that     We wish to increase by the maximum amount with these constraints and this occurs when     where the second inequality has been ignored because it is automatically satisfied for any positive value of . Since the minimum value is associated with the 4th equation, we will solve for in this equation or     We then substitute this into the other equations or     and we'll multiply the last row by 5 to ensure that the coefficients of all parameters are the same     The basic solution of this tableau is with the objective function taking on the value . Lastly, looking at the objective equation, increasing our basic variables or decreases the objective value, so this means that this solution is optimal.   In the next section, we repeat this example with a matrix form of the dictionary, called a tableau. This will make all of the calculation easier to do and with some software can simplify the steps tremendously.   "
},
{
  "id": "sect-slack-dict-3-4",
  "level": "2",
  "url": "sect-slack-dict.html#sect-slack-dict-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slack variables "
},
{
  "id": "sect-slack-dict-3-8",
  "level": "2",
  "url": "sect-slack-dict.html#sect-slack-dict-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dictionary nonbasic variables parameters basic variables basis "
},
{
  "id": "sect-slack-dict-3-10",
  "level": "2",
  "url": "sect-slack-dict.html#sect-slack-dict-3-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basic nonbasic "
},
{
  "id": "fig-lop-1",
  "level": "2",
  "url": "sect-slack-dict.html#fig-lop-1",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": "     "
},
{
  "id": "sect-basic-solutions-2",
  "level": "2",
  "url": "sect-slack-dict.html#sect-basic-solutions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution "
},
{
  "id": "sect-basic-solutions-5",
  "level": "2",
  "url": "sect-slack-dict.html#sect-basic-solutions-5",
  "type": "Note",
  "number": "3.1.2",
  "title": "",
  "body": " The term solution is not a (or the) solution to the LOP, that is this may not be a value that is the optimum value of the function. We use the term solution here as a indication that a point satisfies all of the equations.  "
},
{
  "id": "sect-basic-solutions-6",
  "level": "2",
  "url": "sect-slack-dict.html#sect-basic-solutions-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basic nonbasic variables "
},
{
  "id": "sect-basic-solutions-8",
  "level": "2",
  "url": "sect-slack-dict.html#sect-basic-solutions-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "feasible "
},
{
  "id": "sect-basic-solutions-9",
  "level": "2",
  "url": "sect-slack-dict.html#sect-basic-solutions-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Simplex Method "
},
{
  "id": "sect-basic-solutions-10",
  "level": "2",
  "url": "sect-slack-dict.html#sect-basic-solutions-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "optimal "
},
{
  "id": "sect-develop-simplex-6",
  "level": "2",
  "url": "sect-slack-dict.html#sect-develop-simplex-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pivot "
},
{
  "id": "sect-tableau",
  "level": "1",
  "url": "sect-tableau.html",
  "type": "Section",
  "number": "3.2",
  "title": "Tableaus and the Simplex Method",
  "body": " Tableaus and the Simplex Method   In , we walked through how to solve a Linear Optimization Problem using the dictionary. It was a bit cumbersome to solve the problem this way in terms of solving for variables and substitute that into all other equations and simplifying.  We see in this section that since all of the equations are linear, we can use a matrix to organize the equations and perform the operations.    Introduction to tableaus  A tableau is matrix representation of a dictionary . For example, the dictionary in can be written in the form:     and also the objective function can be written as . These four equations can be put into a matrix as     The first two columns are the variables and , the original variables, the next block of four columns are and and the last column is the -column of right hand sides. Also, the last row is the objective row. It is standard to write the tableau with vertical lines that separate the original variables from the slack and objective variables and the last (constant) column, as well as a horizontal line to handle the objective function.  Also, recall that the dictionary has the basis of and parameters . We can see this from the tableau by looking at the columns. Columns 3 through 6 are columns of an identity matrix and these are the parameters (except for ). The remaining columns 1 and 2 are thus the basis.  Knowing this, we can read the basic solution by setting the basic variables to zero. Doing this, results in the matrix:     where you need to recall that first three columns are the parameters, the 4th is now the objective, so this corresponds to      Read the basic solution off a tableau.   As we saw in , solving for various variables switches the basis and parameters and moves the basic solution from vertex to vertex along the feasible set. We can represent each dictionary as a tableau, but in this section we will learn how to do the same operation on the tableau itself.    Operations on Tableaus  We now repeat what we did in with dictionaries with the tableaus. Our first steps, we will write the tableau that is associated with . The corresponding tableau can be written:     Since there is a 1-to-1 correspondence between the dictionaries and the tableaus, we could have used elementary row operations to go from to . In fact, these steps are:     Since we want to be a parameter, the above row operations bring into the basis by eliminating all other elements in the first column.  The basic solution to the tableau is found by noting that the basic variables are the columns which are not columns of the identity matrix and we set those to zero and in this case is   For the next step, we use the same logic as in to determine that 2 leaves the basis and 4 enters. This corresponds to doing a matrix pivot on row 2, column 2 and eliminate the rest of the elements in column 2. These steps are     and the result is     Recall that checking if this is a solution means looking at the objective row. This can be translated to     and since increasing increases , so this is not an optimal solution. We can look at what we did in the dictionary form of this to determine which variable enters the basis, but let's use the tableau to determine this. We will zero out , the other basic variable     We seek to maximize the amount to increase and that will switch the other variable to the basis.     and we pick the 3rd equation resulting in entering the basis. This means that we pivot about row 3, column 3, with the row operations:        Now if we look at the objective row, this can be written as and since increasing either of the two basic variables, decreases the objective, so this is optimal. The basic solution for this tableau is with     Standard Form  The LOP that we have been working on the past two section is in a special form that is needed for solving via the Simplex Method. We define it below and then explain how to get other problems into this form.    A LOP is in standard form if the following are conditions are met:   It is a maximum problem.    All the constraints are of the form , some constant.    All variables are nonnegative.       Not all LOPs are in standard form. For example, consider the transportation problem,    Phase II of the Simplex Method  It seems odd that we start with what is called Phase II of a method to solve, but all problems will need to go through Phase II and as we will see below that not all problems need to go through Phase I.   Phase II of Simplex Method   If a tableau is feasible, then the following steps are Phase II of the simplex method:     If there are no negative numbers in the objective row, the basic solution is optimal.    Choose the leftmost negative number in the objective row. This is the pivot column . The variable that corresponds to the th column is called the entering variable since this variable is entering the basis.    Crease the b-ratio or for all and for , the pivot column.    Choose such that the b-ratio is the smallest nonnegative ratio . The basic variable corresponding to the th row is called the leaving variable .    Pivot about element of the tableau. Goto step 1.         Consider a LOP with the following tableau:     Note first that the basic solution is feasible because the right column has no negative numbers. Therefore, use Phase II of the Simple method to find the solution.    First, note that the objective row (bottom) has negative numbers, so this isn't an optimal solution. We select the left-most negative number in this row, which is column 1.  We compute the -ratio with     and the small non-negative ratio is in the second row. Therefore we perform a pivot about the second row, first column. Note: since will leave the basis and will enter, then the tableau pivot is .  After performing the matrix pivot we get:     Examining this tableau, there is still a negative number in the objective row, which means that this is not an optimal solution. Therefore, we find the -ratios using the 2nd column or     and since the smallest non-negative number is in the first row, the next step is to perform a matrix pivot about the first row, second column. This corresponds to the tableau pivot of resulting in     Now notice that the objective row has no more negative numbers in it. This means that the basic solution of is optimal. The objective value is . Note that using the original variables, this solution corresponds to the point .    Let's solve the following:    Maximize , subject to        Use Phase II of the Simplex method to find the optimal solution of .   First, write the constraints with slack variables:     where all variables need to be nonnegative or and the objective function can be written as   Next, write these in tableau form. The above step is not needed, but may be helpful.     and then we use Phase II of the Simplex Method. We first check if it is optimal, but since there are negative numbers in the objective (bottom) row, this is not optimal. To determine the pivot note we start with the leftmost negative number in the objective row or column 1 and form the -ratio or     and smallest nonegative above is 14 in the 3rd row. (this corresponds to the variable). Therefore we perform a matrix pivot on row 3, column 1, which corresponds to the tableau pivot of .     Check if the objective row has negatives and it does in column 2. Again form -ratio for this column or     and the smallest nonnegative ratio is in the first row, so we will do a matrix pivot at row 1, column 2, and this corresponds to the tableau pivot of .     There are still negatives in the objective row, so this is not optimal. The leftmost negative in the objective row is in column 5, so we form -ratio for this column or     and the smallest nonegative value is in row 2, so we will perform a matrix pivot at row 2, column 5, corresponding to the tableau pivot of . The new tableau is:     This is still not the optimal solution (there in a negative in the objective row), so again we form -ratio for column 3 or     and the smallest ratio is in row 4. So we perform a matrix pivot at row 4, column 3, corresponding to the tableau pivot of . The resulting tableau is     And now the tableau is in optimal form there are no negatives in the objective row. The basic solution for this is resulting the objective of .    "
},
{
  "id": "sect-tableau-3-2",
  "level": "2",
  "url": "sect-tableau.html#sect-tableau-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tableau "
},
{
  "id": "sect-tableau-3-12",
  "level": "2",
  "url": "sect-tableau.html#sect-tableau-3-12",
  "type": "Checkpoint",
  "number": "3.2.1",
  "title": "",
  "body": " Read the basic solution off a tableau.  "
},
{
  "id": "def-std-max-form",
  "level": "2",
  "url": "sect-tableau.html#def-std-max-form",
  "type": "Definition",
  "number": "3.2.2",
  "title": "",
  "body": "  A LOP is in standard form if the following are conditions are met:   It is a maximum problem.    All the constraints are of the form , some constant.    All variables are nonnegative.      "
},
{
  "id": "alg-simplex-phaseII",
  "level": "2",
  "url": "sect-tableau.html#alg-simplex-phaseII",
  "type": "Algorithm",
  "number": "3.2.3",
  "title": "Phase II of Simplex Method.",
  "body": " Phase II of Simplex Method   If a tableau is feasible, then the following steps are Phase II of the simplex method:     If there are no negative numbers in the objective row, the basic solution is optimal.    Choose the leftmost negative number in the objective row. This is the pivot column . The variable that corresponds to the th column is called the entering variable since this variable is entering the basis.    Crease the b-ratio or for all and for , the pivot column.    Choose such that the b-ratio is the smallest nonnegative ratio . The basic variable corresponding to the th row is called the leaving variable .    Pivot about element of the tableau. Goto step 1.      "
},
{
  "id": "sect-tableau-6-4",
  "level": "2",
  "url": "sect-tableau.html#sect-tableau-6-4",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": "  Consider a LOP with the following tableau:     Note first that the basic solution is feasible because the right column has no negative numbers. Therefore, use Phase II of the Simple method to find the solution.    First, note that the objective row (bottom) has negative numbers, so this isn't an optimal solution. We select the left-most negative number in this row, which is column 1.  We compute the -ratio with     and the small non-negative ratio is in the second row. Therefore we perform a pivot about the second row, first column. Note: since will leave the basis and will enter, then the tableau pivot is .  After performing the matrix pivot we get:     Examining this tableau, there is still a negative number in the objective row, which means that this is not an optimal solution. Therefore, we find the -ratios using the 2nd column or     and since the smallest non-negative number is in the first row, the next step is to perform a matrix pivot about the first row, second column. This corresponds to the tableau pivot of resulting in     Now notice that the objective row has no more negative numbers in it. This means that the basic solution of is optimal. The objective value is . Note that using the original variables, this solution corresponds to the point .   "
},
{
  "id": "prob-lop2",
  "level": "2",
  "url": "sect-tableau.html#prob-lop2",
  "type": "Problem",
  "number": "3.2.5",
  "title": "",
  "body": "  Maximize , subject to      "
},
{
  "id": "sect-tableau-6-7",
  "level": "2",
  "url": "sect-tableau.html#sect-tableau-6-7",
  "type": "Checkpoint",
  "number": "3.2.6",
  "title": "",
  "body": " Use Phase II of the Simplex method to find the optimal solution of .   First, write the constraints with slack variables:     where all variables need to be nonnegative or and the objective function can be written as   Next, write these in tableau form. The above step is not needed, but may be helpful.     and then we use Phase II of the Simplex Method. We first check if it is optimal, but since there are negative numbers in the objective (bottom) row, this is not optimal. To determine the pivot note we start with the leftmost negative number in the objective row or column 1 and form the -ratio or     and smallest nonegative above is 14 in the 3rd row. (this corresponds to the variable). Therefore we perform a matrix pivot on row 3, column 1, which corresponds to the tableau pivot of .     Check if the objective row has negatives and it does in column 2. Again form -ratio for this column or     and the smallest nonnegative ratio is in the first row, so we will do a matrix pivot at row 1, column 2, and this corresponds to the tableau pivot of .     There are still negatives in the objective row, so this is not optimal. The leftmost negative in the objective row is in column 5, so we form -ratio for this column or     and the smallest nonegative value is in row 2, so we will perform a matrix pivot at row 2, column 5, corresponding to the tableau pivot of . The new tableau is:     This is still not the optimal solution (there in a negative in the objective row), so again we form -ratio for column 3 or     and the smallest ratio is in row 4. So we perform a matrix pivot at row 4, column 3, corresponding to the tableau pivot of . The resulting tableau is     And now the tableau is in optimal form there are no negatives in the objective row. The basic solution for this is resulting the objective of .  "
},
{
  "id": "sect-phase1",
  "level": "1",
  "url": "sect-phase1.html",
  "type": "Section",
  "number": "3.3",
  "title": "Simplex Method for Infeasible Tableaus",
  "body": " Simplex Method for Infeasible Tableaus   Consider Problem , in which coffee is shipped from warehouses to retail outlets. The problem was set up as an LOP in and we can use the techniques from the previous section to write this as the following tableau.  First, as discuss in ???, we need to write this problem in standard form, which means switching two of the inequalites by negating them. Also, the objective needs to be written as a maximum. The LOP in standard maximum form is     And the next step is to write the LOP in tableau form,     Typically, we look at the objective row to determine if a tableau is optimal and the there are no negatives in this row, so it appears it is optimal. However, if we look at the basic solution of     and note that this is an infeasible basic solution. Before solvnig this problem, let's use a smaller problem to develop the simplex method for this situation.    Infeasible Tableaus  Let's consider the following LOP:     And this can be written in standard form as     A plot of this feasible set is:        If we introduce slack variables then in Dictionary form this is     As we saw in and , that this tableau is infeasible. That is the basic solution is not feasible which makes sense because when the basic variables are the original variables, the current basic solution is at the origin, which is not in the feasible set.  As in the Phase II simplex method, we can perform a pivot. The dictionary in shows that the basis is and parameters We will remove and from the basis and thus have two choices to bring in either or . There are four cases here. Let's see what happens with each.      Let's try by bringing out of the basis. If we solve the 2nd equation in for (or actually ) we get     and then substituting this into the other equations (and multiplying through by a 4) gives the new dictionary     Notice that this is still infeasible and because the coefficients of the variables in the objective function were negative, the value of has decreased .     If instead we can solve the third equation of for to get:     and subsitute this into the other equations of to get:     And notice that this is a feasible solution now. We compare what happened here. In the first possible pivot, we brought into the basis and in the second, we brought into the basis. In the second possible step, why did we get a feasible solution, whereas we didn't on the first one.     In this case, we solve the 2nd equation in for or     and substitute these into the other two equations to get:        This can be explained looking at the feasible set in . Again, the initial dictionary has a basic solution of , which is at the origin. The pivot shifts the basic solution to the point because this is the line. Alternatively, the pivot shifts the basic solution to point , which is in the feasible set.  So we need to determine from the dictionary (or more likely from the tableau) how to determine which pivot will make it feasible.   "
},
{
  "id": "fig-infeasible-1",
  "level": "2",
  "url": "sect-phase1.html#fig-infeasible-1",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": "     "
},
{
  "id": "sect-intro-ilops",
  "level": "1",
  "url": "sect-intro-ilops.html",
  "type": "Section",
  "number": "4.1",
  "title": "Introduction to Integer Linear Optimization Problems",
  "body": " Introduction to Integer Linear Optimization Problems    "
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
