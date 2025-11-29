import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-neon-yellow/10 rounded-full blur-[100px] animate-blob mix-blend-screen" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-neon-blue/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />

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
            <span>Przyszłość jest jasna</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
            Wybierz <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-blue">Czystą</span> Ścieżkę.
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Nie walczymy ze starym, budujemy nowe. Pierwsze Trzeźwe Pokolenie to społeczność pasji, energii i nieograniczonych możliwości.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="interactive group relative px-8 py-4 bg-neon-yellow text-charcoal font-bold text-lg rounded-xl overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(244,255,0,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                Dołącz do Ruchu <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="interactive px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-lg rounded-xl hover:bg-white/5 transition-all">
              Poznaj Misję
            </button>
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
        className="relative z-10 w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 group"
      >
        {/* The Image */}
        <img 
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1000&auto=format&fit=crop" 
          alt="Happy group of diverse teenagers in urban setting"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale-[20%]"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />

        {/* Floating Badge on Image */}
        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20"
        >
            <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-charcoal bg-neon-yellow/20 flex items-center justify-center text-[10px] font-bold text-white`}>
                           #{i}
                        </div>
                    ))}
                </div>
                <div>
                    <p className="text-white text-sm font-bold">Dołącz do 500+ </p>
                    <p className="text-gray-400 text-xs">Młodych liderów</p>
                </div>
            </div>
        </motion.div>
      </motion.div>

       {/* Floating Neon Elements */}
       <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 w-24 h-24 bg-neon-yellow/20 rounded-full blur-xl z-0"
       />
       <motion.div 
          className="absolute top-10 -left-6 bg-charcoal p-3 rounded-lg border border-neon-yellow/30 shadow-[0_0_20px_rgba(244,255,0,0.15)] z-20"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
       >
          <span className="text-neon-yellow font-bold text-xl font-display">100%</span>
          <span className="block text-white text-xs">Energii</span>
       </motion.div>

    </div>
  );
};