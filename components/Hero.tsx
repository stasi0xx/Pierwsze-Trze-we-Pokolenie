import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
    return (
        // ZMIANA: Zwiększono dolny padding na mobile (pb-44) aby zrobić miejsce na orbitujące elementy
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-32 pb-44 md:pb-16 bg-charcoal">
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-charcoal/50 z-0" />

            {/* Background Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-neon-yellow/5 rounded-full blur-[100px] animate-blob mix-blend-screen pointer-events-none" />
            <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 md:gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-yellow text-xs font-bold uppercase tracking-wider mb-6">
                        <Sparkles size={12} />
                        <span>Świadome Życie.</span>
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                        Trzeźwa <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-blue">Przyszłość Liderzy</span> Jutra.
                    </h1>

                    <p className="text-gray-400 text-base md:text-xl mb-8 max-w-lg leading-relaxed">
                        W świecie pełnym uzależnień dajemy młodym ludziom kompas. Zamiast używek oferujemy pasję, rozwój i drogę do sukcesu.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#mission"
                            className="interactive px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-lg rounded-xl hover:bg-white/5 transition-all text-center flex items-center justify-center"
                        >
                            Poznaj Misję
                        </a>
                        <Link
                            to="/dolacz"
                            className="interactive group relative px-8 py-4 bg-neon-yellow text-charcoal font-bold text-lg rounded-xl overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(244,255,0,0.4)] text-center flex items-center justify-center"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Dołącz do Ruchu
                            </span>
                            <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </div>
                </motion.div>

                {/* Hero Image Composition */}
                <div className="relative h-auto md:h-[600px] flex items-center justify-center mt-8 md:mt-0">
                    <HeroVisual />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-neon-yellow rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

const HeroVisual: React.FC = () => {
    // Definicja elementów orbity: tekst + kąt startowy
    const badges = [
        { text: "Energii", initialAngle: 0 },
        { text: "Sukcesu", initialAngle: 90 },
        { text: "Wiary", initialAngle: 180 },
        { text: "Miłości", initialAngle: 270 },
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center perspective-1000">

            {/* Dekoracyjne okręgi w tle - UKRYTE NA MOBILE */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="hidden md:block absolute w-[130%] h-[130%] md:w-[120%] md:h-[120%] border border-neon-yellow/10 rounded-full border-dashed pointer-events-none"
            />

            {/* Kontener ze zdjęciem */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-60 md:w-full md:max-w-md h-auto rounded-3xl overflow-hidden group "
            >
                <img
                    src="/grafikaHero.png"
                    alt="Happy group"
                    className="w-full h-auto block opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
            </motion.div>

            {/* Kontener Orbity */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                {badges.map((badge) => (
                    <motion.div
                        key={badge.text}
                        className="absolute"
                        style={{
                            transform: `rotate(${badge.initialAngle}deg) translateY(var(--orbit-radius)) rotate(-${badge.initialAngle}deg)`
                        }}
                    >
                        <motion.div
                            // ZMIANA: Dodano z-50 aby badge były zawsze na wierzchu
                            className="bg-charcoal/90 backdrop-blur-md p-2 md:p-4 rounded-xl border border-neon-yellow/30 shadow-[0_0_15px_rgba(244,255,0,0.15)] flex flex-col items-center min-w-[70px] md:min-w-[90px] z-50"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        >
                            <span className="text-neon-yellow font-bold text-base md:text-xl font-display leading-none">100%</span>
                            <span className="text-white text-[9px] md:text-xs font-medium uppercase tracking-wide mt-1">{badge.text}</span>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            <style>{`
                :root {
                    /* ZMIANA: Promień orbity dopasowany do w-60, tak aby badge krążyły blisko zdjęcia ale go nie zasłaniały */
                    --orbit-radius: -145px;
                }
                @media (min-width: 768px) {
                    :root {
                        --orbit-radius: -280px; 
                    }
                }
            `}</style>
        </div>
    );
};