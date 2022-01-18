// start
const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http
  .createServer((req, res) => {
    // getting all products
    // for any request we send all products
    // console.log(url.parse(req.url, true));
    const params = url.parse(req.url, true).query
    if (params.id) {
      // asking for some product
      fs.readFile("./products.json", (error, data)=>{
          if(error){
              res.writeHead(200, {"content-type": "text/html"}).end("<h1>Internal Server Error!</h1>")
          }else{
              const products  = JSON.parse(data.toString())
              const product = products.find(item=>item.id == params.id)
            //   console.log(product)
            // getting template from index.html
            fs.readFile("index.html", (err, html)=>{
                if(err){
                    res.writeHead(200, {"content-type": "text/html"}).end("<h1>Internal Server Error!</h1>")
                }else{
                    let content = `<h1>${product.brand}</h1>
                            <ul>
                                <li>model: ${product.model}</li>
                                <li>power: ${product.power}</li>
                                <li>gear: ${product.gear}</li>
                                <li>fuel: ${product.fuel}</li>
                                <li>prise: ${product.prise}</li>
                                <li>doors: ${product.doors}</li>
                            </ul>
                            <a href="/">Go To all products</a>
                    `
                    res.writeHead(200, {"content-type": "text/html"})
                    res.end(html.toString().replace("@@", content).replace("[[", product.brand))
                }
            })
            //   res.end(JSON.stringify(product))
          }
      })
    } else {
      fs.readFile("./products.json", (error, data) => {
        if (error) {
          res
            .writeHead(200, { "content-type": "text/html" })
            .end("<h2>Internal server error</h2>");
          console.log(error);
        } else {
          let container = `<div class="container">`;
          let products = JSON.parse(data.toString());
          // console.log(products)
          // loop for each product inside to generate a div for each item
          products.forEach((product) => {
            container += `<div class="product"><h2>${product.brand}</h2> <p>Prise: ${product.prise}</p><a href="/?id=${product.id}">Read more</a></div>`;
          });
          container += `</div>`;
          // console.log(container)
          fs.readFile("./index.html", (err, html) => {
            if (err) {
              res
                .writeHead(200, { "content-type": "text/html" })
                .end("<h2>Internal server error</h2>");
              console.log(err);
            } else {
              res.writeHead(200, { "content-type": "text/html" });
              res.end(html.toString().replace("@@", container).replace("[[", "All Products"));
            }
          });
        }
      });
    }
  })
  .listen(3000, () => console.log("The server is running on port 3000."));
