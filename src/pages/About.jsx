import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const coreValues = [
    { title: "Responsibility", desc: "Taking full ownership of your bespoke travel experience from the first consultation to your safe return.", icon: "❖" },
    { title: "Trust & Transparency", desc: "Building lasting relationships through crystal-clear pricing, honest advice, and unwavering integrity.", icon: "✦" },
    { title: "Unwavering Commitment", desc: "Providing dedicated 24/7 concierge support to ensure your journey is absolutely flawless.", icon: "⟡" },
    { title: "Premium Experience", desc: "Maintaining the highest luxury standards and personalized attention in every single booking.", icon: "✧" }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] pt-20 font-sans">
      
      {/* 1. LUXURY HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-brand-light">
        {/* Chic Travel / Lifestyle Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-dark/90 z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <span className="bg-brand-gold text-brand-dark px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] rounded-sm mb-6 inline-block shadow-lg">The Recline Legacy</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 drop-shadow-2xl text-white">
            Our Story
          </h1>
          <p className="text-lg md:text-xl font-light drop-shadow-lg text-gray-200 tracking-wide max-w-2xl mx-auto">
            More than just tickets and luxury hotels — we create emotions, milestones, and lifelong memories.
          </p>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW (Editorial Layout) */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative h-[500px]">
          {/* Overlapping Images Layout for Premium Feel */}
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" 
            alt="Luxury Flight" 
            className="absolute top-0 left-0 w-3/4 h-[350px] object-cover rounded-2xl shadow-2xl border-4 border-white z-10" 
          />
          <img 
            src="https://images.unsplash.com/photo-1512684074813-17631899e30a?q=80&w=1988&auto=format&fit=crop" 
            alt="Bespoke Experience" 
            className="absolute bottom-0 right-0 w-2/3 h-[300px] object-cover rounded-2xl shadow-2xl border-4 border-white z-20" 
          />
          {/* Gold Accent Element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-gold/20 rounded-full z-0 blur-xl"></div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">Since 2022</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-8">Crafting Unforgettable <br/><span className="text-brand-blue">Journeys</span></h3>
          <div className="w-20 h-1 bg-brand-gold mb-8"></div>
          
          <p className="text-gray-600 leading-relaxed font-light text-justify mb-6 text-lg">
            Recline Travels is a Delhi-based premium international travel agency established in 2022, built upon a foundation of profound professional tourism expertise dating back to 2018. We seamlessly blend academic excellence with real-world execution to bring you the very best the industry has to offer.
          </p>
          <p className="text-gray-600 leading-relaxed font-light text-justify text-lg">
            We specialize in bespoke international holidays, ultra-luxury honeymoon experiences, meticulous visa assistance, and premium travel planning. From your initial consultation to your safe return home, we ensure every aspect of your journey is seamless, transparent, and masterfully managed.
          </p>
        </div>
      </section>

      {/* 3. FOUNDER VISION & MOTIVATION */}
      <section className="bg-brand-dark text-brand-light py-24 relative overflow-hidden">
        {/* Subtle Background Lighting */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Founder Image with Elegant Border */}
          <div className="lg:col-span-5 h-[600px] bg-gray-200 rounded-t-full overflow-hidden border-b-8 border-brand-gold relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop')] bg-cover bg-center opacity-90"></div>
             <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8">
                <h4 className="text-3xl font-heading font-bold text-white mb-1">Rukshar Khan</h4>
                <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase">Founder & CEO</p>
                <p className="text-gray-300 text-xs mt-2 font-light">MBA in Tourism Management</p>
             </div>
          </div>

          {/* Founder Story */}
          <div className="lg:col-span-7 lg:pl-8">
            <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">The Visionary</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-10">Meet Our Founder</h3>
            
            <div className="space-y-6 text-gray-300 leading-relaxed font-light text-lg text-justify">
              <p>
                Rukshar Khan commenced her journey in the tourism industry in 2018, driven by an inherent passion for global exploration and elevating the client experience. Supported by a strong academic foundation through her MBA in Tourism Management, she understood early on that luxury travel transcends mere logistics.
              </p>
              <p>
                In 2022, she founded Recline Travels with a singular, resolute vision: <strong className="text-white font-medium">to simplify and elevate international travel for Indian globetrotters while rigorously maintaining transparency, exacting luxury standards, and deeply personalized attention.</strong>
              </p>
              
              {/* Premium Quote Block */}
              <div className="relative mt-10 pt-8 border-t border-white/10">
                <span className="absolute -top-6 left-0 text-6xl text-brand-gold font-serif opacity-40">"</span>
                <p className="text-brand-gold font-medium italic text-xl leading-relaxed pr-8">
                  For me, every booking carries profound responsibility, trust, and commitment. Recline Travels was built not just as a business, but as a distinguished brand that stands for absolute professionalism, clarity, and premium travel experiences.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">Our Philosophy</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">The Pillars of Recline</h3>
            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-[#FAFAFA] p-10 rounded-2xl shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 text-center border border-gray-100 hover:border-brand-gold group">
                <div className="text-5xl mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h4 className="text-xl font-heading font-bold text-brand-dark mb-4">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LUXURY CTA */}
      <section className="relative py-24 text-center overflow-hidden flex items-center justify-center">
        {/* Dark Elegance Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-c6a4d14241cc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center z-0 opacity-40"></div>
        <div className="absolute inset-0 bg-brand-dark/90 z-0"></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.3em] mb-4">Your Next Chapter Begins Here</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">Ready to Experience the World in Luxury?</h3>
          <p className="text-gray-300 mb-10 text-lg font-light leading-relaxed">
            Allow us to curate a perfectly tailored journey for you, backed by unparalleled expertise and genuine care.
          </p>
          <Link to="/contact" className="inline-block bg-brand-gold text-brand-dark px-12 py-5 rounded-sm font-bold text-lg hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl uppercase tracking-widest border border-transparent hover:border-white">
            Start Planning Now
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;