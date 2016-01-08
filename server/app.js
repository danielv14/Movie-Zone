var express = require('express');
var app = express();

// Port variable
var port = 1337;

// Base URL from OMDb api
var baseURL = 'http://www.omdbapi.com/';

app.get('/', function (req, res) {

 res.json({
    message: 'Welcome to the API!',
    baseURL: baseURL});

});

app.listen(port, function () {
  console.log('Example app listening on port ' + port +'!');
})
