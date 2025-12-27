import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Scene3D from '../Scene3D';
import heroVisual from '../../assets/hero_visual.png';
import heroMascot from '../../assets/hero_mascot.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="canvas-container !absolute">
                <Suspense fallback={null}>
                    <Scene3D />
                </Suspense>
            </div>

            {/* Futuristic 3D Perspective Grid */}
            <div className="absolute inset-0 z-0 digital-grid pointer-events-none">
                <div className="perspective-grid opacity-30" />
            </div>

            {/* High Energy Background Visual - Layered with Grid */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
            >
                <img
                    src={heroVisual}
                    alt="Hero Visual"
                    className="w-full h-full object-cover mix-blend-screen dark:mix-blend-overlay opacity-40 blur-sm"
                />
            </motion.div>

            <div className="container mx-auto px-6 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 text-center md:text-left pt-10"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-flex items-center gap-2 py-2 px-6 rounded-full glass text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-8 border-cyan-400/20"
                        >
                            <Sparkles size={14} className="animate-pulse" />
                            Digital Excellence Redefined
                        </motion.span>

                        <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8 tracking-tighter">
                            We Craft <span className="text-gradient">Digital</span> <br />
                            <span className="dark:text-white text-slate-900 drop-shadow-2xl">Masterpieces.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12 font-medium leading-relaxed">
                            Transforming visionary ideas into exceptional digital realities. We blend <span className="text-blue-500 font-bold">next-gen tech</span> with world-class design.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-6">
                            <Link
                                to="/projects"
                                className="fancy-button min-w-[200px] text-base flex items-center justify-center group"
                            >
                                Explore Work
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                className="fancy-button glass border-blue-500/20 dark:text-white text-slate-800 px-10 py-4 text-base min-w-[200px]"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 relative group"
                    >
                        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full group-hover:bg-cyan-500/30 transition-colors duration-1000" />
                        <motion.img
                            src={heroMascot}
                            alt="Hero Mascot"
                            className="relative z-10 w-full max-w-[600px] mx-auto drop-shadow-[0_0_50px_rgba(6,182,212,0.3)]"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
