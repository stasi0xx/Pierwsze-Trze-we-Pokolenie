import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Building2, CreditCard, Copy, Check } from 'lucide-react';

// Ikona TikTok (Custom SVG)
const TiktokIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

// Ikona Spotify (Custom SVG)
const SpotifyIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14.5c2.5-1 5.5-1 8 0" />
      <path d="M7 12c3-1.5 7-1.5 10 0" />
      <path d="M6.5 9.5c3.5-2 8.5-2 11 0" />
    </svg>
);

export const Footer: React.FC = () => {
  // Stan do obsługi efektu "skopiowano"
  const [copied, setCopied] = useState(false);

  const accountNumber = "49 1050 1764 1000 0090 8133 8411";

  const handleCopy = () => {
    // Usuwamy spacje przy kopiowaniu
    navigator.clipboard.writeText(accountNumber.replace(/\s/g, ''));
    setCopied(true);

    // Po 2 sekundach wracamy do ikony kopiowania
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const currentYear = new Date().getFullYear();

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

              {/* Lista Social Media */}
              <div className="flex flex-wrap gap-3">
                <a href="https://www.tiktok.com/@pierwszetrzezwepokolenie" aria-label="TikTok" className="p-2 bg-white/5 rounded-full hover:bg-[#00f2ea] hover:text-charcoal transition-colors interactive">
                  <TiktokIcon size={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61580998440256" aria-label="Facebook" className="p-2 bg-white/5 rounded-full hover:bg-[#1877F2] hover:text-white transition-colors interactive">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Instagram" className="p-2 bg-white/5 rounded-full hover:bg-[#E4405F] hover:text-white transition-colors interactive">
                  <Instagram size={20} />
                </a>
                <a href="https://www.youtube.com/@PierwszeTrzeźwePokolenie" aria-label="YouTube" className="p-2 bg-white/5 rounded-full hover:bg-[#FF0000] hover:text-white transition-colors interactive">
                  <Youtube size={20} />
                </a>
                <a href="#" aria-label="Spotify" className="p-2 bg-white/5 rounded-full hover:bg-[#1DB954] hover:text-charcoal transition-colors interactive">
                  <SpotifyIcon size={20} />
                </a>
              </div>
            </div>

            {/* Kolumna 2: Menu */}
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Nawigacja</h4>
              <ul className="space-y-2">
                <li><a href="#mission" className="text-gray-500 hover:text-neon-yellow transition-colors">Misja</a></li>
                <li><a href="#programs" className="text-gray-500 hover:text-neon-yellow transition-colors">Programy</a></li>
                <li><a href="/szkoly" className="text-gray-500 hover:text-neon-yellow transition-colors">Szkoły Partnerskie</a></li>
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

                  {/* Przycisk kopiowania numeru konta */}
                  <button
                      onClick={handleCopy}
                      className="w-full text-left group relative flex items-center justify-between gap-2 bg-white/5 p-2 rounded border border-white/10 hover:bg-white/10 hover:border-neon-yellow/50 transition-all cursor-pointer interactive"
                      title="Kliknij, aby skopiować numer konta"
                  >
                    <span className="font-mono text-xs text-gray-300 break-all group-hover:text-white transition-colors">
                      {accountNumber}
                    </span>
                    <div className="text-gray-500 group-hover:text-neon-yellow transition-colors shrink-0">
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </div>

                    {/* Tooltip 'Skopiowano' */}
                    {copied && (
                        <span className="absolute -top-8 right-0 bg-neon-yellow text-charcoal text-[10px] font-bold px-2 py-1 rounded shadow-lg animate-blob">
                        Skopiowano!
                      </span>
                    )}
                  </button>
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
            <p>&copy; {currentYear} Fundacja Pierwsze Trzeźwe Pokolenie. Wszelkie prawa zastrzeżone.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/polityka-prywatnosci" className="hover:text-white transition-colors">Polityka Prywatności</a>
              <a href="/regulamin" className="hover:text-white transition-colors">Regulamin</a>
            </div>
          </div>
        </div>
      </footer>
  );
};