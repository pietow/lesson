/** @format */
const express = require('express')

const servicesRouter = express.Router()

// root / will be /services
servicesRouter.get('/', (req, res) => {
    res.send('this is experiences page')
})
// route for /services/service1
servicesRouter.get('/frontend', (req, res) => {
    res.send('this is my frontend')
})
// route for /services/service2
servicesRouter.get('/backend', (req, res) => {
    res.send('this is my backend')
})
// route for /services/service3
servicesRouter.get('/programming-languages', (req, res) => {
    res.send('these are my language skills')
})

module.exports = servicesRouter
