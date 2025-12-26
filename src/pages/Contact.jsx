import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

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
    <div className="pt-20 min-h-screen bg-white">
      {/* Contact Header */}
      <div className="bg-blue-600 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Have a project in mind? We'd love to hear from you.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-8">
                    <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <MapPin className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Office</h3>
                            <p className="text-gray-600">
                                123 Innovation Drive, Suite 100<br />
                                Tech City, TC 90210
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                            <p className="text-gray-600">
                                hello@agency.com<br />
                                careers@agency.com
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                            <p className="text-gray-600">
                                +1 (555) 123-4567<br />
                                Mon-Fri from 9am to 6pm
                            </p>
                        </div>
                    </div>
                </div>

                {/* Map Display */}
                <div className="mt-12 w-full h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner relative">
                     <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                        alt="Map Location" 
                        className="w-full h-full object-cover opacity-80"
                     />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <span className="bg-white px-4 py-2 rounded-lg shadow-lg font-semibold text-gray-800 flex items-center">
                            <MapPin size={16} className="mr-2 text-red-500" /> We are here
                        </span>
                     </div>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
            >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors resize-none"
                            placeholder="Tell us about your project..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
                    >
                        Send Message
                        <Send size={18} className="ml-2" />
                    </button>
                </form>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
