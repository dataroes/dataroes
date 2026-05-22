// Load local environment variables from .env.local (if present)
try {
  require('dotenv').config({ path: '.env.local' });
} catch (e) {}

const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');

const app = express();
const port = process.env.PORT || 4242;

app.use(cors());
app.use(express.json());

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('Warning: STRIPE_SECRET_KEY is not set. Set it in environment when running the server.');
}

const stripeKey = process.env.STRIPE_SECRET_KEY || process.env.VITE_STRIPE_SECRET_KEY || '';
if (!stripeKey) {
  console.warn('Warning: STRIPE secret key not found in STRIPE_SECRET_KEY or VITE_STRIPE_SECRET_KEY');
}
const stripe = Stripe(stripeKey);

app.post('/create-checkout-session', async (req, res) => {
  try {
    const { priceId } = req.body;
    if (!priceId) return res.status(400).json({ error: 'Missing priceId' });

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: `${req.headers.origin || `http://localhost:5173`}/success`,
      cancel_url: `${req.headers.origin || `http://localhost:5173`}/pricing`,
    });

    return res.json({ url: session.url });
  } catch (err) {
    console.error('Error creating checkout session', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Checkout server listening on http://localhost:${port}`);
});
