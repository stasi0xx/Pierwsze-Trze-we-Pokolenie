import React from 'react';
import { motion } from 'framer-motion';

export const RegulationsPage: React.FC = () => {
    return (
        <section className="min-h-screen bg-charcoal pt-32 pb-24 relative">
            <div className="container mx-auto px-6 max-w-4xl text-gray-300">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                        Regulamin <span className="text-neon-yellow">Serwisu</span>
                    </h1>

                    <div className="space-y-8 leading-relaxed text-sm md:text-base glass-panel p-8 md:p-12 rounded-3xl border border-white/10">

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. Postanowienia ogólne</h2>
                            <p>
                                1. Niniejszy Regulamin określa zasady korzystania z serwisu internetowego <strong>Pierwsze Trzeźwe Pokolenie</strong>, dostępnego pod adresem internetowym domeny fundacji.
                            </p>
                            <p className="mt-2">
                                2. Właścicielem i Administratorem serwisu jest:<br/>
                                <strong>Fundacja Columbus</strong><br/>
                                Al. Grunwaldzka 472C, 80-309 Gdańsk<br/>
                                NIP: 5842768419, REGON: 369543418, KRS: 0000719970<br/>
                                e-mail: <a href="mailto:biuro@pierwszetrzezwepokolenie.pl" className="text-neon-yellow hover:underline">biuro@pierwszetrzezwepokolenie.pl</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. Rodzaje i zakres usług świadczonych drogą elektroniczną</h2>
                            <p>Administrator świadczy za pośrednictwem Serwisu następujące usługi:</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li>Umożliwienie zapoznania się z treściami edukacyjnymi i informacyjnymi dotyczącymi działalności Fundacji.</li>
                                <li>Umożliwienie przesłania zgłoszenia rekrutacyjnego poprzez formularz "Dołącz do nas".</li>
                                <li>Umożliwienie zapisu na Newsletter (powiadomienia o nowościach).</li>
                                <li>Przekierowanie do zewnętrznych bramek płatności (Zrzutka.pl) w celu przekazania darowizny.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. Warunki świadczenia usług</h2>
                            <p>
                                1. Korzystanie z Serwisu jest nieodpłatne.<br/>
                                2. Do korzystania z Serwisu niezbędne jest posiadanie urządzenia z dostępem do Internetu oraz przeglądarki internetowej.<br/>
                                3. Użytkownik zobowiązany jest do korzystania z Serwisu w sposób zgodny z prawem i dobrymi obyczajami, a w szczególności do niedostarczania treści o charakterze bezprawnym.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. Formularz zgłoszeniowy i Newsletter</h2>
                            <p>
                                1. Użytkownik może wysłać zgłoszenie chęci współpracy za pomocą interaktywnego formularza.<br/>
                                2. Wypełnienie formularza wymaga podania prawdziwych danych (Imię, Nazwisko, E-mail).<br/>
                                3. Zapis na Newsletter jest dobrowolny i może zostać anulowany w każdym momencie poprzez kontakt z Administratorem.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">5. Darowizny</h2>
                            <p>
                                1. Serwis zawiera linki umożliwiające wsparcie finansowe Fundacji.<br/>
                                2. Obsługę płatności realizuje zewnętrzny serwis <strong>Zrzutka.pl</strong>.<br/>
                                3. Fundacja nie gromadzi danych kart płatniczych ani danych logowania do bankowości elektronicznej Użytkowników.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">6. Postępowanie reklamacyjne</h2>
                            <p>
                                1. Reklamacje dotyczące funkcjonowania Serwisu można zgłaszać drogą elektroniczną na adres e-mail: biuro@pierwszetrzezwepokolenie.pl.<br/>
                                2. Administrator ustosunkuje się do reklamacji w terminie 14 dni od jej otrzymania.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">7. Ochrona danych osobowych</h2>
                            <p>
                                Szczegółowe informacje dotyczące przetwarzania danych osobowych znajdują się w <a href="/polityka-prywatnosci" className="text-neon-yellow hover:underline">Polityce Prywatności</a>.
                            </p>
                        </section>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};