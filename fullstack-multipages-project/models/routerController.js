// import emailSender
const { response } = require('express');
const { validationResult } = require('express-validator')
const emailSender = require('./emailSender');

const getHome = (req, res) => {
    res.render('index')
}

const getAbout = (req, res) => {
    res.render('about')
}

const getContact = (req, res) => {
    res.render('contact')
}

const getVideos = (req, res) => {
    res.render('videos')
}

const postContact = (req, res) => {
    console.log(req.body);
    emailSender.sendEmail(req.body).then((info) => {
        console.log(info);
        res.json({ result: 'done' })
    }).catch(error => {
        console.log(error);
        res.json({ result: 'error' })
    })
}
const getRegister = (req, res) => {
    res.render('register')
}
const postRegister = (req, res) => {
    // check if posted data is valid 
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.json({ message: 'validation error' })
    } else {
        console.log(req.body);
        res.json({ message: 'done' })
    }
    
}
module.exports = {
    getHome,
    getAbout,
    getContact,
    postContact,
    getVideos,
    getRegister,
    postRegister
}