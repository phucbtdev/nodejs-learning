const connection = require('../config/database');

const getAllUsers = async () => {
    const [results, fields] = await connection.query('Select * from Users');
    return results;
}

const createUser = async (lastname, firstname, age) => {
    let [results, fields] = await connection.query(
        'INSERT INTO Users (lastname, firstname, age) VALUES (?,?,?)', [lastname, firstname, age]
    );
}


const getUserById = async (id) => {
    const [results, fields] = await connection.query('Select * from Users where Id = ?', [id]);

    let user = results && results.length > 0 ? results[0] : {};
    return user;
}


const updateUserById = async (id, lastname, firstname, age) => {
    let [results, fields] = await connection.query(
        'UPDATE Users SET lastname = ?, firstname = ?, age = ? WHERE Id =?', [lastname, firstname, age, id]
    );

    return results;
}

const deleteUserById = async (id) => {
    let [results, fields] = await connection.query(
        'DELETE FROM Users WHERE Id = ?', [id]
    );

    return results;
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}