var express = require('express');
var request = require('request');
var app = express();

// Port variable
var port = 1337;

// Base URL from OMDb api
var baseURL = 'http://www.omdbapi.com/';


app.get('/', function (req, res) {

 res.json({
    message: 'Welcome to the API!',
    usage: {
      "/test":                                  'test url',
      "/search/:contenttype/:search":           'search for something in a content group',
      "/search/:contenttype/:search/:page":     'search a specific page number',
      "imdb/:imdbID":                           'look up specific IMDb ID',

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

// URL for searching by content type
// :contenttype accepts movie, series, or episode
// :search is the search term
app.get('/search/:contenttype/:search', function (req, res) {

  // Create a variable from the url parameter
  var searchTerm = req.params.search;
  var contentType = req.params.contenttype;

  console.log('searching for:' + searchTerm);
  console.log('type is:', contentType + '\n');

  request(baseURL + '?s=' + searchTerm + '&type=' + contentType + '', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })

});

// Paginated searching
app.get('/search/:contenttype/:search/:page', function (req, res) {

  // Create a variable from the url parameter
  var searchTerm = req.params.search;
  var contentType = req.params.contenttype;
  var page = req.params.page;

  console.log('searching for:' + searchTerm);
  console.log('type is:', contentType);
  console.log('page nr is: ' + page + '\n');

  request(baseURL + '?s=' + searchTerm + '&type=' + contentType + '&page=' + page + '', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })

});

// Regular searching
app.get('/search-all/:search', function (req, res) {

  // Create a variable from the url parameter
  var searchTerm = req.params.search;

  console.log('searching for:' + searchTerm);

  request(baseURL + '?s=' + searchTerm + '', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })

});

// Route to fetch specific IMDb ID
app.get('/imdb/:imdbID', function (req, res) {
  var imdbID = req.params.imdbID;
  console.log('looking up imdbID: ' + imdbID);

  request(baseURL + '?i=' + imdbID + '&tomatoes=true', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })

});




app.listen(port, function () {
  console.log('Movie Zone server listening on port ' + port +'!');
})
