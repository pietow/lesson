/** @format */

const { clearCache } = require('ejs')
const express = require('express')
require('dotenv').config()
const path = require('path')

// import emailSender
const emailSender = require('./models/emailSender')

const app = express()
const port = process.env.PORT || 3000

// add middleware to get the data using POST request
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// set public folder
app.use(express.static(path.join(__dirname, 'public')))

// set ejs as view engine
app.set('view engine', 'ejs')
// set views folder path
app.set('views', 'views')

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/videos', (req, res) => {
    res.render('videos')
})
app.post('/contact', (req, res) => {
    /* let body = [] */
    /* req.on('data', (chunk) => { */
    /*     body.push(chunk) */
    /*     console.log(chunk.toString()) */
    /* }).on('end', () => { */
    /*     body = Buffer.concat(body).toString() */
    /*     console.log(body) */
    /*     // at this point, `body` has the entire request body stored in it as a string */
    /* }) */
    console.log(req.body)
    emailSender.sendEmail(req.body, (data) => {
        res.json(data)
    })
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})
