import React from 'react';
import { CountUp } from './ui/CountUp';
export function StatsStrip() {
  return (
    <section className="bg-cobalt py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          <div className="text-center px-4">
            <div className="font-syne text-4xl md:text-5xl font-bold text-white mb-2">
              <CountUp end={500} suffix="+" />
            </div>
            <div className="font-mono text-xs md:text-sm text-white/80 uppercase tracking-wider">
              Enterprises
            </div>
          </div>

          <div className="text-center px-4">
            <div className="font-syne text-4xl md:text-5xl font-bold text-white mb-2">
              <CountUp end={2.4} decimals={1} suffix="B+" />
            </div>
            <div className="font-mono text-xs md:text-sm text-white/80 uppercase tracking-wider">
              Predictions Processed
            </div>
          </div>

          <div className="text-center px-4">
            <div className="font-syne text-4xl md:text-5xl font-bold text-white mb-2">
              <CountUp end={99.97} decimals={2} suffix="%" />
            </div>
            <div className="font-mono text-xs md:text-sm text-white/80 uppercase tracking-wider">
              Uptime
            </div>
          </div>

          <div className="text-center px-4">
            <div className="font-syne text-4xl md:text-5xl font-bold text-white mb-2">
              <CountUp end={40} suffix="+" />
            </div>
            <div className="font-mono text-xs md:text-sm text-white/80 uppercase tracking-wider">
              BI Integrations
            </div>
          </div>
        </div>
      </div>
    </section>);

}