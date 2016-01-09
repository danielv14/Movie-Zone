var express = require('express'),
    app = express(),
    request = require('request');


module.exports = function(app) {

  // Routes
  app.get('/', function (req, res) {

   res.json({
      message: 'Welcome to the server',
      usage: 'Try to prefix with either /api or /user'
      });

  });




}
