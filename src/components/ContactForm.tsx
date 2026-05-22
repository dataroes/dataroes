import React, { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqejqrjq';

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('_replyto', formData.get('email') as string || '');
    formData.set('_subject', 'New contact submission from dataroes');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      const result = await response.json();
      if (!response.ok || result.ok === false) {
        throw new Error(result.error || 'Submission failed. Please try again.');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12">
          <h3 className="font-syne text-3xl font-bold text-slate-900 mb-2">Get in touch</h3>
          <p className="text-slate-600 mb-6">Tell us about your project and we'll get back within one business day.</p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-700">Name</label>
              <input type="text" name="name" required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-cobalt/20" />
            </div>

            <div>
              <label className="text-sm text-slate-700">Email</label>
              <input type="email" name="email" required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-cobalt/20" />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-slate-700">Company</label>
              <input type="text" name="company" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-cobalt/20" />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-slate-700">Message</label>
              <textarea name="message" rows={4} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-cobalt/20" />
            </div>

            <div className="md:col-span-2 flex flex-col gap-3">
              <button type="submit" disabled={submitting} className="rounded-xl bg-cobalt text-white px-6 py-3 font-semibold shadow hover:bg-cobalt-light transition disabled:cursor-not-allowed disabled:opacity-60">
                {submitting ? 'Sending...' : 'Send message'}
              </button>

              <div aria-live="polite" className="text-sm min-h-[1.25rem]">
                {status === 'success' && <p className="text-emerald-600">Thanks! Your message has been sent.</p>}
                {status === 'error' && <p className="text-rose-600">{errorMessage}</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
