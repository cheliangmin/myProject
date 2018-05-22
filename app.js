var express = require('express');

var app = express();
//使用模板引擎
app.set('view engine', 'jade');

app.get('/', function (req, res) {
	
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen('3000');