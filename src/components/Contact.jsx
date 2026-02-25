import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
const Contact = () => {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section id="contact" className="py-32 bg-white dark:bg-brand-charcoal relative overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute top-[20%] left-[-5%] w-[40rem] h-[40rem] rounded-full bg-brand-gold/10 dark:bg-brand-gold/5 blur-[120px] pointer-events-none" />
      <motion.div style={{ y: yBg }} className="absolute bottom-[-10%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-brand-red/5 dark:bg-brand-red/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Contact Details */}
          <motion.div
             initial={{ opacity: 0, x: -50, scale: 0.95 }}
             whileInView={{ opacity: 1, x: 0, scale: 1 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
             className="pt-8"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm font-bold tracking-[0.2em] text-brand-red dark:text-brand-gold uppercase mb-4 text-left"
            >
              Contact Us
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight"
            >
              Start Your Journey <br/> Today.
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-14 max-w-lg font-medium"
            >
              Reach out to our dedicated VIP team for a personalized, confidential consultation regarding your Canadian mortgage needs.
            </motion.p>

            <div className="space-y-10">
              <motion.div 
                 whileHover={{ x: 10 }}
                 className="flex flex-col sm:flex-row items-start sm:items-center gap-6 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white dark:bg-brand-navy shadow-lg shadow-brand-gold/10 border border-slate-100 dark:border-white/10 flex items-center justify-center rounded-2xl text-brand-gold transform group-hover:rotate-12 transition-transform duration-300">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-gold transition-colors">Call Us Direct</h4>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">1-800-MHE-VIP1 (Toll-Free)</p>
                </div>
              </motion.div>

              <motion.div 
                 whileHover={{ x: 10 }}
                 className="flex flex-col sm:flex-row items-start sm:items-center gap-6 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white dark:bg-brand-navy shadow-lg shadow-brand-red/10 border border-slate-100 dark:border-white/10 flex items-center justify-center rounded-2xl text-brand-red transform group-hover:rotate-12 transition-transform duration-300">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-red transition-colors">Email Our Partners</h4>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">vip@mhemortgage.ca</p>
                </div>
              </motion.div>

              <motion.div 
                 whileHover={{ x: 10 }}
                 className="flex flex-col sm:flex-row items-start sm:items-center gap-6 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white dark:bg-brand-navy shadow-lg shadow-brand-gold/10 border border-slate-100 dark:border-white/10 flex items-center justify-center rounded-2xl text-brand-gold transform group-hover:rotate-12 transition-transform duration-300">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-gold transition-colors">Corporate Office</h4>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">100 King St W, Toronto, ON M5X 1C9</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9, y: 50 }}
             whileInView={{ opacity: 1, scale: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
             className="relative"
          >
             {/* Decorative blob under form */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-brand-gold/20 rounded-[3rem] blur-2xl transform scale-100 z-0" />
            
            <div className="glass-card bg-brand-light/90 dark:bg-brand-navy/90 backdrop-blur-2xl rounded-[3rem] p-10 md:p-14 relative z-10 border border-slate-200/50 dark:border-white/10 shadow-2xl">
              <h3 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-10 border-b border-slate-300 dark:border-white/10 pb-6 w-max">
                Get Your Free Quote
              </h3>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
                    <label className="text-sm font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300">First Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane" 
                      className="w-full px-5 py-4 bg-white dark:bg-brand-charcoal border border-slate-200 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none text-slate-800 dark:text-white font-bold shadow-inner transition-all"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
                    <label className="text-sm font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe" 
                      className="w-full px-5 py-4 bg-white dark:bg-brand-charcoal border border-slate-200 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none text-slate-800 dark:text-white font-bold shadow-inner transition-all"
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
                  <label className="text-sm font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="vip@example.com" 
                    className="w-full px-5 py-4 bg-white dark:bg-brand-charcoal border border-slate-200 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none text-slate-800 dark:text-white font-bold shadow-inner transition-all"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
                  <label className="text-sm font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300">Inquiry Type</label>
                  <select className="w-full px-5 py-4 bg-white dark:bg-brand-charcoal border border-slate-200 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none text-slate-800 dark:text-white font-bold shadow-inner transition-all appearance-none cursor-pointer">
                    <option>First Time Buyer</option>
                    <option>Refinance</option>
                    <option>Investment Property</option>
                    <option>Other</option>
                  </select>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
                  <label className="text-sm font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300">Message (Optional)</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we assist you today?" 
                    className="w-full px-5 py-4 bg-white dark:bg-brand-charcoal border border-slate-200 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none text-slate-800 dark:text-white font-bold shadow-inner resize-none transition-all"
                  ></textarea>
                </motion.div>

                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(232,17,45,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-6 mt-6 rounded-2xl bg-brand-red text-white font-black text-xl shadow-xl shadow-brand-red/30 transition-all flex items-center justify-center gap-3 overflow-hidden relative group"
                >
                  <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 tracking-widest uppercase">Request Consultation</span>
                  <Send className="w-6 h-6 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
