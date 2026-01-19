
import React from 'react';

export const MidPageCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-sage/5 -skew-y-3 transform scale-110" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal">
          Upgrade Your Everyday Comfort
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <button className="bg-sage text-white text-xl font-bold px-12 py-5 rounded-2xl hover:bg-earthy transition-all transform hover:scale-105 shadow-2xl uppercase tracking-widest">
            Shop Wellness Essentials
          </button>
          <p className="text-lg text-softgray max-w-lg">
            Don’t miss the opportunity to feel more supported every day — <span className="text-charcoal font-bold">15% off today</span>
          </p>
        </div>
      </div>
    </section>
  );
};
