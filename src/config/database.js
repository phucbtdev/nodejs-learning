require('dotenv').config();
const mysql = require('mysql2/promise');

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST || 'localhost',
//     port: process.env.DB_PORT || 3000,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE
// });


// Create the connection pool. The pool-specific settings are the defaults
const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3000,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection;


