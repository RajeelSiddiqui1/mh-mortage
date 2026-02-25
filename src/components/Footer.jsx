import React from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-navy dark:bg-[#060F1C] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <Home className="text-brand-red w-8 h-8" />
              <span className="font-bold text-2xl tracking-tight text-white">
                MHE <span className="text-brand-gold">Mortgage</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering Canadians with VIP mortgage lending services. Simplifying the journey to homeownership with competitive rates and bespoke advice.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Mortgages & Rates</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/rates" className="hover:text-brand-gold transition-colors">Current Rates</Link></li>
              <li><Link to="/mortgages" className="hover:text-brand-gold transition-colors">First-Time Buyers</Link></li>
              <li><Link to="/mortgages" className="hover:text-brand-gold transition-colors">Renew & Switch</Link></li>
              <li><Link to="/mortgages" className="hover:text-brand-gold transition-colors">Refinance</Link></li>
              <li><Link to="/mortgages" className="hover:text-brand-gold transition-colors">Investment Properties</Link></li>
              <li><Link to="/mortgages" className="hover:text-brand-gold transition-colors">New to Canada</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Calculators & Tools</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/calculators" className="hover:text-brand-gold transition-colors">Payment Calculator</Link></li>
              <li><Link to="/calculators" className="hover:text-brand-gold transition-colors">Affordability</Link></li>
              <li><Link to="/calculators" className="hover:text-brand-gold transition-colors">Renewal Comparison</Link></li>
              <li><Link to="/calculators" className="hover:text-brand-gold transition-colors">Closing Costs</Link></li>
              <li><Link to="/calculators" className="hover:text-brand-gold transition-colors">Land Transfer Tax</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">Our VIP Team</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Locations</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors underline">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} MHE Mortgage Company. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4 text-slate-500">
            <span>Built by MHE Tech</span>
            <span>Made in Canada 🇨🇦</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
