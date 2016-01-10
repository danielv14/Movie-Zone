var express = require('express'),
    app = express();


module.exports = function(app) {

  // Logger midleware function
  function logger(req,res,next){
    console.log(new Date(), req.method, req.url), req.params;
    next();
  }

  //CORS middleware
  var allowCrossDomain = function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type');

      next();
  }

  // Use the logger middleware
  app.use(logger);
  app.use(allowCrossDomain);
}
