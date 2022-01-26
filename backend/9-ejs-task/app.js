/** @format */
const fortune = require('./lib/fortune.js')

const express = require('express')
const fs = require('fs')

const app = express()
// set up handlebars view engine
const handlebars = require('express-handlebars').create({
    defaultLayout: 'main',
})
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')
app.set('port', 3000)

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.render('home')
})
app.get('/about', function (req, res) {
    res.render('about', { fortune: fortune.getFortune() })
})
// 404 catch-all handler (middleware)
app.use(function (req, res, next) {
    res.status(404)
    res.render('404')
})
// 500 error handler (middleware)
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500)
    res.render('500')
})

app.listen(app.get('port'), () => {
    console.log(`The server is running on Port: ${app.get('port')}`)
})
