import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden pt-20">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-200/30 blur-3xl" />
                <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-300/20 blur-3xl" />
                <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-200/30 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                        Award Winning Digital Agency
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                        We Craft <span className="text-blue-600">Digital</span> <br />
                        experiences that matter.
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                        We help forward-thinking brands build their digital presence with modern design and cutting-edge technology.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/projects"
                            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 flex items-center group"
                        >
                            View Our Work
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors hover:border-gray-300 flex items-center"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
