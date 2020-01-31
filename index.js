var http = require('http');
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');
const app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
var httpServer = http.createServer(app);

const port = 3000

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

app.exports = con;

app.post('/', (req, res) =>  {
	var name = req.body.name;
	var email = req.body.email;
	var phoneno = req.body.phoneno;
	var msg = ''

	var stmt = `INSERT INTO users(name,email,phoneno)VALUES(?,?,?)`;
	let todo = [ name, email, phoneno ];
  	
  	con.query(stmt, todo, function (err, result, fields) {
    	if (err) {
    		return console.error(err.message);
  		}
  	});

	res.send(JSON.stringify({ msg: "Data inserted successfully." }));
});

app.get('/show/:id', (req, res) => { 

	var userId = req.params.id;
	
	var stmt = `SELECT * FROM users where id=?`;
	var todo = [userId];

	con.query(stmt, todo, function (err, result, fields) {
    	if (!err) {
    		res.send(JSON.stringify({ result }));
  		} else {
  			console.log("Error!!!");
  		}
  	});

});





app.listen(port, () => console.log(`Example app listening on port ${port}!`))