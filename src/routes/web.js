const express = require('express');
const router = express.Router();
const { getHomePage, createNewUser } = require('../controllers/homeController');

router.get('/', getHomePage);

router.post('/create-user', createNewUser);

module.exports = router;