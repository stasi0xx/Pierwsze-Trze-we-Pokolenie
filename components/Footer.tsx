import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Building2, CreditCard } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
      <footer className="bg-charcoal pt-16 pb-8 border-t border-white/5 text-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Kolumna 1: Marka i Social Media */}
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">PTP</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Fundacja "Pierwsze Trzeźwe Pokolenie". Budujemy przyszłość opartą na świadomości, pasji i autentyczności.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-neon-yellow hover:text-charcoal transition-colors interactive"><Facebook size={20} /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-neon-purple hover:text-charcoal transition-colors interactive"><Instagram size={20} /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-neon-blue hover:text-charcoal transition-colors interactive"><Twitter size={20} /></a>
              </div>
            </div>

            {/* Kolumna 2: Menu */}
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Nawigacja</h4>
              <ul className="space-y-2">
                <li><a href="#mission" className="text-gray-500 hover:text-neon-yellow transition-colors">Misja</a></li>
                <li><a href="#programs" className="text-gray-500 hover:text-neon-yellow transition-colors">Programy</a></li>
                <li><a href="#stories" className="text-gray-500 hover:text-neon-yellow transition-colors">Historie</a></li>
                <li><a href="#donate" className="text-gray-500 hover:text-neon-yellow transition-colors">Wsparcie</a></li>
              </ul>
            </div>

            {/* Kolumna 3: Kontakt Bezpośredni PTP */}
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Kontakt PTP</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-neon-yellow mt-0.5 shrink-0" />
                  <a href="mailto:biuro@pierwszetrzezwepokolenie.pl" className="hover:text-white transition-colors">
                    biuro@pierwszetrzezwepokolenie.pl
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-neon-yellow mt-0.5 shrink-0" />
                  <a href="tel:+48517642587" className="hover:text-white transition-colors">
                    +48 517 642 587
                  </a>
                </li>
                <li className="pt-2">
                  <div className="flex items-center gap-2 mb-1 text-white">
                    <CreditCard size={16} className="text-neon-blue" />
                    <span className="font-bold text-xs uppercase tracking-wide">Konto do wpłat:</span>
                  </div>
                  <p className="font-mono text-xs text-gray-300 break-all bg-white/5 p-2 rounded border border-white/10">
                    49 1050 1764 1000 0090 8133 8411
                  </p>
                </li>
              </ul>
            </div>

            {/* Kolumna 4: Organ Zarządzający (Fundacja Columbus) */}
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Organ Zarządzający</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start gap-3">
                  <Building2 size={18} className="text-neon-purple mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-white">Fundacja Columbus</p>
                    <p className="text-xs">KRS: 0000719970</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-neon-purple mt-0.5 shrink-0" />
                  <p>
                    Al. Grunwaldzka 472C<br />
                    80-309 Gdańsk
                  </p>
                </div>

                <div className="text-xs space-y-1 pt-2 border-t border-white/10 mt-2">
                  <p><span className="text-gray-500">NIP:</span> 5842768419</p>
                  <p><span className="text-gray-500">REGON:</span> 369543418</p>
                  <p><span className="text-gray-500">Konto:</span> <span className="font-mono text-[10px]">PL 42 1050 1764 1000 0090 3147 2583</span></p>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
            <p>&copy; {newXZate().getFullYear()} Fundacja Pierwsze Trzeźwe Pokolenie. Wszelkie prawa zastrzeżone.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Polityka Prywatności</a>
              <a href="#" className="hover:text-white transition-colors">Regulamin</a>
            </div>
          </div>
        </div>
      </footer>
  );
};

// Helper dla roku (aby uniknąć błędu hydracji w niektórych setupach,
// ale w czystym React można użyć po prostu new Date().getFullYear())
const newXZate = () => new Date();