import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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
                Get in Touch
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter dark:text-white text-slate-900">
                Let's Start a <span className="text-gradient">Conversation.</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                Whether you have a groundbreaking idea or a complex challenge, we're here to help you navigate the digital landscape.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info Pills */}
            <div className="lg:col-span-5 space-y-6">
              {[
                { icon: <MapPin />, title: "Visit Us", content: "123 Innovation Drive, Suite 100, Tech City, TC 90210", color: "from-blue-500 to-indigo-500" },
                { icon: <Mail />, title: "Email Us", content: "hello@agency.com", color: "from-purple-500 to-pink-500" },
                { icon: <Phone />, title: "Call Us", content: "+1 (555) 123-4567", color: "from-orange-500 to-red-500" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className="glass p-8 rounded-[2rem] flex items-center group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-sm font-black dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-1">{item.title}</h3>
                    <p className="text-lg font-bold dark:text-white text-slate-900">{item.content}</p>
                  </div>
                </motion.div>
              ))}

              {/* Decorative Map Image Container */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass rounded-[2rem] overflow-hidden p-3 h-64 relative group cursor-pointer"
              >
                <div className="absolute inset-x-0 top-0 h-1 z-20 bg-gradient-to-r from-blue-500 to-violet-500" />
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover rounded-[1.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                  alt="Location"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white dark:bg-slate-900 px-6 py-3 rounded-2xl shadow-2xl border border-blue-500/20 flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                    <span className="font-black text-xs uppercase tracking-widest dark:text-white text-slate-900">Headquarters</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form Glass Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lg:col-span-7 glass p-10 md:p-12 rounded-[3rem] relative"
            >
              <div className="absolute top-10 right-10 opacity-10">
                <Send size={120} className="text-blue-500 rotate-12" />
              </div>
              
              <h2 className="text-3xl font-black dark:text-white text-slate-900 mb-10 leading-tight">
                Send us a Message. <br />
                <span className="text-blue-500 h-1 w-20 bg-blue-500 inline-block rounded-full" />
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. Elon Musk"
                      className="w-full glass bg-opacity-30 border-blue-500/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="elon@mars.com"
                      className="w-full glass bg-opacity-30 border-blue-500/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-2">Project Vision</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Describe your vision..."
                    className="w-full glass bg-opacity-30 border-blue-500/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-blue-500/50 transition-all font-medium resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="fancy-button bg-blue-600 text-white w-full py-5 text-lg flex items-center justify-center gap-3 group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Dispatch Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
