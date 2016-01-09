
var express = require('express');
var request = require('request');
var app = express();

var router = require('./routes')(app);

// Port variable
var port = 1337;


app.listen(port, function () {
  console.log('Movie Zone server listening on port ' + port +'!');
})
