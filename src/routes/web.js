const express = require('express');
const router = express.Router();
const { getHomePage } = require('../controllers/homeController');

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'phucbtdev'
});

connection.query(
    'SELECT * FROM Persons',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);


// connection.query(
//     'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//     ['Page', 45],
//     function (err, results) {
//         console.log(results);
//     }
// );

router.get('/', getHomePage);


module.exports = router;