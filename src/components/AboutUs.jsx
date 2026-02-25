import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const points = [
    'Unbiased, Expert Advice. Completely Free.',
    'Volume Discounts Translate to Lower Rates for You',
    'Highly Trained & Salaried Brokers (No Hidden Fees)',
    'Seamless Online, In-Store & Phone Support'
  ];

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="about" className="py-24 bg-white dark:bg-brand-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          >
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-sm font-bold tracking-widest text-brand-red dark:text-brand-gold uppercase mb-3"
            >
              About MHE Mortgage
            </motion.h2>
            <motion.h3 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Making Mortgages <br/> Easy Breezy since 2006.
            </motion.h3>
            
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
            >
              We've been happily giving our clients better rates, the easy way, for many years. Big banks aren't big on flexibility, but we are. Our team has access to numerous lenders to simplify your life and beat the online-only startups that can't match our savings service.
            </motion.p>

            <ul className="space-y-4 mb-10">
              {points.map((point, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  className="flex items-center gap-3 text-slate-800 dark:text-slate-300 font-medium text-lg"
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <CheckCircle className="text-brand-gold w-6 h-6 flex-shrink-0" />
                  </motion.div>
                  {point}
                </motion.li>
              ))}
            </ul>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-brand-charcoal font-bold shadow-lg transition-all"
            >
              Get a Call Back
            </motion.button>
          </motion.div>

          {/* Right Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            {/* The Image */}
            <motion.div 
               whileHover={{ scale: 1.02 }}
               transition={{ duration: 0.3 }}
               className="relative rounded-3xl overflow-hidden glass-card p-2 md:p-4 rotate-3 hover:rotate-0 drop-shadow-2xl transition-all"
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Canadian Real Estate"
                className="rounded-2xl object-cover w-full h-[500px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Floating Overlay Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-brand-navy p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 max-w-xs"
              >
                <p className="text-3xl font-extrabold text-brand-gold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-red">19+</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-300 leading-tight">
                  Years of Unbeatable Mortgage Savings in Canada
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
