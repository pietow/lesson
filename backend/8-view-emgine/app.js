const express = require('express')
const logger = require('morgan')

const app = express()
// setting the port
app.set('port', process.env.PORT || 3000)
// setting a view engine ...
app.set('view engine', 'ejs')
app.set('views', __dirname + "/views")

app.use(logger('dev'))


// getting main request
app.get('/', (req, res)=>{
    // res.sendFile(__dirname+'/index.html')
    res.render('index',{title: "Home", content: "This is home page", dark:true})
})

app.get('/about', (req, res)=>{
    // res.sendFile(__dirname+'/about.html')
    res.render('about', {title: "About", content: "This is About page"})
})

app.get('/services', (req, res)=>{
    // res.sendFile(__dirname+'/services.html')
    res.render('services', {title: "Services", content: "This is Services page"})
})

app.get('/api', (req, res)=>{
    res.json([{
        name: "Mostafa", 
        age: 30
    }])
})



app.listen(app.get('port'),()=>{
    console.log(`The server is running on Port: ${app.get('port')}`)
})