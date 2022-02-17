const express = require('express')
const { adminHome, logout } = require('./admin')

const router = express.Router()

router.get('/', adminHome)
router.get('/logout', logout)

module.exports = router

