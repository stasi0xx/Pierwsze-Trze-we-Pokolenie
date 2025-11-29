import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Award, Music, Activity, Mic } from 'lucide-react';

const TeamMember: React.FC<{
  name: string;
  role: string;
  image: string;
  icon: React.ReactNode;
  desc: string;
  delay: number;
}> = ({ name, role, image, icon, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      className="group relative h-[400px] rounded-3xl overflow-hidden interactive"
    >
      {/* Background Image */}
      <img 
        src={image} 
        alt={name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-neon-yellow text-charcoal rounded-lg">
                {icon}
            </div>
            <span className="text-neon-yellow font-bold uppercase tracking-wider text-xs border border-neon-yellow/30 px-2 py-1 rounded-full bg-black/30 backdrop-blur-md">
              {role}
            </span>
          </div>
          
          <h3 className="text-2xl font-display font-bold text-white mb-2">{name}</h3>
          
          <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-neon-yellow/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Więcej niż <span className="text-neon-yellow">Fundacja</span>.<br/>
              To Kolektyw.
            </h2>
            <div className="space-y-6 text-lg text-gray-400">
              <p>
                PTP powstało z buntu. Buntu przeciwko nudnym pogadankom w szkole i buntu przeciwko presji rówieśników, że "trzeba brać, żeby się bawić".
              </p>
              <p>
                Jesteśmy grupą przyjaciół – sportowców, artystów, gamerów – którzy udowadniają, że najlepszy haj to ten naturalny. Tworzymy przestrzeń, gdzie bycie sobą jest najważniejszą walutą.
              </p>
            </div>

            <div className="mt-8 flex gap-8">
              <div>
                <span className="block text-4xl font-bold text-white mb-1">5+</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">Lat Działania</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white mb-1">12k</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">Uczestników</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white mb-1">50+</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">Wydarzeń</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative group">
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Team meeting" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-neon-yellow/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             </div>
             {/* Decor */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-stripes-white opacity-10 rounded-xl" />
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="mb-12">
            <h3 className="text-3xl font-display font-bold mb-10 border-l-4 border-neon-yellow pl-6">
                Poznaj Mentorów
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <TeamMember 
                    name="Alex"
                    role="Trener Personalny"
                    icon={<Activity size={18} />}
                    image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
                    desc="Pokazuje, jak przekuć frustrację w siłę fizyczną. Bez drogi na skróty."
                    delay={0}
                />
                <TeamMember 
                    name="Zuza"
                    role="DJ & Producent"
                    icon={<Music size={18} />}
                    image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
                    desc="Muzyka to jej narkotyk. Uczy produkcji dźwięku i wyrażania emocji beatem."
                    delay={0.1}
                />
                <TeamMember 
                    name="Tomek"
                    role="Psycholog Sportu"
                    icon={<Users size={18} />}
                    image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
                    desc="Spec od mindsetu. Uczy, jak wygrywać w głowie, zanim wejdziesz na boisko."
                    delay={0.2}
                />
                 <TeamMember 
                    name="Marta"
                    role="Influencerka"
                    icon={<Mic size={18} />}
                    image="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop"
                    desc="Prowadzi warsztaty z budowania pewności siebie w social mediach bez hejtu."
                    delay={0.3}
                />
            </div>
        </div>

      </div>
    </section>
  );
};