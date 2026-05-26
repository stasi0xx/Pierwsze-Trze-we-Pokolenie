import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Sparkles } from 'lucide-react';

interface Ambassador {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  photo: string;
  achievements: string[];
  accentColor: string;
}

const ambassadors: Ambassador[] = [
  {
    id: 1,
    firstName: 'Marcin',
    lastName: 'Sochacki',
    role: 'Ambasador Fundacji',
    photo: '/marcin-sochacki.png',
    achievements: [
      'Autor podcastu „Wygrywanie”',
      'wspierający liderów w odzyskiwaniu kontroli nad umysłem i wynikami w biznesie.',
    ],
    accentColor: 'yellow',
  },
  {
    id: 2,
    firstName: 'Łukasz',
    lastName: 'Tchórzewski',
    role: 'Ambasador Fundacji',
    photo: '/lukasz-tchorzewski.jpg',
    achievements: [
      'Autor książki „Nie pij dziś”, promującej świadome i trzeźwe życie, sprzedanej w nakładzie ponad 20 000 egzemplarzy.',
      'Jeden z najpopularniejszych sober influencerów w Polsce — jego materiały osiągnęły setki milionów wyświetleń w mediach społecznościowych.',
    ],
    accentColor: 'green',
  },
];

const accentMap: Record<string, { border: string; text: string; glow: string; badge: string }> = {
  yellow: {
    border: 'border-neon-yellow/50',
    text: 'text-neon-yellow',
    glow: 'bg-neon-yellow/10',
    badge: 'bg-neon-yellow/10 text-neon-yellow border-neon-yellow/20',
  },
  green: {
    border: 'border-neon-green/50',
    text: 'text-neon-green',
    glow: 'bg-neon-green/10',
    badge: 'bg-neon-green/10 text-neon-green border-neon-green/20',
  },
  blue: {
    border: 'border-neon-blue/50',
    text: 'text-neon-blue',
    glow: 'bg-neon-blue/10',
    badge: 'bg-neon-blue/10 text-neon-blue border-neon-blue/20',
  },
  purple: {
    border: 'border-neon-purple/50',
    text: 'text-neon-purple',
    glow: 'bg-neon-purple/10',
    badge: 'bg-neon-purple/10 text-neon-purple border-neon-purple/20',
  },
};

export const Ambassadors: React.FC = () => {
  return (
    <section id="ambassadors" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-neon-yellow/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] w-[400px] h-[400px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-neon-yellow/20 text-neon-yellow text-sm font-medium mb-6">
            <Sparkles size={14} />
            Poznaj naszych ambasadorów
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ambasadorzy <span className="text-neon-yellow">Fundacji</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Osoby, które swoją historią i zaangażowaniem inspirują kolejne pokolenia do życia w trzeźwości.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ambassadors.map((person, index) => {
            const accent = accentMap[person.accentColor] ?? accentMap.yellow;
            return (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`glass-panel rounded-3xl overflow-hidden group hover:${accent.border} transition-all duration-300 relative`}
              >
                {/* Top color bar */}
                <div className={`h-1.5 w-full ${accent.glow} ${accent.border} border-b`} />

                <div className="p-8">
                  {/* Photo */}
                  <div className="flex justify-center mb-6">
                    <div className={`relative w-32 h-32 rounded-full border-2 ${accent.border} p-0.5 group-hover:scale-105 transition-transform duration-300`}>
                      <img
                        src={person.photo}
                        alt={`${person.firstName} ${person.lastName}`}
                        className="w-full h-full rounded-full object-cover object-top"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      {/* Fallback avatar */}
                      <div
                        className={`w-full h-full rounded-full ${accent.glow} items-center justify-center text-3xl font-bold font-display hidden`}
                        style={{ display: 'none' }}
                      >
                        <span className={accent.text}>
                          {person.firstName.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Name & role */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold font-display text-white mb-1">
                      {person.firstName} {person.lastName}
                    </h3>
                    <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${accent.badge}`}>
                      {person.role}
                    </span>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-wider font-medium mb-4">
                      <Award size={12} />
                      Osiągnięcia
                    </div>
                    {person.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Star size={14} className={`${accent.text} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
