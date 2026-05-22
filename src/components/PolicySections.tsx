import React from 'react';

const sections = [
  {
    id: 'about-us',
    eyebrow: 'About Us',
    title: 'Built for teams that need clearer decisions, faster.',
    body:
      'Dataroes helps operators and leadership teams turn fragmented signals into actionable intelligence. We focus on practical forecasting, visible outcomes, and interfaces that make complex data easy to act on.',
    points: [
      'Predictive insights designed for everyday decision-making.',
      'Clear dashboards that reduce noise and surface what matters.',
      'A product mindset centered on trust, speed, and clarity.'
    ]
  },
  {
    id: 'privacy-policy',
    eyebrow: 'Privacy Policy',
    title: 'Your data is handled with a privacy-first approach.',
    body:
      'We only collect data needed to provide and improve the service, protect accounts, and support analytics. Where possible, we minimize retention, restrict access, and use safeguards appropriate to the sensitivity of the information.',
    points: [
      'We do not sell personal data.',
      'Access is limited to authorized personnel and trusted vendors.',
      'You can request access, correction, or deletion where applicable.'
    ]
  },
  {
    id: 'terms-of-service',
    eyebrow: 'Terms of Service',
    title: 'Simple expectations for using Dataroes.',
    body:
      'By using the platform, you agree to use it lawfully, respect system limits, and avoid actions that could harm the service or other users. We may update these terms as the product evolves, and continued use means you accept the latest version.',
    points: [
      'Use the product responsibly and within applicable laws.',
      'Do not attempt to disrupt, reverse engineer, or misuse the service.',
      'Account access may be suspended for violations or security risks.'
    ]
  }
];

export function PolicySections() {
  return (
    <section className="py-24 bg-offwhite" aria-label="Company information and legal sections">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cobalt mb-4">
            Company
          </p>
          <h2 className="font-syne text-3xl md:text-5xl font-bold tracking-tight text-navy-900">
            About, privacy, and terms in one place.
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl leading-relaxed">
            These sections give visitors a quick overview of who we are, how we
            treat data, and the rules for using the platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,28,63,0.08)] scroll-mt-28"
            >
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cobalt mb-4">
                {section.eyebrow}
              </p>
              <h3 className="font-syne text-2xl font-bold tracking-tight text-navy-900">
                {section.title}
              </h3>
              <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
                {section.body}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cobalt shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}