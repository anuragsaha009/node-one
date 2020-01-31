'user strict';
var Book = require('./bookModel.js');

exports.book_list = function(req, res) { 
    Book.getAllBook(null, function(err, books) {
		if (err) {
			res.send(err);
		} else {
			var heading = "Book List";
			res.render('pages/list',{ books : books, heading: heading });
		}		  
	});
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
		//	res.json(book);
		var heading = "Show Book Details";
		res.render('pages/show',{ book : book[0], heading: heading });
		}		  
	});
}

exports.book_edit = function(req, res) {
    
    Book.getBookById(req.params.id, function(err, book) {
		if (err) {
			res.send(err);
		} else {
		//	res.json(book);
		var heading = "Edit Book Details";
		res.render('pages/edit',{ book : book[0], heading: heading });
		}		  
	});
}
exports.book_update = function(req, res) {


	var title = req.body.title;
	let data =[title];
	Book.updateById(req.params.id, data, function(err, book) {
		if (err)
		  res.send(err);
		res.json(book);
	  });
}






