// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MouseFollower } from './components/MouseFollower';
import {CookieConsent} from "@/components/CookieConsent.tsx";

const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const SchoolsPage = React.lazy(() => import('./pages/SchoolsPage').then(module => ({ default: module.SchoolsPage })));
const JoinUsPage = React.lazy(() => import('./pages/JoinUsPage').then(module => ({ default: module.JoinUsPage })));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage').then(module => ({ default: module.PrivacyPolicyPage })));
const RegulationsPage = React.lazy(() => import('./pages/RegulatoinsPage').then(module => ({ default: module.RegulationsPage })));


// Komponent pomocniczy do przewijania na górę przy zmianie strony
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

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
        <Router>
            <ScrollToTop />
            <div className="relative min-h-screen selection:bg-neon-yellow selection:text-charcoal bg-charcoal">
                <MouseFollower />
                <Navbar />
                <CookieConsent />
                <main className="flex flex-col gap-0">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/szkoly" element={<SchoolsPage />} />
                        <Route path={"/dolacz"} element={<JoinUsPage/>} />
                        <Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} />
                        <Route path={"/regulamin"} element={<RegulationsPage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
};

export default App;