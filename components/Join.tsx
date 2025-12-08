import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Link } from "react-router-dom";

// Komponent pomocniczy do animacji liczb
const Counter = ({ to }: { to: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    // Animacja odpali się raz, gdy element wejdzie w widok
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        const node = nodeRef.current;
        const controls = animate(300, to, {
            duration: 1.5, // Czas trwania animacji (2.5 sekundy)
            ease: "easeOut",
            onUpdate(value) {
                if (node) {
                    // Zaokrąglamy wartość do liczby całkowitej
                    node.textContent = Math.floor(value).toString();
                }
            },
        });

        return () => controls.stop();
    }, [to, isInView]);

    return <span ref={nodeRef}>0</span>;
};

export const Join: React.FC = () => {
    return (
        <section id="donate" className="py-24 bg-gradient-to-b from-charcoal-light to-charcoal relative">
            <div className="container mx-auto px-6 text-center">

                <div className="max-w-3xl mx-auto glass-panel p-10 rounded-3xl border border-neon-yellow/20 shadow-[0_0_50px_rgba(244,255,0,0.05)]">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 flex flex-col md:block items-center justify-center gap-2">
                        Dołącz do <span className="text-neon-yellow inline-flex items-center gap-1">
                    +<Counter to={500} />
                </span> uczniów
                    </h2>

                    <div className="flex justify-center">
                        <Link
                            to="/dolacz"
                            className="interactive group relative px-8 py-4 bg-neon-yellow text-charcoal font-bold text-lg mt-10 rounded-xl overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(244,255,0,0.4)] text-center flex items-center justify-center w-fit"
                        >
                    <span className="relative z-10 flex items-center gap-2">
                        Dołącz do Ruchu
                    </span>
                            <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
};