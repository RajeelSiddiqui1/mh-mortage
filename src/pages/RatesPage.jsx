import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calculator, ShieldCheck, Activity, ArrowRight, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const RatesPage = () => {
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
          <div className="inline-flex items-center space-x-2 bg-brand-red/10 dark:bg-brand-red/20 text-brand-red dark:text-brand-red px-4 py-2 rounded-full w-max text-sm font-semibold mb-6">
            <TrendingDown className="w-4 h-4" />
            <span>Updated Daily</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 flex items-center justify-center gap-4">
             Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold">Mortgage Rates</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
            Lowest Rate in Canada. Guaranteed. See our highly competitive mortgage rates below.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="glass-card p-10 md:p-14 rounded-[3rem] max-w-5xl mx-auto text-center border border-slate-200/50 dark:border-white/10 bg-white/60 dark:bg-brand-charcoal/60 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-[0%] left-[-10%] w-[20rem] h-[20rem] rounded-full bg-brand-red/10 blur-[60px] pointer-events-none" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
               {/* 5-Year Fixed */}
               <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-brand-navy dark:bg-white/5 rounded-3xl border border-white/10 shadow-lg text-center overflow-hidden flex flex-col justify-between"
               >
                  <div>
                     <p className="text-brand-gold font-bold uppercase tracking-[0.1em] mb-2 text-sm">Most Popular</p>
                     <h3 className="text-2xl font-bold text-white mb-6">5-Year Fixed Select</h3>
                     <div className="text-6xl font-black text-brand-red drop-shadow-lg mb-6">4.49%</div>
                  </div>
                  <Link to="/calculators">
                     <button className="w-full py-3 rounded-full bg-brand-red text-white font-bold hover:shadow-lg transition-all flex justify-center items-center gap-2">
                        Calculate <ArrowRight className="w-4 h-4" />
                     </button>
                  </Link>
               </motion.div>

               {/* 5-Year Variable */}
               <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-white dark:bg-brand-charcoal rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg text-center overflow-hidden flex flex-col justify-between"
               >
                  <div>
                     <p className="text-brand-red font-bold uppercase tracking-[0.1em] mb-2 text-sm">Variable</p>
                     <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">5-Year Variable</h3>
                     <div className="text-6xl font-black text-slate-900 dark:text-white drop-shadow-lg mb-6">5.35%</div>
                  </div>
                  <Link to="/calculators">
                     <button className="w-full py-3 rounded-full bg-brand-light dark:bg-white/5 text-slate-800 dark:text-white font-bold hover:shadow-lg transition-all border border-slate-200 dark:border-white/20 flex justify-center items-center gap-2">
                        Calculate <ArrowRight className="w-4 h-4" />
                     </button>
                  </Link>
               </motion.div>

               {/* 3-Year Fixed */}
               <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-white dark:bg-brand-charcoal rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg text-center overflow-hidden flex flex-col justify-between"
               >
                  <div>
                     <p className="text-slate-500 font-bold uppercase tracking-[0.1em] mb-2 text-sm">Short Term</p>
                     <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">3-Year Fixed</h3>
                     <div className="text-6xl font-black text-slate-900 dark:text-white drop-shadow-lg mb-6">4.84%</div>
                  </div>
                  <Link to="/calculators">
                     <button className="w-full py-3 rounded-full bg-brand-light dark:bg-white/5 text-slate-800 dark:text-white font-bold hover:shadow-lg transition-all border border-slate-200 dark:border-white/20 flex justify-center items-center gap-2">
                        Calculate <ArrowRight className="w-4 h-4" />
                     </button>
                  </Link>
               </motion.div>

                {/* 1-Year Fixed */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-white dark:bg-brand-charcoal rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg text-center overflow-hidden flex flex-col justify-between"
               >
                  <div>
                     <p className="text-slate-500 font-bold uppercase tracking-[0.1em] mb-2 text-sm">Short Term</p>
                     <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">1-Year Fixed</h3>
                     <div className="text-6xl font-black text-slate-900 dark:text-white drop-shadow-lg mb-6">5.69%</div>
                  </div>
                  <Link to="/calculators">
                     <button className="w-full py-3 rounded-full bg-brand-light dark:bg-white/5 text-slate-800 dark:text-white font-bold hover:shadow-lg transition-all border border-slate-200 dark:border-white/20 flex justify-center items-center gap-2">
                        Calculate <ArrowRight className="w-4 h-4" />
                     </button>
                  </Link>
               </motion.div>
                {/* Switch / Renew */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-white dark:bg-brand-charcoal rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg text-center overflow-hidden flex flex-col justify-between md:col-span-2 lg:col-span-2"
               >
                  <div>
                     <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Switch and Save</h3>
                     <p className="text-slate-600 dark:text-slate-400 font-medium max-w-md mx-auto mb-6">
                        Don't accept your bank's renewal offer blindly. We can help you secure better rates and save potentially thousands.
                     </p>
                  </div>
                  <Link to="/calculators">
                     <button className="w-full md:w-max mx-auto px-8 py-4 rounded-full bg-brand-red text-white font-black hover:shadow-lg hover:shadow-brand-red/30 transition-all flex justify-center items-center gap-2">
                        Upload Renewal Letter <ArrowRight className="w-4 h-4" />
                     </button>
                  </Link>
               </motion.div>
            </div>
         </div>
      </div>
    </motion.div>
   )
}

export default RatesPage;
