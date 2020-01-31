var http = require('http')
var bodyParser = require('body-parser')
var express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())

var httpServer = http.createServer(app);


module.exports = app;


var book_controller = require('./bookController.js');

app.get('/', book_controller.book_list);
app.get('/book/create', book_controller.book_create_get);
app.get('/book/show/:id', book_controller.book_show);
app.get('/book/edit/:id', book_controller.book_edit);
app.put('/book/update/:id', book_controller.book_update);

http.createServer(app).listen(port, function () {
	console.log('Express server listening on port ' + port)
})



