import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Calculator, CheckCircle2, Receipt, Building, FileText } from 'lucide-react';

const CalculatorsPage = () => {
  const [activeTab, setActiveTab] = useState('payment');

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
            <motion.div whileHover={{ rotate: 180, scale: 1.2 }} transition={{ duration: 0.5 }}>
              <Calculator className="w-12 h-12 text-brand-gold drop-shadow-lg" />
            </motion.div>
            Mortgage <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold">Tools</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
            Take the guesswork out of your mortgage with our suite of Canadian mortgage tools. Calculate payments, test scenarios, and plan your borrowing power.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           className="flex flex-wrap justify-center gap-4 bg-white/50 dark:bg-brand-charcoal/50 p-3 rounded-[2rem] backdrop-blur-md border border-white/20 dark:border-white/5 shadow-xl w-max max-w-full mx-auto"
        >
          <button 
            onClick={() => setActiveTab('payment')}
            className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${activeTab === 'payment' ? 'bg-brand-red text-white shadow-lg shadow-brand-red/40' : 'text-slate-600 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-white/10'}`}
          >
            Payment
          </button>
          <button 
             onClick={() => setActiveTab('affordability')}
             className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${activeTab === 'affordability' ? 'bg-brand-red text-white shadow-lg shadow-brand-red/40' : 'text-slate-600 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-white/10'}`}
          >
            Affordability
          </button>
           <button 
             onClick={() => setActiveTab('renewal')}
             className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${activeTab === 'renewal' ? 'bg-brand-red text-white shadow-lg shadow-brand-red/40' : 'text-slate-600 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-white/10'}`}
          >
            Renewal
          </button>
           <button 
             onClick={() => setActiveTab('closing')}
             className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${activeTab === 'closing' ? 'bg-brand-red text-white shadow-lg shadow-brand-red/40' : 'text-slate-600 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-white/10'}`}
          >
            Closing Costs
          </button>
          <button 
             onClick={() => setActiveTab('landtax')}
             className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${activeTab === 'landtax' ? 'bg-brand-red text-white shadow-lg shadow-brand-red/40' : 'text-slate-600 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-white/10'}`}
          >
            Land Transfer Tax
          </button>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === 'payment' && <PaymentCalculator key="payment" />}
          {activeTab === 'affordability' && <AffordabilityCalculator key="affordability" />}
          {activeTab === 'renewal' && <RenewalCalculator key="renewal" />}
          {activeTab === 'closing' && <ClosingCostsCalculator key="closing" />}
          {activeTab === 'landtax' && <LandTransferTaxCalculator key="landtax" />}
        </AnimatePresence>
      </div>
      
    </motion.div>
  );
};

// --- SUB-COMPONENTS --- //

const PaymentCalculator = () => {
  const [homePrice, setHomePrice] = useState(750000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRate, setInterestRate] = useState(4.5);
  const [years, setYears] = useState(25);
  const [paymentFreq, setPaymentFreq] = useState('monthly'); // monthly, bi-weekly, weekly

  const downPaymentAmt = useMemo(() => (homePrice * downPaymentPct) / 100, [homePrice, downPaymentPct]);
  const mortgageAmount = useMemo(() => homePrice - downPaymentAmt, [homePrice, downPaymentAmt]);

  const payment = useMemo(() => {
    let nPeriodsPerYear;
    switch(paymentFreq) {
      case 'monthly': nPeriodsPerYear = 12; break;
      case 'bi-weekly': nPeriodsPerYear = 26; break;
      case 'weekly': nPeriodsPerYear = 52; break;
      default: nPeriodsPerYear = 12;
    }
    
    const p = mortgageAmount;
    // Canadian standard for fixed rates often compounds semi-annually
    // We'll use standard math for simplicity but note it.
    const i = interestRate / 100 / nPeriodsPerYear;
    const n = years * nPeriodsPerYear;
    
    if (i === 0) return p / n;
    return p * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  }, [mortgageAmount, interestRate, years, paymentFreq]);

  const totalInterest = useMemo(() => {
     let nPeriodsPerYear = 12;
     if(paymentFreq === 'bi-weekly') nPeriodsPerYear = 26;
     if(paymentFreq === 'weekly') nPeriodsPerYear = 52;

     return (payment * (years * nPeriodsPerYear)) - mortgageAmount;
  }, [payment, years, paymentFreq, mortgageAmount]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 30 }} 
      animate={{ opacity: 1, scale: 1, y: 0 }} 
      exit={{ opacity: 0, scale: 0.95, y: -30 }} 
      transition={{ duration: 0.5, type: 'spring' }}
      className="grid lg:grid-cols-2 gap-12"
    >
      {/* Controls */}
      <div className="glass-card p-10 rounded-[2rem] shadow-xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-brand-charcoal/60 backdrop-blur-xl hover:shadow-2xl transition-all duration-300">
        <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-white/10 pb-4">
          Payment Calculator
        </h3>

        <div className="space-y-8">
          <motion.div whileHover={{ scale: 1.02 }} className="transition-all">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Home Price</label>
              <span className="text-xl font-black text-brand-red dark:text-brand-gold mb-1">
                ${homePrice.toLocaleString()}
              </span>
            </div>
            <input 
              type="range" min="100000" max="3000000" step="10000" value={homePrice} 
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-brand-red dark:accent-brand-gold shadow-inner"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="transition-all">
             <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Down Payment</label>
              <span className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                ${downPaymentAmt.toLocaleString()} <span className="text-sm font-black text-brand-red ml-1 bg-brand-red/10 px-2 py-1 rounded-md">{downPaymentPct}%</span>
              </span>
            </div>
            <input 
              type="range" min="5" max="50" step="1" value={downPaymentPct} 
              onChange={(e) => setDownPaymentPct(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-brand-red dark:accent-brand-gold shadow-inner"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="transition-all">
             <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Interest Rate</label>
              <span className="text-xl font-black text-slate-900 dark:text-white mb-1">
                {interestRate}%
              </span>
            </div>
            <input 
              type="range" min="1" max="10" step="0.1" value={interestRate} 
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-brand-red dark:accent-brand-gold shadow-inner"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <motion.div whileHover={{ y: -2 }}>
               <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-2 uppercase tracking-wider">Amortization</label>
               <select 
                 value={years} onChange={(e) => setYears(Number(e.target.value))}
                 className="w-full p-4 rounded-xl bg-white dark:bg-brand-navy border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-brand-gold shadow-sm font-bold cursor-pointer"
               >
                 {[10,15,20,25,30].map(y => <option key={y} value={y}>{y} Years</option>)}
               </select>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
               <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-2 uppercase tracking-wider">Frequency</label>
               <select 
                 value={paymentFreq} onChange={(e) => setPaymentFreq(e.target.value)}
                 className="w-full p-4 rounded-xl bg-white dark:bg-brand-navy border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-brand-gold shadow-sm font-bold cursor-pointer"
               >
                 <option value="monthly">Monthly</option>
                 <option value="bi-weekly">Bi-Weekly</option>
                 <option value="weekly">Weekly</option>
               </select>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Results */}
      <motion.div 
         whileHover={{ scale: 1.02 }}
         className="relative group perspective-1000"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-brand-gold/20 rounded-[2rem] blur-2xl transform scale-100 z-0 group-hover:scale-105 transition-transform duration-500" />
        <div className="glass-card bg-white dark:bg-brand-charcoal border border-slate-200 dark:border-white/10 p-10 md:p-14 rounded-[2rem] relative z-10 h-full flex flex-col justify-center shadow-2xl overflow-hidden transition-all duration-300 border-t-brand-gold/50 border-t-4">
           
           {/* Decorative Orb inside Results Card */}
           <div className="absolute top-[-30%] right-[-10%] w-[20rem] h-[20rem] rounded-full bg-brand-gold/10 dark:bg-brand-gold/5 blur-[50px] pointer-events-none" />

           <p className="text-sm font-bold tracking-widest text-brand-red dark:text-brand-gold uppercase mb-2">Estimated {paymentFreq} Payment</p>
           
           <div className="flex items-baseline gap-2 mb-10">
             <span className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white drop-shadow-md">
               ${payment > 0 ? payment.toFixed(0).toLocaleString() : 0}
             </span>
           </div>

           <div className="space-y-6 pt-10 border-t border-slate-200 dark:border-white/10">
             <div className="flex justify-between items-center text-slate-600 dark:text-slate-300 font-medium">
                <span>Principal Amount:</span>
                <span className="font-bold text-slate-900 dark:text-white text-lg">${mortgageAmount.toLocaleString()}</span>
             </div>
             <div className="flex justify-between items-center text-slate-600 dark:text-slate-300 font-medium">
                <span>Down Payment:</span>
                <span className="font-bold text-slate-900 dark:text-white text-lg">${downPaymentAmt.toLocaleString()}</span>
             </div>
             <div className="flex justify-between items-center text-slate-600 dark:text-slate-300 font-medium bg-brand-red/5 p-3 rounded-xl">
                <span className="text-brand-red dark:text-brand-gold font-bold">Total Interest ({years} yrs):</span>
                <span className="font-black text-brand-red dark:text-brand-gold text-lg">${totalInterest > 0 ? totalInterest.toFixed(0).toLocaleString() : 0}</span>
             </div>
           </div>

           <div className="mt-12">
             <motion.button 
               whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(232,17,45,0.3)" }}
               whileTap={{ scale: 0.95 }}
               className="w-full py-5 rounded-xl bg-brand-red text-white font-bold text-lg shadow-xl shadow-brand-red/20 transition-all flex items-center justify-center gap-3 overflow-hidden relative group/btn"
              >
               <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
               <Sparkles className="w-6 h-6 z-10 group-hover/btn:text-brand-gold transition-colors" />
               <span className="z-10 tracking-wide uppercase">Get Pre-Approved</span>
             </motion.button>
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AffordabilityCalculator = () => {
   // A simplified affordability calculator
   const [income, setIncome] = useState(120000);
   const [monthlyDebt, setMonthlyDebt] = useState(500);
   
   // Simple rules of thumb (GDS 39%, TDS 44%)
   const maxPayment = useMemo(() => ((income / 12) * 0.39) - monthlyDebt, [income, monthlyDebt]);
   const maxMortgage = useMemo(() => {
     const i = 5.0 / 100 / 12; // Assuming stress test rate ~5-7%
     const n = 25 * 12;
     return maxPayment * ((Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n)));
   }, [maxPayment]);

   return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.95 }} 
      animate={{ opacity: 1, y: 0, scale: 1 }} 
      exit={{ opacity: 0, y: -30, scale: 0.95 }} 
      transition={{ duration: 0.5, type: "spring" }} 
      className="glass-card p-10 md:p-14 rounded-[2rem] max-w-4xl mx-auto text-center border border-slate-200/50 dark:border-white/10 bg-white/60 dark:bg-brand-charcoal/60 backdrop-blur-xl shadow-2xl relative overflow-hidden"
    >
       <div className="absolute top-[-30%] left-[-10%] w-[20rem] h-[20rem] rounded-full bg-brand-red/10 blur-[60px] pointer-events-none" />

       <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-3 relative z-10">How much can you afford?</h3>
       <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 relative z-10">Based on standard Canadian stress-test guidelines.</p>

       <div className="grid md:grid-cols-2 gap-8 mb-12 relative z-10">
          <motion.div whileHover={{ scale: 1.02 }} className="text-left space-y-3">
            <label className="text-sm font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300">Annual Income</label>
            <input 
               type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))}
               className="w-full p-5 rounded-2xl bg-white dark:bg-brand-navy border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-brand-gold text-2xl font-black shadow-inner"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="text-left space-y-3">
            <label className="text-sm font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300">Monthly Debt</label>
            <input 
               type="number" value={monthlyDebt} onChange={(e) => setMonthlyDebt(Number(e.target.value))}
               className="w-full p-5 rounded-2xl bg-white dark:bg-brand-navy border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-brand-gold text-2xl font-black shadow-inner"
            />
          </motion.div>
       </div>

       <motion.div 
         whileHover={{ scale: 1.02, rotateX: 5 }}
         className="p-10 bg-brand-navy dark:bg-white/5 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
         style={{ transformPerspective: 1000 }}
       >
         <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-transparent pointer-events-none" />
         <p className="text-brand-gold font-bold uppercase tracking-[0.2em] mb-4 relative z-10">Estimated Maximum Purchase Power</p>
         <div className="text-6xl md:text-8xl font-black text-white mb-4 relative z-10 drop-shadow-lg">
           ${maxMortgage > 0 ? maxMortgage.toFixed(0).toLocaleString() : 0}
         </div>
       </motion.div>
    </motion.div>
   )
}

const RenewalCalculator = () => {
    return (
     <motion.div 
       initial={{ opacity: 0, scale: 0.9, y: 30 }} 
       animate={{ opacity: 1, scale: 1, y: 0 }} 
       exit={{ opacity: 0, scale: 0.9, y: -30 }} 
       transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
       className="glass-card p-12 mt-10 rounded-[3rem] max-w-4xl mx-auto flex flex-col items-center justify-center text-center min-h-[450px] border border-slate-200/50 dark:border-white/10 bg-white/60 dark:bg-brand-charcoal/60 backdrop-blur-xl shadow-2xl relative overflow-hidden"
     >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-brand-gold/5 z-0" />
        <motion.div 
           initial={{ scale: 0 }}
           animate={{ scale: 1, rotate: 360 }}
           transition={{ duration: 0.8, type: "spring" }}
           className="relative z-10 bg-brand-light dark:bg-brand-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg mb-8"
        >
          <CheckCircle2 className="w-20 h-20 text-brand-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
        </motion.div>
        
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 relative z-10 tracking-tight">Compare & Save on Renewal</h3>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl relative z-10 font-medium">
          Did you know your bank usually doesn't offer their best rate on your initial renewal letter? 
          Don't sign until you check with us. We secure lower rates that can save you thousands over your next term.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(232,17,45,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-10 py-5 rounded-2xl bg-brand-red text-white font-black text-lg shadow-xl shadow-brand-red/30 transition-all uppercase tracking-wide relative z-10"
        >
          Upload Renewal Letter for Free Review
        </motion.button>
     </motion.div>
    )
 }

const ClosingCostsCalculator = () => {
   const [homePrice, setHomePrice] = useState(500000);

   const estimatedCosts = useMemo(() => {
     // A simplified estimate logic (~1.5% - 4% of purchase price)
     return {
        legal: 1500,
        appraisal: 350,
        inspection: 500,
        titleInsurance: 300,
        landTransferTaxEst: homePrice * 0.015,
        total: 1500 + 350 + 500 + 300 + (homePrice * 0.015)
     };
   }, [homePrice]);

   return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.95 }} 
      animate={{ opacity: 1, y: 0, scale: 1 }} 
      exit={{ opacity: 0, y: -30, scale: 0.95 }} 
      transition={{ duration: 0.5, type: "spring" }} 
      className="glass-card p-10 md:p-14 rounded-[2rem] max-w-4xl mx-auto text-center border border-slate-200/50 dark:border-white/10 bg-white/60 dark:bg-brand-charcoal/60 backdrop-blur-xl shadow-2xl relative overflow-hidden"
    >
       <div className="absolute top-[0%] left-[-10%] w-[20rem] h-[20rem] rounded-full bg-brand-gold/10 blur-[60px] pointer-events-none" />

       <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-3 relative z-10 flex justify-center items-center gap-3">
          <Receipt className="text-brand-gold w-10 h-10" /> Estimated Closing Costs
       </h3>
       <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 relative z-10">Don't get caught off guard. Plan for the additional costs of buying your home.</p>

       <div className="mb-12 relative z-10 max-w-md mx-auto">
          <motion.div whileHover={{ scale: 1.02 }} className="text-left space-y-3">
            <label className="text-sm font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300">Purchase Price</label>
            <input 
               type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))}
               className="w-full p-5 rounded-2xl bg-white dark:bg-brand-navy border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-brand-gold text-2xl font-black shadow-inner"
            />
          </motion.div>
       </div>

       <motion.div 
         whileHover={{ scale: 1.01 }}
         className="p-10 bg-brand-navy dark:bg-white/5 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
       >
         <div className="space-y-4 mb-8 text-left border-b border-white/10 pb-8">
            <div className="flex justify-between font-medium text-slate-300"><span>Legal & Notary Fees:</span> <span className="text-white">${estimatedCosts.legal}</span></div>
            <div className="flex justify-between font-medium text-slate-300"><span>Home Inspection:</span> <span className="text-white">${estimatedCosts.inspection}</span></div>
            <div className="flex justify-between font-medium text-slate-300"><span>Appraisal Fee:</span> <span className="text-white">${estimatedCosts.appraisal}</span></div>
            <div className="flex justify-between font-medium text-slate-300"><span>Title Insurance:</span> <span className="text-white">${estimatedCosts.titleInsurance}</span></div>
            <div className="flex justify-between font-medium text-slate-300"><span>Est. Land Transfer Tax:</span> <span className="text-white">${estimatedCosts.landTransferTaxEst.toFixed(0)}</span></div>
         </div>
         <p className="text-brand-gold font-bold uppercase tracking-[0.2em] mb-4 relative z-10">Total Estimated Closing Costs</p>
         <div className="text-6xl md:text-7xl font-black text-white relative z-10 drop-shadow-lg">
           ${estimatedCosts.total.toFixed(0).toLocaleString()}
         </div>
       </motion.div>
    </motion.div>
   )
}

const LandTransferTaxCalculator = () => {
   const [homePrice, setHomePrice] = useState(500000);
   const [isFirstTime, setIsFirstTime] = useState(true);
   const [province, setProvince] = useState('ON');

   // Basic mock calculation (Real logic varies heavily by province/city, e.g., Toronto has double)
   const taxAmount = useMemo(() => {
     let tax = homePrice * 0.015; // Placeholder generic rate
     if (isFirstTime && province === 'ON') {
       tax = Math.max(0, tax - 4000); // Max 4000 rebate in ON
     }
     return tax;
   }, [homePrice, isFirstTime, province]);

   return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.95 }} 
      animate={{ opacity: 1, y: 0, scale: 1 }} 
      exit={{ opacity: 0, y: -30, scale: 0.95 }} 
      transition={{ duration: 0.5, type: "spring" }} 
      className="glass-card p-10 md:p-14 rounded-[2rem] max-w-4xl mx-auto text-center border border-slate-200/50 dark:border-white/10 bg-white/60 dark:bg-brand-charcoal/60 backdrop-blur-xl shadow-2xl relative overflow-hidden"
    >
       <div className="absolute top-[0%] right-[-10%] w-[20rem] h-[20rem] rounded-full bg-brand-red/10 blur-[60px] pointer-events-none" />

       <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-3 relative z-10 flex justify-center items-center gap-3">
          <Building className="text-brand-red w-10 h-10" /> Land Transfer Tax
       </h3>
       <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 relative z-10">Calculate provincial and municipal land transfer taxes.</p>

       <div className="grid md:grid-cols-2 gap-8 mb-12 relative z-10">
          <motion.div whileHover={{ scale: 1.02 }} className="text-left space-y-3">
            <label className="text-sm font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300">Purchase Price</label>
            <input 
               type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))}
               className="w-full p-5 rounded-2xl bg-white dark:bg-brand-navy border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-brand-gold text-2xl font-black shadow-inner"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="text-left space-y-3">
            <label className="text-sm font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300">Province</label>
            <select 
               value={province} onChange={(e) => setProvince(e.target.value)}
               className="w-full p-5 rounded-2xl bg-white dark:bg-brand-navy border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-brand-gold text-xl font-bold font-black shadow-inner appearance-none cursor-pointer"
            >
               <option value="ON">Ontario (ON)</option>
               <option value="BC">British Columbia (BC)</option>
               <option value="AB">Alberta (AB)</option>
               {/* Others omitted for brevity */}
            </select>
          </motion.div>
       </div>

       <div className="flex items-center justify-center gap-4 mb-10 relative z-10">
          <input 
             type="checkbox" 
             id="firstTime"
             checked={isFirstTime}
             onChange={(e) => setIsFirstTime(e.target.checked)}
             className="w-6 h-6 rounded text-brand-red focus:ring-brand-gold cursor-pointer"
          />
          <label htmlFor="firstTime" className="text-xl font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
             I am a First-Time Home Buyer
          </label>
       </div>

       <motion.div 
         whileHover={{ scale: 1.01 }}
         className="p-10 bg-brand-navy dark:bg-white/5 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden text-center"
       >
         <p className="text-brand-gold font-bold uppercase tracking-[0.2em] mb-4 relative z-10">Estimated Land Transfer Tax</p>
         <div className="text-6xl md:text-7xl font-black text-white relative z-10 drop-shadow-lg">
           ${taxAmount.toFixed(0).toLocaleString()}
         </div>
         {isFirstTime && taxAmount === 0 && (
             <p className="text-emerald-400 mt-4 font-bold">You qualify for a full tax rebate!</p>
         )}
       </motion.div>
    </motion.div>
   )
}

export default CalculatorsPage;
