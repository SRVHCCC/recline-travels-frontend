import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const coreValues = [
    { title: "Responsibility", desc: "Taking full ownership of your travel experience from start to finish.", icon: "🛡️" },
    { title: "Trust", desc: "Building lasting relationships through transparent pricing and honest advice.", icon: "🤝" },
    { title: "Commitment", desc: "Dedicated 24/7 support to ensure your journey is absolutely flawless.", icon: "⭐" },
    { title: "Premium Experience", desc: "Maintaining luxury standards and personalized attention in every booking.", icon: "✨" }
  ];

  return (
    <div className="w-full bg-brand-light pt-20">
      
      {/* 1. HERO SECTION */}
     <section className="relative w-full h-[55vh] flex items-center justify-center text-white">

  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800')] bg-cover bg-center"></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

    <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-xl">
      Our Story
    </h1>

    <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
      More than just tickets and hotels — we create emotions, milestones,
      and lifelong memories.
    </p>

  </div>

</section>

      {/* 2. COMPANY OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">Since 2022</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue mb-6">About Recline Travels</h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Recline Travels is a Delhi-based international travel company established in 2022, built on professional tourism expertise since 2018. We blend academic knowledge with real-world travel execution to bring you the best in the industry.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            We specialize in customized international holidays, luxury honeymoon experiences, visa assistance, and premium travel planning. From consultation to return, we ensure every journey is seamless, transparent, and professionally managed.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" alt="Travel Image 1" className="rounded-lg shadow-md h-48 w-full object-cover" />
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop" alt="Travel Image 2" className="rounded-lg shadow-md h-48 w-full object-cover mt-8" />
        </div>
      </section>

      {/* 3. FOUNDER VISION & MOTIVATION */}
      <section className="bg-brand-dark text-brand-light py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Founder Image Placeholder */}
          <div className="lg:col-span-4 h-[500px] bg-gray-200 rounded-xl overflow-hidden border-4 border-brand-gold relative shadow-2xl">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop')] bg-cover bg-center opacity-90"></div>
             {/* Note: Replace URL above with Rukshar Khan's actual professional photo */}
             <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-dark to-transparent p-6">
                <h4 className="text-2xl font-heading font-bold text-white">Rukshar Khan</h4>
                <p className="text-brand-gold text-sm font-semibold">Founder & CEO, Recline Travels</p>
                <p className="text-gray-300 text-xs mt-1">MBA in Tourism Management</p>
             </div>
          </div>

          {/* Founder Story */}
          <div className="lg:col-span-8">
            <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">The Visionary</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Founder's Journey</h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed text-justify">
              <p>
                Rukshar Khan began her journey in the tourism industry in 2018 with a passion for global travel and client experience. With a strong academic foundation through her MBA in Tourism Management, she understood early on that travel is more than just logistics.
              </p>
              <p>
                In 2022, she founded Recline Travels with a clear vision: <strong className="text-white">to simplify international travel for Indian travelers while maintaining transparency, luxury standards, and personalized attention.</strong>
              </p>
              <p>
                Her motivation comes from seeing clients experience the world with confidence — whether it is a couple celebrating their honeymoon, a family exploring a dream destination, or a first-time traveler stepping out internationally.
              </p>
              <p className="text-brand-gold font-medium italic border-l-4 border-brand-gold pl-4 mt-6">
                "For me, every booking carries responsibility, trust, and commitment. Recline Travels was built not just as a business, but as a brand that stands for professionalism, clarity, and premium travel experiences."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">Why We Do It</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue mb-4">Our Core Values</h3>
            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center border-b-2 border-transparent hover:border-brand-gold">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-heading font-bold text-brand-dark mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-heading font-bold text-brand-blue mb-6">Ready to Experience the World?</h3>
        <p className="text-gray-600 mb-8 text-lg">
          Let us plan a perfectly tailored journey for you, backed by expertise and genuine care.
        </p>
        <Link to="/contact" className="inline-block bg-brand-gold text-brand-dark px-10 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all shadow-xl uppercase tracking-wide">
          Start Planning Now
        </Link>
      </section>

    </div>
  );
};

export default About;