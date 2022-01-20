/** @format */

const express = require('express')
require('dotenv').config()
const app = express()

const servicesRouter = require('./routes/servicesRouter')
const port = process.env.PORT || 3000
console.log(typeof process.env)

app.use('/experiences', servicesRouter)

app.get('/home', (req, res) => {
    res.send('welcome Home')
})
app.get('/about', (req, res) => {
    res.send('this is about me')
})

app.listen(port, () => {
    console.log(`app is listening to port ${port} `)
})
