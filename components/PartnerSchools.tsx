import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { School, MapPin, ExternalLink, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase.ts'; // Upewnij się, że ścieżka importu jest poprawna

interface SchoolData {
    id: number;
    name: string;
    city: string;
    website_url: string;
    logo_url?: string;
}

export const PartnerSchools: React.FC = () => {
    const [schools, setSchools] = useState<SchoolData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSchools();
    }, []);

    const fetchSchools = async () => {
        try {
            const { data, error } = await supabase
                .from('lista_szkol')
                .select('*')
                .order('szkola', { ascending: true });

            if (error) throw error;
            if (data) setSchools(data);
        } catch (error) {
            console.error('Błąd pobierania szkół:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="partner-schools" className="py-24 bg-charcoal relative overflow-hidden">
            {/* Dekoracyjne tło */}
            <div className="absolute left-[-10%] top-[20%] w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Szkoły <span className="text-neon-green">Partnerskie</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        Placówki, które podjęły wyzwanie i wspólnie z nami budują środowisko wolne od uzależnień.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="animate-spin text-neon-green" size={48} />
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {schools.map((school, index) => (
                            <motion.a
                                key={school.id}
                                href={school.link || '#'}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-panel p-6 rounded-2xl group hover:border-neon-green/50 transition-all duration-300 relative overflow-hidden block"
                            >
                                {/* Efekt hover tła */}
                                <div className="absolute inset-0 bg-neon-green/0 group-hover:bg-neon-green/5 transition-colors duration-300" />

                                <div className="flex items-start justify-between relative z-10">
                                    <div className="p-3 bg-white/5 rounded-xl text-neon-green mb-4 group-hover:scale-110 transition-transform">
                                        <School size={28} />
                                    </div>
                                    {school.link && (
                                        <ExternalLink size={18} className="text-gray-500 group-hover:text-white transition-colors" />
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-neon-green transition-colors">
                                    {school.szkola}
                                </h3>

                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <MapPin size={14} />
                                    <span>{school.adres || 'Polska'}</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};