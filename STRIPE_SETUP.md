# Stripe Payment Integration Setup

## Overview
The Dataroes project now includes Stripe payment integration for the **Starter** pack ($299/month).

## Setup Details

### Account Information
- **Account Name**: Dataroes
- **Email**: support@dataroes.com
- **Country**: United States
- **Environment**: Test/Sandbox Mode

### Stripe Keys
The following keys are configured in `.env.local`:

```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
VITE_STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
```

**Restricted Key** (for backend use):
```
rk_test_YOUR_KEY_HERE
```

⚠️ **IMPORTANT**: Keep your actual Stripe keys in `.env.local` (which is in `.gitignore`). Never commit them to the repository!

## What's Configured

### 1. **Stripe Dependencies**
- `@stripe/react-stripe-js` - React wrapper for Stripe.js
- `@stripe/stripe-js` - Stripe.js library

### 2. **Environment Variables** (.env.local)
- Publishable key for client-side Stripe initialization
- Keys configured for test/sandbox mode

### 3. **Pricing Component** (src/components/Pricing.tsx)
- Integrated Stripe checkout functionality
- Starter plan ($299/mo) - "Get Started" button triggers checkout
- Growth plan ($899/mo) - Free trial checkout
- Enterprise plan - Email contact flow

### 4. **Checkout Flow**
- Clicking "Get Started" on Starter plan redirects to Stripe Hosted Checkout
- Clicking "Start Free Trial" on Growth plan redirects to Stripe Hosted Checkout
- Clicking "Contact Sales" on Enterprise plan opens email client

### 5. **Success Page** (src/pages/SuccessPage.tsx)
- Displays after successful payment
- Shows next steps for customers
- Links to support email

## Next Steps to Complete Integration

### 1. **Create Stripe Products & Prices**
You need to create the pricing in your Stripe Dashboard:

1. Go to [https://dashboard.stripe.com](https://dashboard.stripe.com)
2. Navigate to **Products** > **Create Product**

#### Starter Plan
- **Product Name**: Dataroes Starter Pack
- **Pricing**: $299/month (subscription)
- **Billing Period**: Monthly
- **Copy the Price ID** (starts with `price_`)

#### Growth Plan
- **Product Name**: Dataroes Growth Pack
- **Pricing**: $899/month (subscription)
- **Billing Period**: Monthly
- **Copy the Price ID**

### 2. **Update Price IDs in Code**
Replace the placeholder price IDs in `src/components/Pricing.tsx`:

```tsx
const plans = [
  {
    // ... other fields
    priceId: 'price_YOUR_STARTER_ID_HERE'  // Replace with actual ID
  },
  {
    // ... other fields
    priceId: 'price_YOUR_GROWTH_ID_HERE'   // Replace with actual ID
  },
  // Enterprise doesn't need a price ID
];
```

### 3. **Test the Integration**
1. Use Stripe test card numbers:
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`
   - Expiry: Any future date (e.g., 12/25)
   - CVC: Any 3 digits

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Navigate to the Pricing section and click "Get Started" on Starter plan

4. Complete the checkout form with test card details

5. You should be redirected to `/success` page

### 4. **Webhook Configuration** (Optional but Recommended)
To handle payment confirmations and customer events:

1. Go to **Developers** > **Webhooks** in Stripe Dashboard
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Subscribe to events:
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`

### 5. **Backend Integration** (For Production)
For production, you'll need a backend to:
- Create Stripe sessions server-side
- Store customer subscription data
- Handle webhooks for subscription events
- Manage customer accounts

Example with Node.js/Express (pseudo-code):
```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/api/checkout', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: req.body.priceId, quantity: 1 }],
    mode: 'subscription',
    success_url: 'https://yourdomain.com/success',
    cancel_url: 'https://yourdomain.com/pricing',
  });
  res.json({ url: session.url });
});
```

### 6. **Transition to Production**
When ready for production:

1. Generate new production API keys in Stripe Dashboard
2. Update `.env.local` with production keys
3. Update all URLs to use your production domain
4. Set up proper error handling and logging
5. Test thoroughly with real payment methods (in sandbox first)

## File Structure
```
src/
├── components/
│   ├── Pricing.tsx          # Updated with Stripe checkout
│   └── StripeCheckout.tsx   # Stripe checkout handler
├── pages/
│   └── SuccessPage.tsx      # Checkout success page
└── App.tsx                  # Added /success route

.env.local                    # Stripe API keys
```

## Testing Checklist
- [ ] Stripe packages installed
- [ ] Environment variables configured
- [ ] Pricing component loads without errors
- [ ] "Get Started" button appears on Starter plan
- [ ] Clicking button redirects to Stripe checkout
- [ ] Test checkout with test card (4242 4242 4242 4242)
- [ ] Redirects to /success page on completion
- [ ] Success page displays correctly
- [ ] Contact email link works on Enterprise plan

## Troubleshooting

### "Stripe is not defined"
- Ensure `VITE_STRIPE_PUBLISHABLE_KEY` is set in `.env.local`
- Restart dev server after adding env variables

### Checkout redirect not working
- Check browser console for errors
- Verify Stripe publishable key is correct
- Ensure price IDs exist in Stripe Dashboard

### Missing price IDs
- Create products and prices in Stripe Dashboard
- Copy exact price IDs (format: `price_xxxxx`)
- Update in Pricing.tsx

## Support
For questions or issues:
- Email: support@dataroes.com
- Stripe Docs: https://stripe.com/docs
- Stripe Dashboard: https://dashboard.stripe.com

---

**Last Updated**: May 2026
**Status**: Sandbox/Test Environment Ready
