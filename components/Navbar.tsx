import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Lista Szkół Partnerskich', href: '/szkoly' },
    { name: 'Misja', href: '/#mission' },
    { name: 'O Nas', href: '/#about' },
    { name: 'Programy', href: '/#programs' },
    { name: 'Historie', href: '/#stories' },
  ];

  // Ta funkcja naprawia scrollowanie
  const handleNavClick = (href: string) => {
    setIsMobileOpen(false); // Zamykamy menu mobilne od razu

    if (href.startsWith('/#')) {
      // Jeśli to link z kotwicą (np. /#about)
      const id = href.replace('/#', '');

      if (location.pathname === '/') {
        // SCENARIUSZ 1: Jesteśmy już na Home -> scrollujemy natychmiast
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // SCENARIUSZ 2: Jesteśmy na innej stronie -> idziemy do Home
        // (useEffect w Home.tsx obsłuży scrollowanie po załadowaniu)
        navigate('/');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // SCENARIUSZ 3: Zwykła nawigacja do podstrony (np. /szkoly)
      navigate(href);
    }
  };

  return (
      <nav
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
              isScrolled ? 'py-2 glass-panel border-b border-glass-border' : 'py-0 bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center pt-2">
          {/* Logo - zawsze wraca na górę strony głównej */}
          <Link
              to="/"
              onClick={() => {
                if(location.pathname === '/') window.scrollTo({top: 0, behavior: 'smooth'});
              }}
              className="flex items-center gap-2 group interactive"
          >
            <img
                src="/logo.png"
                alt="Pierwsze Trzeźwe Pokolenie"
                className={`group-hover:scale-105 transition-all ${
                    isScrolled ? 'h-12 md:h-16' : 'h-16 md:h-20'
                }`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm font-medium text-gray-300 hover:text-white relative group interactive cursor-pointer bg-transparent border-none p-0"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-yellow transition-all group-hover:w-full"></span>
                </button>
            ))}
            <Link
                to="/dolacz"
                className="px-6 py-2 rounded-full bg-white/10 hover:bg-neon-yellow hover:text-charcoal border border-white/20 hover:border-neon-yellow transition-all duration-300 font-semibold text-sm interactive"
            >
              Dołącz
            </Link>
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
                      <button
                          key={link.name}
                          onClick={() => handleNavClick(link.href)}
                          className="text-left text-lg font-medium text-gray-300 hover:text-neon-yellow bg-transparent border-none p-0"
                      >
                        {link.name}
                      </button>
                  ))}
                  <Link
                      to="/dolacz"
                      className="mt-2 text-center px-6 py-3 rounded-xl bg-neon-yellow text-charcoal font-bold block"
                      onClick={() => setIsMobileOpen(false)}
                  >
                    Dołącz
                  </Link>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
};