import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Home, RefreshCw, Briefcase, ArrowRight, ShieldCheck, DollarSign, PenTool } from 'lucide-react';

const services = [
  {
    title: 'First-Time Home Buyers',
    description: 'Specialized support perfectly stepping you into the market. We handle the paperwork, find lower-than-bank rates, and hold your hand the entire way.',
    icon: <Home className="w-8 h-8 text-brand-gold" />
  },
  {
    title: 'Mortgage Renewals',
    description: 'Stop your bank from bumping up your rates! We compare 60+ top Canadian lenders to ensure your next term has the absolute lowest rate.',
    icon: <RefreshCw className="w-8 h-8 text-brand-red" />
  },
  {
    title: 'Refinancing',
    description: 'Access 80% of your home equity to consolidate high-interest debt, invest, or remodel. Cash-happy solutions tailored for you.',
    icon: <DollarSign className="w-8 h-8 text-brand-gold" />
  },
  {
    title: 'Rate Relief (Short Term)',
    description: 'Feeling the squeeze of volatile rates? Lock into our 6-month budget room product to ease closing costs and home expenses.',
    icon: <ShieldCheck className="w-8 h-8 text-brand-red" />
  },
  {
    title: 'Complex & Private Mortgages',
    description: 'Self-employed? Bad credit? Don\'t fit the traditional mold? Our brokers know exactly where to take your application to get an approval.',
    icon: <Briefcase className="w-8 h-8 text-brand-gold" />
  },
  {
    title: 'Construction & Renovation',
    description: 'Structured progress-draw mortgages to fund your dream home build from the ground up, all with VIP expert advice completely free.',
    icon: <PenTool className="w-8 h-8 text-brand-red" />
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  visible: (i) => ({
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', delay: i * 0.1, duration: 0.8, bounce: 0.4 }
  })
}

const Services = () => {
  return (
    <section id="services" className="py-32 bg-brand-light dark:bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(232,17,45,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6"
          >
            The Best Mortgage Services in Canada.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
             Don't fit the mortgage mold? We can help. Unbiased, expert advice completely free. Online, in-store, & over the phone.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5, 
                rotateX: -5,
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="glass-card flex flex-col items-start rounded-[2rem] p-10 group relative overflow-visible transition-all duration-300"
              style={{ transformPerspective: 1200 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-brand-red/10 border-2 border-transparent group-hover:border-brand-gold/50 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />
              
              <motion.div 
                 whileHover={{ scale: 1.2, rotate: 10 }}
                 className="w-20 h-20 rounded-2xl bg-white dark:bg-brand-charcoal border border-slate-100 dark:border-white/10 flex items-center justify-center mb-8 shadow-lg z-10"
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-red group-hover:to-brand-gold transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium relative z-10 flex-grow">
                {service.description}
              </p>

              <motion.button 
                 whileHover={{ x: 10 }}
                 className="mt-auto flex items-center gap-3 text-brand-red dark:text-brand-gold font-bold relative z-10"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
             <motion.button 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(232,17,45,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-brand-navy font-black shadow-2xl focus:outline-none text-lg tracking-wide"
             >
               View All Exclusive VIP Services
             </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;
