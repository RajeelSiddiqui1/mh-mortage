import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calculator, ArrowRight, ShieldCheck, DollarSign, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Orbs */}
      <motion.div style={{ y: yBg }} className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-brand-gold/10 dark:bg-brand-gold/5 blur-[100px] pointer-events-none" />
      <motion.div style={{ y: yBg }} className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-brand-red/10 dark:bg-brand-red/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: yContent, opacity: opacityText }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-brand-red/10 dark:bg-brand-red/20 text-brand-red dark:text-brand-red px-4 py-2 rounded-full w-max text-sm font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Canada's Leading Mortgage Broker</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              The Best Mortgage <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold">
                Rates in Canada.
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              Who wants to save thousands? Or have a more flexible mortgage solution? Get your BEST rate and better mortgage fit thanks to our exceptional 5-star service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-brand-red text-white font-bold shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 transition-all flex items-center justify-center gap-2 group"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <Link to="/calculators">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 w-full sm:w-auto rounded-full bg-brand-gray/20 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
                >
                  View Mortgage Tools
                </motion.button>
              </Link>
            </div>
            
            <div className="flex items-center gap-6 pt-6 text-sm text-slate-500 dark:text-slate-400 font-medium pb-8 lg:pb-0">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-gold" />
                <span>Over $33 billion funded</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-brand-gold" />
                <span>16,000+ Five Star Reviews</span>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ y: yContent }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex justify-center relative perspective-1000"
          >
            {/* The main floating 3D Card */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="glass-card rounded-3xl p-8 w-full max-w-md relative z-10 border-t-brand-gold/50 border-t-2 bg-gradient-to-br from-white to-slate-50 dark:from-brand-charcoal dark:to-brand-navy"
              style={{ transformStyle: 'preserve-3d', rotateX: '5deg', rotateY: '-10deg' }}
            >
              <div className="flex flex-col items-center justify-center mb-8 text-center">
                 <div className="bg-brand-red/10 p-4 rounded-full mb-4">
                    <Activity className="text-brand-red w-10 h-10" />
                 </div>
                 <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                    Rates From <span className="text-brand-red dark:text-brand-gold">4.49%</span>
                 </h3>
                 <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2">5-Year Fixed Select</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5">
                   <span className="font-bold text-slate-700 dark:text-slate-300">5-Year Variable</span>
                   <span className="font-extrabold text-brand-red dark:text-brand-gold text-xl">5.35%</span>
                </div>
                 <div className="flex justify-between items-center p-4 bg-white dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5">
                   <span className="font-bold text-slate-700 dark:text-slate-300">3-Year Fixed</span>
                   <span className="font-extrabold text-brand-red dark:text-brand-gold text-xl">4.84%</span>
                </div>
              </div>

               <Link to="/calculators" className="block mt-8">
                 <motion.button 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="w-full py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-brand-navy font-bold shadow-md hover:shadow-lg transition-all flex justify-center items-center gap-2"
                 >
                   <Calculator className="w-5 h-5"/> Test Our Calculators
                 </motion.button>
               </Link>

            </motion.div>

            {/* Decorative Card Shadow/Backplate */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-6 -bottom-6 w-full max-w-md h-full bg-gradient-to-br from-brand-gold/10 to-brand-red/10 rounded-3xl border border-white/20 dark:border-white/5 backdrop-blur-sm z-0"
              style={{ rotateX: '5deg', rotateY: '-10deg' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
