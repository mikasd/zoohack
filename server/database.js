const mysql = require('mysql');
const pool  = mysql.createPool({
	connectionLimit: 5,
	host: process.env.DATABASE_IP_ADDRESS,
	user     : process.env.DATABASE_USERNAME,
    password : process.env.DATABASE_PASSWORD,
    database : 'wildflag'
})

const cleanse_query = `DELETE FROM searches WHERE expiration < ?`

function cleanse(){
	pool.query(cleanse_query, [Math.floor(Date.now()/1000)], (err, results) => {
	if (err) {
		console.error(err);
	}
	else {
		console.log(results)
	}
}
);
}

//checks for expired ops every hour
setInterval(
cleanse
, 1000 * 60 * 60);

module.exports = pool;
