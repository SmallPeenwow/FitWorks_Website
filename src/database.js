const { createPool } = require('mysql');

const connection = createPool({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'fitworks_gym',
});

export default function GetValues() {
	connection.query(`SELECT * FROM fitworks_members`, (err, res) => {
		if (err) {
			console.error(err);
		}

		return console.log(res);
	});
}
