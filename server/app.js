var express = require('express'),
    app = express();

// Require other modules (files)
var index =   require('./index')(app);
var api =     require('./routes/api')(app);
var user =    require('./routes/user')(app);
var config =  require('./config')(app);

// Port variable
var port = 1337;


app.listen(port, function () {
  console.log('Movie Zone server listening on port ' + port +'!');
})
