import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Nas', href: '#about' },
    { name: 'Misja', href: '#mission' },
    { name: 'Programy', href: '#programs' },
    { name: 'Historie', href: '#stories' },
    { name: 'Wsparcie', href: '#donate' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-4 glass-panel border-b border-glass-border' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group interactive">
          <svg width="210" height="48" viewBox="0 0 210 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Face Container */}
            <g className="group-hover:scale-105 transition-transform origin-center">
                {/* Yellow Semi-Circle (Left side) */}
                <path d="M 28 2 A 22 22 0 0 0 28 46 V 2 Z" fill="#F4FF00" />
                {/* Eye */}
                <ellipse cx="18" cy="18" rx="2.5" ry="3.5" fill="#121212" />
                {/* Smile */}
                <path d="M 10 32 Q 18 38 26 30" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
            </g>
            
            {/* Text */}
            <g className="text-white group-hover:text-neon-yellow transition-colors duration-300">
                <text x="38" y="20" fill="currentColor" className="font-display font-medium" fontSize="20">Pierwsze</text>
                <line x1="38" y1="26" x2="200" y2="26" stroke="currentColor" strokeWidth="2" />
                <text x="38" y="42" fill="currentColor" className="font-sans font-bold" fontSize="14" letterSpacing="0.5">Trzeźwe Pokolenie</text>
            </g>
          </svg>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white relative group interactive"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-yellow transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#donate"
            className="px-6 py-2 rounded-full bg-white/10 hover:bg-neon-yellow hover:text-charcoal border border-white/20 hover:border-neon-yellow transition-all duration-300 font-semibold text-sm interactive"
          >
            Dołącz
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white interactive"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-300 hover:text-neon-yellow"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                  href="#donate"
                  className="mt-2 text-center px-6 py-3 rounded-xl bg-neon-yellow text-charcoal font-bold"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Dołącz
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};