
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-lightgray pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-2xl font-display font-bold text-charcoal uppercase">
              Loren<span className="text-sage">Co</span>
            </div>
            <p className="text-softgray text-sm leading-relaxed">
              We create thoughtful wellness essentials designed to fit naturally into your life and help you feel more at ease every day.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase text-xs tracking-widest">Shop</h4>
            <ul className="space-y-4 text-sm text-softgray">
              <li><a href="#" className="hover:text-sage transition-colors">Sitting Support</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Joint Recovery</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Sleep & Breathing</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm text-softgray">
              <li><a href="#" className="hover:text-sage transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <p className="text-sm text-softgray mb-4">Stay updated with wellness tips and exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white px-4 py-2 rounded-l-lg border-none focus:ring-1 focus:ring-sage w-full text-sm" 
              />
              <button className="bg-sage text-white px-4 py-2 rounded-r-lg hover:bg-earthy transition-colors text-sm font-bold">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-softgray uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} LorenCo Wellness. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sage transition-colors">Facebook</a>
            <a href="#" className="hover:text-sage transition-colors">Instagram</a>
            <a href="#" className="hover:text-sage transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
