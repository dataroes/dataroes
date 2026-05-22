import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, AlertCircle } from 'lucide-react';
export function DashboardPreview() {
  return (
    <section
      className="py-32 bg-offwhite overflow-hidden relative"
      id="platform">
      
      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
          'linear-gradient(#0D1B3E 1px, transparent 1px), linear-gradient(90deg, #0D1B3E 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
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
            
            ◆ The Platform
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
            
            The Command Center for Predictive Intelligence
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
              delay: 0.2
            }}
            className="font-dm text-lg text-muted mt-6">
            
            Every metric, forecast, and risk signal — unified in one intelligent
            workspace.
          </motion.p>
        </div>

        {/* Browser Mockup */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            rotateX: 15
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="relative max-w-5xl mx-auto"
          style={{
            perspective: '1500px'
          }}>
          
          {/* Glow */}
          <div className="absolute -inset-10 bg-cobalt/30 blur-[120px] rounded-full transform translate-y-20"></div>
          <div className="absolute -inset-20 bg-teal/15 blur-[120px] rounded-full transform translate-y-32"></div>

          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="relative w-full rounded-xl bg-navy-900 border border-slate-700/50 shadow-[0_40px_100px_rgba(0,0,0,0.3)] overflow-hidden">
            
            {/* Browser Chrome */}
            <div className="h-12 bg-navy-800 border-b border-white/10 flex items-center px-4 gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-navy-900/50 border border-white/5 rounded-md px-4 py-1.5 flex items-center gap-2 min-w-[280px] justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal/60"></div>
                  <span className="font-mono text-xs text-slate-400">
                    app.dataroes.ai/dashboard
                  </span>
                </div>
              </div>
              <div className="w-16"></div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1600&q=80"
                alt="Dataroes dashboard view"
                className="w-full h-auto block" />
              

              {/* Floating callouts on top */}
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
                  delay: 0.8
                }}
                className="absolute top-8 left-8 flex items-center gap-2 bg-navy-900/90 backdrop-blur-md border border-cobalt/40 px-3 py-2 rounded-lg">
                
                <TrendingUp className="w-4 h-4 text-cobalt-light" />
                <div>
                  <div className="font-mono text-[9px] text-teal uppercase tracking-wider">
                    Forecast
                  </div>
                  <div className="font-mono text-xs text-white">$24.8M</div>
                </div>
              </motion.div>

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
                  delay: 1
                }}
                className="absolute top-8 right-8 flex items-center gap-2 bg-navy-900/90 backdrop-blur-md border border-orange/40 px-3 py-2 rounded-lg">
                
                <AlertCircle className="w-4 h-4 text-orange" />
                <div>
                  <div className="font-mono text-[9px] text-orange uppercase tracking-wider">
                    Risk
                  </div>
                  <div className="font-mono text-xs text-white">2.3 / Low</div>
                </div>
              </motion.div>

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
                  delay: 1.2
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-navy-900/90 backdrop-blur-md border border-teal/30 px-4 py-2 rounded-full">
                
                <Sparkles className="w-3.5 h-3.5 text-teal" />
                <span className="font-mono text-xs text-white">
                  94.2% Prediction Accuracy
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}