/** @format */

const express = require('express')
/* require('dotenv').config() */
// This works - use file local.env
require('dotenv').config({ path: './local.env' })
// This does not - use file .env
/* require("dotenv").config(); */
const app = express()
const path  = require('path');

const port = process.env.PORT || 3000
const servicesRouter = require('./routes/servicesRouter')
app.use('/experiences', servicesRouter)

app.get('/home', (req, res) => {
    res.send('welcome Home')
})
app.get('/about', (req, res) => {
    res.send('this is about me')
})
app.get('/services/:service/:number', (req, res) => {
    const {service, number} = req.params
    res.send(`this is ${service} ${number} page`)
})

app.get('/response', (req, res) => {
    //res.redirect('https://www.google.com')
    const obj = {
        prop1: 1,
        prop2: 'text',
        prop3: true
    }
    /* res.json(obj) */
    res.sendFile(path.join(__dirname, 'README.md'))
})
app.post('/response', (req, res) => {
    //res.redirect('https://www.google.com')
    const obj = {
        prop1: 1,
        prop2: 'text',
        prop3: true
    }
    res.json(obj)
})

app.listen(port, () => {
    console.log(`app is listening to port ${port} `)
})
