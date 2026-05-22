import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { SocialIcons } from './ui/SocialIcons';
export function Footer() {
  return (
    <footer className="bg-navy-900 bg-grain pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Left Col */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <img src={Logo} alt="Dataroes" className="h-24 w-24" />
            </div>
            <p className="font-dm text-sm text-slate-400 max-w-xs leading-relaxed">
              AI-powered predictive intelligence for the modern enterprise.
              Predict. Decide. Dominate.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-mono text-xs text-white uppercase tracking-wider mb-4">
                Platform
              </h4>
              <ul className="space-y-3">
                {[
                'Intelligence Engine',
                'Predictive Models',
                'Integrations',
                'Security'].
                map((link) =>
                <li key={link}>
                    <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors">
                    
                      {link}
                    </a>
                  </li>
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs text-white uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-sm text-slate-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs text-white uppercase tracking-wider mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    SOC 2 Report
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2025 Dataroes. All rights reserved.
          </p>
          <div className="bg-teal/10 border border-teal/20 px-3 py-1 rounded-full">
            <span className="font-mono text-xs text-teal uppercase tracking-wider">
              Developer API — Coming Soon
            </span>
          </div>
        </div>
      </div>
    </footer>);

}