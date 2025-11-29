import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal pt-16 pb-8 border-t border-white/5 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold text-white mb-4">PTP</h3>
            <p className="text-gray-500 max-w-sm mb-6">
              Fundacja "Pierwsze Trzeźwe Pokolenie". Budujemy przyszłość opartą na świadomości, pasji i autentyczności.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-neon-yellow hover:text-charcoal transition-colors interactive"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-neon-purple hover:text-charcoal transition-colors interactive"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-neon-blue hover:text-charcoal transition-colors interactive"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Menu</h4>
            <ul className="space-y-2">
              <li><a href="#mission" className="text-gray-500 hover:text-neon-yellow transition-colors">Misja</a></li>
              <li><a href="#programs" className="text-gray-500 hover:text-neon-yellow transition-colors">Programy</a></li>
              <li><a href="#stories" className="text-gray-500 hover:text-neon-yellow transition-colors">Historie</a></li>
              <li><a href="#" className="text-gray-500 hover:text-neon-yellow transition-colors">Dla Prasy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Kontakt</h4>
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-center gap-2"><Mail size={16} /> kontakt@ptp.org.pl</li>
              <li>ul. Jasna 15/4</li>
              <li>00-001 Warszawa</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600">
          <p>&copy; 2024 Fundacja Pierwsze Trzeźwe Pokolenie. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-white transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};