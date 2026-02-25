import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Home, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Rates', href: '/rates' },
    { 
      name: 'Mortgages', 
      href: '/mortgages',
      dropdown: [
         { name: 'All Mortgages', href: '/mortgages' },
         { name: 'First-Time Home Buyers', href: '/mortgages' },
         { name: 'Renewals and Switches', href: '/mortgages' },
         { name: 'Refinancing Your Home', href: '/mortgages' },
         { name: 'Buying Your Next Home', href: '/mortgages' },
         { name: 'Investment Properties', href: '/mortgages' },
         { name: 'Self-Employed', href: '/mortgages' },
         { name: 'Newcomers to Canada', href: '/mortgages' },
      ]
    },
    { 
      name: 'Tools', 
      href: '/calculators',
      dropdown: [
         { name: 'Payment Calculator', href: '/calculators' },
         { name: 'Affordability', href: '/calculators' },
         { name: 'Renewal Comparison', href: '/calculators' },
         { name: 'Closing Costs', href: '/calculators' },
         { name: 'Land Transfer Tax', href: '/calculators' },
      ]
    },
    { 
      name: 'Education', 
      href: '/blog',
      dropdown: [
         { name: 'First-Time Buyer\'s Guide', href: '/blog/5-things-to-know-before-buying-your-first-home' },
         { name: 'Variable vs Fixed Rates', href: '/blog/variable-vs-fixed-mortgage-rates-in-2026' },
         { name: 'Improve Your Credit', href: '/blog/how-to-improve-your-credit-score-fast' },
         { name: 'View All Articles', href: '/blog' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed w-full z-50 top-0 transition-all duration-300 glass border-b border-slate-200/50 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer relative z-50">
            <Home className="text-brand-red w-8 h-8" />
            <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
              MHE <span className="text-brand-gold">Mortgage</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={link.href}
                  className={`flex items-center gap-1 transition-colors font-semibold border-b-2 py-6 ${location.pathname.startsWith(link.href) ? 'border-brand-red text-brand-red dark:text-brand-gold dark:border-brand-gold' : 'border-transparent text-slate-700 hover:text-brand-red dark:text-slate-200 dark:hover:text-brand-gold'}`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-[80px] w-64 bg-white dark:bg-brand-charcoal border border-slate-200 dark:border-white/10 shadow-2xl rounded-2xl p-3 grid grid-cols-1 gap-1"
                      >
                         {link.dropdown.map((subItem) => (
                            <Link 
                               key={subItem.name} 
                               to={subItem.href}
                               className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-brand-red/5 dark:hover:bg-white/5 hover:text-brand-red dark:hover:text-brand-gold transition-colors flex items-center justify-between group/sub"
                            >
                               {subItem.name}
                            </Link>
                         ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 ml-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5 text-brand-gold" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            {/* CTA Button */}
            <Link to="/contact">
               <motion.button 
                 whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 10px 20px rgba(232,17,45,0.3)" }}
                 whileTap={{ scale: 0.95 }}
                 className="px-6 py-3 rounded-full bg-brand-red text-white font-bold shadow-lg shadow-brand-red/20 transition-all uppercase tracking-wider text-sm ml-2"
               >
                 Apply Now
               </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4 relative z-50">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800">
               {isDark ? <Sun className="w-5 h-5 text-brand-gold" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-brand-red dark:hover:text-brand-gold focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-200 dark:border-white/10 overflow-hidden fixed top-20 left-0 w-full z-40"
          >
            <div className="px-6 pt-8 pb-32 space-y-4 h-full overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className="block text-2xl font-black text-slate-900 dark:text-white mb-2 pb-2 border-b border-slate-200 dark:border-white/10"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                     <div className="pl-4 space-y-3 mt-4 mb-6">
                        {link.dropdown.map(sub => (
                           <Link key={sub.name} to={sub.href} className="block text-lg font-medium text-slate-600 dark:text-slate-400">
                              {sub.name}
                           </Link>
                        ))}
                     </div>
                  )}
                </div>
              ))}
              <Link to="/contact">
                 <button className="mt-8 w-full px-6 py-5 rounded-2xl bg-brand-red text-white font-black shadow-lg shadow-brand-red/30 uppercase tracking-widest text-lg">
                   Apply Now
                 </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
