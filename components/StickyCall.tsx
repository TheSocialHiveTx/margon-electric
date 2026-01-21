
import React from 'react';
import { Phone } from 'lucide-react';

const StickyCall: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden flex flex-col items-end space-y-4">
      <a
        href="tel:2816076720"
        className="flex items-center bg-blue-600 text-white px-6 py-4 rounded-full shadow-2xl animate-bounce hover:bg-blue-700 active:scale-95 transition-all border-4 border-white"
      >
        <Phone className="w-6 h-6 mr-2" />
        <span className="font-black">CALL NOW</span>
      </a>
    </div>
  );
};

export default StickyCall;
