// const express = require('express');
// const app = express();

// const mysql = require('mysql');

const { createPool } = require('mysql');
let valuesCollected = [];

//const { displayData } = require('./display');

// const connection = mysql.createPool({
const connection = createPool({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'fitworks_gym',
});

// connection.connect((error) => {
// 	if (error) {
// 		console.log(error);
// 		return;
// 	}

// 	console.log('Connection established');
// });

// export default function GetValues() {
// 	connection.query(`SELECT * FROM fitworks_members`, (err, res) => {
// 		if (err) {
// 			console.error(err);
// 		}

// 		return console.log(res);
// 	});
// }
connection.query(`SELECT * FROM fitworks_members`, (err, res) => {
	if (err) {
		console.error(err);
	}

	console.log('Retrieved data: ', res);

	valuesCollected.push(res);
});

module.exports = {
	valuesCollected,
};

// function displayData(res) {
// 	console.log('Display data: ', res);
// }

// app.get('/', (err, res) => {
// 	const connection = mysql.createPool({
// 		host: 'localhost',
// 		user: 'root',
// 		password: 'password',
// 		database: 'fitworks_gym',
// 	});

// 	mysql.connect(config, (error) => {
// 		var request = new mysql.Request();

// 		request.query(`SELECT * FROM fitworks_members`, (err, records) => {
// 			if (err) {
// 				console.error(err);
// 			}

// 			res.send(records);
// 		});
// 	});
// });

// var server = app.listen(5000, function () {
// 	console.log('Server is listening at port 5000...');
// });
