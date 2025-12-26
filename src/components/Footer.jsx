import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link to="/" className="text-2xl font-bold tracking-tight mb-4 block">
                            AGENCY<span className="text-blue-500">.</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            We are a full-service creative agency dedicated to building digital products that matter. Innovation, design, and strategy are at our core.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition-colors">News & Blog</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Brand Strategy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-3 mt-0.5 text-blue-500" />
                                <span>123 Innovation Drive, Suite 100<br />Tech City, TC 90210</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-3 text-blue-500" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-3 text-blue-500" />
                                <span>hello@agency.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Agency. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
