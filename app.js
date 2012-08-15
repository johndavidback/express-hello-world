var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('YES!');
	console.log('Successful');
});

app.listen(3000);
console.log('Beginning a listening exercise on 3000');