
import React from 'react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 bg-white text-center">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-charcoal leading-tight">
          Small Changes.<br />
          <span className="text-sage italic">Everyday Support.</span>
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <button className="bg-sage text-white text-xl font-bold px-12 py-6 rounded-2xl hover:bg-earthy transition-all transform hover:scale-105 shadow-2xl uppercase tracking-[0.2em]">
            Explore Comfort Solutions
          </button>
          <div className="flex items-center gap-3 text-softgray font-medium">
            <p className="text-sm">Limited-time comfort upgrade — 15% off today</p>
          </div>
        </div>
        
        <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40">
          <p className="text-[10px] font-bold uppercase tracking-widest">30-Day Guarantee</p>
          <p className="text-[10px] font-bold uppercase tracking-widest">Eco-Conscious Choice</p>
          <p className="text-[10px] font-bold uppercase tracking-widest">Premium Quality</p>
          <p className="text-[10px] font-bold uppercase tracking-widest">Expert Support</p>
        </div>
      </div>
    </section>
  );
};
