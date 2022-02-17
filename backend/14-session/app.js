const express = require('express');
const { engine } = require('express-handlebars')
const path = require('path');
const generalRouter = require('./routes/generalRouter')
const session = require('express-session')

const app = express();

const port = process.env.PORT || 3000;

app.use(session({
    secret: 'my website',
    cookie: {maxAge: 5 * 60 * 1000}
}))

app.use(express.static(path.join(__dirname, 'public')))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(generalRouter)
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})
