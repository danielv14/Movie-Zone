var express = require('express'),
    app = express(),
    request = require('request');


// Logger midleware function
function logger(req,res,next){
  console.log(new Date(), req.method, req.url);
  next();
}


module.exports = function(app) {

  // invoke logger middleware function
  app.use(logger);

  // Routes

  app.get('/', function (req, res) {

   res.json({
      message: 'Welcome to the server',
      usage: 'Try to prefix with either /api or /user'
      });

  });




}
