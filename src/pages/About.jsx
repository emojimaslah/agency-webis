import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Rocket, Zap, Users } from 'lucide-react';
import Values from '../components/about/Values';
import Team from '../components/about/Team';

const About = () => {
  return (
    <div className="pt-32 transition-colors duration-500">
      {/* About Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full glass text-blue-500 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Sparkles size={14} />
              Our Story
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter dark:text-white text-slate-900 leading-[1.1]">
              Driven by <span className="text-gradient">Data.</span><br />
              Fueled by <span className="text-gradient">Creative.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              We are a collective of digital visionaries dedicated to crafting meaningful experiences. 
              Since 2020, we've helped global brands redefine their digital presence and dominate their markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Glass Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass rounded-[4rem] p-12 md:p-20 border-blue-500/10 shadow-2xl shadow-blue-500/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: 'Years of Experience', value: '5+', icon: <Rocket size={24} />, color: "text-blue-500" },
                { label: 'Success Rate', value: '99%', icon: <Zap size={24} />, color: "text-yellow-500" },
                { label: 'Global Clients', value: '150+', icon: <Target size={24} />, color: "text-purple-500" },
                { label: 'Expert Humans', value: '42', icon: <Users size={24} />, color: "text-emerald-500" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center"
                >
                  <div className={`${stat.color} mb-4 bg-white dark:bg-slate-900 p-4 rounded-[1.5rem] shadow-lg border border-blue-500/10`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-black dark:text-white text-slate-900 mb-2 truncate max-w-full">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Values />
      <Team />
    </div>
  );
};

export default About;
