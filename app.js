var express = require('express');
var app = express();

var http = require('http');

var dns = require('dns');
var cors = require('cors');
var path = require('path');
var harps = require('harp');
var ArcGIS = require('arcgis')
var arcgis = ArcGIS()

app.set('ip', process.env.IP);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname));



var port = process.env.PORT || 8080;
app.get('/', function(req, res) {
  res.sendFile(__dirname+'/index.html');
});

app.listen(port);
console.log('Check site on port ' + port);
