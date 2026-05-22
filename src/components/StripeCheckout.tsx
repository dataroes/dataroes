import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

export function StripeCheckout() {
  const handleCheckout = async (priceId: string) => {
    const stripe = await stripePromise;

    if (!stripe) {
      console.error('Stripe failed to load');
      return;
    }

    // Redirect to Stripe Hosted Checkout
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/pricing`,
    });

    if (error) {
      console.error('Error redirecting to checkout:', error);
    }
  };

  const handleStarterCheckout = () => {
    // Starter pack - $299/month
    // Price ID format: price_xxxxx (replace with actual Stripe price ID)
    // For testing, using a mock price ID - update after creating price in Stripe dashboard
    handleCheckout('price_1TZos4AuA9eEFd62aBcD1234'); // Replace with actual price ID
  };

  return { handleStarterCheckout, handleCheckout };
}

export default StripeCheckout;
