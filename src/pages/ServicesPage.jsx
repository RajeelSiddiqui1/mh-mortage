import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services';
import { Percent, Shield, TrendingUp, Key } from 'lucide-react';

const ServicesPage = () => {
  const mortgageProducts = [
    {
      title: 'Fixed Rate Mortgages',
      description: 'Lock in your interest rate for the term of your mortgage. Ideal for budget-conscious homeowners wanting predictable monthly payments.',
      icon: <Shield className="w-8 h-8 text-brand-gold" />
    },
    {
      title: 'Variable Rate Mortgages',
      description: 'Rates fluctuate with the Bank of Canada. Historically proven to be cheaper over the long run, with options to convert to fixed.',
      icon: <TrendingUp className="w-8 h-8 text-brand-red" />
    },
    {
      title: 'HELOC (Home Equity Line)',
      description: 'Access the equity in your home whenever you need it. Only pay interest on what you use, an excellent alternative to high-interest loans.',
      icon: <Percent className="w-8 h-8 text-brand-gold" />
    },
    {
      title: 'Pre-Approvals',
      description: 'Secure your rate for up to 120 days while you house hunt. Knowing your budget gives you a VIP advantage in multiple-offer situations.',
      icon: <Key className="w-8 h-8 text-brand-red" />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen pb-20 bg-brand-light dark:bg-brand-navy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center"
        >
          <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Our <span className="text-brand-red dark:text-brand-gold">Solutions</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive financial products customized to fit the unique blueprint of your life.
          </p>
        </motion.div>
      </div>

      <Services />

      {/* Expanded Mortgage Products Details */}
      <section className="py-20 bg-white dark:bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Canadian Mortgage Options</h2>
             <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
               We offer a full suite of traditional and alternative lending solutions.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {mortgageProducts.map((prod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-6 glass-card p-8 rounded-3xl group hover:shadow-2xl transition-all"
              >
                <div className="p-4 bg-slate-50 dark:bg-brand-navy border border-slate-100 dark:border-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                  {prod.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{prod.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{prod.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </motion.div>
  );
};

export default ServicesPage;
