import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Design in 2025',
    excerpt: 'Explore the latest trends shaping the digital landscape, from AI-driven interfaces to immersive 3D experiences.',
    date: 'Oct 15, 2025',
    author: 'Thomas Anderson',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Mastering React Performance',
    excerpt: 'A deep dive into optimizing React applications for speed and efficiency. Learn about memoization and lazy loading.',
    date: 'Oct 10, 2025',
    author: 'Sarah Connors',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Why Brand Identity Matters',
    excerpt: 'Your brand is more than just a logo. Discover how to build a cohesive identity that resonates with your audience.',
    date: 'Oct 05, 2025',
    author: 'David Smith',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
  },
  {
      id: 4,
      title: 'SEO Strategies for Small Business',
      excerpt: 'Practical tips to improve your search engine ranking and drive organic traffic to your local business website.',
      date: 'Sept 28, 2025',
      author: 'Jessica Wong',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=800'
  }
];

const Blog = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 pb-20">
      <div className="bg-white py-16 mb-12 shadow-sm">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Insights</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Thoughts, stories, and ideas from the team.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden relative">
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wide z-10">
                    {post.category}
                </span>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    {post.author}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-auto">
                  Read Article
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
