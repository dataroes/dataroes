import React from 'react';
import { LegalPageShell } from '../components/LegalPageShell';

export function TermsOfServicePage() {
  return (
    <LegalPageShell
      eyebrow="Terms of Service"
      title="Simple expectations for using Dataroes."
      description="By using the platform, you agree to use it lawfully, respect system limits, and avoid actions that could harm the service or other users. These terms may change as the product evolves."
    >
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,28,63,0.08)]">
        <h2 className="font-syne text-2xl font-bold text-navy-900">Core terms</h2>
        <ul className="mt-5 space-y-3 text-slate-700">
          <li>Use the product responsibly and within applicable laws.</li>
          <li>Do not attempt to disrupt, reverse engineer, or misuse the service.</li>
          <li>Accounts may be suspended for violations or security risks.</li>
        </ul>
      </section>
    </LegalPageShell>
  );
}