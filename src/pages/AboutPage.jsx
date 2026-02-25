import React from 'react';
import { motion } from 'framer-motion';
import AboutUs from '../components/AboutUs';
import Team from '../components/Team';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center"
        >
          <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Our <span className="text-brand-red dark:text-brand-gold">Story</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover the dedication and expertise that drives Canada's premier mortgage brokerage.
          </p>
        </motion.div>
      </div>

      <AboutUs />
      
      {/* Adding some extra mortgage value content */}
      <section className="py-16 bg-brand-light dark:bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 glass-card rounded-2xl">
              <h3 className="text-4xl font-black text-brand-gold mb-2">$5B+</h3>
              <p className="font-semibold text-slate-700 dark:text-slate-300">Mortgages Funded</p>
            </div>
            <div className="p-6 glass-card rounded-2xl">
              <h3 className="text-4xl font-black text-brand-red mb-2">10,000+</h3>
              <p className="font-semibold text-slate-700 dark:text-slate-300">Happy Homeowners</p>
            </div>
            <div className="p-6 glass-card rounded-2xl">
              <h3 className="text-4xl font-black text-brand-gold mb-2">60+</h3>
              <p className="font-semibold text-slate-700 dark:text-slate-300">Lending Partners</p>
            </div>
            <div className="p-6 glass-card rounded-2xl">
              <h3 className="text-4xl font-black text-brand-red mb-2">15+</h3>
              <p className="font-semibold text-slate-700 dark:text-slate-300">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      <Team />
    </motion.div>
  );
};

export default AboutPage;
