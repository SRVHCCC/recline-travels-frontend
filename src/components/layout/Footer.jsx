import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t-4 border-brand-gold font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-brand-blue mb-4 uppercase tracking-wider">
              Recline<span className="text-brand-gold">Travels</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
              Luxury International Travel Experts. We specialize in customized international holidays, luxury honeymoon experiences, and premium travel planning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-brand-dark mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-600 text-sm font-light">
              <li><Link to="/packages" className="hover:text-brand-blue transition-colors duration-300">Packages</Link></li>
              <li><Link to="/packages" className="hover:text-brand-blue transition-colors duration-300">Honeymoon</Link></li>
              <li><Link to="/visa" className="hover:text-brand-blue transition-colors duration-300">Visa Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-blue transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-brand-dark mb-4">Contact Details</h4>
            <ul className="space-y-4 text-gray-600 text-sm font-light">
              <li className="flex items-start">
                <span className="mr-3 text-brand-gold text-base">📍</span>
                <span className="mt-0.5">Delhi, India</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-brand-gold text-base">📞</span>
                <span className="mt-0.5">+91 8109370826</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-brand-gold text-base">✉️</span>
                <span className="mt-0.5">info@reclinetravels.com</span>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-brand-dark mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-600 text-sm font-light">
              <li><Link to="/legal" className="hover:text-brand-blue transition-colors duration-300">Terms & Conditions</Link></li>
              <li><Link to="/legal" className="hover:text-brand-blue transition-colors duration-300">Cancellation Policy</Link></li>
              <li><Link to="/legal" className="hover:text-brand-blue transition-colors duration-300">Refund Policy</Link></li>
              <li><Link to="/legal" className="hover:text-brand-blue transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/legal" className="hover:text-brand-blue transition-colors duration-300">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Jurisdiction */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
          <p className="mb-2 md:mb-0">© 2026 Recline Travels. All Rights Reserved.</p>
          <p>All disputes subject to Delhi jurisdiction.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;