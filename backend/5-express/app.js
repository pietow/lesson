/** @format */
// require express
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// make app listen to port 3000
app.listen(port, () => {
    console.log(`node application is listening to port : ${port}`)
})
