/** @format */
const express = require('express')

const languageRouter = express.Router()

languageRouter.get('/', (req, res) => {
    res.send('these are my kanguage skills')
})
languageRouter.get('/python', (req, res) => {
    res.send('python')
})
languageRouter.get('/fortran77', (req, res) => {
    res.send('fortran77')
})

module.exports = languageRouter
