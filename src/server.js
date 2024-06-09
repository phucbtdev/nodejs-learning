require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST_NAME;

//Config ViewEngine
configViewEngine(app);

app.use('/', webRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port http://${host}:${port}`);
})


