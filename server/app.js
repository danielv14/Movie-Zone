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

app.get('/test', function (req, res) {

  request(baseURL + '?t=frozen&plot=full', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body);
    }
  })

});

app.listen(port, function () {
  console.log('Example app listening on port ' + port +'!');
})
