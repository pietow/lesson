const express = require('express')
const { login, admin, loginPost } = require('./general') 
const adminRouter = require('./adminRouter')

const router = express.Router()

router.use('/admin', adminRouter)

router.get('/login', login)
router.post('/login', loginPost)

module.exports = router
