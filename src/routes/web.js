const express = require('express');
const router = express.Router();
const {
    getHomePage,
    createNewUser,
    getFormUser,
    getFormUserEdit,
    updateUser,
    deleteUser
} = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/form-user', getFormUser);
router.get('/form-user-edit/:id', getFormUserEdit);
router.get('/delete-user/:id', deleteUser);

router.post('/create-user', createNewUser);
router.post('/update-user', updateUser);
module.exports = router;