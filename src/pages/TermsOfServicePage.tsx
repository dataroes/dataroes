import React from 'react';
import { LegalPageShell } from '../components/LegalPageShell';

export function TermsOfServicePage() {
  return (
    <LegalPageShell
      eyebrow="Terms of Service"
      title="Terms and Conditions"
      description="Last updated: May 26, 2026"
    >
      <section className="grid gap-12 xl:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-cobalt mb-4">Page summary</p>
            <p className="text-slate-700 leading-7">
              These Terms and Conditions describe the rules for using Dataroes, including your rights, responsibilities, and the services we provide.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="rounded-2xl bg-white border border-slate-200 p-3">Service access guidelines</li>
              <li className="rounded-2xl bg-white border border-slate-200 p-3">User responsibilities</li>
              <li className="rounded-2xl bg-white border border-slate-200 p-3">Legal disclosures</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-cobalt mb-4">Need clarification?</p>
            <p className="text-slate-700 leading-7">
              Reach out to our support team anytime if you want to confirm how these terms apply to your use of Dataroes.
            </p>
          </div>
        </aside>

        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 rounded-3xl bg-cobalt/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cobalt mb-2">Overview</p>
              <p className="text-slate-700 leading-7">
                These terms set the expectations for using Dataroes and protect both your rights and our service commitments.
              </p>
            </div>

            <div className="space-y-8">
              <h1 className="font-syne text-3xl font-bold text-navy-900 mb-2">Terms and Conditions</h1>
              <p>Welcome to Dataroes. These Terms and Conditions outline the rules and regulations for using our website and services. By accessing this site, you accept these terms in full.</p>
              <hr className="my-6" />
              {/* --- Begin Terms and Conditions HTML --- */}
        <h2>Interpretation and Definitions</h2>
        <h3>Interpretation</h3>
        <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
        <h3>Definitions</h3>
        <p>For the purposes of these Terms and Conditions:</p>
        <ul>
          <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
          <li><strong>Country</strong> refers to: California,  United States</li>
          <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in these Terms and Conditions) refers to Dataroes, 1380 Market Street, Suite 200, San Francisco, CA.</li>
          <li><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
          <li><strong>Service</strong> refers to the Website.</li>
          <li><strong>Terms and Conditions</strong> (also referred to as "Terms") means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service. These Terms and Conditions have been created with the help of the <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank" rel="noopener noreferrer">TermsFeed Terms and Conditions Generator</a>.</li>
          <li><strong>Third-Party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service.</li>
          <li><strong>Website</strong> refers to Dataroes, accessible from <a href="https://dataroes.com/" rel="external nofollow noopener" target="_blank">https://dataroes.com/</a></li>
          <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
        </ul>
        {/* ...rest of the HTML content from your Terms and Conditions... */}
        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
        <ul>
          <li>By email: support@dataroes.com</li>
          <li>By visiting this page on our website: <a href="https://dataroes.com/" rel="external nofollow noopener" target="_blank">https://dataroes.com/</a></li>
        </ul>
        {/* --- End Terms and Conditions HTML --- */}
            </div>
          </section>
        </div>
      </section>
    </LegalPageShell>
  );
}