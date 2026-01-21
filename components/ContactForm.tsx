
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="bg-blue-900 text-white p-12 lg:w-2/5">
            <h2 className="text-3xl font-extrabold mb-8">Get Your Free Quote</h2>
            <p className="text-blue-100 mb-12 text-lg">
              Need immediate service or planning a new project? Reach out to us today for a transparent, upfront estimate.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 shrink-0">
                  <Phone className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-blue-300">Call Us Anytime</h4>
                  <a href="tel:2816076720" className="text-2xl font-bold hover:text-yellow-400 transition-colors">(281) 607-6720</a>
                  <p className="text-sm text-yellow-500 font-bold mt-1">OPEN 24 HOURS</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-blue-300">Our Location</h4>
                  <p className="text-xl font-bold">9726 Rustic Rock Rd,<br />La Porte, TX 77571</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 shrink-0">
                  <Mail className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-blue-300">Email Us</h4>
                  <p className="text-xl font-bold">service@margoncomplete.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-white/10">
              <p className="text-sm font-medium text-blue-300">LICENSES:</p>
              <p className="text-lg font-bold text-white uppercase tracking-wider">TmeL#207743 | TECL#27118</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 lg:w-3/5 bg-white">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-extrabold text-blue-950 mb-4">Message Sent!</h3>
                <p className="text-slate-600 text-lg mb-8 max-w-md">
                  Thank you for reaching out. We've received your request and will contact you shortly to discuss your electrical needs.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-blue-900 text-white font-bold px-8 py-3 rounded-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                      placeholder="(281) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Service Needed</label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  >
                    <option value="">Select a service...</option>
                    <option value="residential">Residential Electrical</option>
                    <option value="commercial">Commercial Electrical</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="lighting">Lighting Installation</option>
                    <option value="panel">Panel Upgrade</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                    placeholder="Briefly describe what you need help with..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-lg flex items-center justify-center transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  ) : (
                    <>
                      REQUEST FREE QUOTE
                      <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
