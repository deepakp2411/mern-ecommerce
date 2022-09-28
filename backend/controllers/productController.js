import products from "../products.js"


export const getProducts = (req,res) => {
    res.send("Welcome to our shop")
}


export const getAllProducts = (req,res) => {
    res.send(products)
}