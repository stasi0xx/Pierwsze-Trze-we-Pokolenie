import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Music, ArrowRight, UserPlus, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LinksPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100
            }
        }
    };

    const links = [
        {
            name: 'YouTube',
            icon: Youtube,
            url: 'https://www.youtube.com/@PierwszeTrze%C5%BAwePokolenie',
            className: 'bg-gradient-to-br from-[#FF0000] to-[#cc0000] shadow-[0_0_20px_rgba(255,0,0,0.4)] border-[#FF0000]',
            description: 'Subskrybuj nasz kanał'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://www.instagram.com/pierwszetrzezwepokolenie/',
            className: 'bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] shadow-[0_0_20px_rgba(225,48,108,0.4)] border-[#fd1d1d]',
            description: 'Obserwuj nas na bieżąco'
        },
        {
            name: 'Spotify',
            icon: Music,
            url: 'https://open.spotify.com/show/0ZtGsxwcT4uwZo3ZNFJpyV',
            className: 'bg-gradient-to-br from-[#1DB954] to-[#1ed760] shadow-[0_0_20px_rgba(29,185,84,0.4)] border-[#1DB954]',
            description: 'Posłuchaj naszych podcastów'
        },
        {
            name: 'TikTok',
            icon: Video,
            url: 'https://www.tiktok.com/@pierwszetrzezwepokolenie',
            className: 'bg-gradient-to-br from-[#000000] to-[#25F4EE] shadow-[0_0_20px_rgba(37,244,238,0.4)] border-[#25F4EE]',
            description: 'Oglądaj nasze filmy'
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-blob" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-yellow/10 rounded-full blur-[120px] animate-pulse" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-lg px-6 relative z-10 flex flex-col gap-6"
            >
                {/* Header Section */}
                <motion.div variants={itemVariants} className="text-center mb-4 space-y-2">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter">
                        Znajdź nas
                        <span className="text-neon-yellow"> w sieci</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Dołącz do społeczności Pierwszego Trzeźwego Pokolenia
                    </p>
                </motion.div>

                {/* Social Links */}
                <div className="grid grid-cols-2 gap-4">
                    {links.map((link) => (
                        <motion.a
                            key={link.name}
                            variants={itemVariants}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative flex items-center justify-center md:justify-start p-4 rounded-2xl border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:brightness-110 ${link.className}`}
                        >
                            <div className="p-3 rounded-xl bg-white/20 text-white md:mr-4 backdrop-blur-sm shadow-inner flex-shrink-0">
                                <link.icon size={26} strokeWidth={2} />
                            </div>
                            <div className="flex-1 hidden md:block">
                                <h3 className="text-xl font-bold text-white drop-shadow-md">
                                    {link.name}
                                </h3>
                                <p className="text-sm text-white/90 font-medium drop-shadow-sm">
                                    {link.description}
                                </p>
                            </div>
                            <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <ArrowRight className="text-white" size={20} />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    variants={itemVariants}
                    className="mt-6 p-6 rounded-3xl bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-blue/20 border border-white/10 relative overflow-hidden text-center"
                >
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-0" />
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-neon-yellow to-neon-green flex items-center justify-center text-charcoal mb-2 shadow-[0_0_20px_rgba(244,255,0,0.3)]">
                            <UserPlus size={32} strokeWidth={2.5} />
                        </div>

                        <div className="space-y-1">
                            <h2 className="text-2xl font-bold text-white">
                                Zapisz się do ruchu!
                            </h2>
                            <p className="text-sm text-gray-300 max-w-xs mx-auto">
                                Bądź na bieżąco z naszymi działaniami, wydarzeniami i nowymi materiałami.
                            </p>
                        </div>

                        <Link
                            to="/dolacz"
                            className="w-full py-4 px-6 rounded-xl bg-neon-yellow text-charcoal font-bold text-lg hover:bg-white hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(244,255,0,0.3)]"
                        >
                            Dołącz teraz
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
};
