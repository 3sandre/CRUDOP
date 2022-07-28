const express = require('express');
const app = express();
const mysql = require("mysql")
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
	connectionLimit : 100,
	user: "root",
	host: "localhost",
	password: "",
	database: "Football",
	port: "3306",

});

app.post('/create', (req, res) => {
	 const name = req.body.name;
	 const nickname = req.body.nickname;
	 const age = req.body.age;
	 const wins = req.body.wins;
	 const losses = req.body.losses;
	 const scores = req.body.scores;


	 db.query('INSERT INTO Balls (name, nickname, age, wins, losses, scores) VALUES (?,?,?,?,?,?)', [name, nickname, age, wins, losses, scores], (err, result) => {
	 	if (err) {
	 		console.log(err)
	 	}
	 	else{
	 		res.send("Values Inserted")
	 	}
	 });
});

app.get('/Balls', (req, res) => {
	db.query("SELECT * FROM Balls", (err, result) => {
		if (err) {
			console.log(err);
		}
		else {
			res.send(result);
		}
	});
});

app.put('/update', (req, res) => {
	const Id = req.body.Id;
	const scores = req.body.scores;
	db.query("UPDATE Balls SET scores = ? WHERE Id = ?", [scores, Id], (err, result) =>{
		if (err) {
			console.log(err);
		}
		else {
			res.send(result);
		}
	});
});


// app.delete()

app.listen(3001, () => {
	console.log("Hello , you are welcome on port 3001");
});