var express = require('express');
var app = express();

// Require other modules (files)
var router = require('./routes')(app);
var config = require('./config')(app);

// Port variable
var port = 1337;


app.listen(port, function () {
  console.log('Movie Zone server listening on port ' + port +'!');
})
