const express = require('express')
const { login, admin, loginPost } = require('./general') 

const router = express.Router()

router.get('/login', login)
router.post('/login', loginPost)
router.get('/admin', admin)

module.exports = router
