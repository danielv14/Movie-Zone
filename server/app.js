var express = require('express'),
    app = express(),
    port = 1337;


// Require other modules (files)
var config =  require('./config')(app);
var index =   require('./index')(app);
var api =     require('./routes/api')(app);
var user =    require('./routes/user')(app);


app.listen(port, function () {
  console.log('Movie Zone server listening on port ' + port +'!');
})
