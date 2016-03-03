var express = require('express'),
    app = express(),
    port = 1337;


// Require other modules (files)
var config =  require('./config')(app);
var api =     require('./routes/api')(app);
var watchlist =    require('./routes/watchlist')(app);


app.listen(port, function () {
  console.log('Movie Zone server listening on port ' + port +'!');
})
