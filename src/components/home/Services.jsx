import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description: 'We design intuitive and engaging interfaces that users love. From wireframes to high-fidelity prototypes.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Code size={32} />,
    title: 'Web Development',
    description: 'Robust and scalable web solutions using the latest technologies like React, Next.js, and Node.js.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: <LineChart size={32} />,
    title: 'Digital Strategy',
    description: 'Data-driven strategies to grow your brand and reach your target audience effectively.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: <Globe size={32} />,
    title: 'SEO & Marketing',
    description: 'Improve your search rankings and drive organic traffic with our expert SEO services.',
    color: 'from-green-500 to-emerald-500'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden section-glow-cyan">
      <div className="absolute inset-0 stars-overlay pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-cyan-500 font-bold tracking-widest uppercase text-xs mb-4 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 dark:text-white text-slate-900">Pushing Boundaries of <span className="text-gradient">Possibility.</span></h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
              We provide a comprehensive range of digital services to help your business thrive in the modern world.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, transition: { duration: 0.4 } }}
              className="glass-card p-10 rounded-[3rem] group flex flex-col h-full border-cyan-400/20"
            >
              <div className={`mb-8 w-20 h-20 rounded-3xl flex items-center justify-center bg-gradient-to-br ${service.color} text-white shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-black dark:text-white text-slate-900 mb-4 group-hover:text-cyan-400 transition-colors duration-500">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {service.description}
              </p>
              <div className="mt-auto pt-10">
                <span className="text-sm font-black uppercase tracking-widest text-blue-500 hover:text-cyan-400 cursor-pointer flex items-center gap-2 group-hover:translate-x-3 transition-all">
                  Explore Service <span className="text-lg">→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
