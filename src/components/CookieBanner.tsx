import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie_consent');
      setVisible(!consent);
    } catch (e) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed left-4 right-4 bottom-6 z-60 bg-white/95 border border-slate-200 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm text-slate-700 max-w-3xl">
        We use cookies to personalize content, provide social media features, and analyze our traffic. Manage your preferences or accept all cookies.
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-xl border border-slate-200 text-sm text-slate-700 hover:bg-slate-50" onClick={() => navigate('/cookie-policy')}>Manage</button>
        <button className="px-4 py-2 rounded-xl bg-cobalt text-white text-sm font-semibold" onClick={accept}>Accept</button>
      </div>
    </div>
  );
}
