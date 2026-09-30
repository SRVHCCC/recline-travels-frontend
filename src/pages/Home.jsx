import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import founder from "../img/ruksar.png";
import mauritious from "../img/mauritious.avif";
import mauritious1 from "../img/mauritious1.avif";
import mauritious2 from "../img/mauritious2.avif";
import sechelles from "../img/seychelles.avif";
import sechelles1 from "../img/seychelles1.avif";
import sechelles2 from "../img/seychelles2.avif";
import europe from "../img/europe.avif";
import triund from "../img/triund.avif";
import triund1 from "../img/triund1.avif";
import triund2 from "../img/triund2.avif";
import auli from "../img/auli.avif";
import auli1 from "../img/auli1.avif";
import auli2 from "../img/auli2.avif";
import birbilling from "../img/birbilling.avif";
import birbilling1 from "../img/birbilling1.avif";
import birbilling2 from "../img/birbilling2.avif";
import thailand from "../img/thailand.avif";
import baku from "../img/baku.avif";
import baku1 from "../img/baku1.avif";
import baku2 from "../img/baku2.avif";
import srilanka from "../img/srilanka.avif";
import srilanka1 from "../img/srilanka1.avif";
import srilanka2 from "../img/srilanka2.webp";
import malaysia from "../img/malaysia.avif";
import andaman from "../img/andaman.avif";
import andaman1 from "../img/andaman1.avif";
import rajsthan from "../img/rajsthan.avif";
import rajsthan1 from "../img/rajsthan1.avif";
import kasmire1 from "../img/kasmire1.avif";
import kasmire2 from "../img/kasmire2.avif";










