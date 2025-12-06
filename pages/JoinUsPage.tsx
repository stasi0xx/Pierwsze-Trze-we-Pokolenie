import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Send, Mic, Mail, Bell, Sparkles, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase.ts'; // Upewnij się, że ta ścieżka jest poprawna

// Warianty animacji
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const JoinUsPage: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        about: ''
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Podstawowa walidacja (oprócz HTML required)
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.about) {
            setErrorMessage("Wypełnij wszystkie pola.");
            setStatus('error');
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        try {
            // 2. Wysłanie do Supabase (bezpieczne dzięki klientowi JS)
            const { error } = await supabase
                .from('zapisy')
                .insert([
                    {
                        imie: formData.firstName,
                        nazwisko: formData.lastName,
                        email: formData.email,
                        opis: formData.about,
                        // status: 'Do zatwierdzenia' - to ustawi się automatycznie przez DEFAULT w bazie
                    }
                ]);

            if (error) throw error;

            // 3. Sukces
            setStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', about: '' }); // Reset formularza

        } catch (error: any) {
            console.error('Błąd zapisu:', error);
            setStatus('error');
            setErrorMessage('Wystąpił problem z wysłaniem zgłoszenia. Spróbuj ponownie później.');
        }
    };

    return (
        <section className="min-h-screen bg-charcoal pt-32 pb-24 relative overflow-hidden flex items-center">
            {/* Tło dekoracyjne */}
            <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] animate-blob pointer-events-none" />
            <div className="absolute left-[-10%] bottom-[10%] w-[400px] h-[400px] bg-neon-yellow/5 rounded-full blur-[100px] animate-blob animation-delay-2000 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* LEWA KOLUMNA - COPYWRITING */}
                    <motion.div
                        className="lg:w-1/2"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-yellow text-xs font-bold uppercase tracking-wider mb-6">
                            <Sparkles size={12} />
                            <span>Rekrutacja otwarta</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Bądź głosem <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-green">Swojego Pokolenia.</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
                            Szukamy ludzi z pasją, historią i charakterem. Dołącz do społeczności PTP, rozwijaj się i inspiruj innych do trzeźwego, świadomego życia.
                        </motion.p>

                        <motion.div variants={itemVariants} className="space-y-6">
                            <BenefitItem
                                icon={<Mic className="text-charcoal" size={20} />}
                                title="Wystąp w odcinku"
                                desc="Masz ciekawą historię lub talent? Pokaż się w naszych materiałach wideo i podcastach."
                                color="bg-neon-yellow"
                            />
                            <BenefitItem
                                icon={<Mail className="text-white" size={20} />}
                                title="Ekskluzywny Newsletter"
                                desc="Otrzymuj wiedzę, zaproszenia na zamknięte eventy i materiały premium."
                                color="bg-neon-purple"
                            />
                            <BenefitItem
                                icon={<Bell className="text-charcoal" size={20} />}
                                title="Bądź na bieżąco"
                                desc="Powiadomienia o nowych inicjatywach, warsztatach i spotkaniach w Twojej okolicy."
                                color="bg-neon-blue"
                            />
                        </motion.div>
                    </motion.div>

                    {/* PRAWA KOLUMNA - FORMULARZ */}
                    <motion.div
                        className="lg:w-1/2 w-full"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                            <h3 className="text-2xl font-bold text-white mb-6 font-display">Formularz Zgłoszeniowy</h3>

                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-10 text-center space-y-4"
                                >
                                    <div className="w-20 h-20 bg-neon-green/20 rounded-full flex items-center justify-center text-neon-green mb-2">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white">Dziękujemy!</h4>
                                    <p className="text-gray-400">Twój formularz został wysłany. Skontaktujemy się z Tobą wkrótce.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="mt-6 text-neon-yellow hover:text-white transition-colors underline underline-offset-4"
                                    >
                                        Wyślij kolejne zgłoszenie
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Imię</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                required
                                                disabled={status === 'submitting'}
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-yellow/50 focus:bg-white/10 transition-all disabled:opacity-50"
                                                placeholder="Jan"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Nazwisko</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                required
                                                disabled={status === 'submitting'}
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-yellow/50 focus:bg-white/10 transition-all disabled:opacity-50"
                                                placeholder="Kowalski"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Adres E-mail</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            disabled={status === 'submitting'}
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-yellow/50 focus:bg-white/10 transition-all disabled:opacity-50"
                                            placeholder="jan.kowalski@example.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Parę słów o sobie</label>
                                        <textarea
                                            name="about"
                                            rows={4}
                                            required
                                            disabled={status === 'submitting'}
                                            value={formData.about}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-yellow/50 focus:bg-white/10 transition-all resize-none disabled:opacity-50"
                                            placeholder="Czym się pasjonujesz? Dlaczego chcesz dołączyć?"
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                                            <AlertCircle size={16} />
                                            {errorMessage}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full mt-4 bg-neon-yellow text-charcoal font-bold text-lg py-4 rounded-xl hover:bg-white hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(244,255,0,0.3)] interactive disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" />
                                                Wysyłanie...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                Wyślij Zgłoszenie
                                            </>
                                        )}
                                    </button>

                                    <p className="text-xs text-gray-500 text-center mt-4">
                                        Wysyłając formularz, akceptujesz naszą <a href="/polityka-prywatnosci" className="underline hover:text-white">Politykę Prywatności</a>.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const BenefitItem: React.FC<{ icon: React.ReactNode, title: string, desc: string, color: string }> = ({ icon, title, desc, color }) => (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
        <div className={`p-3 rounded-lg ${color} shrink-0`}>
            {icon}
        </div>
        <div>
            <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);