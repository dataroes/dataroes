import React from 'react';
import { LegalPageShell } from '../components/LegalPageShell';

export function CookiePolicyPage() {
  return (
    <LegalPageShell
      eyebrow="Cookies Policy"
      title="Cookies Policy"
      description="Last updated: May 27, 2026"
    >
      <section className="legal-page-grid gap-12 xl:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-cobalt mb-4">Cookie summary</p>
            <p className="text-slate-700 leading-7">
              This policy explains which cookies we use, why we use them, and how you can control them from your browser.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="rounded-2xl bg-white border border-slate-200 p-3">Session and persistent cookies</li>
              <li className="rounded-2xl bg-white border border-slate-200 p-3">Secure, compliant handling</li>
              <li className="rounded-2xl bg-white border border-slate-200 p-3">Browser controls available</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-cobalt mb-4">Browser tips</p>
            <p className="text-slate-700 leading-7">
              You can manage cookies from your browser settings and delete any cookies already stored on your device.
            </p>
            <p className="mt-4 font-semibold text-slate-900">Visit your browser support page</p>
          </div>
        </aside>

        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 rounded-3xl bg-cobalt/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cobalt mb-2">Overview</p>
              <p className="text-slate-700 leading-7">
                Cookies help Dataroes remember your preferences and maintain the website experience while protecting your privacy.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-navy-900">What are Cookies?</h2>
                <p className="mt-4 text-slate-700 leading-7">
                  Cookies are small data files stored on your device to help websites remember information about your visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy-900">Types of Cookies We Use</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="font-semibold text-slate-900">Necessary Cookies</p>
                    <p className="mt-3 text-slate-700 text-sm leading-6">These cookies are essential to operate the Website and cannot be switched off.</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="font-semibold text-slate-900">Functionality Cookies</p>
                    <p className="mt-3 text-slate-700 text-sm leading-6">These cookies remember your preferences so your experience remains seamless.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy-900">Managing Cookies</h2>
                <p className="mt-4 text-slate-700 leading-7">
                  You can disable cookies in your browser, but some Website features may no longer function properly.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-3 text-slate-700">
                  <li>Chrome: <a href="https://support.google.com/accounts/answer/32050" rel="external nofollow noopener" target="_blank" className="text-cobalt hover:underline">support.google.com/accounts/answer/32050</a></li>
                  <li>Edge: <a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" rel="external nofollow noopener" target="_blank" className="text-cobalt hover:underline">support.microsoft.com/microsoft-edge/...</a></li>
                  <li>Firefox: <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" rel="external nofollow noopener" target="_blank" className="text-cobalt hover:underline">support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></li>
                  <li>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" rel="external nofollow noopener" target="_blank" className="text-cobalt hover:underline">support.apple.com/guide/safari/manage-cookies...</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy-900">Contact Us</h2>
            <p className="mt-4 text-slate-700 leading-7">If you have any questions about this Cookies Policy, you can contact us:</p>
            <ul className="list-disc list-inside mt-4 space-y-3 text-slate-700">
              <li>By email: <a href="mailto:support@dataroes.com" className="text-cobalt hover:underline">support@dataroes.com</a></li>
              <li>By visiting: <a href="https://dataroes.com/" rel="external nofollow noopener" target="_blank" className="text-cobalt hover:underline">https://dataroes.com/</a></li>
            </ul>
          </section>
        </div>
      </section>
    </LegalPageShell>
  );
}