const Home = () => {
  // Ensure page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whyChooseUs = [
    { title: "Global Experts", icon: "🌍", desc: "Specialized in crafting premium international experiences." },
    { title: "Tailored For You", icon: "📝", desc: "Personalized itineraries built perfectly around your needs." },
    { title: "Visa Assistance", icon: "🛂", desc: "End-to-end reliable and hassle-free documentation support." },
    { title: "Transparent Pricing", icon: "💰", desc: "Honest policies with absolutely no hidden fees." },
    { title: "24/7 Support", icon: "🎧", desc: "Dedicated travel advisors available round the clock." },
    { title: "Flexible EMI", icon: "💳", desc: "Travel to your dream destination and pay later." }
  ];

  // Upgraded data structure with 3 images per destination for the new rich grid layout
  const honeymoonDestinations = [
    { name: "Mauritius", details: "6 Nights", price: "57,000/-", imgs: [
      mauritious,
      mauritious1,
      mauritious2
    ]},
    { name: "Seychelles", details: "6 Nights", price: "47,000/-", imgs: [
      sechelles,
      sechelles1,
      sechelles2
    ]},
    { name: "Bali", details: "5 Nights", price: "29,000/-", imgs: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=600"
    ]},
    { name: "Europe", details: "9 Nights", price: "1,60,000/-", imgs: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?auto=format&fit=crop&q=80&w=600",
      europe
    ]}
  ];

  const weekendTreks = [
    { name: "Kasol Kheerganga", details: "2N/3D", price: "7,499/-", imgs: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517823382935-51bfcb0ec6bc?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&q=80&w=600"
    ]},
    { name: "Triund Trek", details: "2N/3D", price: "7,999/-", imgs: [
      triund,
      triund1,
      triund2
    ]},
    { name: "Auli Joshimath", details: "2N/3D", price: "7,999/-", imgs: [
      auli,
      auli1,
      auli2
    ]},
    { name: "Bir Billing", details: "2N/3D", price: "9,999/-", imgs: [
      birbilling,
      birbilling1,
      birbilling2
    ]}
  ];

  const budgetFriendly = [
    { name: "Thailand", details: "4 Nights", price: "15,000/-", imgs: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=600",
      thailand
    ]},
    { name: "Baku", details: "4 Nights", price: "28,000/-", imgs: [
      baku,
      baku1,
      baku2
    ]},
    { name: "Sri Lanka", details: "4 Nights", price: "34,000/-", imgs: [
      srilanka,
      srilanka1,
      srilanka2
    ]},
    { name: "Malaysia", details: "3 Nights", price: "14,000/-", imgs: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=600",
      malaysia
    ]}
  ];

  const domesticPackages = [
    { name: "Kerala", price: "12,000/-", imgs: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=600"
    ]},
    { name: "Andaman", price: "17,000/-", imgs: [
      andaman,
      andaman1,
      "https://images.unsplash.com/photo-1510662145379-13537db782dc?auto=format&fit=crop&q=80&w=600"
    ]},
    { name: "Rajasthan", price: "9,000/-", imgs: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800",
      rajsthan,
      rajsthan1
    ]},
    { name: "Kashmir", price: "18,000/-", imgs: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800",
      kasmire1,
      kasmire2
    ]}
  ];

  // A completely new, stunning component to show 3 images per package
  const PackageGrid = ({ data, title, subtitle }) => (
    <div className="mb-32">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-3">{subtitle}</h2>
        <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-dark mb-6">{title}</h3>
        <div className="w-24 h-1.5 bg-brand-gold mx-auto rounded-full shadow-lg"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {data.map((item, index) => (
          <Link to="/contact" key={index} className="group block h-[450px] md:h-[550px] w-full relative rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 border-4 border-white">
            {/* 3-Image Gallery Layout with crisp white gaps */}
            <div className="absolute inset-0 flex gap-1 bg-white">
              {/* Main Left Image (60%) */}
              <div className="w-[60%] h-full relative overflow-hidden bg-gray-100">
                <img src={item.imgs[0]} alt={item.name} className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
              </div>
              {/* Side Right Images (40%) */}
              <div className="w-[40%] h-full flex flex-col gap-1 bg-white">
                <div className="h-1/2 w-full relative overflow-hidden bg-gray-100">
                   <img src={item.imgs[1]} alt={`${item.name} 2`} className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
                </div>
                <div className="h-1/2 w-full relative overflow-hidden bg-gray-100">
                   <img src={item.imgs[2]} alt={`${item.name} 3`} className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
                </div>
              </div>
            </div>
            
            {/* Unified Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500 z-10"></div>
            
            {/* Text Overlay Section */}
            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full z-20 flex flex-col justify-end h-full">
              <h4 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 drop-shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">{item.name}</h4>
              
              <div className="flex flex-wrap items-center gap-3 md:gap-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                {item.details && (
                  <span className="bg-brand-gold text-brand-dark px-5 py-2 rounded-full font-bold shadow-lg text-xs tracking-widest uppercase">
                    {item.details}
                  </span>
                )}
                {item.price && (
                  <span className="text-gray-200 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-xs tracking-widest uppercase">
                    Starting <span className="text-brand-gold font-bold ml-1 text-sm">₹{item.price}</span>
                  </span>
                )}
              </div>
              
              {/* Dynamic Hover Action Button */}
              <div className="mt-8 overflow-hidden h-0 group-hover:h-12 transition-all duration-500 opacity-0 group-hover:opacity-100 flex items-center text-brand-gold font-bold uppercase tracking-widest text-sm">
                <span className="border-b-2 border-brand-gold pb-1 tracking-[0.2em]">Explore Itinerary</span> 
                <span className="ml-4 text-2xl transition-transform duration-300 group-hover:translate-x-3">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full relative bg-[#FAFAFA]">
      
      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a 
        href="https://wa.me/918109370826" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.5)] hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center border-4 border-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex items-center overflow-hidden">
        {/* Background Image (Tropical / Resort style matching the teal sky aesthetic) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=2070" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient from left to ensure text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6 md:px-16 lg:px-24 w-full max-w-7xl mx-auto pt-20">
          <div className="max-w-2xl">
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-[95px] font-serif text-white leading-[1.05] mb-8 drop-shadow-xl">
              <span className="block font-normal tracking-wide">DISCOVER</span>
              <span className="block font-normal tracking-wide">YOUR NEXT</span>
              <span className="block font-normal capitalize italic mt-2">Adventure</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-base md:text-xl font-sans font-normal text-white max-w-md mb-12 drop-shadow-md leading-relaxed">
              From exotic escapes to hidden gems, <br className="hidden sm:block" /> Recline Travels brings the world closer to you.
            </p>
            
            {/* Custom CTA Button matching theme colors */}
            <Link to="/packages" className="inline-flex items-center bg-brand-gold hover:bg-yellow-400 text-brand-dark rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)] pl-8 pr-2 py-2 group mt-4">
              <span className="font-bold text-sm tracking-widest mr-6 uppercase">Find My Trip</span>
              <div className="bg-white text-brand-dark w-12 h-12 rounded-full flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT & FOUNDER SECTION */}
      <section className="py-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
        {/* Left Side: Editorial Text */}
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
            <span className="w-12 h-0.5 bg-brand-gold"></span> The Recline Experience
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-dark mb-8 leading-tight">
            Elevating How You <br className="hidden md:block" /> Experience the World
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Established in 2022, Recline Travels is a Delhi-based premium international travel company built on professional tourism expertise dating back to 2018. We specialize in customized international holidays, luxury honeymoon experiences, and visa assistance. 
          </p>
          
          <div className="bg-gray-50 border-l-4 border-brand-gold p-8 mt-10 rounded-r-xl">
            <h4 className="text-xl font-heading font-bold text-brand-dark mb-2">Founder's Vision</h4>
            <p className="text-gray-600 text-base italic leading-relaxed">
              "Founded by <strong className="text-brand-dark">Rukshar Khan</strong>, an MBA in Tourism Management, we blend academic knowledge with real-world execution. We believe travel is more than tickets and hotels — it is about emotions, milestones, and lifelong memories."
            </p>
          </div>
        </div>
        
        {/* Right Side: Classic, Professional Image Layout */}
        <div className="lg:w-1/2 w-full relative mt-12 lg:mt-0 pl-0 md:pl-6">
          {/* Subtle Background Accent */}
          <div className="absolute top-10 -right-4 md:-right-8 w-full h-full bg-brand-gold/10 rounded-3xl -z-10"></div>
          
          {/* Main Clean Image */}
          <div className="w-full rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] overflow-hidden relative z-10 bg-gray-100 group">
            <img 
              src={founder} 
              alt="Founder Rukshar Khan" 
              className="w-full h-[450px] md:h-[550px] object-cover object-top transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          
          {/* Floating White Name Card */}
          <div className="absolute -bottom-8 -left-4 md:-left-8 bg-white px-8 py-6 rounded-2xl shadow-2xl z-20 border-t-4 border-brand-gold transform transition-transform duration-300 hover:-translate-y-2">
            <h4 className="font-heading font-extrabold text-2xl text-brand-dark mb-1">Rukshar Khan</h4>
            <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">Founder & CEO</p>
            <div className="mt-4 flex items-center gap-2 text-gray-500 text-sm font-semibold">
              <span className="text-yellow-500">★</span> 5+ Years of Excellence
            </div>
          </div>
        </div>
      </section>

      {/* 3. DESTINATIONS SECTIONS WITH NEW MULTI-IMAGE CARDS */}
      <section className="py-32 bg-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <PackageGrid data={honeymoonDestinations} title="Honeymoon Specialization" subtitle="Romance Awaits" />
          <PackageGrid data={weekendTreks} title="Weekend Trek Trips" subtitle="Adventure Calls" />
          <PackageGrid data={budgetFriendly} title="Budget Friendly Escapes" subtitle="Travel Smart" />
          <PackageGrid data={domesticPackages} title="Domestic Packages" subtitle="Incredible India & Beyond" />
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-32 bg-brand-dark text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">Our Promise</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-20 drop-shadow-lg">Why Choose Recline Travels</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl hover:bg-white/10 transition-colors duration-300 hover:-translate-y-2 group text-left">
                <div className="text-5xl mb-6 bg-brand-gold/20 w-20 h-20 flex items-center justify-center rounded-2xl text-brand-gold group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-32 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">Client Diaries</h2>
        <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-dark mb-16">What Our Travelers Say</h3>
        <div className="p-12 md:p-16 bg-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] rounded-[2rem] border-t-8 border-brand-gold max-w-4xl mx-auto relative transform hover:scale-[1.02] transition-transform duration-500">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-brand-gold text-brand-dark w-16 h-16 flex items-center justify-center rounded-full text-4xl shadow-xl">❝</div>
          <p className="text-2xl italic text-gray-700 mb-10 leading-relaxed font-light">"Recline Travels made our Europe honeymoon absolutely magical. From the seamless visa process to the private tours in Switzerland, everything was flawlessly executed. True professionals with unmatched luxury standards!"</p>
          <div className="font-heading font-bold text-brand-dark text-xl">— Aakash & Priya, Delhi</div>
          <div className="flex justify-center items-center gap-2 mt-4">
             <div className="text-yellow-500 text-2xl tracking-widest">★★★★★</div>
          </div>
          <div className="text-gray-400 text-sm mt-2 uppercase tracking-widest font-bold">Verified Google Review</div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
