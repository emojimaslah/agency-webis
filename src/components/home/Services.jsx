import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Palette />,
    title: 'UI/UX Design',
    description: 'We design intuitive and engaging interfaces that users love. From wireframes to high-fidelity prototypes.',
  },
  {
    icon: <Code />,
    title: 'Web Development',
    description: 'Robust and scalable web solutions using the latest technologies like React, Next.js, and Node.js.',
  },
  {
    icon: <LineChart />,
    title: 'Digital Strategy',
    description: 'Data-driven strategies to grow your brand and reach your target audience effectively.',
  },
  {
    icon: <Globe />,
    title: 'SEO & Marketing',
    description: 'Improve your search rankings and drive organic traffic with our expert SEO services.',
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
               We provide a comprehensive range of digital services to help your business thrive in the modern world.
             </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
            >
              <div className="mb-6 bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(service.icon, { className: "w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
