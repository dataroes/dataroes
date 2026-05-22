import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Zap, Circle, Sparkles, Star } from 'lucide-react';
export function Hero() {
  return (
    <section className="relative bg-navy-800 bg-grain bg-mesh pt-40 pb-32 overflow-hidden">
      {/* Ambient radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cobalt/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-cobalt/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Floating decorative orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-32 left-[8%] w-3 h-3 rounded-full bg-cobalt shadow-[0_0_20px_rgba(26,107,255,0.8)]" />
      
      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute top-48 right-[12%] w-2 h-2 rounded-full bg-teal shadow-[0_0_15px_rgba(0,212,170,0.8)]" />
      
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute top-80 left-[15%] w-2 h-2 rounded-full bg-white" />
      

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
        {/* Top Badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}
          className="relative inline-flex items-center gap-2 bg-cobalt/15 border border-cobalt/30 px-4 py-1.5 rounded-full mb-10 backdrop-blur-sm">
          
          <motion.div
            className="absolute inset-0 rounded-full bg-cobalt/20"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }} />
          
          <Sparkles
            className="w-3.5 h-3.5 text-cobalt-light relative"
            strokeWidth={2.5} />
          
          <span className="font-dm text-xs font-medium text-white tracking-wide relative">
            AI-Powered Predictive Analytics
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="font-syne text-5xl md:text-7xl lg:text-[88px] text-white leading-[1.05] tracking-tight mb-8 max-w-5xl">
          
          <motion.span
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="block font-medium text-white/90">
            
            Turn Your Data Into
          </motion.span>
          <motion.span
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.4
            }}
            className="font-extrabold relative inline-block">
            
            Tomorrow's Decisions.
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="14"
              viewBox="0 0 600 14"
              preserveAspectRatio="none">
              
              <motion.path
                d="M2 9 Q 150 2, 300 7 T 598 5"
                fill="none"
                stroke="#1A6BFF"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{
                  pathLength: 0
                }}
                animate={{
                  pathLength: 1
                }}
                transition={{
                  duration: 1.2,
                  delay: 1,
                  ease: 'easeOut'
                }} />
              
            </svg>
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.5
          }}
          className="font-dm text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
          
          Dataroes predicts business outcomes before they happen — giving your
          team the intelligence to act first, not react last.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10">
          
          <motion.button
            whileHover={{
              scale: 1.03,
              y: -2
            }}
            whileTap={{
              scale: 0.97
            }}
            className="btn-shimmer bg-cobalt text-white px-8 py-4 rounded-xl font-semibold shadow-[0_10px_40px_rgba(26,107,255,0.4)] hover:shadow-[0_15px_50px_rgba(26,107,255,0.6)] transition-shadow flex items-center gap-2 text-base">
            
            Start Free Trial
            <motion.span
              animate={{
                x: [0, 4, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}>
              
              →
            </motion.span>
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.03,
              y: -2
            }}
            whileTap={{
              scale: 0.97
            }}
            className="px-8 py-4 rounded-xl font-semibold text-white border border-white/15 hover:bg-white/5 hover:border-white/30 transition-colors flex items-center gap-2 text-base">
            
            Watch Demo <span className="text-xs">▶</span>
          </motion.button>
        </motion.div>

        {/* Trust Line */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.8
          }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-20">
          
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-dm text-xs text-slate-400 tracking-wide">
              SOC 2 Ready
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-dm text-xs text-slate-400 tracking-wide">
              Enterprise-Grade
            </span>
          </div>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.6, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}>
              
              <Circle className="w-3.5 h-3.5 text-teal fill-teal" />
            </motion.div>
            <span className="font-dm text-xs text-slate-400 tracking-wide">
              NVIDIA-Powered
            </span>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
