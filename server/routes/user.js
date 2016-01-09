var express = require('express'),
    app = express(),
    request = require('request');


module.exports = function(app) {

  // Declare router
  var router = express.Router();

  // delcare prefix url for api
  app.use('/user', router);


  // Routes
  router.get('/', function (req, res) {

   res.json({
      message: 'Welcome to /user! Hopefully this will be of use someday with a MongoDB...',
      });

  });




}
