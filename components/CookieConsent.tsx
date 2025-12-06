import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Sprawdzamy, czy użytkownik już podjął decyzję
        const consent = localStorage.getItem('ptp_cookie_consent');
        if (!consent) {
            // Jeśli nie, pokazujemy baner po krótkim opóźnieniu
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('ptp_cookie_consent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('ptp_cookie_consent', 'false');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
                >
                    <div className="glass-panel p-6 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl bg-charcoal/90">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-neon-yellow/10 rounded-xl text-neon-yellow shrink-0">
                                <Cookie size={24} />
                            </div>

                            <div className="flex-1">
                                <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">
                                    Szanujemy Twoją Prywatność
                                </h4>
                                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                                    Używamy plików cookies, aby zapewnić Ci najlepsze doświadczenie na naszej stronie oraz do analizy ruchu (Google Analytics). Możesz dowiedzieć się więcej w naszej{' '}
                                    <Link to="/polityka-prywatnosci" className="text-neon-yellow hover:underline decoration-neon-yellow/50">
                                        Polityce Prywatności
                                    </Link>.
                                </p>

                                <div className="flex gap-3">
                                    <button
                                        onClick={handleAccept}
                                        className="flex-1 bg-neon-yellow text-charcoal font-bold text-xs py-2.5 rounded-lg hover:bg-white transition-colors interactive shadow-[0_0_15px_rgba(244,255,0,0.2)]"
                                    >
                                        Akceptuję
                                    </button>
                                    <button
                                        onClick={handleDecline}
                                        className="flex-1 bg-transparent border border-white/20 text-white font-bold text-xs py-2.5 rounded-lg hover:bg-white/10 transition-colors interactive"
                                    >
                                        Odrzuć
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleDecline}
                                className="text-gray-500 hover:text-white transition-colors interactive -mt-2 -mr-2 p-2"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};