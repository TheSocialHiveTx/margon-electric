
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StickyCall from './components/StickyCall';
import { ShieldCheck, Zap, PhoneCall, Award } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        {/* Trust Bar */}
        <div className="bg-blue-900 py-6">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 text-yellow-400 mb-2" />
              <span className="text-sm font-semibold uppercase tracking-wider">Licensed & Insured</span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-8 h-8 text-yellow-400 mb-2" />
              <span className="text-sm font-semibold uppercase tracking-wider">24/7 Emergency</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-yellow-400 mb-2" />
              <span className="text-sm font-semibold uppercase tracking-wider">5.0 Star Rated</span>
            </div>
            <div className="flex flex-col items-center">
              <PhoneCall className="w-8 h-8 text-yellow-400 mb-2" />
              <span className="text-sm font-semibold uppercase tracking-wider">Free Estimates</span>
            </div>
          </div>
        </div>

        <Services />
        <About />
        <Reviews />
        <ContactForm />
      </main>

      <Footer />
      <StickyCall />
    </div>
  );
};

export default App;
