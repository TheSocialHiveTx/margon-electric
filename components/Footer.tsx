
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-xl font-black mb-4">MARGON COMPLETE ELECTRIC</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Providing professional electrical services to La Porte, TX and surrounding communities. Licensed, insured, and 24/7 available.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-sky-500 rounded-full flex items-center justify-center transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm text-yellow-500 mb-6">Service Area</h4>
            <ul className="space-y-3 text-slate-400">
              <li>La Porte, TX</li>
              <li>Pasadena, TX</li>
              <li>Deer Park, TX</li>
              <li>Baytown, TX</li>
              <li>League City, TX</li>
              <li>Seabrook, TX</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm text-yellow-500 mb-6">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Residential Services</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Get A Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm text-yellow-500 mb-6">Certifications</h4>
            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
              <p className="text-sm font-bold mb-2">STATE LICENSES:</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs border-b border-white/10 pb-2">
                  <span>Electrician License</span>
                  <span className="text-white font-mono">TmeL#207743</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-white/10 pb-2">
                  <span>Contractor License</span>
                  <span className="text-white font-mono">TECL#27118</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span>Reviews</span>
                  <span className="text-yellow-400 font-bold">5.0 / 5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Margon Complete Electric. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
