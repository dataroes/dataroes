import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import financeTeamsImg from '../assets/Finance Teams.svg';
import operationsImg from '../assets/Operations.svg';
import saasCompaniesImg from '../assets/SaaS Companies.svg';
import dataDepartmentsImg from '../assets/Data Departments.svg';
import strategyPlanningImg from '../assets/Strategy Planning.svg';
const tabs = [
{
  id: 'finance',
  label: 'Finance Teams'
},
{
  id: 'operations',
  label: 'Operations'
},
{
  id: 'saas',
  label: 'SaaS Companies'
},
{
  id: 'data',
  label: 'Data Departments'
},
{
  id: 'strategy',
  label: 'Strategy Planning'
}];
const images = {
  finance: financeTeamsImg,
  operations: operationsImg,
  saas: saasCompaniesImg,
  data: dataDepartmentsImg,
  strategy: strategyPlanningImg
};

const content = {
  finance: {
    bullets: [
    'Automate revenue and cash flow forecasting with 98% accuracy.',
    'Detect spending anomalies and budget overruns instantly.',
    'Model complex financial scenarios in real-time.'],

    chart:
    <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="10" y="40" width="15" height="60" fill="#1A6BFF" rx="2" />
        <rect x="35" y="25" width="15" height="75" fill="#1A6BFF" rx="2" />
        <rect x="60" y="50" width="15" height="50" fill="#1A6BFF" rx="2" />
        <rect x="85" y="10" width="15" height="90" fill="#00D4AA" rx="2" />
      </svg>

  },
  operations: {
    bullets: [
    'Predict supply chain disruptions before they occur.',
    'Optimize inventory levels based on predictive demand.',
    'Monitor operational efficiency KPIs across all regions.'],

    chart:
    <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect
        x="10"
        y="10"
        width="20"
        height="20"
        fill="#1A6BFF"
        opacity="0.4"
        rx="2" />
      
        <rect
        x="40"
        y="10"
        width="20"
        height="20"
        fill="#1A6BFF"
        opacity="0.8"
        rx="2" />
      
        <rect
        x="70"
        y="10"
        width="20"
        height="20"
        fill="#FF6B35"
        opacity="0.9"
        rx="2" />
      
        <rect
        x="10"
        y="40"
        width="20"
        height="20"
        fill="#1A6BFF"
        opacity="0.6"
        rx="2" />
      
        <rect
        x="40"
        y="40"
        width="20"
        height="20"
        fill="#00D4AA"
        opacity="0.7"
        rx="2" />
      
        <rect
        x="70"
        y="40"
        width="20"
        height="20"
        fill="#1A6BFF"
        opacity="0.3"
        rx="2" />
      
        <rect
        x="10"
        y="70"
        width="20"
        height="20"
        fill="#00D4AA"
        opacity="0.9"
        rx="2" />
      
        <rect
        x="40"
        y="70"
        width="20"
        height="20"
        fill="#1A6BFF"
        opacity="0.5"
        rx="2" />
      
        <rect
        x="70"
        y="70"
        width="20"
        height="20"
        fill="#1A6BFF"
        opacity="0.2"
        rx="2" />
      
      </svg>

  },
  saas: {
    bullets: [
    'Forecast churn risk at the individual user level.',
    'Predict MRR growth based on current pipeline velocity.',
    'Identify upsell opportunities using usage pattern AI.'],

    chart:
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <path
        d="M10 80 Q 30 70, 50 40 T 90 10"
        stroke="#00D4AA"
        strokeWidth="4"
        strokeLinecap="round" />
      
        <circle cx="50" cy="40" r="4" fill="#1A6BFF" />
        <circle cx="90" cy="10" r="4" fill="#1A6BFF" />
      </svg>

  },
  data: {
    bullets: [
    'Unify fragmented data lakes into a single intelligence layer.',
    'Deploy pre-trained predictive models without writing code.',
    'Ensure SOC 2 compliant data governance automatically.'],

    chart:
    <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="20" cy="80" r="5" fill="#1A6BFF" opacity="0.6" />
        <circle cx="30" cy="60" r="8" fill="#1A6BFF" opacity="0.8" />
        <circle cx="50" cy="70" r="4" fill="#00D4AA" />
        <circle cx="60" cy="40" r="10" fill="#1A6BFF" opacity="0.9" />
        <circle cx="80" cy="20" r="6" fill="#00D4AA" />
        <circle cx="85" cy="50" r="5" fill="#1A6BFF" opacity="0.5" />
      </svg>

  },
  strategy: {
    bullets: [
    'Map strategic goals directly to predictive KPIs.',
    'Simulate market changes and view projected business impact.',
    'Align cross-functional teams with a unified source of truth.'],

    chart:
    <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon
        points="10,10 90,10 70,40 30,40"
        fill="#1A6BFF"
        opacity="0.3" />
      
        <polygon
        points="30,45 70,45 60,70 40,70"
        fill="#1A6BFF"
        opacity="0.6" />
      
        <polygon points="40,75 60,75 50,95" fill="#00D4AA" />
      </svg>

  }
};
export function UseCases() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-syne text-4xl font-bold text-primary">
            Built for the Teams That Drive Strategy
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-8 mb-12 border-b border-slate-200">
          {tabs.map((tab) =>
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-4 px-2 text-sm md:text-base font-medium transition-colors ${activeTab === tab.id ? 'text-cobalt' : 'text-muted hover:text-primary'}`}>
            
              {tab.label}
              {activeTab === tab.id &&
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-cobalt"
              initial={false}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30
              }} />

            }
            </button>
          )}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -10
              }}
              transition={{
                duration: 0.3
              }}
              className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left: Bullets */}
              <div className="space-y-6">
                {content[activeTab as keyof typeof content].bullets.map(
                  (bullet, i) =>
                  <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-cobalt/10 flex items-center justify-center shrink-0">
                        <Check
                        className="w-3.5 h-3.5 text-cobalt"
                        strokeWidth={3} />
                      
                      </div>
                      <p className="font-dm text-lg text-primary">{bullet}</p>
                    </div>

                )}
              </div>

              {/* Right: Section Image */}
              <div className="bg-offwhite rounded-3xl border border-slate-100 p-6 aspect-video flex items-center justify-center shadow-xl">
                <div className="w-full h-full overflow-hidden rounded-3xl">
                  <img
                    src={images[activeTab as keyof typeof images]}
                    alt={tabs.find((tab) => tab.id === activeTab)?.label}
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>);

}