var express = require('express'),
    app = express();


module.exports = function(app) {

  // Logger midleware function
  function logger(req,res,next){
    console.log(new Date(), req.method, req.url), req.params;
    next();
  }

  // Use the logger middleware
  app.use(logger);
}
