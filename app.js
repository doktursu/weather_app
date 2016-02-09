var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');

app.get('/', function(req, res){
    res.send('welcome to hell, sky');
});

app.listen('1234', function(){
    console.log('Testing Testing 1234');
});
