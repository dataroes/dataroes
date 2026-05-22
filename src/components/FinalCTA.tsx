import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
export function FinalCTA() {
  return (
    <section className="relative py-32 bg-navy-800 bg-grain bg-mesh clip-top overflow-hidden">
      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-cobalt shadow-[0_0_20px_rgba(26,107,255,0.8)]" />
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute top-40 right-[15%] w-2 h-2 rounded-full bg-teal shadow-[0_0_15px_rgba(0,212,170,0.8)]" />
      
      <motion.div
        animate={{
          y: [0, -15, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute bottom-32 left-[20%] w-2 h-2 rounded-full bg-white/50" />
      
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-40 right-[10%] w-4 h-4 rounded-full bg-cobalt/40 blur-sm" />
      

      {/* Center radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cobalt/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
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
            duration: 0.8
          }}
          className="font-syne text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          
          {'Your Competitors Are Already Using Predictive AI.'.
          split(' ').
          map((word, i) =>
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              y: 20,
              filter: 'blur(8px)'
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)'
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.08
            }}
            className="inline-block mr-3">
            
                {word === 'Predictive' || word === 'AI.' ?
            <span className="text-cobalt-light">{word}</span> :

            word
            }
              </motion.span>
          )}
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
            delay: 0.5
          }}
          className="font-dm text-xl text-slate-300 mb-10">
          
          Don't make decisions based on yesterday's data.
        </motion.p>

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
            delay: 0.7
          }}
          className="flex flex-wrap justify-center gap-4 mb-16">
          
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2
            }}
            whileTap={{
              scale: 0.97
            }}
            className="btn-shimmer bg-cobalt text-white px-8 py-4 rounded-xl font-semibold shadow-[0_10px_40px_rgba(26,107,255,0.4)] hover:shadow-[0_15px_50px_rgba(26,107,255,0.6)] transition-shadow text-lg">
            
            Request a Demo
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2
            }}
            whileTap={{
              scale: 0.97
            }}
            className="px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/5 hover:border-white/40 transition-colors text-lg">
            
            Explore the Platform
          </motion.button>
        </motion.div>

        <motion.button
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
            delay: 0.85
          }}
          whileHover={{
            scale: 1.02,
            y: -2
          }}
          whileTap={{
            scale: 0.98
          }}
          className="w-full max-w-3xl mx-auto block rounded-2xl border border-cobalt/40 bg-cobalt/10 px-6 py-4 text-center text-base md:text-lg font-semibold text-white shadow-[0_10px_40px_rgba(26,107,255,0.18)] transition-colors hover:bg-cobalt/15">
          Make forecasting easier, faster, and smarter with Dataroes PredictIQ.
        </motion.button>

        <motion.div
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
            delay: 0.9
          }}
          className="border-t border-white/10 pt-12">
          
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0,
                rotate: -180
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 1 + i * 0.1,
                type: 'spring',
                stiffness: 200
              }}>
              
                <Star className="w-5 h-5 text-teal fill-teal" />
              </motion.div>
            )}
          </div>
          <p className="font-dm text-sm text-slate-400 mb-8">
            Trusted by 500+ enterprise teams worldwide
          </p>

          {/* Logos */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
            {['NORTHWIND', 'ATLAS', 'MERIDIAN', 'VANTA', 'HELIOS'].map(
              (logo, i) =>
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 10
                }}
                whileInView={{
                  opacity: 0.6,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 1.4 + i * 0.1
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  color: '#fff'
                }}
                className="font-syne font-bold text-xl text-slate-300 tracking-widest cursor-pointer transition-colors">
                
                  {logo}
                </motion.div>

            )}
          </div>
        </motion.div>
      </div>
    </section>);

}