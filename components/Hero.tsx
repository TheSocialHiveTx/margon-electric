
import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/electrician/1920/1080"
          alt="Professional Electrician at Work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 px-3 py-1 rounded-full text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Star className="w-3 h-3 mr-2 fill-yellow-400" />
            5.0 Rated Electrician in La Porte
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Reliable Electrical Solutions <span className="text-yellow-500">24/7.</span>
          </h1>
          
          <p className="text-xl text-slate-200 mb-8 max-w-xl">
            Margon Complete Electric provides expert residential and commercial services. Licensed, insured, and dedicated to keeping your home safe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-black text-lg px-8 py-4 rounded-md transition-all shadow-lg shadow-yellow-500/20 group"
            >
              GET A FREE ESTIMATE
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:2816076720"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-md transition-all backdrop-blur-sm border border-white/20"
            >
              EMERGENCY CALL
            </a>
          </div>

          <div className="mt-12 flex items-center space-x-6 text-slate-300">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-blue-900 object-cover"
                  src={`https://i.pravatar.cc/150?u=${i}`}
                  alt="Customer avatar"
                />
              ))}
            </div>
            <p className="text-sm">
              <span className="text-white font-bold">18+ Happy Customers</span> in La Porte & surrounding areas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
