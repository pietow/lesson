const express = require('express');
require('dotenv').config();

const experiencesRouter = require('./routes/experiencesRouter');



const port = process.env.PORT || 3000;

const app = express();

app.use('/experiences', experiencesRouter);

app.get('/home', (req, res) => {
    res.send('Welcome Home');
})

app.get('/about', (req, res) => {
    res.send('this is about me page')
})




app.listen(port, () => {
    console.log(`app is listening to port ${port}`);
})