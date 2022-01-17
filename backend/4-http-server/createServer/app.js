// to create server in nodejs use 'http'
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // console.log(req.headers)
  // console.log(req.url);
  // store req.headers in file
  fs.writeFile("req.json", JSON.stringify(req.headers), (error) => {
    if (error) throw error;
    console.log("header saved!")
  });
  // setting response header:
  res.writeHead(200, {"content-type": "text/html"})
  res.end()
});


server.listen(3000, () => {
  console.log(`Ther server is running on port 3000.`);
});
