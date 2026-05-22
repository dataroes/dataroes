import React from 'react';
import { LegalPageShell } from '../components/LegalPageShell';

export function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      eyebrow="Privacy Policy"
      title="Your data is handled with a privacy-first approach."
      description="We collect only what is needed to operate the service, protect accounts, and improve reliability. We avoid unnecessary retention and limit access to authorized systems and people."
    >
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,28,63,0.08)]">
        <h2 className="font-syne text-2xl font-bold text-navy-900">How we handle information</h2>
        <ul className="mt-5 space-y-3 text-slate-700">
          <li>We do not sell personal data.</li>
          <li>We use safeguards appropriate to the sensitivity of the data we store.</li>
          <li>You can request access, correction, or deletion where applicable.</li>
        </ul>
      </section>
    </LegalPageShell>
  );
}