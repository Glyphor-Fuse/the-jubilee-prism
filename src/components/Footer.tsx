import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold uppercase tracking-widest mb-2">The Jubilee Prism</h3>
            <p className="text-sm text-gray-500 font-mono">Underground Level 4, Sector 7G<br/>London, United Kingdom</p>
          </div>

          <div className="flex gap-6">
             <a href="#" className="hover:text-prism-red transition-colors"><Instagram /></a>
             <a href="#" className="hover:text-prism-blue transition-colors"><Twitter /></a>
             <a href="#" className="hover:text-prism-chrome transition-colors"><Facebook /></a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-gray-600 font-mono uppercase tracking-widest mb-1">
              © {new Date().getFullYear()} Glyphor Transits Ltd.
            </p>
            <p className="text-xs text-gray-700">Mind the gap.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
