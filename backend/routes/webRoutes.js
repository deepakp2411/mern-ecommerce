const express = require('express')


const {getAllProducts,getProducts} = require("../controllers/productController")

const router = express.Router();


router.get('/',getProducts);
router.get('/products',getAllProducts); // get all products on frontend





module.exports =  router;
