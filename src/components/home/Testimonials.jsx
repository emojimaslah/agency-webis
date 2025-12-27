import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Working with this agency was a game-changer for our business. They truly understood our vision and delivered a website that exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: 2,
    content: "The attention to detail and creative approach is exactly what we needed. Our conversion rates have doubled since launching the new design.",
    author: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: 3,
    content: "Professional, responsive, and incredibly talented. I wouldn't hesitate to recommend them to anyone looking for top-tier digital services.",
    author: "Emily Davis",
    role: "Founder, StyleStudio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 relative overflow-hidden section-glow-blue">
      <div className="absolute inset-0 stars-overlay pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-500/10 text-blue-500 mb-8"
          >
            <Quote size={40} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black dark:text-white text-slate-900 mb-6 tracking-tighter"
          >
            Client <span className="text-blue-500">Voices.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-10 rounded-[3rem] relative group border-blue-500/10"
            >
              <Quote className="absolute top-8 right-8 text-blue-500/10 group-hover:text-blue-400 transition-all duration-700 group-hover:rotate-12 group-hover:scale-125" size={60} />
              
              <div className="flex space-x-1 mb-8 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]" />
                ))}
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 italic mb-10 leading-relaxed font-medium text-lg relative z-10 group-hover:dark:text-white transition-colors duration-500">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center mt-auto">
                <div className="relative group/avatar">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/20 group-hover/avatar:border-blue-400/50 transition-all duration-700"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center shadow-lg group-hover/avatar:scale-110 transition-transform duration-500">
                    <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-black dark:text-white text-slate-900 leading-tight group-hover:text-blue-500 transition-colors duration-500 uppercase tracking-tight">{testimonial.author}</h4>
                  <p className="text-xs text-slate-500 font-black uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
