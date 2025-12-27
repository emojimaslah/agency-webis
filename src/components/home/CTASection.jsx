import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[4rem] overflow-hidden bg-gradient-to-br from-blue-600 to-violet-800 p-12 md:p-24 text-center shadow-2xl shadow-blue-500/20"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -ml-20 -mb-20" />
                    
                    <div className="relative z-10">
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8 border border-white/20"
                        >
                            <Zap size={14} fill="currentColor" />
                            Let's Build Something Great
                        </motion.div>
                        
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
                            Ready to Elevate <br /> Your Digital Presence?
                        </h2>
                        
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12 font-medium">
                            Join over 100+ brands that have scaled their business with our cutting-edge solutions. 
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                to="/contact"
                                className="fancy-button bg-white text-blue-600 px-10 py-5 text-lg flex items-center group"
                            >
                                Start Your Journey
                                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/about"
                                className="fancy-button border-2 border-white/30 text-white px-10 py-5 text-lg"
                            >
                                Learn Our Process
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
