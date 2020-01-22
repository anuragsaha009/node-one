'user strict';
var sql = require('./db.js');

//Task object constructor
var Book = function(book){
    this.title = book.title;
    this.description = book.description;
    this.isbn = book.isbn;
};

Book.getBookById = function (bookId, result) {
	sql.query("Select * from books where id = ? ", bookId, function (err, res) {             
			if(err) {
				console.log("error: ", err);
				result(err, null);
			}
			else{
				result(null, res);
		  
			}
		});   
};

module.exports= Book;



