// src/components/Mission.tsx
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Target, Zap, Heart } from 'lucide-react';

// Warianty animacji dla kontenera (siatki)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

// Warianty animacji dla pojedynczego elementu (wejście)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const MissionItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
}> = ({ icon, title, desc }) => {
  return (
      <motion.div
          variants={itemVariants}
          // Klasa 'group' jest tutaj kluczowa dla działania group-hover na dzieciach
          className="flex flex-col items-center text-center p-8 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 group interactive h-full justify-start"
      >
        <div className="mb-6 p-4 rounded-full bg-charcoal-light border border-white/10 text-neon-yellow group-hover:scale-110 group-hover:text-neon-blue transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] shrink-0">
          {icon}
        </div>
        <h3 className="text-2xl font-display font-bold mb-2 text-white group-hover:text-neon-yellow transition-colors shrink-0">
          {title}
        </h3>

        {/* --- ZMIANA TUTAJ --- */}
        {/* Opis jest domyślnie ukryty (opacity-0, h-0) i pojawia się po najechaniu na grupę */}
        <p className="text-gray-400 leading-relaxed
                    opacity-0 translate-y-4 h-0 overflow-hidden mt-0
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:h-auto group-hover:mt-4
                    transition-all duration-500 ease-in-out">
          {desc}
        </p>
        {/* ------------------- */}

      </motion.div>
  );
};

export const Mission: React.FC = () => {
  return (
      <section id="mission" className="py-24 relative bg-charcoal">
        <div className="container mx-auto px-6">

          {/* Nagłówek sekcji */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Nasza <span className="text-neon-yellow">Misja</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              Współczesna młodzież stoi przed wyzwaniami, których skala jest bezprecedensowa. Alkohol, narkotyki i nadużywanie leków to nie tylko statystyki – to realne zagrożenie dla potencjału młodego pokolenia.
              Misją <span className="text-neon-yellow">Pierwszego Trzeźwego Pokolenia</span> jest zmiana reguł gry. Nie walczymy tylko zakazami. Edukujemy i uświadamiamy, aby opóźnić inicjację lub całkowicie wyeliminować środki psychoaktywne z życia młodych ludzi. Proponujemy coś znacznie ciekawszego niż chwilowy "haj".
            </p>
          </motion.div>

          {/* Grid z kartami */}
          <motion.div
              className="grid md:grid-cols-3 gap-8 items-start" // items-start ważne przy różnej wysokości kart
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
          >
            <MissionItem
                icon={<Zap size={32} />}
                title="Zdrowe, trzeźwe życie."
                desc="Tworzymy środowisko, w którym bycie sobą wystarczy. Łączymy ludzi, którzy chcą od życia czegoś więcej."
            />
            <MissionItem
                icon={<Target size={32} />}
                title="Świadomy rozwój osobisty."
                desc="Budujemy świadomość. Edukujemy o mechanizmach uzależnień językiem faktów i nauki, a nie strachu i zakazów."
            />
            <MissionItem
                icon={<Heart size={32} />}
                title="Budowanie charakteru poprzez sport i naukę."
                desc="Wspieramy pasje. Sport, muzyka, sztuka – dajemy narzędzia, by Twoja naturalna energia znalazła ujście w tworzeniu, nie niszczeniu."
            />
          </motion.div>
        </div>
      </section>
  );
};