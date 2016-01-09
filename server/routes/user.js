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
