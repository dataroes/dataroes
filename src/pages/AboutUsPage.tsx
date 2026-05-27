import React from 'react';
import { LegalPageShell } from '../components/LegalPageShell';

export function AboutUsPage() {
  return (
    <LegalPageShell
      eyebrow="About Us"
      title="Empowering Teams with Predictive Intelligence"
      description="Dataroes transforms fragmented signals into actionable intelligence. We build for operators who need forecastable outcomes, readable dashboards, and a product that helps them move with confidence."
    >
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,28,63,0.08)] mb-8">
        <h2 className="font-syne text-2xl font-bold text-navy-900 mb-4">Our Mission</h2>
        <p className="text-slate-700 mb-4">To deliver AI-powered predictive analytics that enable organizations to make smarter, faster decisions with clarity and confidence.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-navy-900">Predictive Insights</h3>
            <p className="text-slate-600">Supporting everyday decision-making with actionable forecasts and real-time analytics.</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-navy-900">Clarity in Data</h3>
            <p className="text-slate-600">Designing clear visual systems that reduce noise and surface what matters most.</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-navy-900">Trust & Control</h3>
            <p className="text-slate-600">Building trustworthy workflows centered on speed, transparency, and user control.</p>
          </div>
        </div>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,28,63,0.08)]">
        <h2 className="font-syne text-2xl font-bold text-navy-900 mb-4">Our Story</h2>
        <p className="text-slate-700 mb-2">Founded in 2022 in San Francisco, Dataroes was created to help organizations unlock the full value of their data. Our team brings together expertise in AI, cloud infrastructure, and enterprise software to deliver solutions that are both powerful and easy to use.</p>
        <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
          <li>Headquartered at 1380 Market Street, Suite 200, San Francisco, CA</li>
          <li>Founder: Akcent Sina</li>
          <li>Contact: <a href="mailto:support@dataroes.com" className="text-blue-600 hover:underline">support@dataroes.com</a></li>
        </ul>
      </section>
    </LegalPageShell>
  );
}