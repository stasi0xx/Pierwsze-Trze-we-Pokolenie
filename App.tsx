import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Stories } from './components/Stories';
import { Donate } from './components/Donate';
import { Footer } from './components/Footer';
import { MouseFollower } from './components/MouseFollower';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate initial loading for a smooth entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-charcoal text-neon-yellow">
        <div className="relative h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-white/10 border-t-neon-yellow"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen selection:bg-neon-yellow selection:text-charcoal">
      <MouseFollower />
      <Navbar />
      <main className="flex flex-col gap-0">
        <Hero />
        <Mission />
        <About />
        <Programs />
        <Stories />
        <Donate />
      </main>
      <Footer />
    </div>
  );
};

export default App;