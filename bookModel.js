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
		} else {
			result(null, res);
		}
	});   
};

Book.updateById = function(id, data, result){
	sql.query("UPDATE books SET title = ? WHERE id = ?", [data.title, id], function (err, res) {
	if(err) {
		console.log("error: ", err);
			result(null, err);
		}
		else{   
		result(null, res);
			}
		}); 
};

Book.getAllBook = function(req,result){
	sql.query("Select * from books", null, function (err, res) {             
		if(err) {
			console.log("error: ", err);
			result(err, null);
		} else {
			result(null, res);
		}
	});
}

module.exports= Book;



