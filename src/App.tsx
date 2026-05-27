import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import {Hero}  from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { CoreCapabilities } from './components/CoreCapabilities';
import { HowItWorks } from './components/HowItWorks';
import { DashboardPreview } from './components/DashboardPreview';
import { StatsStrip } from './components/StatsStrip';
import { UseCases } from './components/UseCases';
import { Pricing } from './components/Pricing';
import { FinalCTA } from './components/FinalCTA';
import FAQ from './components/FAQ';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import { AboutUsPage } from './pages/AboutUsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { SuccessPage } from './pages/SuccessPage';

import ProductPage from './pages/ProductPage';
import CookieBanner from './components/CookieBanner';

function HomePage() {
  return (
    <main className="min-h-screen bg-offwhite selection:bg-cobalt selection:text-white">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <CoreCapabilities />
      <HowItWorks />
      <DashboardPreview />
      <StatsStrip />
      <UseCases />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );

}