const express = require('express')
const router = express.Router()



router.get('/addauthor', (req, res)=>{
    res.render('addAuthor')
})

router.post('/addauthor', (req, res)=>{
    // req.body
    // store the author
    res.json({error: "Mission failed successfuly"})
})





module.exports = router