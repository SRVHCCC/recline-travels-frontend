import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
  const [activeDay, setActiveDay] = useState(0); // Pehla din default open rakha hai
  const [activeFAQ, setActiveFAQ] = useState(null);

  const itinerary = [
    { day: "Day 1", title: "Arrival in Maldives & Water Villa Transfer", desc: "Arrive at Male International Airport. Our representative will guide you to your luxury speedboat or seaplane. Check-in to your premium overwater villa. Spend the evening at leisure and enjoy a romantic welcome dinner under the stars." },
    { day: "Day 2", title: "Leisure & Private Sunset Cruise", desc: "Wake up to endless ocean views. Enjoy a signature floating breakfast in your private pool. In the evening, embark on a private sunset cruise with premium champagne and chef-crafted canapés." },
    { day: "Day 3", title: "Water Sports & Overwater Spa Retreat", desc: "Engage in guided snorkeling to explore vibrant coral reefs and marine life. Later, indulge in a rejuvenating 90-minute couple's spa therapy at our award-winning overwater spa." },
    { day: "Day 4", title: "Departure with Beautiful Memories", desc: "Enjoy your final lavish breakfast. Complete your checkout process and take the scenic transfer back to Male Airport for your onward flight." }
  ];

  const faqs = [
    { q: "Is a visa required for Indians to visit Maldives?", a: "Maldives offers a free Visa on Arrival for Indian tourists for up to 30 days. You simply need a valid passport (6 months validity) and confirmed return tickets." },
    { q: "What is the best time to visit?", a: "The best time to visit the Maldives is between November and April when the weather is dry, skies are clear, and the water is perfectly calm." },
    { q: "Are flights included in this package?", a: "This base luxury package excludes flights to give you flexibility with airlines and timings. However, our travel advisors can seamlessly book them for you at the best available rates." }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] pt-20 font-sans">
      
      {/* 1. HERO IMAGE & TITLE */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-brand-light">
        {/* Premium Maldives Aerial Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-brand-dark/90 z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
          <span className="bg-brand-gold text-brand-dark px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] rounded-sm mb-6 inline-block shadow-lg">Signature Honeymoon</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 drop-shadow-2xl text-white">
            Maldives Ultimate Luxury
          </h1>
          <p className="text-lg md:text-2xl font-light drop-shadow-lg text-gray-200 tracking-wide">
            4 Days / 3 Nights of pure bliss in a private water villa.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT COLUMN: Main Content (Spans 8 cols) */}
        <div className="lg:col-span-8 space-y-20">
          
          {/* Destination Overview with Side Image */}
          <section className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">The Experience</h2>
              <h3 className="text-3xl font-heading font-bold text-brand-dark mb-6">A Romantic Escape Like No Other</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Experience the pinnacle of romance with our curated Maldives Honeymoon Package. Wake up to the sound of crystal-clear waves in your private water villa, enjoy floating breakfasts, and create lifelong memories with personalized sunset cruises. Designed exclusively for couples seeking unmatched luxury, privacy, and flawless service.
              </p>
            </div>
            <div className="md:w-1/2 w-full h-72 rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
            </div>
          </section>

          {/* Highlights (Premium Cards) */}
          <section>
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-8 border-b pb-4">Package Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Premium Overwater Villa', 'Floating Breakfast Experience', 'Private Dolphin Sunset Cruise', '90-Min Couple Spa Session', 'Luxury Seaplane Transfers', '24/7 Concierge Service'].map((highlight, index) => (
                <div key={index} className="flex items-center bg-white p-5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-brand-gold transition-colors">
                  <div className="bg-brand-blue/10 w-10 h-10 rounded-full flex items-center justify-center text-brand-blue mr-4 shrink-0">
                    ✨
                  </div>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Inclusions & Exclusions */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50/50 p-8 rounded-2xl border border-green-100 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-green-900 mb-6 flex items-center">
                <span className="bg-green-200 text-green-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✓</span> 
                What's Included
              </h3>
              <ul className="space-y-4 text-gray-700 text-sm font-light">
                <li className="flex items-start"><span className="text-green-500 mr-2">✦</span> 3 Nights luxury accommodation</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✦</span> Gourmet Breakfast & Dinner</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✦</span> Return Airport Transfers</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✦</span> Premium Welcome Champagne</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✦</span> All local taxes & Green Tax</li>
              </ul>
            </div>
            <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-red-900 mb-6 flex items-center">
                <span className="bg-red-200 text-red-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✕</span> 
                Not Included
              </h3>
              <ul className="space-y-4 text-gray-700 text-sm font-light">
                <li className="flex items-start"><span className="text-red-400 mr-2">✦</span> International Airfare</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">✦</span> Visa Fees (if applicable)</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">✦</span> Personal expenses</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">✦</span> Travel Insurance</li>
              </ul>
            </div>
          </section>

          {/* Day-wise Itinerary (Premium Accordion) */}
          <section>
            <h3 className="text-3xl font-heading font-bold text-brand-dark mb-8">Your Itinerary</h3>
            <div className="space-y-4">
              {itinerary.map((item, index) => (
                <div key={index} className={`rounded-xl overflow-hidden transition-all duration-300 ${activeDay === index ? 'bg-white shadow-lg border border-brand-gold/30' : 'bg-transparent border border-gray-200 hover:border-gray-300'}`}>
                  <button 
                    onClick={() => setActiveDay(activeDay === index ? null : index)}
                    className={`w-full text-left px-8 py-6 flex justify-between items-center transition-colors ${activeDay === index ? 'bg-brand-blue/5' : 'bg-white'}`}
                  >
                    <div className="flex items-center">
                      <span className={`text-sm font-bold uppercase tracking-widest mr-6 ${activeDay === index ? 'text-brand-gold' : 'text-gray-400'}`}>
                        {item.day}
                      </span>
                      <span className={`font-heading font-bold text-lg ${activeDay === index ? 'text-brand-blue' : 'text-brand-dark'}`}>
                        {item.title}
                      </span>
                    </div>
                    <span className={`text-2xl font-light ${activeDay === index ? 'text-brand-gold' : 'text-gray-400'}`}>
                      {activeDay === index ? '−' : '+'}
                    </span>
                  </button>
                  {activeDay === index && (
                    <div className="px-8 pb-8 pt-2 text-gray-600 leading-relaxed font-light bg-brand-blue/5">
                      {item.desc}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-8 border-b pb-4">Frequently Asked Questions</h3>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-2">
                  <button 
                    onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                    className="w-full text-left py-4 flex justify-between items-center text-brand-dark font-medium hover:text-brand-blue transition-colors"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <span className="text-brand-gold text-xl">{activeFAQ === index ? '−' : '+'}</span>
                  </button>
                  {activeFAQ === index && (
                    <div className="pb-6 text-gray-600 text-sm font-light leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN: Pricing & CTA (Sticky - Spans 4 cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100">
            <div className="bg-brand-blue text-brand-gold text-xs font-bold uppercase tracking-widest py-2 px-4 rounded-full inline-block mb-6">
              Best Seller
            </div>
            <h3 className="text-xl font-heading font-bold text-gray-500 mb-1">Total Package Price</h3>
            <p className="text-gray-400 text-sm mb-6 pb-6 border-b border-gray-100">Pricing is per person on twin sharing</p>
            
            <div className="mb-8">
              <span className="text-5xl font-heading font-bold text-brand-dark">₹85,000</span>
              <span className="text-xl text-gray-400 line-through ml-3 font-light">₹1,10,000</span>
            </div>
            
            <div className="space-y-5 mb-10">
              <div className="flex items-start text-sm text-gray-600">
                <span className="text-brand-gold mr-3 text-lg">💳</span> 
                <span>Flexible & EMI Payment Options Available via partner banks.</span>
              </div>
              <div className="flex items-start text-sm text-gray-600">
                <span className="text-brand-gold mr-3 text-lg">🎧</span> 
                <span>24/7 Dedicated Travel Advisor from booking to return.</span>
              </div>
            </div>

            <Link to="/contact" className="block w-full text-center bg-brand-gold text-brand-dark py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider mb-4">
              Get Free Quote
            </Link>
            <button className="block w-full text-center bg-gray-50 border border-gray-200 text-gray-600 py-4 rounded-xl font-bold text-sm hover:bg-gray-100 hover:text-brand-dark transition-all uppercase tracking-wider">
              Download PDF Itinerary
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">*Prices are subject to availability & travel dates.</p>
          </div>
        </div>

      </div>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-brand-dark text-brand-light py-24 text-center relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-4">Client Diaries</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-white">Words from our Travelers</h3>
          
          <div className="bg-white/5 p-10 rounded-2xl backdrop-blur-md border border-white/10 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-gold text-brand-dark w-12 h-12 flex items-center justify-center rounded-full text-4xl font-serif">❝</div>
            <p className="text-xl md:text-2xl font-light italic text-gray-300 mb-8 mt-4 leading-relaxed">
              "The water villa arrangement and the sunset cruise were surreal. Recline Travels handled everything perfectly, letting us just enjoy our honeymoon without any stress!"
            </p>
            <div className="font-heading font-bold text-brand-gold text-lg uppercase tracking-widest">— Rahul & Sneha, Mumbai</div>
            <div className="text-yellow-500 mt-3 text-lg tracking-widest">★★★★★</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Packages;