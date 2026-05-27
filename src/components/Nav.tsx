import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.svg';

const links = [
  { label: 'Home',       href: '#hero' },
  { label: 'Engine',     href: '#intelligence-engine' },
  { label: 'Platform',   href: '#platform' },
  { label: 'Pricing',    href: '#pricing' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section observer
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sectionIds = links.map((l) => l.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        let maxEntry = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxEntry = entry;
            maxRatio = entry.intersectionRatio;
          }
        });

        if (maxEntry) {
          const id = maxEntry.target.id;
          const match = links.find((l) => l.href === `#${id}`);
          if (match) setActive(match.label);
        } else if (window.scrollY < 100) {
          setActive(links[0].label);
        }
      },
      { threshold: 0.45 }
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

    const offset = 88;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 left-4 right-4 z-50"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled
            ? 'rgba(15, 28, 63, 0.7)'
            : 'rgba(15, 28, 63, 0.5)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
        }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between gap-2 px-4 py-2 rounded-full border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] max-w-7xl mx-auto"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 pl-3 pr-2 shrink-0">
          <img
            src={Logo}
            alt="Dataroes"
            className="h-12 w-12 ml-6"
            style={{ transform: 'scale(1.7)' }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 relative">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setActive(link.label);
                scrollToSection(link.href.replace('#', ''));
              }}
              className="relative px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-colors"
            >
              {active === link.label && (
                <motion.div
                  layoutId="navPill"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              <span
                className={`relative z-10 ${
                  active === link.label
                    ? 'text-navy-800'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-full text-white/90 hover:bg-white/5"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* CTA */}
        <button
          onClick={() => navigate('/product')}
          className="btn-shimmer bg-cobalt text-white px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold shadow-[0_0_20px_rgba(26,107,255,0.4)] hover:shadow-[0_0_30px_rgba(26,107,255,0.6)] transition-all flex items-center gap-1.5 shrink-0"
        >
          <span className="sm:inline">Dataroes PredictaCore</span>
        </button>
      </motion.div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className="md:hidden absolute left-4 right-4 top-20 z-40 bg-navy-900/95 backdrop-blur-lg rounded-xl border border-white/10 p-4 shadow-lg"
        >
          <div className="flex flex-col gap-3">
            {links.map((link) => {
              const isActive = active === link.label;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(link.label);
                    setMobileOpen(false);
                    scrollToSection(link.href.replace('#', ''));
                  }}
                  className={`px-3 py-3 rounded-lg flex items-center justify-between transition ${
                    isActive
                      ? 'bg-white text-navy-900 font-semibold'
                      : 'text-white/90 hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>

                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-cobalt" />
                  )}
                </a>
              );
            })}

            <button
              onClick={() => {
                setMobileOpen(false);
                navigate('/product');
              }}
              className="px-3 py-3 rounded-lg text-white/90 hover:bg-white/5 text-left"
            >
              Dataroes PredictaCore
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}