import React from 'react';
import { LegalPageShell } from '../components/LegalPageShell';

export function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      description="Last updated: May 26, 2026"
    >
      <section className="grid gap-12 xl:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-cobalt mb-4">Page summary</p>
            <p className="text-slate-700 leading-7">
              This Privacy Policy explains how Dataroes collects, uses, and protects your information, including the data we store and how we share it.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="rounded-2xl bg-white border border-slate-200 p-3">Data collection practices</li>
              <li className="rounded-2xl bg-white border border-slate-200 p-3">Cookies and tracking</li>
              <li className="rounded-2xl bg-white border border-slate-200 p-3">Your rights and choices</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-cobalt mb-4">Need help?</p>
            <p className="text-slate-700 leading-7">
              If you have questions about your privacy or this policy, reach out to our support team any time.
            </p>
          </div>
        </aside>

        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 rounded-3xl bg-cobalt/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cobalt mb-2">Overview</p>
              <p className="text-slate-700 leading-7">
                We collect only the information needed to deliver the best service experience, and we protect your personal data with strong security practices.
              </p>
            </div>

            <div className="space-y-8">
              <h1 className="font-syne text-3xl font-bold text-navy-900 mb-2">Privacy Policy</h1>
              <p>Your privacy is important to us. This Privacy Policy explains how Dataroes collects, uses, and protects your information when you use our website and services.</p>
              <p>We are committed to transparency and security. Please read this policy carefully to understand your rights and our practices.</p>
              <hr className="my-6" />
              {/* --- Begin Privacy Policy HTML --- */}
        <h2>Interpretation and Definitions</h2>
        <h3>Interpretation</h3>
        <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
        <h3>Definitions</h3>
        <p>For the purposes of this Privacy Policy:</p>
        <ul>
          <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
          <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
          <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Privacy Policy) refers to Dataroes, 1380 Market Street, Suite 200, San Francisco, CA.</li>
          <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
          <li><strong>Country</strong> refers to: California,  United States</li>
          <li><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
          <li><strong>Personal Data</strong> (or "Personal Information") is any information that relates to an identified or identifiable individual. We use "Personal Data" and "Personal Information" interchangeably unless a law uses a specific term.</li>
          <li><strong>Service</strong> refers to the Website.</li>
          <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
          <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
          <li><strong>Website</strong> refers to Dataroes, accessible from <a href="https://dataroes.com/" rel="external nofollow noopener" target="_blank">https://dataroes.com/</a>.</li>
          <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
        </ul>
        {/* ...rest of the HTML content from your Privacy Policy... */}
        <h2>Collecting and Using Your Personal Data</h2>
        <h3>Types of Data Collected</h3>
        <h4>Personal Data</h4>
        <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
        </ul>
        {/* ...remaining sections as provided... */}
        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, You can contact us:</p>
        <ul>
          <li>By email: support@dataroes.com</li>
          <li>By visiting this page on our website: <a href="https://dataroes.com/" rel="external nofollow noopener" target="_blank">https://dataroes.com/</a></li>
        </ul>
        {/* --- End Privacy Policy HTML --- */}
            </div>
          </section>
        </div>
      </section>
    </LegalPageShell>
  );
}