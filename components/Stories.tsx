import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Story {
  id: number;
  name: string;
  age: number;
  role: string;
  text: string;
  color: string;
}

const stories: Story[] = [
  {
    id: 1,
    name: "Kacper",
    age: 19,
    role: "Muzyk, Uczestnik Programu",
    text: "Myślałem, że bez 'wspomagaczy' nie da się tworzyć dobrej muzyki. Fundacja pokazała mi, że najczystsza wena płynie z trzeźwego umysłu. Dziś nagrywam swoją pierwszą płytę.",
    color: "bg-neon-yellow"
  },
  {
    id: 2,
    name: "Julia",
    age: 22,
    role: "Wolontariuszka",
    text: "Czułam presję otoczenia na każdej imprezie. Tutaj znalazłam ludzi, którzy bawią się lepiej ode mnie, nie pijąc ani kropli. To zmieniło moją definicję wolności.",
    color: "bg-neon-blue"
  },
  {
    id: 3,
    name: "Marek",
    age: 45,
    role: "Ojciec nastolatka",
    text: "Nie wiedziałem jak rozmawiać z synem. Dzięki warsztatom zrozumieliśmy się na nowo. Zamiast kontrolować, zacząłem wspierać.",
    color: "bg-neon-purple"
  }
];

export const Stories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="stories" className="py-24 bg-charcoal relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">
          Prawdziwe <span className="text-neon-yellow">Historie</span>
        </h2>

        <div className="max-w-4xl mx-auto relative glass-panel p-8 md:p-12 rounded-3xl min-h-[400px] flex items-center">
          
          <div className="absolute -top-6 -left-6 text-white/10">
            <Quote size={80} />
          </div>

          <div className="flex items-center justify-between absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 z-20 pointer-events-none">
             <button onClick={prev} className="p-3 rounded-full bg-charcoal border border-white/20 text-white hover:bg-white/10 pointer-events-auto transition-colors interactive">
                <ChevronLeft />
             </button>
             <button onClick={next} className="p-3 rounded-full bg-charcoal border border-white/20 text-white hover:bg-white/10 pointer-events-auto transition-colors interactive">
                <ChevronRight />
             </button>
          </div>

          <div className="w-full overflow-hidden">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center gap-10"
                >
                    {/* Abstract Avatar */}
                    <div className={`w-32 h-32 md:w-48 md:h-48 flex-shrink-0 rounded-full ${stories[currentIndex].color} flex items-center justify-center relative`}>
                        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full animate-pulse"></div>
                        <span className="text-4xl font-bold text-charcoal font-display z-10">
                            {stories[currentIndex].name.charAt(0)}
                        </span>
                    </div>

                    <div className="text-center md:text-left z-10">
                        <p className="text-xl md:text-2xl font-light italic text-gray-200 mb-6 leading-relaxed">
                            "{stories[currentIndex].text}"
                        </p>
                        <div>
                            <h4 className="text-xl font-bold text-white">{stories[currentIndex].name}, {stories[currentIndex].age} lat</h4>
                            <p className="text-sm text-neon-yellow uppercase tracking-wider">{stories[currentIndex].role}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};