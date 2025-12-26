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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">
              Discover how we've helped our clients achieve their digital goals.
            </p>
          </div>
          <Link 
            to="/projects" 
            className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors mt-6 md:mt-0"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden h-64 relative">
                 <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/60 transition-colors duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-semibold text-lg flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Project <ExternalLink className="ml-2 w-5 h-5" />
                    </span>
                 </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">{project.category}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
