import React from 'react';
import { Link } from 'react-router-dom';
import meghalya from "../img/meghalya.avif"
import bhutan from "../img/bhutan-1.webp"
import georjia from "../img/gerojia.webp"
import uk from "../img/united-kingdom.jpg"
import turkey from "../img/turkey.webp"
import nort_est from "../img/nort_est.jpg"
import auli from "../img/new.jpg"
import bir_billing from "../img/bir_billing.webp"


const Home = () => {
  // --- UPDATED DATA ARRAYS ---
  const whyChooseUs = [
    { title: "International Travel Specialists", icon: "🌍" },
    { title: "Personalized Itineraries Designed Around You", icon: "📝" },
    { title: "Visa Documentation & Assistance Support", icon: "🛂" },
    { title: "Transparent Pricing Policy", icon: "💰" },
    { title: "24/7 Dedicated Travel Advisor", icon: "🎧" },
    { title: "Flexible & EMI Payment Options", icon: "💳" }
  ];

  const honeymoonDestinations = [
    { name: "Mauritius", details: "6 Nights", price: "57,000/-", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800" },
    { name: "Seychelles", details: "6 Nights", price: "47,000/-", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800" },
    { name: "Bali", details: "5 Nights", price: "29,000/-", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800" },
    { name: "Vietnam", details: "4 Nights", price: "28,000/-", img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800" },
    { name: "Europe", details: "9 Nights", price: "1,60,000/-", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800" },
    { name: "Maldives", details: "3 Nights", price: "57,000/-", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800" },
    { name: "Japan", details: "9 Nights", price: "1,80,000/-", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800" }
  ];

  const weekendTreks = [
    { name: "Kasol Kheerganga", details: "2N/3D", price: "7,499/-", img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800" },
    { name: "Tirthan Vally & Jibhi", details: "2N/3D", price: "8,000/-", img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800" },
    { name: "Auli Joshimath", details: "2N/3D", price: "7,999/-", img: auli },
    { name: "Triund & Mcleodganj", details: "2N/3D", price: "7,999/-", img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&q=80&w=800" },
    { name: "Bir Billing Paragliding", details: "2N/3D", price: "9,999/-", img: bir_billing },
    { name: "Chakrata Weekend", details: "2N/3D", price: "5,999/-", img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800" },
    { name: "Manali", details: "2N/3D", price: "6,499/-", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800" }
  ];

  const budgetFriendly = [
    { name: "Thailand", details: "4 Nights", price: "15,000/-", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800" },
    { name: "Baku", details: "4 Nights", price: "28,000/-", img: "https://images.unsplash.com/photo-1589182337358-2cb63099350c?auto=format&fit=crop&q=80&w=800" },
    { name: "Almaty", details: "4 Nights", price: "20,000/-", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800" },
    { name: "Sri Lanka", details: "4 Nights", price: "34,000/-", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800" },
    { name: "Malaysia", details: "3 Nights", price: "14,000/-", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800" }
  ];

  const mustExplore = [
    { name: "South Africa & Kenya", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800" },
    { name: "Australia", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800" },
    { name: "UK", img: uk },
    { name: "Turkey", img: turkey },
    { name: "Georgia", img: georjia },
    { name: "South Korea", img: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=800" },
    { name: "Hong Kong & Macau", img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800" },
    { name: "China", img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=800" }
  ];

  const domesticPackages = [
    { name: "Nepal", price: "15,000/-", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800" },
    { name: "Manali", price: "7,000/-", img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800" },
    { name: "Kerala", price: "12,000/-", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800" },
    { name: "Andaman", price: "17,000/-", img: "https://images.unsplash.com/photo-1589182337358-2cb63099350c?auto=format&fit=crop&q=80&w=800" },
    { name: "Bhutan", price: "14,000/-", img: bhutan },
    { name: "North East", price: "14,000/-", img:  nort_est },
    { name: "Meghalaya", price: "18,000/-", img: meghalya },
    { name: "Rajasthan", price: "9,000/-", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800" },
    { name: "Kashmir", price: "18,000/-", img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800" },
    { name: "Goa", price: "7,000/-", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800" },
    { name: "Ladakh", price: "15,000/-", img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&q=80&w=800" }
  ];

  const aiFeatures = [
    { title: "AI Trip Planner Tool", desc: "Instant itinerary suggestions based on destination, budget, and travel dates." },
    { title: "AI Chatbot Assistant", desc: "24/7 automated support for packages, visa queries, and FAQs." },
    { title: "Instant Budget Calculator", desc: "Real-time estimated package pricing." },
    { title: "Smart Recommendation Engine", desc: "Suggests destinations based on travel purpose and season." }
  ];

  // Reusable Component for Package Cards - UPDATED with <Link>
  const PackageGrid = ({ data, title, subtitle }) => (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">{subtitle}</h2>
        <h3 className="text-4xl font-heading font-bold text-brand-blue mb-4">{title}</h3>
        <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          // Yahan div ki jagah <Link> use kiya hai taaki click karne par "/contact" page open ho
          <Link to="/contact" key={index} className="group relative h-72 rounded-xl overflow-hidden shadow-lg cursor-pointer block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${item.img}')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 p-5 text-white w-full">
              <h4 className="text-xl font-heading font-bold text-yellow-400 mb-1">{item.name}</h4>
              {item.details && <p className="text-sm text-gray-300 font-semibold">{item.details}</p>}
              {item.price && <p className="text-lg font-bold text-white mt-1">₹ {item.price}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full relative">
      
      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a 
        href="https://wa.me/918109370826" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center bg-brand-dark text-brand-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-60 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-brand-dark/90 z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight drop-shadow-2xl text-white">
            From Weekend Treks to Global Adventures, <br />
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
              Plan My Trip
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
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976')] bg-cover bg-center opacity-90"></div>
        </div>
      </section>

      {/* 3. DESTINATIONS SECTIONS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <PackageGrid data={honeymoonDestinations} title="Honeymoon Specialization" subtitle="Romance Awaits" />
          <PackageGrid data={weekendTreks} title="Weekend Trek Trips" subtitle="Adventure Calls" />
          <PackageGrid data={budgetFriendly} title="Budget Friendly Escapes" subtitle="Travel Smart" />
          <PackageGrid data={mustExplore} title="Must Explore Destinations" subtitle="Bucket List" />
          <PackageGrid data={domesticPackages} title="Domestic Packages" subtitle="Incredible India & Beyond" />
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-semibold text-yellow-500 uppercase tracking-[0.3em] mb-3">Our Promise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14">Why Choose Recline Travels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-5 text-yellow-500">{item.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AI FEATURES */}
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

      {/* 6. TESTIMONIALS */}
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

      {/* 7. FOOTER / ADDRESS SECTION */}
      <footer className="bg-brand-dark text-white py-12 border-t-4 border-brand-gold">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div>
            <h4 className="text-2xl font-bold text-brand-gold mb-2">Recline Travels</h4>
            <p className="text-gray-300">Your trusted partner for global adventures.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h5 className="text-yellow-500 font-semibold mb-1">📍 Delhi Office</h5>
              <p className="text-sm text-gray-300">Headquarters, New Delhi, India</p>
            </div>
            <div>
              <h5 className="text-yellow-500 font-semibold mb-1">📍 Jhansi Office</h5>
              <p className="text-sm text-gray-300">Regional Branch, Jhansi, UP</p>
            </div>
            <div>
              <h5 className="text-yellow-500 font-semibold mb-1">📞 Contact Us</h5>
              <p className="text-sm text-gray-300">+91 8109370826</p>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default Home;