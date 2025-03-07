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
