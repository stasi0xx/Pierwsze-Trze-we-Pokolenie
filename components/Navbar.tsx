
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
              isScrolled ? 'py-2 glass-panel border-b border-glass-border' : 'py-0 bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center pt-2">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group interactive">
            <img
                src="/logo (2).png"
                alt="Pierwsze Trzeźwe Pokolenie"
                className={`group-hover:scale-105 transition-all ${
                    isScrolled ? 'h-12 md:h-16' : 'h-16 md:h-20'
                }`}
            />
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