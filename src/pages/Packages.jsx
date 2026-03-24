import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import review_1 from "../img/review_1.png";
import review_2 from "../img/review_2.png";

const Packages = () => {
  // --- SCROLL TO TOP ON LOAD ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeDay, setActiveDay] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);

  // --- PACKAGE DATA (Multiple Options) ---
  const packagesData = [
    {
      id: "maldives",
      tabName: "Maldives",
      badge: "Signature Honeymoon",
      title: "Maldives Ultimate Luxury",
      duration: "4 Days / 3 Nights",
      desc: "Experience the pinnacle of romance with our curated Maldives Honeymoon Package. Wake up to the sound of crystal-clear waves in your private water villa, enjoy floating breakfasts, and create lifelong memories with personalized sunset cruises. Designed exclusively for couples seeking unmatched luxury, privacy, and flawless service.",
      heroImg: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
      sideImg: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974&auto=format&fit=crop",
      price: "57,000",
      originalPrice: "75,000",
      highlights: ['Premium Overwater Villa', 'Floating Breakfast Experience', 'Private Dolphin Sunset Cruise', '90-Min Couple Spa Session', 'Luxury Seaplane Transfers', '24/7 Concierge Service'],
      itinerary: [
        { day: "Day 1", title: "Arrival in Maldives & Water Villa Transfer", desc: "Arrive at Male International Airport. Our representative will guide you to your luxury speedboat or seaplane. Check-in to your premium overwater villa. Spend the evening at leisure and enjoy a romantic welcome dinner under the stars." },
        { day: "Day 2", title: "Leisure & Private Sunset Cruise", desc: "Wake up to endless ocean views. Enjoy a signature floating breakfast in your private pool. In the evening, embark on a private sunset cruise with premium champagne and chef-crafted canapés." },
        { day: "Day 3", title: "Water Sports & Overwater Spa Retreat", desc: "Engage in guided snorkeling to explore vibrant coral reefs and marine life. Later, indulge in a rejuvenating 90-minute couple's spa therapy at our award-winning overwater spa." },
        { day: "Day 4", title: "Departure with Beautiful Memories", desc: "Enjoy your final lavish breakfast. Complete your checkout process and take the scenic transfer back to Male Airport for your onward flight." }
      ]
    },
    {
      id: "bali",
      tabName: "Bali",
      badge: "Tropical Escape",
      title: "Bali Romantic Getaway",
      duration: "6 Days / 5 Nights",
      desc: "Discover the magic of Bali with our handpicked Romantic Escape. From the lush green rice terraces of Ubud to the stunning beach clubs of Seminyak. Private pool villas, floating breakfasts, and authentic Balinese culture await you.",
      heroImg: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",
      sideImg: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop",
      price: "29,000",
      originalPrice: "40,000",
      highlights: ['Private Pool Villa in Ubud', 'Nusa Penida Island Tour', 'Uluwatu Temple Sunset View', 'Authentic Balinese Massage', 'Candlelight Dinner by Beach', 'Private Cab Transfers'],
      itinerary: [
        { day: "Day 1", title: "Welcome to Bali & Villa Check-in", desc: "Arrive at Denpasar Airport. Meet our representative and transfer to your luxury private pool villa in Ubud. Spend the evening relaxing." },
        { day: "Day 2", title: "Ubud & Kintamani Tour", desc: "Visit the famous Tegalalang Rice Terrace, experience the Bali Swing, and enjoy the breathtaking views of Mount Batur volcano." },
        { day: "Day 3", title: "Nusa Penida Island Tour", desc: "Take a fast boat to Nusa Penida. Visit the iconic Kelingking Beach, Broken Beach, and Angel's Billabong. Return to mainland by evening." },
        { day: "Day 4", title: "Seminyak & Uluwatu Sunset", desc: "Check in to your beachside hotel. In the evening, visit Uluwatu Temple for the spectacular sunset and traditional Kecak Fire Dance." },
        { day: "Day 5", title: "Water Sports & Romantic Dinner", desc: "Enjoy thrilling water sports at Tanjung Benoa. End the day with a romantic candlelight dinner at Jimbaran Bay." },
        { day: "Day 6", title: "Departure from Bali", desc: "After breakfast, pick up some last-minute souvenirs before transferring to the airport for your flight home." }
      ]
    },
    {
      id: "europe",
      tabName: "Europe",
      badge: "Grand Tour",
      title: "Classic Europe Dream",
      duration: "10 Days / 9 Nights",
      desc: "A mesmerizing journey through the heart of Europe covering France, Switzerland, and Italy. Experience the Eiffel Tower, the snow-capped Swiss Alps, and the romantic canals of Venice in this perfectly planned 9-night extravaganza.",
      heroImg: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop",
      sideImg: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=2000&auto=format&fit=crop",
      price: "1,60,000",
      originalPrice: "1,95,000",
      highlights: ['Eiffel Tower Summit Access', 'Mt. Titlis Ice Flyer Excursion', 'Venice Grand Canal Gondola Ride', 'Schengen Visa Assistance', 'Intercity Eurail Passes Included', '4-Star Premium Hotels'],
      itinerary: [
        { day: "Day 1-3", title: "Paris, France - The City of Light", desc: "Arrive in Paris. Enjoy a Seine River Cruise, a Louvre Museum tour, and summit access to the Eiffel Tower. Explore the fashion capital at your own pace." },
        { day: "Day 4-6", title: "Lucerne & Zurich, Switzerland", desc: "Take a scenic train to Switzerland. Enjoy a full-day trip to Mt. Titlis with the Ice Flyer. Explore the Chapel Bridge and cruise on Lake Lucerne." },
        { day: "Day 7-9", title: "Venice & Rome, Italy", desc: "Travel to Italy. Experience a classic Gondola ride in Venice. Continue to Rome via high-speed train to visit the Colosseum and Trevi Fountain." },
        { day: "Day 10", title: "Departure from Rome", desc: "After a hearty Italian breakfast, our private transfer will drop you at the Rome International Airport for your safe journey back home." }
      ]
    }
  ];

  // Set active package state (defaults to first one - Maldives)
  const [activePkg, setActivePkg] = useState(packagesData[0]);

  // Reset active day accordion when switching packages
  useEffect(() => {
    setActiveDay(0);
  }, [activePkg]);

  const faqs = [
    { q: "Is visa assistance provided for international packages?", a: "Yes! Recline Travels provides end-to-end visa documentation and assistance support for all our international packages, including Schengen, Dubai, and Bali." },
    { q: "Are flights included in these packages?", a: "Our base luxury packages exclude international flights to give you flexibility with airlines and cities of departure. However, our travel advisors can seamlessly book them for you at the best rates." },
    { q: "Can we customize the number of days?", a: "Absolutely. All our itineraries are 100% customizable. You can add or reduce nights based on your budget and availability." }
  ];

  // --- REAL TESTIMONIALS DATA ---
  const realTestimonials = [
    {
      name: "Jatin kumar",
      location: "Bali",
      text: "We just completed our first international trip to Bali, and it was an incredible experience thanks to Recline Travel! A huge shout-out to Ruksar, who was amazing throughout the planning process. She helped us create a perfect, budget-friendly package without compromising on the experience. Every day was well-planned with a great mix of sightseeing and entertainment, keeping us perfectly engaged. The hospitality we received in Bali was top-notch. My wife and I truly enjoyed every moment. Highly recommend Recline Travel if you want a hassle-free and memorable vacation!",
      img: review_1, // Quotes removed, using imported variable directly
    },
    {
      name: "Prashant Saini",
      location: "Bali",
      text: "⭐️⭐️⭐️⭐️⭐️ Exceptional Travel Planned by Ruksar Khan We booked our Maldives honeymoon trip, and the experience was flawless from start to finish. She arranged everything—flights, transfers, and our stay at Centara Ras Fushi—making it completely stress‑free. Despite our delayed arrival, Ruksar had already organised late lunch options, which made our first day feel truly welcoming. Every honeymoon detail was perfectly taken care of—from the beautiful bed décor to a bottle of champagne waiting for us in the room. The all‑inclusive food and drink package was amazing, and every part of the trip felt thoughtfully planned. Highly recommend Ruksar for anyone wanting a smooth, memorable, and genuinely special getaway! We will definitely be getting in touch with you for our next holidays :D",
      img: review_2, // Quotes removed, using imported variable directly
    },
    {
      name: "Ikra Jii",
      location: "Mussoorie",
      text: "Mussoorie trip with Recline Travels was truly wonderful! The arrangements were perfect – from hotel stay to local sightseeing. The scenic beauty of Mall Road and Kempty Falls made our trip unforgettable. Special thanks to Divyanshi for always being available and ensuring everything went smoothly. Highly recommend Recline Travels for a hassle-free Holiday…",
      img: "https://ui-avatars.com/api/?name=Ikra+Jii&background=EAB308&color=fff&size=150&bold=true", // Generated Text Letter (I) image API
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] pt-20 font-sans">
      
      {/* --- PACKAGE SELECTOR TAB BAR --- */}
      <div className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-4 md:gap-8 overflow-x-auto no-scrollbar">
          {packagesData.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setActivePkg(pkg)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap border-2 ${
                activePkg.id === pkg.id 
                  ? 'bg-brand-dark text-brand-gold border-brand-dark shadow-lg' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-brand-gold hover:text-brand-dark'
              }`}
            >
              {pkg.tabName}
            </button>
          ))}
        </div>
      </div>

      {/* 1. HERO IMAGE & TITLE (Dynamic) */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-brand-light transition-all duration-500">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
          style={{ backgroundImage: `url('${activePkg.heroImg}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-dark/90 z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12 animate-fade-in-up">
          <span className="bg-brand-gold text-brand-dark px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] rounded-sm mb-6 inline-block shadow-lg">
            {activePkg.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 drop-shadow-2xl text-white">
            {activePkg.title}
          </h1>
          <p className="text-lg md:text-2xl font-light drop-shadow-lg text-gray-200 tracking-wide">
            {activePkg.duration} of pure bliss and unforgettable memories.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT COLUMN: Main Content */}
        <div className="lg:col-span-8 space-y-20">
          
          {/* Destination Overview with Side Image */}
          <section className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">The Experience</h2>
              <h3 className="text-3xl font-heading font-bold text-brand-dark mb-6">A Journey Like No Other</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                {activePkg.desc}
              </p>
            </div>
            <div className="md:w-1/2 w-full h-72 rounded-2xl overflow-hidden shadow-2xl relative">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{ backgroundImage: `url('${activePkg.sideImg}')` }}
              ></div>
            </div>
          </section>

          {/* Highlights (Premium Cards) */}
          <section>
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-8 border-b pb-4">Package Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activePkg.highlights.map((highlight, index) => (
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
                <li className="flex items-start"><span className="text-green-500 mr-2">✦</span> Luxury accommodation as per itinerary</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✦</span> Daily Breakfast</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✦</span> Return Airport Transfers</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✦</span> Sightseeing tours as mentioned</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✦</span> All local hotel taxes</li>
              </ul>
            </div>
            <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-red-900 mb-6 flex items-center">
                <span className="bg-red-200 text-red-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✕</span> 
                Not Included
              </h3>
              <ul className="space-y-4 text-gray-700 text-sm font-light">
                <li className="flex items-start"><span className="text-red-400 mr-2">✦</span> International Airfare</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">✦</span> Visa Fees</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">✦</span> Personal expenses & shopping</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">✦</span> Travel Insurance</li>
              </ul>
            </div>
          </section>

          {/* Day-wise Itinerary (Dynamic Accordion) */}
          <section>
            <h3 className="text-3xl font-heading font-bold text-brand-dark mb-8">Your Itinerary</h3>
            <div className="space-y-4">
              {activePkg.itinerary.map((item, index) => (
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

        {/* RIGHT COLUMN: Pricing & CTA */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100">
            <div className="bg-brand-blue text-brand-gold text-xs font-bold uppercase tracking-widest py-2 px-4 rounded-full inline-block mb-6">
              {activePkg.duration}
            </div>
            <h3 className="text-xl font-heading font-bold text-gray-500 mb-1">Total Package Price</h3>
            <p className="text-gray-400 text-sm mb-6 pb-6 border-b border-gray-100">Pricing is per person on twin sharing</p>
            
            <div className="mb-8 flex items-end gap-3">
              <span className="text-5xl font-heading font-bold text-brand-dark">₹{activePkg.price}</span>
              <span className="text-xl text-gray-400 line-through font-light mb-1">₹{activePkg.originalPrice}</span>
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
            <p className="text-center text-xs text-gray-400 mt-4">*Prices are subject to availability & travel dates.</p>
          </div>
        </div>

      </div>

      {/* NEW: REAL GOOGLE REVIEWS SECTION WITH PHOTOS */}
      <section className="bg-brand-dark text-brand-light py-24 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-4">Real Client Stories</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">Verified Google Reviews</h3>
            <div className="flex justify-center items-center gap-2">
              <span className="text-yellow-500 text-2xl">★★★★★</span>
              <span className="text-gray-300 font-light">4.9 / 5 Rating</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {realTestimonials.map((review, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 relative hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between h-full">
                <div className="absolute -top-5 left-8 bg-brand-gold text-brand-dark w-10 h-10 flex items-center justify-center rounded-full text-3xl font-serif">❝</div>
                
                <p className="text-base font-light italic text-gray-300 mt-6 mb-8 leading-relaxed flex-grow">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                  <img src={review.img} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold" />
                  <div>
                    <h4 className="font-heading font-bold text-white tracking-wide">{review.name}</h4>
                    <p className="text-xs text-brand-gold uppercase tracking-wider">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Packages;