const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');

    //config static file css/img/js
    app.use(express.static(path.join('./src', 'public')));
    // app.use('/static', express.static(path.join(__dirname, 'public')))
}

module.exports = configViewEngine