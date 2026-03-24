import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t-4 border-brand-gold font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* 1. Brand Info & Logo */}
          <div>
            <Link to="/" className="block mb-6">
              {/* Apne actual logo ka naam yahan 'logo.png' ki jagah change kar sakte hain */}
              <img 
                src="/logo.png" 
                alt="Recline Travels Logo" 
                className="h-16 w-auto object-contain"
                // Agar abhi logo nahi hai, to neeche wala text use kar lijiye
              />
              {/* <h3 className="text-2xl font-heading font-bold text-brand-blue uppercase tracking-wider mt-2">
                Recline<span className="text-brand-gold">Travels</span>
              </h3> */}
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light text-justify">
              Luxury International Travel Experts. We specialize in customized international holidays, luxury honeymoon experiences, visa assistance, and premium travel planning.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-brand-dark mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h4>
            <ul className="space-y-3 text-gray-600 text-sm font-light">
              <li><Link to="/packages" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-2"><span className="text-xs">▸</span> Packages</Link></li>
              <li><Link to="/packages" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-2"><span className="text-xs">▸</span> Honeymoon</Link></li>
              <li><Link to="/visa" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-2"><span className="text-xs">▸</span> Visa Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-2"><span className="text-xs">▸</span> About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-2"><span className="text-xs">▸</span> Contact</Link></li>
            </ul>
          </div>

          {/* 3. Contact Details (Updated with Both Addresses) */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-heading font-semibold text-brand-dark mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h4>
            <ul className="space-y-5 text-gray-600 text-sm font-light">
              <li className="flex items-start">
                <span className="mr-3 text-brand-gold text-lg">📍</span>
                <span className="mt-0.5">
                  <strong className="block text-brand-dark mb-1 font-semibold">Head Office:</strong>
                  New Delhi, India
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-brand-gold text-lg">📍</span>
                <span className="mt-0.5">
                  <strong className="block text-brand-dark mb-1 font-semibold">Regional Branch:</strong>
                  Jhansi, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-brand-gold text-lg">📞</span>
                <a href="tel:+918109370826" className="hover:text-brand-gold transition-colors font-medium">
                  +91 8109370826
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-brand-gold text-lg">✉️</span>
                <a href="mailto:info@reclinetravels.com" className="hover:text-brand-gold transition-colors">
                  info@reclinetravels.com
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Legal Information */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-brand-dark mb-6 relative inline-block">
              Legal
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h4>
            <ul className="space-y-3 text-gray-600 text-sm font-light">
              <li><Link to="/legal" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-2"><span className="text-xs">▸</span> Terms & Conditions</Link></li>
              <li><Link to="/legal" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-2"><span className="text-xs">▸</span> Cancellation Policy</Link></li>
              <li><Link to="/legal" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-2"><span className="text-xs">▸</span> Refund Policy</Link></li>
              <li><Link to="/legal" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-2"><span className="text-xs">▸</span> Privacy Policy</Link></li>
              <li><Link to="/legal" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-2"><span className="text-xs">▸</span> Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Jurisdiction */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
          <p className="mb-2 md:mb-0">© {new Date().getFullYear()} Recline Travels. All Rights Reserved.</p>
          <p>All disputes subject to Delhi jurisdiction.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;