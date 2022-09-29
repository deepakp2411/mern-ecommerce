import express from "express";
import { getProducts,getAllProducts } from "../controllers/productController.js";

const router = express.Router();


router.get('/',getProducts);
router.get('/products',getAllProducts); // get all products on frontend





export default router;
