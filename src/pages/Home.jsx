import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
