const express = require('express');
/* const { engine } = require('express-handlebars') */
/* const path = require('path'); */
/* const router = require('./routes/generalRouter') */
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


/* app.engine('handlebars', engine()) */
/* app.set('view engine', 'handlebars') */
/* app.set('views', './views') */

/* app.use(express.static(path.join(__dirname, 'public'))) */

app.post('/test', (req, res) => {
  console.log(req.body)
  res.send({'result': res.body})
} )

/* app.use(router) */
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})
