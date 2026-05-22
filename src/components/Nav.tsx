import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.svg';
const links = [
{
  label: 'Features',
  href: '#features'

},
{
  label: 'Platform',
  href: '#platform'
},
{
  label: 'Engine',
  href: '#intelligence-engine'
},
{
  label: 'Pricing',
  href: '#pricing'
}];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Platform');
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Observe sections and update active nav pill based on scroll position
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const sectionIds = links.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const match = links.find((l) => l.href === `#${id}`);
            if (match) setActive(match.label);
          }
        });
      },
      { root: null, threshold: 0.45 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    // offset to account for fixed nav height
    const offset = 88;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };
  return (
    <motion.nav
      initial={{
        y: -80,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="fixed top-5 left-4 right-4 z-50">
      
      <motion.div
        animate={{
          backgroundColor: scrolled ?
          'rgba(15, 28, 63, 0.7)' :
          'rgba(15, 28, 63, 0.5)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)'
        }}
        transition={{
          duration: 0.3
        }}
        className="flex items-center justify-between gap-2 px-4 py-2 rounded-full border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] max-w-7xl mx-auto"
        style={{
          backdropFilter: 'blur(20px)'
        }}>
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 pl-3 pr-2 shrink-0">
          <img src={Logo} alt="Dataroes" className="h-12 w-12" />
        </a>

        {/* Center pill links */}
        <div className="flex items-center gap-1 relative">
          {links.map((link) =>
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              setActive(link.label);
              scrollToSection(link.href.replace('#', ''));
            }}
            className="relative px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-colors">
            
              {active === link.label &&
            <motion.div
              layoutId="navPill"
              className="absolute inset-0 bg-white rounded-full"
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30
              }} />

            }
              <span
              className={`relative z-10 ${active === link.label ? 'text-navy-800' : 'text-white/80 hover:text-white'}`}>
              
                {link.label}
              </span>
            </a>
          )}
          <span className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-white/40">
            Docs
            <span className="text-[9px] uppercase tracking-wider bg-white/10 text-white/50 px-1.5 py-0.5 rounded-full">
              Soon
            </span>
          </span>
        </div>

        {/* CTA */}
        <a
          href="#"
          className="btn-shimmer bg-cobalt text-white pl-4 pr-4 py-2.5 rounded-full text-xs md:text-sm font-semibold shadow-[0_0_20px_rgba(26,107,255,0.4)] hover:shadow-[0_0_30px_rgba(26,107,255,0.6)] transition-all flex items-center gap-1.5 shrink-0">
          
          <span className="hidden sm:inline">Dashboard</span>
          <span>→</span>
        </a>
      </motion.div>
    </motion.nav>);

}