
import React from 'react';

interface NavProps {
  scrolled: boolean;
}

export const Nav: React.FC<NavProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 px-6 ${scrolled ? 'top-0' : 'top-8'}`}>
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3 px-8' : 'bg-transparent py-4 px-0'}`}>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-display font-bold tracking-tight text-charcoal uppercase">
            Loren<span className="text-sage">Co</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-charcoal/80">
            <a href="#" className="hover:text-sage transition-colors">Home</a>
            <a href="#outcomes" className="hover:text-sage transition-colors">Solutions</a>
            <a href="#" className="hover:text-sage transition-colors">Our Story</a>
            <a href="#" className="hover:text-sage transition-colors">Support</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-sage text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-earthy transition-all shadow-md active:scale-95">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
