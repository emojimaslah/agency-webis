import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Travel Experience App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Modern Branding',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'Social Media App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'Corporate Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800',
  },
];

const categories = ['All', 'Web Design', 'Mobile App', 'Branding'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-32 min-h-screen pb-20 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full glass text-blue-500 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles size={14} />
              Our Portfolio
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter dark:text-white text-slate-900">
              Selected <span className="text-gradient">Creations.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
              Explore our portfolio of award-winning digital experiences that bridge the gap between imagination and reality.
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full text-sm font-black tracking-widest uppercase transition-all duration-500 border-2 ${
                activeCategory === category
                  ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/20 scale-105'
                  : 'glass border-transparent text-slate-500 dark:text-slate-400 hover:border-blue-500/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={project.id}
                className="group relative h-[450px] rounded-[3rem] overflow-hidden glass-card cursor-pointer"
              >
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>
                
                <div className="relative h-full z-10 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="overflow-hidden mb-2">
                    <motion.span className="inline-block text-blue-400 font-black text-xs uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {project.category}
                    </motion.span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/50 group-hover:text-white transition-colors font-bold text-sm">
                    View Project <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
