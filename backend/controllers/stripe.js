import express from 'express'
import dotenv from 'dotenv'
import Stripe from 'stripe'
dotenv.config()

const stripe = Stripe(process.env.STRIPE_KEY)



const app = express();


const YOUR_DOMAIN = 'http://localhost:3000/cart';

export const paymentStripe = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 200,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
}

