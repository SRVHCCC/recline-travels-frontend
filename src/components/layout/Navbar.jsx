import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'Visa', path: '/visa' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // If scrolled, use a solid white background and dark text.
  // If at top, use transparent background and white text.
  const textColor = scrolled ? 'text-brand-dark' : 'text-white';
  const navBg = scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent pt-8 pb-4';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              {/* When the navbar is transparent over the dark hero image, we use 'brightness-0 invert' to make the logo completely solid pure white (industry standard premium look). When scrolled, it returns to its normal colors. */}
              <img 
                src="/logo.png" 
                alt="Recline Travels Logo" 
                className={`w-auto transition-all duration-500 ${scrolled ? 'h-12' : 'h-14 brightness-0 invert drop-shadow-md'} group-hover:scale-105`}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.path} 
                className={`relative font-sans font-bold text-sm tracking-widest uppercase transition-colors duration-300 ${location.pathname === link.path ? 'text-brand-gold' : `${textColor} hover:text-brand-gold`} group`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            
            <Link 
              to="/contact" 
              className={`px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 border shadow-lg hover:-translate-y-1 ${
                scrolled 
                  ? 'bg-brand-dark text-brand-gold border-brand-dark hover:bg-brand-gold hover:text-brand-dark hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)]' 
                  : 'bg-brand-gold text-brand-dark border-brand-gold hover:bg-yellow-400 hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)]'
              }`}
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`${textColor} hover:text-brand-gold focus:outline-none transition-colors`}
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Must have a background to be readable */}
      <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <Link 
              key={index}
              to={link.path} 
              onClick={() => setIsOpen(false)} 
              className={`block text-lg font-bold tracking-widest uppercase ${location.pathname === link.path ? 'text-brand-gold' : 'text-brand-dark hover:text-brand-gold'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 pb-2 border-t border-gray-100">
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className="block w-full text-center bg-brand-dark text-brand-gold px-6 py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;