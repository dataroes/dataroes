import React from 'react';
import { LegalPageShell } from '../components/LegalPageShell';

export function AboutUsPage() {
  return (
    <LegalPageShell
      eyebrow="About Us"
      title="Built for teams that need clearer decisions, faster."
      description="Dataroes turns fragmented signals into practical intelligence. We design for operators who need forecastable outcomes, readable dashboards, and a product that helps them move with confidence."
    >
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,28,63,0.08)]">
        <h2 className="font-syne text-2xl font-bold text-navy-900">What we focus on</h2>
        <ul className="mt-5 space-y-3 text-slate-700">
          <li>Predictive insights that support everyday decision-making.</li>
          <li>Clear visual systems that reduce noise and surface action.</li>
          <li>Trustworthy workflows centered on speed, clarity, and control.</li>
        </ul>
      </section>
    </LegalPageShell>
  );
}