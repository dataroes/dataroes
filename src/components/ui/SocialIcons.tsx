import { FaFacebook, FaPinterest, FaXTwitter, FaYoutube, FaLinkedin } from "react-icons/fa6";
import React from "react";

export const SocialIcons = () => (
  <div className="flex gap-4 mt-4">
    <a href="https://www.facebook.com/Dataroes" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-400 hover:text-white transition-colors text-2xl">
      <FaFacebook />
    </a>
    <a href="https://www.pinterest.com/Dataroes/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-slate-400 hover:text-white transition-colors text-2xl">
      <FaPinterest />
    </a>
    <a href="https://x.com/Dataroes" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-400 hover:text-white transition-colors text-2xl">
      <FaXTwitter />
    </a>
    <a href="https://www.linkedin.com/company/dataroes/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors text-2xl">
      <FaLinkedin />
    </a>
    <a href="https://www.youtube.com/@Dataroes" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-slate-400 hover:text-white transition-colors text-2xl">
      <FaYoutube />
    </a>
  </div>
);
