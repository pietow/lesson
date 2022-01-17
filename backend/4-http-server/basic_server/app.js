/** @format */

// create a simple web server with multiple routing (home, about, contact, api)
// the data for api located in data.json file
const http = require('http')
const fs = require('fs')
require('dotenv').config()
const server = http.createServer((req, res) => {
    console.log(req.url)
    fs.writeFile('req.json', JSON.stringify(req.headers), (error) => {
        if (error) throw error
    })

    if (req.url === '/home') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end('<h1>Home</h1>')
    } else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end('<h1>About</h1>')
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end('<h1>Contact</h1>')
    } else if (req.url === '/api') {
        res.writeHead(200, { 'content-type': 'application/json' })
        fs.readFile('data.json', (error, data) => {
            if (error) throw error
            res.end(data.toString())
        })
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.end('<h1>Page not found</h1>')
    }
})
console.log(process.env.PORT)
server.listen(process.env.PORT)
