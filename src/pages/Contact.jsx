import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: '',
    travelDate: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Prepare data for Web3Forms
    const payload = {
      access_key: "YOUR_ACCESS_KEY_HERE", // ⚠️ REPLACE THIS WITH YOUR ACTUAL EMAIL ACCESS KEY
      subject: `New Luxury Travel Inquiry from ${formData.name}`,
      from_name: "Recline Travels",
      ...formData
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitMessage("Thank you! Your inquiry has been elegantly received. Our luxury travel advisor will contact you shortly.");
        setFormData({ name: '', phone: '', destination: '', travelDate: '', budget: '' });
      } else {
        setSubmitMessage("Something went wrong. Please try again or contact us directly on WhatsApp.");
      }
    } catch (error) {
      setSubmitMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#FAFAFA] pt-20 font-sans">
      
      {/* 1. LUXURY HERO HEADER */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-brand-light">
        {/* Premium Concierge / Lounge Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark/90 z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <span className="bg-brand-gold text-brand-dark px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] rounded-sm mb-6 inline-block shadow-lg">Exclusive Service</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 drop-shadow-2xl text-gray-700">
            Begin Your Journey
          </h1>
          <p className="text-lg md:text-xl font-light drop-shadow-lg text-gray-200 tracking-wide max-w-2xl mx-auto">
            Connect with our dedicated travel artisans to craft your perfect international holiday or bespoke honeymoon experience.
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFO & FORM SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact Details (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-2">Get In Touch</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">We Are Here To Assist You</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Whether you desire a fully customized itinerary, expert visa consultation, or simply wish to explore travel possibilities, our premium advisors are at your service 24/7.
              </p>
            </div>

            <div className="space-y-6">
              {/* Info Card 1 */}
              <div className="flex items-center bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-brand-gold transition-colors">
                <div className="bg-brand-blue/5 p-4 rounded-full text-brand-gold mr-6 border border-brand-blue/10">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-brand-dark mb-1">Corporate Office</h4>
                  <p className="text-gray-500 font-light text-sm">Delhi, India</p>
                </div>
              </div>

              {/* Info Card 2 */}
              <div className="flex items-center bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-brand-gold transition-colors">
                <div className="bg-brand-blue/5 p-4 rounded-full text-brand-gold mr-6 border border-brand-blue/10">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-brand-dark mb-1">Direct Line</h4>
                  <p className="text-gray-600 font-medium">+91 8109370826</p>
                  <p className="text-xs text-gray-400 mt-1 font-light">Available 24/7 via Call & WhatsApp</p>
                </div>
              </div>

              {/* Info Card 3 */}
              <div className="flex items-center bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-brand-gold transition-colors">
                <div className="bg-brand-blue/5 p-4 rounded-full text-brand-gold mr-6 border border-brand-blue/10">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-brand-dark mb-1">Email Support</h4>
                  <p className="text-gray-600 font-medium text-sm">info@reclinetravels.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Inquiry Form (Spans 7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full z-0"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-2">Request a Consultation</h3>
                <p className="text-gray-500 text-sm font-light mb-8">Fill out the details below and our travel expert will prepare a bespoke proposal for you.</p>
                
                {submitMessage && (
                  <div className={`p-4 mb-8 rounded-xl text-sm font-medium border ${submitMessage.includes('Thank you') ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200'}`}>
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-brand-dark uppercase tracking-widest mb-2">Full Name *</label>
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all duration-300 text-gray-700 font-light"
                        placeholder="e.g. Rahul Sharma"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-dark uppercase tracking-widest mb-2">Phone Number *</label>
                      <input 
                        type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all duration-300 text-gray-700 font-light"
                        placeholder="+91 XXXXX XXXXX"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-dark uppercase tracking-widest mb-2">Dream Destination</label>
                    <input 
                      type="text" name="destination" value={formData.destination} onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all duration-300 text-gray-700 font-light"
                      placeholder="e.g. Maldives, Europe, Bali"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-brand-dark uppercase tracking-widest mb-2">Travel Month</label>
                      <input 
                        type="month" name="travelDate" value={formData.travelDate} onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all duration-300 text-gray-600 font-light cursor-pointer"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-dark uppercase tracking-widest mb-2">Estimated Budget</label>
                      <div className="relative">
                        <select 
                          name="budget" value={formData.budget} onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all duration-300 text-gray-600 font-light appearance-none cursor-pointer"
                          disabled={isSubmitting}
                        >
                          <option value="" disabled>Select a budget range</option>
                          <option value="Under ₹1 Lakh">Under ₹1 Lakh</option>
                          <option value="₹1 Lakh - ₹3 Lakhs">₹1 Lakh - ₹3 Lakhs</option>
                          <option value="₹3 Lakhs - ₹5 Lakhs">₹3 Lakhs - ₹5 Lakhs</option>
                          <option value="Above ₹5 Lakhs">Above ₹5 Lakhs</option>
                        </select>
                        {/* Custom Dropdown Arrow */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-400">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg mt-6 uppercase tracking-widest flex justify-center items-center ${isSubmitting ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-brand-dark text-brand-gold hover:bg-brand-blue hover:text-white hover:-translate-y-1'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Request...
                      </>
                    ) : (
                      'Get My Free Consultation'
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-400 font-light mt-4">Your information is 100% secure and will never be shared.</p>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;