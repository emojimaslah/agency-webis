import React from 'react';
import { motion } from 'framer-motion';
import Values from '../components/about/Values';
import Team from '../components/about/Team';

const About = () => {
  return (
    <div className="pt-20">
      {/* About Hero */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h5 className="text-blue-600 font-bold uppercase tracking-widest mb-4">About Us</h5>
            <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Driven by data,<br />
              Fueled by creativity.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a team of digital natives who are passionate about creating meaningful experiences. 
              Founded in 2020, we have helped companies across the globe transform their digital presence and achieve their business goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Years of Experience', value: '5+' },
              { label: 'Projects Completed', value: '100+' },
              { label: 'Happy Clients', value: '50+' },
              { label: 'Team Members', value: '15' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Values />
      <Team />
    </div>
  );
};

export default About;
