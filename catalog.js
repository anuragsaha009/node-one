var http = require('http')
var express = require('express');
const app = express();
const port = 3000;

module.exports = app;

var book_controller = require('./bookController.js');

app.get('/', book_controller.index);
app.get('/book/create', book_controller.book_create_get);
app.get('/book/show/:id', book_controller.book_show);

http.createServer(app).listen(port, function () {
	console.log('Express server listening on port ' + port)
})



