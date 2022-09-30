const express = require('express')

const router = express.Router();
const {findProduct,postProduct} = require("../controllers/product")
// import {findProduct, postProduct} from '../controllers/product.js'


router.post("/", postProduct)
router.get('/',findProduct)



module.exports = router