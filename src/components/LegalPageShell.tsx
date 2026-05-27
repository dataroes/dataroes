import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { Footer } from './Footer';

type LegalPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function LegalPageShell({
  eyebrow,
  title,
  description,
  children
}: LegalPageShellProps) {
  return (
    <main className="min-h-screen bg-offwhite selection:bg-cobalt selection:text-white">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-offwhite/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="Dataroes" className="h-12 w-12" />
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-navy-900 hover:text-cobalt transition-colors"
          >
            Back to home
          </Link>
        </div>
      </header>

      <section className="py-20 md:py-24 bg-offwhite">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cobalt mb-4">
            {eyebrow}
          </p>
          <h1 className="font-syne text-4xl md:text-6xl font-bold tracking-tight text-navy-900">
            {title}
          </h1>
          <p className="mt-5 text-slate-600 text-base md:text-lg leading-relaxed">
            {description}
          </p>

          <div className="mt-12">
            <div className="rounded-2xl bg-white border border-slate-100 p-8 shadow-sm">
              {children}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}