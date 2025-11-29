import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProgramCard: React.FC<{ 
    title: string; 
    category: string; 
    description: string;
    gradient: string;
}> = ({ title, category, description, gradient }) => {
  return (
    <motion.div 
      className="group relative h-96 w-full rounded-3xl overflow-hidden glass-panel interactive"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        <div>
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-white/60 border border-white/10 rounded-full">
            {category}
          </span>
          <h3 className="text-3xl font-display font-bold text-white mb-2 leading-tight">
            {title}
          </h3>
        </div>

        <div>
          <p className="text-gray-400 mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
            {description}
          </p>
          <div className="flex items-center gap-2 text-white font-medium group-hover:text-neon-yellow transition-colors">
            Dowiedz się więcej <ArrowUpRight size={18} />
          </div>
        </div>
      </div>

      {/* Decorative Abstract Shape */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500" />
    </motion.div>
  );
};

export const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-charcoal-light relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px'
        }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Nasze <span className="text-neon-yellow">Programy</span>
            </h2>
            <p className="text-gray-400">
              Działamy wielotorowo. Od warsztatów w szkołach, przez wsparcie online, aż po eventy sportowe.
            </p>
          </div>
          <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white font-medium interactive">
            Zobacz harmonogram
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProgramCard 
            category="Edukacja"
            title="Warsztaty Świadomości"
            description="Interaktywne spotkania w szkołach, gdzie rozkładamy mity o używkach na czynniki pierwsze."
            gradient="from-neon-yellow to-orange-500"
          />
          <ProgramCard 
            category="Sport"
            title="Liga Czystej Gry"
            description="Ogólnopolskie turnieje piłkarskie i e-sportowe. Adrenalina bez chemii."
            gradient="from-neon-blue to-cyan-600"
          />
          <ProgramCard 
            category="Wsparcie"
            title="Strefa Rodzica"
            description="Webinary i grupy wsparcia dla rodziców, którzy chcą lepiej rozumieć świat swoich dzieci."
            gradient="from-neon-purple to-pink-600"
          />
        </div>
      </div>
    </section>
  );
};