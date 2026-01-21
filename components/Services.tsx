
import React from 'react';
import { Home, Building2, Zap, Lightbulb, ShieldAlert, Cpu } from 'lucide-react';

const services = [
  {
    title: 'Residential Services',
    description: 'From panel upgrades to new outlets, we handle all your home electrical needs with precision.',
    icon: Home,
  },
  {
    title: 'Commercial Projects',
    description: 'Expert electrical installations and maintenance for businesses and commercial properties.',
    icon: Building2,
  },
  {
    title: '24/7 Emergency Repairs',
    description: 'Electrical issues don\'t wait. We provide round-the-clock emergency support for your safety.',
    icon: ShieldAlert,
  },
  {
    title: 'Lighting Solutions',
    description: 'Interior and exterior lighting design and installation to brighten and secure your property.',
    icon: Lightbulb,
  },
  {
    title: 'Panel Upgrades',
    description: 'Old panels can be dangerous. Upgrade to a modern, safe, and efficient system today.',
    icon: Zap,
  },
  {
    title: 'EV Charger Install',
    description: 'Get your home ready for the future with professional electric vehicle charging stations.',
    icon: Cpu,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">What We Do</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-4">Complete Electrical Services</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional electrical solutions tailored to your specific needs. Licensed, safe, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-blue-950 mb-3">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a href="#contact" className="text-blue-600 font-bold text-sm uppercase tracking-wider flex items-center hover:text-blue-800">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
