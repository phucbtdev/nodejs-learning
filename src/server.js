
const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config()


const port = process.env.PORT || 3000
const host = process.env.HOST_NAME

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello World! adn nodemon')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://${host}:${port}`)
})