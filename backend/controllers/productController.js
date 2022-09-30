const products = require("../products.js")


 const getProducts = (req,res) => {
    res.send("Welcome to our shop")
}


 const getAllProducts = (req,res) => {
    res.send(products)
}

module.exports = {getAllProducts,getProducts}