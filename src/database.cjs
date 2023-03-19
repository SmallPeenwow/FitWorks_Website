const { createPool } = require('mysql');
let valuesCollected = [];

const connection = createPool({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'fitworks_gym',
});

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
