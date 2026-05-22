import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

const plans = [
{
  name: 'Starter',
  price: '$299',
  period: '/mo',
  desc: 'For growing teams beginning with predictive analytics',
  features: [
  '5 data sources',
  'Core forecasting',
  'Standard BI reports',
  'Email support'],

  cta: 'Get Started',
  style: 'outline',
  priceId: 'price_1TZos4AuA9eEFd62starter'
},
{
  name: 'Growth',
  price: '$899',
  period: '/mo',
  desc: 'For scaling enterprises needing advanced intelligence',
  features: [
  '25 data sources',
  'Advanced AI models',
  'Custom dashboards',
  'Risk detection',
  'Priority support'],

  cta: 'Start Free Trial',
  style: 'popular',
  priceId: 'price_1TZos4AuA9eEFd62growth'
},
{
  name: 'Enterprise',
  price: 'Custom',
  period: '',
  desc: 'For large organizations with complex data needs',
  features: [
  'Unlimited data sources',
  'Custom AI training',
  'Dedicated infrastructure',
  'API licensing',
  'Dedicated CSM'],

  cta: 'Contact Sales',
  style: 'navy'
}];

export function Pricing() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async (priceId?: string) => {
    if (!priceId) {
      // Contact sales flow
      window.location.href = 'mailto:support@dataroes.com?subject=Enterprise%20Plan%20Inquiry';
      return;
    }

    setIsLoading(true);
    try {
      const stripe = await stripePromise;

      if (!stripe) {
        console.error('Stripe failed to load');
        return;
      }

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
        alert('Failed to redirect to checkout. Please try again.');
      }
    } catch (err) {
      console.error('Checkout error:', err);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <section className="py-24 bg-offwhite" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="font-syne text-4xl font-bold text-primary mb-4">
            
            Transparent, Scalable Intelligence Plans
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="font-dm text-muted max-w-xl mx-auto">
            
            Start predicting outcomes today. Scale your intelligence engine as
            your enterprise grows.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => {
            const isPopular = plan.style === 'popular';
            return (
              <motion.div
                key={plan.name}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: idx * 0.15,
                  duration: 0.6
                }}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.3
                  }
                }}
                className={`relative rounded-2xl p-8 ${isPopular ? 'bg-white border-2 border-cobalt shadow-xl md:scale-105 z-10 bg-cobalt/[0.02]' : 'bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow'}`}>
                
                {/* Pulsing glow for popular */}
                {isPopular &&
                <motion.div
                  className="absolute -inset-0.5 rounded-2xl bg-cobalt/30 blur-xl -z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }} />

                }

                {isPopular &&
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: 0.4,
                    type: 'spring'
                  }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cobalt text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg shadow-cobalt/40">
                  
                    Most Popular
                  </motion.div>
                }

                <h3 className="font-syne text-2xl font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="font-dm text-sm text-muted mb-6 h-10">
                  {plan.desc}
                </p>
                <div className="mb-6">
                  <span className="font-mono text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted">{plan.period}</span>
                </div>
                <motion.button
                  whileHover={{
                    scale: 1.02
                  }}
                  whileTap={{
                    scale: 0.98
                  }}
                  onClick={() => handleCheckout(plan.priceId)}
                  disabled={isLoading}
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all disabled:opacity-60 disabled:cursor-not-allowed ${plan.style === 'popular' ? 'btn-shimmer text-white bg-cobalt shadow-lg shadow-cobalt/25 hover:shadow-cobalt/40' : plan.style === 'navy' ? 'text-white bg-navy-800 hover:bg-navy-900' : 'text-primary border border-slate-200 hover:bg-slate-50'}`}>
                  
                  {isLoading ? 'Processing...' : plan.cta}
                </motion.button>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) =>
                  <motion.li
                    key={i}
                    initial={{
                      opacity: 0,
                      x: -10
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      delay: 0.4 + idx * 0.1 + i * 0.08
                    }}
                    className="flex items-center gap-3 text-sm text-slate-600">
                    
                      <div className="w-5 h-5 rounded-full bg-cobalt/10 flex items-center justify-center shrink-0">
                        <Check
                        className="w-3 h-3 text-cobalt"
                        strokeWidth={3} />
                      
                      </div>
                      {feature}
                    </motion.li>
                  )}
                </ul>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}