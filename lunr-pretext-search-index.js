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
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "  To the Student  I decided to write this book to give you an accessible text in this field. There is a fantastic book by Glenn Hurlbert which I recommend you picking up if you have the resources. That books often leaves the details to the student (that's the purpose of the text), and I found that wasn't always the best for you. It also was lacking in any technology, which is a must for this class. I feel that showing how to perform the steps with technology is key to understanding the material    "
},
{
  "id": "sect-lines-planes",
  "level": "1",
  "url": "sect-lines-planes.html",
  "type": "Section",
  "number": "1.1",
  "title": "Lines and Planes",
  "body": " Lines and Planes     Write a line in intercept form and use the line to produce a plot.    Plot the set of points defined by a set of inequalities and define this as a feasible set .    Determine if a feasible set is bounded or unbounded.    Define a plane and hyperplane as a linear equation.    Define a convex set.      I'm guessing that if you are reading this book (either you picked it up or have been assigned it) that you have a fair bit of mathematical background. That being said, I'm guessing that you are quite familiar with lines you may even be embarrassed if you are seen reading a section on lines. However, review is nearly always good and seeing the context of old material in a new way expands your thinking. In short, it will be worth your while to read through this chapter.    Lines  When most mathematics students are asked about lines, the response is , the slope-intercept form of the line. This is often presented in a Precalculus class in which linear functions fall from this naturally. However, not all lines can be written in this form. The exception is vertical lines, like .  Instead, we will use the general form of the line or     as long as and are both not zero, A nice way to ensure this is . and the in this formula is not the -intercept. This form allows horizontal, vertical and any oblique lines.  This form is quite nice in that if is zero, then the line is horizontal, if is zero, then the line is vertical and if both are non-zero then the line is oblique with -intercept of , -intercept of and slope of . If we take the line in with and divide through by , this can take on the intercept form of the line :     and in this form the -intercept is and the -intercept is .    Put the line given by into intercept form and find the intercepts.    Divide through by 30 to get     This shows that the -intercept is 10 and the -intercept is 6.    The above example showed how we can use the intercept form to easily read off the intercepts. The following exercise will use these to plot the lines.    Plot the following lines: , , and on the same axes. Note: do this by hand instead of graphing calculator\/website\/software.    Use the information above to note if it is horizontal, vertical or oblique and in the latter case, use intercepts to plot the line.    In this case, note that the first line is vertical, the second is horizontal. For the third line, divide through by and simplify to     which will have the intercepts and and the last line can be simplified to     which will have the intercepts and .   A graph of the lines and with the result shaded.   The graph of the equation is a vertical line passing through the point and extending in both directions. The graph of the equation is a horizontal line passing through the point and extending in both directions. The graph of the equation is a line passing through the intercepts and . The graph of the equation is a line passing through the intercepts and .         Linear Inequalities  Related to lines is that of linear inequalities. Consider the inequality and let be the set of all points that satisfy the inequality. The line cuts the -plane into two regions and in this case, the line is included in the set .  Which side of the line satisfies the inequality? Since every point that is not on the line either satisfies the inequality or not, we can pick any point to determine this. For example in the line above, an easy point to pick is and since is true, then the side of the line containing the origin is in the set. The following is plot:   A plot of the inequality and the shaded part is the set of points that satisfy the inequality.   A graph of that passes through the points and as well as shading the plane below and left of the line.     The set that satisfies the inequality we have labelled and shaded in light gray. When combined with other inequalities, we often call the set a feasible set , hence labelling it as .  As we will see throughout this book, it is common that there are multiple inequalities. For example, let's add the inequality to the inequality above and determine the set of points that satisfy both inequalities. There are two techniques that can be used.   Technique 1: Graph and Choose . First, let's plot the two lines (ignoring the inequality) and . The first line is in slope-intercept form and the second was plotted above. A plot with both graphs is   A graph of the lines and , which cuts the plane into four regions. These are numbered 1 through 4.   The line and cuts the -plane into four regions numbered 1 through four where 1 is in the south part of the plot, and continues clockwise to 4, in the east side of the plot.     The 2 lines split the plane into four regions and only one of these satisfies both inequalities. If we pick four points (one for each region), we can determine the feasible set. The following table does this formally.   Evaluation of inequalities    Region #  Point      1  (0,0)  true  false    2  (0,2)  true  true    3  (1,4)  true  false    4  (3,2)  false  false     From , region 2 satisfies both inequalities. Therefore this is the feasible set together with the lines that are the boundary of region 2.  This technique will work however, as the number of lines increases it become increasingly difficult to plot and determine all of th inequalities. The next technique is often more desirable.   Technique #2: Cross Out Regions Instead, we start with one line and then cross out the region not in the feasible set. Each subsequent inequality, we repeat. After all inequalities are examined, the region (if one exists) that is not crossed out is the feasible set. Performing this technique with the same pair of equalities, we'll start with the inequality . We've already seen this and will cross out the region in the northeast part.   A graph of the line and the side of the line that does not satisfy the inequality is crossed out.   A graph of the line (running northweast to southeast) and the side of the line that does not satisfy the inequality is crossed out on the northeast side.     Now we will add the second inequality, . Graph the line and then cross out the region that does not satisfy the inequality. Note that this is the southeast side of the line.   A graph of the lines and with the corresponding inequalities crossed out. The feasible set is labelled   A graph of the line (running northweast to southeast) and the side of the line that does not satisfy the inequality is crossed out on the northeast side. Also, included is a graph of the line which runs southwest to northeast. The side the line that does not satisfy the inequality is on the southeast side. The feasible set is the part of the plane to the west that is not crossed out.     From , the region not crossed out is the feasible set and is the same that was found with Technique #1 as shown in . Although either technique will result in the correct answer, this one is generally faster to perform with a large number of inequalities.    Find the feasible set for the following set of inequalities       In this case, we'll graph and cross out the false side of each line. The first two lines are the coordinate axes. The 3rd and 4th lines can be written in intercept form as     So the 3rd line has the intercepts and . The 4th line has the intercepts and .   The feasible set of the given inequalities. The side of the line not in the feasible set is crossed out and the remaining region is the feasible set and labelled         and from the plot, the region in the northeast section that is not crossed out is the feasible set.  Note: as we will see throughout this book, it is common that we have a nonnegative constraint, like and . With only two variables, this means outside the first quadrant is crossed out.      Bounded and Unbounded Feasible Sets  Another feature of feasible sets is that of being bounded. For feasible sets in the plane, a feasible set that is a polygon (interior as well as its boundary), is bounded. For example, in , we will see the feasible set be set defined by     which can be plotted as   A graph of the feasible set of the above problem. For each inequality, the side of the line not in the feasible set is crossed out. The set of points left is the feasible set for the inequalities and labelled .        The feasible set is the interior of the polygon together with its boundary and appears to be bounded. In contrast, the feasible set in is not a polygon and the feasible set extends without bound. The definition below is more general for a feasible set in any dimension.  Before defining a bounded feasible set, we need the following:    A ball in centered at the origin is the set points       A ball in is the circle with its interior. In , it is a sphere with its interior.  With the knowledge of a ball, we can now define a bounded feasible set.    A feasible set, in is bounded , if there exists a ball centered at the origin, such that . If no ball exists, the set is unbounded .    The feasible set in is bounded because the ball with radius 8 would encompass the feasible set. The feasible set in has no ball that encompasses it, so is unbounded.    Planes and Hyperplanes  A linear equation in three variables is a plane . For example the equation describes points in , the set of all three-dimensional space. Like a line in , it extends indefinitely and is flat. The following shows a plot of the plane .   A plot of the plane in . If reading on the web, this figure is interactive and the orientation can be changed.        We will encounter inequalities involving three variables. As seen in two dimensions, the feasible set will be the set of all points satisfying all of inequalities. It is difficult to graph this, but one can imagine that in three dimensions, the same ideas hold as those above. For example, one can cross out the side of the plane that is not in the feasible set and then the region in is the region not crossed out.   A plot of a feasible set of in . If this is being viewed in a web browser, the graph should be interactive in that it can be rotated.        Linear equations with more than 3 variables are often called hyperplanes. Although impossible to graph, these work the same ways as lines and planes in that the cut the Euclidean space in half.    Convex Sets  As we will see later, a convex feasible set is key to the simplex method working. What does convex mean? We will explore this and show that a feasible set constructed of linear inequalities is always convex.    A set in is convex if for any two points and in that all points in the line segment connecting and is in      Note: a line segment between points and can be written     As moves from 0 to 1, a point on moves from to .   In two dimensions, a convex set is a set in such that its boundary is convex in the standard sense. Sets like the interior of circles, rectangles and the inside of parabolas are examples. To get a sense of this, the sets consisting of the interior of the following objects are convex:   Examples of convex sets (interiors of circles and polygons). Example line segments are shown within the figures.        Although example line segments are shown drawn within the figures in , recall that in order to be convex, all line segments need to be within the set, not just an example line segment.  Some examples of sets that are not convex are shown in . A line is shown in blue with point endpoints that are in the set, but the are parts of the line that are not in the set. Recall that a set that is not convex just needs a single line segment with endpoints in the set and some part of the line segment passes outside the set.   The interior of these shapes are not convex. Example line segments are drawn which have points that are outside the shape (sets).        The next lemma states the seemingly obvious fact that splitting the plane with a linear inequality results in a convex set.    Let with and . The set is convex.    Let and be two points in . The line segment between them is the parametric equation     To show convexity, the line segment must be in . That is,     And since the both points and are in , then , the line segment is in , therefore the set is convex.    This showed that the linear inequality in is convex, however this is true in any dimension.    Let and for constants. The set is convex.    This lemma is the first step in showing the general convexity of more complex sets. The next one will give the next step.    Let and be two convex sets. The intersection is convex.    The proof is left to the reader.   "
},
{
  "id": "sect-lines-planes-2",
  "level": "2",
  "url": "sect-lines-planes.html#sect-lines-planes-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "   Write a line in intercept form and use the line to produce a plot.    Plot the set of points defined by a set of inequalities and define this as a feasible set .    Determine if a feasible set is bounded or unbounded.    Define a plane and hyperplane as a linear equation.    Define a convex set.    "
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
  "id": "sect-lines-6",
  "level": "2",
  "url": "sect-lines-planes.html#sect-lines-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intercept form of the line "
},
{
  "id": "sect-lines-9",
  "level": "2",
  "url": "sect-lines-planes.html#sect-lines-9",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  Put the line given by into intercept form and find the intercepts.    Divide through by 30 to get     This shows that the -intercept is 10 and the -intercept is 6.   "
},
{
  "id": "sect-lines-11",
  "level": "2",
  "url": "sect-lines-planes.html#sect-lines-11",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "",
  "body": "  Plot the following lines: , , and on the same axes. Note: do this by hand instead of graphing calculator\/website\/software.    Use the information above to note if it is horizontal, vertical or oblique and in the latter case, use intercepts to plot the line.    In this case, note that the first line is vertical, the second is horizontal. For the third line, divide through by and simplify to     which will have the intercepts and and the last line can be simplified to     which will have the intercepts and .   A graph of the lines and with the result shaded.   The graph of the equation is a vertical line passing through the point and extending in both directions. The graph of the equation is a horizontal line passing through the point and extending in both directions. The graph of the equation is a line passing through the intercepts and . The graph of the equation is a line passing through the intercepts and .      "
},
{
  "id": "fig-example-inequality",
  "level": "2",
  "url": "sect-lines-planes.html#fig-example-inequality",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " A plot of the inequality and the shaded part is the set of points that satisfy the inequality.   A graph of that passes through the points and as well as shading the plane below and left of the line.    "
},
{
  "id": "sect-linear-inequality-5",
  "level": "2",
  "url": "sect-lines-planes.html#sect-linear-inequality-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "feasible set "
},
{
  "id": "fig-example-two-lines",
  "level": "2",
  "url": "sect-lines-planes.html#fig-example-two-lines",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": " A graph of the lines and , which cuts the plane into four regions. These are numbered 1 through 4.   The line and cuts the -plane into four regions numbered 1 through four where 1 is in the south part of the plot, and continues clockwise to 4, in the east side of the plot.    "
},
{
  "id": "tab-regions",
  "level": "2",
  "url": "sect-lines-planes.html#tab-regions",
  "type": "Table",
  "number": "1.1.6",
  "title": "Evaluation of inequalities",
  "body": " Evaluation of inequalities    Region #  Point      1  (0,0)  true  false    2  (0,2)  true  true    3  (1,4)  true  false    4  (3,2)  false  false    "
},
{
  "id": "fig-example-inequality-2",
  "level": "2",
  "url": "sect-lines-planes.html#fig-example-inequality-2",
  "type": "Figure",
  "number": "1.1.7",
  "title": "",
  "body": " A graph of the line and the side of the line that does not satisfy the inequality is crossed out.   A graph of the line (running northweast to southeast) and the side of the line that does not satisfy the inequality is crossed out on the northeast side.    "
},
{
  "id": "fig-example-inequality-3",
  "level": "2",
  "url": "sect-lines-planes.html#fig-example-inequality-3",
  "type": "Figure",
  "number": "1.1.8",
  "title": "",
  "body": " A graph of the lines and with the corresponding inequalities crossed out. The feasible set is labelled   A graph of the line (running northweast to southeast) and the side of the line that does not satisfy the inequality is crossed out on the northeast side. Also, included is a graph of the line which runs southwest to northeast. The side the line that does not satisfy the inequality is on the southeast side. The feasible set is the part of the plane to the west that is not crossed out.    "
},
{
  "id": "fig-feasible-set-unbounded",
  "level": "2",
  "url": "sect-lines-planes.html#fig-feasible-set-unbounded",
  "type": "Checkpoint",
  "number": "1.1.9",
  "title": "",
  "body": "  Find the feasible set for the following set of inequalities       In this case, we'll graph and cross out the false side of each line. The first two lines are the coordinate axes. The 3rd and 4th lines can be written in intercept form as     So the 3rd line has the intercepts and . The 4th line has the intercepts and .   The feasible set of the given inequalities. The side of the line not in the feasible set is crossed out and the remaining region is the feasible set and labelled         and from the plot, the region in the northeast section that is not crossed out is the feasible set.  Note: as we will see throughout this book, it is common that we have a nonnegative constraint, like and . With only two variables, this means outside the first quadrant is crossed out.   "
},
{
  "id": "fig-feasible-bounded",
  "level": "2",
  "url": "sect-lines-planes.html#fig-feasible-bounded",
  "type": "Figure",
  "number": "1.1.11",
  "title": "",
  "body": " A graph of the feasible set of the above problem. For each inequality, the side of the line not in the feasible set is crossed out. The set of points left is the feasible set for the inequalities and labelled .       "
},
{
  "id": "def-ball",
  "level": "2",
  "url": "sect-lines-planes.html#def-ball",
  "type": "Definition",
  "number": "1.1.12",
  "title": "",
  "body": "  A ball in centered at the origin is the set points      "
},
{
  "id": "def-bounded-feasible-set",
  "level": "2",
  "url": "sect-lines-planes.html#def-bounded-feasible-set",
  "type": "Definition",
  "number": "1.1.13",
  "title": "",
  "body": "  A feasible set, in is bounded , if there exists a ball centered at the origin, such that . If no ball exists, the set is unbounded .   "
},
{
  "id": "sect-planes-2",
  "level": "2",
  "url": "sect-lines-planes.html#sect-planes-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "plane "
},
{
  "id": "fig-plane",
  "level": "2",
  "url": "sect-lines-planes.html#fig-plane",
  "type": "Figure",
  "number": "1.1.14",
  "title": "",
  "body": " A plot of the plane in . If reading on the web, this figure is interactive and the orientation can be changed.       "
},
{
  "id": "fig-plane-2",
  "level": "2",
  "url": "sect-lines-planes.html#fig-plane-2",
  "type": "Figure",
  "number": "1.1.15",
  "title": "",
  "body": " A plot of a feasible set of in . If this is being viewed in a web browser, the graph should be interactive in that it can be rotated.       "
},
{
  "id": "sect-planes-6",
  "level": "2",
  "url": "sect-lines-planes.html#sect-planes-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperplanes. "
},
{
  "id": "def-convex",
  "level": "2",
  "url": "sect-lines-planes.html#def-convex",
  "type": "Definition",
  "number": "1.1.16",
  "title": "",
  "body": "  A set in is convex if for any two points and in that all points in the line segment connecting and is in    "
},
{
  "id": "sect-convex-4",
  "level": "2",
  "url": "sect-lines-planes.html#sect-convex-4",
  "type": "Note",
  "number": "1.1.17",
  "title": "",
  "body": " Note: a line segment between points and can be written     As moves from 0 to 1, a point on moves from to .  "
},
{
  "id": "fig-convex-objects",
  "level": "2",
  "url": "sect-lines-planes.html#fig-convex-objects",
  "type": "Figure",
  "number": "1.1.18",
  "title": "",
  "body": " Examples of convex sets (interiors of circles and polygons). Example line segments are shown within the figures.       "
},
{
  "id": "fig-non-convex-objects",
  "level": "2",
  "url": "sect-lines-planes.html#fig-non-convex-objects",
  "type": "Figure",
  "number": "1.1.19",
  "title": "",
  "body": " The interior of these shapes are not convex. Example line segments are drawn which have points that are outside the shape (sets).       "
},
{
  "id": "lem-convex-one-inequality",
  "level": "2",
  "url": "sect-lines-planes.html#lem-convex-one-inequality",
  "type": "Lemma",
  "number": "1.1.20",
  "title": "",
  "body": "  Let with and . The set is convex.    Let and be two points in . The line segment between them is the parametric equation     To show convexity, the line segment must be in . That is,     And since the both points and are in , then , the line segment is in , therefore the set is convex.   "
},
{
  "id": "lem-lin-inequality-Rn",
  "level": "2",
  "url": "sect-lines-planes.html#lem-lin-inequality-Rn",
  "type": "Lemma",
  "number": "1.1.21",
  "title": "",
  "body": "  Let and for constants. The set is convex.   "
},
{
  "id": "sect-convex-15",
  "level": "2",
  "url": "sect-lines-planes.html#sect-convex-15",
  "type": "Lemma",
  "number": "1.1.22",
  "title": "",
  "body": "  Let and be two convex sets. The intersection is convex.   "
},
{
  "id": "sect-plotting-software",
  "level": "1",
  "url": "sect-plotting-software.html",
  "type": "Section",
  "number": "1.2",
  "title": "Using Software for Plotting",
  "body": " Using Software for Plotting     Using Desmos or other software to plot lines and linear inequalities.      Plotting Lines  Software can help with the plotting of lines, planes and linear inequalities. In , the equation and linearly inequality was plotted.  Visit Desmos which will look like:     (for accessibility)    Enter 3x+4y=12 in the first box (outlined in blue) and you should see     (for accessibility)    Additional lines can be plotted by adding them to the box below the previous line. For example, enter y=2x=3 results in     (for accessibility)      Plotting Inequalities and Feasible Sets  Inequalities can also be plotted. Return to desmos and remove all equations by hitting the X on the right side of each entry box. Now add 3x+4y ≤ 12 where Demos will automatically convert <= to ≤ . The resulting plot will be     (for accessibility)    Note that the colors of all the plots may be different. Desmos usually cycles through the colors in a specific manner, but this may differ as you enter equations.  The graph shows both the line as solid and the color as a light green indicating that the region below and left of the line is part of the inequality.  This idea can be extended to plotting sets of inequalities to arrive at a feasible set. Recall that in the set of inequalities:     was plotted. If we add the second inequality to Demos we get     (for accessibility)    With only two inequalities, visually the overlap (the set of points that satisfy both inequalities) is reasonably easy to see, however, as these grow, it can be more difficulty to see. One way is to plot the opposite inequality and then area of the plane with no coloring would be the resultant set.    Use Desmos to plot the region that satisfies the following:       We open up Desmos and add all three of the inequalities, except switching each inequality. The result is     (for accessibility)    The set of points that satisfy the three inequalities is the triangular region without any shading.      Graphing Planes  As we saw in , planes are another example of linear functions that we will encounter in this text. Desmos also has a 3D graphing calculator . Open up the webpage and it will look like the regular graphing calculator, however the default axes are in .  Add x+2y+3z=12 to the plot and you should get a plane. Spin the axes around and zoom in and out with the + and - buttons. You may get something that looks like     (for accessibility)    Inequalities can also be plotted, however, they are difficult to read. For example, change the in the previous plane to a or and you will see that half of the space is now colored red (in my case). However, adding another inequality will be quite difficult to see the intersecting region.   "
},
{
  "id": "sect-plotting-software-2",
  "level": "2",
  "url": "sect-plotting-software.html#sect-plotting-software-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "   Using Desmos or other software to plot lines and linear inequalities.    "
},
{
  "id": "fig-desmos",
  "level": "2",
  "url": "sect-plotting-software.html#fig-desmos",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "fig-desmos-line-plot",
  "level": "2",
  "url": "sect-plotting-software.html#fig-desmos-line-plot",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "fig-desmos-two-lines",
  "level": "2",
  "url": "sect-plotting-software.html#fig-desmos-two-lines",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "fig-desmos-inequality",
  "level": "2",
  "url": "sect-plotting-software.html#fig-desmos-inequality",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "fig-desmos-two-inequalities",
  "level": "2",
  "url": "sect-plotting-software.html#fig-desmos-two-inequalities",
  "type": "Figure",
  "number": "1.2.5",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "sect-plotting-inequalities-11",
  "level": "2",
  "url": "sect-plotting-software.html#sect-plotting-inequalities-11",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "  Use Desmos to plot the region that satisfies the following:       We open up Desmos and add all three of the inequalities, except switching each inequality. The result is     (for accessibility)    The set of points that satisfy the three inequalities is the triangular region without any shading.   "
},
{
  "id": "fig-desmos-plane",
  "level": "2",
  "url": "sect-plotting-software.html#fig-desmos-plane",
  "type": "Figure",
  "number": "1.2.8",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "sect-matrix-reduction",
  "level": "1",
  "url": "sect-matrix-reduction.html",
  "type": "Section",
  "number": "1.3",
  "title": "Matrices and Matrix Reduction",
  "body": " Matrices and Matrix Reduction   Matrices are generally presented in either a linear algebra or matrix methods class. The material presented here is some basics behind matrices that are needed for performing linear optimization. This should be review for most readers of the text, but is helpful for the context and notation later in the text.    Linear Systems  Let's start with an example.   Traffic Flow   A simple model of traffic flow can be represented by the following graph:   A map of a few streets in Boston where the arrows denote the direction of traffic flow (all of these streets are one-way) and the numbers represent the numbers of cars driving down the street in a given time period. The letters through will be the names of the intersections.      Write down the equations that balance each of the numbers of cars entering and leaving each of the intersections and .    In this case, we have:     for intersections , , and respectively.         A linear combination of has the form     where the constants are the combinations coefficients.    A linear equation has the form     where is a constant and . These are the lines, planes and hyperplanes discussed in .    The -tuple  satisfies or is a solution of if this point satisfies or       A system of linear equations or linear system is a set of linear equations:     and this linear system has equations and unknowns (variables). The equations in is an example of a linear system.    The -tuple  satisfies or is a solution of if this point satisfies every equation of .        Linear Equations  The following are linear equations:     where summation notation has been used in the last one and note the variable names can vary. The following equations are not linear:     Each of the equations in the latter group have multiplications, squares, division or other functions between variables.   The next two examples give a way to determine if a point or -tuple is a solution to a linear system.   Showing a Point is a Solution to a Linear System   Show that the point is a solution of the linear system:       Substitute and into both equations and check.     Since each equation is satisfied at the point is a solution to the linear system.      Show that and are both solutions to the linear system in .    In each case, the values must satisfy each equation. In the first case:     and since equation equation is satisfied, it is a solution. In the second case:     and again, each equation is satisfied.  This shows that the linear system in has more than one solution. In this case, there are different traffic levels that satisfy the equations.      Elementary Row Operations   We now seek a method to solve the above linear systems (and any linear system). Gauss' method and variations of it are the standard ways that all large linear systems are solved presently. The next section shows how to systematically solve a linear system using rules of algebra that keep linear equations linear.  Consider the following example of two linear equations:     We seek to find operations on these equations that keep these equations linear and don't change the solution. First, the order that we wrote them down doesn't matter and we could swap these equations as in:     The second possible operation is to multiply a single equation by a constant. For example, if we multiply by 2, we get the system:     The third operation is that we can add two equations and the replace one of the equations with the sum. For example adding and and putting the sum in the 2nd row results in     A more common operation is to combine the last two operations and that is to multiply an equation by a constant and add to another. If we multiply by 2 and add to we get the system:      Elementary Row Operations   The three operations    Two equations of the linear system are swapped,  An equation is multiplied by a nonzero number,  An equation is replaced by the sum of itself and a multiple of another equation,    are called the elementary row operations of a linear system.      Gauss's Method  The following example shows how to use the elementary row operations seen above to solve a linear system with a technique called Gauss's Method .     If one equation had only one variable, it would be quite easy to find the solution to that equation. The following steps will result in such a system. For example, if the first equation is multiplied by and added to the second equation and the second equation is replaced (which we denote with ), then the above equations are replaced with     Next, we'd like to get rid of the term in the 3rd equation. We can do that by multiplying the first equation by 3 and adding to the 3rd and writing down this operation as well we get:     Next we will eliminate the term in the 3rd equation. We can do that by adding equations 2 and 3 and putting the result in equation 3.     At this point we can solve for in the third equation of to get . From this, plug in into the second equation of to get     and finally we can use and to substitute into the first equation of to get     therefore, . The point is a solution to linear system. Because this is the only point that satisfies all equations, this point is unique . We will also use the terminology triple to describe .   Gauss's Method   If a linear system ( ) is changed into a second linear system ( ) by one of the elementary row operations then linear systems ( ) and ( ) have the same set of solutions.    We will consider only the first operation in this proof. Let's assume that we swap equations and , thus system ( ),     is transformed to     Let be a solution of ( ) if it exists and note it may be one of many -tuples in the solution. Thus it satisfies each equation of linear system ( ). Since the exact same equations are in ( ) in just a different order, is a solution to ( ). If there is more than one -tuple in the solution to ( ), repeat this for every one. If there is no solution to ( ), then there will be no solution to ( ) since it is the same set of equations.  Proof of #2 and #3 above are quite similar and are not shown.     Although Gauss' Method is very flexible, generally, one tries to eliminate all terms in all equations below equation 1, terms in all equations below equation 2 and so on.      Matrices  When we solved a linear system above, you probably noticed that the variables didn't play much of a role, the coefficients changed and the variables stayed in the same place as we solved for them. Because of this, we will adopt that technique to only works with the coefficients. We first define a matrix that we will use to solve linear systems for the rest of this book.    An by matrix is a rectangular grid of numbers with rows and columns. The size of a matrix is the pair of number and and is typically written by or . Each number of the matrix is called the entry or element .     Matrices  The following are examples of matrices:      A common notation for a matrix is to use upper case letters (and often bold), for example , and are common matrices. The entry or element in the th row and th column of is . Also, the set of all by matrices is denoted .    A matrix with only 1 row is called a row vector . A matrix with only 1 column is called a column vector . The size of a vector is the number of rows (for a column vector) or the number of columns (for a row vector).    The 3rd matrix in above is a column vector of size 5. The 4th matrix is a row vector of size 3. Vectors are very important and will see them throughout this book.    Matrices and Linear Systems  Let's look at the following linear system.     We will write the coefficients of the variables and the right hand side in a matrix called an an augmented coefficient matrix. The following is this matrix for the linear system above.     and the two rows of the matrix represent the two equations. The first column represents the coefficient of the variable, and the second column represents the coefficient of the variable. The last column is the right hand sides of the linear system, and the vertical line occurs where the equal sign is in the equations.   Linear System as an Augmented Matrix   Write down the following linear system as an augmented matrix:            And the next example shows how to rewrite a matrix as a linear system.   Augmented Matrix as a Linear System   Write down the following augmented matrix as a linear system:       In this case, we are doing the opposite of the step above. That is, take a matrix and find the linear system.  Since the matrix has 4 columns, there are 3 variables (the last column is the right hand side). Let's use , and .     Alternatively, we could have used and as variables.      Row Operations and Matrices  We can perform the same row operations that we have seen above on matrices.     Row Swap   swaps rows and .    Multiply by a number   multiplies row by . The notation is also used.    Multiply by a number and add to another   multiplies row by and adds to row . The notation is also used.     In the next section, we will formalize the solving of linear system using matrices, however, the last example here reproduces the same solution technique for the example in .    Solve the linear system     by first writing as an augmented coefficient matrix and then performing elementary row operations on the matrix.    First, the augmented coefficient matrix is     Now perform the same elementary row operations as above. We first seek to change the second row, first column to a 0     and notice that this is the matrix representation of the second step in the solution listed in . Next, we seek to change the 3rd row, first column from to a 0.     And since we seek to get only a single variable in the third row, only one more step is needed.     At this point, if we return the augmented matrix to a set of equations, we get     and we can get the same solution using the same steps as above to get .    We will see in the next section that actually if we continue working with the matrix, we can more easily find the solution as well as find solutions for a broader range of linear systems.    Solve     using Gauss-Jordan Elimination    If this is done \"by hand\", one would probably swap rows 1 and 4 to get a 1 in the upper left, however let's skip and get a 1 there by dividing through by , then eliminate the rest of the column:     Typically we now want to get a 1 in the 2nd row, 2nd column of the matrix and can be done by multiplying row 2 by and then eliminating the rest of the column with     Lastly, we will make row 3, column 3 a 1 and then use this to eliminate the rest of the 3rd column with     And this reveals the solution is the vector       Put the linear system from in a augmented coefficient matrix and use row operations to put the matrix in reduced row-echelon form.    First, ensure that all of the variables are on the left of the equations in and the constants on the right. This can be written as the augmented coefficient matrix,     Row operations are now performed        A fourth operation  Another handy row operation is that of replacing a row with linear combination of itself and another row. In general this is     Since this is a combination of two row operations together, we will use it, however, not consider it a separate (fourth) row operation.     Matrix Pivots  The technique of getting a 1 somewhere in a column and 0's elsewhere is known as performing a matrix pivot . In fact, this is what was done in and is the standard step in performing Gauss-Jordan Elimination in the goal to get a matrix in reduced row-echelon form.  If we desire a 1 at row in column , then the following row operations will produce this 1 and zeros throughout the remainder of the column. Let the matrix have coefficients .     The step     will get a 1 at row , column .    The step     will zero out the rest of the column. This is called the elimination step .     If we look at , then these steps succeeded in producing the desired structure, however, notice that it introduces fractions and always will if the pivot is not a 1. If we adapt the steps above, we can perform a pivot that keeps fractions at bay. Realistic matrices will often have non integer entries, so this technique does not work in general, however it does make operations on integer matrices easier to do and there are a number of realistic matrices contain only integers.    Fraction Free Pivot   If the matrix has only integer entries, then the following will perform a fraction-free pivot at row , column , which will eliminate a column, but not produce a 1 at the pivot point. The result will be a matrix with all integer entries.  Let be the coefficient of a matrix (and an integer). If , then perform: Then the following row operations     will eliminate column .  Lastly, let be the positive integer that is the entry. The other rows will be multiples of and the row operation     and any other pivots will now have a entry of .    The following example applies this algorithm to a previously solved linear system.    Solve using .    The first step use the matrix pivot in to perform a matrix pivot on row 1, column 1:     Next, let's perform a pivot about row 2, column 2.     The first and third rows are both multiples of , the previous pivot. If we perform:     Lastly, let's perform another FF pivot on row 3, column 3:     And compare this matrix to that in the final reduced-row echelon form of which if each row of the matrix above is multiplied through by , then is created. The solution can be read from the matrix as the left hand side divided by , in this case 5.This solution is     and note that this is the same solution as in and in many ways is nicer in that all of the entries of the matrix are integers.    In this course, we will perform matrix pivots, but not in a way to put the matrix in Reduced Row Echelon Form. Instead, the matrices we use will have more variables than rows, resulting in free variables and depending on different conditions, we will use different free variables. Let's look at another example:    Let the following matrix have variables . Solve the matrix for and and have free variables and . Use the Fraction-Free pivots in the solve.       If we are trying to solve for , then we can perform a pivot about an element in column 1. Let's pivot about row 1, column 1,     Next, we are looking to solve for and since row 1 gives a solution for , we don't want to mess that up and instead will choose row 2 to perform a pivot, so pivot about row 2, column 3:     Note that we didn't really need to do any steps here since the form was correctly. However, for consistency between steps, we did this anyway.  Now, we perform some cleanup. First, let's make the 2nd row, 2nd column positive. and then since the first and 3rd rows are multiples of 3, the previous value of , we will multiply through by .     Lastly, we want to solve for , so we will pivot about row 3, column 6 with the following row operations     And again with some cleanup to the pivot in row 3, column 6 to be and the pivots at row 1, column 1 and row 2, column 2 to also be .     We can actually write down the equation that this matrix represents as     and solve for and as     And note that the three variables on the right hand side are free variables. This example will be similar to matrices in this class and understanding this example will get you far in understanding the matrices using here.    As we will see in this class, the matrices presented here are quite small, and clearly take a lot of operations to perform and the slightly arithmetic error results in the wrong answer. Once you have the idea under your belt, you should move onto using software to do these operations and we will show how to do this in the next section.    Geometry of Linear Systems of 2 variables  If we consider only linear systems with two variables, then each equation is just a line, which we can graph on a set of axes. We are going to examine the geometry of linear systems of two variables.  First, we are going to look at three linear systems that each have different types of solutions. We can see the solutions by looking at the graphs.     The graph of each line in the linear system     is   Plot of two intersecting lines      The solution of the system is the point at which they cross. In this case it looks like the point or and . This is an example where there is only one solution (or a unique solution ).    If we graph the lines in the linear system     we get   Plot of two parallel lines      As you can see, it doesn't appear that the lines cross anywhere. In fact, they don't because the lines are parallel. This is an example of a linear system with no solution .    The linear system     has the following graph for each line   A plot of two equivalent lines      It appears that there is only one line. This is because both lines have the same graph. Each point on the line is a solution to the linear system and since there are an infinite number of such points, this is an example of a linear system with infinite number of solutions .     You can see if you have two lines, each with two variables, the example in is what happens if the two slopes are different. In this case, there is one (or a unique ) solution.  In the other two cases as in equations and , both sets of lines have the same slope. In the case of the lines have different -intercepts, and therefore the lines are parallel and thus there is no solution to the linear system. In the case of , both the slope and -intercepts are equal, so the lines are equal and thus any point on the line is a solution, and this system has an infinite number of solutions .   "
},
{
  "id": "ex-streets",
  "level": "2",
  "url": "sect-matrix-reduction.html#ex-streets",
  "type": "Example",
  "number": "1.3.1",
  "title": "Traffic Flow.",
  "body": " Traffic Flow   A simple model of traffic flow can be represented by the following graph:   A map of a few streets in Boston where the arrows denote the direction of traffic flow (all of these streets are one-way) and the numbers represent the numbers of cars driving down the street in a given time period. The letters through will be the names of the intersections.      Write down the equations that balance each of the numbers of cars entering and leaving each of the intersections and .    In this case, we have:     for intersections , , and respectively.   "
},
{
  "id": "sect-linear-systems-4",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-linear-systems-4",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": "     A linear combination of has the form     where the constants are the combinations coefficients.    A linear equation has the form     where is a constant and . These are the lines, planes and hyperplanes discussed in .    The -tuple  satisfies or is a solution of if this point satisfies or       A system of linear equations or linear system is a set of linear equations:     and this linear system has equations and unknowns (variables). The equations in is an example of a linear system.    The -tuple  satisfies or is a solution of if this point satisfies every equation of .      "
},
{
  "id": "sect-linear-systems-5",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-linear-systems-5",
  "type": "Example",
  "number": "1.3.4",
  "title": "Linear Equations.",
  "body": " Linear Equations  The following are linear equations:     where summation notation has been used in the last one and note the variable names can vary. The following equations are not linear:     Each of the equations in the latter group have multiplications, squares, division or other functions between variables.  "
},
{
  "id": "sect-linear-systems-7",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-linear-systems-7",
  "type": "Example",
  "number": "1.3.5",
  "title": "Showing a Point is a Solution to a Linear System.",
  "body": " Showing a Point is a Solution to a Linear System   Show that the point is a solution of the linear system:       Substitute and into both equations and check.     Since each equation is satisfied at the point is a solution to the linear system.   "
},
{
  "id": "sect-linear-systems-8",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-linear-systems-8",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": "  Show that and are both solutions to the linear system in .    In each case, the values must satisfy each equation. In the first case:     and since equation equation is satisfied, it is a solution. In the second case:     and again, each equation is satisfied.  This shows that the linear system in has more than one solution. In this case, there are different traffic levels that satisfy the equations.   "
},
{
  "id": "sect-elementary-row-operations-2-12",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-elementary-row-operations-2-12",
  "type": "Definition",
  "number": "1.3.7",
  "title": "Elementary Row Operations.",
  "body": " Elementary Row Operations   The three operations    Two equations of the linear system are swapped,  An equation is multiplied by a nonzero number,  An equation is replaced by the sum of itself and a multiple of another equation,    are called the elementary row operations of a linear system.   "
},
{
  "id": "thm-gauss-method",
  "level": "2",
  "url": "sect-matrix-reduction.html#thm-gauss-method",
  "type": "Theorem",
  "number": "1.3.8",
  "title": "Gauss’s Method.",
  "body": " Gauss's Method   If a linear system ( ) is changed into a second linear system ( ) by one of the elementary row operations then linear systems ( ) and ( ) have the same set of solutions.    We will consider only the first operation in this proof. Let's assume that we swap equations and , thus system ( ),     is transformed to     Let be a solution of ( ) if it exists and note it may be one of many -tuples in the solution. Thus it satisfies each equation of linear system ( ). Since the exact same equations are in ( ) in just a different order, is a solution to ( ). If there is more than one -tuple in the solution to ( ), repeat this for every one. If there is no solution to ( ), then there will be no solution to ( ) since it is the same set of equations.  Proof of #2 and #3 above are quite similar and are not shown.   "
},
{
  "id": "note-elimination",
  "level": "2",
  "url": "sect-matrix-reduction.html#note-elimination",
  "type": "Note",
  "number": "1.3.9",
  "title": "",
  "body": " Although Gauss' Method is very flexible, generally, one tries to eliminate all terms in all equations below equation 1, terms in all equations below equation 2 and so on.  "
},
{
  "id": "sect-matrices-3",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-matrices-3",
  "type": "Definition",
  "number": "1.3.10",
  "title": "",
  "body": "  An by matrix is a rectangular grid of numbers with rows and columns. The size of a matrix is the pair of number and and is typically written by or . Each number of the matrix is called the entry or element .   "
},
{
  "id": "ex-matrices",
  "level": "2",
  "url": "sect-matrix-reduction.html#ex-matrices",
  "type": "Example",
  "number": "1.3.11",
  "title": "Matrices.",
  "body": " Matrices  The following are examples of matrices:     "
},
{
  "id": "sect-matrices-6",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-matrices-6",
  "type": "Definition",
  "number": "1.3.12",
  "title": "",
  "body": "  A matrix with only 1 row is called a row vector . A matrix with only 1 column is called a column vector . The size of a vector is the number of rows (for a column vector) or the number of columns (for a row vector).   "
},
{
  "id": "sect-matrix-reduction-6-4",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-matrix-reduction-6-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented coefficient matrix. "
},
{
  "id": "sect-matrix-reduction-6-7",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-matrix-reduction-6-7",
  "type": "Example",
  "number": "1.3.13",
  "title": "Linear System as an Augmented Matrix.",
  "body": " Linear System as an Augmented Matrix   Write down the following linear system as an augmented matrix:           "
},
{
  "id": "sect-matrix-reduction-6-9",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-matrix-reduction-6-9",
  "type": "Example",
  "number": "1.3.14",
  "title": "Augmented Matrix as a Linear System.",
  "body": " Augmented Matrix as a Linear System   Write down the following augmented matrix as a linear system:       In this case, we are doing the opposite of the step above. That is, take a matrix and find the linear system.  Since the matrix has 4 columns, there are 3 variables (the last column is the right hand side). Let's use , and .     Alternatively, we could have used and as variables.   "
},
{
  "id": "sect-row-operations-and-matrices-5",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-row-operations-and-matrices-5",
  "type": "Example",
  "number": "1.3.15",
  "title": "",
  "body": "  Solve the linear system     by first writing as an augmented coefficient matrix and then performing elementary row operations on the matrix.    First, the augmented coefficient matrix is     Now perform the same elementary row operations as above. We first seek to change the second row, first column to a 0     and notice that this is the matrix representation of the second step in the solution listed in . Next, we seek to change the 3rd row, first column from to a 0.     And since we seek to get only a single variable in the third row, only one more step is needed.     At this point, if we return the augmented matrix to a set of equations, we get     and we can get the same solution using the same steps as above to get .   "
},
{
  "id": "ex-solve-lin-sys",
  "level": "2",
  "url": "sect-matrix-reduction.html#ex-solve-lin-sys",
  "type": "Example",
  "number": "1.3.16",
  "title": "",
  "body": "  Solve     using Gauss-Jordan Elimination    If this is done \"by hand\", one would probably swap rows 1 and 4 to get a 1 in the upper left, however let's skip and get a 1 there by dividing through by , then eliminate the rest of the column:     Typically we now want to get a 1 in the 2nd row, 2nd column of the matrix and can be done by multiplying row 2 by and then eliminating the rest of the column with     Lastly, we will make row 3, column 3 a 1 and then use this to eliminate the rest of the 3rd column with     And this reveals the solution is the vector    "
},
{
  "id": "ex-solve-traffic",
  "level": "2",
  "url": "sect-matrix-reduction.html#ex-solve-traffic",
  "type": "Checkpoint",
  "number": "1.3.17",
  "title": "",
  "body": "  Put the linear system from in a augmented coefficient matrix and use row operations to put the matrix in reduced row-echelon form.    First, ensure that all of the variables are on the left of the equations in and the constants on the right. This can be written as the augmented coefficient matrix,     Row operations are now performed      "
},
{
  "id": "sect-row-operations-and-matrices-9",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-row-operations-and-matrices-9",
  "type": "Remark",
  "number": "1.3.18",
  "title": "A fourth operation.",
  "body": " A fourth operation  Another handy row operation is that of replacing a row with linear combination of itself and another row. In general this is     Since this is a combination of two row operations together, we will use it, however, not consider it a separate (fourth) row operation.  "
},
{
  "id": "sect-matrix-pivot-2",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-matrix-pivot-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix pivot "
},
{
  "id": "sect-matrix-pivot-4",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-matrix-pivot-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elimination step "
},
{
  "id": "alg-fraction-free-pivot",
  "level": "2",
  "url": "sect-matrix-reduction.html#alg-fraction-free-pivot",
  "type": "Algorithm",
  "number": "1.3.19",
  "title": "Fraction Free Pivot.",
  "body": " Fraction Free Pivot   If the matrix has only integer entries, then the following will perform a fraction-free pivot at row , column , which will eliminate a column, but not produce a 1 at the pivot point. The result will be a matrix with all integer entries.  Let be the coefficient of a matrix (and an integer). If , then perform: Then the following row operations     will eliminate column .  Lastly, let be the positive integer that is the entry. The other rows will be multiples of and the row operation     and any other pivots will now have a entry of .   "
},
{
  "id": "sect-matrix-pivot-8",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-matrix-pivot-8",
  "type": "Example",
  "number": "1.3.20",
  "title": "",
  "body": "  Solve using .    The first step use the matrix pivot in to perform a matrix pivot on row 1, column 1:     Next, let's perform a pivot about row 2, column 2.     The first and third rows are both multiples of , the previous pivot. If we perform:     Lastly, let's perform another FF pivot on row 3, column 3:     And compare this matrix to that in the final reduced-row echelon form of which if each row of the matrix above is multiplied through by , then is created. The solution can be read from the matrix as the left hand side divided by , in this case 5.This solution is     and note that this is the same solution as in and in many ways is nicer in that all of the entries of the matrix are integers.   "
},
{
  "id": "ex-lin-sys2",
  "level": "2",
  "url": "sect-matrix-reduction.html#ex-lin-sys2",
  "type": "Example",
  "number": "1.3.21",
  "title": "",
  "body": "  Let the following matrix have variables . Solve the matrix for and and have free variables and . Use the Fraction-Free pivots in the solve.       If we are trying to solve for , then we can perform a pivot about an element in column 1. Let's pivot about row 1, column 1,     Next, we are looking to solve for and since row 1 gives a solution for , we don't want to mess that up and instead will choose row 2 to perform a pivot, so pivot about row 2, column 3:     Note that we didn't really need to do any steps here since the form was correctly. However, for consistency between steps, we did this anyway.  Now, we perform some cleanup. First, let's make the 2nd row, 2nd column positive. and then since the first and 3rd rows are multiples of 3, the previous value of , we will multiply through by .     Lastly, we want to solve for , so we will pivot about row 3, column 6 with the following row operations     And again with some cleanup to the pivot in row 3, column 6 to be and the pivots at row 1, column 1 and row 2, column 2 to also be .     We can actually write down the equation that this matrix represents as     and solve for and as     And note that the three variables on the right hand side are free variables. This example will be similar to matrices in this class and understanding this example will get you far in understanding the matrices using here.   "
},
{
  "id": "sect-geom-lin-sys-2var-4",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-geom-lin-sys-2var-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unique solution no solution infinite number of solutions "
},
{
  "id": "sect-geom-lin-sys-2var-5",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-geom-lin-sys-2var-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unique "
},
{
  "id": "sect-geom-lin-sys-2var-6",
  "level": "2",
  "url": "sect-matrix-reduction.html#sect-geom-lin-sys-2var-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "no solution infinite number of solutions "
},
{
  "id": "sect-pivot-webcas",
  "level": "1",
  "url": "sect-pivot-webcas.html",
  "type": "Section",
  "number": "1.4",
  "title": "Using Software to Perform Matrix Pivots",
  "body": " Using Software to Perform Matrix Pivots     Using WebCAS to perform row operations and pivots on matrices.      In the previous section, we performed row operations and matrix pivots to develop solutions to linear systems. In this section, we will show software to do this.  Almost all software that handles matrices have some way to do row operations on the matrix. However, often it is complicated to do. Clearly any software that will help with the understanding here should be used. We will show using a website called WebCAS that handles matrices in a very nice way. In this section, we will show some of the features.    Using WebCAS to do Row Operations  In this section, we will enter matrices into WebCAS and perform row operations on the matrix. Let's start with the matrix that we saw in . From the WebCAS main page, select the Gaussian Eliminator tool. Within the large box, enter the matrix as numbers separated by one or more spaces and each row on a separate line. This matrix can go in as   Screenshot of WebCAS, a web-based software to do matrix operations.   (for accessibility)    and then click Enter Matrix and you should see the matrix displayed in a mathematical form.   Although the matrix above probably does not have the vertical line on the last column. This is a matrix decoration it's purpose is to separate out the last column visually. To get this, click the gear icon in the top bar and the first option is Vertical Line Mode . Select Before Last Column then click Save Changes .  You won't see them immediately, but if you click Restart and then enter the matrix again, you should see the results that you expect.    The mathematical output of the matrix above put into WebCAS.   (for accessibility)    To perform row operations in the Gaussian Eliminator, the following are supported     Multiply Row by a Constant  If we want to multiply a row by a constant, like , then enter 3R2 -> R2     Multiply a Row by a Constant and add to another row  Mathematically, if you want to do , in WebCAS, enter R1+3R2 -> R2     Linear Combination of Rows  A linear combination of rows is the above two operations above mushed together. This is often not an elementary row operation because for certain operations (like finding a determinant), one needs to be careful. However, this is a nice convenient operation for matrix pivots.  If you want to do , then enter -2R1+3R2 -> R2     Row swaps  The row swap can be done with R1 <-> R2 .     For the operations except the Row Swap, if you leave off the -> R2 or an row, it will use the previous row as the row to insert. This way, complicated row operations can be done.  Returning to the matrix above from , we wanted to perform a matrix pivot about row 1, column 1. This was done with the two operations and in the Gaussian Eliminator, you can add both operations in the same box with -2R1-3R2->R2, R1-3R3->R3 . (Or drop the arrow and last row). Hitting the Enter button (or the enter key on your keyboard), you should see:   Row operations on the above matrix performed in WebCAS. This is a matrix pivot about row 1, column 1 and the image is the result of the two operations.   (for accessibility)     Recall that on a matrix pivot the goal is to zero out the column that you are pivoting about (and we will want to get a positive number on the pivot element). Therefore, it should be clear that the pivot was done correctly. If not, there is an Undo button which will bring back the previous matrix and reinserts the row operation. Edits can be done and re-entered.  From my experience over many years, this is the students' favorite feature of this tool.   Continuing to do a matrix pivot on row 2, column 3, we do the following operation:   Row operations on the above matrix performed in WebCAS. This is a matrix pivot about row 2, column 3 and the image is the result of the two operations.   (for accessibility)    Note that as we described in , this operation wasn't quite needed (the second row already is solved for ). However, we did it to fit in with the standard pivot operations.  To finish the pivot, we need to negative the second row and then multiply the other two rows by , where is used as the pivot value of the previous step.   Continued work on the previous pivot. The second row is negated to ensure that the pivot element is positive. Then the other two rows are multiplied by to keep all previous pivots with the same value.   (for accessibility)    The fraction operations are put in like 1\/3R1, 1\/3R3 and a nice feature of WebCAS is that it uses fractions under the hood and doesn't do a floating-point divide that most languages might do with a 1\/3 .  The last pivot that we wanted to do is row 3, column 6. This can be done with   Row operations on the above matrix performed in WebCAS. This is a matrix pivot about row 3, column 6 and the image is the result of the two operations.   (for accessibility)    and then we'll do the cleanup with     (for accessibility)    and this is the same matrix that we got in and we could then right now the linear system and the solution as we did in that example.    Matrix Pivots in WebCAS  You should clearly notice that using WebCAS to perform the row operations were quite nice in that it eliminates arithmetic errors. However, it still takes a number of steps that can be automated. In this section we will use the piv command in WebCAS to further simplify these steps.  Let's return to and if you still have that matrix in the Gaussian Eliminator, then you can click Restart and then reenter the matrix.  (for accessibility)   Now at this step if we want to do a matrix pivot about row 1, column 1, then enter piv(1,1) , and you should get:   Pivoting the original matrix about row 1 column 1.   (for accessibility)    And note that this differs from that of in that the last two rows differ by a multiple of . One can get from one to the other by row multiplications. The next pivot was about row 2, column 3, so entering piv(2,3) results in   Pivoting the original matrix about row 2 column 3.   (for accessibility)    and again this only differs by a sign in the last row in . Lastly, we performed a pivot about row 3, column 6, so piv(3,6) results in   Pivoting the original matrix about row 3 column 6.   (for accessibility)    and this is now equivalent to the matrix in . Using this fraction-free pivot method, or the piv command in WebCAS will keep the matrix in integers and the pivot elements equal (and positive). As we will see, using this and a related form of the pivot will simplify many operations used in later chapters.    Click to Pivot in WebCAS  Another feature of WebCAS is Click To Pivot . When selected, this allows the user to click on an element in the matrix and perform the click. Once enabled, you can simply click on any entry in the matrix to perform a pivot about that element. This feature streamlines the process, especially for larger matrices, by reducing the need to manually enter pivot commands. After clicking, the matrix will update automatically to reflect the pivot operation. This will help as the size of the matrix increases.  First, to use this in WebCAS, return to the settings (with the Gear icon) on the top bar, and enable the Click To Pivot option then save the changes.  After this is set and a matrix is entered, there will be a Checkbox at the top. Selecting the Click to Pivot option puts this in a click mode.  Enter a matrix in the standard way. Then you can click on the number that you wish to pivot upon.   "
},
{
  "id": "sect-pivot-webcas-2",
  "level": "2",
  "url": "sect-pivot-webcas.html#sect-pivot-webcas-2",
  "type": "Objectives",
  "number": "1.4",
  "title": "",
  "body": "   Using WebCAS to perform row operations and pivots on matrices.    "
},
{
  "id": "fig-webcas",
  "level": "2",
  "url": "sect-pivot-webcas.html#fig-webcas",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " Screenshot of WebCAS, a web-based software to do matrix operations.   (for accessibility)   "
},
{
  "id": "sect-webcas-rowop-5",
  "level": "2",
  "url": "sect-pivot-webcas.html#sect-webcas-rowop-5",
  "type": "Note",
  "number": "1.4.2",
  "title": "",
  "body": " Although the matrix above probably does not have the vertical line on the last column. This is a matrix decoration it's purpose is to separate out the last column visually. To get this, click the gear icon in the top bar and the first option is Vertical Line Mode . Select Before Last Column then click Save Changes .  You won't see them immediately, but if you click Restart and then enter the matrix again, you should see the results that you expect.  "
},
{
  "id": "fig-webcas2",
  "level": "2",
  "url": "sect-pivot-webcas.html#fig-webcas2",
  "type": "Figure",
  "number": "1.4.3",
  "title": "",
  "body": " The mathematical output of the matrix above put into WebCAS.   (for accessibility)   "
},
{
  "id": "fig-webcas3",
  "level": "2",
  "url": "sect-pivot-webcas.html#fig-webcas3",
  "type": "Figure",
  "number": "1.4.4",
  "title": "",
  "body": " Row operations on the above matrix performed in WebCAS. This is a matrix pivot about row 1, column 1 and the image is the result of the two operations.   (for accessibility)   "
},
{
  "id": "sect-webcas-rowop-12",
  "level": "2",
  "url": "sect-pivot-webcas.html#sect-webcas-rowop-12",
  "type": "Note",
  "number": "1.4.5",
  "title": "",
  "body": " Recall that on a matrix pivot the goal is to zero out the column that you are pivoting about (and we will want to get a positive number on the pivot element). Therefore, it should be clear that the pivot was done correctly. If not, there is an Undo button which will bring back the previous matrix and reinserts the row operation. Edits can be done and re-entered.  From my experience over many years, this is the students' favorite feature of this tool.  "
},
{
  "id": "fig-webcas4",
  "level": "2",
  "url": "sect-pivot-webcas.html#fig-webcas4",
  "type": "Figure",
  "number": "1.4.6",
  "title": "",
  "body": " Row operations on the above matrix performed in WebCAS. This is a matrix pivot about row 2, column 3 and the image is the result of the two operations.   (for accessibility)   "
},
{
  "id": "fig-webcas5",
  "level": "2",
  "url": "sect-pivot-webcas.html#fig-webcas5",
  "type": "Figure",
  "number": "1.4.7",
  "title": "",
  "body": " Continued work on the previous pivot. The second row is negated to ensure that the pivot element is positive. Then the other two rows are multiplied by to keep all previous pivots with the same value.   (for accessibility)   "
},
{
  "id": "fig-webcas6",
  "level": "2",
  "url": "sect-pivot-webcas.html#fig-webcas6",
  "type": "Figure",
  "number": "1.4.8",
  "title": "",
  "body": " Row operations on the above matrix performed in WebCAS. This is a matrix pivot about row 3, column 6 and the image is the result of the two operations.   (for accessibility)   "
},
{
  "id": "fig-webcas7",
  "level": "2",
  "url": "sect-pivot-webcas.html#fig-webcas7",
  "type": "Figure",
  "number": "1.4.9",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "fig-webcas8",
  "level": "2",
  "url": "sect-pivot-webcas.html#fig-webcas8",
  "type": "Figure",
  "number": "1.4.10",
  "title": "",
  "body": " Pivoting the original matrix about row 1 column 1.   (for accessibility)   "
},
{
  "id": "fig-webcas9",
  "level": "2",
  "url": "sect-pivot-webcas.html#fig-webcas9",
  "type": "Figure",
  "number": "1.4.11",
  "title": "",
  "body": " Pivoting the original matrix about row 2 column 3.   (for accessibility)   "
},
{
  "id": "fig-webcas10",
  "level": "2",
  "url": "sect-pivot-webcas.html#fig-webcas10",
  "type": "Figure",
  "number": "1.4.12",
  "title": "",
  "body": " Pivoting the original matrix about row 3 column 6.   (for accessibility)   "
},
{
  "id": "sect-linear-models",
  "level": "1",
  "url": "sect-linear-models.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to Linear Optimization",
  "body": " Introduction to Linear Optimization     Provide examples of linear optimization problems.    Writing down an applied problem as a mathematical linear optimization problem.      This section goes into a number of applied problems that have linear constraints and a linear objective function. Consider the following:   The toy car problem  Luis is a toymaker who builds toy cars with wood. His most popular toys are a car, an SUV and a truck. The car is made with 6 units of pine, 3 units of birch and take a total of 45 minutes to make. The SUV is made with 5 units of pine, 6 units of birch and takes a total of 75 minutes to make. The truck takes 4 units of pine, 7 units of birch and takes a total of 90 minutes to make. For each car he makes $10 in profit, for each SUV is $15 in profit and for each truck is $12 in profit.  Luis has 183 units of pine, 204 units of birch. For the week, he has a total of 2655 minutes of time the shop can spend building toys. How many of each toy should he make to maximize his profit?    Example of Linear Optimization Problems (LOPs) occur in many fields. This section introduces a few more examples.   Shipping Coffee Problem   A coffee supplier has warehouses in Seattle and San José. The coffee supplier receives orders from coffee retailers in Salt Lake City and Reno.  The retailer in Salt Lake City needs 400 pounds of coffee and the the retailer in Reno needs 350 pounds of coffee. The Seattle warehouse has 700 pounds available and the San José warehouse has 500 pounds available.  The cost of shipping from Seattle to Salt Lake City is $2.50 per pound, from Seattle to Reno $3 per pound, from San José to Salt Lake is $4 per pound and from San José to Reno is $2 per pound.  Find the number of pounds to be shipped from each warehouse to each retailer to minimize the cost.     Scheduling Librarians   The FSU library needs to make sure that there is at least one reference librarian on duty during open hours. If there are 3 reference librarians, how do you schedule them to work such that a) each one works at least 30 hours per week. b) No one work longer than 10 hours in a given day. How would you schedule them such that the total number of hours worked by all reference librarians is minimized.     A Diet Problem   Consider the problem: Gary goes on a diet eating only a salad, turkey sandwich or a bagel with cream cheese for a week. (Yes. It’s the worst!). The following table shows important information for each       calories  protein  carbs  fat    salad  600  5  7  4    sandwich  750  18  10  8    bagel  500  10  24  12    Gary is trying to minimize the total calories ensuring that he eats at least 54 grams of protein, 45 grams of fat and 60 grams of carbs. Write down the objective function and the set of linear constraints?     Blending Problem   Becky’s Bakery has the following amounts of ingredients on hand: 32 cups flour, 2 dozen eggs and 20 cups of sugar. They would like to make some number of batches of Chocolate Chip Cookies, Brownies and Sugar Cookies. The recipes for these call for the following amounts of flour, eggs and sugar:    Recipe  Flour  Eggs  Sugar        Choc. Chip Cookies  3  2  1    Brownies  2  1  2    Sugar Cookies  1  2  2    If the profit made for each recipe is 20, 24, and 16 dollars respectively, find the number of batches of each baked good that the bakery should make to maximize the profit.    Allocation Problem  Jane has four courses this given semester. Let's call them Mathematics (M), History (H), Writing (W) and Psychology (Psy). We want to determine a number of constraints on the amount of studying she does in these classes.     The total number of hours for studying is 360.    Jane is on a scholarship and needs to keep a 3.0.    Jane needs to pass every class to stay on the scholarship.    From past experience, the following table lists the amount of time Jane needs to earn 1 grade point in each course:    Course  hour\/grade point    Mathematics  30    Psychology  20    History  25    Writing  20       What is the minimum number of hours that Jane should study in each class?     Urban Farming Project  A non-profit organization, GreenHarvest , aims to establish a sustainable urban farm within a limited city space. This problem was created in part using Google Gemini. They want to maximize their total profit from selling produce to local restaurants and farmers' markets while adhering to various constraints. They have identified four key crops to cultivate:     Heirloom Tomatoes (T): High-profit, but require significant space and water.    Organic Lettuce (L): Moderate profit, quick growing, but sensitive to sun exposure.    Specialty Herbs (H): Low profit per plant, but very space-efficient and high demand.    Root Vegetables (R): Moderate profit, require deep soil beds and longer growth cycles.     The project has 50 growing beds for all crops. Due to city regulations and sustainable practices, there's a limit on daily water consumption. Each crop type has different water requirements per bed. The total water usage cannot exceed 1500 liters per day.     Heirloom Tomatoes: 40 liters\/bed    Organic Lettuce: 25 liters\/bed    Specialty Herbs: 15 liters\/bed    Root Vegetables: 30 liters\/bed     To meet the demand from local restaurants that rely heavily on fresh herbs, GreenHarvest wants to ensure at least 5 beds are dedicated to Specialty Herbs.  To maintain crop diversity and manage pest control effectively, the number of Heirloom Tomato beds should be no more than twice the number of Organic Lettuce beds.  Profit per bed (estimated per growing season):     Heirloom Tomatoes: $300    Organic Lettuce: $180    Specialty Herbs: $100    Root Vegetables: $220     The goal of this problem is to determine the number of beds to devote to each of the different types of crops in order to maximize the profit.     Creating Linear Models  We have seen a number of problems in this chapter that will fit into a linear model. Let's look at as a example of how to approach creating a linear model. We'll write the common steps and fill in those steps for this problem.     What are the variables? Clearly list each one or perhaps if they are indexed, write down what each indexed variable represents.   Solution: There are 3 types of toys for this problem:       What is the objective? Is it to be minimized or maximized.   Solution: In this case, the profit is to be maximized and can be written       What are the constraints? Note: one way to think about this is the case of something being maximized, why can't the objective be increased without bound.   Solution: The profit cannot be increased with bound because there is a limit on the amount of wood and labor that can be used. For each of these, we build a constraint.     For the amount of pine:     For the amount of birch:     For the amount of labor:        Check if the nonnegative constraints on the variables are needed assumptions.   Solution: Yes. Since the variables represent the numbers of things (in this case toys) to make, the nonnegative assumptions on each variable makes sense.       Check if either integer or binary constraints are reasonable.   Solution: Since the variables are numbers of toys to make, they must be integers, There are a few different ways to denote the set of nonnegative integers, however, in this text, we will use to represent . but not binary.        The next problem shows how to attack another linear problem.    Use the steps above to write the LOP for .       What are the variables?   Solution: In this case, first note that we need to know the amount of coffee shipped between warehouses and retail outlets. The following graph is helpful for this:          Specifically we have the following:        What is the objective?   The objective is the total cost and it is to be minimized or        What are the constraints?   The variables are going to be the total amount of coffee to be shipped from the two warehouses to the two retail locations. If we look first at the amount of coffee that the Salt Lake City and Reno locations need then we need to ship at least this amount or     Since the warehouses have a limited supply, they can only ship what they have so there are two additional constraints, one for each warehouse       Check if the nonnegative constraints on the variables are needed assumptions.   Solution: Each amount of coffee shipped should be nonnegative, so .     Check if either integer or binary constraint are needed.   In this case, because coffee does not need to be shipped in integer amounts of pounds, this is not needed.     We can combine all of these into the following LOP:         Non-Obvious Linear Optimization Problems   Perhaps as you have read through the problems at the top of this section and then the mathematical formulation of each in and notice that there are some similarities between the problems. Each clearly has an objective that is to optimized and has a number of constraints. However, there are other problems that with some creativity can be written as an LOP. Consider the following:   -queens problem   A chessboard is a grid of spaces in which pieces move around the board according to various rules. A queen is a piece that can move left, right, up, down or diagonal any number of squares. shows the standard 8 by 8 chessboard and one queen.  The -queens problem asks if queens can appear on an by chessboard, so that no queen can attacker another queen.     An 8 by 8 chessboard with a queen on a square. The arrows indicate the other squares that can attack with this piece.        It's not clear what the objective function is for this problem (although there is one). The constraints for the problem might be the constraints on a queen. Also, what are the variables? We'll see how to approach this later.   Room Scheduling  The registrar at State University needs to schedule rooms for a set of classes in a time block. For simplification, the classes will be A, B, C, ..., H and they will be put in rooms 1,2,3, ..., 8. Not every class can be scheduled in every room. Some classes need to be in a computer class, some classes need to be on the first floor of the building, some faculty prefer whiteboards, some faculty prefer to use a project. Here's all of these constraints:     Classes A, B and C need to be scheduled in a computer lab (rooms 1, 4, 6, 8).    Classes D and E need to be on the first floor the building (rooms 1, 2, 3).    Classes B, E, F, G, H need a whiteboard and cannot be in rooms 1, 2 or 7.    Classes C, D, F and H need a projector and cannot be in room 2, 5, or 8.     What is a reasonable scheduling of the rooms if possible?   This problem seems to have similarities with the previous problem, and similar questions arise. What are the variables for the problem? There are clearly some constraints in that certain classes need to be in a some rooms, but not others. It's unclear what the objective is.   Mars Rover  You are the lead mission planner for NASA's new Mars rover, Curiosity II. The rocket launching the rover has a strict weight limit for its scientific payload. Exceeding this limit is not an option. A team of scientists has reviewed all possible instruments and assigned each a scientific value score based on the mission's objectives (like finding signs of past life or analyzing atmospheric composition). Your job is to select the combination of instruments that will maximize the total scientific value of the mission without exceeding the weight limit. This was generated with help from Gemini AI.    Mars Rover Instrument Options    Instrument Name  Weight (kg)  Scientific Value Score    Alpha Particle X-ray Spectrometer  35  30    High-Resolution Panoramic Camera  30  25    Subsurface Drilling Unit  60  55    Weather & Radiation Monitor  45  35    Laser-Induced Breakdown Spectrometer  40  40    Robotic Scoop & Soil Analyzer  55  50      This problem falls into a class of problems called knapsack problems. The idea is that you have a knapsack (backpack) with limited capacity and you want to include as much as possible, whether that is volume, weight or some other measure (like scientific value).  The next problem is interesting in that it asks about where to place items (in this case in a city). At first glance this doesn't seem to be a linear optimization problem.   The Mailbox Problem   Gridburg is 4 blocks by 6 blocks in a grid as shown below:         The postal chief wants to arrange mailboxes such that anywhere in the city, one does not need to walk any more than two blocks to reach a mailbox. If it is required that mailboxes be placed at intersections, where should the mailboxes be placed to minimize the number of mailboxes. This problem is a nod to Glenn Hurlbert, whose book Linear Optimization: a Handbook motivated this work. The book had a number of problems in Gridburg a town on a grid like above.       LOP Formulation of -queens Problem   Perhaps looking at , it would not seem like it is a linear optimization problem. You might think that there are constraints no queen can attack another one, but what is the objective function?  First, to formulate the problem, we need to know the variables. A common situation is to place objects in a grid or other arrangement and then use a variable to denote whether or not to place the object at the grid point. In this case, we are going to use to be a binary variable that is 1 if there is a queen at row and column and 0 otherwise.  The constraints will be that there is at most one queen in any row, column or diagonal of the chessboard. At most a single queen in any row or column can be written as     Note that in , the sum is across row and the inequality with means that at most there is 1 queen in each row. Similarly in , the sum in for a given column, so there is at most one queen in a column.  The diagonals are trickier. In the diagonal from the lower left to upper right then summing , but this is also true for every diagonal that parallels this one. The inequality for this is in the problem below.  There is also a diagonal from the upper left to lower right with the inequality , but also with every other diagonal parallel to these, which are listed below.  Finally, we will use the objective that the total number of queens on the board to be minimized. The total number can be calculated with     Here's a summary of the -queens problems:     The first inequality is the column sum for every , the second is the row sum for every . The third and fourth are the diagonals that run from bottom left to upper right on the chessboard and the fifth and sixth are the upper left to lower right.  The Mailbox Problem in can be set up in a similar manner to that of the -queens problem because we can write the variables as a binary variables of each intersection. A one would indicate the presence of a mailbox and zero would not. The constraints would be that the total number of mailboxes within two blocks of every intersection is at least 2.    "
},
{
  "id": "sect-linear-models-2",
  "level": "2",
  "url": "sect-linear-models.html#sect-linear-models-2",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "   Provide examples of linear optimization problems.    Writing down an applied problem as a mathematical linear optimization problem.    "
},
{
  "id": "prob-toymaker",
  "level": "2",
  "url": "sect-linear-models.html#prob-toymaker",
  "type": "Problem",
  "number": "2.1.1",
  "title": "The toy car problem.",
  "body": " The toy car problem  Luis is a toymaker who builds toy cars with wood. His most popular toys are a car, an SUV and a truck. The car is made with 6 units of pine, 3 units of birch and take a total of 45 minutes to make. The SUV is made with 5 units of pine, 6 units of birch and takes a total of 75 minutes to make. The truck takes 4 units of pine, 7 units of birch and takes a total of 90 minutes to make. For each car he makes $10 in profit, for each SUV is $15 in profit and for each truck is $12 in profit.  Luis has 183 units of pine, 204 units of birch. For the week, he has a total of 2655 minutes of time the shop can spend building toys. How many of each toy should he make to maximize his profit?  "
},
{
  "id": "prob-coffee",
  "level": "2",
  "url": "sect-linear-models.html#prob-coffee",
  "type": "Problem",
  "number": "2.1.2",
  "title": "Shipping Coffee Problem.",
  "body": " Shipping Coffee Problem   A coffee supplier has warehouses in Seattle and San José. The coffee supplier receives orders from coffee retailers in Salt Lake City and Reno.  The retailer in Salt Lake City needs 400 pounds of coffee and the the retailer in Reno needs 350 pounds of coffee. The Seattle warehouse has 700 pounds available and the San José warehouse has 500 pounds available.  The cost of shipping from Seattle to Salt Lake City is $2.50 per pound, from Seattle to Reno $3 per pound, from San José to Salt Lake is $4 per pound and from San José to Reno is $2 per pound.  Find the number of pounds to be shipped from each warehouse to each retailer to minimize the cost.   "
},
{
  "id": "sect-linear-models-3-5",
  "level": "2",
  "url": "sect-linear-models.html#sect-linear-models-3-5",
  "type": "Problem",
  "number": "2.1.3",
  "title": "Scheduling Librarians.",
  "body": " Scheduling Librarians   The FSU library needs to make sure that there is at least one reference librarian on duty during open hours. If there are 3 reference librarians, how do you schedule them to work such that a) each one works at least 30 hours per week. b) No one work longer than 10 hours in a given day. How would you schedule them such that the total number of hours worked by all reference librarians is minimized.   "
},
{
  "id": "prob-diet",
  "level": "2",
  "url": "sect-linear-models.html#prob-diet",
  "type": "Problem",
  "number": "2.1.4",
  "title": "A Diet Problem.",
  "body": " A Diet Problem   Consider the problem: Gary goes on a diet eating only a salad, turkey sandwich or a bagel with cream cheese for a week. (Yes. It’s the worst!). The following table shows important information for each       calories  protein  carbs  fat    salad  600  5  7  4    sandwich  750  18  10  8    bagel  500  10  24  12    Gary is trying to minimize the total calories ensuring that he eats at least 54 grams of protein, 45 grams of fat and 60 grams of carbs. Write down the objective function and the set of linear constraints?   "
},
{
  "id": "sect-linear-models-3-7",
  "level": "2",
  "url": "sect-linear-models.html#sect-linear-models-3-7",
  "type": "Problem",
  "number": "2.1.5",
  "title": "Blending Problem.",
  "body": " Blending Problem   Becky’s Bakery has the following amounts of ingredients on hand: 32 cups flour, 2 dozen eggs and 20 cups of sugar. They would like to make some number of batches of Chocolate Chip Cookies, Brownies and Sugar Cookies. The recipes for these call for the following amounts of flour, eggs and sugar:    Recipe  Flour  Eggs  Sugar        Choc. Chip Cookies  3  2  1    Brownies  2  1  2    Sugar Cookies  1  2  2    If the profit made for each recipe is 20, 24, and 16 dollars respectively, find the number of batches of each baked good that the bakery should make to maximize the profit.  "
},
{
  "id": "sect-linear-models-3-8",
  "level": "2",
  "url": "sect-linear-models.html#sect-linear-models-3-8",
  "type": "Problem",
  "number": "2.1.6",
  "title": "Allocation Problem.",
  "body": " Allocation Problem  Jane has four courses this given semester. Let's call them Mathematics (M), History (H), Writing (W) and Psychology (Psy). We want to determine a number of constraints on the amount of studying she does in these classes.     The total number of hours for studying is 360.    Jane is on a scholarship and needs to keep a 3.0.    Jane needs to pass every class to stay on the scholarship.    From past experience, the following table lists the amount of time Jane needs to earn 1 grade point in each course:    Course  hour\/grade point    Mathematics  30    Psychology  20    History  25    Writing  20       What is the minimum number of hours that Jane should study in each class?  "
},
{
  "id": "prob-urban-farm",
  "level": "2",
  "url": "sect-linear-models.html#prob-urban-farm",
  "type": "Problem",
  "number": "2.1.7",
  "title": "Urban Farming Project.",
  "body": "  Urban Farming Project  A non-profit organization, GreenHarvest , aims to establish a sustainable urban farm within a limited city space. This problem was created in part using Google Gemini. They want to maximize their total profit from selling produce to local restaurants and farmers' markets while adhering to various constraints. They have identified four key crops to cultivate:     Heirloom Tomatoes (T): High-profit, but require significant space and water.    Organic Lettuce (L): Moderate profit, quick growing, but sensitive to sun exposure.    Specialty Herbs (H): Low profit per plant, but very space-efficient and high demand.    Root Vegetables (R): Moderate profit, require deep soil beds and longer growth cycles.     The project has 50 growing beds for all crops. Due to city regulations and sustainable practices, there's a limit on daily water consumption. Each crop type has different water requirements per bed. The total water usage cannot exceed 1500 liters per day.     Heirloom Tomatoes: 40 liters\/bed    Organic Lettuce: 25 liters\/bed    Specialty Herbs: 15 liters\/bed    Root Vegetables: 30 liters\/bed     To meet the demand from local restaurants that rely heavily on fresh herbs, GreenHarvest wants to ensure at least 5 beds are dedicated to Specialty Herbs.  To maintain crop diversity and manage pest control effectively, the number of Heirloom Tomato beds should be no more than twice the number of Organic Lettuce beds.  Profit per bed (estimated per growing season):     Heirloom Tomatoes: $300    Organic Lettuce: $180    Specialty Herbs: $100    Root Vegetables: $220     The goal of this problem is to determine the number of beds to devote to each of the different types of crops in order to maximize the profit.  "
},
{
  "id": "prob-coffee-setup",
  "level": "2",
  "url": "sect-linear-models.html#prob-coffee-setup",
  "type": "Problem",
  "number": "2.1.8",
  "title": "",
  "body": "  Use the steps above to write the LOP for .       What are the variables?   Solution: In this case, first note that we need to know the amount of coffee shipped between warehouses and retail outlets. The following graph is helpful for this:          Specifically we have the following:        What is the objective?   The objective is the total cost and it is to be minimized or        What are the constraints?   The variables are going to be the total amount of coffee to be shipped from the two warehouses to the two retail locations. If we look first at the amount of coffee that the Salt Lake City and Reno locations need then we need to ship at least this amount or     Since the warehouses have a limited supply, they can only ship what they have so there are two additional constraints, one for each warehouse       Check if the nonnegative constraints on the variables are needed assumptions.   Solution: Each amount of coffee shipped should be nonnegative, so .     Check if either integer or binary constraint are needed.   In this case, because coffee does not need to be shipped in integer amounts of pounds, this is not needed.     We can combine all of these into the following LOP:      "
},
{
  "id": "prob-n-queens",
  "level": "2",
  "url": "sect-linear-models.html#prob-n-queens",
  "type": "Problem",
  "number": "2.1.10",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-queens problem.",
  "body": " -queens problem   A chessboard is a grid of spaces in which pieces move around the board according to various rules. A queen is a piece that can move left, right, up, down or diagonal any number of squares. shows the standard 8 by 8 chessboard and one queen.  The -queens problem asks if queens can appear on an by chessboard, so that no queen can attacker another queen.   "
},
{
  "id": "fig-chessboard-queen",
  "level": "2",
  "url": "sect-linear-models.html#fig-chessboard-queen",
  "type": "Figure",
  "number": "2.1.11",
  "title": "",
  "body": " An 8 by 8 chessboard with a queen on a square. The arrows indicate the other squares that can attack with this piece.       "
},
{
  "id": "sect-other-problems-2-5",
  "level": "2",
  "url": "sect-linear-models.html#sect-other-problems-2-5",
  "type": "Problem",
  "number": "2.1.12",
  "title": "Room Scheduling.",
  "body": " Room Scheduling  The registrar at State University needs to schedule rooms for a set of classes in a time block. For simplification, the classes will be A, B, C, ..., H and they will be put in rooms 1,2,3, ..., 8. Not every class can be scheduled in every room. Some classes need to be in a computer class, some classes need to be on the first floor of the building, some faculty prefer whiteboards, some faculty prefer to use a project. Here's all of these constraints:     Classes A, B and C need to be scheduled in a computer lab (rooms 1, 4, 6, 8).    Classes D and E need to be on the first floor the building (rooms 1, 2, 3).    Classes B, E, F, G, H need a whiteboard and cannot be in rooms 1, 2 or 7.    Classes C, D, F and H need a projector and cannot be in room 2, 5, or 8.     What is a reasonable scheduling of the rooms if possible?  "
},
{
  "id": "prob-mars-rover",
  "level": "2",
  "url": "sect-linear-models.html#prob-mars-rover",
  "type": "Problem",
  "number": "2.1.13",
  "title": "Mars Rover.",
  "body": " Mars Rover  You are the lead mission planner for NASA's new Mars rover, Curiosity II. The rocket launching the rover has a strict weight limit for its scientific payload. Exceeding this limit is not an option. A team of scientists has reviewed all possible instruments and assigned each a scientific value score based on the mission's objectives (like finding signs of past life or analyzing atmospheric composition). Your job is to select the combination of instruments that will maximize the total scientific value of the mission without exceeding the weight limit. This was generated with help from Gemini AI.    Mars Rover Instrument Options    Instrument Name  Weight (kg)  Scientific Value Score    Alpha Particle X-ray Spectrometer  35  30    High-Resolution Panoramic Camera  30  25    Subsurface Drilling Unit  60  55    Weather & Radiation Monitor  45  35    Laser-Induced Breakdown Spectrometer  40  40    Robotic Scoop & Soil Analyzer  55  50     "
},
{
  "id": "prob-mailbox",
  "level": "2",
  "url": "sect-linear-models.html#prob-mailbox",
  "type": "Problem",
  "number": "2.1.15",
  "title": "The Mailbox Problem.",
  "body": " The Mailbox Problem   Gridburg is 4 blocks by 6 blocks in a grid as shown below:         The postal chief wants to arrange mailboxes such that anywhere in the city, one does not need to walk any more than two blocks to reach a mailbox. If it is required that mailboxes be placed at intersections, where should the mailboxes be placed to minimize the number of mailboxes. This problem is a nod to Glenn Hurlbert, whose book Linear Optimization: a Handbook motivated this work. The book had a number of problems in Gridburg a town on a grid like above.    "
},
{
  "id": "sect-lops",
  "level": "1",
  "url": "sect-lops.html",
  "type": "Section",
  "number": "2.2",
  "title": "Linear Optimization Problems",
  "body": " Linear Optimization Problems     Definition of a Linear Optimization Problem and related problems.    Definition of the Standard Form of an LOP    How to put a minimum problem into standard form    General Form of an LOP      In the previous two sections of this chapter we have seen applied problems as well as feasible sets. In this section, we will summarize all of these and determine a method to put applied problems into a mathematical formulation.    Definitions and Conventions    A Linear Optimization Problem This is not the most general form of such a problem. We will see a general linear optimization problem in . consists of     A linear objective function that is to be minimized or maximized.    A set of linear inequalities.    A set of nonnegative constraints on all of the variables.     In short, we will call such problems LOPs and if the variables are constrained to be integers, then such problems are Integer Linear Optimization Problems or ILOPs and if the variables are constrained to be binary, then the problems are Binary Linear Optimization Problems or BLOPs .    Let's take a look at an purely mathematical example of an LOP.         A few conventions that we will use in this book:     This is a maximum problem, so we will use the variable for the objective and for each of the variables.    If instead we have a minimum problem, then we will use for the objective and for the variables. We will see another problem like this later.    The variables (either or ) need to have the non-negative constraint that is the last line of the LOP in .      Many LOPs naturally have the nonnegative constraint, because they arise from realistic problems in which variables cannot be negative. however, more abstract problems or mathematical problems may not have such constraints. We will learn in how to either take such problems and both add nonnegative constraints and then solve them without such constraints.   An example of a minimum problem is the following.         As you can see, we have use the variable for the objective function and for the variable. Another difference with is that the first three constraints are of the form . Although this is not necessary, it is common. We will graph this feasible set in the next section and the characteristics of this set often are paired with a minimum problem.    Standard Form  The LOP that we have been working on the past two section is in a special form that is needed for solving these problems using a technique we will develop in . We define it below and then explain how to get other problems into this form.    A Linear Optimization Problem is in standard form if the following are conditions are met:   It is a maximum problem.    All the constraints are of the form , some constant.    All variables are nonnegative.       Not all LOPs are in standard form. Clearly and many in as well. However, there is a systematic way to put such problems in standard form.     If the problem is a minimize problem in the form , define .    Any inequality in the form should be multiplied by to get       There are techniques to handle cases when the nonnegative constraint is not satisfied. We will see how to handle these cases in .     The following example shows how to put an LOP that is not in Standard Form into one that is.    Put in standard form.    First, if the objective is a minimum problem, then we can make it a maximum problem by writing . In this case, .  Next, to get the inequalities in the proper form, multiply by and recall that changes a to a . In this problems     Therefore the problem in Standard Form is         General and Matrix Forms of an LOP  In this section, we write the General Form of an Linear Optimization problem. Assume that there are variables. If we have a maximum problem, we will use the variables and a general constraint can be written     where will be between 1 and . So in general a maximum problem can be written:     These problems can be written in Matrix Form in the following way:     where the inequalities must hold for each element of the vector.   "
},
{
  "id": "sect-lops-2",
  "level": "2",
  "url": "sect-lops.html#sect-lops-2",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "   Definition of a Linear Optimization Problem and related problems.    Definition of the Standard Form of an LOP    How to put a minimum problem into standard form    General Form of an LOP    "
},
{
  "id": "def-lop",
  "level": "2",
  "url": "sect-lops.html#def-lop",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  A Linear Optimization Problem This is not the most general form of such a problem. We will see a general linear optimization problem in . consists of     A linear objective function that is to be minimized or maximized.    A set of linear inequalities.    A set of nonnegative constraints on all of the variables.     In short, we will call such problems LOPs and if the variables are constrained to be integers, then such problems are Integer Linear Optimization Problems or ILOPs and if the variables are constrained to be binary, then the problems are Binary Linear Optimization Problems or BLOPs .   "
},
{
  "id": "prob-lop1",
  "level": "2",
  "url": "sect-lops.html#prob-lop1",
  "type": "Problem",
  "number": "2.2.2",
  "title": "",
  "body": "      "
},
{
  "id": "sect-def-lop-7",
  "level": "2",
  "url": "sect-lops.html#sect-def-lop-7",
  "type": "Note",
  "number": "2.2.3",
  "title": "",
  "body": " Many LOPs naturally have the nonnegative constraint, because they arise from realistic problems in which variables cannot be negative. however, more abstract problems or mathematical problems may not have such constraints. We will learn in how to either take such problems and both add nonnegative constraints and then solve them without such constraints.  "
},
{
  "id": "prob-min-lop",
  "level": "2",
  "url": "sect-lops.html#prob-min-lop",
  "type": "Problem",
  "number": "2.2.4",
  "title": "",
  "body": "      "
},
{
  "id": "def-std-max-form",
  "level": "2",
  "url": "sect-lops.html#def-std-max-form",
  "type": "Definition",
  "number": "2.2.5",
  "title": "",
  "body": "  A Linear Optimization Problem is in standard form if the following are conditions are met:   It is a maximum problem.    All the constraints are of the form , some constant.    All variables are nonnegative.      "
},
{
  "id": "sect-std-form-7",
  "level": "2",
  "url": "sect-lops.html#sect-std-form-7",
  "type": "Example",
  "number": "2.2.6",
  "title": "",
  "body": "  Put in standard form.    First, if the objective is a minimum problem, then we can make it a maximum problem by writing . In this case, .  Next, to get the inequalities in the proper form, multiply by and recall that changes a to a . In this problems     Therefore the problem in Standard Form is      "
},
{
  "id": "sect-lop-general-2",
  "level": "2",
  "url": "sect-lops.html#sect-lop-general-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "General Form "
},
{
  "id": "sect-lop-general-6",
  "level": "2",
  "url": "sect-lops.html#sect-lop-general-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Matrix Form "
},
{
  "id": "sect-geometry",
  "level": "1",
  "url": "sect-geometry.html",
  "type": "Section",
  "number": "2.3",
  "title": "Geometry of Feasible Sets",
  "body": " Geometry of Feasible Sets     The definition of a feasible set .    How to graph a feasible set in the -plane.    The structure of a feasible set and how it helps solve LOPs    The convexity of feasible sets.      In the , we saw many different type of problems that fall into linear optimization. Many of these problems had a lot of variables and as we will see in this course is it easy to get tens or hundreds of variables.    Consider a set of linear inequalities that arise from an Linear Optimization Problem in standard form:     The feasible set for the set of inequalities is the set of all points that satisfy all of the inequalities.     If there are no points in the feasible set, then the feasible set is empty.    Maximum Problem in            Graph the feasible set given by the inequalities in .    In this case, we use the techniques from to graph each of the following inequalities. If we write the equation in intercept form as     then the intercepts of these are and . The linear equation can be written in intercept form as     which has the intercepts and . Returning to the inequalities, the origin is within the feasible side of these lines so we cross out the other (northeast) side.  Additionally, the nonnegative inequalities have us cross out the region outside the first quadrant. The result of this is   A graph of the feasible set of the above problem. For each inequality, the side of the line not in the feasible set is crossed out. The set of points left is the feasible set for the inequalities and labelled .        The feasible set is the quadrilateral that is not shaded and labelled .      Geometry of 2D Feasible Sets  Examining the feasible set in , notice that it is a polygon. The possible solutions to the problem is this set of points. So if we're trying to find a solution, we limit the possible points to those in the feasible set. But that's still a lot!!  One way to try to determine a solution, recall that we are trying to maximize the function . If we take any point in the feasible set, then increasing in the direction will increase the most of any direction. Recall that if there is a function , then the direction of increase in the most is and in the case of a linear function, this is the coefficients of the function. A plot of the feasible set with the randomly selected point and a line going in the direction can be seen in the following plot:   A feasible set in the first quadrant together with a line segment with one end in the feasible set pointing in the direction of maximum increase of the objective function.        The maximum that the function within the feasible set reaches on this line would be where the line crosses the boundary (on the open circle). In the example above, repeating this argument, any random point selected, the line segment will be parallel to the one above and the maximum value will be on the north-east boundary of the feasible set.  A similar argument can be made with any point in . If a line segment in the direction , then it can be maximized along the upper right boundary of .  Notice that in this case, since the coefficients of the variables in the objective function are both positive, the optimal function would be along the upper right side of the feasible set. Objective functions with other signs may result in the optimal point along other edges.   From a geometric argument, the optimal value of the objective function should be along the boundary of the feasible set.   Continuing along this rationale, let's pick a point along the boundary of the feasible set. For example, . This boundary is the line or if we solve for , . The objective function along this line is . The objective function increases as decreases. This is true up to the point on the boundary a the corner .  If we look at the other boundary side of the feasible set, the function is or solving for , . Substituting this into the objective:     And on this side, the objective increases as increases. This is true again up to the corner at .  Using this argument, it appears that the objective is optimal at corners or vertices of the feasible set.  Notice with this argument, we saw that along the two edges that we checked, the objective either increased or decreased along the edge. It might be the case that the objective is constant along the edge. Thus the two vertices of the side would have the same value of the objective.   From a further geometric argument, the optimal value of the objective function should be at a vertex of the feasible set.      is a minimum problem.     Sketch the feasible set for the problem.    Using the techniques from , we put each line from the constraint in intercept form and plot the line, crossing out the false side. The result is the feasible set in .             Pick a random point in the feasible set and draw a directed line segment in the direction of the minimizing the objective.    The direction of minimization is . The point is shown with a directed line segment on .      From the feasible set and the directed line segment, which sides of the feasible set does it appear the objective function is minimized?    It appears that the southwest sides of the feasible set would have the minimum values.      Find the relevant vertices of the feasible set.    The relevant vertices are found by finding the intersections of pairs of the boundary lines. These are and .      Evaluate the objective function at each of the vertices and find the smallest one.            55  0  220    35  5  155    15 25 135    0 47.5 142.5     From the above table, it appears that the minimum is 135 and occurs when and .       Solving LOPs Possible Algorithm  So it seems that finding the optimal point of a linear optimization problem is straight forward. If we find all of the vertices of a feasible set, and evaluate the objective at these points, then we will find the optimal solution.  This would work, however, finding all of the vertices may be tricky, even if we have objectives and constraints of only two variables. With more variables, it is even more complex and many real-world problems may have hundreds or thousands of variables with hundreds or thousands of constraints. This would results in possibly millions of vertices.  We will see in the next chapter a more reasonable solution. This will start with a vertex (or possible vertex), and move to another vertex that increases (for a maximum problem) the objective and continue until the optimal value is reached.    Feasible Sets are Convex  Consider a linear optimization problem with to be maximizes and it has a feasible set with the following shape:        Let's say that we have an algorithm that walks around vertices. Let's say that the algorithm is at the point and it is noted that the objective at this point is . We also note that if we go the vertex at , then the objective is now , so it has increased. The algorithm now checks if any any adjacent vertices have a larger objective value. At the point , the objective is therefore you may conclude that the maximum must be 28 at because it is larger than at any adjacent vertex.  However, note that at the vertex , the objective is , so larger than and this would in fact be maximum for this problem.  This situation cannot happen because feasible sets from Linear Optimization Problems are convex. As noted in , a single linear inequality cuts the -plane into two regions in the plane. As noted in , Linear Optimization Problems (LOPs) have a set of linear inequalities which lead to the following. In sort, any LOP has a convex feasible set and as we will see in how this will be exploited.   "
},
{
  "id": "sect-geometry-2",
  "level": "2",
  "url": "sect-geometry.html#sect-geometry-2",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": "   The definition of a feasible set .    How to graph a feasible set in the -plane.    The structure of a feasible set and how it helps solve LOPs    The convexity of feasible sets.    "
},
{
  "id": "def-feasible-set",
  "level": "2",
  "url": "sect-geometry.html#def-feasible-set",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  Consider a set of linear inequalities that arise from an Linear Optimization Problem in standard form:     The feasible set for the set of inequalities is the set of all points that satisfy all of the inequalities.   "
},
{
  "id": "sect-geometry-3-3",
  "level": "2",
  "url": "sect-geometry.html#sect-geometry-3-3",
  "type": "Note",
  "number": "2.3.2",
  "title": "",
  "body": " If there are no points in the feasible set, then the feasible set is empty.  "
},
{
  "id": "prob-2d-lop",
  "level": "2",
  "url": "sect-geometry.html#prob-2d-lop",
  "type": "Problem",
  "number": "2.3.3",
  "title": "Maximum Problem in <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>.",
  "body": " Maximum Problem in         "
},
{
  "id": "sect-geometry-3-5",
  "level": "2",
  "url": "sect-geometry.html#sect-geometry-3-5",
  "type": "Example",
  "number": "2.3.4",
  "title": "",
  "body": "  Graph the feasible set given by the inequalities in .    In this case, we use the techniques from to graph each of the following inequalities. If we write the equation in intercept form as     then the intercepts of these are and . The linear equation can be written in intercept form as     which has the intercepts and . Returning to the inequalities, the origin is within the feasible side of these lines so we cross out the other (northeast) side.  Additionally, the nonnegative inequalities have us cross out the region outside the first quadrant. The result of this is   A graph of the feasible set of the above problem. For each inequality, the side of the line not in the feasible set is crossed out. The set of points left is the feasible set for the inequalities and labelled .        The feasible set is the quadrilateral that is not shaded and labelled .   "
},
{
  "id": "fig-fs-maximize",
  "level": "2",
  "url": "sect-geometry.html#fig-fs-maximize",
  "type": "Figure",
  "number": "2.3.6",
  "title": "",
  "body": " A feasible set in the first quadrant together with a line segment with one end in the feasible set pointing in the direction of maximum increase of the objective function.       "
},
{
  "id": "sect-geometry-fs-2d-8",
  "level": "2",
  "url": "sect-geometry.html#sect-geometry-fs-2d-8",
  "type": "Note",
  "number": "2.3.7",
  "title": "",
  "body": " From a geometric argument, the optimal value of the objective function should be along the boundary of the feasible set.  "
},
{
  "id": "sect-geometry-fs-2d-15",
  "level": "2",
  "url": "sect-geometry.html#sect-geometry-fs-2d-15",
  "type": "Note",
  "number": "2.3.8",
  "title": "",
  "body": " From a further geometric argument, the optimal value of the objective function should be at a vertex of the feasible set.  "
},
{
  "id": "sect-geometry-fs-2d-16",
  "level": "2",
  "url": "sect-geometry.html#sect-geometry-fs-2d-16",
  "type": "Checkpoint",
  "number": "2.3.9",
  "title": "",
  "body": "   is a minimum problem.     Sketch the feasible set for the problem.    Using the techniques from , we put each line from the constraint in intercept form and plot the line, crossing out the false side. The result is the feasible set in .             Pick a random point in the feasible set and draw a directed line segment in the direction of the minimizing the objective.    The direction of minimization is . The point is shown with a directed line segment on .      From the feasible set and the directed line segment, which sides of the feasible set does it appear the objective function is minimized?    It appears that the southwest sides of the feasible set would have the minimum values.      Find the relevant vertices of the feasible set.    The relevant vertices are found by finding the intersections of pairs of the boundary lines. These are and .      Evaluate the objective function at each of the vertices and find the smallest one.            55  0  220    35  5  155    15 25 135    0 47.5 142.5     From the above table, it appears that the minimum is 135 and occurs when and .    "
},
{
  "id": "fig-non-convex-fs",
  "level": "2",
  "url": "sect-geometry.html#fig-non-convex-fs",
  "type": "Figure",
  "number": "2.3.12",
  "title": "",
  "body": "     "
},
{
  "id": "sect-slack-dict",
  "level": "1",
  "url": "sect-slack-dict.html",
  "type": "Section",
  "number": "3.1",
  "title": "Slack Variables and Dictionaries",
  "body": " Slack Variables and Dictionaries     Use slack variables to convert an inequality to an equation.    Understand the geometry of slack variables in a feasible set.    Create a Dictionary for a Linear Optimization Problem.    Define solutions, basic and feasible solutions and optimal solutions to a LOP.    Use Dictionaries to develop a solution algorithm.      In , we examined feasible sets using geometry. As we saw in that section, solutions occur on the boundary of the feasible set. We will begin developing an algorithm which starts on a vertex of the feasible set and steps to other vertices that increase the objective function, continuing until the optimum value is reached.    Slack Variables  Consider an inequality such as . This is nice mathematically in that it is linear, however an inequality is not quite as nice as a equation. We can make this an equation by adding a value, to the left side to make this an inequality. That is     and in order to keep the inequality , it is imperative that . This may be nicer, but we now have an equation of 3 variables. It is a plane or can be thought of as a family of lines with the parameter . A plot of this family is given in   The family of lines with the parameter and slack variable .        The side of the line that is feasible is the same side where .  The idea of slack variables with a single inequalities is now extended to a set of inequalities. As an example, let's return to . We will introduce slack variables to the first three inequalities that will convert the inequality to an equation. If we introduce and in the following way:     and and must be nonnegative in order for the above inequalities in to remain true. Similar to that above, we can plot the feasible set by plotting each of the equations where the slack variables are 0 and then shade the region when each is positive.   A plot of a feasible set of together with plots of the lines with specific values for the slack variables. The feasible set is the set of all such that the variables (both original and slack) are positive.        The Dictionary for an LOP  Now that slack variables have been added to each inequality in an LOP, we look at the set of equations produced and see if we can develop a way to find the optimum solution to the LOP.  Returning to , solve for and , we can write the LOP as     This is called the dictionary form of the LOP. Note that the variables on the right of the equals signs are only and . These are called the nonbasic variables or parameters of the problem. If we have values for these variables, then we can determine the values of the other variables, . The three variables are called the basic variables and the set of these are called the basis of the problem. When a problem is originally written in dictionary form, the basic variables are the slack variables and the parameters are the original variables.  We will develop a solution algorithm which moves variables from the basis to the parameters. The basic and nonbasic variables are often distinguished from one another using the variables and respectively. For example, in the dictionary above, and .  Note also, that when and are 0, these are the 5 lines that define the feasible set as seen in . Note that the original variables are zero on the coordinate axes. You can also notice that the vertices of the feasible set occur where two of the variables are zero. There are 5 of these. Also, other intersection points occur between lines where the variables are 0, like . Four of these sets of points are not within the feasible set, such as such as and .  Recall that from the previous chapter, that the optimal point occurs on one of the vertices of the feasible set. We will see here in this chapter how to walk from vertex to vertex without leaving the feasible set and also stopping when reaching the maximum of the objective.    Basic Solutions  A solution to either the dictionary or the tableau is any set of values for that satisfy the problem constraints written as equalities. For example,     is a solution to the LOP above. This is because if we substitute these values of , then each equation of the dictionary is satisfied. The vertical line in between the variables and is used to separate out the original variables from the slack variables and is helpful for readability.  To see that is a solution, substitute the values of and into the dictionary.     Also, we can find the value of that corresponds to is solution is .   The term solution is not a (or the) optimal solution to the LOP, that is this may not be a point that is the optimum value of the function. We use the term solution here as a indication that a point satisfies all of the equations. The term optimal solution or optimum will used for this.   A solution is basic if the parameters are all zero. In the LOP problem above, the solution     is basic with value . If we have a problem in dictionary form, we will set the parameters to 0 and the basic variables will be constants on right side of the equations.  In the example where and is a basic solution with the basis . Recall that we mention above that when two variables (in this case, not in general) are zero, then we are at a vertex of the feasible set. This vertex is at the origin.  Another basic solution is     and is basic because the two variables and are 0. Thus for this case, and   A dictionary or tableau is feasible if its corresponding basic solution is feasible. The solutions , and are feasible solutions because all of the variables are non-negative. (Note: you would need to check that they are solutions.). The solution     is not because does not satisfy the nonnegative constraint.    For the solutions in , , and , plot the solution on the feasible set in to verify that each is feasible or not.    For each of the solutions, the numbers to the left of the vertical line are the original variables and those are the variables to plot on the feasible set.    Replotting the feasible set with the solutions:   A plot of a feasible set of together with four solutions for the LOP.        We are now going to develop the Simplex Method to solve the LOP using the dictionary. This technique will be systematically going from vertex to vertex of the feasible set until the optimal solution is reached. This is perhaps a bit too simplistic, because as we will see that the starting basis may not be in the feasible set and we need to get there first.   Lastly, the dictionary is optimal if its basic solution is optimal. The simplex method will stop when we reach an optimal solution.    Developing the Simplex Method  Returning to the dictionary in , consider the objective function     and notice that if either or increases in value then increases. Since we are seeking a maximum of , we want to increase either , or both. We must be careful however, because as and increases, and decrease and we need to ensure that they must stay nonnegative. Before increasing these variables, recall that the basis is indicating that these three variables are in the basis (which are on the left side of all of the equations in a dictionary).  We can select one of the parameters, , to increase its value. As we will typically do, we will increase the first one and keep the others as 0, There are other algorithms (variations of the one that we are developing) that use the parameter with the largest coefficient to select the variable instead. so the variable will be increased, so will set in the constraints of :     If we increase , and keep and nonnegative, we require that     The largest value of that ensure both of these stay true is . If we let in , notice that when the variable becomes zero, therefore it appears that we have interchanged and between basic and nonbasic variables. Thus the new basis is and the parameters is . This switch of variables is called a pivot and is denoted , where the first number 1 is the variable entering the basis and the second number is the one leaving.  If we want to be in the basis and to leave we use the 2nd equation (first equation coming from a constraint) in the dictionary in and solve for or     To get a basic variable for the rest of the dictionary, we plug this in the other equations in , resulting in the new dictionary:     and for simplicity, if we multiply each row each by 4 to get:     (Note: there was no reason to multiply the last row by 4 since there are no fractions in the equation, but you will see later why we want to do this.)  Also, we have a new basic solution for the dictionary in as     where the superscript denotes the first step of the simplex method. Also, this dictionary corresponds to the basis of and parameters . The notation shows that 1 has left the parameter set to become a basic variable replacing 3.  The objective in the first row of is , when setting the parameters to 0. Thus, the objective has increased from the initial dictionary, but also that if we increase , then will increase. Because of this, we also know that the current solution is not optimal. We can increase (and set ) so long that it satisfies:     This occurs by selecting     Because the 8 came from the the 3rd equation of , we are going to solve for (or actually ) in this equation or     We now take the other three equations in and multiply by 5 because of the coefficient of the variable above to get:     and then in each of the terms in the parentheses substitute , to get     If we note that each of the first, second and fourth equations above are factors of 4 (the previous coefficient of all parameters), if we divide these three equations by 4 to get:     which is the current dictionary. Note that is now a parameter and is now a basic variable. This means that we have done the pivot: and the parameter set is and basis is . The basic solution of this dictionary is     with objective function value .  If we look at the dictionary, the top row is . If we increase the variable , then the objective function will be increased. We will increase , but in order to ensure that we remain in the feasible set, we required that     We wish to increase by the maximum amount with these constraints and this occurs when     where the second inequality has been ignored because it is automatically satisfied for any positive value of . Since the minimum value is associated with the 4th equation, we will solve for in this equation or     We then substitute this into the other equations or     The first three equations are all multiples of 5, the previous constant, so we can divide each equation by 5 to get     The basic solution of this tableau is     with the objective function taking on the value . This solution has basis variables and parameters Lastly, looking at the objective equation, increasing our either of the parameters or decreases the objective value, so this means that this solution is optimal.   These set of steps form part of the simplex method for solving LOPs. In the next section, we repeat this example with a matrix form of the dictionary, called a tableau. This will make all of the calculations easier to do and with some software can simplify the steps tremendously.   "
},
{
  "id": "sect-slack-dict-2",
  "level": "2",
  "url": "sect-slack-dict.html#sect-slack-dict-2",
  "type": "Objectives",
  "number": "3.1",
  "title": "",
  "body": "   Use slack variables to convert an inequality to an equation.    Understand the geometry of slack variables in a feasible set.    Create a Dictionary for a Linear Optimization Problem.    Define solutions, basic and feasible solutions and optimal solutions to a LOP.    Use Dictionaries to develop a solution algorithm.    "
},
{
  "id": "fig-slack-vars",
  "level": "2",
  "url": "sect-slack-dict.html#fig-slack-vars",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " The family of lines with the parameter and slack variable .       "
},
{
  "id": "sect-slack-dict-4-7",
  "level": "2",
  "url": "sect-slack-dict.html#sect-slack-dict-4-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slack variables "
},
{
  "id": "fig-lop-1",
  "level": "2",
  "url": "sect-slack-dict.html#fig-lop-1",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": " A plot of a feasible set of together with plots of the lines with specific values for the slack variables. The feasible set is the set of all such that the variables (both original and slack) are positive.     "
},
{
  "id": "sect-dictionary-5",
  "level": "2",
  "url": "sect-slack-dict.html#sect-dictionary-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dictionary nonbasic variables parameters basic variables basis "
},
{
  "id": "sect-dictionary-6",
  "level": "2",
  "url": "sect-slack-dict.html#sect-dictionary-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basic nonbasic "
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
  "id": "sect-basic-solutions-8",
  "level": "2",
  "url": "sect-slack-dict.html#sect-basic-solutions-8",
  "type": "Note",
  "number": "3.1.3",
  "title": "",
  "body": " The term solution is not a (or the) optimal solution to the LOP, that is this may not be a point that is the optimum value of the function. We use the term solution here as a indication that a point satisfies all of the equations. The term optimal solution or optimum will used for this.  "
},
{
  "id": "sect-basic-solutions-9",
  "level": "2",
  "url": "sect-slack-dict.html#sect-basic-solutions-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basic "
},
{
  "id": "sect-basic-solutions-16",
  "level": "2",
  "url": "sect-slack-dict.html#sect-basic-solutions-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "feasible "
},
{
  "id": "sect-basic-solutions-19",
  "level": "2",
  "url": "sect-slack-dict.html#sect-basic-solutions-19",
  "type": "Checkpoint",
  "number": "3.1.4",
  "title": "",
  "body": "  For the solutions in , , and , plot the solution on the feasible set in to verify that each is feasible or not.    For each of the solutions, the numbers to the left of the vertical line are the original variables and those are the variables to plot on the feasible set.    Replotting the feasible set with the solutions:   A plot of a feasible set of together with four solutions for the LOP.       "
},
{
  "id": "sect-basic-solutions-20",
  "level": "2",
  "url": "sect-slack-dict.html#sect-basic-solutions-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Simplex Method "
},
{
  "id": "sect-basic-solutions-21",
  "level": "2",
  "url": "sect-slack-dict.html#sect-basic-solutions-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "optimal "
},
{
  "id": "sect-develop-simplex-9",
  "level": "2",
  "url": "sect-slack-dict.html#sect-develop-simplex-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pivot "
},
{
  "id": "sect-develop-simplex-48",
  "level": "2",
  "url": "sect-slack-dict.html#sect-develop-simplex-48",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simplex method "
},
{
  "id": "sect-tableau",
  "level": "1",
  "url": "sect-tableau.html",
  "type": "Section",
  "number": "3.2",
  "title": "Tableaus and the Simplex Method",
  "body": " Tableaus and the Simplex Method     Write down a tableau for a LOP    Perform a matrix pivot on a tableau.    Develop an algorithm on the tableau to optimize the tableau.    Use software to perform pivots to the simplex tableau.      In , we walked through how to solve a Linear Optimization Problem (LOP) using the dictionary. It was a bit cumbersome to solve the problem this way in terms of solving for variables and substitute that into all other equations and simplifying.  We see in this section that since all of the equations are linear, we can use a matrix to organize the equations and perform the operations.    Introduction to tableaus  A tableau is matrix representation of a dictionary . For example, the dictionary in is:     and also the objective function can be written as . These four equations can be put into a matrix as     The first two columns are the variables and , the original variables, the next block of four columns are and and the last column is the -column of right hand sides. Also, the last row is the objective row. It is standard to write the tableau with vertical lines that separate the original variables from the slack and objective variables and the last (constant) column, as well as a horizontal line to separate out the objective function.  Also, recall that the dictionary has the basis of and parameters . We can see this from the tableau by looking at the columns. Columns 3 through 6 are columns of an identity matrix and these are the basic variables (except for ). The remaining columns 1 and 2 are thus the parameters.  Knowing this, we can read the basic solution by setting the parameters to zero. Doing this, results in the matrix:     Recall that first three columns are the basic variables, the 4th columns is the objective, so this corresponds to     We will perform pivots on these matrices, but let's look at another tableau and how to write the basic solution.    Find the basic solution of the following tableau:     where the variables are the standard .    First, notice that the parameter set is because those columns are not multiples of the identity matrix. We set and to zero and write down the equations as     This can also be written as     As we will see below, often the parameters will have a coefficient and that will need to be divided through to find the result.    As we saw in , solving for various variables switches the basis and parameters and moves the basic solution from vertex to vertex along the feasible set. We can represent each dictionary as a tableau, but in this section we will learn how to do the same operation on the tableau itself.    Operations on Tableaus  We now repeat what we did in using a tableau instead of dictionaries. The tableau from is     From the steps examined in the Dictionary, we want to be a basis and we also determined that should be a parameter. Switching the basis variables can be done with a matrix pivot described in about row 1, column 1 or since takes the place of in the basis, this is equivalent to the tableau pivot of . The row operations and the transformed matrix is:     To find the basic solution of , note that the parameter set is now , which are the columns which are not columns of the identity matrix. If we set these two variables to zero, then read the other solutions off the matrix to get:     where the , which is the coefficient of the basic variables is included as the fraction .  For the next step, we use the same logic as in to determine that 2 leaves the basis and 4 enters or the tableau pivot . This corresponds to doing a matrix pivot on row 2, column 2 and eliminate the rest of the elements in column 2. These row operations are     and the result is     After performing a pivot, the next step is to check if it is optimal. This means looking at the objective row, which can be written (by solving for :     and since increasing increases , so this is not an optimal solution. We can look at what we did in the dictionary form of this to determine which variable enters the basis, but let's use the tableau to determine this. We will zero out , the other basic variable     We seek to maximize the amount to increase and that will switch the other variable to the basis.     and we pick the 3rd equation resulting in entering the basis or the tableau pivot of . This is equivalent to a matrix pivot about row 3, column 3, with the row operations:     Now if we look at the objective row, this can be written as and since increasing either of the two basic variables, decreases the objective, so this is optimal. The basic solution for this tableau is     with the objective value of . This is the same result as the dictionary in . In fact, the steps were identical, just in a matrix context instead of a algebra context.    Performing Tableau Operations with WebCAS  The row operations in the previous section that perform a matrix pivot is the piv command from . Let's revisit the simplex tableau in in WebCAS.  First, go to the Gaussian Eliminator in WebCAS and we want to fix some of the settings that will decorate the matrices in a way similar to those shown here. Click the gear icon in the top bar and     For the Vertical Line Mode , select Before Last Column .    Select the checkbox for the Horizontal Line for last row .    On the option Slack Variables , select .     And click Save Changes .  Enter the matrix in in the Enter a Matrix textbox and it should look the same as the matrix. Recall that separate all numbers by spaces (no other symbol) and each row should be a separate row in the text box.  Note that the first step in finding the optimal value of the tableau in is to do a matrix pivot about row 1, column 1 or a tableau pivot . If you use WebCAS with piv(1,1) , you will get the tableau in . Note that you can also use the tableau pivot notation 1 |-> 3 to accomplish the same task.  The next step results in a matrix pivot around row 2, column 2 or tableau pivot . Using piv(2,2) or 2 |-> 4 in WebCAS will result in .  The last step in finding the optimal solution was to do the matrix pivot around row 3, column 3 or tableau pivot . Using piv(3,3) or 3 |-> 5 in WebCAS will result in .    Phase II of the Simplex Method  It seems odd that we start with what is called Phase II of a method to solve, but all problems will need to go through Phase II and as we will see below that not all problems need to go through Phase I.   Phase II of Simplex Method   If a tableau is feasible, then the following steps are Phase II of the simplex method:     If there are no negative numbers in the objective row, the basic solution is optimal. The algorithm should stop.    If not, choose the leftmost negative number in the objective row. This is the pivot column . The variable that corresponds to the th column is called the entering variable since this variable is entering the basis.    Create the b-ratio or for all and for , the pivot column.    Choose such that the b-ratio is the smallest nonnegative ratio . Row will be the pivot row . The basic variable in the th row is called the leaving variable and denote it .    Perform a matrix pivot about row , column or in terms of a tableau pivot .    Goto step 1.         Consider a LOP with the following tableau:     Note first that the basic solution is feasible because the right column has no negative numbers. Therefore, use to find the solution.    First, note that the objective row (bottom) has negative numbers, so this isn't an optimal solution. We select the left-most negative number in this row, which is column 1.  We compute the -ratio with     and the small non-negative ratio is in the second row. Therefore we perform a pivot about the second row, first column. Note: since will enter the basis and will leave, then the tableau pivot is .  After performing the matrix pivot we get:     Examining this tableau, there is still a negative number in the objective row, which means that this is not an optimal solution. Therefore, we find the -ratios using the 2nd column or     and since the smallest non-negative number is in the first row, the next step is to perform a matrix pivot about the first row, second column. This corresponds to the tableau pivot of resulting in     Now notice that the objective row has no more negative numbers in it. This means that the basic solution of     is optimal. The objective value is . Note that using the original variables, this solution corresponds to the point .    We'll solve one more problem in this section to show Phase II of the Simplex Method.           Use Phase II of the Simplex method to find the optimal solution of .    First, write the constraints with slack variables:     where all variables need to be nonnegative or and the objective function can be written as   Next, write these in tableau form.     and then we use Phase II of the Simplex Method. We first check if it is optimal, but since there are negative numbers in the objective (bottom) row, this is not optimal. Recall negative numbers in the objective row mean that if that variable increases, the the objective increases, so it cannot be optimal. To determine the pivot note we start with the leftmost negative number in the objective row or column 1 and form the -ratio or     and smallest nonnegative above is 14 in the 3rd row. (this corresponds to the variable). Therefore we perform a matrix pivot on row 3, column 1, which corresponds to the tableau pivot of .     Check if the objective row has negatives and it does in column 2. Again form -ratio for this column or     and the smallest nonnegative ratio is in the first row, we perform a tableau pivot of .     There are still negatives in the objective row, so this is not optimal. The leftmost negative in the objective row is in column 5, so we form -ratio for this column or     and the smallest nonnegative value is in row 2, so we will perform a tableau pivot of . The new tableau is:     This is still not the optimal solution (there is a negative in the objective row), so again we form -ratio for column 3 or     and the smallest ratio is in row 4. A tableau pivot of is performed to get:     And now the tableau is in optimal form there are no negatives in the objective row. The basic solution for this is     resulting the objective of .     "
},
{
  "id": "sect-tableau-2",
  "level": "2",
  "url": "sect-tableau.html#sect-tableau-2",
  "type": "Objectives",
  "number": "3.2",
  "title": "",
  "body": "   Write down a tableau for a LOP    Perform a matrix pivot on a tableau.    Develop an algorithm on the tableau to optimize the tableau.    Use software to perform pivots to the simplex tableau.    "
},
{
  "id": "sect-intro-tableaus-2",
  "level": "2",
  "url": "sect-tableau.html#sect-intro-tableaus-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tableau "
},
{
  "id": "sect-intro-tableaus-13",
  "level": "2",
  "url": "sect-tableau.html#sect-intro-tableaus-13",
  "type": "Example",
  "number": "3.2.1",
  "title": "",
  "body": "  Find the basic solution of the following tableau:     where the variables are the standard .    First, notice that the parameter set is because those columns are not multiples of the identity matrix. We set and to zero and write down the equations as     This can also be written as     As we will see below, often the parameters will have a coefficient and that will need to be divided through to find the result.   "
},
{
  "id": "sect-tableau-5-4",
  "level": "2",
  "url": "sect-tableau.html#sect-tableau-5-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix pivot tableau pivot "
},
{
  "id": "alg-phaseII-simplex",
  "level": "2",
  "url": "sect-tableau.html#alg-phaseII-simplex",
  "type": "Algorithm",
  "number": "3.2.2",
  "title": "Phase II of Simplex Method.",
  "body": " Phase II of Simplex Method   If a tableau is feasible, then the following steps are Phase II of the simplex method:     If there are no negative numbers in the objective row, the basic solution is optimal. The algorithm should stop.    If not, choose the leftmost negative number in the objective row. This is the pivot column . The variable that corresponds to the th column is called the entering variable since this variable is entering the basis.    Create the b-ratio or for all and for , the pivot column.    Choose such that the b-ratio is the smallest nonnegative ratio . Row will be the pivot row . The basic variable in the th row is called the leaving variable and denote it .    Perform a matrix pivot about row , column or in terms of a tableau pivot .    Goto step 1.      "
},
{
  "id": "sect-tableau-7-4",
  "level": "2",
  "url": "sect-tableau.html#sect-tableau-7-4",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  Consider a LOP with the following tableau:     Note first that the basic solution is feasible because the right column has no negative numbers. Therefore, use to find the solution.    First, note that the objective row (bottom) has negative numbers, so this isn't an optimal solution. We select the left-most negative number in this row, which is column 1.  We compute the -ratio with     and the small non-negative ratio is in the second row. Therefore we perform a pivot about the second row, first column. Note: since will enter the basis and will leave, then the tableau pivot is .  After performing the matrix pivot we get:     Examining this tableau, there is still a negative number in the objective row, which means that this is not an optimal solution. Therefore, we find the -ratios using the 2nd column or     and since the smallest non-negative number is in the first row, the next step is to perform a matrix pivot about the first row, second column. This corresponds to the tableau pivot of resulting in     Now notice that the objective row has no more negative numbers in it. This means that the basic solution of     is optimal. The objective value is . Note that using the original variables, this solution corresponds to the point .   "
},
{
  "id": "prob-lop2",
  "level": "2",
  "url": "sect-tableau.html#prob-lop2",
  "type": "Problem",
  "number": "3.2.4",
  "title": "",
  "body": "      "
},
{
  "id": "sect-tableau-7-7",
  "level": "2",
  "url": "sect-tableau.html#sect-tableau-7-7",
  "type": "Checkpoint",
  "number": "3.2.5",
  "title": "",
  "body": "  Use Phase II of the Simplex method to find the optimal solution of .    First, write the constraints with slack variables:     where all variables need to be nonnegative or and the objective function can be written as   Next, write these in tableau form.     and then we use Phase II of the Simplex Method. We first check if it is optimal, but since there are negative numbers in the objective (bottom) row, this is not optimal. Recall negative numbers in the objective row mean that if that variable increases, the the objective increases, so it cannot be optimal. To determine the pivot note we start with the leftmost negative number in the objective row or column 1 and form the -ratio or     and smallest nonnegative above is 14 in the 3rd row. (this corresponds to the variable). Therefore we perform a matrix pivot on row 3, column 1, which corresponds to the tableau pivot of .     Check if the objective row has negatives and it does in column 2. Again form -ratio for this column or     and the smallest nonnegative ratio is in the first row, we perform a tableau pivot of .     There are still negatives in the objective row, so this is not optimal. The leftmost negative in the objective row is in column 5, so we form -ratio for this column or     and the smallest nonnegative value is in row 2, so we will perform a tableau pivot of . The new tableau is:     This is still not the optimal solution (there is a negative in the objective row), so again we form -ratio for column 3 or     and the smallest ratio is in row 4. A tableau pivot of is performed to get:     And now the tableau is in optimal form there are no negatives in the objective row. The basic solution for this is     resulting the objective of .   "
},
{
  "id": "sect-phase1",
  "level": "1",
  "url": "sect-phase1.html",
  "type": "Section",
  "number": "3.3",
  "title": "Simplex Method for Infeasible Tableaus",
  "body": " Simplex Method for Infeasible Tableaus     Determining when basic solutions of tableaus are infeasible    Developing an algorithm to pivot an infeasible simplex tableau to one that is feasible.    Understand the geometry of the algorithm.    Write down the Simplex method for infeasible tableaus.      Consider , in which coffee is shipped from warehouses to retail outlets. The problem was set up as an LOP in and we can use the techniques from the to write this as a tableau.  First, as discussed in , we need to write this problem in standard form , which means switching two of the inequalities by negating them. Also, the objective needs to be written as a maximum. The LOP in standard maximum form is     And the next step is to write the LOP in tableau form,     Typically, we look at the objective row to determine if a tableau is optimal and the there are no negatives in this row, so it appears it is optimal. The basic solution of is     and there are negatives in the solution, which implies that this is an infeasible basic solution. We need to perform some pivots to get a basic solution to be feasible first. This is what is called Phase I of the Simplex Method . We will use a simpler problem to develop this.    Infeasible Tableaus  Let's start with a simpler LOP who's initial basic solution is infeasible.         To begin with, this is not in standard form, and follow the steps in get this into standard form:     Since this only has two variables, a plot of this feasible set is helpful.   A plot of the feasible set from . The boundary lines (where the slack variables are each 0) are labelled with the slack variables. Also, all the intersection points between the slack variables are also labelled.      As with phase II, we will perform a pivot to move variables in and out of the basis. Instead of just looking at the standard algorithm, let's look at the feasible set and make some determinations.  First, the standard first step from phase II is to determine the entering variable, which could be discovered by using the objective function and determining which was the lowest indexed variable that would increase the value of the objective function.  We aren't concerned yet about the objective function. We just need to find a feasible solution. In this case, finding the leaving variable is generally a better first step. The leaving variable would bring the current vertex to along it's line. This would mean that we would select between , and on which variable to leave using the feasible set in , that means selecting one of the variables that form the boundary of the feasible set. .  Before selecting the pivot variables, let's look at the dictionary for this problem. If we introduce slack variables then in Dictionary form in the same way as that in , then     Note that the basic solution for this dictionary is     And note that the two variables that do not satisfy the nonnegative condition is and . The goal is to select a basis that is feasible and therefore either or will be selected as the leaving variable and this means that upon pivoting will either go to these lines on the feasible set.  Note that a pivot will be to solve for a variable entering the basis in one of the equations. This is then used in the other solutions. The hope would be that the new dictionary or tableau is feasible. Thus, selecting the most negative number, since when a variable is solved for, that value will become positive and perhaps lead to all other basic variable being solved for.  So we identify the most negative basic value to start with. This occurs in the equation in .  In this case, we can solve for either or and in either case, the result will be a positive value for either of these. These correspond to either or .  Without further analysis, it's hard to say which to choose. And think if we had 10s or 100s of parameters to choose from. If we did calculations to help determine the best , it may be expensive to compute. Because of this, we will choose the entering variable to be the negative parameter with lowest index .  Not only is this simple, but as we will see, this works most of the time.    Phase I of the Simplex Method  With the example above, we now present the following algorithm for getting a simplex tableau into a feasible solution.   Phase I of the Simplex Method      Select the row of the tableau with the most negative basic variable and call this row . The basic variable in row is the leaving variable and denote this variable .    Of the parameters of the problem, select the smallest indexed parameter with a negative value. An inquisitive reader should ask: What if there are not not any negative number in the row? Hmmm. Hold that thought, we'll get to that soon. Call this column and this will be the entering variable .    Perform the pivot .    If there are no other infeasible basic variables, this phase is done. If there are, go to step 1.       Let's now solve using . First, start with the tableau of .     And to start phase I, we note that the largest negative in the -column is in the second row. This will be the leaving variable and is . To select the entering variable, select the negative parameter with the smallest index in row 2. This occurs in column 1, so is the entering variable. Now perform a pivot.     This tableau is still infeasible. Note the basic solution for is so this is the leaving variable. To determine the entering variable, find the leftmost negative parameter in row 3. This is and we pivot:     This tableau is feasible in that all variables are now nonnegative. Notice that in this tableau corresponds to the vertex . This completes phase I of the simplex method.  If we now look to phase II, we notice that there are no negatives in the objective row, so in fact, this is the optimal solution. Although it is rare to finish up phase I with an optimal solution, it can happen and here's an example. The optimal basic solution is     with . This corresponds to the original problem as , so the function is minimized when and .    Apply Phase I of the Simplex Method to the following LOP.       This problem is in standard form and we can write the tableau as     We use phase I of the Simplex Method because there are negatives in the last column. This occurs in row 2 and the corresponding leaving variable is . To determine the entering variable, we select the leftmost (lowest indexed) of the parameters with negative values or . Thus pivot:     There are still negatives in the last column. This time it is in row 3 and will select its corresponding variable, as the leaving variable. The leftmost negative parameter is in column 2, so will be the entering variable and we perform the pivot:     Now that there are no negative numbers in the last column, this tableau is now feasible, completing the first phase of the simplex method.    After completing the first phase of the simplex method, we can now use phase II. We'll complete the solution to the problem above now    Apply Phase II of the Simplex Method to the last tableau from     For phase II, we first look in the objective row of the tableau and note that because there are negative numbers so the basic solution is not optimal. We start with the leftmost negative in the objective row or the fourth column, so is the entering variable. Then form the -ratios.     and noting that the only positive number here is in the first row. The basic variable in the first row is , so this is the leaving variable. Perform the pivot     This tableau is now optimal with basic solution     and objective . This corresponds to the point in the original variables of .    Let's take a look a the feasible set for this problem and see how the simplex method walks the vertices. First, here's a graph of the feasible set:   A plot of the feasible set for the LOP in . The sides of the lines not in the feasible set are crossed out. The resulting feasible set is the triangle .      And recall that the shaded side of the lines are the infeasible sides, meaning that the triangular region is the feasible set. When the simplex method starts (either under phase I or II), the initial point is always the origin. In this particular case, the only variable that is infeasible is , which is what we see in , in that the negative number in the left column corresponds to .  The first step moved the basic variable from the origin to the point , which is point . However, note that this is still infeasible. From the plot you can see that the side to the right of is infeasible. This can also be seen in in that the negative number in the left column corresponds to the basic variable .  Another pivot as seen in moves the basic solution to the vertex at . This is now a feasible solution, however, it is not optimal.  The last step as in moves the basic solution to the vertex at and it is optimal.    Summary of the Simplex Method  This and the previous section lays out the steps to perform the simplex methods. Overall, here are the steps needed to do this.     Write the LOP in standard form as shown in .    Writing down the tableau as shown in .    If the solution is infeasible, use the phase I in .    If the solution is not optimal, use the phase II of the simplex method as shown in .     Even though it appears that we have all of the bases covered, there are a couple of spots in the simplex method that can go wrong. Although these are eluded to while developing this method, the following section will cover these cases.   "
},
{
  "id": "sect-phase1-2",
  "level": "2",
  "url": "sect-phase1.html#sect-phase1-2",
  "type": "Objectives",
  "number": "3.3",
  "title": "",
  "body": "   Determining when basic solutions of tableaus are infeasible    Developing an algorithm to pivot an infeasible simplex tableau to one that is feasible.    Understand the geometry of the algorithm.    Write down the Simplex method for infeasible tableaus.    "
},
{
  "id": "sect-phase1-3-8",
  "level": "2",
  "url": "sect-phase1.html#sect-phase1-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Phase I of the Simplex Method "
},
{
  "id": "prob-infeasible1",
  "level": "2",
  "url": "sect-phase1.html#prob-infeasible1",
  "type": "Problem",
  "number": "3.3.1",
  "title": "",
  "body": "      "
},
{
  "id": "fig-infeasible-1",
  "level": "2",
  "url": "sect-phase1.html#fig-infeasible-1",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": " A plot of the feasible set from . The boundary lines (where the slack variables are each 0) are labelled with the slack variables. Also, all the intersection points between the slack variables are also labelled.     "
},
{
  "id": "alg-phaseI-simplex",
  "level": "2",
  "url": "sect-phase1.html#alg-phaseI-simplex",
  "type": "Algorithm",
  "number": "3.3.3",
  "title": "Phase I of the Simplex Method.",
  "body": " Phase I of the Simplex Method      Select the row of the tableau with the most negative basic variable and call this row . The basic variable in row is the leaving variable and denote this variable .    Of the parameters of the problem, select the smallest indexed parameter with a negative value. An inquisitive reader should ask: What if there are not not any negative number in the row? Hmmm. Hold that thought, we'll get to that soon. Call this column and this will be the entering variable .    Perform the pivot .    If there are no other infeasible basic variables, this phase is done. If there are, go to step 1.      "
},
{
  "id": "problem-infeasible-phaseI",
  "level": "2",
  "url": "sect-phase1.html#problem-infeasible-phaseI",
  "type": "Problem",
  "number": "3.3.4",
  "title": "",
  "body": "  Apply Phase I of the Simplex Method to the following LOP.       This problem is in standard form and we can write the tableau as     We use phase I of the Simplex Method because there are negatives in the last column. This occurs in row 2 and the corresponding leaving variable is . To determine the entering variable, we select the leftmost (lowest indexed) of the parameters with negative values or . Thus pivot:     There are still negatives in the last column. This time it is in row 3 and will select its corresponding variable, as the leaving variable. The leftmost negative parameter is in column 2, so will be the entering variable and we perform the pivot:     Now that there are no negative numbers in the last column, this tableau is now feasible, completing the first phase of the simplex method.   "
},
{
  "id": "sect-phaseI-algorithm-16",
  "level": "2",
  "url": "sect-phase1.html#sect-phaseI-algorithm-16",
  "type": "Problem",
  "number": "3.3.5",
  "title": "",
  "body": "  Apply Phase II of the Simplex Method to the last tableau from     For phase II, we first look in the objective row of the tableau and note that because there are negative numbers so the basic solution is not optimal. We start with the leftmost negative in the objective row or the fourth column, so is the entering variable. Then form the -ratios.     and noting that the only positive number here is in the first row. The basic variable in the first row is , so this is the leaving variable. Perform the pivot     This tableau is now optimal with basic solution     and objective . This corresponds to the point in the original variables of .   "
},
{
  "id": "fig-infeasible-2",
  "level": "2",
  "url": "sect-phase1.html#fig-infeasible-2",
  "type": "Figure",
  "number": "3.3.6",
  "title": "",
  "body": " A plot of the feasible set for the LOP in . The sides of the lines not in the feasible set are crossed out. The resulting feasible set is the triangle .     "
},
{
  "id": "sect-infeasible-unbounded",
  "level": "1",
  "url": "sect-infeasible-unbounded.html",
  "type": "Section",
  "number": "3.4",
  "title": "Infeasibility and Unboundedness",
  "body": " Infeasibility and Unboundedness     Determine when an LOP is unbounded.    Determine when an LOP is infeasible.      We brushed under the rug a couple of things that may go wrong when performing the simplex method. There are two ways that LOPs may not have a solution and these ways are examined in detail in this section.    Unbounded Problems  The first issue that may arise is that the problem doesn't have a solution because the feasible set is unbounded. Recall that bounded and unbounded feasible sets were discussed in . Consider the following LOP         We will use the simplex method to solve this. First, this problem is in standard form and we can write the initial tableau as     Since there are negatives in the last column, this tableau is infeasible and we can use phase I to solve it. To do this, select the row with the most negative in the last column or row 3. Thus the leaving variable in . The entering variable is the leftmost negative parameter in the row. This occurs in the first column, so is the entering variable.     There is still a negative in the last column (in the first row) and we take as the leaving variable and the leftmost negative parameter in this row in is column 2, so we do a tableau pivot:     And noting that there are no negatives in the last column, so we are out of phase I and move to phase II. There is a negative in the objective row (column 5), so we do the -ratios, however, there are no positive -ratios. This is an indication that the problem is unbounded.   We can look at this geometrically with a plot of the feasible set.   The feasible set in , labelled . This set is unbounded.        It appears that the feasible set is unbounded. Another way to look at this is if we look at the line parametrically as , , then the line is in the feasible set if it is above the line , which occurs when . Using this line, the objective function is , which is unbounded as .    Infeasibility  The other issue that can pop up is that the problem is infeasible, meaning that there is no feasible set (that is an empty set). Consider the following problem which is nearly the same, but importantly different than that in          Let's use the simplex method to solve this. First, this is in standard form, so we can write the tableau as     and we note that there is a negative in the last column, so this tableau is infeasible and we need to use phase I of the simplex method. The largest negative is in the third row, so is the leaving variable. The leftmost negative parameter in this row is in column 1, so is the entering variable. Perform the following tableau pivot:     and this last column still has a negative, so we're still in phase I. We look at the second row (with the only negative number in the last column) thus is the leaving variable and select the only negative parameter in that row or column 2, so is the entering variable. We perform the tableau pivot:     and we note that there is still a negative in the last column, so still in phase I and note that this occurs in row 1, so would be the leaving variable. However, there are no other negatives in this row, so no pivot will get this out of infeasibility. This happens when problem is infeasible.   Let's take a look at the feasible set:   A plot of the inequalities in . All regions of the plane is crossed out, so there is no feasible set for this problem.        Notice that all regions of the plane are crossed out, so there is no feasible set.  And to examine the Simplex Method in this case, recall that at the beginning the basic solution is at the origin. The first step of moves the basic solution to the point . The next step of moves the basic solution to the intersection of and near the point . And as noted, no further pivots will get the solution to be feasible.   "
},
{
  "id": "sect-infeasible-unbounded-2",
  "level": "2",
  "url": "sect-infeasible-unbounded.html#sect-infeasible-unbounded-2",
  "type": "Objectives",
  "number": "3.4",
  "title": "",
  "body": "   Determine when an LOP is unbounded.    Determine when an LOP is infeasible.    "
},
{
  "id": "prob-unbounded-LOP",
  "level": "2",
  "url": "sect-infeasible-unbounded.html#prob-unbounded-LOP",
  "type": "Problem",
  "number": "3.4.1",
  "title": "",
  "body": "      "
},
{
  "id": "fig-unbounded-fs",
  "level": "2",
  "url": "sect-infeasible-unbounded.html#fig-unbounded-fs",
  "type": "Figure",
  "number": "3.4.2",
  "title": "",
  "body": " The feasible set in , labelled . This set is unbounded.       "
},
{
  "id": "prob-infeasible-LOP",
  "level": "2",
  "url": "sect-infeasible-unbounded.html#prob-infeasible-LOP",
  "type": "Problem",
  "number": "3.4.3",
  "title": "",
  "body": "      "
},
{
  "id": "fig-fs-unbounded",
  "level": "2",
  "url": "sect-infeasible-unbounded.html#fig-fs-unbounded",
  "type": "Figure",
  "number": "3.4.4",
  "title": "",
  "body": " A plot of the inequalities in . All regions of the plane is crossed out, so there is no feasible set for this problem.       "
},
{
  "id": "sect-simplex-summary",
  "level": "1",
  "url": "sect-simplex-summary.html",
  "type": "Section",
  "number": "3.5",
  "title": "Summary of the Simplex Method",
  "body": " Summary of the Simplex Method  This section lists the details of the full Simplex Method that we have developed in this chapter.     Write the LOP in standard form as shown in . Note: if each the variables do not have the non-negative constraint, there are techniques in to handle these situations.    From the LOP in standard form, write down the tableau as shown in .     Phase I (details in )     If there are no negatives in the last column, the tableau is already feasible and move to Phase II in Step 4.    Find the row with the largest negative in the last column. Denote this as row and the last number is . The basic variable associated with this row is the leaving variable . Denote it .  Find the leftmost negative parameter (that one with the smallest index) in the row. The column where this takes place will be column and thus the entering variable will be .  If there are no negative parameter in row , then the tableau and thus the LOP is infeasible . Exit the algorithm.    Perform the pivot . Return to Step 3.        Phase II (details in ).     If there are no negative numbers in the objective row (ignoring the last column), the tableau is optimal. Goto step 5.    Select the leftmost negative number in the objective row (again, not including the last column). Call this column and will be the entering variable .    Calculate the -ratios of the last column to column . Call the row\/element with the smallest nonnegative ratio. Denote the basic variable in row , and this will be the leaving variable .  If there are no nonnegative ratios, then the problem is unbounded. Stop the algorithm.    Perform the pivot and return to Step 4.       The solution is optimal. Write down the basic solution and objective value from the tableau.     In previous sections, the geometry of the simplex method was shown through many examples, however these mainly confined to problems with two original variables such that the feasible set was easy to plot. To thoroughly understand the Simplex Method, one should understand the underlying geometry of these examples.  To finish this section, two more problems are solved completely with the Simplex Method using the steps above.         The first step is to put the problem in standard form, which means in this case to change to a maximum problem and then change the first and fourth inequalities.     Next, this is put into the simplex tableau:     Looking at the tableau, there are negatives in the last column, so this is phase I. We start with the most negative row (row 1) and note that the leftmost negative parameter occurs in column 3, thus we choose to enter the basis and since the current basis variable in row 1 is and thus     There are still negatives in the last column, so this is still phase I. The most negative value is in row 4 and the leftmost negative parameter in this row is in column 2. Thus enters the basis and the basic variable in row 4 is so the pivot will give     There are no remaining negatives in the last column, so we have moved out of phase I. Phase II starts will determining if there are negatives in the objective row and there are.  For this phase, the entering variable is the leftmost negative in the objective row or . The leaving variable is determined by -ratios or     and the smallest nonnegative ratio is the first row. Since the basic variable that corresponds to the 1st row is , this is the leaving variable and the pivot is or     Since there are no more negative parameters in the objective row, this tableau is now optimal. The basic solution is     and corresponding objective of , so the original objective is when and .           First, this is a maximum problem, so no changes needed to be made on the objective function. The three inequalities need to be flipped by multiplying by a negative number. This can be written as     which has the following simplex tableau:     Since this the last column has negative numbers, this tableau is infeasible and we use phase I. Select row 3, which has the most negative values in the last column and the leftmost negative parameter in the row is in column 1, so is the entering variable. The basic variable in row 3 is so this is the leaving variable and we perform the following pivot:     There is still a negative number in the last column. The most negative occurs in row 1, which has the basic variable , so this is the leaving variable. The leftmost negative parameter in this row occurs in column 2, so this is the entering variable and we perform the pivot     There is still a negative in the last column and this occurs in row 2, which corresponds to , so this is the leaving variable. The leftmost negative parameter in this row in in column 3, so the pivot is     There are no negatives in the last column, so this is now a feasible tableau and we move onto phase II of the Simplex Method. There are negatives in the bottom\/objective row, so we select the leftmost column in this row as the entering variable or . We could calculate all of the -ratios, but notice that the only positive one is in the 2nd row. The basic variable in the row is so the pivot:     There are still negatives in the objective row and so we examine column 6 (the leftmost and only negative number) and form -ratios. However, note that there are no positives in this column, so there will be no nonnegative ratios.  When this situation arises, this means that the LOP has no solution because the LOP is unbounded .    "
},
{
  "id": "sect-simplex-summary-6",
  "level": "2",
  "url": "sect-simplex-summary.html#sect-simplex-summary-6",
  "type": "Problem",
  "number": "3.5.1",
  "title": "",
  "body": "       The first step is to put the problem in standard form, which means in this case to change to a maximum problem and then change the first and fourth inequalities.     Next, this is put into the simplex tableau:     Looking at the tableau, there are negatives in the last column, so this is phase I. We start with the most negative row (row 1) and note that the leftmost negative parameter occurs in column 3, thus we choose to enter the basis and since the current basis variable in row 1 is and thus     There are still negatives in the last column, so this is still phase I. The most negative value is in row 4 and the leftmost negative parameter in this row is in column 2. Thus enters the basis and the basic variable in row 4 is so the pivot will give     There are no remaining negatives in the last column, so we have moved out of phase I. Phase II starts will determining if there are negatives in the objective row and there are.  For this phase, the entering variable is the leftmost negative in the objective row or . The leaving variable is determined by -ratios or     and the smallest nonnegative ratio is the first row. Since the basic variable that corresponds to the 1st row is , this is the leaving variable and the pivot is or     Since there are no more negative parameters in the objective row, this tableau is now optimal. The basic solution is     and corresponding objective of , so the original objective is when and .   "
},
{
  "id": "sect-simplex-summary-7",
  "level": "2",
  "url": "sect-simplex-summary.html#sect-simplex-summary-7",
  "type": "Problem",
  "number": "3.5.2",
  "title": "",
  "body": "       First, this is a maximum problem, so no changes needed to be made on the objective function. The three inequalities need to be flipped by multiplying by a negative number. This can be written as     which has the following simplex tableau:     Since this the last column has negative numbers, this tableau is infeasible and we use phase I. Select row 3, which has the most negative values in the last column and the leftmost negative parameter in the row is in column 1, so is the entering variable. The basic variable in row 3 is so this is the leaving variable and we perform the following pivot:     There is still a negative number in the last column. The most negative occurs in row 1, which has the basic variable , so this is the leaving variable. The leftmost negative parameter in this row occurs in column 2, so this is the entering variable and we perform the pivot     There is still a negative in the last column and this occurs in row 2, which corresponds to , so this is the leaving variable. The leftmost negative parameter in this row in in column 3, so the pivot is     There are no negatives in the last column, so this is now a feasible tableau and we move onto phase II of the Simplex Method. There are negatives in the bottom\/objective row, so we select the leftmost column in this row as the entering variable or . We could calculate all of the -ratios, but notice that the only positive one is in the 2nd row. The basic variable in the row is so the pivot:     There are still negatives in the objective row and so we examine column 6 (the leftmost and only negative number) and form -ratios. However, note that there are no positives in this column, so there will be no nonnegative ratios.  When this situation arises, this means that the LOP has no solution because the LOP is unbounded .   "
},
{
  "id": "sect-intro-ilops",
  "level": "1",
  "url": "sect-intro-ilops.html",
  "type": "Section",
  "number": "4.1",
  "title": "Introduction to Integer Linear Optimization Problems",
  "body": " Introduction to Integer Linear Optimization Problems     Definition of an Integer Linear Optimization Problem.    Geometry of simple ILOPs.    Determine when solutions from simplex method are solutions to ILOPs.     In , we saw a few examples, where it was important that variables take on integer values. For example, the variables in are the number of toy cars, trucks and SUVs that Luis was going to make. It doesn't make any sense to make half of a car for example, so it was important that these are integers.  The solution of this problem was to make 10 cars, 12 trucks and 15 SUVs. Perhaps we were lucky that the solution was an integer. We will see in this section that if we are \"lucky\" then we're done.    Let be an LOP in standard form with no integer constraints, and is the same LOP with integer constraints. If the optimal solution to has an integer solution, then it is also the solution to .    Recall which had no integer constraints. The solution to this problem is with . If include another constraint of     is in included, then can be written   Integer LOP        then since has an integer solution then the same is a solution to or with .  However, what if we have an ILOP and the standard simplex method does not return an integer solution. As an example, consider the following LOP:         Let's take a look at a plot of the feasible set here. The possible integer solutions are also plotted on the feasible set.   A plot of the feasible set (shaded) in as well as all integer points in the feasible set.        If the variables and are reals with , then the feasible set is the quadrilateral shaded gray above. If the variables are nonnegative integers then the only options are the points plotted above.    Use the simplex method to solve . Is the optimal solution consist only of integer points?    This problem is in standard maximum form so we can write down the tableau.     Skipping some of the details, but using the simplex method, the next step is the tableau pivot (matrix pivot about row 2, column 1):     This is not optimal, so another pivot is done. The tableau pivot of or the matrix pivot of row 1, column 2 results in     this is now optimal with basic solution     and this is clearly not an integer solution.    As noted, in this case, the only possible integer points are those plotted in . In the next exercise, we will use this fact to find the solution to the ILOP in .    Note that the objective function, has positive coefficients for both and . This means that the objective increases as points go up and right. Evaluate the objective function at all integer points near the upper right edge of the feasible set. There should be 7 of these. Evaluate the objective value for each of these and this will solve .    We identify the integer points closest to the oblique lines that form the boundary of the feasible set. We also then evaluate the objective function at these points:   Table of Values on Integer points         0  4  20    1  3  19    2  3  23    3  2  24    4  2  26    5  1  25    6  0  24     And from the table, the optimal value is 26 and occurs when and .  Finding the optimal solution using this technique often works for small problems (with a few variables), however as the problem increases in numbers of variables, the total number of points to be checked is not reasonable, so we seek other solution techniques.    In the next two sections, we will see two techniques that solve problems in which the optimal solution on the non-integer problem is not an integer. In both cases, the feasible set is changed to trim away these non-integer solutions.  "
},
{
  "id": "sect-intro-ilops-2",
  "level": "2",
  "url": "sect-intro-ilops.html#sect-intro-ilops-2",
  "type": "Objectives",
  "number": "4.1",
  "title": "",
  "body": "   Definition of an Integer Linear Optimization Problem.    Geometry of simple ILOPs.    Determine when solutions from simplex method are solutions to ILOPs.    "
},
{
  "id": "thm-ilop1",
  "level": "2",
  "url": "sect-intro-ilops.html#thm-ilop1",
  "type": "Theorem",
  "number": "4.1.1",
  "title": "",
  "body": "  Let be an LOP in standard form with no integer constraints, and is the same LOP with integer constraints. If the optimal solution to has an integer solution, then it is also the solution to .   "
},
{
  "id": "prob-ilop1",
  "level": "2",
  "url": "sect-intro-ilops.html#prob-ilop1",
  "type": "Problem",
  "number": "4.1.2",
  "title": "Integer LOP.",
  "body": " Integer LOP       "
},
{
  "id": "prob-ilop2",
  "level": "2",
  "url": "sect-intro-ilops.html#prob-ilop2",
  "type": "Problem",
  "number": "4.1.3",
  "title": "",
  "body": "      "
},
{
  "id": "fig-fs-ilop2",
  "level": "2",
  "url": "sect-intro-ilops.html#fig-fs-ilop2",
  "type": "Figure",
  "number": "4.1.4",
  "title": "",
  "body": " A plot of the feasible set (shaded) in as well as all integer points in the feasible set.       "
},
{
  "id": "ex-ilop2-simplex",
  "level": "2",
  "url": "sect-intro-ilops.html#ex-ilop2-simplex",
  "type": "Checkpoint",
  "number": "4.1.5",
  "title": "",
  "body": "  Use the simplex method to solve . Is the optimal solution consist only of integer points?    This problem is in standard maximum form so we can write down the tableau.     Skipping some of the details, but using the simplex method, the next step is the tableau pivot (matrix pivot about row 2, column 1):     This is not optimal, so another pivot is done. The tableau pivot of or the matrix pivot of row 1, column 2 results in     this is now optimal with basic solution     and this is clearly not an integer solution.   "
},
{
  "id": "sect-intro-ilops-18",
  "level": "2",
  "url": "sect-intro-ilops.html#sect-intro-ilops-18",
  "type": "Checkpoint",
  "number": "4.1.6",
  "title": "",
  "body": "  Note that the objective function, has positive coefficients for both and . This means that the objective increases as points go up and right. Evaluate the objective function at all integer points near the upper right edge of the feasible set. There should be 7 of these. Evaluate the objective value for each of these and this will solve .    We identify the integer points closest to the oblique lines that form the boundary of the feasible set. We also then evaluate the objective function at these points:   Table of Values on Integer points         0  4  20    1  3  19    2  3  23    3  2  24    4  2  26    5  1  25    6  0  24     And from the table, the optimal value is 26 and occurs when and .  Finding the optimal solution using this technique often works for small problems (with a few variables), however as the problem increases in numbers of variables, the total number of points to be checked is not reasonable, so we seek other solution techniques.   "
},
{
  "id": "sect-cutting-planes",
  "level": "1",
  "url": "sect-cutting-planes.html",
  "type": "Section",
  "number": "4.2",
  "title": "Cutting Planes",
  "body": " Cutting Planes     Find a cutting plane that removes part of the feasible set of a LOP without removing integer solutions.    Develop a method that uses cutting planes to solve an ILOP (Integer Linear Optimization Problem).      A problem like does not result in an integer solution when the Simplex Method is used and in general, the simplex method does not solve these. In this section, we introduce cutting planes, which impose additional constraints on a problem that will reduce the feasible set without cutting away any integer solutions.  For example, the solution to is and . We found the solution to the ILOP at the end of the previous section by checking all integer solutions in the feasible set and using this technique, the optimal point is and .  A cutting plane is an additional constraint that does not remove any integer solutions. For example, the constraints:     together with the constraints in would lead to the following feasible set:   The feasible set from together with the constraints in . The two constraints labelled and are cutting planes to the original problem.        The two constraints in are examples of cutting planes. If we include these two constraints with the original problem, we would get the optimal integer solution. The next section will show how to systematically find cutting planes for a given problem.    Finding Cutting Planes  In , we used the simplex method to solve resulting in the following:     The solution to this , which is non-integral. The 1st row of the tableau in is the equation:     which can be rewritten by adding to both sides to get:     And we are looking for integer values of ’s and since the left side is a multiple of 60, the right side must be as well. In addition, since , then the most it could be is 59, which is not a multiple of 60. Thus the left hand side can be at most 0. Therefore we include the constraint:     We then include this into the tableau by introducing the scaled slack variable to make the equation:     which generates the new tableau:     We now have a tableau that is infeasible and you might think that we need to use phase I of the simplex method to solve this and we do, but before doing this, bring and into the basis with     and notice that the third line of is the new constraint, , which is the cutting plane found above in which the variables are returned to the original and . If we graph all three constraints:   The feasible set from together with the constraints as found above. Note that the cutting plane (a heavy blue line) has trimmed away part of the feasible set, but not an integer solution.        where the linear constraints are labelled by their slack variables. Notice that it appears that the line has cut off some the feasible set leaving the integer points. Perhaps this cutting plane is enough to solve the ILOP However, an astute eye notices that the likely optimal vertex is left and above the known solution of . Returning to , we use phase I to perform the matrix pivot about row 3, column 3 to get     and this has the basic solution     which still isn't integral, so let's try this again. The 2nd row of can be written:     and add to both sides of the equation, one gets:     and the left must be negative or . This logic is similar to above in which a integer solution must be a multiple of 4 on the left side, so similar on the right. Since , this means the right side can be no larger than zero. Introduce this into the tableau with a new slack variable , where the 4 is the pivot constant as seen in the rest of the tableau.     and again before performing phase I, we bring and into the basis with     and notice that the first three rows are those that appeared before and the fourth row is the new constraint .   The feasible set from together with the two sets of constraints derived above (in blue and green).        Returning to , we perform a matrix pivot on row 4, column 4, resulting in     and this now has the basic solution     with objective value of which is now integral, so this is the optimal solution to . This also has the same solution as the geometric argument in     Gomory's Method  The techniques in is formalized into what is called Gomory's Method .   Set up the LOP and solve using the Simplex method.    If the solution is all integers, stop!! You have the solution.    If not, select the row with largest , where is the element in the last column and is value of the basic variable. This is row .    Determine a new inequality by rewriting the row in step 3 by putting multiples of on the left hand side and the remainders on the right (making sure each term is negative). Insert this new constraint into the tableau.    Solve the tableau using simplex method.    Goto step 2.     Let's see this in action again with another example.    Use Gomory's method to solve the following:       First, the initial tableau for this problem is     and now perform the simplex method:     which now has an optimal solution, however it is not integral. Now, we will add another constraint. We find , where and the top row has the largest value or 14. So we write down the top line and rearrange it to get a multiple of 30 of all terms on the left and ensure that the other variables have negative coefficients:     So the new constraint is or and making it an equation with a slack variable (or times this new variable)     Now introduce this into the above tableau     and again perform the simplex method:     And this still does not have an integral solution, so we repeat another set of steps of Gomory's method. We take the largest and this occurs in the 2nd row, therefore:     and this new inequality is or . Note that we can cancel the on either side, but let's leave it. Introducing a slack variable results in the new equation     and introduce this into the tableau results in     and performing the simplex method:     The basic solution to this is     And this is now a integral solution, so this is the optimal solution to the ILOP.    The two problems we solved in this section only have 2 variables. This is nice in terms of plotting the feasible set, however let's look at another problem with more variables.           Solve the ILOP in using Gomory's method.    First set up the initial tableau:     perform standard phase II pivots:     To find a cutting plane, find the right column mod 28 and the largest one is in the 3rd row. We write down the equation:     The goal is now to make the left side a multiple of 28 (the slack variable coefficient) and to accomplish this, put parameters on the right side with coefficients that are negative and not less than . This is done by adding\/subtracting appropriate multiples of terms. For example, subtract as well as and from both sides to get:     and the new constraint is the right hand side needs to be 0 at most or     Add a slack variable to this in the form to this constraint:     Add this to the tableau to get:     This is infeasible and the pivot makes it feasible. Then the follow phase II pivots solve this LOP:     This is optimal, but is not integral, so perform another step of Gomory's method. Take the right column mod 15 and the largest value is rows 1, 2 or 4. We'll take row 1 and write down the equation:     And again, we manipulate this equation to get the left side to be a multiple of the slack variable coefficient (15) with the parameter coefficients negative.     The new constraint is that the right hand side is bounded above by 0 or     which including a slack variable results in     resulting in the tableau:     The pivot will make this tableau feasible and then one gets the following phase II pivots and resulting tableau     The basic solution of this tableau is not integral, so we perform another step. Take the right column mod 13 and the largest value is in the 1st, 3rd and 5th rows. We'll use the first row for the new constraint. This row can be written as     Again, the new constraint is that the left side needs to be bounded above by 0 or     Adding this to the tableau results in     This is not feasible (as is true after every added constraint). First, will make the above feasible and then the following will give a optimal tableau:     This tableau's basic solution is not integral, so we add another constraint. In this case, take the right column mod 11 and find the largest. The largest value is in row 4 which we write:     So we add the constraint: to the tableau to get:     and then since this is in phase I, perform a pivot     This is optimal, but this is still not integral. Let's try another step. Finding the last column modulo 5, the largest value is in rows 5 and 7. As is standard, with a tie, we'll use the smaller indexed one or row 5, which can be written:     and the new constraint is that the right side is bounded above by 0, which is     and adding a slack variable can result in     Adding this to the tableau is     Note that the last row is not feasible, so perform a pivot to make it feasible:     And this is both feasible and optimal, but not integral. If we take the last column modulo 3, the largest value is in rows 5, 6 and 8, and if we write down the equation of row 5:     And the new constraint is the right side less than or equal to 0. Adding a slack variable results in     and adding it to the tableau is     This is infeasible, so use the following pivots     And now this is optimal, but still not integral, so we perform another step. Again taking the last column mod 4, shows that the largest value is in rows 8 and 9 and we will select row 8 which can be written as:     and we bound the left hand side to be . This results in a new constraint and adding a slack variable:     and adding to the simplex tableau results in     and this is infeasible, but the pivots makes it feasible, but results in     although this isn't optimal, but     results in an optimal and integral tableau. The basic variable for this is     and in the original variables, and . The objective value is 81.    This exercise showed how to apply Gomory's method to a problem with more than two original variables. It also shows that often this takes many steps to reach an integer solution. Although it can be done by hand , this is done with software. See and more specifically for information of how to use the Julia language to solve these problems.   "
},
{
  "id": "sect-cutting-planes-2",
  "level": "2",
  "url": "sect-cutting-planes.html#sect-cutting-planes-2",
  "type": "Objectives",
  "number": "4.2",
  "title": "",
  "body": "   Find a cutting plane that removes part of the feasible set of a LOP without removing integer solutions.    Develop a method that uses cutting planes to solve an ILOP (Integer Linear Optimization Problem).    "
},
{
  "id": "sect-cutting-planes-3-3",
  "level": "2",
  "url": "sect-cutting-planes.html#sect-cutting-planes-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cutting plane "
},
{
  "id": "fig-ilop1-cutting-plane",
  "level": "2",
  "url": "sect-cutting-planes.html#fig-ilop1-cutting-plane",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": " The feasible set from together with the constraints in . The two constraints labelled and are cutting planes to the original problem.       "
},
{
  "id": "fig-gomory-ex-1",
  "level": "2",
  "url": "sect-cutting-planes.html#fig-gomory-ex-1",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": " The feasible set from together with the constraints as found above. Note that the cutting plane (a heavy blue line) has trimmed away part of the feasible set, but not an integer solution.       "
},
{
  "id": "fig-gomory-ex-2",
  "level": "2",
  "url": "sect-cutting-planes.html#fig-gomory-ex-2",
  "type": "Figure",
  "number": "4.2.3",
  "title": "",
  "body": " The feasible set from together with the two sets of constraints derived above (in blue and green).       "
},
{
  "id": "sub-sect-gomory-2",
  "level": "2",
  "url": "sect-cutting-planes.html#sub-sect-gomory-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gomory's Method "
},
{
  "id": "sub-sect-gomory-4",
  "level": "2",
  "url": "sect-cutting-planes.html#sub-sect-gomory-4",
  "type": "Problem",
  "number": "4.2.4",
  "title": "",
  "body": "  Use Gomory's method to solve the following:       First, the initial tableau for this problem is     and now perform the simplex method:     which now has an optimal solution, however it is not integral. Now, we will add another constraint. We find , where and the top row has the largest value or 14. So we write down the top line and rearrange it to get a multiple of 30 of all terms on the left and ensure that the other variables have negative coefficients:     So the new constraint is or and making it an equation with a slack variable (or times this new variable)     Now introduce this into the above tableau     and again perform the simplex method:     And this still does not have an integral solution, so we repeat another set of steps of Gomory's method. We take the largest and this occurs in the 2nd row, therefore:     and this new inequality is or . Note that we can cancel the on either side, but let's leave it. Introducing a slack variable results in the new equation     and introduce this into the tableau results in     and performing the simplex method:     The basic solution to this is     And this is now a integral solution, so this is the optimal solution to the ILOP.   "
},
{
  "id": "ex-ilop-3vars",
  "level": "2",
  "url": "sect-cutting-planes.html#ex-ilop-3vars",
  "type": "Problem",
  "number": "4.2.5",
  "title": "",
  "body": "      "
},
{
  "id": "sub-sect-gomory-7",
  "level": "2",
  "url": "sect-cutting-planes.html#sub-sect-gomory-7",
  "type": "Checkpoint",
  "number": "4.2.6",
  "title": "",
  "body": "  Solve the ILOP in using Gomory's method.    First set up the initial tableau:     perform standard phase II pivots:     To find a cutting plane, find the right column mod 28 and the largest one is in the 3rd row. We write down the equation:     The goal is now to make the left side a multiple of 28 (the slack variable coefficient) and to accomplish this, put parameters on the right side with coefficients that are negative and not less than . This is done by adding\/subtracting appropriate multiples of terms. For example, subtract as well as and from both sides to get:     and the new constraint is the right hand side needs to be 0 at most or     Add a slack variable to this in the form to this constraint:     Add this to the tableau to get:     This is infeasible and the pivot makes it feasible. Then the follow phase II pivots solve this LOP:     This is optimal, but is not integral, so perform another step of Gomory's method. Take the right column mod 15 and the largest value is rows 1, 2 or 4. We'll take row 1 and write down the equation:     And again, we manipulate this equation to get the left side to be a multiple of the slack variable coefficient (15) with the parameter coefficients negative.     The new constraint is that the right hand side is bounded above by 0 or     which including a slack variable results in     resulting in the tableau:     The pivot will make this tableau feasible and then one gets the following phase II pivots and resulting tableau     The basic solution of this tableau is not integral, so we perform another step. Take the right column mod 13 and the largest value is in the 1st, 3rd and 5th rows. We'll use the first row for the new constraint. This row can be written as     Again, the new constraint is that the left side needs to be bounded above by 0 or     Adding this to the tableau results in     This is not feasible (as is true after every added constraint). First, will make the above feasible and then the following will give a optimal tableau:     This tableau's basic solution is not integral, so we add another constraint. In this case, take the right column mod 11 and find the largest. The largest value is in row 4 which we write:     So we add the constraint: to the tableau to get:     and then since this is in phase I, perform a pivot     This is optimal, but this is still not integral. Let's try another step. Finding the last column modulo 5, the largest value is in rows 5 and 7. As is standard, with a tie, we'll use the smaller indexed one or row 5, which can be written:     and the new constraint is that the right side is bounded above by 0, which is     and adding a slack variable can result in     Adding this to the tableau is     Note that the last row is not feasible, so perform a pivot to make it feasible:     And this is both feasible and optimal, but not integral. If we take the last column modulo 3, the largest value is in rows 5, 6 and 8, and if we write down the equation of row 5:     And the new constraint is the right side less than or equal to 0. Adding a slack variable results in     and adding it to the tableau is     This is infeasible, so use the following pivots     And now this is optimal, but still not integral, so we perform another step. Again taking the last column mod 4, shows that the largest value is in rows 8 and 9 and we will select row 8 which can be written as:     and we bound the left hand side to be . This results in a new constraint and adding a slack variable:     and adding to the simplex tableau results in     and this is infeasible, but the pivots makes it feasible, but results in     although this isn't optimal, but     results in an optimal and integral tableau. The basic variable for this is     and in the original variables, and . The objective value is 81.   "
},
{
  "id": "sect-branch-bound",
  "level": "1",
  "url": "sect-branch-bound.html",
  "type": "Section",
  "number": "4.3",
  "title": "Branch and Bound",
  "body": " Branch and Bound     Take a feasible set that contains a non-integer solution and divide it into two feasible set.    Use this technique to solve ILOPs called Branch and Bound.       In , we solved using Gomory's cutting plane method. An alternative technique called branch and bound is introduced in this section. In short, the branch and bound method uses the simplex method and if an non-integral solution arises, we cut the feasible set in two sets which will exclude the non-integral solution. This is done in a systematic way to arrive at the desired answer. Let's dive into this method with an example.  Recall that above we solved using the simplex method. The result was and .  The basic idea presented here is to split each of the feasible sets into smaller regions with boundaries as integers. For example, since from above we solve two new problems, one of which has the constraint that and the other has the constraint . That is there are two problems:   LOP A         LOP B      Both LOP A and LOP B have the nonnegative constraint and the same objective function. Solving each via the simplex method we have the solutions to LOP A and B respectively. For this section, we are skipping the details of the simplex method that we have seen earlier in the text and focus on the bigger picture.   What we have done is split the original problem into two which can be visualized as follows:   The first phase of the branch and bound algorithm of , split via to eliminate all values with . The sets and are the feasible sets for the problems LOP A and LOP B.        The solution to these two problems is     Note that the optimal solution of LOP A is the upper right corner of and the optimal solution of LOP B is the upper left corner of . These don't quite fall on integers.  Since neither solution is integral, we next need to split each problem again, this time using . For problem LOP A, we solve with the two constraints: and then . We will call these LOP AA and LOP AB:   LOP AA         LOP AB        Similarly, LOP B can be split into two problems. Since the solution to LOP B contains , the split is and . The two problems are:   LOP BA         LOP BB        Again, we have split each of the feasible sets into 2:   The second level feasible sets for . The feasible set is not shown because it is empty.        We now solve all four of these subproblems using the simplex method.     There is no solution to LOP BB, which shouldn't be a surprise looking at the feasible set in in that is empty. Also, note that we have our first integer solution for problem LOP AA. This is a potential solution and importantly, the optimal solution would have a value greater than 26. Thus, if any solution has value smaller than 26, we can ignore that. For example, any integer solution to LOP AB will be smaller than 24.411 and which is clearly smaller than 26.  At this point we can stop because any integer solution that is a subset of will has a solution no more that 26. Since we are looking for a solution, there may be another integer solution in this set, but we already have one.    A Branch and Bound Flowchart  You can see from the previous example that this continued splitting can be difficult to follow. It's helpful to build a flowchart of this situation. The following shows the solution to the using branch and bound.   A tree of the branch and bound algorithm for . Each branch is explored until an integer solution is found. If it is clear that other branches will not result in a larger (since this is a maximum problem) objective value, that branch is not further explored.          Systematic Branch and Bound Algorithm  The key to this method is the splitting step , in which the feasible set on variable is split into two pieces. Problem will be with the additional constraint . Problem will have the same constraints as with the additional one .  The following steps will result in finding an integer solution to an LOP. Call this      Solve using the simplex method. If the optimal point is integral, stop, this is a possible solution.    If the solution to is not integral, let be the smallest indexed non-integer solution. Perform the splitting step and solve both and .    If has an integer solution, note it's objective value. If not repeat step #2.    If has an integer solution, note it's objective value. If not repeat step #2.    Once all branches have resulted in integer solutions, is feasible or has an objective value smaller than the objective of a integer solution. Select the largest integer for the solution.     In , we solved a ILOP with three variables. The following exercise finds the solution to using the branch and bound technique.    Solve using the branch and bound algorithm.    The problem is in standard form, so we just write down the tableau as     and then perform the following pivots (again not showing all of the details)     This has the basic solution     So this is not integral, so we will form two problems. This solution has , which is an integer, so start with and add the two constraints: and in order to eliminate the current solution for . These problems are   PA         PB        The solution to PA is found by starting with the simplex tableau:     and then perform the following pivots to get the optimal tableau:     and this has the optimal solution:     which is not integral.  Next, return to the simplex tableau corresponding to problem PB , which has the following simplex tableau:     where note that the inequality has been put into standard form.  The pivots that first make the tableau feasible, then finds the optimal solution are     which has the basic solution     which is not integral. We need to do another level. First, let's define PAA and PAB as the two problems that split the feasible set of PA . Since and are both integers, we will split the feasible set of PAA using and the two constraints and .   PAA         PAB        The solution to PAA is found by starting with the simplex tableau:     and then one pivot results in the tableau     and from the 3rd row, there is no positive ratio of last column to parameter coefficients, so this tableau is infeasible.  Next, return to the simplex tableau corresponding to problem PAB , which has the following simplex tableau:     Applying the simplex method, we arrive at the following tableau:     which has the basic solution     which is an integer solution. The objective value of this solution is .  Next, the problem PB is split into two problems, PBA and PBB , where the feasible set of PBA is split using and .   PBA         PBB        The solution to PBA is found by starting with the simplex tableau:     and then apply the simplex method to get the following tableau:     The basic solution of this tableau is     which is not integral. Also, note that the objective value of this tableau is , which is greater than the objective value of problem PAB . This branch needs to be further explored.  Return to Problem PBB , which has the following simplex tableau:     And then applying the simplex method, we arrive at the following tableau:     and this has the basic solution     Which is not integral, and has an objective value of . This is greater than the objective value of problem PAB , so we should explore this branch as well.  Next, we split the feasible set of PBA using and .   PBAA         PBAB        The solution to PBAA is found by starting with the simplex tableau:     and then applying the simplex method, we arrive at the following tableau:     and this has the basic solution     This is not integral, and the objective value of this tableau is , which is greater than the objective value of problem PAB . This may still have a viable solution. We will explore this below.  Next, the solution to PBAB is found by starting with the simplex tableau:     and applying the simplex method, we arrive at the following tableau:     and the top row shows that this tableau is infeasible. Therefore, this branch is not explored further.  There is still the branch based on PBAA , so we split the feasible set of PBAA using and . The second inequality here is redundant here, since is already a constraint in PBAA , so a problem PBAAB will not be created.   PBAAA        This has the simplex tableau of     and applying the simplex method, we arrive at the following tableau:     The basic solution of this tableau is     which is an integer solution with an objective value of . Let's see where we stand with the following tree diagram.     "
},
{
  "id": "sect-branch-bound-2",
  "level": "2",
  "url": "sect-branch-bound.html#sect-branch-bound-2",
  "type": "Objectives",
  "number": "4.3",
  "title": "",
  "body": "   Take a feasible set that contains a non-integer solution and divide it into two feasible set.    Use this technique to solve ILOPs called Branch and Bound.     "
},
{
  "id": "sect-branch-bound-3-1",
  "level": "2",
  "url": "sect-branch-bound.html#sect-branch-bound-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "branch and bound "
},
{
  "id": "sect-branch-bound-3-4",
  "level": "2",
  "url": "sect-branch-bound.html#sect-branch-bound-3-4",
  "type": "Problem",
  "number": "4.3.1",
  "title": "LOP A.",
  "body": " LOP A       "
},
{
  "id": "sect-branch-bound-3-5",
  "level": "2",
  "url": "sect-branch-bound.html#sect-branch-bound-3-5",
  "type": "Problem",
  "number": "4.3.2",
  "title": "LOP B.",
  "body": " LOP B     "
},
{
  "id": "fig-bb-1",
  "level": "2",
  "url": "sect-branch-bound.html#fig-bb-1",
  "type": "Figure",
  "number": "4.3.3",
  "title": "",
  "body": " The first phase of the branch and bound algorithm of , split via to eliminate all values with . The sets and are the feasible sets for the problems LOP A and LOP B.       "
},
{
  "id": "sect-branch-bound-3-13",
  "level": "2",
  "url": "sect-branch-bound.html#sect-branch-bound-3-13",
  "type": "Problem",
  "number": "4.3.4",
  "title": "LOP AA.",
  "body": " LOP AA       "
},
{
  "id": "sect-branch-bound-3-14",
  "level": "2",
  "url": "sect-branch-bound.html#sect-branch-bound-3-14",
  "type": "Problem",
  "number": "4.3.5",
  "title": "LOP AB.",
  "body": " LOP AB       "
},
{
  "id": "sect-branch-bound-3-16",
  "level": "2",
  "url": "sect-branch-bound.html#sect-branch-bound-3-16",
  "type": "Problem",
  "number": "4.3.6",
  "title": "LOP BA.",
  "body": " LOP BA       "
},
{
  "id": "sect-branch-bound-3-17",
  "level": "2",
  "url": "sect-branch-bound.html#sect-branch-bound-3-17",
  "type": "Problem",
  "number": "4.3.7",
  "title": "LOP BB.",
  "body": " LOP BB       "
},
{
  "id": "fig-bb-2",
  "level": "2",
  "url": "sect-branch-bound.html#fig-bb-2",
  "type": "Figure",
  "number": "4.3.8",
  "title": "",
  "body": " The second level feasible sets for . The feasible set is not shown because it is empty.       "
},
{
  "id": "fig-ilop1-flowchart",
  "level": "2",
  "url": "sect-branch-bound.html#fig-ilop1-flowchart",
  "type": "Figure",
  "number": "4.3.9",
  "title": "",
  "body": " A tree of the branch and bound algorithm for . Each branch is explored until an integer solution is found. If it is clear that other branches will not result in a larger (since this is a maximum problem) objective value, that branch is not further explored.       "
},
{
  "id": "ex-branch-bound-1",
  "level": "2",
  "url": "sect-branch-bound.html#ex-branch-bound-1",
  "type": "Checkpoint",
  "number": "4.3.10",
  "title": "",
  "body": "  Solve using the branch and bound algorithm.    The problem is in standard form, so we just write down the tableau as     and then perform the following pivots (again not showing all of the details)     This has the basic solution     So this is not integral, so we will form two problems. This solution has , which is an integer, so start with and add the two constraints: and in order to eliminate the current solution for . These problems are   PA         PB        The solution to PA is found by starting with the simplex tableau:     and then perform the following pivots to get the optimal tableau:     and this has the optimal solution:     which is not integral.  Next, return to the simplex tableau corresponding to problem PB , which has the following simplex tableau:     where note that the inequality has been put into standard form.  The pivots that first make the tableau feasible, then finds the optimal solution are     which has the basic solution     which is not integral. We need to do another level. First, let's define PAA and PAB as the two problems that split the feasible set of PA . Since and are both integers, we will split the feasible set of PAA using and the two constraints and .   PAA         PAB        The solution to PAA is found by starting with the simplex tableau:     and then one pivot results in the tableau     and from the 3rd row, there is no positive ratio of last column to parameter coefficients, so this tableau is infeasible.  Next, return to the simplex tableau corresponding to problem PAB , which has the following simplex tableau:     Applying the simplex method, we arrive at the following tableau:     which has the basic solution     which is an integer solution. The objective value of this solution is .  Next, the problem PB is split into two problems, PBA and PBB , where the feasible set of PBA is split using and .   PBA         PBB        The solution to PBA is found by starting with the simplex tableau:     and then apply the simplex method to get the following tableau:     The basic solution of this tableau is     which is not integral. Also, note that the objective value of this tableau is , which is greater than the objective value of problem PAB . This branch needs to be further explored.  Return to Problem PBB , which has the following simplex tableau:     And then applying the simplex method, we arrive at the following tableau:     and this has the basic solution     Which is not integral, and has an objective value of . This is greater than the objective value of problem PAB , so we should explore this branch as well.  Next, we split the feasible set of PBA using and .   PBAA         PBAB        The solution to PBAA is found by starting with the simplex tableau:     and then applying the simplex method, we arrive at the following tableau:     and this has the basic solution     This is not integral, and the objective value of this tableau is , which is greater than the objective value of problem PAB . This may still have a viable solution. We will explore this below.  Next, the solution to PBAB is found by starting with the simplex tableau:     and applying the simplex method, we arrive at the following tableau:     and the top row shows that this tableau is infeasible. Therefore, this branch is not explored further.  There is still the branch based on PBAA , so we split the feasible set of PBAA using and . The second inequality here is redundant here, since is already a constraint in PBAA , so a problem PBAAB will not be created.   PBAAA        This has the simplex tableau of     and applying the simplex method, we arrive at the following tableau:     The basic solution of this tableau is     which is an integer solution with an objective value of . Let's see where we stand with the following tree diagram.   "
},
{
  "id": "sect-intro-julia",
  "level": "1",
  "url": "sect-intro-julia.html",
  "type": "Section",
  "number": "5.1",
  "title": "Introduction to the Julia Language",
  "body": " Introduction to the Julia Language     Learning how to assign variables and use basic operations in Julia.    The syntax of for loops in Julia.    Understanding the different number types in Julia.    How to use Unicode characters in Julia.    How to use packages in Julia.      The Julia Language was developed starting about 2010 as a language for Scientific Computing, a field which basically covers how to solve problems in mathematics and the sciences which often require the use of software to find or approximate the solution.  It is useful to have the background in some computing language especially the basics of variables, arrays, loops and branching, however you can solve relatively complex LOPs using Julia. We will cover the basics here, but see the author's Julia text for a deep dive into Julia.  Julia is a scripting functional language that is often run inside a Jupyter Notebook In fact it is the Ju part of Jupyter and see APPENDIX ??? for details on how to install it.  One of the features of Julia is that of a package manager, which handles installing extra code. Relevant for Linear Optimization Problems, there are packages JuMP and HiGHS that are important, and yes, the capitalization is important.    Basics of Julia  The syntax of Julia expressions should be familiar to those who have programmed in python, but not too dissimilar for those with knowledge of C, C++, Javascript, or Java. For example, to declare a variable, enter   x= 3   to assign the value 3 to the variable x .   It is assumed here that you are using a Jupyter notebook, which has cells in which to enter code. If you enter more than one line of code in a cell, then only the last expression is echoed back to the notebook. That is if you have   x = 3 y = 4   then you will only see 4 echoed back after the cell. If you wish to suppress this output, append a semicolon, ; to the end of the line.     For Loops  A for loop is a piece of code that is executed a fixed number of times. The following is an example of just printing out the values of a loop.     for i = 1:10 @show i end    where the syntax 1:10 means that i takes on the values 1, 2, 3, ..., 10. Julia does have print and println commands, however, the @show macro is nice in that it also prints out the name of variable that you wish view its value.   Although the code in has code that is indented, it is not required, like in python. It is typically indented for readability. In fact, for i=1:5 @show i end would produce the same result.   The for loop in went through every integer between 1 and 10, but if you wish to skip values (whether positive or negative skip), the top line of a for loop can use the syntax start:skip:stop . For example   for i=2:2:14 @show i end   will print out the values 2, 4, 6, ..., 14. And   for i=15:-3:0 @show i end   will print out the values 15, 12, 9, ..., 0.   There are commands and functions in Julia with an @ -sign in the front. @show is the first one you see, but there are important ones later. These are called macros. A macro does things a bit different behind the scenes and if you become a expert Julia programmer, it is important to know the difference, for purposes in this course, you can use them interchangeably.  One difference that you may see is that a macro is often not written with parentheses after the name (although it can be).     Number Types in Julia  There are various number types in Julia including integers, floating points and rationals. There are other number types including complex types that won't be covered here.   Creating numbers with a given type are given with an example below   a = 139 x = 3.14159 p = 2\/\/3   which make an integer, floating point and a rational respectively. There are different types of each of these, the main difference being the storage size (in bits) of each number. Nearly all computers these days will default to 64-bit numbers and not knowing differences is not an issue for the material in this text. Basic operations within a number type often keep the same number type (except for division between integers).  The techniques in this text usually use problems with integer coefficients, however, we will also see that Rational numbers are quite helpful as well. Floating-point numbers, however are generally the backboard of all number systems and solving problems with packages will use this type for all results.  Notice that basic operations between numbers results in a type that is the more general between the numbers. For example,   3 + 4.5 3 + 3\/\/4 3 + 7   results in the floating point number 7.5 , the rational 15\/\/4 and the integer 10 .    Unicode Characters in Julia  One nice feature of Julia is that instead of relying on the standard ASCII characters, that most of the set of Unicode characters can be used. For example, we may want to use Greek letters and we can assign one a value with     and use it in expressions. To enter , inside of a Jupyter notebook, type \\alpha then hit the TAB key and you will get a list of characters starting with \\alpha . Select the character.  Another option is to use subscripts to make expressions look more like how we express them in writing or typed out. The character can be created with x\\_1 then TAB. This variable is two characters long where the second character is the subscript.  Although there are a lot of options including using emoji for characters, the other relevant character is the (using \\geq) and ≤ (using \\leq). Those familiar with LaTeX will notice that the backslash and the shortcut is the same in LaTeX. In fact, many characters from LaTeX will transfer over.    Packages in Julia  Julia uses packages\/modules for additional functionality. Some modules are built-in to Julia, like LinearAlgebra , which has a lot of additional matrix functions. Other modules need to be downloaded. Further details are shown in .  Let's say that we want to use the cross function that calculates the cross product between vectors. If we have   x = [1; 2; 3] y = [-2; 4; 1] cross(x,y)   then we get the following:    UndefVarError: `cross` not defined in `Main`  Suggestion: check for spelling errors or missing imports.  Hint: a global variable of this name also exists in LinearAlgebra.    Looking at the last line, we get the idea that this function is in a package. To use this, we will need to enter using LinearAlgebra With Julia 1.12, if a package is not installed, it should autoinstall. Inside of Jupyter notebooks, like in VS Code, the UI is hard to see, so you may either need to wait a while if doing a using statement or install other ways. . If this is run first, then rerun the above 3 lines, then we get:    3-element Vector{Int64}:  -10  -7  8     "
},
{
  "id": "sect-intro-julia-2",
  "level": "2",
  "url": "sect-intro-julia.html#sect-intro-julia-2",
  "type": "Objectives",
  "number": "5.1",
  "title": "",
  "body": "   Learning how to assign variables and use basic operations in Julia.    The syntax of for loops in Julia.    Understanding the different number types in Julia.    How to use Unicode characters in Julia.    How to use packages in Julia.    "
},
{
  "id": "sect-intro-julia-4-5",
  "level": "2",
  "url": "sect-intro-julia.html#sect-intro-julia-4-5",
  "type": "Note",
  "number": "5.1.1",
  "title": "",
  "body": " It is assumed here that you are using a Jupyter notebook, which has cells in which to enter code. If you enter more than one line of code in a cell, then only the last expression is echoed back to the notebook. That is if you have   x = 3 y = 4   then you will only see 4 echoed back after the cell. If you wish to suppress this output, append a semicolon, ; to the end of the line.  "
},
{
  "id": "prog-for-loop",
  "level": "2",
  "url": "sect-intro-julia.html#prog-for-loop",
  "type": "Listing",
  "number": "5.1.2",
  "title": "",
  "body": "   for i = 1:10 @show i end   "
},
{
  "id": "sect-intro-julia-5-5",
  "level": "2",
  "url": "sect-intro-julia.html#sect-intro-julia-5-5",
  "type": "Note",
  "number": "5.1.3",
  "title": "",
  "body": " Although the code in has code that is indented, it is not required, like in python. It is typically indented for readability. In fact, for i=1:5 @show i end would produce the same result.  "
},
{
  "id": "sect-intro-julia-5-11",
  "level": "2",
  "url": "sect-intro-julia.html#sect-intro-julia-5-11",
  "type": "Note",
  "number": "5.1.4",
  "title": "",
  "body": " There are commands and functions in Julia with an @ -sign in the front. @show is the first one you see, but there are important ones later. These are called macros. A macro does things a bit different behind the scenes and if you become a expert Julia programmer, it is important to know the difference, for purposes in this course, you can use them interchangeably.  One difference that you may see is that a macro is often not written with parentheses after the name (although it can be).  "
},
{
  "id": "sect-julia-vector-arrays",
  "level": "1",
  "url": "sect-julia-vector-arrays.html",
  "type": "Section",
  "number": "5.2",
  "title": "Vectors and Matrices in Julia",
  "body": " Vectors and Matrices in Julia     Understand how to create and manipulate vectors and matrices in Julia.    Understand how to access elements in a vector or matrix.    Understand how to use comprehensions to create vectors and matrices.    Understand how to use broadcasting to apply functions to vectors and matrices.    Understand how to concatenate matrices and create submatrices in Julia.    Understand how to create rational matrices in Julia.      As we have seen, vectors and matrices play an extremely important role in linear optimization. In this section, we will see how to create and manipulate vectors and matrices in Julia.    Vectors in Julia  An array in Julia is a sequence of values of a single type in any number of dimensions. The most common are one-dimensional, called a Vector and two-dimensional, called a Matrix . We will use both to solve LOPs.  To produce an array with specific values, use [] . For example, v = [1; 2; 3] returns a vector as    3-element Vector{Int64}:  1  2  3    Notice that this is returned as a vector with type Vector{Int64} . This is called a parametric type (we saw this with rational numbers as well). The Vector part of the type is an alias for an 1-D array and the type within the {} is the subtype indicating that this is an array of integers (specifically 64-bit integers).  A row vector can be made like r=[1 2 3] (and can optionally have commas between the entries). This is returned as    1×3 Matrix{Int64}:  1 2 3    However notice that this is technically a matrix of size 1×3. Matrices are in the next section.    Matrices in Julia  A Matrix in Julia is a two-dimensional array, but can be used for many standard Matrix operations. If you have a specific matrix to enter, the numbers are entered line by line with lines separated by a ; . For example:    A = [ 1 2 3 4; 5 6 7 8; 9 10 11 12]    will produce the matrix which is returned:    3×4 Matrix{Int64}:  1 2 3 4  5 6 7 8  9 10 11 12    If you are entering a matrix in a notebook environment, you can put each line separately as in   A = [1 2 3 4; 5 6 7 8; 9 10 11 12]   where the ; ending lines is optional. Also, like in vectors, the entries in row can optionally be separated by commas , .    Accessing elements in a Vector or Matrix  Consider the vector v=[10; 5; 15; 20] . One can access the elements with [index] , where index is the index of the value. v[2] will return 5 , the 2nd element of the vector.  Accessing elements in a Matrix is similar. Consider the matrix A that was created above. If we way the element in the 3rd row, 2nd column, A[3,2] will do that.   The first index of a Julia vector is 1. This is different than many other languages like C, javascript, and Python, but more intuitive for students coming from Linear Algebra. Also, the upper left element of a matrix A will be A[1,1] .     Constructing Vectors and Matrices with Comprehensions  Another feature related to arrays in Julia is that of comprehensions. If a vector (or matrix) can be generated with a formula for each element, then a comprehension is often used to simplify its creation. For example, if we want to produce a vector of squares or v= [1; 4; 9; 16; 25; 36; 49; 64] , then   v = [i^2 for i=1:8]   will accomplish this. Matrices can be made with comprehensions with a two variable for loop as in [i+j for i=1:3, j=1:4]   which returns    3×4 Matrix{Int64}:  2 3 4 5  3 4 5 6  4 5 6 7    and if you need to make any vector or matrix with a pattern, then generally comprehensions is the easiest way to do this.    Broadcasting  Because operations on arrays are very common there is a nice syntax for applying a function to array. Let's say we have the array x=[2*i for i=1:5] which will be the even integers up to 10. To square each of these, we prepend a . to the ^ operator or    x.^2    which returns the array:    5-element Vector{Int64}:  4  16  36  64  100    This can also be thought of a function that is applied to each element of the array.  Named functions can also be used with broadcasting. If we want to take the modulus 3 of these, use mod.(x,3) which returns the array [2,1,0,2,1] .    Concatenating Matrices in Julia  Hopefully the wheels are turning and you're thinking about how to handle simplex tableaus in Julia. From the above sections, you can imagine how to enter a tableau, for example, the one in can be entered directly by typing in the numbers directly, as in   T = [4 3 1 0 0 0 120 1 2 0 1 0 0 40 0 1 0 0 1 0 16 -1 -3 0 0 0 1 0]   There is an alternative way to do this since the sections of the matrix have specific form, and in many cases it can be easier. If we define   A = [4 3; 1 2; 0 1] b = [120; 40; 16] c = [-1 -3]   we can construct the left two columns with the vcat command for a vertical concatenation like: vcat(A,c) which would create the matrix:    4×2 Matrix{Int64}:  4 3  1 2  0 1  -1 -3    There is an hcat function as well and we can construct the tableau in with hcat(vcat(A,c), I(4), vcat(b,[0])) , using the function I(4) that makes a 4×4 identity matrix If this doesn't work, make sure that you have loaded the LinearAlgebra package with using LinearAlgebra . . This returns the matrix    4×7 Matrix{Int64}:  4 3 1 0 0 0 120  1 2 0 1 0 0 40  0 1 0 0 1 0 16  -1 -3 0 0 0 1 0    which seems to be a straightforward way to do this. There is an alternative (and simpler) way to construct a matrix using blocks. The above can also be made with   ST = [A I zeros(Int, 3) b c zeros(Int,1,3) I [0]]   where the top row are all matrices or vectors with 3 rows. The bottom row above are all row vectors. Notice that in this case, we have just used I for the identity and the correct size is determined automatically and the function zeros(Int, 3) for a vector of length 3 and zeros(Int,1,3) for a row vector. Alternatively the zeros can be made with [0; 0; 0] and [0 0 0] instead.     Submatrices in Julia  We will see that is is quite nice to be able to do submatrices in Julia. That is, given a matrix, pull specific rows and columns. Let's start with the simplex tableau ST above.  We can pull out a single column, say the 2nd, with the expression ST[:,2] , and this returns    4-element Vector{Int64}:  3  2  1  -3    Notice that the first slot is a : , indicating to use all rows. If we wanted the column not including the last element (say, for example, to use this to calculate -ratios), we can do ST[1:end-1,2] , where it is understood that end in this context is 4.  Similarly, if we want the last row, we can do ST[end,:] which returns:    7-element Vector{Int64}:  -1  -3  0  0  0  1  0    which is the last row, however, notice that the result is a Vector , instead of a row vector, which is a Matrix with a single row. This has advantages and disadvantages, but just be aware of the result.  We can also extract a block or submatrix from an existing matrix. Using the matrix defined in ST , ST[1:3,1:2] returns    3×2 Matrix{Int64}:  4 3  1 2  0 1    which is rows 1 through 3 and columns 1 and 2.  Another nice feature is to extract specific rows or columns. We will see in that it is advantageous to get say columns 1,3 and 4 from the top rows of matrix. The expression ST[1:3,[1,3,4]] will return    3×3 Matrix{Int64}:  4 1 0  1 0 1  0 0 0      Creating Rational Matrices in Julia  Everything we have done in this chapter was with Integer matrices and this corresponds to that in this text which has formulated the simplex tableaus with integers to prevent errors associated with round off in floating-point numbers. Another type of matrix that is built-in to Julia that won't have roundoff are Rational numbers that we saw in .  If we have a matrix with rational entries, we can create one such as   A2 = [ 2\/\/3 1\/\/4 7\/\/2; -3\/\/2 5\/\/3 9\/\/4]   and notice that the type returned is Matrix{Rational{Int64}}: indicating that the numbers stored in the Matrix are of type Rational{Int64} or rational numbers with 64-bit integer parts.  If a matrix is integer, though and we would like to convert it to rational, then one way to accomplish this is   ST = rationalize.([A I zeros(Int, 3) b c zeros(Int,1,3) I [0]])   where the rationalize command is applied to each element of the created matrix with broadcasting.   "
},
{
  "id": "sect-julia-vector-arrays-2",
  "level": "2",
  "url": "sect-julia-vector-arrays.html#sect-julia-vector-arrays-2",
  "type": "Objectives",
  "number": "5.2",
  "title": "",
  "body": "   Understand how to create and manipulate vectors and matrices in Julia.    Understand how to access elements in a vector or matrix.    Understand how to use comprehensions to create vectors and matrices.    Understand how to use broadcasting to apply functions to vectors and matrices.    Understand how to concatenate matrices and create submatrices in Julia.    Understand how to create rational matrices in Julia.    "
},
{
  "id": "sect-julia-accessing-matrix-4",
  "level": "2",
  "url": "sect-julia-vector-arrays.html#sect-julia-accessing-matrix-4",
  "type": "Note",
  "number": "5.2.1",
  "title": "",
  "body": " The first index of a Julia vector is 1. This is different than many other languages like C, javascript, and Python, but more intuitive for students coming from Linear Algebra. Also, the upper left element of a matrix A will be A[1,1] .  "
},
{
  "id": "sect-julia-linear-algebra",
  "level": "1",
  "url": "sect-julia-linear-algebra.html",
  "type": "Section",
  "number": "5.3",
  "title": "Linear Algebra in Julia",
  "body": " Linear Algebra in Julia     Understand how to perform basic matrix operations in Julia.    Compute the determinant, transpose, and adjoint of a matrix in Julia.    Calculate the inverse of a matrix in Julia using both floating-point and rational numbers.      As we saw in the previous section, creating and manipulating matrices is quite easy and natural in Julia. This section will show how to perform a number of basic Linear Algebra tasks.    Basic Matrix Operations in Julia  Many of the basic operations from Linear Algebra are natural in julia. Let's say that we have   A = [ 1 2 3 4; 5 6 7 8; 9 10 11 12] B=[i+j for i=1:3, j=1:4] C=[(-1)^(i+j) for i=1:3, j=1:3]   Then A+B returns    3×4 Matrix{Int64}:  3 5 7 9  8 10 12 14  13 15 17 19    and A-B returns    3×4 Matrix{Int64}:  -1 -1 -1 -1  2 2 2 2  5 5 5 5    which perform matrix addition and subtraction. 4A returns    3×4 Matrix{Int64}:  4 8 12 16  20 24 28 32  36 40 44 48    is scalar multiplication and note again that if a variable is left-multiplied by a constant then the multiplication operator * is optional.  An example of matrix multiplication is C*A resulting in    3×4 Matrix{Int64}:  5 6 7 8  -5 -6 -7 -8  5 6 7 8    and if you multiply incompatible matrices like A*B you will get the error:    DimensionMismatch: incompatible dimensions for matrix multiplication: tried to multiply a matrix of size (3, 4) with a matrix of size (3, 4). The second dimension of the first matrix: 4, does not match the first dimension of the second matrix: 3.    which is perhaps the most detailed matrix incompatibility description in most software.    Other Matrix Operations in Julia  Some other important matrix operations include the determinant, the transpose, ...  Let's say that we have defined    A = [2i+3j for i=1:3, j=1:3]    then the determinant of this can be found with det(A) returning -1.0658141036401493e-14 . Note that even though the matrix A is an integer matrix, then the determinant is a floating-point number although the result will be an integer. This has to do with the way that the algorithm uses floating points in the calculation.   The transpose of the matrix can be found with transpose as in transpose(A) which returns.    3×3 transpose(::Matrix{Int64}) with eltype Int64:  5 7 9  8 10 12  11 13 15    This actually performs what is called a lazy transpose , which just flags the matrix as a transpose without flipping the elements due to speed.  The related operation of the adjoint of the matrix combines the transpose and the complex conjugate. If the matrix is real, the adjoint and transpose are identical and is often used because the operation ' is used. For example, A' returns    3×3 adjoint(::Matrix{Int64}) with eltype Int64:  5 7 9  8 10 12  11 13 15      Matrix Inverse in Julia  The inverse of a matrix can be found with the inv function. If we have a matrix A defined as   A = [3 2 1; 1 1 1; 3 1 1]   then the inverse can be found with inv(A) which returns    3×3 Matrix{Float64}:  -6.4763e-17 -0.5 0.5  1.0 0.0 -1.0  -1.0 1.5 0.5    where the upper left element is very close to zero due to numerical errors. Note that the inverse is a floating-point matrix even though the original matrix is an integer matrix. This is because the inverse is calculated using floating-point arithmetic.  It is often nice to have the inverse in terms of rational numbers. To accomplish this, we need to rationalize the matrix A. This can be one with rationalize.(A) and if the inverse of that is found with inv(rationalize.(A)) resulting in    3×3 Matrix{Rational{Int64}}:  0 -1\/\/2 1\/\/2  1 0 -1  -1 3\/\/2 1\/\/2    Which is the rational version of the one above, but notice that the numerical error in the upper left element is now gone.   "
},
{
  "id": "sect-julia-linear-algebra-2",
  "level": "2",
  "url": "sect-julia-linear-algebra.html#sect-julia-linear-algebra-2",
  "type": "Objectives",
  "number": "5.3",
  "title": "",
  "body": "   Understand how to perform basic matrix operations in Julia.    Compute the determinant, transpose, and adjoint of a matrix in Julia.    Calculate the inverse of a matrix in Julia using both floating-point and rational numbers.    "
},
{
  "id": "sect-julia-other-ops-9",
  "level": "2",
  "url": "sect-julia-linear-algebra.html#sect-julia-other-ops-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "adjoint "
},
{
  "id": "sect-package-lop",
  "level": "1",
  "url": "sect-package-lop.html",
  "type": "Section",
  "number": "5.4",
  "title": "Solving Linear Optimization Problems using Julia",
  "body": " Solving Linear Optimization Problems using Julia     Understand how to set up a Linear Optimization Problem (LOP) using the JuMP package.    Learn how to solve a LOP using the HiGHS package and ensure that the solution is correct.      Before continuing, make sure you have some grasp of the Julia language as in especially the proper syntax. Additionally, you should know how to install packages described in .  If you haven't already, make sure the packages JuMP and HiGHS are installed. The JuMP package which allows optimization problems to be constructed with the variables, constraints and objective defined. This package allows for many different types of problems to be constructed that fall outside of the realm of this book. The JuMP package only creates the problems, it does not do the work to optimize the problem. For that, we need the HiGHS package.  The HiGHS package is useful for solving Linear Optimization Problems of the type we have covered in this book. It does the hard work of the algorithms discussed in this text including the simplex method, cutting planes and branch-and-bound, however, you do not need to specify which method to use. Depending on the type of problem constructed, the HiGHS package will perform the correct technique.    Setting up an LOP using JuMP  Before getting started, make sure that we have loaded the two packages discussed with   using JuMP, HiGHS   and the result doesn't return anything.  As noted above, the JuMP package is used to define a problem. With the use of a few macros, many problems are easily constructed in Julia. For example, let's use and walk through the steps to set this up.   Step 1: create a model    m = Model(HiGHS.Optimizer)   will create a JuMP model and assign the HiGHS.Optimizer as the solver. We will always use this Model call throughout this book, however, if you are using JuMP for doing other solves, like a nonlinear minimization, then you will use a different package and it's related Optimizer . If the line above is the only expression in the cell, this returns the following:    A JuMP Model  ├ solver: HiGHS  ├ objective_sense: FEASIBILITY_SENSE  ├ num_variables: 0  ├ num_constraints: 0  └ Names registered in the model: none    This doesn't have a lot of information because we haven't added variables or constraints to the equation. We will see this change as develop the model.   Step 2: Add variables    @variable(m, x₁ ≥ 0) @variable(m, x₂ ≥ 0)   These lines adds the two variables x₁ and x₂ to the model and they are both nonnegative variables. The subscripts are Unicode characters that you can enter as \\_1 , then TAB inside a Jupyter notebook. Also, the character is entered as \\geq then TAB. Neither are necessary, but make the constraints look like they do written out mathematically. If these are placed in a notebook cell then is echoed out only.   Step Three: add the constraints    @constraint(m, 4x₁ + 3x₂ ≤ 120) @constraint(m, x₁ + 2x₂ ≤ 40) @constraint(m, x₂ ≤ 16)   and again, if all three are in a single cell, you'll only see the last constraint echoed out.   Step Four: add the objective function    @objective(m, Max, x₁+3x₂)   And note that the second argument is Max indicating that this is a maximum problem and the third argument is the function. We have now added all of the elements of this problem (variables, constraints, objective). If one enters print(m) in a cell by itself you can look at the internals of the model:    Max x₁ + 3 x₂  Subject to  4 x₁ + 3 x₂ ≤ 120  x₁ + 2 x₂ ≤ 40  x₂ ≤ 16  x₁ ≥ 0  x₂ ≥ 0    and this looks almost identical to the way we write down the LOP.   Step Five: Find the optimal value   To find the optimal value, we use the command   optimize!(m)   where it is important to include the ! at the end of the optimize! function. As mentioned before, Julia has a convention that if a function modifies its arguments--instead of just returning something, a ! should be used to tip off the Julia coder that the arguments are changing.   This function returns    Running HiGHS 1.10.0 (git hash: fd8665394e): Copyright (c) 2025 HiGHS under MIT license terms  LP has 3 rows; 2 cols; 5 nonzeros  Coefficient ranges:  Matrix [1e+00, 4e+00]  Cost [1e+00, 3e+00]  Bound [0e+00, 0e+00]  RHS [2e+01, 1e+02]  Presolving model  2 rows, 2 cols, 4 nonzeros 0s  2 rows, 2 cols, 4 nonzeros 0s  Presolve : Reductions: rows 2(-1); columns 2(-0); elements 4(-1)  Solving the presolved LP  Using EKK dual simplex solver - serial  Iteration Objective Infeasibilities num(sum)  0 -9.9999494546e-01 Ph1: 2(5); Du: 1(0.999995) 0s  2 -5.6000000000e+01 Pr: 0(0) 0s  Solving the original LP from the solution after postsolve  Model status : Optimal  Simplex iterations: 2  Objective value : 5.6000000000e+01  Relative P-D gap : 0.0000000000e+00  HiGHS run time : 0.00    Generally unless something goes wrong, this information isn't helpful. Therefore, before running the optimize!(m) command, run set_silent(model) and you won't get all of the output.   Step Six: Ensure the Solution   If you suppress the optimizer output (which should be done), you want to make sure that a solution is reached. If you enter   is_solved_and_feasible(m)   and true is returned then all is well.   Step Seven: determine the variable values and the objective of the optimal solution   The last step is generally to get the values of variables and objective of the optimal solution. To get the value of a variable use the value(VAR) command where the argument is the variable you want. In this case, if we do   value(x₁), value(x₂)   the result is (8.0, 16.0) . The objective value is found with objective_value(m) and in this case, this returns 56.0 . These are the same values that we get when we solved problem by hand .   Although the steps here are shown, typically many are done together. Usually set up the problem with steps 1-4, then steps 5 and 6 (solve and verify), then get the variable and objective values.   We'll see how to better approach this in the next example.    Use Julia with the JuMP and HiGHS packages to solve     In this case, set up the model, variables, constraints and objectives as follows.   m2 = Model(HiGHS.Optimizer) @variable(m2, y₁ ≥ 0) @variable(m2, y₂ ≥ 0) @variable(m2, y₃ ≥ 0) @constraint(m2, 5y₁ + 18y₂ + 10y₃ ≥ 54) @constraint(m2, 7y₁ + 10y₂ + 24y₃ ≥ 60) @constraint(m2, 4y₁ + 8y₂ + 12y₃ ≥ 45) @objective(m2, Min, 600y₁ + 750y₂ + 500y₃ ) print(m2)   which produce the model:    Min 600 y₁ + 750 y₂ + 500 y₃  Subject to  5 y₁ + 18 y₂ + 10 y₃ ≥ 54  7 y₁ + 10 y₂ + 24 y₃ ≥ 60  4 y₁ + 8 y₂ + 12 y₃ ≥ 45  4 y₁ + 8 y₂ + 12 y₃ ≤ 70  y₁ ≥ 0  y₂ ≥ 0  y₃ ≥ 0    We will suppress the output from the Optimizer code, run the optimizer and determine if it was solved and feasible.   set_silent(m2) optimize!(m2) is_solved_and_feasible(m2)   and the last line returns true indicating that this is a good solution. We can find the values of it with    value(y₁),value(y₂), value(y₃)    and the result is    (0.0, 1.4558823529411764, 2.7794117647058827)    and the objective value is found with objective_value(m2) which returns 2481.62 .  This shows that Gary shouldn't eat any salads, 1.455 sandwiches and 2.779 bagels. The total number of calories from these food items is 2481.62.      Where's the Simplex Method  I know you are wondering what happened to the simplex method in this chapter. We've spent a long chapter on how to create simplex tableaus and use them to step-by-step go through to the solution. We then spent another chapter on Integer problems with Cutting Planes and Branch and Bound, which use simplex method under the hood. With Julia and the JuMP and HiGHS packages, it seems totally unnecessary to learn all of that.  We won't go through the details of how the HiGHS package finds the optimal solution to problems, but it is equivalent to using the simplex method and the Cutting Planes and Branch and Bound.  Understanding the simplex method is important. The basis of the algorithm in the HiGHS package uses the simplex method, as well as the integer techniques of . It much like any technology in that to completely understand how to use software like this, you need to understand the underlying algorithm.    Infeasible and Unbounded Problems  In , we discussed how to determine if a problem is infeasible or unbounded. The JuMP and HiGHS packages can also determine this for you.  Let's start with the unbounded problem in . We can set this up using JuMP as follows:   m4 = Model(HiGHS.Optimizer) @variable(m4, x₁ ≥ 0) @variable(m4, x₂ ≥ 0) @constraint(m4, x₁ - 2x₂ ≤ -6) @constraint(m4, -5x₁ + 2x₂ ≤ -20) @constraint(m4, -3x₁ -5x₂ ≤ -75) @objective(m4, Max, 5x₁ + 3x₂) print(m4)   which returns:    m4 = Model(HiGHS.Optimizer)  @variable(m4, x₁ ≥ 0)  @variable(m4, x₂ ≥ 0)  @constraint(m4, x₁ - 2x₂ ≤ -6)  @constraint(m4, -5x₁ + 2x₂ ≤ -20)  @constraint(m4, -3x₁ -5x₂ ≤ -75)  @objective(m4, Max, 5x₁ + 3x₂)  print(m4)    and this looks like the problem in . However, if we run the following code:   set_silent(m4) optimize!(m4) is_solved_and_feasible(m4)   the result is false . This may not be surprising because we know it is unbounded. To see a bit more about what is happening, if we enter:   solution_summary(m4)   then we get the following information:    solution_summary(; result = 1, verbose = false)  ├ solver_name : HiGHS  ├ Termination  │ ├ termination_status : DUAL_INFEASIBLE  │ ├ result_count : 1  │ ├ raw_status : kHighsModelStatusUnbounded  │ └ objective_bound : 7.08065e+01  ├ Solution (result = 1)  │ ├ primal_status : INFEASIBILITY_CERTIFICATE  │ ├ dual_status : INFEASIBLE_POINT  │ ├ objective_value : 8.06452e-01  │ ├ dual_objective_value : 7.08065e+01  │ └ relative_gap : 7.00000e+01  └ Work counters  ├ solve_time (sec) : 2.45887e-03  ├ simplex_iterations : 2  ├ barrier_iterations : 0  └ node_count : -1    This shows that the model was not solved correctly and the termination status is DUAL_INFEASIBLE . We will discuss the details of Dual Problems, however, at this point, you can translate this DUAL_INFEASIBLE to mean that the problem is unbounded .    Use the JuMP and HiGHS packages to set up and solve the problem in .    The problem in can be set up as follows:   m5 = Model(HiGHS.Optimizer) @variable(m5, x₁ ≥ 0) @variable(m5, x₂ ≥ 0) @constraint(m5, -x₁ + 2x₂ ≤ 6) @constraint(m5, 5x₁ - 2x₂ ≤ 20) @constraint(m5, -3x₁ -5x₂ ≤ -75) @objective(m5, Max, 5x₁ + 3x₂) print(m5)   and then attempt to find the solution with:   set_silent(m5) optimize!(m5) is_solved_and_feasible(m5)   However, this results in false . To determine the reason, we use:   solution_summary(m5)   The output is similar to the one above for the unbounded problem:     solution_summary(; result = 1, verbose = false)  ├ solver_name : HiGHS  ├ Termination  │ ├ termination_status : INFEASIBLE  │ ├ result_count : 1  │ ├ raw_status : kHighsModelStatusInfeasible  │ └ objective_bound : 0.00000e+00  ├ Solution (result = 1)  │ ├ primal_status : NO_SOLUTION  │ ├ dual_status : INFEASIBILITY_CERTIFICATE  │ ├ objective_value : 0.00000e+00  │ ├ dual_objective_value : -1.76364e+01  │ └ relative_gap : Inf  └ Work counters  ├ solve_time (sec) : 2.22933e-03  ├ simplex_iterations : 2  ├ barrier_iterations : 0  └ node_count : -1    However, note that the termination_status is INFEASIBLE . This is because the problem is infeasible .     "
},
{
  "id": "sect-package-lop-2",
  "level": "2",
  "url": "sect-package-lop.html#sect-package-lop-2",
  "type": "Objectives",
  "number": "5.4",
  "title": "",
  "body": "   Understand how to set up a Linear Optimization Problem (LOP) using the JuMP package.    Learn how to solve a LOP using the HiGHS package and ensure that the solution is correct.    "
},
{
  "id": "sect-jump-setup-37",
  "level": "2",
  "url": "sect-package-lop.html#sect-jump-setup-37",
  "type": "Note",
  "number": "5.4.1",
  "title": "",
  "body": " Although the steps here are shown, typically many are done together. Usually set up the problem with steps 1-4, then steps 5 and 6 (solve and verify), then get the variable and objective values.  "
},
{
  "id": "ex-solve-diet",
  "level": "2",
  "url": "sect-package-lop.html#ex-solve-diet",
  "type": "Example",
  "number": "5.4.2",
  "title": "",
  "body": "  Use Julia with the JuMP and HiGHS packages to solve     In this case, set up the model, variables, constraints and objectives as follows.   m2 = Model(HiGHS.Optimizer) @variable(m2, y₁ ≥ 0) @variable(m2, y₂ ≥ 0) @variable(m2, y₃ ≥ 0) @constraint(m2, 5y₁ + 18y₂ + 10y₃ ≥ 54) @constraint(m2, 7y₁ + 10y₂ + 24y₃ ≥ 60) @constraint(m2, 4y₁ + 8y₂ + 12y₃ ≥ 45) @objective(m2, Min, 600y₁ + 750y₂ + 500y₃ ) print(m2)   which produce the model:    Min 600 y₁ + 750 y₂ + 500 y₃  Subject to  5 y₁ + 18 y₂ + 10 y₃ ≥ 54  7 y₁ + 10 y₂ + 24 y₃ ≥ 60  4 y₁ + 8 y₂ + 12 y₃ ≥ 45  4 y₁ + 8 y₂ + 12 y₃ ≤ 70  y₁ ≥ 0  y₂ ≥ 0  y₃ ≥ 0    We will suppress the output from the Optimizer code, run the optimizer and determine if it was solved and feasible.   set_silent(m2) optimize!(m2) is_solved_and_feasible(m2)   and the last line returns true indicating that this is a good solution. We can find the values of it with    value(y₁),value(y₂), value(y₃)    and the result is    (0.0, 1.4558823529411764, 2.7794117647058827)    and the objective value is found with objective_value(m2) which returns 2481.62 .  This shows that Gary shouldn't eat any salads, 1.455 sandwiches and 2.779 bagels. The total number of calories from these food items is 2481.62.   "
},
{
  "id": "sect-julia-infeasible-14",
  "level": "2",
  "url": "sect-package-lop.html#sect-julia-infeasible-14",
  "type": "Checkpoint",
  "number": "5.4.3",
  "title": "",
  "body": "  Use the JuMP and HiGHS packages to set up and solve the problem in .    The problem in can be set up as follows:   m5 = Model(HiGHS.Optimizer) @variable(m5, x₁ ≥ 0) @variable(m5, x₂ ≥ 0) @constraint(m5, -x₁ + 2x₂ ≤ 6) @constraint(m5, 5x₁ - 2x₂ ≤ 20) @constraint(m5, -3x₁ -5x₂ ≤ -75) @objective(m5, Max, 5x₁ + 3x₂) print(m5)   and then attempt to find the solution with:   set_silent(m5) optimize!(m5) is_solved_and_feasible(m5)   However, this results in false . To determine the reason, we use:   solution_summary(m5)   The output is similar to the one above for the unbounded problem:     solution_summary(; result = 1, verbose = false)  ├ solver_name : HiGHS  ├ Termination  │ ├ termination_status : INFEASIBLE  │ ├ result_count : 1  │ ├ raw_status : kHighsModelStatusInfeasible  │ └ objective_bound : 0.00000e+00  ├ Solution (result = 1)  │ ├ primal_status : NO_SOLUTION  │ ├ dual_status : INFEASIBILITY_CERTIFICATE  │ ├ objective_value : 0.00000e+00  │ ├ dual_objective_value : -1.76364e+01  │ └ relative_gap : Inf  └ Work counters  ├ solve_time (sec) : 2.22933e-03  ├ simplex_iterations : 2  ├ barrier_iterations : 0  └ node_count : -1    However, note that the termination_status is INFEASIBLE . This is because the problem is infeasible .   "
},
{
  "id": "sect-ilop-julia",
  "level": "1",
  "url": "sect-ilop-julia.html",
  "type": "Section",
  "number": "5.5",
  "title": "Solving Integer LOPS with Julia",
  "body": " Solving Integer LOPS with Julia     Understand how to solve integer linear optimization problems using Julia.      In this chapter, we will look at how to solve Integer Linear Optimization Problems (ILOPs) and Binary Linear Optimization Problems (BLOPs) using Julia.  We solved in two different ways. The first involved cutting planes to trim the feasible set without eliminating integer solutions and the second was branch and bound, which successfully split the feasible set into pieces by eliminating non-integer solutions.  These were quite complex but important to understand how they work. However, when solving problems using software, we don't need the details. As in the previous section, we will solve this using the JuMP and HiGHS packages of Julia.    Solving Integer Problems with Julia  Setting up an integer problem to solve with JuMP and HiGHS is very similar to non-integer problems. can be written as   m = Model(HiGHS.Optimizer) @variable(m, x₁ ≥ 0, Int) @variable(m, x₂ ≥ 0, Int) @constraint(m, 17x₁ + 32x₂ ≤ 136) @constraint(m, 4x₁ + 4x₂ ≤ 25) @objective(m, Max, 4x₁ + 5x₂) print(m)   and note that when defining variables on lines 2 and 3, that we add Int to the end indicating that the variables are integers. This returns    Max 4 x₁ + 5 x₂  Subject to  17 x₁ + 32 x₂ ≤ 136  4 x₁ + 4 x₂ ≤ 25  x₁ ≥ 0  x₂ ≥ 0  x₁ integer  x₂ integer    We can solve this exactly the same way as before with   set_silent(m) optimize!(m) is_solved_and_feasible(m)   which returns true so we have an optimal feasible solution. Then finally, we can find the values and the objective with   value(x₁), value(x₂)   which returns    (4.0, 2.0)    and   objective_value(m)   returns 24.0 .    Solve the ILOP defined in using the JuMP and HiGHS packages in Julia. You can use the code above as a template.      Solving Binary LOPs using Julia  Another common constraint on Linear Optimization problems is that variables may take on either 0 or 1. For example, the -queens problem in is such an example.  In , the problem is written in mathematical form. First, if we look at this for , the problem is a bit more reasonable.  First, the variable will be a binary variable that will take on the value 1 if there is a queen on the th row and th column. To create the variables in Julia, we first create a model, then the variables, which we can do in bulk as the following:   m2 = Model(HiGHS.Optimizer) n = 4 @variable(m2, x[1:n,1:n], Bin)   where the last term in the @variable macro shows the variable is binary. Also, note that this make a array variable that will match the size of the board.  There are a number of ways to do set up the constraints including typing all of the constraints out. However, the following is a nice way to do this in a very general way. First, let's do the row and column sums with the mapslices command. Consider mapslices(sum, x, dims = [1]) , which returns:    1×4 Matrix{AffExpr}:  x[1,1] + x[2,1] + x[3,1] + x[4,1] … x[1,4] + x[2,4] + x[3,4] + x[4,4]    Note that this is a row matrix. We then bound each of these by 1 with the following.   @constraint(m2, c1, mapslices(sum, x, dims = [1]) .<= ones(1,n)) @constraint(m2, c2, mapslices(sum, x, dims = [2]) .<= ones(n,1))   where the second line above is the column sums (note that the difference is the dims = [2] ).  To get the diagonal constraints, we will use the diagm function, which produce a diagonal matrix. Consider diagm(1 => ones(3)) which returns    4×4 Matrix{Float64}:  0.0 1.0 0.0 0.0  0.0 0.0 1.0 0.0  0.0 0.0 0.0 1.0  0.0 0.0 0.0 0.0    and this will give us the diagonal constraint. The form of the diagm function uses the argument of the form i = > v , where i is an integer that shows how far from the main diagronal the vector v should exist. If the integer is positive, then the diagonal will be on the upper right part of the matrix and negative values on the lower left. If we multiply this by x with diagm(1 => ones(3)).*x , the result is    4×4 Matrix{AffExpr}:  0 x[1,2] 0 0  0 0 x[2,3] 0  0 0 0 x[3,4]  0 0 0 0    And if this is summed, then we get the sum of the off diagonals. That is sum(diagm(1 => ones(3)).*x) returns   The diagonal constraints can be built with the following lines.   P = Matrix(I,n,n)[n:-1:1, :] @constraint(m2, c3, [sum(diagm(i= > ones(n-abs(i))).*x) for i=-(n-2):(n-2)] .<= ones(2n-3)) @constraint(m2, c4, [sum(P*diagm(i= > ones(n-abs(i))).*x) for i=-(n-2):(n-2)] .<= ones(2n-3))   where the first line is a permutation matrix that will flip all of the rows of a matrix upon right multiplication. The structure [. for i= -(n-2):(n-2)] is called a comprehension and builds a vector. See for more examples.  Lastly, the objective needs to be defined and can be with   @objective(m2, Max, sum(x[:,:]))   and the 3rd argument sums over all elements of x . If we put all of these commands in the same cell, then   Code for the 4-queens problem in Julia   m2 = Model(HiGHS.Optimizer) n = 4 P = [ i+j == n+1 ? 1 : 0 for i=1:n, j=1:n] @variable(m2, x[1:n,1:n], Bin) @constraint(m2, c1, mapslices(sum, x, dims = [1]) .<= ones(1,n)) @constraint(m2, c2, mapslices(sum, x, dims = [2]) .<= ones(n,1)) @constraint(m2, c3, [sum(diagm(i=>ones(n-abs(i))).*x) for i=-(n-2):(n-2)] .<= ones(2n-3)) @constraint(m2, c4, [sum(P*diagm(i=>ones(n-abs(i))).*x) for i=-(n-2):(n-2)] .<= ones(2n-3)) @objective(m2, Max, sum([x[i,j] for i=1:n, j=1:n]))    Again, not necessary, but a good double check to do a print(m2) which will print out the LOP as   Max x[1,1] + x[2,1] + x[3,1] + x[4,1] + x[1,2] + x[2,2] + x[3,2] + x[4,2] + x[1,3] + x[2,3] + x[3,3] + x[4,3] + x[1,4] + x[2,4] + x[3,4] + x[4,4] Subject to x[1,1] + x[2,1] + x[3,1] + x[4,1] ≤ 1 x[1,2] + x[2,2] + x[3,2] + x[4,2] ≤ 1 x[1,3] + x[2,3] + x[3,3] + x[4,3] ≤ 1 x[1,4] + x[2,4] + x[3,4] + x[4,4] ≤ 1 x[1,1] + x[1,2] + x[1,3] + x[1,4] ≤ 1 x[2,1] + x[2,2] + x[2,3] + x[2,4] ≤ 1 x[3,1] + x[3,2] + x[3,3] + x[3,4] ≤ 1 x[4,1] + x[4,2] + x[4,3] + x[4,4] ≤ 1 x[1,1] + x[2,2] + x[3,3] + x[4,4] ≤ 1 x[1,2] + x[2,3] + x[3,4] ≤ 1 x[1,3] + x[2,4] ≤ 1 x[2,1] + x[3,2] + x[4,3] ≤ 1 x[3,1] + x[4,2] ≤ 1 x[4,1] + x[3,2] + x[2,3] + x[1,4] ≤ 1 x[3,1] + x[2,2] + x[1,3] ≤ 1 x[2,1] + x[1,2] ≤ 1 x[4,2] + x[3,3] + x[2,4] ≤ 1 x[4,3] + x[3,4] ≤ 1 x[1,1] binary x[2,1] binary x[3,1] binary x[4,1] binary x[1,2] binary x[2,2] binary x[3,2] binary x[4,2] binary x[1,3] binary x[2,3] binary x[3,3] binary x[4,3] binary x[1,4] binary x[2,4] binary x[3,4] binary x[4,4] binary   and if carefully look at all of the constraints that they are all that there is at most one queen (sum of the x values along each row, column and diagonal), that all of the constraints are there.  Solve the problem with   set_silent(m2) optimize!(m2) is_solved_and_feasible(m2)   and again, since true is returned that we have a feasible optimal solution. We can use the following shortcut (called broadcasting) to output the values with   value.(x)   where recall that the . does broadcasting, that is, the function value is applied to all elements of x term by term. This returns    4×4 Matrix{Float64}:  -0.0 -0.0 1.0 0.0  1.0 0.0 0.0 -0.0  0.0 -0.0 -0.0 1.0  0.0 1.0 0.0 -0.0    Although we can read the solution from this, it seems odd that this is not an integer matrix. We can round this with round.(Int, value.(x)) which returns    4×4 Matrix{Int64}:  0 0 1 0  1 0 0 0  0 0 0 1  0 1 0 0    which will show the locations of the queens. On a 4 by 4 chessboard, this would look like:   An 4 by 4 chessboard with a queen on a square. The arrows indicate the other squares that can be attacked with this piece.        And in , one can see that no queen can attack another one in a single move. Note that in general you get a single solution to a LOP when solving either via the simplex method or using software tools. There is another solution to this problem in which the board above can be flipped either vertically or horizontally. The software will not generate this other solution.  This problem can be scaled up to larger chessboards by careful adjusting the constraints above.    Does the 3-queens problem have a solution?  It's probably not too hard to see that if you have a 3 by 3 chess board, that you cannot get 3 queens on the board. Play with it for a few minutes and you'll probably see this.  So what happens with the ILOP? The model can be created with:   q3 = Model(HiGHS.Optimizer) @variable(q3, x[1:3,1:3], Bin) for j=1:3 @constraint(q3, sum(x[:,j]) ≤ 1) end for i=1:3 @constraint(q3, sum(x[i,:]) ≤ 1) end @constraint(q3, sum( x[i,i] for i=1:3) ≤ 1) @constraint(q3, sum( x[i,4-i] for i=1:3) ≤ 1) @constraint(q3, sum( x[1,2]+x[2,1]) ≤ 1) @constraint(q3, sum( x[3,2]+x[2,3]) ≤ 1) @constraint(q3, sum( x[1,2]+x[2,3]) ≤ 1) @constraint(q3, sum( x[3,2]+x[2,1]) ≤ 1) @objective(q3, Max, sum(x[:,:])) print(q3)   and this prints out the model:    Max x[1,1] + x[2,1] + x[3,1] + x[1,2] + x[2,2] + x[3,2] + x[1,3] + x[2,3] + x[3,3]  Subject to  x[1,1] + x[2,1] + x[3,1] ≤ 1  x[1,2] + x[2,2] + x[3,2] ≤ 1  x[1,3] + x[2,3] + x[3,3] ≤ 1  x[1,1] + x[1,2] + x[1,3] ≤ 1  x[2,1] + x[2,2] + x[2,3] ≤ 1  x[3,1] + x[3,2] + x[3,3] ≤ 1  x[1,1] + x[2,2] + x[3,3] ≤ 1  x[3,1] + x[2,2] + x[1,3] ≤ 1  x[2,1] + x[1,2] ≤ 1  x[3,2] + x[2,3] ≤ 1  x[1,2] + x[2,3] ≤ 1  x[2,1] + x[3,2] ≤ 1  x[1,1] binary  x[2,1] binary  x[3,1] binary  x[1,2] binary  x[2,2] binary  x[3,2] binary  x[1,3] binary  x[2,3] binary  x[3,3] binary    and the find the optimal solution with   set_silent(q3) optimize!(q3) is_solved_and_feasible(q3)   so true is returned. You might think that this won't have a solution, however, it seems to and if we print out the solution with   round.(Int, value.(x))   the result is    3×3 Matrix{Int64}:  0 0 0  1 0 0  0 0 1    This shows that the optimal solution has 2 queens on the board. Recall that the goal is to maximize the objective function with the given constraints. This means that putting a queen on an edge and an opposite corner is the largest number of queens allowed. You probably noticed this if you played with it a bit.    Update the code shown above to solve for the 5-queens problem.     "
},
{
  "id": "sect-ilop-julia-2",
  "level": "2",
  "url": "sect-ilop-julia.html#sect-ilop-julia-2",
  "type": "Objectives",
  "number": "5.5",
  "title": "",
  "body": "   Understand how to solve integer linear optimization problems using Julia.    "
},
{
  "id": "sect-ilop-15",
  "level": "2",
  "url": "sect-ilop-julia.html#sect-ilop-15",
  "type": "Checkpoint",
  "number": "5.5.1",
  "title": "",
  "body": "  Solve the ILOP defined in using the JuMP and HiGHS packages in Julia. You can use the code above as a template.   "
},
{
  "id": "lst-4-queens-julia",
  "level": "2",
  "url": "sect-ilop-julia.html#lst-4-queens-julia",
  "type": "Listing",
  "number": "5.5.2",
  "title": "Code for the 4-queens problem in Julia",
  "body": " Code for the 4-queens problem in Julia   m2 = Model(HiGHS.Optimizer) n = 4 P = [ i+j == n+1 ? 1 : 0 for i=1:n, j=1:n] @variable(m2, x[1:n,1:n], Bin) @constraint(m2, c1, mapslices(sum, x, dims = [1]) .<= ones(1,n)) @constraint(m2, c2, mapslices(sum, x, dims = [2]) .<= ones(n,1)) @constraint(m2, c3, [sum(diagm(i=>ones(n-abs(i))).*x) for i=-(n-2):(n-2)] .<= ones(2n-3)) @constraint(m2, c4, [sum(P*diagm(i=>ones(n-abs(i))).*x) for i=-(n-2):(n-2)] .<= ones(2n-3)) @objective(m2, Max, sum([x[i,j] for i=1:n, j=1:n]))   "
},
{
  "id": "fig-4by4-chessboard-queen",
  "level": "2",
  "url": "sect-ilop-julia.html#fig-4by4-chessboard-queen",
  "type": "Figure",
  "number": "5.5.3",
  "title": "",
  "body": " An 4 by 4 chessboard with a queen on a square. The arrows indicate the other squares that can be attacked with this piece.       "
},
{
  "id": "sect-ilop-julia-6-14",
  "level": "2",
  "url": "sect-ilop-julia.html#sect-ilop-julia-6-14",
  "type": "Checkpoint",
  "number": "5.5.4",
  "title": "",
  "body": "  Update the code shown above to solve for the 5-queens problem.   "
},
{
  "id": "sect-intro-dual",
  "level": "1",
  "url": "sect-intro-dual.html",
  "type": "Section",
  "number": "6.1",
  "title": "Introduction to Dual Problems",
  "body": " Introduction to Dual Problems     Understand the concept of a dual problem in linear optimization.    Be able to write down a dual problem from any primal linear optimization problem.      The concept of a dual problem is one of the most important ideas in linear optimization. It is a way to look at the same problem from a different perspective. The dual problem is related to the primal problem, which is the original problem we are trying to solve. In this section and the next two, we will first determine how to set up a dual problem. In the next section, we will examine the link between the solutions of the primal and dual problems. This will result in a certificate that the solution to the primal problem is optimal.    Developing a Dual Problem  We return to , in which Luis is a toymaker who is making decisions about the numbers of toy cars, trucks and SUVs to build to maximize his profit.  The applied problem was written in mathematical form in , but can be summarized as         Let's pretend we don't know how to solve this. Instead, we want to see if we can estimate the amount of money that Luis will make. If we take the second constraint and multiply it by 4 to get     and use the fact that     This shows that the maximize that Luis will earn in the week is less than $816. Also, note that it is important that for the inequalities to hold.  Another possible bound will be to multiply the first constraint by , the second by and the last by or     If we add these three constraints:     Since , we can conclude that so this is a better bound than the previous one.    Find another bound for . Can you beat $816? How about $553.50? You can take a single inequality and multiply through a constant or take a linear combination like the above example.    We arbitrarily picked some values to multiply the three constraints by to try to develop a bound. Instead, if we use the variables and as factors, let's see what happens. That is     If we sum the left hand sides of these, to get     where the terms have been rearranged to be factors of and . From the the terms in , we have     and we defined to be the right hand side of this inequality. Also, because is also an upper bound on , we have    Combining and , the result is     and since all variables are nonnegative, the coefficients of and satisfy:     If we define , then we can determine the smallest bound for , if we minimize . Specifically, we can define the problem         This problem is called the dual of and we will see in this section that there is an important relationship between a problem and its dual.  We will see how the dual plays an important mathematical relationship to the original (primal) problem throughout the rest of this chapter, however, let's look at this example and interpret the new variables and .  First, note that is the objective and it has the same units as in the primal problem. In the primal problem, the goal was to maximize the profit. The unit of is the same, but we are trying to minimize a cost.  Also recall that the coefficients of the dual objective are 183, 204 and 2655. These represent the units of pine, units of birch and total hours of labor that are available. The three variables multiply these terms to give dollars so     In this example, the terms are called the marginal values or shadow prices , which come from economics. The value of is the amount that the profit that can be earned for an extra unit of birch. This is the same for except for pine. The value of is the amount profit that could be made for an extra hour of labor.  Much more could be said about this and for certain problems, the analysis of this is helpful for businesses making decisions.    Generalizing the Dual  Recall that in we wrote an LOP in standard form as   Primal Maximal LOP      is labeled Primal to distinguish it from the dual and a maximal problem. This can be written in matrix form as     Notice that the coefficients of the variables throughout the dual problem are the same as the primal problem, but in different locations.   Dual Minimal LOP      or in matrix form as       Write down the dual of and then find its optimal solution using the simplex method finding the final tableau.    The dual can be written as     The solution can be found by starting with the tableau:     and then performing the simplex method to get the final tableau:     This has the solution     and the objective for this is .      Weak Primal-Dual Theorem  In the specific problem that we defined the dual in this section in the inequalities in , and . Using the general primal and dual problems, we can set up the following inequalities:     where the equality in arises from the objective function in . The inequality in is a result of the inequality in . The equality in is the property of transposes of matrices and the inequality in is the inequality constraint from the Primal problem in . Finally the last step in is because each of the right hand sides of the last two equations are scalars and thus the transposes can be interchanged. Then the term is the definition of the objective in .  If we examine the inequalities in , this is true for any and that satisfy the constraints in the primal and dual problems, respectively. In short, and must be feasible points.  The results of this is summarized as the following.   Weak Duality Theorem      for any point that is feasible in the Primal problem and a feasible point in the Dual problem.    This is a direct result of the inequalities in .    As an example, in , some attempts to find a bound on the maximum profit from Luis the toymaker. For example, the first bound of $816 was found by taking the second constraint and multiplying it by 4, which is a feasible point in the dual problem. The second bound of $564 was found by taking a linear combination of the first two constraints. The first bound is actually and the second bound is .  The bounds can be calculated by using the objective function in the dual problem in . For the first bound:     and for the second bound:       For these two bounds, show that the value of are feasible points in the dual problem.    For the first bound, we have     and for the second bound, we have        "
},
{
  "id": "sect-intro-dual-2",
  "level": "2",
  "url": "sect-intro-dual.html#sect-intro-dual-2",
  "type": "Objectives",
  "number": "6.1",
  "title": "",
  "body": "   Understand the concept of a dual problem in linear optimization.    Be able to write down a dual problem from any primal linear optimization problem.    "
},
{
  "id": "sect-intro-dual-3-1",
  "level": "2",
  "url": "sect-intro-dual.html#sect-intro-dual-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "certificate "
},
{
  "id": "prob-toymaker-lop",
  "level": "2",
  "url": "sect-intro-dual.html#prob-toymaker-lop",
  "type": "Problem",
  "number": "6.1.1",
  "title": "",
  "body": "      "
},
{
  "id": "sect-develop-dual-15",
  "level": "2",
  "url": "sect-intro-dual.html#sect-develop-dual-15",
  "type": "Checkpoint",
  "number": "6.1.2",
  "title": "",
  "body": "  Find another bound for . Can you beat $816? How about $553.50? You can take a single inequality and multiply through a constant or take a linear combination like the above example.   "
},
{
  "id": "prob-toymaker-dual",
  "level": "2",
  "url": "sect-intro-dual.html#prob-toymaker-dual",
  "type": "Problem",
  "number": "6.1.3",
  "title": "",
  "body": "      "
},
{
  "id": "sect-develop-dual-30",
  "level": "2",
  "url": "sect-intro-dual.html#sect-develop-dual-30",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dual "
},
{
  "id": "sect-develop-dual-35",
  "level": "2",
  "url": "sect-intro-dual.html#sect-develop-dual-35",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "marginal values shadow prices "
},
{
  "id": "prob-primal-lop",
  "level": "2",
  "url": "sect-intro-dual.html#prob-primal-lop",
  "type": "Problem",
  "number": "6.1.4",
  "title": "Primal Maximal LOP.",
  "body": " Primal Maximal LOP     "
},
{
  "id": "sect-dual-form-4",
  "level": "2",
  "url": "sect-intro-dual.html#sect-dual-form-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Primal "
},
{
  "id": "prob-dual-lop",
  "level": "2",
  "url": "sect-intro-dual.html#prob-dual-lop",
  "type": "Problem",
  "number": "6.1.5",
  "title": "Dual Minimal LOP.",
  "body": " Dual Minimal LOP     "
},
{
  "id": "sect-dual-form-10",
  "level": "2",
  "url": "sect-intro-dual.html#sect-dual-form-10",
  "type": "Checkpoint",
  "number": "6.1.6",
  "title": "",
  "body": "  Write down the dual of and then find its optimal solution using the simplex method finding the final tableau.    The dual can be written as     The solution can be found by starting with the tableau:     and then performing the simplex method to get the final tableau:     This has the solution     and the objective for this is .   "
},
{
  "id": "thm-weak-primal-dual",
  "level": "2",
  "url": "sect-intro-dual.html#thm-weak-primal-dual",
  "type": "Theorem",
  "number": "6.1.7",
  "title": "Weak Duality Theorem.",
  "body": " Weak Duality Theorem      for any point that is feasible in the Primal problem and a feasible point in the Dual problem.    This is a direct result of the inequalities in .   "
},
{
  "id": "sect-weak-primal-dual-13",
  "level": "2",
  "url": "sect-intro-dual.html#sect-weak-primal-dual-13",
  "type": "Checkpoint",
  "number": "6.1.8",
  "title": "",
  "body": "  For these two bounds, show that the value of are feasible points in the dual problem.    For the first bound, we have     and for the second bound, we have      "
},
{
  "id": "sect-primal-dual",
  "level": "1",
  "url": "sect-primal-dual.html",
  "type": "Section",
  "number": "6.2",
  "title": "Primal-Dual Relationships",
  "body": " Primal-Dual Relationships     Understand the relationship between the primal and dual problems.    Determine the optimal values of the dual problem from the final tableau of the primal problem.    Understand the set of lemmas relating the dual and primal problems.    Understand the proof of the Strong Duality Theorem.     Let's consider a Primal LOP     The initial tableau is     and using the simplex method, the tableau with optimal solutions is     The optimal basic solution is     with .  The dual problem is written     This can be solved with the simplex method. The initial tableau is     and tableau pivots result in     The optimal solution is   with .  Looking at the final tableau for both the primal and dual problems, you should notice many similarities. In particular, the nonzero elements of are located in the final objective row of the primal tableau (except for some shuffling of locations). Additionally, the nonzero values of are located in the final objective row of the dual tableau, again with shuffling of locations. This section will discuss why this occurs.  Consider now that the simplex method was performed on the primal problem. The final objective row will take on the form:     where the last row needs to be scaled such that the second to last element is . Thus, if that value is not 1, like in , the row should be multiplied through by , where is the final pivot value.eq-ex-dual-tableau-solution  From what we saw in the problem above, it appears that     Here's the roadmap for what we are trying to do. We have the tableau from the primal problem, and specifically the final objective row. We want to show that     The values of the objective row correspond to the optimal values of in the dual.    The values of satisfy constraints thus the values of are non-negative.    The variables satisfy the other constraints of the dual.    The optimal value of equals .     We will then call the optimal values of the certificate for the primal problem. The last statement above is the strong-duality theorem the crux of this section.    The optimal values of as defined by satisfies the nonnegative constraint.    Because for all is in the objective row of the final tableau, all elements are nonnegative, therefore is nonnegative.      Show that     where is the optimal value of of the Primal LOP and the 's. The values of can be any nonnegative value.    The last row of the objective function of the final primal tableau states that     from      Since the slack variable from the original form of the dictionary can be written:     we can use this and the objective from the Primal LOP to write as     and rewriting, we get         Show that       Let in in .      Show that       Substitute the result of into from .      Show that     and       Equating coefficients of , leads to . Since both and from , this leads to .    Note that we have shown that the values of taken from the objective row of the final primal tableau, which are called the certificates, are equal to the solution of the dual problem, .  Additionally, the values of satisfy the dual problem. Specifically, the values of satisfy the nonnegative constraints from and they also satisfy the more general constraint from . To show the dual objective function is satifised, we need the next theorem.   Strong Duality Theorem   If a linear problem has an optimal value , and its dual problem has an optimal value then .    The objective function of the dual is define as   and if the optimal values are used then   By , this is also equal to .    "
},
{
  "id": "sect-primal-dual-2",
  "level": "2",
  "url": "sect-primal-dual.html#sect-primal-dual-2",
  "type": "Objectives",
  "number": "6.2",
  "title": "",
  "body": "   Understand the relationship between the primal and dual problems.    Determine the optimal values of the dual problem from the final tableau of the primal problem.    Understand the set of lemmas relating the dual and primal problems.    Understand the proof of the Strong Duality Theorem.    "
},
{
  "id": "sect-primal-dual-28",
  "level": "2",
  "url": "sect-primal-dual.html#sect-primal-dual-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "certificate "
},
{
  "id": "lem-dual-nonnegative",
  "level": "2",
  "url": "sect-primal-dual.html#lem-dual-nonnegative",
  "type": "Lemma",
  "number": "6.2.1",
  "title": "",
  "body": "  The optimal values of as defined by satisfies the nonnegative constraint.    Because for all is in the objective row of the final tableau, all elements are nonnegative, therefore is nonnegative.   "
},
{
  "id": "lem-obj-row",
  "level": "2",
  "url": "sect-primal-dual.html#lem-obj-row",
  "type": "Lemma",
  "number": "6.2.2",
  "title": "",
  "body": "  Show that     where is the optimal value of of the Primal LOP and the 's. The values of can be any nonnegative value.    The last row of the objective function of the final primal tableau states that     from      Since the slack variable from the original form of the dictionary can be written:     we can use this and the objective from the Primal LOP to write as     and rewriting, we get      "
},
{
  "id": "cor-z-star",
  "level": "2",
  "url": "sect-primal-dual.html#cor-z-star",
  "type": "Corollary",
  "number": "6.2.3",
  "title": "",
  "body": "  Show that       Let in in .   "
},
{
  "id": "cor-sum-cj-xj",
  "level": "2",
  "url": "sect-primal-dual.html#cor-sum-cj-xj",
  "type": "Corollary",
  "number": "6.2.4",
  "title": "",
  "body": "  Show that       Substitute the result of into from .   "
},
{
  "id": "cor-cj-geq",
  "level": "2",
  "url": "sect-primal-dual.html#cor-cj-geq",
  "type": "Corollary",
  "number": "6.2.5",
  "title": "",
  "body": "  Show that     and       Equating coefficients of , leads to . Since both and from , this leads to .   "
},
{
  "id": "thm-strong-duality",
  "level": "2",
  "url": "sect-primal-dual.html#thm-strong-duality",
  "type": "Theorem",
  "number": "6.2.6",
  "title": "Strong Duality Theorem.",
  "body": " Strong Duality Theorem   If a linear problem has an optimal value , and its dual problem has an optimal value then .    The objective function of the dual is define as   and if the optimal values are used then   By , this is also equal to .   "
},
{
  "id": "sect-dual-problems-julia",
  "level": "1",
  "url": "sect-dual-problems-julia.html",
  "type": "Section",
  "number": "6.3",
  "title": "Solving Dual Problems with Julia",
  "body": " Solving Dual Problems with Julia     Formulate and solve dual problems using Julia    Extract basis information from solutions using Julia      In , one main takeaway was the fact that solving the primal problem also gives us a solution to the dual problem. Here, we will see how to explicitly formulate and solve dual problems using Julia.  First, let's examine LOP in using Julia.   m = Model(HiGHS.Optimizer) @variable(m, x₁ ≥ 0) @variable(m, x₂ ≥ 0) @variable(m, x₃ ≥ 0) @objective(m, Max, 3x₁ + 4x₂ + 7x₃) @constraint(m, c1, x₁ + 2x₂ + 3x₃ ≤ 12) @constraint(m, c2, 4x₁ + 3x₂ + 2x₃ ≤ 18) print(m)   And as we will see below, including the terms c1 and c2 in the constraints is important. The result of this is the LOP as expected.    Max 3 x₁ + 4 x₂ + 7 x₃  Subject to  x₁ + 2 x₂ + 3 x₃ ≤ 12  4 x₁ + 3 x₂ + 2 x₃ ≤ 18  x₁ ≥ 0  x₂ ≥ 0  x₃ ≥ 0    And then solving this with the following:   set_silent(m) optimize!(m) is_solved_and_feasible(m)   The results is true and finding the optimal values of the variables and objective with:   value(x₁), value(x₂), value(x₃)   results in , and for the objective use objective_value(m) which results in .  As we saw in , the solution to the dual is in the objective row of the optimal tableau. However, it doesn't appear that we have the tableau. Let's first solve the dual problem from explicitly with the following:   md = Model(HiGHS.Optimizer) @variable(md, y₁ ≥ 0) @variable(md, y₂ ≥ 0) @objective(md, Min, 12y₁ + 18y₂) @constraint(md, cd1, y₁ + 4y₂ ≥ 3) @constraint(md, cd2, 2y₁ + 3y₂ ≥ 4) @constraint(md, cd3, 3y₁ + 2y₂ ≥ 7) print(md)   and the result is    Min 12 y₁ + 18 y₂  Subject to  y₁ + 4 y₂ ≥ 3  2 y₁ + 3 y₂ ≥ 4  3 y₁ + 2 y₂ ≥ 7  y₁ ≥ 0  y₂ ≥ 0    And then solving this with the following:   set_silent(md) optimize!(md) is_solved_and_feasible(md)   The results is true and finding the optimal values of the variables and objective with:   value(y₁), value(y₂)   results in , and for the objective use objective_value(md) which results in , which is the same value as that of the primal problem. (Yes, the strong duality theorem comes through.)  It seems unnecessary to have to solve the dual problem in light of the work in and its true that we don't need to. If instead, we enter the following code:   dual(c1),dual(c2)   The result is (-2.2, -0.19999999999999973) . The dual function returns the value of the slack variable coefficients in the objective function written in dictionary form. That is, returning to the final tableau in , the objective row can be written as     The values of the dual variables using Julia results in the coefficients of the slack variables that correspond to the two constraints and in fact the result of the dual command is the negative of the values of the dual variables found directly.  You may notice that dual gave the coefficients of and , but not . We need a little more work for that.    Finding a basis using Julia  The primal and dual example that we saw above showed that we can solve the primal problem and get the values of the dual problem. However, another useful part of the solution that we have seen over the first few chapters of this book is the basis of the solution. The basis will also play a significant role in determining uniqueness of solutions.   Although the basis is important in the simplex method, often packages like HiGHS may not use the simplex tableau as we have in this book. We provide a possible alternative in . However, with some work, we can get the basis out of the solution using JuMP and HiGHS .  The following code will show which of the original variables are basic:   [ xi => get_attribute(xi, MOI.VariableBasisStatus()) for xi in all_variables(m) ]   and for the Primal problem above (this is the m model), this results in    3-element Vector{Pair{VariableRef, MathOptInterface.BasisStatusCode}}:  x₁ => MathOptInterface.BASIC  x₂ => MathOptInterface.NONBASIC_AT_LOWER  x₃ => MathOptInterface.BASIC    which shows that and are basic and is non-basic. (WHAT DOES NONBASIC_AT_LOWER mean?)  Similarly, we can get the basis status of the constraints, which correspond to the dual variables, with the following code:   map(c-> name(c) => MOI.get(m, MOI.ConstraintBasisStatus(), c), all_constraints(m, include_variable_in_set_constraints = false))   which returns:    2-element Vector{Pair{String, MathOptInterface.BasisStatusCode}}:  \"c1\" => MathOptInterface.NONBASIC  \"c2\" => MathOptInterface.NONBASIC    Indicating that both constraints are non-basic.   "
},
{
  "id": "sect-dual-problems-julia-2",
  "level": "2",
  "url": "sect-dual-problems-julia.html#sect-dual-problems-julia-2",
  "type": "Objectives",
  "number": "6.3",
  "title": "",
  "body": "   Formulate and solve dual problems using Julia    Extract basis information from solutions using Julia    "
},
{
  "id": "sect-dual-certificates",
  "level": "1",
  "url": "sect-dual-certificates.html",
  "type": "Section",
  "number": "6.4",
  "title": "Finding Optimal Certificates",
  "body": " Finding Optimal Certificates     Explain how the certificate ensures that a solution is optimal.    Use the Complementary Slackness Condition to further deepen your understanding of simplex tableaus.     First of all, a reminder that a certificate for an LOP is the set of values from the dual for a given set of value from the Primal. If the values we are discussing arise from an optimal solution, then the 's are called an optimal certificate .  We will show in this section why a certificate is important how it can show that a basic solution is optimal.  For example, in the first example of this chapter we saw that was a solution to the Primal LOP, with . The certificate is with and , this is optimal.  We'll use the notation . to describe any feasible solution of an LOP with 3 variable and 5 constraints for which coordinates labelled 0 have value 0, coordinates labelled + have positive value and coordinates labelled have nonnegative values.  The Complementary Slackness Condition above can be written as:     Thus if has the form then in order for it to be primal optimal, must be of the form .  The reason this is useful is the following: Suppose that you know think that is the solution to     but you tossed out the simplex tableau. The value generates equality for both constraints, so it really has the solution which has the form and thus its dual solution has the form, . Thus, if we solve:     which has the unique solution . These can be used to show that , which equals so this is optimal.   Complementary Slackness Theorem   Let be -feasible. Then is primal optimal if and only if there is a -feasible such that both         Note: if this is exactly workout 4.4.4, needs to be updated.  Consider the Primal LOP:        Show that is optimal.    Using , since , , then     Also, when  and since the second inequality satisfies the second part of the CST, then . Setting this in and solving results in and or   Recall that for a point to be -feasible, that and using the point in  And this vector is , therefore is optimal      Show that is not optimal.    From , we get that in order to be optimal,     and all equations are satisfied, implying that , thus thus in order to be optimal, .  The solution to the equation above is:     for all values of , however substituting these into the 1st, 4th, and 5th equations of the dual problem     Note from the fact that , that the first constraint above is not satisfied, so this is not -feasible.     "
},
{
  "id": "sect-dual-certificates-2",
  "level": "2",
  "url": "sect-dual-certificates.html#sect-dual-certificates-2",
  "type": "Objectives",
  "number": "6.4",
  "title": "",
  "body": "   Explain how the certificate ensures that a solution is optimal.    Use the Complementary Slackness Condition to further deepen your understanding of simplex tableaus.    "
},
{
  "id": "thm-primal-feasible-dual-feasible",
  "level": "2",
  "url": "sect-dual-certificates.html#thm-primal-feasible-dual-feasible",
  "type": "Theorem",
  "number": "6.4.1",
  "title": "Complementary Slackness Theorem.",
  "body": " Complementary Slackness Theorem   Let be -feasible. Then is primal optimal if and only if there is a -feasible such that both      "
},
{
  "id": "sect-dual-certificates-16",
  "level": "2",
  "url": "sect-dual-certificates.html#sect-dual-certificates-16",
  "type": "Example",
  "number": "6.4.2",
  "title": "",
  "body": "  Note: if this is exactly workout 4.4.4, needs to be updated.  Consider the Primal LOP:        Show that is optimal.    Using , since , , then     Also, when  and since the second inequality satisfies the second part of the CST, then . Setting this in and solving results in and or   Recall that for a point to be -feasible, that and using the point in  And this vector is , therefore is optimal      Show that is not optimal.    From , we get that in order to be optimal,     and all equations are satisfied, implying that , thus thus in order to be optimal, .  The solution to the equation above is:     for all values of , however substituting these into the 1st, 4th, and 5th equations of the dual problem     Note from the fact that , that the first constraint above is not satisfied, so this is not -feasible.    "
},
{
  "id": "sect-general-form",
  "level": "1",
  "url": "sect-general-form.html",
  "type": "Section",
  "number": "7.1",
  "title": "General Form of an LOP",
  "body": " General Form of an LOP     Understand how to write a general LOP in standard form.    Adapt the simplex method to handle equality constraints and free variables.    Develop additional steps to the simplex method to handle equality constraints and free variables.      Throughout this book, we have seen linear problems with many different types of linear constraints. This however, is not the most general types of problems we can handle. This chapter goes into adding linear equality constraints as well as cases when variables lose the non-negative constraint, which is crucial to getting the simplex method to solve correctly.    Writing a General LOP in Standard Form  Consider the LOP:         A graph of the feasible set is   A graph of the feasible set in . The inequality constraints are shaded in graph, however there is also an equality constraint, which is the line (in red).      Note that in the third constraint is an equality constraint and the second variable, , does not have a nonnegative constraint. We will see how to handle these cases in this section.  The solution needs to be on both on the line (in red) as well as in the gray triangular region. A keen observation would notice that in the upper right direction along the line increases the objective function, so the solution must be at the intersection of the red line and the upper boundary of the triangle. However as problems get more complicated, arguments like this will not work and we will adapt the simplex method to solve this in general.  We can put this problem in standard form for both the equality constraint as well as the lack of nonnegative constraint on the variable. First, the equality as the third constraint in can be written as two inequalities.     and the set of points that satisfy both of these is the line.  The lack of nonnegative constraint on in can be written by introducing two new variables, and , then rewriting , where and . Basically this is saying that a variable with no constraints can be the difference of two nonnegative variables. The new version of can be written         with the updated inequality constraints and the introduction of the new variables, this is now in standard form and can be solved using the standard simplex method:     where the first three columns are labelled and the slack variables are .  To solve this, we perform the standard simplex method.     which is optimal now. The solution is     which translates back to the original variables as     with the objective function of .  This technique will work for both equality constraints as well as free variables. However, for each equality constraint it introduces another constraint (extra row in the tableau) for each free variable, there is a new variable (extra column in the tableau). Now we will see how to adapt the original simplex tableau and method to directly handle these.    Adapting the Simplex Method to Equality Constraints and Free Variables  Let's return to that we saw at the top of this section. We will now try to determine a solution without introducing new constraints or variables other than slack variables. To do this, recall that underlying the simplex method is the dictionary. If we write the objective function and constraints with a slack variables as     and again notice that is missing from the nonnegative constraint and the equality constraint does not have a slack variable. Also, the parameters are or and therefore the basic variables are .  Note that this has a basic solution of , so it is feasible, so we perform a pivot to increase the objective function. As before, we will select , which is the smaller index of the parameters that will increase the objective, to enter the basis.  Previously, we would select a basic variable to leave the basis, however, since we have an equality constraint, we will not do that. It may seem arbitrary to choose either parameter, however, we eventually need to get all free variables into the basis and selecting to bring a free variable is done for efficiency. Therefore and then substitute this into the other equations in      Notice that the basic solution to this is and that there is now only 1 parameter so and the basis is . We will denote a tableau pivot of this form as .  One may also cringe a bit with a negative number in the basic solution (although we could take care of that in phase I), however since is a free variable this is a feasible solution.  Examining the objective function in the dictionary, note that increasing will increase the objective, so we perform another pivot to bring into the basis. To select the variable to leave the basis, we typically use an argument to increase the objective without making the result infeasible. This is still true, however, it is important that the free variable does not leave the basis. Therefore we need to either select or .  We'll use the same argument as before in Phase II except don't include in the possible list. If we select to leave, then would be negative, so we will select to leave or the tableau pivot of . This results in .  We will place this in the dictionary (multiplying each row by 3) to get     This now has the basic solution:     and objective value of . This is the same solution that we found in .  The steps to work with free variables and equality constraints will be called Phase 0 of the Simplex Method. We will see this same example with a tableau in the next section.    Simplex Method: Phase 0  We knew from before that using the dictionary to find optimal solutions to LOPs is helpful in understanding, but difficult in performing the arithmetic. In this section, we adapt the steps above to a simplex tableau.  Let's return to and write down the simplex tableau if we keep the inequality constraint without a slack variable as in     There are two things to note with this. First, the 2nd column has an above it. This indicates that the 2nd variable is a free variable. Secondly, the 3rd row has no slack variable.  Above, the first step of the solution was to bring into the basis. We will use the notation where indicates that nothing leaves the basic. This results in a matrix pivot about row 3, column 1.     Note that the 3rd row is still an inequality and this is the tableau version of with the same basic solution of     and note that since is a free variable that this is a feasible solution. Now that all of the free variables are in the basis and the equality constraint is written in terms of a basis variable that this is out of phase 0.  Also, since all of the variables are feasible, we do not need to perform any phase 1 pivots. Let's move to phase 2.  As previous, we select column 1 to create the -ratios to bring into the basis. Since is a free variable, when selecting the pivot, do not remove this from the basis. Only removing from the basis will accomplish our tasks.     The solution to this is the same as using the dictionary or       Find the solution to the following LOP using the steps in Phase 0 of the simplex method.           The first step is to write the problem in standard form, so the third constraint is written as and the objective function is written as then the simplex tableau can be     Since is a free variable, but is not in the basis, Phase 0 needs to be performed with     This is not feasible, so we are in Phase I. The following steps will create a feasible tableau:     And this is feasible now, however it is not optimal, so continue with Phase II. If we find -ratios with the 4th column, we get     Normally, we would choose the 4th row because it is the smallest nonnegative ratio, however, this corresponds to which is a free variable and cannot remove it from the basis. Therefore we will choose the 3rd row, corresponding to to leave the basis.     and this solution is now optimal with the basic solution     and recall that since is a free variable, it can take on any value, so the negative number is not a problem.      Geometry of Phase 0  As noted in previous sections, understanding the geometry of the simplex method is important to understanding how the algorithm works. Let's look at the example shown above in and see how the geometry of the solution changes with the introduction of free variables and equality constraints.  To begin with, revisit and note that the first step of the simplex method for any problem starts at the origin. The next step way a pivot to bring into the basis, which is shown in as the point . Note that this is a feasible point (clear from the diagram), but since is a free variable, it can take on any value.  The next pivot was to bring into the basis, which is shown in as the point .    Plot the feasible set from and on the plot show the location of the basic solution at each step.    From , the basic variables at each step are                          These are label on the figure below with , for the -th step.        Some commentary on the results is helpful. As mentioned throughout this text, the first step is always at the origin, which is shown in the figure as . The next step is to bring , the free variable into the basis and because there is a linear constraint, the next step is where the free variable or intersects the line . This may seem strange because the origin was in the feasible set and this first step is not infeasible. However, phase 0 is always to bring free variables into the basis when emphasis on doing this with equality constraints.  Since the point is outside the feasible set, this point (basic solution of the tableau) is in Phase I. We need to make it feasible, so is the first point on the linear constraint that is inside the feasible set.  The last step is Phase II because the basic solution is feasible and the objective function is not optimal. To increase the objective takes the last point to , at which the tableau is optimal.     "
},
{
  "id": "sect-general-form-2",
  "level": "2",
  "url": "sect-general-form.html#sect-general-form-2",
  "type": "Objectives",
  "number": "7.1",
  "title": "",
  "body": "   Understand how to write a general LOP in standard form.    Adapt the simplex method to handle equality constraints and free variables.    Develop additional steps to the simplex method to handle equality constraints and free variables.    "
},
{
  "id": "prob-general-lop1",
  "level": "2",
  "url": "sect-general-form.html#prob-general-lop1",
  "type": "Problem",
  "number": "7.1.1",
  "title": "",
  "body": "      "
},
{
  "id": "fig-general-lop1",
  "level": "2",
  "url": "sect-general-form.html#fig-general-lop1",
  "type": "Figure",
  "number": "7.1.2",
  "title": "",
  "body": " A graph of the feasible set in . The inequality constraints are shaded in graph, however there is also an equality constraint, which is the line (in red).     "
},
{
  "id": "sect-gen-lop-std-form-12",
  "level": "2",
  "url": "sect-general-form.html#sect-gen-lop-std-form-12",
  "type": "Problem",
  "number": "7.1.3",
  "title": "",
  "body": "      "
},
{
  "id": "ex-general-lop2",
  "level": "2",
  "url": "sect-general-form.html#ex-general-lop2",
  "type": "Checkpoint",
  "number": "7.1.4",
  "title": "",
  "body": "  Find the solution to the following LOP using the steps in Phase 0 of the simplex method.           The first step is to write the problem in standard form, so the third constraint is written as and the objective function is written as then the simplex tableau can be     Since is a free variable, but is not in the basis, Phase 0 needs to be performed with     This is not feasible, so we are in Phase I. The following steps will create a feasible tableau:     And this is feasible now, however it is not optimal, so continue with Phase II. If we find -ratios with the 4th column, we get     Normally, we would choose the 4th row because it is the smallest nonnegative ratio, however, this corresponds to which is a free variable and cannot remove it from the basis. Therefore we will choose the 3rd row, corresponding to to leave the basis.     and this solution is now optimal with the basic solution     and recall that since is a free variable, it can take on any value, so the negative number is not a problem.   "
},
{
  "id": "sect-phase0-geometry-5",
  "level": "2",
  "url": "sect-general-form.html#sect-phase0-geometry-5",
  "type": "Checkpoint",
  "number": "7.1.6",
  "title": "",
  "body": "  Plot the feasible set from and on the plot show the location of the basic solution at each step.    From , the basic variables at each step are                          These are label on the figure below with , for the -th step.        Some commentary on the results is helpful. As mentioned throughout this text, the first step is always at the origin, which is shown in the figure as . The next step is to bring , the free variable into the basis and because there is a linear constraint, the next step is where the free variable or intersects the line . This may seem strange because the origin was in the feasible set and this first step is not infeasible. However, phase 0 is always to bring free variables into the basis when emphasis on doing this with equality constraints.  Since the point is outside the feasible set, this point (basic solution of the tableau) is in Phase I. We need to make it feasible, so is the first point on the linear constraint that is inside the feasible set.  The last step is Phase II because the basic solution is feasible and the objective function is not optimal. To increase the objective takes the last point to , at which the tableau is optimal.   "
},
{
  "id": "sect-phase-zero",
  "level": "1",
  "url": "sect-phase-zero.html",
  "type": "Section",
  "number": "7.2",
  "title": "Solving General Linear Optimization Problems",
  "body": " Solving General Linear Optimization Problems     Write a general Linear Optimization Problem (LOP) in general form.    Provide the Phase 0 method of the simplex method.     The previous section updated the simplex method to handle free variables as well as equality constraints     where are the constraints which are inequalities, are the constraints which are equalities. are restricted to be nonnegative which are those that are free variables.  The algorithm denoted Phase 0 was developed in to solve general LOPs. The following is a summary of the steps and how phase I and II need to be adapted to solve these problems.   Phase 0 method      As with all other LOPs, the problem needs to be written in standard form.    In building the simplex tableau, for equality statements, do not add a slack variable, but add the equation in the tableau. For free variables, note the column of that variable. This is often done by writing above the column in the tableau for the free variables.    If there are equality constraints in the tableau, pivot to bring a standard variable into the basis. Give preference to free variables and otherwise chose the lowest subscript.    If there are free variables still not in the basis, pivot them to be in the basis.    Repeat these steps 3 and 4 until all free variables and all equality constraints are in the basis, if possible. If this is not possible, then there is no solution.      Phase I revisited   Recall that the goal of Phase 1 is to make a set feasible. If a free variable has a negative value for its basic variable, that's okay. Phase I should not take a free variable out of the basis variables.  In short, phase I now only removes negative variables from restricted variables.   Phase II revisited   In phase 2, recall that we are trying to pivot to increase the value of . This typically means that if any number is negative in the objective row, that we enter that variable. After phase 0, all free variables should be in the basis and phase 1 should not remove them, so only restricted variables can have a negative number in the objective row.  Next, we typically chose the pivot row based on not making the tableau infeasible. However, recall that since free variables can take on any value, we pivot to increase the most and should never remove a free variable from the basis.    Solve the following Linear Optimization Problem using the adapted Simplex method       Note that there are no nonnegative constraints so both and are free. The first inequality is not in standard form, so we multiply through by first. Also, this is a minimum problem, so we write the maximum version as . The simplex tableau can be written as     Since both and are free, we will pivot to bring them into the basis. There's not a clear choice for what leaves the basis, so we will select and to leave.        Now that both free variables are in the basis, Stage 0 is finished.  Note that all of the variables are feasible, so there is no need to perform any Phase I steps. Next we move to Phase II and we perform the matrix pivot on row 3, column 3:  Recall that the -ratios,     and then typically the smallest nonnegative ratio is selected. This ensures that the solution stays feasible. This is a bit different with free variables, because they can take on negative numbers. However since is entering the basis and it is restricted to be nonnegative, we still select the 3rd variable above, and will leave the basis.     and still this isn't an optimal solution, so we'll do one more pivot. Again, the following -ratio is found     and if we do the standard smallest nonnegative ratio, we would choose the 2nd one. However, that would remove from the basis, so we don't select that or the first one, which would remove . The only result is . Therefore, we perform     This results in an optimal solution     The next exercise finds the feasible set for this problem as determines the individual basic variables. Again, this gives a feeling for how the simplex method works.    Graph the feasible set and label on the set the points with the step number.    A graph of the feasible set is     The first step brought into the basis and leaves, so this goes to that intersection, which is still the origin.  The second step brings into the basis and leaves. This goes to the vertex near . After this, both free variables are in the basis.  The third step is a phase II step and maximizes the objective taking the point to near .  The last step is again phase II and moves to the vertex at . Since both and are free then they can both take on negative values. Also note that since the original problem is a minimum problem and both coefficients of the objective are positive, the vertex in the lower left corner would be a minimum.      Solve the following LOP using the full simplex method described above.         This problem is in standard form, so we can write the tableau as     Note that both and are free variables, so we will pivot to bring them into the basis.        At this point the two free variables are in the basis, so we can move to Phase I. However, all of the variables are feasible (and would be anyway since they are free variables), so we do not need to perform any Phase I steps.  If we move to Phase II, it appears that the solution is optimal because there are no negative numbers in the objective row. However, examining the 2nd row, the corresponding equation to this is , which is not possible. This is because there is no solution to this problem.  Since this problem has only two variables, the constraints can be graphed.   A plot of the feasible set of .      The solution needs to be within the gray area (feasible side of the inequality constraint) as well as on all three lines. Since the three lines do not intersect at one point, there is no solution to this.      "
},
{
  "id": "sect-phase-zero-2",
  "level": "2",
  "url": "sect-phase-zero.html#sect-phase-zero-2",
  "type": "Objectives",
  "number": "7.2",
  "title": "",
  "body": "   Write a general Linear Optimization Problem (LOP) in general form.    Provide the Phase 0 method of the simplex method.    "
},
{
  "id": "sect-phase-zero-15",
  "level": "2",
  "url": "sect-phase-zero.html#sect-phase-zero-15",
  "type": "Problem",
  "number": "7.2.1",
  "title": "",
  "body": "  Solve the following Linear Optimization Problem using the adapted Simplex method      "
},
{
  "id": "sect-phase-zero-34",
  "level": "2",
  "url": "sect-phase-zero.html#sect-phase-zero-34",
  "type": "Checkpoint",
  "number": "7.2.2",
  "title": "",
  "body": "  Graph the feasible set and label on the set the points with the step number.    A graph of the feasible set is     The first step brought into the basis and leaves, so this goes to that intersection, which is still the origin.  The second step brings into the basis and leaves. This goes to the vertex near . After this, both free variables are in the basis.  The third step is a phase II step and maximizes the objective taking the point to near .  The last step is again phase II and moves to the vertex at . Since both and are free then they can both take on negative values. Also note that since the original problem is a minimum problem and both coefficients of the objective are positive, the vertex in the lower left corner would be a minimum.   "
},
{
  "id": "ex-general-lop-no-solution",
  "level": "2",
  "url": "sect-phase-zero.html#ex-general-lop-no-solution",
  "type": "Checkpoint",
  "number": "7.2.3",
  "title": "",
  "body": "  Solve the following LOP using the full simplex method described above.         This problem is in standard form, so we can write the tableau as     Note that both and are free variables, so we will pivot to bring them into the basis.        At this point the two free variables are in the basis, so we can move to Phase I. However, all of the variables are feasible (and would be anyway since they are free variables), so we do not need to perform any Phase I steps.  If we move to Phase II, it appears that the solution is optimal because there are no negative numbers in the objective row. However, examining the 2nd row, the corresponding equation to this is , which is not possible. This is because there is no solution to this problem.  Since this problem has only two variables, the constraints can be graphed.   A plot of the feasible set of .      The solution needs to be within the gray area (feasible side of the inequality constraint) as well as on all three lines. Since the three lines do not intersect at one point, there is no solution to this.     "
},
{
  "id": "sect-general-dual",
  "level": "1",
  "url": "sect-general-dual.html",
  "type": "Section",
  "number": "7.3",
  "title": "General Dual Problems",
  "body": " General Dual Problems  Because of the equality constraints and the free variables, dual problems take on a different form.  In , we made an argument to develop a bound on the objective function resulting a dual problem. In the case of general problems with equality constraints and free variables, we repeat these steps. Let's look at . First, if we multiply the three constraints by and respectively, then     The objective is written:     "
},
{
  "id": "sect-general-applied",
  "level": "1",
  "url": "sect-general-applied.html",
  "type": "Section",
  "number": "7.4",
  "title": "General Applied Problems",
  "body": " General Applied Problems       Traveling Salesperson  Sylvia has to travel to 5 towns in Massachusetts: Fitchburg, Boston, Lowell, Fall River and Worcester. The following weighted graph shows the distances between every pair of towns.          She wishes to travel in a manner to minimize the total distance traveled and not travel through any town more than once.  One method of solving this problem is by setting up an LOP. First, we defined all of the paths between two towns and assign it to a variable that will be 1 if she travels between the towns and 0 otherwise. In particular:     and each of these values will be 0 or 1. The objective function is sum of each variable times the distance between the two cities. This is to be minimized so     The constraints are that each town must be entered once and leave once. In terms of the variables, the sum of all variables into a town must equal 2. Thus there are the constraints:     Let's try solving this with the adapted simplex method from this chapter. A small difference that we will use is that we multiply the objective by 10 to get integer coefficients. This will keep all numbers in the tableau as integers. The simplex tableau for this problem is     and recall that there are no inequalities in this, so no slack variables. We now pivot to bring 4 variables into the basis the basis is empty currently.                 And now there are five variables in the basis and this finishes Stage 0. There are two infeasible variable ( ) and so we bring the first into the basis with the leftmost negative in the 1st row ( ) into the basis.        There are no infeasible variables, so Stage I is also complete and we move onto Stage II. There is a negative in the objective row, so Stage II is not complete. Forming -ratios for variable and taking the smallest nonnegative ratio is in the 3rd row so     And this is still not feasible so bring into the basis.     This is no optimal and the basic solution is     This corresponds to the path Fitchburg Lowell Boston Fall River Worcester.   We got a bit lucky with this problem in two ways. First, we didn't apply the binary constraint to the variables, they just happened to fall into either 0 or 1. Secondly, as we will see later, there is no guarantee that the result is a continuous loop. As these problems get larger, the optimal solution could be multiple loops. See below to handle problems like this.     Minimizing Piecewise Linear Functions  Let's consider minimizing , which has the graph:          This seems obvious looking at the graph (the minimum is 0 at ), however, we use this to explore more difficult problems. We are going to create a feasible set with the boundary as the function and then minimize the value in this set. More specifically,     and no constraints on so these are free variables.  We can write this in standard form as     and then as a simplex tableau as     Because there are free variables that are not in the basis, this is in Stage 0. The first two steps will bring these into the basis.        And now that both and are in the basis, Stage 0 is finished. All other variables are feasible, so Stage I is done, and there are no negatives in the objective row, so Stage II is done. The basic and optimal solution is     or the expected value of that we can see from the plot. The next example shows this same way to set up a problem in multiple dimensions.    Find the minimum of     Similar to the previous problem, we will set and and then this is the following LOP:     and and are free.  This in standard form is     The initial tableau is     where the columns are , where the last four are slack variables.  Bringing and into the basis:        Since the two free variables in the basis, we are done with State 0. Also, non-free variables are feasible, so we are done with Stage I and there are no negative in the objective row, so we are done with Stage II.  The optimal basic solution is     Returning back to the original problem, this is with .      Best-Fit Lines  A common desire is to fine a line that best fits through some data. If we have the points , then a plot of this is         where the line (in red) is possible best fit line.  A common way to find the line is to minimize the error between the line and the data in a least-squares sense, in which the sum of squares of differences between the data and the line or     is defined. The coefficients and are found by finding the minimum of the function .  An alternative way to do this is to minimize       Find the best-fit line through by setting up an LOP and solving it.    We will introduce new variables that will satisfies (NOT QUITE RIGHT)     then the LOP can be written as     The variables for this are . The first two are free and the last are restricted since each is either or its negative, so much be positive. There will be 8 slack variables as well.  If this is put in standard form (not shown) then the simplex tableau is     where the columns are (which will also be labelled ) and then the slack variables .  There are two steps of Stage 0 to get the first two columns into the basis, then to     and then stage I with the pivots recalling that are free variables so they don't leave the basis. and to get     Now this is ready for Phase II. To move through this, , and then , resulting in     And this is optimal. We can pull all of the variables, but only the first two, and are needed. Thus, the best fit line in the sense is         Solve the LOP in ??? using Julia.     "
},
{
  "id": "fig-tsp",
  "level": "2",
  "url": "sect-general-applied.html#fig-tsp",
  "type": "Figure",
  "number": "7.4.1",
  "title": "",
  "body": "       "
},
{
  "id": "sect-tsp-29",
  "level": "2",
  "url": "sect-general-applied.html#sect-tsp-29",
  "type": "Note",
  "number": "7.4.2",
  "title": "",
  "body": " We got a bit lucky with this problem in two ways. First, we didn't apply the binary constraint to the variables, they just happened to fall into either 0 or 1. Secondly, as we will see later, there is no guarantee that the result is a continuous loop. As these problems get larger, the optimal solution could be multiple loops. See below to handle problems like this.  "
},
{
  "id": "fig-min-piecewise-linear1",
  "level": "2",
  "url": "sect-general-applied.html#fig-min-piecewise-linear1",
  "type": "Figure",
  "number": "7.4.3",
  "title": "",
  "body": "       "
},
{
  "id": "sect-min-piecewise-linear-17",
  "level": "2",
  "url": "sect-general-applied.html#sect-min-piecewise-linear-17",
  "type": "Example",
  "number": "7.4.4",
  "title": "",
  "body": "  Find the minimum of     Similar to the previous problem, we will set and and then this is the following LOP:     and and are free.  This in standard form is     The initial tableau is     where the columns are , where the last four are slack variables.  Bringing and into the basis:        Since the two free variables in the basis, we are done with State 0. Also, non-free variables are feasible, so we are done with Stage I and there are no negative in the objective row, so we are done with Stage II.  The optimal basic solution is     Returning back to the original problem, this is with .   "
},
{
  "id": "fig-best-fit-line",
  "level": "2",
  "url": "sect-general-applied.html#fig-best-fit-line",
  "type": "Figure",
  "number": "7.4.5",
  "title": "",
  "body": "      "
},
{
  "id": "sect-best-fit-line-10",
  "level": "2",
  "url": "sect-general-applied.html#sect-best-fit-line-10",
  "type": "Checkpoint",
  "number": "7.4.6",
  "title": "",
  "body": "  Find the best-fit line through by setting up an LOP and solving it.    We will introduce new variables that will satisfies (NOT QUITE RIGHT)     then the LOP can be written as     The variables for this are . The first two are free and the last are restricted since each is either or its negative, so much be positive. There will be 8 slack variables as well.  If this is put in standard form (not shown) then the simplex tableau is     where the columns are (which will also be labelled ) and then the slack variables .  There are two steps of Stage 0 to get the first two columns into the basis, then to     and then stage I with the pivots recalling that are free variables so they don't leave the basis. and to get     Now this is ready for Phase II. To move through this, , and then , resulting in     And this is optimal. We can pull all of the variables, but only the first two, and are needed. Thus, the best fit line in the sense is      "
},
{
  "id": "sect-best-fit-line-11",
  "level": "2",
  "url": "sect-general-applied.html#sect-best-fit-line-11",
  "type": "Checkpoint",
  "number": "7.4.7",
  "title": "",
  "body": "  Solve the LOP in ??? using Julia.   "
},
{
  "id": "sect-lop-matrix",
  "level": "1",
  "url": "sect-lop-matrix.html",
  "type": "Section",
  "number": "8.1",
  "title": "Writing a LOP in Matrix Form",
  "body": " Writing a LOP in Matrix Form   Consider the following LOP.       This can be first written in standard form and then if the following are defined     Then can be written as       where the inequalities need to be considered as satisfying for each element.  Any problem can be written in this form. Additionally, the dual of the problem can be written     It is nice to be able to write a problem or it's dual in this form, however, this generally doesn't help us solve the problem.    The Matrix Simplex Method  We will see in this section how to set up the simplex method to solve an LOP not by using the simplex tableau but by updating the matrix and vectors and .  First, we define     Then introducing slack variables to the inequality results in .  If we define     Then can be written     where the objective is     Specifically, for , initially and and therefore     and we write     Next, we define to be the matrix that is the same size as and have the columns of or the identity matrix, corresponding to the basic variables and the matrix a square matrix with the parameters.  If and then     For the initial tableau, and   Now, the Primal LOP can be written:     Recall the dictionary form of an LOP problem from in which the equations are written with the basic variables on the left. We can write the above LOP in dictionary form by solving for or     and substituting this into the objective function:     Note that if the parameters are 0 or , then becomes     This is the basic solution for a given basis and the corresponding objective is becomes     In the following example, we will calculate the formulas or parts of formulas above and will be useful for performing the simplex method in the next section.    Using the LOP in , and letting , then find the following:           ,     ,          .       First, note that takes on the 1st and 3rd columns of and then the 3rd and 4th columns of . The first column of is the 2nd column of and then the 2nd and 3rd columns of are the first and second columns of or     Also, it is helpful to use software to find the inverse and matrix product. See to use Julia to do this.          Using the matrix above leads to       Again, use the matrix above,       First, note that     and then       To find first find     so          The matrices and vectors in are useful for solving LOPs using this matrix form. More details on using these will follow below. However, if you notice that each of these had fractions in the results and to keep things in integer form, we can introduce some other notation. First, let and then     will be a matrix of integers. Then multiplying by results in     and similarly can be written as       Using the basis and parameters in , then find the following:                ,     ,          .       For this we use the same and from                And then using the above                         Although the terms we found in came from the formulas above, they will also be used to perform the simplex method. We will walk through the steps of the simplex method using these matrices and vectors in the next section.    Comparison to the Tableau  How does this compare to the simplex tableau? Let's look at the tableau of and see how this compares to the matrix forms. Start with the initial tableau of     The basis in and is , so we need to perform pivots for this. We can do and to get this basis. Applying these pivots to the above tableau is     Hopefully, you can see a number of similarities. First, the value in each of the basis variables in 230, which is the value .  The matrix is the columns 4 through 7 of the tableau.  The vector is the right column of the tableau. Also, this is the value of basic solution with the factor of .  The matrix is the columns of the tableau corresponding to the parameters This part of the tableau is important in determining the next pivot in the simplex method as we will see in the next section.  The value is that of the objective function (lower right element).  The row vector is the coefficients of the parameters in the objective row. We will need this for the simplex method in the next section.   "
},
{
  "id": "prob-matrix-lop-ex",
  "level": "2",
  "url": "sect-lop-matrix.html#prob-matrix-lop-ex",
  "type": "Problem",
  "number": "8.1.1",
  "title": "",
  "body": "    "
},
{
  "id": "prob-matrix-lop",
  "level": "2",
  "url": "sect-lop-matrix.html#prob-matrix-lop",
  "type": "Problem",
  "number": "8.1.2",
  "title": "",
  "body": "    "
},
{
  "id": "ex-simplex-matrix",
  "level": "2",
  "url": "sect-lop-matrix.html#ex-simplex-matrix",
  "type": "Example",
  "number": "8.1.3",
  "title": "",
  "body": "  Using the LOP in , and letting , then find the following:           ,     ,          .       First, note that takes on the 1st and 3rd columns of and then the 3rd and 4th columns of . The first column of is the 2nd column of and then the 2nd and 3rd columns of are the first and second columns of or     Also, it is helpful to use software to find the inverse and matrix product. See to use Julia to do this.          Using the matrix above leads to       Again, use the matrix above,       First, note that     and then       To find first find     so         "
},
{
  "id": "ex-simplex-matrix-int",
  "level": "2",
  "url": "sect-lop-matrix.html#ex-simplex-matrix-int",
  "type": "Example",
  "number": "8.1.4",
  "title": "",
  "body": "  Using the basis and parameters in , then find the following:                ,     ,          .       For this we use the same and from                And then using the above                        "
},
{
  "id": "sect-lop-matrix-software",
  "level": "1",
  "url": "sect-lop-matrix-software.html",
  "type": "Section",
  "number": "8.2",
  "title": "Performing LOP Matrix Operations using Software",
  "body": " Performing LOP Matrix Operations using Software     Perform matrix operations in WebCAS.    Perform matrix operations (with rational numbers) in Julia.      This section covers how to effectively and efficiently perform the matrix operations presented in .    Perform the Matrix Operations to Solve LOP problems in WebCAS  WebCAS not only performs row operations on matrices, but also the standard matrix operations. First go to the the Matrix Calculator section of WebCAS. There are two sections of this web page:     (for accessibility)    On the right side, there is a place to enter matrices. This is the place to start to enter a matrix or vector with a name. The Matrix Expression textbook is how operations are performed.  This tool is very general, but we will show the operations from . First, click the Add a new Matrix button and you should see:     (for accessibility)    Next, let's enter the matrix in . We first enter the matrix with the basis .     (for accessibility)    where the name of the matrix goes in the left (smaller) textbox and the matrix is entered in the right side in the same manner as that in the Gaussian Eliminator tool. That is, row by row with no commas or other separating characters. Click Save Matrix as you will see it rendered like a matrix in the Matrix Area on the right side. (Note: you can edit the matrix or delete it with the boxes on the right side of it. )  Next, let's do an operation on B, specifically the inverse using inv(B) by entering this in the Matrix Expression textbook. Either click the Enter button or hit the return key. You will see the inverse as     (for accessibility)    Note a few things about this. First, the operation that was performed is shown. That is, . Next, the operation using fractions and finally, there is a [1] shown on the right side. We will be able to use this with other operations later.  Next, let's add another vector and matrix. Add and from . For the vector, it is a column vector, so each number should be in a separate row. Also, use the name Pi as that we can't put Greek letters in for matrix names. You should see:     (for accessibility)    Next, to continue with the calculations in , to compute , enter [1]*b , where [1] is the output on line 1. The output is the same as seen in . Note: the Matrix Operations tool does not perform implicit multiplication, so make sure you specifically enter * for all multiplications.  To compute , enter [1]*Pi . The result is that seen in .  To finish with the last two steps, first enter and . Use the names cbeta and cpi and make sure that each element goes on a separate line.  To calculate , first note that has already be computed and is in output [2] . We next need to compute , which is the transpose of . This is done with cbeta' and returns     and if you have the same steps, this output is now in row [4] .  Now, to compute , enter [4]*[2] and you should get     where the result is a 1 by 1 matrix, which should be interpreted as a scalar. You probably also notice that there are many unneeded parentheses in the output. It's a bit tricky to programmatically determine when a set of parentheses is needed.   Lastly, we also have the expression . Some of these already exist, but note that these are all matrices (or actually row vectors) and if we first find using [1]*Pi and this returns:     and it's output is [6] . Next we can find with [4]*[6] and the output is     The next step is to compute with cpi' which returns     in output [8] . Finally we can compute with [7]-[8]   and the output in line [9] is       Complete using WebCAS (Matrix Calculator). Note: det(A) will give you the determinant of the matrix A in WebCAS.      Using Julia to perform Matrix Operations in solving LOP problems.  In the previous section, we used WebCAS to perform the matrix operations from . Although it performed nicely to calculate matrixes with fractions instead of floating point, we needed to break down the steps in order to get it to perform well. Also, as we will see, the same steps are performed with a different basis each time and in WebCAS, the steps will need to be retyped in.  Alternatively, this section shows how to perform the steps in Julia, which allows some scripting and in the long term is easier to use with some setup.  If you haven't yet, review the basics of Julia that you will need in , especially , which discusses handling matrices in Julia.  To begin with, we will define S to be the simplex tableau except the objective row and right hand line. In short, this will be the original and slack variable coefficients. In the case of define   S = [-18 -5 10 1 0 0 0 -4 -20 -15 0 1 0 0 10 15 18 0 0 1 0 20 16 4 0 0 0 1]   Recall that and are defined by the basis and the parameter set. It will actually help quite a bit to define these as   β = [1,3,6,7] π = [2,4,5]   where you can create the beta and pi characters with \\beta or \\pi and then hit tab (in a julia environment). Once we have these, we can define B and Π in terms of the basis by   B = rationalize.(S[:,β]) Π = rationalize.(S[:,π])   where rationalize takes each integer and converts it to a rational number. This is helpful for creating an inverse that is rational and the . is for broadcasting. The elements inside the [] extracts all rows (the : ) as well as columns 1,3, 6 and 7. If both commands are in a single cell, only the last one will be echoed to the screen or    4×3 Matrix{Rational{Int64}}:  -5 1 0  -20 0 1  15 0 0  16 0 0    Lastly, we will also define to be   c = [40; 36; 72; 0; 0; 0; 0]   Then you can get in julia using c[β] and the result is    4-element Vector{Int64}:  40  72  0  0    Now that all of the parts have been defined, repeating is quite straightforward.     To find , use inv(B) and the result is    4×4 Matrix{Rational{Int64}}:  -3\/\/62 -1\/\/31 0 0  2\/\/155 -9\/\/155 0 0  39\/\/155 212\/\/155 1 0  142\/\/155 136\/\/155 0 1    and this is the same that we got using WebCAS. Note that a rational number in Julia has a \/\/ .    To get , enter inv(B)*b and the result is    4-element Vector{Rational{Int64}}:  5\/\/2  4  153  114    and this is the same as above as well as in the exercise.    To find enter inv(B)*Π and the result is    4×3 Matrix{Rational{Int64}}:  -25\/\/46 -3\/\/46 1\/\/23  34\/\/23 2\/\/115 -9\/\/115  -142\/\/23 39\/\/115 112\/\/115  482\/\/23 142\/\/115 -64\/\/115      To find , enter c[β]'*inv(B)*b and it returns 388\/\/1 , which is the rational (fraction) version of 388, which we found above.    Lastly, to find enter c[β]'*inv(B)*Π-c[π]' to get    1×3 adjoint(::Vector{Rational{Int64}}) with eltype Rational{Int64}:  1120\/\/23 -156\/\/115 -448\/\/115    which is a bit complicated (it's saying it is an adjoint--which is a general transpose). The important thing is that it is a row vector of length 3 and the same that we got above and in the exercise.       Use Julia to evaluate all of the expressions in and note that the determinant in Julia is det .     "
},
{
  "id": "sect-lop-matrix-software-2",
  "level": "2",
  "url": "sect-lop-matrix-software.html#sect-lop-matrix-software-2",
  "type": "Objectives",
  "number": "8.2",
  "title": "",
  "body": "   Perform matrix operations in WebCAS.    Perform matrix operations (with rational numbers) in Julia.    "
},
{
  "id": "fig-matrix-ops-01",
  "level": "2",
  "url": "sect-lop-matrix-software.html#fig-matrix-ops-01",
  "type": "Figure",
  "number": "8.2.1",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "fig-matrix-ops-02",
  "level": "2",
  "url": "sect-lop-matrix-software.html#fig-matrix-ops-02",
  "type": "Figure",
  "number": "8.2.2",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "fig-matrix-ops-03",
  "level": "2",
  "url": "sect-lop-matrix-software.html#fig-matrix-ops-03",
  "type": "Figure",
  "number": "8.2.3",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "fig-matrix-ops-04",
  "level": "2",
  "url": "sect-lop-matrix-software.html#fig-matrix-ops-04",
  "type": "Figure",
  "number": "8.2.4",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "fig-matrix-ops-05",
  "level": "2",
  "url": "sect-lop-matrix-software.html#fig-matrix-ops-05",
  "type": "Figure",
  "number": "8.2.5",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "sect-lop-matrix-webcas-33",
  "level": "2",
  "url": "sect-lop-matrix-software.html#sect-lop-matrix-webcas-33",
  "type": "Checkpoint",
  "number": "8.2.6",
  "title": "",
  "body": "  Complete using WebCAS (Matrix Calculator). Note: det(A) will give you the determinant of the matrix A in WebCAS.   "
},
{
  "id": "sect-lop-matrix-julia-19",
  "level": "2",
  "url": "sect-lop-matrix-software.html#sect-lop-matrix-julia-19",
  "type": "Checkpoint",
  "number": "8.2.7",
  "title": "",
  "body": "  Use Julia to evaluate all of the expressions in and note that the determinant in Julia is det .   "
},
{
  "id": "sect-matrix-simplex",
  "level": "1",
  "url": "sect-matrix-simplex.html",
  "type": "Section",
  "number": "8.3",
  "title": "Performing the Matrix Simplex Method",
  "body": " Performing the Matrix Simplex Method   We now adapt the simplex method to using the matrices from the previous section instead of a tableau.  Let's return to , which was written in matrix form in . We use all of the matrix notation from that section to adapt the simplex method to solve such LOPs.     Initially the basis for this problem is and , therefore the first step is to find for this basis which are the 4th throw 7th columns of the simplex tableau or just the identity matrix. Therefore and also and the basic solution is , which is just .     Also, note that the parameter columns (which are quite important in the simplex method) are in which in the first step, just which is     Since the left column (which is ) has negatives in this, we need to use phase I. In this case, we find the most negative in this vector, which occurs in the first row. Note that the first row corresponds to , so this is the leaving variable.  To find the entering variable, find the largest negative in the first row of . This occurs in the second row of , which is the second variable in , so . We thus to a pivot .    There the new basis is and . This means that     We can the calculate the determinant of to be (take the absolute value) and     And then calculate     This shows that the tableau is still infeasible and we continue with phase I. We need to find     The smallest (most negative) number in is in the last row, so the leaving variable is the corresponding leaving variable is the last basis variable or . The entering variable will be the largest negative in the 4th row of , which occurs in the 2nd column, so the entering variable is the second parameter or . We then perform a pivot .    The new basis will be and . Therefore the result is     The determinant of is 140, so this is and     and then     There are no negatives in this vector so phase I is complete and we move to phase II.    In phase II, using the simplex tableau, we need to examine the objective row. In the matrix formulation, we need the coefficient of the parameters in this row and this corresponds to and this is calculated for this basis as     and since there are negatives in this row, it is not optimal. This also shows that the entering variable is the leftmost negative (only in this case) is the 2nd one, corresponding to the 2nd parameter or . To find the leaving variable, we need to examine     and create -ratios using the 2nd column of      The smallest ratio is in the 4th row, which corresponds to the 4th basis element or , so this is the leaving vector. Therefore we need to perform the pivot     We are still in phase II and after the pivot , the basis is now with . The corresponding matrices are     The determinant of is , so and     and then since we are in phase II, examine:     which shows that this basic solution is not optimal. We use the leftmost negative, which is the first parameter and corresponds to , so this is he entering variable. To decide the leaving, we need to find the -ratios using:     and     and the -ratios are found by dividing elements in by the elements in the first column of to get     and the smallest nonnegative ratio is in the first row. This corresponds to the first basis element or , so we perform the pivot     The pivot results in the basis with . The corresponding matrices are     The determinant of is , so and     and since we are in phase II, we check:     and note that there are no negatives in this vector, so this solution is optimal. The basic solution to this is for the basic variables or     and in terms of the original variables, the optimal solution is     and the objective is found with          The Matrix Simplex Method  This is now the steps of the simplex method if one is using the matrix formulation.   "
},
{
  "id": "sect-uniqueness",
  "level": "1",
  "url": "sect-uniqueness.html",
  "type": "Section",
  "number": "9.1",
  "title": "Uniqueness of LOP Optimal Solutions",
  "body": " Uniqueness of LOP Optimal Solutions   Throughout this text, we have generally been interested in a solution to a problem. However, there are times if we would like the solution to be unique or if it isn't unique, if we can find other solutions.  Let's return to one of the first examples we saw in this text in . The simplex method was developed and used to solve this in and the final simplex tableau was listed in , but reproduced here:   The key to knowing that this is an optimal solution comes from the objective row: and if either or is brought into the basis, then the value of the variables increases and the objective is decreased. From this we can conclude that the solution is optimal and unique.    Linear Optimization Problems with non-unique solutions  Consider a seemingly minor change to :         If we solve this using the simplex method, the final tableau is   which has the solution: and   This is an optimal solution because writing the objective as shows that increasing would decrease the objective.  But wait. Looking at the objective, it does not depend on , the other parameter. So if we bring that into the basis, and removing for the same reason we do in phase II, we get the following tableau:   with the basic solution: and the objective is still .  So it seems like we have two solutions that are optimal. Are there just two solutions? Let's take a look at the feasible set again.   A plot of a feasible set of together with level sets of the objective function .      There are 5 level sets plotted above and the middle one is when , the optimal value found above. In this case, the value of the objective along the upper right edge of the feasible set is always the same. That is the objective value is the same for all values on the line segment between and .    Find other points along the line segment between and and show that the objective value is equal along there.    Other points on this edge include , and . The value of the objective for each of these is 80.      Determining Uniqueness using Julia  If we solve using Julia with the following code:   m = Model(HiGHS.Optimizer) @variable(m, x₁ ≥ 0) @variable(m, x₂ ≥ 0) @objective(m, Max, 2x₁+4x₂) @constraint(m, c1, 4x₁+3x₂ ≤ 120) @constraint(m, c2, x₁+2x₂ ≤ 40) @constraint(m, c3, x₂ ≤ 16) print(m)   and then problem is correctly output. Then to solve it with:   set_silent(m) optimize!(m) is_solved_and_feasible(m)   which returns true , indicating that the problem was solved and is feasible. To get the optimal values of the variables and objective, we use:   value(x₁), value(x₂), objective_value(m)   resulting in .  To determine if the solution is unique, let's look at the dual_solution or    Uniqueness in ILOPs      Solutions of the 4-queens Problem  In , the -queens problem was formulated as an integer linear optimization problem. We examine the uniqueness of its solutions here.  When , running the code in results in the solution  4×4 Matrix{Int64}:  0 0 1 0  1 0 0 0  0 0 0 1  0 1 0 0    As we saw above, using the dual to determine how to find other solutions is not possible here, since all dual variables are zero. Instead, we will use a method of using a new objective that is a small random perturbation of the original objective.  If we replace the objective in the code in with  @objective(m2, Max, sum([rand(0.99:0.001:1.01)*x[i,j] for i=1:n, j=1:n]))  and rerun the model. It may result in the same solution, but it may result in a different solution, such as  4×4 Matrix{Int64}:  0 1 0 0  0 0 0 1  1 0 0 0  0 0 1 0     "
},
{
  "id": "prob-lop1-revisit",
  "level": "2",
  "url": "sect-uniqueness.html#prob-lop1-revisit",
  "type": "Problem",
  "number": "9.1.1",
  "title": "",
  "body": "      "
},
{
  "id": "fig-lop-1-revisit",
  "level": "2",
  "url": "sect-uniqueness.html#fig-lop-1-revisit",
  "type": "Figure",
  "number": "9.1.2",
  "title": "",
  "body": " A plot of a feasible set of together with level sets of the objective function .     "
},
{
  "id": "sect-uniqueness-3-12",
  "level": "2",
  "url": "sect-uniqueness.html#sect-uniqueness-3-12",
  "type": "Checkpoint",
  "number": "9.1.3",
  "title": "",
  "body": "  Find other points along the line segment between and and show that the objective value is equal along there.    Other points on this edge include , and . The value of the objective for each of these is 80.   "
},
{
  "id": "sect-getting-started-julia",
  "level": "1",
  "url": "sect-getting-started-julia.html",
  "type": "Section",
  "number": "A.1",
  "title": "Getting Started with Julia",
  "body": " Getting Started with Julia   This appendix shows how to get started with using Julia. The recommended way is first to install julia as described in . Then follow the steps in to install Visual Studio Code, an open-source text editor.    Downloading and Installing Julia  At the top of the main Julia website , click the green Download button, taking you to the downloads page. At the top of this page, you will get a single line to copy paste into Terminal (MacOS or Linux) or PowerShell in Windows. This will install a nice tool called juliaup which is a program that can update julia. Note that all of the commands were run on a Mac (with a M1 chip) in fall 2025. If you run these commands on a different platform at a different time, your results may vary a bit, including the versions that are out at the time.  Running the MacOS version results in   Installing Juliaup   (for accessibility)    continuing with the default installation, hit yes and hopefully you see:    Now installing Juliaup  Checking for new Julia versions  Installing Julia 1.12.0+0.aarch64.apple.darwin14  Checking standard library  notarization.............................................................done.  Configured the default Julia version to be 'release'.  Julia was successfully installed on your system.   Depending on which shell you are using, run one of the following  commands to reload the PATH environment variable:   . \/Users\/XXXXX\/.zshrc    although the default version might be different. There may be instructions to ensure that your system path is set up correctly. Follow the details at the end of the installation process before continuing. Each environment may be a bit different and the install script should detect it correctly and give you the right answers.  You can open the julia REPL (explain in detail below) by typing julia on the command line of Terminal or PowerShell. You should see something like the following.   Julia running in a terminal window   Julia running in a terminal window    Try 2+2 and hit ENTER. You should see 4 and you're off and running. Although this is way to run julia, it generally isn't the way most people use it and the next section will show this. Also, the juliaup tool is a powerful way of managing more than one julia version or upgrading your current one. See for more information.    Installing the IJulia package  Managing packages will be discussed in depth in , but one is needed before we do the next step. Open the REPL by typing julia in a Terminal (on the Mac) or PowerShell (on a window machine). Enter the following two lines:     using Pkg  Pkg.add(\"IJulia\")    This package allows an interactive (that's the \"I\") julia session to be established. If there were no errors, you can exit out of Julia at this point with CTRL-D.    Installing Visual Studio Code  A nice environment to run Julia in an interactive manner is Visual Studio Code, often shortened to VScode. If you haven't installed the IJulia package described in the section above, that should be done before installing VScode.  Visual Studio Code is an open-source text editor\/integrated development environment (IDE) that has capability of handling many different languages. The download and install is quite simple in that you should visit the VScode website , click the Download button and install the standard way for your platform. Opening the app, you should see something that looks like     (for accessibility)    and it wouldn't hurt to go through the Learn the Fundamentals tutorial off the welcome page.  Since VSCode works with files on your local computer, it is fundamental to have a folder that VScode works from. You should have or create a folder that is a project. If you don't have one currently, use the Finder (MacOS) or Explorer (Windows) to create one inside your Documents folder called My Project . Next, in VScode, go to File , Add Folder to Workspace... and navigate to the folder you just made. You will be asked if you trust this folder.  Although you can use VScode to access the REPL or write files written in Julia, it's most powerful and flexible by running a notebook file. To do this there are two ways to start a file:     Open a new document ( File , then New File... ). Then save it somewhere ending with .ipynb for example test.ipynb . You should see a file that looks like   A test.ipynb file.     Another way to start a file is to click on the top left sidebar button that looks like two file icons. Create a new file inside the project by selecting the directory that you want it to go in. (If nothing is selected it will go in the top-level). Hover over the name of the project and click the icon that looks like a file with a +. It will make a new file which you should name like test.ipynb .     Next, in the upper right corner, you should see \"Select Kernel\". In this case, select the Julia 1.12 kernel if you installed that. If not, select one that was installed.  In the cell, enter 2+2 or some simple calculation. Click the triangle (play button) or hit SHIFT-ENTER and this will evaluate the cell. You should see the following:     (for accessibility)      Installing a VScode Extension  VScode takes on other functionality with extensions. To install a new extension click the four boxes (with the upper right one askew) and there is a box at the top for Search Extensions . Enter julia here as shown:     (for accessibility)    Clicking on that opens an informational panel in VScode and toward the top, click Install and you will then have some additional support for Julia.  Repeat this for Jupyter which will also VScode to run Jupyter notebooks, which is how we are going to interact with Julia most of the time.    Running Julia code inside VScode  When you create a new jupyter notebook (those with a .ipynb suffix), you are making a julia interactive notebook. In short, this file format mixes text and code together and is quite easy to use and share with others.  If you have the notebook file that you made above, we'll keep working on that or you can make a new file (make sure it's suffix is .ipynb ).  In an empty cell enter a=3 , hit SHIFT-ENTER and then in a blank cell, enter b=4 and then SHIFT-ENTER. In yet another blank cell, enter a+b and you should see 7 . Visually, this should look (this is in dark mode) like:     (for accessibility)    A few things to note about a julia notebook in VScode:   Each cell can have either a single or multiple lines of code.    The output from the cell is visually below the cell.    If there are multiple lines of code in a single cell, only the last command is echoed out.    You can run (or rerun a cell) with either the triangle play button or if you are inside the cell or it is selected SHIFT-ENTER on the keyboard.    Notice that each cell has a number in [ ]. This is the order that the cells were evaluated and can help with troubleshooting. The green check indicates that the cell has been run successfully.    You can evaluate cells in different order and go back and rerun cells. Try switching the top cell to a=9 , re-evaluate it, then re-evaluate the bottom cell and the output should be 13.     There are also many things that can be done with the notebook.     To create a new cell, you can hover the mouse above and below cells and get a few buttons pop up.   (for accessibility)      The + Code button adds a new cell that has code style, where the code language corresponds to the current kernel, which we selected when we first opened the file.    The + Markdown will make a Markdown cell. This is very useful for entering text, mathematics or other code that you don't want to run. This will be explain below.    The Generate button will open a AI chat window to ask a question (generally to Co-pilot).       If you highlight a cell (note: don't click inside the cell, but on the outside), you'll see the left side highlighted in blue:   (for accessibility)   At this point, there are options on the upper right to shift. These are:     Triangle with up arrow: run all cells above (but not including) this cell    Triangle with down arrow: run all cells below (and including) this cell.    triple dots: lots of options.    trash can: delete this cell.       Once highlighted a cell can be dragged up and down as well.    There are a number of keyboard shortcuts that can be done on a highlighted cell. This page has quite a few helpful ones. The page discusses jupyter notebook and jupyter lab (which is independent of VScode), but should work the same way.       Using the Julia REPL   Although once you get everything set up, performing some actual work (mathematics) is easier to do in a jupyter notebook, there are times that the REPL can be helpful. You can either open it up in Terminal (MacOS) or PowerShell (Windows), or directly in VScode.    Opening a Julia REPL in VScode  The Julia REPL is where you enter single julia statements. A REPL is short for Read-Eval-Print-Loop and is often a interpretative shell where you can enter commands in some language. To get started, click on the REPL in VScode, either go to Terminal , new Terminal or CTRL-` or CMD-J . This starts up julia and you should see:   REPL inside of VScode   REPL inside of VScode    Notice that it's ready for you to enter something with the julia> prompt.  We will enter a few commands to get started. All julia commands throughout the book will be written in a monospace font and it is a good idea to type along at the same time.  Enter a=2 at one prompt and b=3 at another prompt. You will see the response of 2 and 3 as well. Now enter a+b in a prompt and you should see the result 5.      Opening a REPL in Terminal or PowerShell  Alternatively, if you just want julia running and don't need the full VScode environment, use Terminal (on MacOS) or PowerShell (on windows). Generally search for these programs to open them or find the icon.  Once Terminal or PowerShell is open, type julia and this should look the same as above. Try the same commands as in the previous section.       The kernel   With the discussion about running Julia in this chapter, there are two main ways that we have discussed passing commands to Julia: using the REPL and using a jupyter notebook in VScode.  In many ways, julia is a program like any other that you run on your computer, however because of the nature of it parsing statements and then giving output, you have to think about it a bit differently. When you start julia, we often will say that you are starting the kernel, which is a basic state which you can feed variables and statements to julia and get output. In both the REPL and a jupyter notebook, there are statements sent to a program (the kernel) and there is a response.  The REPL is actually a simple interface to the kernel in which the commands and output appear on consecutive lines of the window. In contrast, the jupyter notebook separates the input into cells and the output below each cell. As we well see, the output can also contain plots and scrollable tables in a jupyter notebook.  The kernel stores variables, functions and modules in memory and accessing the variables with commands will, in short, answer the questions you're interested in solving. The kernel doesn't have a way of removing variables, functions or modules, whereas often we will need to do so. The best way is to restart the kernel, which basically means to shut down julia and restart. It depends on how this you run julia.    Restarting the Kernel in the julia REPL  This is probably the simplest. If you opened julia by launching the app by double-clicking an icon, just close the window and you stop the program. Note: you lose everything that you have done, which is another reason why I don't use this often. Then restart by reopening julia.  If you started julia from a terminal or PowerShell, quit julia using CTRL-D. Then restart julia with the command julia .    Restarting the Kernel in VScode  To restart the kernel in VScode click the Restart button at the top of the document. Unfortunately there is not indication that anything happens, but reevaluating a cell should indicate that it has been restarted. Note that the cells are numbers and should restart at 1.     More juliaup features   We used the problem juliaup install julia on a machine. Short for julia update , it is a script that helps you install and update julia. We can check what version of julia is running with juliaup status and after the install as above, we get: Recall that this section of the text was updated in Fall of 2025. If you are reading this at a later date, your install version may differ.     Default Channel Version Update  -----------------------------------------------------------  * release 1.12.0+0.aarch64.apple.darwin14    This shows all of the channels\/versions that are installed and the * shows that the release channel (official current version). As is common with software that manages versions, there are different channels available for julia. We saw above that by default we installed the release channel. This one is that julia developers feel is the current release.  There are a few other channels that can be installed:     beta  This channel is the version of julia that is almost ready to be released. It is often used for developers to test their packages or other users to test new features of a version.    lts  For users that need a very stable version of julia, the lts or long-term support channel is useful. This version will often be quite stable and only get bugfixes over it's lifetime.    nightly  For users that want the bleeding edge, then the nightly channel will provide a version of julia with all new code checked in the previous day.    1.x or 1.x.x  You can also grab a particular version, say 1.11 or 1.10.7 of julia this way.       Adding another Channel  Let's add one more channel to see how things work. Perhaps we feel that 1.12 is a little buggy and we want to install 1.11. Then we can do:    juliaup add 1.11    and you should see that 1.11 is being downloaded. Once finished, checking the status with juliaup status results in    Default Channel Version Update  ---------------------------------------------------------------  1.11 1.11.7+0.aarch64.apple.darwin14  * release 1.12.0+0.aarch64.apple.darwin14    and this shows that there is now a 1.11 channel and the release channel is still default. Note that there is no update. If there was, you would see what version was available. There are many other versions and channels available. If you want to include the beta channel to see what's coming out next. If you enter juliaup add beta and check the status then    Default Channel Version Update  ---------------------------------------------------------------  1.11 1.11.7+0.aarch64.apple.darwin14  beta 1.12.0+0.aarch64.apple.darwin14  * release 1.12.0+0.aarch64.apple.darwin14    And noticed that both beta and release are both using the same version this is common.    Install the lts channel of julia. What version is current for lts?      Updating Channels  If you enter juliaup status and get something like:    Default Channel Version Update  --------------------------------------------------------------------------------------------------------  1.11 1.11.7+0.aarch64.apple.darwin14  beta 1.12.0+0.aarch64.apple.darwin14 Update to 1.12.1+0.aarch64.apple.darwin14 available  * release 1.12.0+0.aarch64.apple.darwin14 Update to 1.12.1+0.aarch64.apple.darwin14 available    Where notice that there is something in the update column then that channel can be updated. If this is the case, then juliaup update will update any channel to the current version in that channel. The output will download and do some checking. Here's some possible output:    Checking for new Julia versions  Updating channel release  Installing Julia 1.12.1+0.aarch64.apple.darwin14  Checking standard library notarization.................................................  Precompiling packages ╺━━━━━━━━━━  Precompiling SuiteSparse finished.  1 dependency successfully precompiled in 2 seconds  ............done.  Updating channel beta  Removed Julia 1.12.0+0.aarch64.apple.darwin14    This took about 1 minute to do on a fast internet connection. If you enter juliaup status the result is now:    Default Channel Version Update  -----------------------------------------------------------  1.11 1.11.7+0.aarch64.apple.darwin14  beta 1.12.1+0.aarch64.apple.darwin14  * release 1.12.1+0.aarch64.apple.darwin14    And notice in this example, that both the beta and release channels are now at version 1.12.1.    Running a particular version of Julia  If we run julia, as shown above, then we should get the 1.12 version. Remember to use CTRL-D to get out of it. If instead, we want to switch to the 1.11 version, then juliaup default 1.11 . After doing this, entering julia should show:   Julia running in a terminal window   Julia running in a terminal window    There is an alternative to running a julia REPL without switching the default version in juliaup and that is to pass the version to julia.    julia +1.11    will give a REPL running 1.11 as well. The feature of running more than one julia version is perhaps most helpful for developers of packages so they can be able to test their code in different versions of julia. However, I sometimes am interested in new features and jump on beta versions to play with these features.   There are other features of juliaup. Entering juliaup --help gives quite a list of the options.    "
},
{
  "id": "fig-juliaup-install",
  "level": "2",
  "url": "sect-getting-started-julia.html#fig-juliaup-install",
  "type": "Figure",
  "number": "A.1.1",
  "title": "",
  "body": " Installing Juliaup   (for accessibility)   "
},
{
  "id": "fig-repl",
  "level": "2",
  "url": "sect-getting-started-julia.html#fig-repl",
  "type": "Figure",
  "number": "A.1.2",
  "title": "",
  "body": " Julia running in a terminal window   Julia running in a terminal window   "
},
{
  "id": "fig-vscode",
  "level": "2",
  "url": "sect-getting-started-julia.html#fig-vscode",
  "type": "Figure",
  "number": "A.1.3",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "fig-vscode-simple",
  "level": "2",
  "url": "sect-getting-started-julia.html#fig-vscode-simple",
  "type": "Figure",
  "number": "A.1.4",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "fig-vscode-extensions",
  "level": "2",
  "url": "sect-getting-started-julia.html#fig-vscode-extensions",
  "type": "Figure",
  "number": "A.1.5",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "fig-vscode-first-steps",
  "level": "2",
  "url": "sect-getting-started-julia.html#fig-vscode-first-steps",
  "type": "Figure",
  "number": "A.1.6",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "fig-repl-startup",
  "level": "2",
  "url": "sect-getting-started-julia.html#fig-repl-startup",
  "type": "Figure",
  "number": "A.1.7",
  "title": "",
  "body": " REPL inside of VScode   REPL inside of VScode   "
},
{
  "id": "subsect-juliaup-3-9",
  "level": "2",
  "url": "sect-getting-started-julia.html#subsect-juliaup-3-9",
  "type": "Checkpoint",
  "number": "A.1.8",
  "title": "",
  "body": "  Install the lts channel of julia. What version is current for lts?   "
},
{
  "id": "fig-repl2",
  "level": "2",
  "url": "sect-getting-started-julia.html#fig-repl2",
  "type": "Figure",
  "number": "A.1.9",
  "title": "",
  "body": " Julia running in a terminal window   Julia running in a terminal window   "
},
{
  "id": "sect-julia-packages",
  "level": "1",
  "url": "sect-julia-packages.html",
  "type": "Section",
  "number": "A.2",
  "title": "Managing Packages in Julia",
  "body": " Managing Packages in Julia   As with many software packages, additional functionality is available in other libraries or packages. If you take a look at https:\/\/juliapackages.com you can search through what is available. For example, relevant to this course is JuMP , which is useful for solving linear optimization problems (and others). Clicking on any of the package names will give additional information about the package including documentation (hopefully).  If you don't have a package installed and try to use it, like:    using Primes    you will get an error that it isn't installed unless you actually installed it previously. If you are in the REPL, then it may ask you to install the package. Hit y . (Note: this is a 1.12 version feature and does not currently work as a jupyter notebook that you have in vscode).  If you are in a jupyter notebook, entering the following two lines in a cell and evaluating (running) the cell, will also work.    using Pkg  Pkg.add(\"Primes\")    and after fetching the package, rerunning    using Primes    should no longer give an error. Then, for example, try    isprime(17)    which returns true because 17 is a prime number. The function isprime is actually nondeterministic function that determines if a number is true and you can find out more information at the Primes package documentation. This demonstrates 4 commands including isprime and factor which returns all prime factors (and the order).   A few other packages that will be helpful in this course are:   IJulia  This provides the browser interface to Julia. You should already have this installed.    JuMP  This package is an interface for finding extrema of functions with constraints.    HiGHS  This provides functionality for solving linear problems with JuMP.    CairoMakie and Makie  These are plotting packages for Julia.       Managing Packages in Julia  Although we can use the Pkg package to handle packages, this section will use the terminal REPL to handle any non-standard packages. Additional documentation on this is given in https:\/\/docs.julialang.org\/en\/latest\/stdlib\/Pkg\/ First, open up a terminal version of julia (either in the Terminal, PowerShell or vscode). For this, it is assumed that you have version 1.12 installed and are using it for the default version. The rest of this should work identically with other versions. See for help in this. You will get:    _  _ _ _(_)_ | Documentation: https:\/\/docs.julialang.org  (_) | (_) (_) |  _ _ _| |_ __ _ | Type \"?\" for help, \"]?\" for Pkg help.  | | | | | | |\/ _` | |  | | |_| | | | (_| | | Version 1.12.0 (2025-10-07)  _\/ |\\__'_|_|_|\\__'_| | Official https:\/\/julialang.org\/ release  |__\/ |    or similar and then    julia>    which means we're ready to handle julia commands. If we type ] , then the prompt turns into:    (v1.12) pkg>    where the 1.12 will be the version of julia that you are running. There are a number of commands that we will cover here:     add    remove (rm)    develop (dev)    status (st)    update (up)    test    build    precompile     and the commands in parentheses are the shortcut.    Adding a package  In the package command line, type add  package name to add the package. For example, to add the JuMP package:    add JuMP    and it is not installed, you will get something like:    Updating registry at `~\/.julia\/registries\/General.toml`  Resolving package versions...  Updating `~\/.julia\/environments\/v1.11\/Project.toml`  [4076af6c] + JuMP v1.29.1  Updating `~\/.julia\/environments\/v1.11\/Manifest.toml`  [6e4b80f9] + BenchmarkTools v1.6.2  [523fee87] + CodecBzip2 v0.8.5  [944b1d66] + CodecZlib v0.7.8  [bbf7d656] + CommonSubexpressions v0.3.1  [34da2185] + Compat v4.18.1  [864edb3b] + DataStructures v0.19.1  [163ba53b] + DiffResults v1.1.0  [b552c78f] + DiffRules v1.15.1  [ffbed154] + DocStringExtensions v0.9.5  [f6369f11] + ForwardDiff v1.2.2  [92d709cd] + IrrationalConstants v0.2.6  [0f8b85d8] + JSON3 v1.14.3  [4076af6c] + JuMP v1.29.1  [2ab3a3ac] + LogExpFunctions v0.3.29  [1914dd2f] + MacroTools v0.5.16  [b8f27783] + MathOptInterface v1.45.0  [d8a4904e] + MutableArithmetics v1.6.6  [77ba4419] + NaNMath v1.1.3  [bac558e1] + OrderedCollections v1.8.1  [276daf66] + SpecialFunctions v2.6.1  [1e83bf80] + StaticArraysCore v1.4.3  [10745b16] + Statistics v1.11.1  [856f2bd8] + StructTypes v1.11.0  [3bb67fe8] + TranscodingStreams v0.11.3  [6e34b625] + Bzip2_jll v1.0.9+0  [efe28fd5] + OpenSpecFun_jll v0.5.6+0  [37e2e46d] + LinearAlgebra v1.11.0  [9abbd945] + Profile v1.11.0  [9e88b42a] + Serialization v1.11.0  [2f01184e] + SparseArrays v1.11.0  [8dfed614] + Test v1.11.0  [e66e0078] + CompilerSupportLibraries_jll v1.1.1+0  [4536629a] + OpenBLAS_jll v0.3.27+1  [05823500] + OpenLibm_jll v0.8.5+0  [bea87d4a] + SuiteSparse_jll v7.7.0+0  [8e850b90] + libblastrampoline_jll v5.11.0+0  Precompiling project...  28 dependencies successfully precompiled in 46 seconds. 46 already precompiled.    A few things to note:     This is a long list of additional packages that JuMP needs to run and the version that JuMP uses for this version. This is long because JuMP is a pretty complicated package. Note that when installing the Primes package that we did above, there was only one other package needed to be installed with Primes .    You results will vary depending on version numbers available and what subpackages (like LinearAlgebra or ForwardDiff ) are needed for the current version of the package you want to load.    The line after the 2nd Updating line is the package (and version) that you are installing.    All of the lines after the 3rd Updating line is all of the packages that this depends on.    The + sign means that the package is being added.     If you want to add multiple packages at the same time, say packages A, B and C, type add A B C . You can also add particular versions of a package (often for testing or to avoid a bug). For example, if you want version 0.3.0 of ForwardDiff type:   add ForwardDiff@0.3.0   You will then get info on the dependencies on that version.    Package Status  The status command (or st ) will just list all of the main packages installed. For example,    (@v1.12) pkg> st  Status `~\/.julia\/environments\/v1.12\/Project.toml`  [87dc4568] HiGHS v1.19.3  [7073ff75] IJulia v1.31.0  [4076af6c] JuMP v1.29.1  [b8f27783] MathOptInterface v1.45.0  [27ebfcd6] Primes v0.5.7  [37e2e46d] LinearAlgebra v1.12.0    and note that these are just the packages added by the add command, not all of the dependencies. If you want all of the dependencies as well, type st --manifest and I get a huge list of packages.  If you run st then you may also get information that some packages have updates. If this is true, you can run the update command as shown next.    Removing a Package  You can remove a package by typing remove or rm then the package name. If I want to remove the ForwardDiff package, then    remove ForwardDiff    we get the following:    Updating `~\/.julia\/environments\/v1.0\/Project.toml`  [f6369f11] - ForwardDiff v0.3.0  Updating `~\/.julia\/environments\/v1.0\/Manifest.toml`  [49dc2e85] - Calculus v0.4.1  [c5cfe0b6] - DiffBase v0.2.0  [f6369f11] - ForwardDiff v0.3.0  [77ba4419] - NaNMath v0.3.2    Note:     The rm command removes the package from the list of available packages, but doesn't remove them from your harddrive.    If you want to see everything installed, navigate to the \/.julia\/packages directory, which is where they are stored. I have gone into this directory to delete package when troubleshooting.       Updating packages  If you type update or up you will update all of the installed packages (and dependencies). For example:    Updating `~\/.julia\/environments\/v1.0\/Project.toml`  [7073ff75] ↑ IJulia v1.11.1 ⇒ v1.12.0  Updating `~\/.julia\/environments\/v1.0\/Manifest.toml`  [7073ff75] ↑ IJulia v1.11.1 ⇒ v1.12.0  [b85f4697] ↑ SoftGlobalScope v1.0.5 ⇒ v1.0.7  [5e66a065] ↑ TableShowUtils v0.1.1 ⇒ v0.2.0    and all updates will be with an ↑. If you only want to update a single package, type the name after update .    Building Packages  Generally a package is built after it is installed. Building a package might include running code (or unpacking files) after it is installed. Sometimes if things get wonky, rebuilding is a good thing to do.    build    or if you only want say IJulia built,   build IJulia     Precompiling packages  When a package is used, often it requests to be compiled. For example, when using Primes , then following is shown:    [ Info: Precompiling Primes [27ebfcd6-29c5-5fa9-bf4b-fb8fc14df3ae]    and basically some code is compiled beforehand, generally to speed up code. You can precompile all code with    precompile    and it may take a while, but you won't have to wait, when you load the package with the using command. This is generally not needed anymore and is done automatically.    Testing a Packages  To test a package, say the ForwardDiff package, then    test ForwardDiff    It list all of the dependencies first, and then runs a number of tests (and we will show how to write tests soon) and timing information. After a while, it finishes successfully.   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
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
