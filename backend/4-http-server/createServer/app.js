// to create server in nodejs use 'http'
const http = require('http')
const server = http.createServer((req, res)=>{

})
// console.log(http)

server.listen(3000, ()=>{
    console.log(`Ther server is running on port 3000.`)
})
// if sudo npm notfound:
// sudo apt install npm
// then to install nodemon globaly:
// sudo npm i -g nodemon