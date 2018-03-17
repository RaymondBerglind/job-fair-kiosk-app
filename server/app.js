var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(require('./controllers'));

app.listen(3001, function() {
	console.log('Listening on port 3001...');
});
