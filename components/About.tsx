
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
            <img
              src="https://picsum.photos/seed/truck/800/600"
              alt="Margon Complete Electric Service Truck"
              className="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-[400px] lg:h-[500px]"
            />
            <div className="absolute bottom-8 right-8 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="text-4xl font-black text-blue-900 mb-1">5.0</div>
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-500 text-sm font-bold uppercase">Google Verified Rating</p>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Local & Professional</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-6">Your Trusted La Porte Electrician</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Margon Complete Electric is a locally owned and operated electrical service company. We pride ourselves on delivering high-quality workmanship and exceptional customer service to our neighbors in La Porte and the surrounding Texas areas.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Fully Licensed (TmeL#207743, TECL#27118)',
                'Master Electrician Supervised',
                'Comprehensive Safety Inspections',
                'Upfront Pricing & No Hidden Fees',
                '24/7 Emergency Support Guaranteed',
                'Veteran Operated & Community Focused',
              ].map((item) => (
                <li key={item} className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="tel:2816076720"
              className="inline-block bg-blue-900 text-white font-bold px-10 py-4 rounded-lg hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/10"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
