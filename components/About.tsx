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



        {/* Team Grid */}

          <div className="mb-24">
              <h3 className="text-3xl font-display font-bold mb-10 border-l-4 border-neon-yellow pl-6">
                  Lider i Mentor
              </h3>

              <div className="flex flex-col lg:flex-row gap-12 items-start">
                  {/* Image Section */}
                  <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="w-full lg:w-2/5 h-[600px] relative rounded-3xl overflow-hidden group shadow-2xl shadow-neon-yellow/5"
                  >
                      <img
                          src="/Bartłomej.jpg"
                          alt="Bartłomiej Glinka"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-90" />

                      <div className="absolute bottom-8 left-8 right-8">
                          <div className="flex items-center gap-3 mb-4">
                              <div className="p-2 bg-neon-yellow text-charcoal rounded-lg">
                                  <Activity size={24} />
                              </div>
                              <span className="text-neon-yellow font-bold uppercase tracking-wider text-xs border border-neon-yellow/30 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md">
                              Założyciel
                            </span>
                          </div>
                          <h3 className="text-4xl font-display font-bold text-white mb-2">Bartłomiej Glinka</h3>
                          <p className="text-gray-400 text-sm font-mono uppercase tracking-widest">Przedsiębiorca • Sportowiec • Filantrop</p>
                      </div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="w-full lg:w-3/5 space-y-8"
                  >
                      <div>
                          <h4 className="text-3xl font-bold text-white mb-4 leading-tight">
                              Sukces rodzi się z dyscypliny, <span className="text-neon-yellow">nie z używek.</span>
                          </h4>
                          <p className="text-gray-300 text-lg leading-relaxed">
                              <span className="text-neon-yellow">Mąż</span> i <span className="text-neon-yellow">ojciec</span> trójki <span className="text-neon-yellow">dzieci</span> (w tym dwojga licealistów), który łączy życie rodzinne z biznesem na najwyższym poziomie. Współzałożyciel <span className="text-white font-semibold">Omida Group</span> – spółki logistycznej z przychodami przekraczającymi <span className="text-neon-yellow">1 mld PLN</span>.
                          </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-yellow/30 transition-all hover:bg-white/10">
                              <div className="flex items-center gap-2 mb-3">
                                  <Award className="text-neon-yellow" size={20}/>
                                  <h5 className="text-white font-bold">Edukacja & Ekspertyza</h5>
                              </div>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                  Absolwent UG, MBA oraz AMP na prestiżowej <span className="text-gray-300">IESE Business School</span> w Barcelonie. Członek Rady Ekspertów i Rady Zarządzającej UG (2021-2025).
                              </p>
                          </div>
                          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-yellow/30 transition-all hover:bg-white/10">
                              <div className="flex items-center gap-2 mb-3">
                                  <Activity className="text-neon-yellow" size={20}/>
                                  <h5 className="text-white font-bold">Sport & Charakter</h5>
                              </div>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                  Maratończyk i multisportowiec. Udowadnia, że wytrwałość wytrenowana w sporcie jest kluczem do sukcesów w biznesie i życiu prywatnym.
                              </p>
                          </div>
                      </div>

                      <div className="relative pl-8 border-l-2 border-neon-yellow/50 py-2">
                          <p className="text-gray-300 italic mb-3 text-lg">
                              "Naszą misją jest opóźnienie inicjacji lub całkowita rezygnacja ze środków zmieniających świadomość. Dajemy alternatywę: zdrowe, świadome, trzeźwe życie oparte na rozwoju."
                          </p>
                          <div className="flex gap-3 text-xs font-bold text-gray-500 uppercase tracking-widest mt-4">
                              <span>Liceum Columbus</span>
                              <span className="text-neon-yellow">•</span>
                              <span>The Grade</span>
                              <span className="text-neon-yellow">•</span>
                              <span>PTP</span>
                          </div>
                      </div>
                  </motion.div>
              </div>
          </div>

      </div>
    </section>
  );
};