import React from 'react';
import { motion } from 'framer-motion';

export const PrivacyPolicyPage: React.FC = () => {
    return (
        <section className="min-h-screen bg-charcoal pt-32 pb-24 relative">
            <div className="container mx-auto px-6 max-w-4xl text-gray-300">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                        Polityka <span className="text-neon-yellow">Prywatności</span>
                    </h1>

                    <div className="space-y-8 leading-relaxed text-sm md:text-base glass-panel p-8 md:p-12 rounded-3xl border border-white/10">

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. Postanowienia ogólne</h2>
                            <p>
                                Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z serwisu internetowego <strong>Pierwsze Trzeźwe Pokolenie</strong>.
                            </p>
                            <p className="mt-2">
                                Administratorem danych osobowych zawartych w serwisie jest:<br/>
                                <strong>Fundacja Columbus</strong><br/>
                                Al. Grunwaldzka 472C, 80-309 Gdańsk<br/>
                                NIP: 5842768419, REGON: 369543418, KRS: 0000719970<br/>
                                (dalej: „Administrator”).
                            </p>
                            <p className="mt-2">
                                Kontakt z Administratorem jest możliwy pod adresem e-mail: <a href="mailto:biuro@pierwszetrzezwepokolenie.pl" className="text-neon-yellow hover:underline">biuro@pierwszetrzezwepokolenie.pl</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. Cele i podstawy przetwarzania danych</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Obsługa formularza zgłoszeniowego ("Dołącz do nas"):</strong><br/>
                                    Przetwarzamy Twoje imię, nazwisko, adres e-mail oraz informacje zawarte w opisie w celu rekrutacji uczestników do projektów i nawiązania współpracy. Podstawą prawną jest Twoja zgoda (Art. 6 ust. 1 lit. a RODO) wyrażona przez wysłanie formularza.
                                </li>
                                <li>
                                    <strong>Newsletter i komunikacja:</strong><br/>
                                    Przetwarzamy Twój adres e-mail w celu wysyłki informacji o nowych materiałach i inicjatywach. Podstawą jest Twoja zgoda.
                                </li>
                                <li>
                                    <strong>Cele analityczne i statystyczne:</strong><br/>
                                    Korzystamy z Google Analytics w celu analizy ruchu na stronie, co stanowi nasz uzasadniony interes (Art. 6 ust. 1 lit. f RODO) polegający na ulepszaniu serwisu.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. Darowizny i Płatności</h2>
                            <p>
                                Serwis nie przetwarza bezpośrednio danych kart płatniczych ani nie obsługuje procesu płatności. Wszelkie przyciski typu "Wpłać" lub "Wsparcie" przekierowują bezpośrednio do zewnętrznego serwisu <strong>Zrzutka.pl</strong>.
                            </p>
                            <p className="mt-2">
                                Administratorem danych osobowych podanych w trakcie dokonywania wpłaty w serwisie Zrzutka.pl jest operator tego serwisu (Zrzutka.pl sp. z o.o.). Zasady przetwarzania tych danych określa regulamin i polityka prywatności serwisu Zrzutka.pl.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. Odbiorcy danych</h2>
                            <p>Twoje dane mogą być powierzane podmiotom przetwarzającym je na nasze zlecenie:</p>
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                                <li><strong>Supabase</strong> – dostawca infrastruktury bazy danych (przechowywanie zgłoszeń).</li>
                                <li><strong>Google Ireland Limited</strong> – dostawca usług analitycznych (Google Analytics).</li>
                                <li>Dostawcy systemów mailingowych – w przypadku zapisu na newsletter (zewnętrzny system do wysyłki e-maili).</li>
                                <li>Podmioty świadczące usługi hostingowe i IT dla Administratora.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">5. Pliki Cookies i Google Analytics</h2>
                            <p>
                                Serwis wykorzystuje pliki cookies (ciasteczka). Są to niewielkie pliki tekstowe wysyłane przez serwer www i przechowywane przez oprogramowanie komputera przeglądarki.
                            </p>
                            <p className="mt-2">
                                Korzystamy z narzędzia <strong>Google Analytics</strong>, które wykorzystuje pliki cookies do analizy sposobu korzystania ze strony przez Użytkowników. Informacje generowane przez cookie na temat korzystania z witryny (w tym adres IP) mogą być przesyłane do serwerów Google.
                            </p>
                            <p className="mt-2">
                                Użytkownik może w każdej chwili wyłączyć obsługę plików cookies w ustawieniach swojej przeglądarki internetowej.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">6. Prawa Użytkownika</h2>
                            <p>Masz prawo do:</p>
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                                <li>Dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania.</li>
                                <li>Wniesienia sprzeciwu wobec przetwarzania danych.</li>
                                <li>Przenoszenia danych.</li>
                                <li>Cofnięcia zgody na przetwarzanie danych w dowolnym momencie.</li>
                                <li>Wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">7. Kontakt</h2>
                            <p>
                                W sprawach związanych z ochroną danych osobowych prosimy o kontakt pod adresem e-mail: <a href="mailto:biuro@pierwszetrzezwepokolenie.pl" className="text-neon-yellow hover:underline">biuro@pierwszetrzezwepokolenie.pl</a>.
                            </p>
                        </section>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};