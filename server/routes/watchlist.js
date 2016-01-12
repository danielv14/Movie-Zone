var express = require('express'),
    app = express(),
    request = require('request'),
    r = require('rethinkdb'),
    connection = null;


module.exports = function(app) {

  // Declare router
  var router = express.Router();

  // delcare prefix url for api
  app.use('/watchlist', router);

  r.connect({host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
  })


  // Routes
  router.get('/', function (req, res) {

   res.json({
      message: 'Welcome to /watchlist! Hopefully this will be of use someday with rethinkDB...',
      });

  });

  router.get('/test', function (req, res) {

    r.db('moviezone').tableCreate('authors').run(connection, function(err, result) {
      if (err) throw err;
      console.log(JSON.stringify(result, null, 2));
    })

  });

  // Woring router for inserting into table
  // :title has to be in this format: The+title+of+object with no spaces
  router.get('/insert/:title/:type/:imdb', function (req, res) {

    var theTitle = req.params.title;
    var theType = req.params.type;
    var imdbID = req.params.imdb;
    // Sanitate the incomming title
    theTitle = theTitle.replace(/\+/g, " "); // replace + with space
    theTitle = theTitle.replace(/:/g, "asdasd"); // temporary replace : with asdasd
    theTitle = theTitle.replace(/asdasd/g, ":"); // replace asdasd with : again. Doing this because : is treaded as a param in express/node
    console.log(theTitle);

    r.db('moviezone').table('watchlist').insert([
      {title: theTitle,
      type: theType,
      imdb: imdbID}
    ]).run(connection, function(err, result) {
      if (err) throw err;
      console.log(JSON.stringify(result, null, 2));
    })
  })




}
