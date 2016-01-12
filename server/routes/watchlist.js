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
  router.post('/insert/:title/:type/:imdb/:year', function (req, res) {

    var theTitle = req.params.title;
    var theType = req.params.type;
    var imdbID = req.params.imdb;
    var theYear = req.params.year;
    // var thePoster = req.params.poster;

    // Sanitate the incomming title
    theTitle = theTitle.replace(/\+/g, " "); // replace + with space
    theTitle = theTitle.replace(/:/g, "asdasd"); // temporary replace : with asdasd
    theTitle = theTitle.replace(/asdasd/g, ":"); // replace asdasd with : again. Doing this because : is treaded as a param in express/node

    // // Sanitate the incomming poster
    // thePoster = thePoster.replace(/\+/g, " "); // replace + with space
    // thePoster = thePoster.replace(/:/g, "asdasd"); // temporary replace : with asdasd
    // thePoster = thePoster.replace(/\//g, "slash"); // temporary replace / with slash
    // thePoster = thePoster.replace(/\_/g, "underscore"); // replace _ with underscore
    //
    // // put it back together
    // thePoster = thePoster.replace(/slash/g, "/"); //  replace slash with / again
    // thePoster = thePoster.replace(/underscore/g, "_"); //  replace slash with / again
    // thePoster = thePoster.replace(/asdasd/g, ":"); // replace asdasd with : again. Doing this because : is treaded as a param in express/node

    console.log(theTitle);
    // console.log(thePoster);

    // insert into table
    r.db('moviezone').table('watchlist').insert([
      {title: theTitle,
      type: theType,
      imdb: imdbID,
      year: theYear}
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

  // clear all movies
  router.get('/clear/movie', function (req, res) {
    r.db('moviezone').table('watchlist').filter(r.row('type').eq("movie")).delete().run(connection, function(err, result) {
      if (err) throw err;
      res.send(result);
    })
  })

  // clear all series
  router.get('/clear/series', function (req, res) {
    r.db('moviezone').table('watchlist').filter(r.row('type').eq("series")).delete().run(connection, function(err, result) {
      if (err) throw err;
      res.send(result);
    })
  })

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
