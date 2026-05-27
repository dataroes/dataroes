import React from 'react';
import { motion } from 'framer-motion';
import PredictiveAnalyticsEngine from '../assets/Predictive Analytics Engine.webp';
import BusinessIntelligenceLayer from '../assets/Business Intelligence Layer.webp';
import RiskDetectionSystem from '../assets/Risk Detection System.webp';
import DecisionSupportSystem from '../assets/Decision Support System.webp';
export function CoreCapabilities() {
  return (
    <section className="py-24 bg-offwhite" id="models">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
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
            className="font-mono text-sm text-cobalt font-semibold tracking-widest uppercase mb-4">
            
            What Dataroes Does
          </motion.div>
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
            transition={{
              delay: 0.1
            }}
            className="font-syne text-4xl md:text-5xl font-bold text-primary leading-tight">
            
            Built for Predictive Intelligence at Enterprise Scale
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(280px,auto)]">
          {/* Card 1 - Wide */}
          <motion.div
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
              delay: 0.1,
              duration: 0.6
            }}
            whileHover={{
              y: -8
            }}
            className="md:col-span-4 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm transition-shadow hover:shadow-xl relative overflow-hidden group border-l-4 border-l-transparent hover:border-l-cobalt cursor-pointer">
            
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: -8
              }}
              transition={{
                type: 'spring',
                stiffness: 300
              }}
              className="w-12 h-12 rounded-xl bg-cobalt/10 flex items-center justify-center mb-6">
              
              <img src={PredictiveAnalyticsEngine} alt="Predictive Analytics Engine" className="w-10 h-10 object-contain border-none" />
            </motion.div>
            <h3 className="font-syne text-2xl font-bold text-primary mb-3">
              Predictive Analytics Engine
            </h3>
            <p className="font-dm text-muted max-w-md">
              Forecasts business trends and outcomes using historical and
              real-time AI modeling. Know tomorrow's performance today.
            </p>
            {/* Sparkline */}
            <div className="absolute bottom-0 right-0 w-2/3 h-32 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
              <svg
                viewBox="0 0 200 100"
                className="w-full h-full"
                preserveAspectRatio="none">
                
                <motion.path
                  d="M0 100 Q 40 80, 80 90 T 160 40 T 200 20 L 200 100 Z"
                  fill="url(#spark-grad)"
                  initial={{
                    opacity: 0
                  }}
                  whileInView={{
                    opacity: 1
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 1
                  }} />
                
                <motion.path
                  d="M0 100 Q 40 80, 80 90 T 160 40 T 200 20"
                  fill="none"
                  stroke="#1A6BFF"
                  strokeWidth="3"
                  initial={{
                    pathLength: 0
                  }}
                  whileInView={{
                    pathLength: 1
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: 0.4,
                    duration: 1.5,
                    ease: 'easeOut'
                  }} />
                
                <defs>
                  <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1A6BFF" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#1A6BFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Card 2 - Tall/Square */}
          <motion.div
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
              delay: 0.2,
              duration: 0.6
            }}
            whileHover={{
              y: -8
            }}
            className="md:col-span-2 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm transition-shadow hover:shadow-xl group border-l-4 border-l-transparent hover:border-l-cobalt cursor-pointer">
            
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 8
              }}
              transition={{
                type: 'spring',
                stiffness: 300
              }}
              className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-6">
              
              <img src={BusinessIntelligenceLayer} alt="Business Intelligence Layer" className="w-10 h-10 object-contain border-none" />
            </motion.div>
            <h3 className="font-syne text-2xl font-bold text-primary mb-3">
              Business Intelligence Layer
            </h3>
            <p className="font-dm text-muted">
              Converts raw enterprise data into structured executive-level
              insights and automated reporting pipelines.
            </p>
          </motion.div>

          {/* Card 3 - Tall/Square */}
          <motion.div
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
              delay: 0.3,
              duration: 0.6
            }}
            whileHover={{
              y: -8
            }}
            className="md:col-span-2 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm transition-shadow hover:shadow-xl relative overflow-hidden group border-l-4 border-l-transparent hover:border-l-orange cursor-pointer">
            
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: -8
              }}
              transition={{
                type: 'spring',
                stiffness: 300
              }}
              className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-6">
              
              <img src={RiskDetectionSystem} alt="Risk Detection System" className="w-10 h-10 object-contain border-none" />
            </motion.div>
            <h3 className="font-syne text-2xl font-bold text-primary mb-3">
              Risk Detection System
            </h3>
            <p className="font-dm text-muted relative z-10">
              Identifies financial and operational risks before they escalate.
              Detects anomalies in real time.
            </p>
            {/* Anomaly Chart */}
            <div className="absolute bottom-4 right-4 w-32 h-16 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              <svg
                viewBox="0 0 100 50"
                className="w-full h-full overflow-visible">
                
                <motion.path
                  d="M0 40 L 20 42 L 40 38 L 50 10 L 60 40 L 80 41 L 100 39"
                  fill="none"
                  stroke="#5A6A8A"
                  strokeWidth="2"
                  initial={{
                    pathLength: 0
                  }}
                  whileInView={{
                    pathLength: 1
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 1.2
                  }} />
                
                <motion.circle
                  cx="50"
                  cy="10"
                  r="4"
                  fill="#FF6B35"
                  initial={{
                    scale: 0
                  }}
                  whileInView={{
                    scale: [0, 1.5, 1]
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: 1.5,
                    duration: 0.6
                  }} />
                
                <motion.circle
                  cx="50"
                  cy="10"
                  r="4"
                  fill="#FF6B35"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.6, 0, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }} />
                
              </svg>
            </div>
          </motion.div>

          {/* Card 4 - Wide */}
          <motion.div
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
              delay: 0.4,
              duration: 0.6
            }}
            whileHover={{
              y: -8
            }}
            className="md:col-span-4 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm transition-shadow hover:shadow-xl group border-l-4 border-l-transparent hover:border-l-cobalt cursor-pointer">
            
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 8
              }}
              transition={{
                type: 'spring',
                stiffness: 300
              }}
              className="w-12 h-12 rounded-xl bg-cobalt/10 flex items-center justify-center mb-6">
              
              <img src={DecisionSupportSystem} alt="Decision Support System" className="w-10 h-10 object-contain border-none" />
            </motion.div>
            <h3 className="font-syne text-2xl font-bold text-primary mb-3">
              Decision Support System
            </h3>
            <p className="font-dm text-muted max-w-md">
              Suggests data-driven actions mapped to strategic KPIs. Turns
              analysis into executable decisions with clear impact projections.
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

}