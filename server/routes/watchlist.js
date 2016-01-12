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
      message: 'Welcome to /watchlist!',
      usage: {
        '/insert/:title/:type/:imdb':     'insert into db',
        '/clear':                         'clear the db',
        'clear/:id':                      'clear by ID created by rethinkdb',
        '/find/all':                      'find all content in db',
        '/find/movie':                    'find only movies',
        '/find/series':                   'find only series'

      }
      });

  });

  // Woring router for inserting into table
  // :title has to be in this format: The+title+of+object with no spaces
  router.post('/insert/:title/:type/:imdb', function (req, res) {

    var theTitle = req.params.title;
    var theType = req.params.type;
    var imdbID = req.params.imdb;

    // Sanitate the incomming title
    theTitle = theTitle.replace(/\+/g, " "); // replace + with space
    theTitle = theTitle.replace(/:/g, "asdasd"); // temporary replace : with asdasd
    theTitle = theTitle.replace(/asdasd/g, ":"); // replace asdasd with : again. Doing this because : is treaded as a param in express/node

    console.log(theTitle);

    // insert into table
    r.db('moviezone').table('watchlist').insert([
      {title: theTitle,
      type: theType,
      imdb: imdbID}
    ]).run(connection, function(err, result) {
      if (err) throw err;
      console.log(JSON.stringify(result, null, 2));
    })

  }) // end of route

  // clear the watchlist
  router.get('/clear', function (req, res) {
    r.db('moviezone').table('watchlist').delete().run(connection, function(err, result) {
      if (err) throw err;
      console.log(JSON.stringify(result, null, 2))
      res.send(result);
    })
  }) // end of route

  // clear a object
  router.get('/clear/:id', function (req, res) {

    var targetID = req.params.id;

    r.db('moviezone').table('watchlist').get(targetID).delete().run(connection, function(err, result) {
      if (err) throw err;
      console.log(JSON.stringify(result, null, 2))
    })
  }) // end of route



  // get just the movies
  router.get('/find/movie', function (req, res) {

    r.db('moviezone').table('watchlist').filter(r.row('type').eq("movie")).run(connection, function(err, cursor) {
      if (err) throw err;
      cursor.toArray(function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
        res.send(result);

      });
    });
  }) // end of route



  // get just the series
  router.get('/find/series', function (req, res) {

    r.db('moviezone').table('watchlist').filter(r.row('type').eq("series")).run(connection, function(err, cursor) {
      if (err) throw err;
      cursor.toArray(function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
        res.send(result);

      });
    });

  }) // end of route



  // get all objects
  router.get('/find/all', function (req, res) {

    r.db('moviezone').table('watchlist').run(connection, function(err, cursor) {
      if (err) throw err;
      cursor.toArray(function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
        res.send(result);

      });
    });

  }) // end of route



}
