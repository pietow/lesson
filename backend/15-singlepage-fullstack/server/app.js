const express = require('express');
require('dotenv').config();
const path = require('path')

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 4000;




app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.listen(port, () => {
    console.log(`app is listening to port ${port}`);
})