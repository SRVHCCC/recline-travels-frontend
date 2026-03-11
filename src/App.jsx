import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';
import VisaServices from './pages/VisaServices';
import Contact from './pages/Contact';
import About from './pages/About';

// Temporary placeholders for other pages
// const Packages = () => <div className="flex items-center justify-center h-screen text-3xl font-heading text-brand-blue pt-20">Packages Page Coming Soon</div>;
// const VisaServices = () => <div className="flex items-center justify-center h-screen text-3xl font-heading text-brand-blue pt-20">Visa Services Coming Soon</div>;
// const Contact = () => <div className="flex items-center justify-center h-screen text-3xl font-heading text-brand-blue pt-20">Contact Page Coming Soon</div>;
// const About = () => <div className="flex items-center justify-center h-screen text-3xl font-heading text-brand-blue pt-20">About Page Coming Soon</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-brand-light text-brand-dark">
        {/* Global Navigation */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/visa" element={<VisaServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;