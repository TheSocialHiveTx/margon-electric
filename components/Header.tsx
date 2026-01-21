
import React from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-bold tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              MARGON COMPLETE ELECTRIC
            </span>
            <span className={`text-[10px] md:text-xs font-medium uppercase tracking-widest ${isScrolled ? 'text-blue-600' : 'text-yellow-400'}`}>
              TmeL#207743 | TECL#27118
            </span>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wider hover:text-yellow-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:2816076720"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 py-2 rounded-full font-bold flex items-center transition-all transform hover:scale-105"
            >
              <Phone className="w-4 h-4 mr-2" />
              (281) 607-6720
            </a>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-8 h-8 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-8 h-8 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-bold text-blue-900 border-b border-slate-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:2816076720"
              className="flex items-center justify-center bg-blue-900 text-white py-4 rounded-lg font-bold w-full"
            >
              <Phone className="w-5 h-5 mr-2" />
              CALL (281) 607-6720
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
