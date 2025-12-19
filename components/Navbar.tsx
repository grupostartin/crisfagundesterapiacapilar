import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Espaço', href: '#espaco' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
          ? 'bg-background-dark/90 backdrop-blur-md border-white/5 py-4'
          : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center cursor-pointer group">
          <img
            src="/logo.webp"
            alt="Cris Fagundes"
            className="h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8 text-sm font-light tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-primary transition-colors uppercase text-xs font-bold tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/5531985036147"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-white hover:text-black text-black px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(249,245,6,0.3)]"
          >
            AGENDAR
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-surface-dark border-t border-white/5 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="flex flex-col items-center py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-primary transition-colors font-display text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5531985036147"
            className="text-primary font-bold mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            AGENDAR CONSULTA
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;