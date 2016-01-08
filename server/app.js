var express = require('express');
var app = express();

// Port variable
var thePort = 1337;

app.get('/', function (req, res) {

 res.json({ message: 'hooray! welcome to our api!' });  

});

app.listen(thePort, function () {
  console.log('Example app listening on port ' + thePort +'!');
})
