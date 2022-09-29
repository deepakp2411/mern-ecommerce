import express from "express";
import { paymentStripe } from "../controllers/stripe.js";

const router = express.Router();


router.post("/create-checkout-session", paymentStripe)







export default router;
