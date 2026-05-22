import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

const faqs = [
  {
    q: 'What is Dataroes?',
    a:
      'Dataroes is an AI-powered predictive analytics and business intelligence platform designed to help enterprises forecast trends, detect risks, and improve strategic decision-making.',
  },
  {
    q: 'How does the predictive analytics engine work?',
    a:
      'The platform analyzes historical and real-time business data using AI models to identify patterns, forecast outcomes, and generate actionable insights.',
  },
  {
    q: 'Which industries can use Dataroes?',
    a:
      'Dataroes supports enterprises across finance, SaaS, logistics, operations, retail, and data-driven business environments.',
  },
  {
    q: 'Does Dataroes support API and enterprise integrations?',
    a:
      'Yes. The platform is designed for scalable enterprise integrations, including APIs, analytics systems, databases, and cloud infrastructure.',
  },
  {
    q: 'Can Dataroes provide real-time business intelligence?',
    a:
      'Yes. Dataroes delivers real-time analytics dashboards, KPI monitoring, predictive visualizations, and operational intelligence.',
  },
  {
    q: 'What makes Dataroes different from traditional BI platforms?',
    a:
      'Traditional BI tools focus on historical reporting. Dataroes uses predictive AI models to forecast future outcomes and support proactive decision-making.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h3 className="text-xl md:text-2xl font-bold text-teal mb-6 text-center font-dm">Everything You Wonder</h3>
      <div className="space-y-3">
        {faqs.map((item, idx) => {
          const open = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-[#132042] border border-white/5 rounded-lg p-4 md:p-5 cursor-pointer"
              onClick={() => setOpenIndex(open ? null : idx)}
              role="button"
              aria-expanded={open}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setOpenIndex(open ? null : idx);
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-base md:text-lg font-semibold text-white">{item.q}</div>
                  {open && <div className="mt-2 text-sm text-slate-300">{item.a}</div>}
                </div>
                <div className="mt-1 text-teal">
                  {open ? <FaChevronUp className="text-xl" /> : <FaChevronDown className="text-xl" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
