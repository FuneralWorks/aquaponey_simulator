//modules
var express = require('express');
var app = express();
var http = require('http').Server(app);
var app      = express();
var server   = require('http').Server(app);

//configuration


app.use(express.static(__dirname + '/public'));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

//ROUTES=======================================

//route for index file

app.get('/', function (req, res) {
    //send index.html file in public directory
    res.sendfile('./public/index.html');
});



server.listen(8080);
console.log('It\'s going down in 8080');
