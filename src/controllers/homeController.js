const connection = require('../config/database');
const {
    getAllUsers,
    getUserById,
    updateUserById,
    createUser,
    deleteUserById
} = require('../service/CRUDService');

//Home page
const getHomePage = async (req, res) => {

    let results = await getAllUsers();
    return res.render('list', { results: results });
}

//Form user create
const getFormUser = (req, res) => {
    return res.render('form');
}

//Edit a user
const getFormUserEdit = async (req, res) => {
    let id = req.params.id;
    let user = await getUserById(id);

    return res.render('edit', { user: user });
}

//Create a new user
const createNewUser = async (req, res) => {
    let { lastname, firstname, age } = req.body;
    await createUser(lastname, firstname, age);

    res.redirect('/');
}

//Update a user
const updateUser = async (c) => {
    let { id, lastname, firstname, age } = req.body;
    let results = await updateUserById(id, lastname, firstname, age);
    if (results.affectedRows) {
        res.redirect('/');
    }
}

const deleteUser = async (req, res) => {
    let id = req.params.id;
    await deleteUserById(id);
    res.redirect('/');
}

module.exports = {
    getHomePage,
    createNewUser,
    getFormUser,
    getFormUserEdit,
    updateUser,
    deleteUser
}