import React from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { CreditCard, Banknote, Handshake, Target, ArrowUpRight, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

// Warianty animacji
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Logika paska postępu (przeniesiona z components/Donate.tsx)
const GoalTracker: React.FC = () => {
    // Wartości stałe, ale można je później pobierać np. z Supabase/API
    const currentAmount = 300;
    const goalAmount = 5000;
    const percentage = (currentAmount / goalAmount) * 100;

    return (
        <div className="mb-8">
            <motion.div variants={itemVariants} className="flex justify-between text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">
                <span>Zebrano: {currentAmount.toLocaleString()} PLN</span>
                <span>Cel: {goalAmount.toLocaleString()} PLN</span>
            </motion.div>
            <motion.div variants={itemVariants} className="h-4 w-full bg-charcoal rounded-full overflow-hidden border border-white/10">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-neon-yellow to-orange-500 relative"
                >
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
                </motion.div>
            </motion.div>
        </div>
    );
};

// Komponent do kopiowania numeru konta (zalogika z components/Footer.tsx)
const BankTransferInfo: React.FC = () => {
    const [copied, setCopied] = React.useState(false);
    const accountNumber = "49 1050 1764 1000 0090 8133 8411";

    const handleCopy = () => {
        navigator.clipboard.writeText(accountNumber.replace(/\s/g, ''));
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <motion.div variants={itemVariants} className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4 hover:border-neon-yellow/30 transition-all interactive">
            <div className="flex items-center gap-3">
                <Banknote size={24} className="text-neon-yellow" />
                <h3 className="text-2xl font-display font-bold text-white">Przelew Tradycyjny</h3>
            </div>
            <p className="text-gray-300">
                Możesz wesprzeć nas bezpośrednio przelewem. Dziękujemy!
            </p>
            <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Numer konta:</p>
                <button
                    onClick={handleCopy}
                    className="w-full text-left group relative flex items-center justify-between gap-2 bg-charcoal/50 p-3 rounded-xl border border-white/10 hover:bg-charcoal/70 transition-all interactive"
                    title="Kliknij, aby skopiować numer konta"
                >
                    <span className="font-mono text-base md:text-lg text-white break-all transition-colors">
                      {accountNumber}
                    </span>
                    <div className="text-gray-500 group-hover:text-neon-yellow transition-colors shrink-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={copied ? "check" : "copy"}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                            >
                                {copied ? <Check size={20} className="text-neon-green" /> : <Copy size={20} />}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </button>
                <p className="text-xs text-gray-500 mt-2">Fundacja Columbus, Al. Grunwaldzka 472C, 80-309 Gdańsk</p>
            </div>
        </motion.div>
    );
};

// Komponent dla darowizn online
const OnlineDonationCard: React.FC = () => (
    <motion.div variants={itemVariants} className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4 hover:border-neon-yellow/30 transition-all interactive">
        <div className="flex items-center gap-3">
            <CreditCard size={24} className="text-neon-yellow" />
            <h3 className="text-2xl font-display font-bold text-white">Wpłata Online (Zrzutka.pl)</h3>
        </div>
        <p className="text-gray-300">
            Najszybszy i najprostszy sposób, by nas wesprzeć. Wpłaty są realizowane przez zaufany zewnętrzny serwis płatności.
        </p>
        <a
            // Zmień link na aktualną zrzutkę!
            href="https://zrzutka.pl/pierwsze-trzezwe-pokolenie-przykładowy"
            target="_blank"
            rel="noreferrer"
            className="interactive group relative w-full px-6 py-3 bg-neon-yellow text-charcoal font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(244,255,0,0.4)] text-center flex items-center justify-center gap-2"
        >
            <span className="relative z-10 flex items-center gap-2">
                Wpłać na Zrzutka.pl <ArrowUpRight size={18} />
            </span>
            <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </a>
    </motion.div>
);

// Komponent dla Partnerstwa
const PartnershipCard: React.FC = () => (
    <motion.div variants={itemVariants} className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4 hover:border-neon-yellow/30 transition-all interactive">
        <div className="flex items-center gap-3">
            <Handshake size={24} className="text-neon-blue" />
            <h3 className="text-2xl font-display font-bold text-white">Zostań Partnerem</h3>
        </div>
        <p className="text-gray-300">
            Reprezentujesz firmę, organizację lub szkołę? Dołącz do grona Partnerów PTP i buduj trzeźwą przyszłość razem z nami!
        </p>
        <Link
            to="/dolacz"
            className="interactive group relative w-full px-6 py-3 bg-neon-purple text-white font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(188,19,254,0.4)] text-center flex items-center justify-center gap-2"
        >
            <span className="relative z-10 flex items-center gap-2">
                Skontaktuj się <ArrowUpRight size={18} />
            </span>
            <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Link>
    </motion.div>
);


export const DonatePage: React.FC = () => {
    return (
        <section className="min-h-screen bg-charcoal pt-32 pb-24 relative overflow-hidden">
            {/* Tło dekoracyjne */}
            <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-neon-yellow/5 rounded-full blur-[120px] animate-blob pointer-events-none" />
            <div className="absolute left-[-10%] bottom-[10%] w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[100px] animate-blob animation-delay-2000 pointer-events-none" />


            <div className="container mx-auto px-6 max-w-5xl text-gray-300 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                        <span className="text-neon-yellow">Wesprzyj</span> Naszą Misję
                    </h1>
                    <p className="text-lg text-gray-400 mb-12 max-w-2xl">
                        Każda złotówka to realna zmiana i nowe warsztaty dla młodzieży. Pomóż nam budować pokolenie świadomego wyboru.
                    </p>

                    <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-10">

                        <div className="text-center">
                            <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center justify-center gap-2">
                                <Target size={30} className="text-neon-yellow" />
                                Aktualny Cel Zbiórki
                            </h2>
                            <GoalTracker />
                            <p className="text-gray-400 text-sm">
                                Środki są przeznaczane na organizację bezpłatnych warsztatów, produkcję materiałów edukacyjnych oraz dotarcie do szkół w całej Polsce.
                            </p>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid lg:grid-cols- gap-8 pt-8 border-t border-white/10"
                        >
                            <BankTransferInfo />
                            <PartnershipCard />
                        </motion.div>

                        <motion.div variants={itemVariants} className="text-center pt-8 border-t border-white/10">
                            <h3 className="text-xl font-bold text-white mb-2">Pytania?</h3>
                            <p className="text-gray-400">
                                Skontaktuj się z nami mailowo: <a href="mailto:biuro@pierwszetrzezwepokolenie.pl" className="text-neon-yellow hover:underline">biuro@pierwszetrzezwepokolenie.pl</a>.
                            </p>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};