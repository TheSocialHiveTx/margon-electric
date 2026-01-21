
import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Jenkins',
    location: 'La Porte, TX',
    text: 'Margon Complete Electric saved the day! We had an emergency outage late Sunday night, and they were here within 30 minutes. Professional, kind, and fast.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    location: 'Pasadena, TX',
    text: 'Upgraded our entire home panel. The quote was transparent, the work was clean, and they handled all the permits. Best electrician I have worked with.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    location: 'Deer Park, TX',
    text: 'Very knowledgeable. They installed smart lighting throughout our office. Not only does it look great, but it works flawlessly. Highly recommend!',
    rating: 5,
  },
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-blue-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/30 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">What Our Clients Say</h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Our 5.0-star rating isn't just a number—it's a commitment to excellence on every job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
              <Quote className="w-10 h-10 text-yellow-500 mb-6 opacity-50" />
              <p className="text-blue-50 text-lg italic mb-8">"{review.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-blue-300 text-sm">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/search?q=Margon+Complete+Electric+La+Porte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-yellow-400 font-bold hover:underline"
          >
            Read All 18+ Google Reviews
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
