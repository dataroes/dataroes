import React from 'react';
import Logo from '../assets/Logo.svg';

export default function ProductNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/90 backdrop-blur-md border-b border-white/10 px-4 py-2 flex items-center justify-between shadow-md">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <img src={Logo} alt="Dataroes" className="h-14 w-14" />
      </a>
      <div className="flex items-center gap-4">
        <a href="/" className="text-white text-base font-medium hover:text-teal transition-colors px-3 py-1 rounded">Home</a>
        <a href="/#contact" className="text-white text-base font-medium hover:text-teal transition-colors px-3 py-1 rounded">Contact Us</a>
      </div>
    </nav>
  );
}
