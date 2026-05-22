import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

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

      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cobalt mb-4">
            {eyebrow}
          </p>
          <h1 className="font-syne text-4xl md:text-6xl font-bold tracking-tight text-navy-900 max-w-3xl">
            {title}
          </h1>
          <p className="mt-5 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
            {description}
          </p>

          <div className="mt-12 space-y-6">{children}</div>
        </div>
      </section>
    </main>
  );
}