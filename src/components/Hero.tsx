import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero.webp';

const GRID_COLS = 12;
const GRID_ROWS = 8;

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: GRID_COLS + 1 }).map((_, i) => (
        <div key={`v-${i}`} className="absolute top-0 bottom-0 border-l border-white/[0.04]"
          style={{ left: `${(i / GRID_COLS) * 100}%` }} />
      ))}
      {Array.from({ length: GRID_ROWS + 1 }).map((_, i) => (
        <div key={`h-${i}`} className="absolute left-0 right-0 border-t border-white/[0.04]"
          style={{ top: `${(i / GRID_ROWS) * 100}%` }} />
      ))}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(26,107,255,0.20) 0%, transparent 70%)' }} />
      <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%)' }} />
      <div className="absolute left-0 bottom-0 w-[350px] h-[350px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(26,107,255,0.10) 0%, transparent 70%)' }} />
      <div className="absolute top-32 left-[10%] w-4 h-4 rounded-full dot1" style={{ background: '#1A6BFF', opacity: 0.5 }} />
      <div className="absolute top-60 right-[14%] w-3 h-3 rounded-full dot2" style={{ background: '#14B8A6', opacity: 0.4 }} />
      <div className="absolute top-96 left-[18%] w-3 h-3 rounded-full bg-white dot3" style={{ opacity: 0.25 }} />
    </div>
  );
}

function CountUp({ target, suffix = '', duration = 1.8 }: any) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [target, duration]);
  return <>{display}{suffix}</>;
}

const badges = [
  { icon: '⬡', text: 'SOC 2 Ready' },
  { icon: '', text: 'NVIDIA Powered' },
  { icon: '◉', text: 'Enterprise Grade' },
];

const marqueeItems = [
  'Predictive forecasting', 'Anomaly detection', 'Real-time dashboards',
  'ML pipeline automation', 'Business intelligence', 'Data orchestration',
];

const COBALT = '#1A6BFF';
const TEAL   = '#14B8A6';

