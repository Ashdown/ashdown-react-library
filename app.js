var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');
var static_directory = '//localhost:4000/static/'

if(process.env.NODE_ENV === 'production') {
    static_directory = '/';
} else {
    require('./dev-server');
}

//html endpoint

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index.ejs', {static_directory: static_directory})
});

//json endpoint

app.get('/test', function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }));
});

app.listen(3000);

module.exports = app;

