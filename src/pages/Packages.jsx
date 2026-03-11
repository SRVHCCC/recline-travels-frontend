import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
  // State for toggling Day-wise itinerary accordions
  const [activeDay, setActiveDay] = useState(null);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const itinerary = [
    { day: "Day 1", title: "Arrival in Maldives & Transfer to Water Villa", desc: "Arrive at Male International Airport. Our representative will guide you to your luxury speedboat or seaplane. Check-in to your premium water villa and enjoy a romantic welcome dinner." },
    { day: "Day 2", title: "Leisure & Private Sunset Cruise", desc: "Wake up to endless ocean views. Enjoy a floating breakfast. In the evening, embark on a private sunset cruise with champagne and canapés." },
    { day: "Day 3", title: "Water Sports & Spa Retreat", desc: "Engage in snorkeling to explore vibrant coral reefs. Later, indulge in a 90-minute couple's spa therapy at the overwater spa." },
    { day: "Day 4", title: "Departure with Beautiful Memories", desc: "Enjoy your final breakfast. Checkout and transfer back to Male Airport for your onward flight." }
  ];

  const faqs = [
    { q: "Is visa required for Indians to visit Maldives?", a: "Maldives offers a free Visa on Arrival for Indian tourists for up to 30 days. You just need a valid passport and confirmed return tickets." },
    { q: "What is the best time to visit?", a: "The best time to visit the Maldives is between November and April when the weather is dry and sunny." },
    { q: "Are flights included in this package?", a: "This base package excludes flights to give you flexibility, but our travel advisors can book them for you at the best rates." }
  ];

  return (
    <div className="w-full bg-gray-50 pt-20">
      
      {/* 1. HERO IMAGE & OVERVIEW */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-brand-light">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop')] bg-cover bg-center z-0"></div>
        <div className="absolute inset-0 bg-brand-dark/60 z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <span className="bg-brand-gold text-brand-dark px-3 py-1 text-sm font-bold uppercase tracking-widest rounded-sm mb-4 inline-block">Honeymoon Special</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 drop-shadow-lg">
            Maldives Ultimate Luxury
          </h1>
          <p className="text-lg md:text-xl font-sans font-light drop-shadow-md">
            4 Days / 3 Nights of pure bliss in a private water villa.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN: Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Destination Overview */}
          <section>
            <h2 className="text-3xl font-heading font-bold text-brand-blue mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Experience the pinnacle of romance with our curated Maldives Honeymoon Package. Wake up to the sound of crystal-clear waves in your private water villa, enjoy floating breakfasts, and create lifelong memories with personalized sunset cruises. Designed exclusively for couples seeking luxury and privacy.
            </p>
          </section>

          {/* Highlights */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-brand-blue mb-4">Package Highlights</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Stay in a Premium Water Villa', 'Complimentary Floating Breakfast', 'Private Sunset Dolphin Cruise', '90-Min Couple Spa Session', 'Speedboat/Seaplane Transfers', '24/7 Dedicated Travel Advisor'].map((highlight, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="text-brand-gold mr-3">✔</span> {highlight}
                </li>
              ))}
            </ul>
          </section>

          {/* Inclusions & Exclusions */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-green-500">
              <h3 className="text-xl font-heading font-bold text-gray-800 mb-4">Inclusions</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✅ 3 Nights accommodation</li>
                <li>✅ Daily Breakfast & Dinner</li>
                <li>✅ Return Airport Transfers</li>
                <li>✅ Welcome Drink on arrival</li>
                <li>✅ All local taxes and Green Tax</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-red-500">
              <h3 className="text-xl font-heading font-bold text-gray-800 mb-4">Exclusions</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>❌ International Airfare</li>
                <li>❌ Visa Fees (if applicable)</li>
                <li>❌ Personal expenses (laundry, etc.)</li>
                <li>❌ Travel Insurance</li>
              </ul>
            </div>
          </section>

          {/* Day-wise Itinerary (Accordion) */}
          <section>
            <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">Day-Wise Itinerary</h2>
            <div className="space-y-4">
              {itinerary.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-md bg-white overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setActiveDay(activeDay === index ? null : index)}
                    className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
                  >
                    <span className="font-heading font-bold text-brand-dark">
                      <span className="text-brand-gold mr-2">{item.day}:</span> {item.title}
                    </span>
                    <span className="text-xl text-gray-500">{activeDay === index ? '−' : '+'}</span>
                  </button>
                  {activeDay === index && (
                    <div className="px-6 py-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                      {item.desc}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-2">
                  <button 
                    onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                    className="w-full text-left py-3 flex justify-between items-center text-brand-dark font-medium hover:text-brand-blue"
                  >
                    {faq.q}
                    <span className="text-xl text-brand-gold">{activeFAQ === index ? '−' : '+'}</span>
                  </button>
                  {activeFAQ === index && (
                    <div className="pb-4 text-gray-600 text-sm">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN: Pricing & CTA (Sticky) */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white p-8 rounded-xl shadow-xl border-t-8 border-brand-blue">
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-2">Pricing Details</h3>
            <p className="text-gray-500 text-sm mb-6">Starting from (per person)</p>
            <div className="text-4xl font-heading font-bold text-brand-blue mb-6">
              ₹85,000 <span className="text-lg text-gray-400 line-through ml-2">₹1,10,000</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-sm text-gray-600">
                <span className="text-brand-gold mr-2">💳</span> Flexible & EMI Payment Options Available
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="text-brand-gold mr-2">🎧</span> 24/7 Dedicated Travel Advisor
              </div>
            </div>

            <Link to="/contact" className="block w-full text-center bg-brand-gold text-brand-dark py-4 rounded-md font-bold text-lg hover:bg-yellow-500 transition-all shadow-md mb-4 uppercase">
              Get Free Quote
            </Link>
            <button className="block w-full text-center border-2 border-brand-blue text-brand-blue py-4 rounded-md font-bold text-lg hover:bg-brand-blue hover:text-brand-light transition-all uppercase">
              Download PDF Itinerary
            </button>
          </div>
        </div>

      </div>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-brand-dark text-brand-light py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">Verified Reviews</h2>
          <h3 className="text-3xl font-heading font-bold mb-8">What our clients say about this package</h3>
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20 italic text-lg">
            "The water villa arrangement and the sunset cruise were surreal. Recline Travels handled everything perfectly, letting us just enjoy our honeymoon without any stress!"
            <div className="mt-4 font-bold text-brand-gold not-italic">— Rahul & Sneha, Mumbai</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Packages;