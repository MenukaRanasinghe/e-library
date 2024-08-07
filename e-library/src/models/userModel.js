const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const promisePool = pool.promise();

const getUserByEmail = async (email, callback) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length > 0) {
      callback(null, rows[0]);
    } else {
      callback(null, null);
    }
  } catch (err) {
    callback(err, null);
  }
};

module.exports = { getUserByEmail };
