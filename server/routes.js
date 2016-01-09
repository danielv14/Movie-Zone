var express = require('express');
var request = require('request');


// Base URL from OMDb api
var baseURL = 'http://www.omdbapi.com/';


// Logger midleware function
function logger(req,res,next){
  console.log(new Date(), req.method, req.url);
  next();
}

module.exports = function(app) {



  app.use(logger);

  app.get('/', function (req, res) {

   res.json({
      message: 'Welcome to the API!',
      usage: {
        "/test":                                        'test url',
        '/search/all/:search':                          'search every content type',
        '/search/all/:search/:page':                    'search every content type at a specific page nr',
        "/search/type/:contenttype/:search":            'search for something in a content group',
        "/search/type/:contenttype/:search/:page":      'search a specific page nr',
        "imdb/:imdbID":                                 'look up specific IMDb ID',
        '/series/title/:series/:season':                'list all episodes within a season. Uses OMDb API title (t=)',
        '/series/imdb/:imdbid/:season':                 'same as above only it uses IMDB ID instead of title (its more accurate)'

      }});

  });

  // Test URL for testing request node module
  app.get('/test', function (req, res) {

    request(baseURL + '?t=frozen&', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    })

  });




  // Regular searching
  app.get('/search/all/:search', function (req, res) {

    // Create a variable from the url parameter
    var searchTerm = req.params.search;


    request(baseURL + '?s=' + searchTerm + '', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    })

  });





  // Regular paginated searching
  app.get('/search/all/:search/:page', function (req, res) {

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
  app.get('/search/type/:contenttype/:search', function (req, res) {

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
  app.get('/search/type/:contenttype/:search/:page', function (req, res) {

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
  app.get('/imdb/:imdbID', function (req, res) {

    var imdbID = req.params.imdbID;

    request(baseURL + '?i=' + imdbID + '&tomatoes=true&plot=full', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    })

  });




  // Route to list all seasons within a series. Uses t= flag
  app.get('/series/title/:series/:season', function (req, res) {

    var series = req.params.series;
    var season = req.params.season;

    request(baseURL + '?t=' + series + '&Season=' + season + '', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    })

  });




  // Route to list all seasons within a series. Uses t= flag
  app.get('/series/imdb/:imdbid/:season', function (req, res) {
    var series = req.params.imdbid;
    var season = req.params.season;

    request(baseURL + '?i=' + series + '&Season=' + season + '', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    })

  });

}
