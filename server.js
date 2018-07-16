http = require('http');
cors = require('cors');

var express = require('express');
var app = express();



app.set('view engine', 'ejs');

app.get('/', function(req,res) {
	//res.render('getcity');
	res.send("hello world");
});




app.listen(process.env.PORT || 8099);

