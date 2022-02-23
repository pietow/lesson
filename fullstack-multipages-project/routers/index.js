const express = require('express');
// import body from express-validator to set inputs rules
const {body} = require('express-validator')
const { getHome, getAbout, getContact, postContact, getVideos, getRegister, postRegister } = require('../models/routerController');

const router = express.Router()

router.get('/', getHome)
router.get('/about', getAbout)
router.get('/contact', getContact)
router.get('/videos', getVideos)
router.post('/contact', postContact)
router.get('/register', getRegister)
router.post('/register',
// set express-validator rules
body('fName').isLength({min: 2, max: 50}).notEmpty().isAlpha(),
body('lName').isLength({min: 2, max: 50}).notEmpty().isAlpha(),
body('username').isLength({min: 4, max: 50}).notEmpty().isAlpha(),
body('email').isLength({min: 5, max: 50}).notEmpty().isEmail(),
body('password').isLength({min: 8, max: 20}).notEmpty(),
body('birthDate').notEmpty().isDate()
, postRegister)

module.exports = router;

