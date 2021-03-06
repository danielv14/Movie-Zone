var express = require('express'),
    app = express(),
    request = require('request');

// Base URL from OMDb api
var baseURL = 'http://www.omdbapi.com/';



module.exports = function(app) {

  // Declare router
  var router = express.Router();

  // delcare prefix url for api
  app.use('/api', router);


  // Routes

  router.get('/help', function (req, res) {
    res.json({
      message: 'Welcome to the API!',
      usage: {
        "/test":                                        'test url',
        '/search/all/:search':                          'search every content type',
        '/search/all/:search/:page':                    'search every content type at a specific page nr',
        "/search/type/:contenttype/:search":            'search for something in a content group',
        "/search/type/:contenttype/:search/:page":      'search a specific page nr',
        "/imdb/:imdbID":                                 'look up specific IMDb ID',
        '/series/title/:series/:season':                'list all episodes within a season. Uses OMDb API title (t=)',
        '/series/imdb/:imdbid/:season':                 'same as above only it uses IMDB ID instead of title (its more accurate)'

      }});

  });



  // Test URL for testing request node module
  router.get('/test', function (req, res) {

    request(baseURL + '?t=frozen&', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    })

  });



  // Regular searching
  router.get('/search/all/:search', function (req, res) {

    // Create a variable from the url parameter
    var searchTerm = req.params.search;


    request(baseURL + '?s=' + searchTerm + '', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    })

  });





  // Regular paginated searching
  router.get('/search/all/:search/:page', function (req, res) {

    // Create a variable from the url parameter
    var searchTerm = req.params.search;
    var page = req.params.page;


    request(baseURL + '?s=' + searchTerm + '&page=' + page + '', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    })

  });




  // URL for searching by content type
  router.get('/search/type/:contenttype/:search', function (req, res) {

    // Create a variable from the url parameter
    var searchTerm = req.params.search;
    var contentType = req.params.contenttype;


    request(baseURL + '?s=' + searchTerm + '&type=' + contentType + '', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    })

  });




  // Paginated searching
  router.get('/search/type/:contenttype/:search/:page', function (req, res) {

    // Create a variable from the url parameter
    var searchTerm = req.params.search;
    var contentType = req.params.contenttype;
    var page = req.params.page;


    request(baseURL + '?s=' + searchTerm + '&type=' + contentType + '&page=' + page + '', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    })

  });



  // Route to fetch specific IMDb ID with full plot
  router.get('/imdb/:imdbID', function (req, res) {

    var imdbID = req.params.imdbID;

    request(baseURL + '?i=' + imdbID + '&tomatoes=true&plot=full', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    })

  });




  // Route to list all seasons within a series. Uses t= flag
  router.get('/series/title/:series/:season', function (req, res) {

    var series = req.params.series;
    var season = req.params.season;

    request(baseURL + '?t=' + series + '&Season=' + season + '', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    })

  });




  // Route to list all seasons within a series. Uses t= flag
  router.get('/series/imdb/:imdbid/:season', function (req, res) {
    var series = req.params.imdbid;
    var season = req.params.season;

    request(baseURL + '?i=' + series + '&Season=' + season + '', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    })

  });




}
