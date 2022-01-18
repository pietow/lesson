/** @format */
const { getContent } = require('./utils.js')

let template = getContent('index.html')

const doors = (path, doors, req, res) => {
    const products = JSON.parse(getContent(path)).filter(
        (x) => x.doors === +doors,
    )
    let content = products
        .map((product) => {
            return `<ul class="border-2 rounded w-1/12 m-5" > 
         <li class="px-3">${product.brand}</li>
         <li class="px-3">${product.model}</li>
         <li class="px-3">${product.power}</li>
         <li class="px-3">${product.gear}</li>
         <li class="px-3">${product.fuel}</li>
         <li class="px-3">${product.prise}</li>
         <li class="px-3">${product.doors}</li>
         <a href="/?id=${product.id}"> Read more!</a>
         </ul>
      `
        })
        .join('')
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(template.replace('@@', content))
}

const products = (path, req, res) => {
    const products = JSON.parse(getContent(path))
    let content = products
        .map((product) => {
            return `<ul class="border-2 rounded w-1/12 m-5" > 
         <li class="px-3">${product.brand}</li>
         <li class="px-3">${product.model}</li>
         <li class="px-3">${product.power}</li>
         <li class="px-3">${product.gear}</li>
         <li class="px-3">${product.fuel}</li>
         <li class="px-3">${product.prise}</li>
         <li class="px-3">${product.doors}</li>
         <a href="/?id=${product.id}"> Read more!</a>
         </ul>
      `
        })
        .join('')
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(template.replace('@@', content))
}

const product = (path, id, req, res) => {
    const product = JSON.parse(getContent(path))[id]
    console.log(product)
    let content = `<ul class="border-2 rounded w-3/12 m-5" > 
         <li class="px-3">${product.brand}</li>
         <li class="px-3">${product.model}</li>
         <li class="px-3">${product.power}</li>
         <li class="px-3">${product.gear}</li>
         <li class="px-3">${product.fuel}</li>
         <li class="px-3">${product.prise}</li>
         <li class="px-3">${product.doors}</li>
         <a href="/?id=${product.id}"> Read more!</a>
         </ul>
      `
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(template.replace('@@', content))
}

module.exports = {
    products,
    product,
    doors,
}
