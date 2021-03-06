var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');
var http = require('http');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/weather/:location', function(req, res){

    http.get('http://api.openweathermap.org/data/2.5/weather?q=' +req.params.location + '&appid=a7913b7a0ca267bc507c4665eccd9b11', function(response){

        var body = '';
        response.on('data', function(d){
            body += d;
        });

        response.on('end', function(){
            var data = JSON.parse(body);
            res.send(data);
        });
    });

});

app.listen('1234', function(){
    console.log('Testing Testing 1234');
});
