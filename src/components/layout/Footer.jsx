import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-24 pb-10 border-t-4 border-brand-gold font-sans relative overflow-hidden">
      {/* Background Glows for Premium Look */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* 1. Brand Info & Logo */}
          <div className="lg:col-span-4">
            <Link to="/" className="block mb-8 bg-white p-4 rounded-2xl inline-block shadow-lg">
              <img 
                src="/logo.png" 
                alt="Recline Travels Logo" 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light text-justify">
              Curated international holidays, luxury honeymoon experiences, visa assistance, and premium travel planning. We design journeys that turn into lifelong memories.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 hover:scale-110">
                f
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 hover:scale-110">
                in
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 hover:scale-110">
                ig
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-heading font-bold text-white mb-8 relative inline-block">
              Explore
              <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-brand-gold rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li><Link to="/packages" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-3 group"><span className="text-brand-gold transition-transform duration-300 group-hover:translate-x-2">→</span> Packages</Link></li>
              <li><Link to="/packages" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-3 group"><span className="text-brand-gold transition-transform duration-300 group-hover:translate-x-2">→</span> Honeymoon</Link></li>
              <li><Link to="/visa" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-3 group"><span className="text-brand-gold transition-transform duration-300 group-hover:translate-x-2">→</span> Visa Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-3 group"><span className="text-brand-gold transition-transform duration-300 group-hover:translate-x-2">→</span> About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-3 group"><span className="text-brand-gold transition-transform duration-300 group-hover:translate-x-2">→</span> Contact</Link></li>
            </ul>
          </div>

          {/* 3. Legal Information */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-heading font-bold text-white mb-8 relative inline-block">
              Legal
              <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-brand-gold rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li><Link to="/legal" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-3 group"><span className="text-brand-gold transition-transform duration-300 group-hover:translate-x-2">→</span> Terms & Conditions</Link></li>
              <li><Link to="/legal" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-3 group"><span className="text-brand-gold transition-transform duration-300 group-hover:translate-x-2">→</span> Cancellation Policy</Link></li>
              <li><Link to="/legal" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-3 group"><span className="text-brand-gold transition-transform duration-300 group-hover:translate-x-2">→</span> Refund Policy</Link></li>
              <li><Link to="/legal" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-3 group"><span className="text-brand-gold transition-transform duration-300 group-hover:translate-x-2">→</span> Privacy Policy</Link></li>
            </ul>
          </div>

          {/* 4. Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xl font-heading font-bold text-white mb-8 relative inline-block">
              Contact Us
              <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-brand-gold rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li className="flex items-start bg-white/5 p-5 rounded-xl border border-white/10 hover:border-brand-gold/50 transition-colors group">
                <span className="mr-4 text-brand-gold text-2xl group-hover:scale-110 transition-transform">📍</span>
                <span className="mt-0.5">
                  <strong className="block text-white mb-1 font-semibold uppercase tracking-wider text-xs">Head Office</strong>
                  New Delhi, India
                </span>
              </li>
              <li className="flex items-start bg-white/5 p-5 rounded-xl border border-white/10 hover:border-brand-gold/50 transition-colors group">
                <span className="mr-4 text-brand-gold text-2xl group-hover:scale-110 transition-transform">📍</span>
                <span className="mt-0.5">
                  <strong className="block text-white mb-1 font-semibold uppercase tracking-wider text-xs">Regional Branch</strong>
                  Jhansi, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center mt-6">
                <span className="mr-4 text-brand-gold text-2xl">📞</span>
                <a href="tel:+918109370826" className="hover:text-brand-gold transition-colors font-medium text-lg">
                  +91 810 937 0826
                </a>
              </li>
              <li className="flex items-center mt-4">
                <span className="mr-4 text-brand-gold text-2xl">✉️</span>
                <a href="mailto:info@reclinetravels.com" className="hover:text-brand-gold transition-colors text-base">
                  info@reclinetravels.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Jurisdiction */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Recline Travels. All Rights Reserved.</p>
          <p className="bg-white/5 px-4 py-2 rounded-full border border-white/10 text-xs text-gray-400">All disputes subject to Delhi jurisdiction.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;