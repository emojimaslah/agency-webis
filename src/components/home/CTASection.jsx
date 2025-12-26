import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection = () => {
    return (
        <section className="py-24 bg-blue-600 relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-500/30 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-700/30 blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                        Let's create something specific together. Reach out to us today to discuss your project.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Start Your Project
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
