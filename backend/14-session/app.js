const express = require('express');
const { engine } = require('express-handlebars')
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// add middleware to get the data using POST request
app.use(express.urlencoded({extended: false})); // false it will queryString parser
app.use(express.json());

// set public folder
app.use(express.static(path.join(__dirname, 'public')))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/admin', (req, res) => {
    res.render('admin')
})
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})
