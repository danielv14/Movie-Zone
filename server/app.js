var express = require('express');
var request = require('request');
var app = express();

// Port variable
var port = 1337;

// Base URL from OMDb api
var baseURL = 'http://www.omdbapi.com';


app.get('/', function (req, res) {

 res.json({
    message: 'Welcome to the API!',
    baseURL: baseURL});

});

// Test URL for testing request node module
app.get('/test', function (req, res) {

  request(baseURL + '?t=frozen&', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      //console.log(body);
      res.send(body);
    }
  })

});

// Test URL for testing request node module
app.get('/search/:search', function (req, res) {

  // Create a variable from the url parameter
  var searchTerm = req.params.search;
  console.log('searching for:' + searchTerm);

  request(baseURL + '?s=' + searchTerm + '', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body);
    }
  })

});



app.listen(port, function () {
  console.log('Example app listening on port ' + port +'!');
})
