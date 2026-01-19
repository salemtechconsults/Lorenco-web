
import React from 'react';

export const BrandSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="inline-block px-4 py-1 bg-sagelife rounded-full text-sage text-sm font-bold uppercase tracking-widest mb-4">
          Our Approach
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal">
          Everyday Wellness, but simple.
        </h2>
        <p className="text-xl text-softgray leading-relaxed max-w-2xl mx-auto">
          At LorenCo, we design wellness essentials that support your daily routines. Our focus is on comfort, simplicity, and thoughtful design—creating products that fit naturally into your life and help you feel more at ease every day.
        </p>
        <div className="pt-10 flex flex-wrap justify-center gap-12">
          <div className="text-center">
            <p className="text-3xl font-display font-bold text-sage">50k+</p>
            <p className="text-sm text-softgray uppercase tracking-tighter">Users Supported</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-display font-bold text-sage">4.8/5</p>
            <p className="text-sm text-softgray uppercase tracking-tighter">Customer Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-display font-bold text-sage">100%</p>
            <p className="text-sm text-softgray uppercase tracking-tighter">Comfort Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};
