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
  "body": " Slack Variables and Dictionaries   In , we examined feasible sets using geometry. As we saw in that section, solutions occur on the boundary of the feasible set,    Slack Variables  Let’s return to the LOP found at the beginning of the section, that is maximize  subject to     Another way to look at this problem is to introduce slack variables to the first three inequalities that will convert the inequality to an equation. If we introduce and in the following way:     and and must be nonnegative in order for the above inequalities to remain true. Solving these three equations for and , we can write the LOP as     This is called the dictionary form of the LOP. Note that the variables on the left of the equals signs are only and . These are called the nonbasic variables or parameters of the problem. These are the original variables. The four variables on the left side are are called the basic variables and the set of these are called the basis of the problem. These are the objective and slack variables.  Note also, that when and are 0, these are the 5 lines that define the feasible set.  The basic variables and nonbasic are often distinguished from one another using the variables and respectively. For example, in the dictionary above, and .  A plot of the feasible set listed in the dictionary form in is         "
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
