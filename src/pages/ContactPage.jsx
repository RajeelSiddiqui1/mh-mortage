import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 bg-white dark:bg-brand-charcoal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Get in <span className="text-brand-red dark:text-brand-gold">Touch</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Book an exclusive VIP consultation and take the first step toward securing your dream home.
          </p>
        </motion.div>
      </div>
      
      {/* We reuse the contact component but remove its default padding-top so it meshes well */}
      <div className="-mt-10 relative">
        <Contact />
      </div>
      
    </motion.div>
  );
};

export default ContactPage;
