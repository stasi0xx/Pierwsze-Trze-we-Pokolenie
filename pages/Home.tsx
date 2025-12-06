// src/pages/Home.tsx
import React from 'react';
import { Hero } from '../components/Hero';
import { Mission } from '../components/Mission';
import { About } from '../components/About';
import { Programs } from '../components/Programs';
import { Stories } from '../components/Stories';
import { Donate } from '../components/Donate';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Mission />
            <About />
            <Programs />
            <Stories />
            <Donate />
        </>
    );
};