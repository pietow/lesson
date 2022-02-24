const express = require('express')
const router = express.Router()



router.get('/addauthor', (req, res)=>{
    res.render('addAuthor')
})





module.exports = router