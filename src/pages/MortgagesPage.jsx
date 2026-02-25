import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Home, RefreshCw, DollarSign, Building, Plane, Wrench, 
  Coins, Briefcase, Globe, Landmark, ShieldCheck, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const mortgagesList = [
  { name: 'First-Time Home Buyers', icon: Home, desc: 'Expert help for your smooth process to get into your first home.', link: '/calculators' },
  { name: 'Renewals and Switches', icon: RefreshCw, desc: 'We can help you save more when your term is up.', link: '/calculators' },
  { name: 'Refinancing Your Home', icon: DollarSign, desc: 'Get a lower rate or consolidate debt easily.', link: '/calculators' },
  { name: 'Buying Your Next Home', icon: Home, desc: 'Buying and Selling, and Second Homes.', link: '/calculators' },
  { name: 'Purchase Plus Improvements', icon: Wrench, desc: 'Roll renovation costs into your mortgage seamlessly.', link: '/calculators' },
  { name: 'Investment Properties', icon: Building, desc: 'Grow your portfolio with standard or specialized options.', link: '/calculators' },
  { name: 'Vacation and Secondary Homes', icon: Plane, desc: 'Get a mortgage for the cottage or secondary residence.', link: '/calculators' },
  { name: 'Complex Mortgage Solutions', icon: ShieldCheck, desc: 'Alternative lending options for unique financial situations.', link: '/calculators' },
  { name: 'Mortgages for Self-Employed', icon: Briefcase, desc: 'Tailored options for business owners and freelancers.', link: '/calculators' },
  { name: 'Newcomers to Canada', icon: Globe, desc: 'Specialized programs for new permanent and non-permanent residents.', link: '/calculators' },
  { name: 'Home Equity Line of Credit (HELOC)', icon: Landmark, desc: 'Tap into your home equity revolving credit.', link: '/calculators' },
  { name: 'Reverse Mortgage', icon: Coins, desc: 'Tax-free cash for homeowners 55+ without moving.', link: '/calculators' },
  { name: 'Cash Back Mortgages', icon: DollarSign, desc: 'Get money upfront to pay for closing costs or debts.', link: '/calculators' },
];

const MortgagesPage = () => {
   const { scrollYProgress } = useScroll();
   const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

   return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-20 bg-brand-light dark:bg-brand-navy overflow-hidden relative"
    >
      {/* Dynamic Backgrounds */}
      <motion.div style={{ scale }} className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] rounded-full bg-brand-red/5 dark:bg-brand-red/10 blur-[120px] pointer-events-none z-0" />
      <motion.div style={{ scale }} className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-brand-gold/5 dark:bg-brand-gold/10 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: -30 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 flex items-center justify-center gap-4">
             Mortgage <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold">Solutions</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
            From first-time buyers to complex commercial financing, we have a specialized mortgage solution for every situation. Explore our complete A-Z list.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mortgagesList.map((item, index) => (
               <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.5, type: 'spring' }}
                  whileHover={{ y: -5, scale: 1.02 }}
               >
                  <Link to={item.link} className="block h-full cursor-pointer group">
                     <div className="glass-card p-8 rounded-3xl h-full border border-slate-200/50 dark:border-white/10 bg-white/60 dark:bg-brand-charcoal/60 backdrop-blur-xl hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                           <item.icon className="w-24 h-24 text-brand-gold transform rotate-12" />
                        </div>
                        
                        <div className="w-14 h-14 bg-brand-light dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300">
                           <item.icon className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-red dark:group-hover:text-brand-gold transition-colors">
                           {item.name}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium mb-6 relative z-10">
                           {item.desc}
                        </p>

                        <div className="flex items-center text-brand-red dark:text-brand-gold font-bold uppercase tracking-wider text-sm mt-auto relative z-10 group/btn">
                           Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                     </div>
                  </Link>
               </motion.div>
            ))}
         </div>
      </div>
    </motion.div>
   )
}

export default MortgagesPage;
