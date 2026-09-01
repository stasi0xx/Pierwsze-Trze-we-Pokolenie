// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MouseFollower } from './components/MouseFollower';
import { CookieConsent } from "@/components/CookieConsent.tsx";

const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const SchoolsPage = React.lazy(() => import('./pages/SchoolsPage').then(module => ({ default: module.SchoolsPage })));
const JoinUsPage = React.lazy(() => import('./pages/JoinUsPage').then(module => ({ default: module.JoinUsPage })));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage').then(module => ({ default: module.PrivacyPolicyPage })));
const RegulationsPage = React.lazy(() => import('./pages/RegulatoinsPage').then(module => ({ default: module.RegulationsPage })));
const LinksPage = React.lazy(() => import('./pages/LinksPage').then(module => ({ default: module.LinksPage })));
const DonatePage = React.lazy(() => import('./pages/DonatePage').then(module => ({ default: module.DonatePage })));
const AmbassadorsPage = React.lazy(() => import('./pages/AmbassadorsPage').then(module => ({ default: module.AmbassadorsPage })));

const PageLoader = () => (
    <div
        className="min-h-screen bg-charcoal flex items-center justify-center px-6"
        role="status"
        aria-live="polite"
    >
        <div className="flex flex-col items-center gap-4 text-center">
            <div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-neon-yellow animate-spin" />
            <p className="text-sm text-gray-400">Ładowanie strony…</p>
        </div>
    </div>
);


// Komponent pomocniczy do przewijania na górę przy zmianie strony
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const App: React.FC = () => {


    return (
        <Router>
            <ScrollToTop />
            <div className="relative min-h-screen selection:bg-neon-yellow selection:text-charcoal bg-charcoal">
                <MouseFollower />
                <Navbar />
                <CookieConsent />
                <main className="flex flex-col gap-0">
                    <React.Suspense fallback={<PageLoader />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/szkoly" element={<SchoolsPage />} />
                            <Route path={"/dolacz"} element={<JoinUsPage />} />
                            <Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} />
                            <Route path={"/regulamin"} element={<RegulationsPage />} />
                            <Route path={"/wesprzyj"} element={<DonatePage />} />
                            <Route path={"/linki"} element={<LinksPage />} />
                            <Route path={"/ambasadorzy"} element={<AmbassadorsPage />} />
                        </Routes>
                    </React.Suspense>
                </main>

                <Footer />
            </div>
        </Router>
    );
};

export default App;
