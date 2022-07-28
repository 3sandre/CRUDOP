const express = require('express');
const app = express();
const mysql = require("mysql")
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
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

app.listen(3001, () => {
	console.log("Hello , you are welcome on port 3001");
});