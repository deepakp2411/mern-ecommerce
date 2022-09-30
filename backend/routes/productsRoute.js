const express = require('express')

const router = express.Router();
const {findProduct,postProduct} = require("../controllers/product")



router.post("/", postProduct)
router.get('/',findProduct)



module.exports = router