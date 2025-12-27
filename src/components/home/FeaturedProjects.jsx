import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'Analysis & Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'A comprehensive dashboard for a leading fintech company, featuring real-time data visualization.',
  },
  {
    id: 2,
    title: 'Travel Experience App',
    category: 'Mobile Application',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    description: 'An immersive travel app allowing users to book localized experiences.',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Scalable e-commerce platform built for a global fashion retailer.',
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-32 bg-transparent relative overflow-hidden section-glow-violet">
      <div className="absolute inset-0 stars-overlay pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-violet-500 font-bold tracking-widest uppercase text-xs mb-4 block"
            >
              Case Studies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-4xl md:text-5xl font-black dark:text-white text-slate-900 mb-6"
            >
              Built for <span className="text-gradient">Impact.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
            >
              Discover how we've helped our clients achieve their digital goals through innovation and design.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/projects"
              className="hidden md:flex items-center text-violet-500 font-bold hover:text-fuchsia-400 transition-colors mt-6 md:mt-0 gap-2 group"
            >
              Explore All Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[500px] overflow-hidden rounded-[3rem] glass-card border-violet-500/10"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010409] via-[#010409]/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              </div>

              <div className="relative h-full z-10 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                <motion.span className="inline-block py-1.5 px-4 rounded-full bg-violet-500/20 backdrop-blur-md text-fuchsia-400 text-[10px] font-black uppercase tracking-widest mb-4 border border-fuchsia-400/20 w-fit">
                  {project.category}
                </motion.span>
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-violet-500 transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-slate-300 line-clamp-2 mb-8 font-medium">
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs group/btn"
                >
                  View Case Study
                  <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform text-blue-500" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center text-blue-500 font-bold hover:text-blue-600 transition-colors gap-2"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
