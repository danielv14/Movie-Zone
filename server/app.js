var express = require('express'),
    app = express();


// Logger midleware function
function logger(req,res,next){
  console.log(new Date(), req.method, req.url);
  next();
}

// Use the logger middleware
app.use(logger);

// Require other modules (files)
var config =  require('./config')(app);
var index =   require('./index')(app);
var api =     require('./routes/api')(app);
var user =    require('./routes/user')(app);
var config =  require('./config')(app);


// Port variable
var port = 1337;


app.listen(port, function () {
  console.log('Movie Zone server listening on port ' + port +'!');
})
