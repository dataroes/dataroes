import React from 'react';
import ProductNav from '../components/ProductNav';
import { Footer } from '../components/Footer';
import ActionableInsight from '../assets/ActionableInsight.svg';
import Accuracy from '../assets/Accuracy.svg';
import Latency from '../assets/Latency.svg';
import {
  Cpu,
  BarChart3,
  ShieldCheck,
  Activity,
  Layers,
  ArrowRight,
  CheckCircle2,
  Database,
  Network
} from 'lucide-react';

const DataroesPredictaCorePage: React.FC = () => {

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Theme Constants
  const theme = {
    bg: 'bg-[#F4F6FB]',
    card: 'bg-white',
    text: 'text-[#0A1628]',
    muted: 'text-[#0A1628]/70',
    border: 'border-[#0A1628]/10',
    accent: 'bg-[#1A6BFF]',
    accentText: 'text-[#1A6BFF]'
  };

  return (
    <div className={`${theme.bg} ${theme.text} transition-colors duration-500 font-sans antialiased min-h-screen flex flex-col`}>
      {/* PRODUCT NAVBAR */}
      <ProductNav />

      {/* 1. HERO SECTION */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center px-4 text-center relative overflow-hidden pb-20 md:pb-32 mt-28">
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] bg-[#1A6BFF]/5" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] bg-blue-100" />

        <div className="max-w-3xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A6BFF]/10 text-[#1A6BFF] text-sm font-bold tracking-wide mb-7">
             <span className="w-2 h-2 rounded-full bg-[#1A6BFF] animate-pulse" />
             PREDICTIVE AI ANALYTICS
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 font-['Syne'] uppercase text-center">
            Turn Your Data <br />
            Into <span className={theme.accentText}>Tomorrow's</span> <br />
            Decisions.
          </h1>
          <p className={`text-base md:text-lg ${theme.muted} max-w-2xl mx-auto font-['DM_Sans'] mb-10 text-center`}>
            Dataroes PredictaCore predicts business outcomes before they happen — giving your team the intelligence to act first, not react last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="https://app.dataroes.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#1A6BFF] text-white font-bold rounded-2xl hover:bg-[#1A6BFF]/90 transition-all shadow-xl shadow-[#1A6BFF]/20 flex items-center justify-center gap-2 group text-base">
              Start Free Trial <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/#contact" className={`w-full sm:w-auto px-8 py-4 ${theme.card} ${theme.text} border ${theme.border} font-bold rounded-2xl transition-all text-base`}>
              Contact Us
            </a>
          </div>
          <div className={`mt-12 flex flex-wrap justify-center gap-8 md:gap-14 text-sm font-bold ${theme.muted}`}>
            <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-green-500" /> SOC 2 READY</span>
            <span className="flex items-center gap-2"><Layers size={18} className={theme.accentText} /> ENTERPRISE-GRADE</span>
            <span className="flex items-center gap-2"><Cpu size={18} className="text-purple-500" /> NVIDIA-POWERED</span>
          </div>
        </div>
      </section>

      {/* 2. NVIDIA INTEGRATION SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-['Syne'] mb-8">Accelerated by NVIDIA AI Stack</h2>
            <p className={`${theme.muted} text-lg mb-10 leading-relaxed font-['DM_Sans']`}>
              At Dataroes PredictaCore, our integration represents a major advancement in large-scale business intelligence processing. We leverage NVIDIA’s AI acceleration technologies to deliver high-throughput and ultra-low latency.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['NVIDIA CUDA', 'NVIDIA TensorRT', 'NVIDIA Triton', 'NVIDIA RAPIDS', 'NVIDIA NeMo', 'NVIDIA cuDNN'].map((sdk) => (
                <div key={sdk} className={`flex items-center gap-3 p-4 rounded-xl border ${theme.border} ${theme.card}`}>
                  <div className="w-3 h-3 rounded-full" style={{ background: '#1A6BFF' }} />
                  <span className="font-bold text-sm">{sdk}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`relative p-8 rounded-[40px] border ${theme.border} ${theme.bg} shadow-2xl`}>
             <div className="flex justify-between items-start mb-12">
                <Cpu size={48} className={theme.accentText} />
                <div className="text-right">
                    <span className="block text-xs font-bold opacity-50 uppercase tracking-widest">Target Architecture</span>
                    <span className="text-2xl font-bold font-['Syne'] text-[#1A6BFF]">H100 Tensor Core</span>
                </div>
             </div>
             <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-[#F4F6FB]">
                    <h4 className="font-bold mb-2">Mixed-Precision Training</h4>
                    <p className="text-sm opacity-70">Efficiently reducing training time for large-scale predictive models.</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#F4F6FB]">
                    <h4 className="font-bold mb-2">High-Throughput Inference</h4>
                    <p className="text-sm opacity-70">Enabling instant AI insights for financial and operational data streams.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. CORE ANALYTICS CAPABILITIES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold font-['Syne'] mb-4">Intelligent Engine</h2>
            <p className={theme.muted}>Extracting actionable insights with high accuracy and low latency.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Anomaly Detection", icon: <Activity />, desc: "Identify operational patterns and detect critical anomalies in real-time records." },
              { title: "Predictive Forecasting", icon: <BarChart3 />, desc: "Advanced forecasting engines that predict business outcomes and trends." },
              { title: "KPI Monitoring", icon: <CheckCircle2 />, desc: "Automated tracking of enterprise metrics and performance indicators." }
            ].map((item, i) => (
              <div key={i} className={`p-10 rounded-[32px] border ${theme.border} ${theme.card} hover:border-[#1A6BFF] transition-colors group`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${theme.bg} ${theme.accentText} group-hover:bg-[#1A6BFF] group-hover:text-white transition-all`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold font-['Syne'] mb-4">{item.title}</h3>
                <p className={`${theme.muted} leading-relaxed`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AWS CLOUD INFRASTRUCTURE */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-['Syne'] mb-6">Cloud-Optimized Infrastructure</h2>
          <p className={`${theme.muted} max-w-3xl mx-auto mb-16`}>
            Deploying on AWS GPU-optimized instances to support large-scale enterprise AI processing.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-[32px] border ${theme.border} text-left flex gap-6 items-center`}>
                <div className="p-4 bg-orange-500/10 rounded-2xl text-orange-500"><Database size={32} /></div>
                <div>
                    <h3 className="text-xl font-bold mb-2">Amazon EC2 P4 / P5</h3>
                    <p className="text-sm opacity-60">Leveraging A100 and H100 capabilities for deep learning training and transformer-based inference.</p>
                </div>
            </div>
            <div className={`p-8 rounded-[32px] border ${theme.border} text-left flex gap-6 items-center`}>
                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500"><Network size={32} /></div>
                <div>
                    <h3 className="text-xl font-bold mb-2">Globally Distributed</h3>
                    <p className="text-sm opacity-60">Scalable AI intelligence deployment across multiple enterprise global regions.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENTERPRISE DECISION SUPPORT */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {/* Card 1: Accuracy */}
              <div className={`aspect-square ${theme.card} rounded-3xl border ${theme.border} p-6 flex flex-col justify-between`}>
                <img src={Accuracy} alt="Accuracy icon" className="w-14 h-14 mb-6" />
                <div>
                  <span className="text-3xl font-bold mb-2 block">99%</span>
                  <span className="text-xs uppercase font-bold opacity-50">Accuracy</span>
                  <p className="text-sm opacity-60 mt-2">Our models deliver industry-leading accuracy for mission-critical predictions.</p>
                </div>
              </div>
              {/* Card 2: Latency */}
              <div className={`aspect-square bg-[#1A6BFF] text-white rounded-3xl p-6 flex flex-col justify-between`}>
                <img src={Latency} alt="Latency icon" className="w-14 h-14 mb-6" />
                <div>
                  <span className="text-3xl font-bold mb-2 block">&lt;10ms</span>
                  <span className="text-xs uppercase font-bold opacity-80">Latency</span>
                  <p className="text-sm opacity-80 mt-2">Lightning-fast inference ensures real-time decision support for your operations.</p>
                </div>
              </div>
              {/* Card 3: Actionable Insights */}
              <div className={`aspect-square ${theme.card} rounded-3xl border ${theme.border} p-6 flex flex-col justify-between col-span-2`}>
                <img src={ActionableInsight} alt="Actionable Insights" className="mb-6 h-85 w-85 rounded-2xl object-contain" />
                <span className="text-xl font-bold mb-2 text-[#1A6BFF]">Actionable Insights</span>
                <p className="text-sm opacity-60">Our platform supports financial intelligence, customer analytics, and enterprise risk monitoring. Instantly surface the most relevant recommendations for your team.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold font-['Syne'] mb-6">Decision Intelligence</h2>
                <p className={`${theme.muted} mb-8 leading-relaxed`}>
                    We provide real-time AI-powered intelligence recommendations. Our platform identifies operational patterns and improves scalability for enterprise-level analytics workloads.
                </p>
                <ul className="space-y-4 font-bold text-sm">
                    {['Financial Analytics', 'Customer Intelligence Systems', 'Operational Forecasting', 'Automated Reporting Environments'].map(t => (
                        <li key={t} className="flex items-center gap-3">
                            <CheckCircle2 size={18} className="text-green-500" /> {t}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>

      {/* 6. CONVERSION SECTION */}
      <section className="py-32 px-6 text-center relative overflow-hidden bg-white">
        <div className="max-w-3xl mx-auto z-10 relative">
          <h2 className="text-4xl md:text-5xl font-extrabold font-['Syne'] mb-8 uppercase leading-tight">
            Build Your <span className={theme.accentText}>High Performance</span> Infrastructure
          </h2>
          <p className={`${theme.muted} text-base md:text-lg mb-10 font-['DM_Sans']`}>
            Join organizations worldwide leveraging NVIDIA GPU acceleration for next-generation predictive intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="px-10 py-5 bg-[#1A6BFF] text-white font-black rounded-2xl hover:scale-105 transition-transform shadow-2xl inline-block text-base">
                GET STARTED NOW
            </a>
            <a href="/#contact" className={`px-10 py-5 border ${theme.border} font-black rounded-2xl ${theme.text} inline-block text-base`}>
                CONTACT SALES
            </a>
          </div>
        </div>
        {/* Visual Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px] pointer-events-none bg-blue-50" />
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default DataroesPredictaCorePage;
