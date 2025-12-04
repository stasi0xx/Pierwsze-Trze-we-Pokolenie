import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Zap, Heart } from 'lucide-react';

const MissionItem: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  desc: string; 
  delay: number 
}> = ({ icon, title, desc, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay }}
      className="flex flex-col items-center text-center p-8 rounded-2xl glass-panel hover:bg-white/5 transition-colors group interactive"
    >
      <div className="mb-6 p-4 rounded-full bg-charcoal-light border border-white/10 text-neon-yellow group-hover:scale-110 group-hover:text-neon-blue transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        {icon}
      </div>
      <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-neon-yellow transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};

export const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-24 relative bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Nasza <span className="text-neon-yellow">Misja</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Współczesna młodzież stoi przed wyzwaniami, których skala jest bezprecedensowa. Alkohol, narkotyki i nadużywanie leków to nie tylko statystyki – to realne zagrożenie dla potencjału młodego pokolenia.
            Misją <span className="text-neon-yellow">Pierwszego Trzeźwego Pokolenia</span> jest zmiana reguł gry Nie walczymy tylko zakazami. Edukujemy i uświadamiamy, aby opóźnić inicjację lub całkowicie wyeliminować środki psychoaktywne z życia młodych ludzi. Proponujemy coś znacznie ciekawszego niż chwilowy "haj"
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <MissionItem 
            icon={<Zap size={32} />}
            title="Zdrowe, trzeźwe życie."
            desc="Tworzymy środowisko, w którym bycie sobą wystarczy. Łączymy ludzi, którzy chcą od życia czegoś więcej"
            delay={0}
          />
          <MissionItem 
            icon={<Target size={32} />}
            title="Świadomy rozwój osobisty."
            desc="Budujemy świadomość. Edukujemy o mechanizmach uzależnień językiem faktów i nauki, a nie strachu i zakazów."
            delay={0.2}
          />
          <MissionItem 
            icon={<Heart size={32} />}
            title="Budowanie charakteru poprzez sport i naukę."
            desc=" Wspieramy pasje. Sport, muzyka, sztuka – dajemy narzędzia, by Twoja naturalna energia znalazła ujście w tworzeniu, nie niszczeniu."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};