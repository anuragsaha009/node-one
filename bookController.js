'user strict';
var Book = require('./bookModel.js');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all books.
// https://www.codementor.io/@julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book list');
};

exports.book_show = function(req, res) {
    
    Book.getBookById(req.params.id, function(err, book) {
		if (err) {
			res.send(err);
		} else {
			res.json(book);
		}		  
	});
}

