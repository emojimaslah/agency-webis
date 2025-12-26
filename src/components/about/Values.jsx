import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Award } from 'lucide-react';

const values = [
  {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: 'Mission Driven',
    description: 'We are guided by a clear mission to deliver exceptional digital experiences.',
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: 'Collaborative',
    description: 'We believe in the power of partnership and working closely with our clients.',
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: 'Innovative',
    description: 'We constantly push boundaries to create cutting-edge solutions.',
  },
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: 'Excellence',
    description: 'We are committed to the highest standards of quality in everything we do.',
  },
];

const Values = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These principles guide our work and relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
