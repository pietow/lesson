const express = require('express')
const route = express.Router()

route.get('/', (req, res)=>{
    res.render('mainTemplate', {
        title: "Home Page"
    })
})




module.exports = route