import React from 'react';
import { motion } from 'framer-motion';

export const Donate: React.FC = () => {
  const currentAmount = 75000;
  const goalAmount = 100000;
  const percentage = (currentAmount / goalAmount) * 100;

  return (
    <section id="donate" className="py-24 bg-gradient-to-b from-charcoal-light to-charcoal relative">
      <div className="container mx-auto px-6 text-center">
        
        <div className="max-w-3xl mx-auto glass-panel p-10 rounded-3xl border border-neon-yellow/20 shadow-[0_0_50px_rgba(244,255,0,0.05)]">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Wspieraj <span className="text-neon-yellow">Jasność</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
                Każda wpłata pomaga nam organizować warsztaty i docierać do kolejnych szkół. 
                Razem budujemy pokolenie świadomego wyboru.
            </p>

            {/* Goal Visualization */}
            <div className="mb-12">
                <div className="flex justify-between text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">
                    <span>Zebrano: {currentAmount.toLocaleString()} PLN</span>
                    <span>Cel: {goalAmount.toLocaleString()} PLN</span>
                </div>
                <div className="h-4 w-full bg-charcoal rounded-full overflow-hidden border border-white/10">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-neon-yellow to-orange-500 relative"
                    >
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
                    </motion.div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="interactive px-10 py-4 bg-neon-yellow text-charcoal font-bold text-lg rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(244,255,0,0.4)]">
                    Wpłać on-line
                </button>
                <button className="interactive px-10 py-4 bg-transparent border border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all">
                    Zostań Partnerem
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};