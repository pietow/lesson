/** @format */

const http = require('http')
const url = require('url')
const { products, product, doors } = require('./Products.js')
const { save } = require('./utils.js')


//D. Flanagan pg. 615
function serve(port) {
    const server = new http.Server()
    server.listen(port)
    console.log('Listening on port', port)

    server.on('request', (req, res) => {
        const params = url.parse(req.url, true).query
        const [firstKey] = Object.keys(params)
        switch (firstKey) {
            case 'id':
                product('products.json', params.id, req, res)
                break
            case 'doors':
                doors('products.json', params.doors, req, res)
                break
            case 'brand':
                console.log('bla')
                save(params, 'products.json')
                res.writeHead(301, { 'Location': '/' })
                res.end()
                break
            default: {
                products('products.json', req, res)
                break
            }
        }
    })
}

serve(3000)
