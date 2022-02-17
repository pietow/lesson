const express = require('express');
const { adminHome, logout, logOutPost } = require('../models/admin');

const router = express.Router();


router.get('/',adminHome);
router.get('/logout', logout)
router.post('/logout', logOutPost);

module.exports = router