import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
const problems = [
'Backward-looking reports',
'Poor forecasting accuracy',
'Fragmented analytics tools',
'Reactive decision-making'];

const solutions = [
'AI predictive models',
'Real-time trend forecasting',
'Unified intelligence engine',
'Proactive strategic decisions'];

export function ProblemSolution() {
  return (
    <section id="integrations" className="py-24 bg-offwhite relative z-0">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-0 relative">
          {/* Vertical Divider (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

          {/* Left Column - Problems */}
          <div className="md:pr-16 space-y-6">
            {problems.map((text, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}
              className="flex items-center gap-4 opacity-60 grayscale">
              
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                  <X className="w-4 h-4 text-slate-500" />
                </div>
                <span className="font-dm text-lg text-slate-600 line-through decoration-slate-300">
                  {text}
                </span>
              </motion.div>
            )}
          </div>

          {/* Right Column - Solutions */}
          <div className="md:pl-16 space-y-6">
            {solutions.map((text, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.1
              }}
              className="flex items-center gap-4">
              
                <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,212,170,0.2)]">
                  <Check className="w-4 h-4 text-teal" strokeWidth={3} />
                </div>
                <span className="font-dm text-lg font-medium text-primary">
                  {text}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}