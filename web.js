var express = require('express');
var app = express();
var fs=require('fs')
var text = ''


fs.readFile('index2.html', 'utf-8', function(err, data){
    text=data;
});

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(text);
});

var port1 = process.env.PORT || 80;
var port2 = process.env.PORT || 8080;
var port3 = process.env.PORT || 443;

var port = port2;

app.listen(port, function() {
  console.log("Listening on " + port);
});
