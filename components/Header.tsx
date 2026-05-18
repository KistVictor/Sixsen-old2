import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre e Portfólio', path: '/sobre' },
  ];

  const schedulingLink = "https://api.whatsapp.com/send/?phone=555199516231&text=Ol%C3%A1%21+Vim+do+site+e+gostaria+de+falar+de+um+projeto.";

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-sixsen-dark/90 backdrop-blur-md py-4 border-b border-sixsen-orange/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="font-bruno text-2xl font-extrabold tracking-tighter text-sixsen-offwhite hover:text-sixsen-orange transition-colors">
          Sixsen<span className="text-sixsen-orange">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-sixsen-orange ${location.pathname === link.path ? 'text-sixsen-orange' : 'text-sixsen-offwhite/80'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={schedulingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sixsen-orange text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all transform hover:scale-105"
          >
            Agendar Reunião
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-sixsen-offwhite" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-sixsen-dark border-b border-sixsen-orange/10 md:hidden p-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-sixsen-offwhite/80 hover:text-sixsen-orange transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={schedulingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sixsen-orange text-white px-6 py-3 rounded-full text-center font-semibold hover:bg-orange-600 transition-all"
            >
              Agendar Reunião
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;