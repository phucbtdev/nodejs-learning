const connection = require('../config/database');

const getHomePage = (req, res) => {

    return res.render('home');
}

const createNewUser = (req, res) => {
    let { lastname, firstname, age } = req.body
    connection.query(
        'INSERT INTO Users (lastname, firstname, age) VALUES (?,?,?)',
        [lastname, firstname, age],
        function (err, results) {
            console.log(err);
            res.send('creat user');

        }
    );
}

module.exports = {
    getHomePage,
    createNewUser
}