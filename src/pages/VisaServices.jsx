import React from 'react';
import { Link } from 'react-router-dom';

const VisaServices = () => {
  const steps = [
    { num: "01", title: "Expert Consultation", desc: "We understand your travel purpose, destination, and timeline to identify the exact visa category you need." },
    { num: "02", title: "Documentation Guidance", desc: "Receive a precise checklist. We help you gather, format, and verify all required documents to avoid rejections." },
    { num: "03", title: "Application & Submission", desc: "Flawless form filling, cover letter drafting, and appointment scheduling at the embassy or VFS center." },
    { num: "04", title: "Tracking & Handover", desc: "We track your application status and securely hand over your approved visa once received." }
  ];

  const popularVisas = [
    { country: "Schengen (Europe)", duration: "10-15 Days Processing" },
    { country: "Dubai (UAE)", duration: "2-4 Days Processing" },
    { country: "Thailand", duration: "E-Visa / On Arrival Assistance" },
    { country: "Singapore", duration: "3-5 Days Processing" },
    { country: "Malaysia", duration: "E-Visa Available" },
    { country: "Bali (Indonesia)", duration: "Visa on Arrival Assistance" }
  ];

  return (
    <div className="w-full bg-brand-light pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-brand-light">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center z-0"></div>
        <div className="absolute inset-0 bg-brand-blue/80 z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 drop-shadow-lg">
            Global Visa Assistance
          </h1>
          <p className="text-lg md:text-xl font-sans font-light drop-shadow-md max-w-2xl mx-auto">
            Hassle-free tourist visa processing with expert documentation support and consultation.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT - HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">Simplified Process</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">How Recline Travels Helps You</h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-brand-gold hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-heading font-bold text-gray-100 mb-4">{step.num}</div>
              <h4 className="text-xl font-heading font-bold text-brand-blue mb-3">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. POPULAR DESTINATIONS & DISCLAIMER */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Popular Visas */}
          <div>
            <h3 className="text-3xl font-heading font-bold text-brand-dark mb-8">Popular Tourist Visas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {popularVisas.map((visa, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow-sm border border-gray-100 flex flex-col justify-center">
                  <span className="font-heading font-bold text-brand-blue">{visa.country}</span>
                  <span className="text-xs text-gray-500 mt-1">{visa.duration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Important Notice / Disclaimer */}
          <div className="bg-brand-dark p-10 rounded-xl text-brand-light shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-gold rounded-full opacity-10"></div>
            <h4 className="text-2xl font-heading font-bold text-brand-gold mb-4 flex items-center gap-3">
              <span>⚠️</span> Important Disclaimer
            </h4>
            <p className="text-gray-300 leading-relaxed text-justify mb-6">
              Recline Travels acts entirely as a facilitator for your visa application process. We ensure that your documentation is 100% accurate and presented professionally. 
            </p>
            <div className="bg-white/10 p-4 rounded-md border-l-4 border-brand-gold text-white font-medium">
              However, granting or rejecting a visa is the sole prerogative of the respective Embassy / Consulate. Visa approval remains subject to embassy discretion.
            </div>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-heading font-bold text-brand-blue mb-6">Need Help With Your Visa?</h3>
        <p className="text-gray-600 mb-8 text-lg">
          Talk to our visa experts today. We provide full consultation to ensure your travel plans go uninterrupted.
        </p>
        <Link to="/contact" className="inline-block bg-brand-gold text-brand-dark px-10 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all shadow-xl uppercase tracking-wide">
          Consult a Visa Expert
        </Link>
      </section>

    </div>
  );
};

export default VisaServices;