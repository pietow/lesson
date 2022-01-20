const express = require('express');

const experiencesRouter = express.Router();


experiencesRouter.get('/', (req, res) => {
    res.send('this my experiences page')
})
experiencesRouter.get('/frontend', (req, res) => {
    res.send('my front end skills')
})
experiencesRouter.get('/backend', (req, res) => {
    res.send('my back end skills')
})
experiencesRouter.get('/programming-languages', (req, res) => {
    res.send('my programming languages skills')
})

module.exports = experiencesRouter;