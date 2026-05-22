import React from 'react';
export function StripeCheckout() {
  const handleCheckout = async (priceId: string) => {
    try {
      const resp = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.error || 'Failed to create session');
      window.location.href = data.url;
    } catch (err) {
      console.error('Checkout error:', err);
    }
  };

  const handleStarterCheckout = () => handleCheckout('price_1TZp88AuA9eEFd62UHv6rybE');

  return { handleStarterCheckout, handleCheckout };
}

export default StripeCheckout;
