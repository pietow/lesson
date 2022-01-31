const express = require("express");
const route = express.Router();
const fs = require("fs");
const path = require('path')

route.get("/", (req, res) => {
  // 1- read data file
  fs.readFile(path.join(__dirname, '../data/products.json'), (error, data) => {
      if(error){
        res.render("mainTemplate", {
            title: "ERROR",
            content: "error",
            error: error.message
          });
      }else{
        let categories = []
        let products = JSON.parse(data.toString())
        products.forEach(product=>{
            // check if product.category NOT exist in categories
            if(!categories.includes(product.category))
                categories.push(product.category)
        })
        res.render("mainTemplate", {
            title: "Products Page",
            content: "products",
            categories: categories,
            data: products
          });
      }
  });
});

module.exports = route;
