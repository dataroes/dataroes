import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import EnterpriseDataSources from '../assets/Enterprise Data Sources.svg';
import IngestionLayer from '../assets/Ingestion Layer.svg';
import AIPredictiveModels from '../assets/AI Predictive Models.svg';
import IntelligenceEngine from '../assets/Intelligence Engine.svg';
import ExecutiveDashboard from '../assets/Executive Dashboard.svg';
import { CountUp } from './ui/CountUp';
const nodes = [
  {
    icon: EnterpriseDataSources,
    label: 'Enterprise Data Sources',
    sub: 'APIs, SQL, CSVs'
  },
  {
    icon: IngestionLayer,
    label: 'Ingestion Layer',
    sub: 'Real-time stream'
  },
  {
    icon: AIPredictiveModels,
    label: 'AI Predictive Models',
    sub: 'Deep learning'
  },
  {
    icon: IntelligenceEngine,
    label: 'Intelligence Engine',
    sub: 'Risk & Forecasting'
  },
  {
    icon: ExecutiveDashboard,
    label: 'Executive Dashboard',
    sub: 'Actionable UI'
  }
];

export function HowItWorks() {
  return (
    <section
      className="py-32 bg-navy-800 bg-grain clip-both relative z-10"
      id="intelligence-engine">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 px-4 py-1.5 rounded-full mb-6">
            
            <span className="text-teal text-sm">⚡</span>
            <span className="font-mono text-xs text-teal uppercase tracking-wider">
              Powered by NVIDIA SDK
            </span>
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
            className="font-syne text-4xl md:text-5xl font-bold text-white leading-tight">
            
            How the Dataroes Intelligence Engine Works
          </motion.h2>
        </div>

        {/* Flow Diagram */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2 mb-24">
          {nodes.map((node, i) =>
          <Fragment key={i}>
              {/* Node */}
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
              transition={{
                delay: i * 0.15
              }}
              className="relative z-10 flex flex-col items-center w-full md:w-48 bg-navy-900/80 backdrop-blur-sm border border-cobalt/30 rounded-xl p-5 shadow-[0_0_20px_rgba(26,107,255,0.1)]">
              
                <div className="w-10 h-10 rounded-lg bg-navy-700 flex items-center justify-center mb-3 border border-white/5">
                  <img src={node.icon} alt={node.label} className="w-7 h-7 object-contain border-none" />
                </div>
                <div className="font-dm text-sm font-semibold text-white text-center mb-1">
                  {node.label}
                </div>
                <div className="font-mono text-[10px] text-slate-400 text-center uppercase">
                  {node.sub}
                </div>
              </motion.div>

              {/* Connecting Line (hidden on mobile, visible on desktop) */}
              {i < nodes.length - 1 &&
            <div className="hidden md:block flex-1 relative h-px min-w-[40px]">
                  <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                  strokeDasharray="4 4" />
                
                    {/* Animated dot */}
                    <circle r="3" fill="#00D4AA" cy="0">
                      <animate
                    attributeName="cx"
                    values="0; 100%"
                    dur="2s"
                    repeatCount="indefinite" />
                  
                    </circle>
                  </svg>
                </div>
            }

              {/* Vertical arrow for mobile */}
              {i < nodes.length - 1 &&
            <div className="md:hidden h-8 w-px bg-gradient-to-b from-cobalt to-transparent"></div>
            }
            </Fragment>
          )}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16">
          <div className="text-center">
            <div className="font-syne text-5xl font-bold text-white mb-2">
              <CountUp end={10} suffix="×" />
            </div>
            <div className="font-mono text-sm text-slate-400 uppercase tracking-wider">
              Faster Forecasting
            </div>
          </div>
          <div className="text-center">
            <div className="font-syne text-5xl font-bold text-white mb-2">
              <CountUp end={94} suffix="%" />
            </div>
            <div className="font-mono text-sm text-slate-400 uppercase tracking-wider">
              Prediction Accuracy
            </div>
          </div>
          <div className="text-center">
            <div className="font-syne text-5xl font-bold text-white mb-2">
              &lt;
              <CountUp end={50} suffix="ms" />
            </div>
            <div className="font-mono text-sm text-slate-400 uppercase tracking-wider">
              Real-Time Latency
            </div>
          </div>
        </div>
      </div>
    </section>);

}