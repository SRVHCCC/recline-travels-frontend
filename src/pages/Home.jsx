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
        {/* Luxury Resort Background Image */}
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
            <Link to="/contact" className="bg-brand-gold text-brand-dark px-8 py-4 rounded-sm font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-xl text-lg uppercase tracking-wide">
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
          <div className="bg-gray-50 border-l-4 border-brand-gold p-6 mt-8 rounded-r-lg shadow-sm">
            <h4 className="text-xl font-heading font-bold text-brand-dark mb-2">Founder's Vision</h4>
            <p className="text-gray-600 text-sm italic leading-relaxed text-justify">
              Founded by <strong className="text-brand-dark">Rukshar Khan</strong>, an MBA in Tourism Management, Recline Travels blends academic knowledge with real-world execution. Rukshar believes travel is more than tickets and hotels — it is about emotions, milestones, and lifelong memories. Every booking carries responsibility, trust, and a commitment to premium travel experiences.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-[500px] rounded-t-full bg-gray-200 shadow-2xl relative overflow-hidden border-b-8 border-brand-gold flex items-center justify-center">
            {/* Professional Business Woman Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976')] bg-cover bg-center opacity-90"></div>
        </div>
      </section>

       {/* 4. DESTINATIONS SECTION (Now with Images) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">Explore The World</h2>
          <h3 className="text-4xl font-heading font-bold text-brand-blue mb-4">Major International Destinations</h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {intlDestinations.map((dest, index) => (
            <div key={index} className="group relative h-80 rounded-xl overflow-hidden shadow-xl cursor-pointer">
              {/* Actual Image Background */}
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${dest.img}')` }}></div>
              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 p-6 text-brand-light w-full">
                <h4 className="text-2xl font-heading font-bold text-yellow-500 mb-2 drop-shadow-md">{dest.name}</h4>
                <p className="font-sans text-sm text-gray-200 drop-shadow-md">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16 mt-24">
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">Discover India</h2>
          <h3 className="text-4xl font-heading font-bold text-brand-blue mb-4">Major Domestic Destinations</h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domesticDestinations.map((dest, index) => (
            <div key={index} className="group relative h-80 rounded-xl overflow-hidden shadow-xl cursor-pointer">
              {/* Actual Image Background */}
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${dest.img}')` }}></div>
              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 p-6 text-brand-light w-full">
                <h4 className="text-2xl font-heading font-bold text-yellow-500 mb-2 drop-shadow-md">{dest.name}</h4>
                <p className="font-sans text-sm text-gray-200 drop-shadow-md">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HONEYMOON SPECIALIZATION */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center text-center">
  
  {/* Romantic Beach Dinner Background */}
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center z-0"></div>
  <div className="absolute inset-0 bg-black/70 z-0"></div>
  
  <div className="max-w-4xl mx-auto px-6 relative z-10">
    <h2 className="text-sm font-semibold text-yellow-500 uppercase tracking-[0.2em] mb-2">
      Romance Awaits
    </h2>

    <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
      Honeymoon Specialization
    </h3>

    <p className="text-lg text-gray-200 mb-8 font-light drop-shadow-md">
      Celebrate your new beginning with curated honeymoon packages in Maldives, Thailand, Dubai, Bali, and Europe.
    </p>

    <div className="inline-block border border-yellow-500 p-6 rounded-lg bg-black/40 backdrop-blur-md shadow-2xl">
      <h4 className="text-yellow-500 font-bold mb-2 text-xl">What's Included:</h4>
      <p className="text-white">
        Private luxury stays, romantic setups, visa assistance, and fully customized experiences.
      </p>
    </div>
  </div>

</section>

      

      {/* 3. WHY CHOOSE US */}
     <section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-sm font-semibold text-yellow-500 uppercase tracking-[0.3em] mb-3">
      Our Promise
    </h2>

    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14">
      Why Choose Recline Travels
    </h3>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {whyChooseUs.map((item, index) => (
        <div
          key={index}
          className="bg-white p-10 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
        >

          {/* Icon */}
          <div className="text-5xl mb-5 text-yellow-500">
            {item.icon}
          </div>

          {/* Title */}
          <h4 className="text-xl font-semibold text-gray-800">
            {item.title}
          </h4>

        </div>
      ))}

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
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-brand-blue flex flex-col justify-center hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-heading font-bold text-brand-dark mb-3 flex items-center gap-3">
                  <span className="text-brand-gold text-2xl">✨</span> {feature.title}
                </h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (Teaser) */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">Client Diaries</h2>
        <h3 className="text-4xl font-heading font-bold text-brand-blue mb-12">What Our Travelers Say</h3>
        <div className="p-10 bg-white shadow-2xl rounded-xl border-t-4 border-brand-gold max-w-3xl mx-auto relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-gold text-white w-12 h-12 flex items-center justify-center rounded-full text-3xl shadow-lg">❝</div>
          <p className="text-xl italic text-gray-700 mb-6 mt-4">"Recline Travels made our Europe honeymoon absolutely magical. From the visa process to the private tours in Switzerland, everything was flawlessly executed. True professionals!"</p>
          <div className="font-heading font-bold text-brand-dark text-lg">— Aakash & Priya, Delhi</div>
          <div className="text-yellow-500 mt-2 text-xl">★★★★★</div>
          <div className="text-gray-500 text-sm mt-1">Verified Google Review</div>
        </div>
      </section>
    </div>
  );
};

export default Home;