const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;


// set public folder
app.use(express.static(path.join(__dirname, 'public')))

// set ejs as view engine
app.set('view engine', 'ejs');
// set views folder path
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/videos', (req, res) => {
    res.render('videos')
})


app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})