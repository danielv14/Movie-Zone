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


  // Routes
  router.get('/', function (req, res) {

   res.json({
      message: 'Welcome to /watchlist! Hopefully this will be of use someday with rethinkDB...',
      });

  });




}