export function Hero() {
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const navigate = useNavigate();

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const rotateX = useTransform(mouseY, [-300, 300], [4, -4]);
  const rotateY = useTransform(mouseX, [-400, 400], [-4, 4]);

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 lg:pt-28"
      style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1530 50%, #0f2060 100%)' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500&family=DM+Mono&display=swap');
        @keyframes shimmer-cobalt { 0%{background-position:0% center} 100%{background-position:200% center} }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes ping-dot { 0%{transform:scale(1);opacity:0.75} 75%,100%{transform:scale(2);opacity:0} }
        .ping-anim { animation: ping-dot 1.5s cubic-bezier(0,0,.2,1) infinite; }
        @keyframes float1 { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(-30px);opacity:.8} }
        @keyframes float2 { 0%,100%{transform:translateY(0);opacity:.3} 50%{transform:translateY(20px);opacity:.7} }
        @keyframes float3 { 0%,100%{transform:translateY(0);opacity:.2} 50%{transform:translateY(-15px);opacity:.6} }
        .dot1 { animation: float1 7s ease-in-out infinite; }
        .dot2 { animation: float2 6s ease-in-out infinite 1s; }
        .dot3 { animation: float3 8s ease-in-out infinite 2s; }
        @keyframes underline-draw { from{stroke-dashoffset:600} to{stroke-dashoffset:0} }
        .underline-path { stroke-dasharray:600; animation: underline-draw 1.2s 1s ease-out forwards; }
      `}</style>

      <GridBackground />

      {/* Corner accents */}
      {['top-8 left-8', 'top-8 right-8', 'bottom-8 left-8', 'bottom-8 right-8'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-6 h-6`} style={{ opacity: 0.35 }} aria-hidden="true">
          <div className={`absolute w-full h-px ${i < 2 ? 'top-0' : 'bottom-0'}`} style={{ background: COBALT }} />
          <div className={`absolute h-full w-px ${i % 2 === 0 ? 'left-0' : 'right-0'}`} style={{ background: COBALT }} />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full pt-24 pb-20">

        {/* Eyebrow / status bar */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-16"
        >
          <div className="relative flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="ping-anim absolute inline-flex h-full w-full rounded-full" style={{ background: TEAL }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: TEAL }} />
            </span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.12em', color: TEAL }}
              className="uppercase">Live platform · v3.2</span>
          </div>
          <div className="h-px flex-1 max-w-[120px]" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.1em' }}
            className="text-white/30 uppercase">AI Predictive Analytics</span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(48px, 7vw, 88px)',
                lineHeight: 1.0, letterSpacing: '-0.02em', fontWeight: 700,
              }} className="text-white mb-2">
                Turn Your Data Into
              </h1>

              <div className="relative inline-block">
                <h1 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(48px, 7vw, 88px)',
                  lineHeight: 1.0, letterSpacing: '-0.02em', fontWeight: 700,
                  background: `linear-gradient(110deg, ${COBALT} 0%, ${TEAL} 60%, ${COBALT} 100%)`,
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  animation: 'shimmer-cobalt 4s linear infinite',
                }}>
                  Tomorrow's Decisions.
                </h1>
                <svg className="absolute -bottom-3 left-0 w-full" height="18" viewBox="0 0 600 18" preserveAspectRatio="none">
                  <path d="M2 13 Q 150 2, 300 12 T 598 10" fill="none" stroke={COBALT}
                    strokeWidth="5" strokeLinecap="round" className="underline-path" />
                </svg>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-4 mt-10 mb-8 origin-left"
            >
              <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.12)' }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.15em' }}
                className="text-white/30 uppercase shrink-0">Dataroes</span>
              <div className="h-px w-8" style={{ background: 'rgba(255,255,255,0.12)' }} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '18px', lineHeight: 1.75 }}
              className="text-slate-300 max-w-xl mb-10"
            >
              Dataroes predicts business outcomes before they happen — giving your team the intelligence to act first, not react last.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
                onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}
                onClick={() => navigate('/product')}
                className="relative overflow-hidden flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-bold text-lg"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: `linear-gradient(135deg, ${COBALT}, ${TEAL})`,
                  boxShadow: `0 0 0 2px rgba(26,107,255,0.4), 0 8px 32px rgba(26,107,255,0.3)`,
                  border: `2px solid rgba(26,107,255,0.4)`,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill="rgba(255,255,255,0.9)" />
                </svg>
                Start Free Trial
                <motion.span animate={{ x: hovered ? 6 : 0 }} transition={{ duration: 0.2 }}>→</motion.span>
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-bold text-lg"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  border: '2px solid rgba(255,255,255,0.20)',
                  backgroundColor: 'transparent',
                }}
                onClick={() => window.open('https://www.youtube.com/@Dataroes', '_blank', 'noopener,noreferrer')}
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full"
                  style={{ background: `rgba(26,107,255,0.25)`, border: `1px solid rgba(26,107,255,0.5)` }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <polygon points="2,1 9,5 2,9" fill={COBALT} />
                  </svg>
                </span>
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-3"
            >
              {badges.map((b, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    border: '1px solid rgba(255,255,255,0.10)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
                  }}>
                  <span style={{ color: COBALT, fontSize: '12px' }}>{b.icon}</span>
                  <span className="text-slate-200">{b.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: hero image with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ rotateX, rotateY, perspective: 1000, transformStyle: 'preserve-3d' }}
          className="flex justify-center lg:justify-end -mt-[400px]"
          >
            {/* Glow behind image */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-40"
                style={{ background: `linear-gradient(135deg, ${COBALT}, ${TEAL})` }} />
              <img
                src={heroImage}
                alt="Dataroes platform preview"
                className="relative rounded-2xl w-full max-w-md lg:max-w-lg object-cover"
                style={{
                  border: '1px solid rgba(26,107,255,0.3)',
                  boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Marquee strip */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          className="mt-20 overflow-hidden"
          style={{ borderTop: '1px solid rgba(26,107,255,0.15)', paddingTop: '20px' }}
        >
          <div className="flex gap-16 whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite' }}>
            {Array(3).fill(marqueeItems).flat().map((item, i) => (
              <span key={i}
                style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.1em' }}
                className="text-white/20 uppercase shrink-0">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}