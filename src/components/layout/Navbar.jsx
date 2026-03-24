import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo + Text */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Recline Travels Logo" 
                className="h-14 w-auto"
              />
              {/* <span className="text-xl font-heading font-bold text-brand-blue uppercase tracking-wider">
                Recline<span className="text-brand-gold">Travels</span>
              </span> */}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-brand-dark hover:text-brand-blue font-sans font-medium transition-colors">Home</Link>
            <Link to="/packages" className="text-brand-dark hover:text-brand-blue font-sans font-medium transition-colors">Packages</Link>
            <Link to="/visa" className="text-brand-dark hover:text-brand-blue font-sans font-medium transition-colors">Visa</Link>
            <Link to="/about" className="text-brand-dark hover:text-brand-blue font-sans font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-brand-dark hover:text-brand-blue font-sans font-medium transition-colors">Contact</Link>
            
            <Link 
              to="/contact" 
              className="bg-brand-gold text-brand-dark px-6 py-2 rounded-sm font-semibold hover:bg-yellow-500 transition-all shadow-sm"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-brand-dark hover:text-brand-blue focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-brand-dark hover:bg-gray-50 hover:text-brand-blue rounded-md font-medium">
              Home
            </Link>

            <Link to="/packages" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-brand-dark hover:bg-gray-50 hover:text-brand-blue rounded-md font-medium">
              Packages
            </Link>

            <Link to="/visa" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-brand-dark hover:bg-gray-50 hover:text-brand-blue rounded-md font-medium">
              Visa
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-brand-dark hover:bg-gray-50 hover:text-brand-blue rounded-md font-medium">
              About
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-brand-dark hover:bg-gray-50 hover:text-brand-blue rounded-md font-medium">
              Contact
            </Link>

            <div className="pt-4">
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)} 
                className="block w-full text-center bg-brand-gold text-brand-dark px-6 py-3 rounded-sm font-semibold"
              >
                Get Free Quote
              </Link>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;