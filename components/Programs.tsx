import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Warianty animacji dla kontenera (siatki)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Karty będą się pojawiać co 0.2s
      delayChildren: 0.1
    }
  }
};

// Warianty animacji dla pojedynczej karty
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ProgramCard: React.FC<{
  title: string;
  category: string;
  description: string;
  gradient: string;
  link?: string;
  image: string;
}> = ({ title, category, description, gradient, link, image }) => {

  return (

      <motion.div
          variants={cardVariants} // Przypisanie wariantu karty
          className="group relative h-96 w-full rounded-3xl overflow-hidden glass-panel interactive"
          whileHover={{
            y: -10,
            transition: { type: "spring", stiffness: 300 } // Przeniosłem transition tutaj, żeby dotyczyło tylko hovera
          }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50"
          />
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
        </div>

        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay z-0`} />

        {/* Content */}
        <a href={link} target="_blank" rel="noreferrer">
          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-white/80 border border-white/20 rounded-full backdrop-blur-sm">
                {category}
              </span>
              <h3 className="text-3xl font-display font-bold text-white mb-2 leading-tight drop-shadow-md">
                {title}
              </h3>
            </div>

            <div>
              <p className="text-gray-200 mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75 font-medium drop-shadow-sm">
                {description}
              </p>
              <div className="flex items-center gap-2 text-white font-medium group-hover:text-neon-yellow transition-colors drop-shadow-md">
                Dowiedz się więcej <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        </a>
        {/* Decorative Abstract Shape */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500 z-0" />
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
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Realne działania<span className="text-neon-yellow">, realne zmiany.</span>
              </h2>
              <p className="text-gray-400">
                Realizuje Naszą misję poprzez trzy strategiczne filary.
              </p>
            </div>
            <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white font-medium interactive">
              Zobacz harmonogram
            </button>
          </motion.div>

          <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants} // Przypisanie wariantu kontenera
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
          >
            <ProgramCard
                category="Edukacja"
                title="Liceum Columbus"
                description="Szkoła inna niż wszystkie. Miejsce, gdzie edukacja akademicka spotyka się z formacją charakteru. Kształcimy przyszłe elity w oparciu o wartości."
                gradient="from-neon-yellow to-orange-500"
                link={"https://www.liceumcolumbus.pl/"}
                image="/columbus.png"
            />
            <ProgramCard
                category="Mentoring"
                title="The Grade Trójmiasto"
                description="Program mentoringowy dla chłopców, który kształtuje męstwo, odpowiedzialność i umiejętności liderskie. Pomagamy im stawać się mężczyznami, na których można polegać."
                gradient="from-neon-blue to-cyan-600"
                link={"https://thegrade.gdansk.pl/"}
                image="/thegrade.webp"
            />
            <ProgramCard
                category="Wsparcie"
                title="Fundacja Columbus"
                description='Nasza wizytówka i cel nadrzędny. Kampania społeczna i edukacyjna promująca modę na życie bez "wspomagaczy".'
                gradient="from-neon-purple to-pink-600"
                image="/fundacja.webp"
            />
          </motion.div>
        </div>
      </section>
  );
};