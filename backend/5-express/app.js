// require express
const express = require('express');

const app = express();
// try to get port from .env file
// if can ot we set it to 3000
const port = process.env.PORT || 3000;
// create public middleware
app.use(express.static(__dirname + '/public'));
// create home route
app.get('/', (req, res) => {
    //console.log(__dirname);
    //res.send("Hello FBW E05-1");
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/contactus', (req, res) => {
    console.log(req);
    res.send('<h1>this is contact us page</h1>')
})
// make app listen to port 3000
app.listen(port, () => {
    console.log(`node application is listening to port : ${port}`);
})