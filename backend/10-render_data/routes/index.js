const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    let obj = {
        name: "Mostafa",
        age: 30,
        married: true,
        skills:["HTML", "CSS", "Javascript"],
        address:{
            country: "Germany",
            city: "Luebeck",
            street: "HauptStrasse",
            zipcode: 1234
        }
    }
    res.render('index', obj)
})


module.exports = router