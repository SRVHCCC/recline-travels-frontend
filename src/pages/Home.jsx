import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // --- DATA ARRAYS WITH PREMIUM IMAGES ---
  const whyChooseUs = [
    { title: "International Travel Specialists", icon: "🌍" },
    { title: "Personalized Itineraries Designed Around You", icon: "📝" },
    { title: "Visa Documentation & Assistance Support", icon: "🛂" },
    { title: "Transparent Pricing Policy", icon: "💰" },
    { title: "24/7 Dedicated Travel Advisor", icon: "🎧" },
    { title: "Flexible & EMI Payment Options", icon: "💳" }
  ];

  const intlDestinations = [
    { name: "Thailand", desc: "Romantic beaches, island hopping & vibrant nightlife.", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=2039" },
    { name: "Dubai", desc: "Luxury skyline, desert safari & iconic attractions.", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2070" },
    { name: "Maldives", desc: "Private water villas & ultimate honeymoon luxury.", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=2065" },
    { name: "Bali", desc: "Tropical villas, serene temples & romantic escapes.", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2038" },
    { name: "Singapore", desc: "Modern city vibes & family-friendly attractions.", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1952" },
    { name: "Europe", desc: "Switzerland, France, Italy – Dream landscapes.", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=2020" }
  ];

  const domesticDestinations = [
    { name: "Kashmir", desc: "Snow-capped mountains & houseboat experiences.", img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=2070" },
    { name: "Andaman", desc: "Crystal-clear beaches & peaceful island retreats.", img: "https://images.unsplash.com/photo-1589182337358-2cb63099350c?auto=format&fit=crop&q=80&w=2070" },
    { name: "Goa", desc: "Beach holidays & vibrant nightlife.", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1974" },
    { name: "Manali", desc: "Romantic hill station with snow adventures.", img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=2070" },
    { name: "Kerala", desc: "Backwaters, tea gardens & serene escapes.", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=2086" },
    { name: "Ladakh", desc: "Adventure landscapes & high-altitude lakes.", img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&q=80&w=2070" }
  ];

  const aiFeatures = [
    { title: "AI Trip Planner Tool", desc: "Instant itinerary suggestions based on destination, budget, and travel dates." },
    { title: "AI Chatbot Assistant", desc: "24/7 automated support for packages, visa queries, and FAQs." },
    { title: "Instant Budget Calculator", desc: "Real-time estimated package pricing." },
    { title: "Smart Recommendation Engine", desc: "Suggests destinations based on travel purpose and season." }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center bg-brand-dark text-brand-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-60 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-brand-dark/90 z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight drop-shadow-2xl text-white">
            Luxury International Travel, <br />
            <span className="text-brand-gold">Perfectly Planned.</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 font-sans font-light max-w-3xl drop-shadow-lg text-gray-200">
            Personalized itineraries, visa assistance, and 24/7 expert support — designed around your dates, your budget, and your travel style.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link to="/contact" className="bg-brand-gold text-brand-dark px-8 py-4 rounded-sm font-semibold hover:bg-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all duration-300 shadow-xl text-lg uppercase tracking-wide">
              Get Free Quote
            </Link>
            <Link to="/packages" className="bg-black/30 backdrop-blur-md border-2 border-brand-gold text-brand-gold px-8 py-4 rounded-sm font-semibold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 text-lg uppercase tracking-wide shadow-xl">
              Plan My Honeymoon
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT & FOUNDER SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">The Recline Experience</h2>
          <h3 className="text-4xl font-heading font-bold text-brand-blue mb-6">About Recline Travels</h3>
          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            Established in 2022, Recline Travels is a Delhi-based premium international travel company built on professional tourism expertise dating back to 2018. We specialize in customized international holidays, luxury honeymoon experiences, visa assistance, and premium travel planning. 
          </p>
          <div className="bg-yellow-50/50 border-l-4 border-yellow-500 p-6 mt-8 rounded-r-lg shadow-sm">
            <h4 className="text-xl font-heading font-bold text-brand-dark mb-2">Founder's Vision</h4>
            <p className="text-gray-600 text-sm italic leading-relaxed text-justify">
              Founded by <strong className="text-brand-dark">Rukshar Khan</strong>, an MBA in Tourism Management, Recline Travels blends academic knowledge with real-world execution. Rukshar believes travel is more than tickets and hotels — it is about emotions, milestones, and lifelong memories. Every booking carries responsibility, trust, and a commitment to premium travel experiences.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-[500px] rounded-t-full bg-gray-200 shadow-2xl relative overflow-hidden border-b-8 border-yellow-500 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976')] bg-cover bg-center opacity-90"></div>
        </div>
      </section>

      {/* 3. DESTINATIONS SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">Explore The World</h2>
          <h3 className="text-4xl font-heading font-bold text-brand-blue mb-4">Major International Destinations</h3>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {intlDestinations.map((dest, index) => (
            <div key={index} className="group relative h-80 rounded-xl overflow-hidden shadow-xl cursor-pointer border border-transparent hover:border-yellow-500 transition-all duration-300">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${dest.img}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
              
              <div className="absolute bottom-0 p-6 text-brand-light w-full border-b-4 border-transparent group-hover:border-yellow-500 transition-all duration-300">
                <h4 className="text-2xl font-heading font-bold text-yellow-500 mb-2 drop-shadow-md">{dest.name}</h4>
                <p className="font-sans text-sm text-gray-200 drop-shadow-md">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16 mt-24">
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">Discover India</h2>
          <h3 className="text-4xl font-heading font-bold text-brand-blue mb-4">Major Domestic Destinations</h3>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domesticDestinations.map((dest, index) => (
            <div key={index} className="group relative h-80 rounded-xl overflow-hidden shadow-xl cursor-pointer border border-transparent hover:border-yellow-500 transition-all duration-300">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${dest.img}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
              
              <div className="absolute bottom-0 p-6 text-brand-light w-full border-b-4 border-transparent group-hover:border-yellow-500 transition-all duration-300">
                <h4 className="text-2xl font-heading font-bold text-yellow-500 mb-2 drop-shadow-md">{dest.name}</h4>
                <p className="font-sans text-sm text-gray-200 drop-shadow-md">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 bg-brand-blue text-brand-light border-y-4 border-yellow-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-semibold text-yellow-400 uppercase tracking-[0.2em] mb-2">Our Promise</h2>
          <h3 className="text-4xl font-heading font-bold mb-12 text-gray-800">Why Choose Recline Travels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 shadow-lg group">
                <div className="text-5xl mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300 drop-shadow-lg">{item.icon}</div>
                <h4 className="text-xl font-heading font-semibold text-gray-600 group-hover:text-gray-400 transition-colors duration-300">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HONEYMOON SPECIALIZATION */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center z-0"></div>
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-sm font-semibold text-yellow-500 uppercase tracking-[0.2em] mb-2">
            Romance Awaits
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg font-heading">
            Honeymoon Specialization
          </h3>
          <p className="text-lg text-gray-200 mb-8 font-light drop-shadow-md">
            Celebrate your new beginning with curated honeymoon packages in Maldives, Thailand, Dubai, Bali, and Europe.
          </p>

          <div className="inline-block border-l-4 border-yellow-500 p-6 rounded-lg bg-black/40 backdrop-blur-md shadow-2xl text-left">
            <h4 className="text-yellow-500 font-bold mb-2 text-xl">What's Included:</h4>
            <p className="text-white font-light">
                Private luxury stays, romantic setups, visa assistance, and fully customized experiences.
            </p>
          </div>
        </div>
      </section>

      {/* 6. AI FEATURES (2026 READY) */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">Future of Travel</h2>
            <h3 className="text-4xl font-heading font-bold text-brand-blue mb-4">Modern AI Features (2026 Ready)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-yellow-500 flex flex-col justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-xl font-heading font-bold text-brand-dark mb-3 flex items-center gap-3">
                  <span className="text-yellow-500 text-2xl drop-shadow-sm">✨</span> {feature.title}
                </h4>
                <p className="text-gray-600 font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (Teaser) */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">Client Diaries</h2>
        <h3 className="text-4xl font-heading font-bold text-brand-blue mb-12">What Our Travelers Say</h3>
        <div className="p-10 bg-white shadow-2xl rounded-xl border-t-4 border-yellow-500 max-w-3xl mx-auto relative hover:shadow-[0_20px_50px_rgba(234,179,8,0.15)] transition-shadow duration-300">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-3xl shadow-lg font-serif">❝</div>
          <p className="text-xl italic text-gray-700 mb-6 mt-4 leading-relaxed">"Recline Travels made our Europe honeymoon absolutely magical. From the visa process to the private tours in Switzerland, everything was flawlessly executed. True professionals!"</p>
          <div className="font-heading font-bold text-brand-dark text-lg">— Aakash & Priya, Delhi</div>
          <div className="text-yellow-500 mt-2 text-xl tracking-widest">★★★★★</div>
          <div className="text-gray-400 text-sm mt-1 font-light">Verified Google Review</div>
        </div>
      </section>
    </div>
  );
};

export default Home;