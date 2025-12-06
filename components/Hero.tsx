import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-charcoal">
            {/* Dark overlay to ensure background is deep dark if blobs are too bright */}
            <div className="absolute inset-0 bg-charcoal/50 z-0" />

            {/* Dynamic Background Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-neon-yellow/5 rounded-full blur-[100px] animate-blob mix-blend-screen pointer-events-none" />
            <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">

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

                    <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
                        Trzeźwa <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-blue">Przyszłość Liderzy</span> Jutra.
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                        W świecie pełnym uzależnień dajemy młodym ludziom kompas. Zamiast używek oferujemy pasję, rozwój i drogę do sukcesu.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#mission"
                            className="interactive px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-lg rounded-xl hover:bg-white/5 transition-all text-center flex items-center justify-center"
                        >
                            Poznaj Misję
                        </a>
                        <a
                            href="#donate"
                            className="interactive group relative px-8 py-4 bg-neon-yellow text-charcoal font-bold text-lg rounded-xl overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(244,255,0,0.4)] text-center flex items-center justify-center"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Dołącz do Ruchu
                            </span>
                            <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                    </div>
                </motion.div>

                {/* Hero Image Composition */}
                <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
                    <HeroVisual />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-neon-yellow rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

// Replaced Abstract EnergyCore with a Photo Composition
const HeroVisual: React.FC = () => {
    // Dane do plakietek, żeby łatwiej zarządzać ich pozycją i treścią
    const badges = [
        { text: "Energii", top: "10%", delay: 0 },
        { text: "Sukcesu", top: "32%", delay: 1.5 },
        { text: "Wiary", top: "54%", delay: 3 },
        { text: "Miłości", top: "76%", delay: 0.5 },
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center perspective-1000">

            {/* Decorative Circles behind */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[110%] h-[110%] border border-neon-yellow/10 rounded-full border-dashed"
            />

            {/* Main Image Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 group mt-10"
            >
                {/* The Image */}
                <img
                    src="/grafikaHero.webp"
                    alt="Happy group of diverse teenagers in urban setting"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale-[20%]"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
            </motion.div>

            {/* Floating Neon Elements (Glow effect) */}
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-neon-yellow/20 rounded-full blur-xl z-0"
            />

            {/* Floating Badges - Generowane z tablicy dla równych odstępów */}
            {badges.map((badge, index) => (
                <motion.div
                    key={badge.text}
                    // Ustawiamy dynamiczny top na podstawie danych
                    style={{ top: badge.top }}
                    className="absolute -left-6 bg-charcoal p-3 rounded-lg border border-neon-yellow/30 shadow-[0_0_20px_rgba(244,255,0,0.15)] z-20"
                    // Animacja x (lewo-prawo)
                    animate={{ x: [0, 10, 0] }}
                    // Dodajemy delay, żeby każdy element ruszał się w innym momencie
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: badge.delay
                    }}
                >
                    <span className="text-neon-yellow font-bold text-xl font-display">100%</span>
                    <span className="block text-white text-xs">{badge.text}</span>
                </motion.div>
            ))}
        </div>
    );
};