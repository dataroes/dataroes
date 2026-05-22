import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-800 to-navy-900 flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-xl">
        
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <Check className="w-10 h-10 text-emerald-400" strokeWidth={3} />
          </div>
        </motion.div>

        <h1 className="font-syne text-4xl font-bold text-white mb-4">
          Payment Successful! 🎉
        </h1>

        <p className="font-dm text-lg text-slate-300 mb-8">
          Your Dataroes subscription is now active. You'll receive a confirmation
          email shortly with your account details and next steps.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 text-left">
          <h3 className="font-semibold text-white mb-3">What's next?</h3>
          <ul className="space-y-2 text-slate-300 font-dm text-sm">
            <li>✓ Check your email for account credentials</li>
            <li>✓ Log in to your Dataroes dashboard</li>
            <li>✓ Connect your first data source</li>
            <li>✓ Start generating predictions</li>
          </ul>
        </div>

        <div className="flex gap-4 flex-col sm:flex-row justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/')}
            className="px-8 py-3 rounded-lg bg-cobalt text-white font-semibold hover:bg-cobalt-light transition-colors inline-flex items-center justify-center gap-2">
            
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:support@dataroes.com"
            className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors inline-flex items-center justify-center">
            
            Contact Support
          </motion.a>
        </div>

        <p className="text-slate-400 font-dm text-sm mt-8">
          Questions? Reach out to{' '}
          <a href="mailto:support@dataroes.com" className="text-cobalt hover:underline">
            support@dataroes.com
          </a>
        </p>
      </motion.div>
    </div>
  );
}

export default SuccessPage;
