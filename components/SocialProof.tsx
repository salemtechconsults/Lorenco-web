
import React from 'react';
import { TESTIMONIALS, Icons } from '../constants';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">Trusted by thousands seeking everyday comfort</h2>
            <p className="text-softgray">Join over 50,000 satisfied customers who improved their daily well-being with LorenCo.</p>
          </div>
          <div className="flex items-center gap-2 bg-sagelife px-4 py-2 rounded-full">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
              ))}
            </div>
            <span className="text-xs font-bold text-sage">500+ New Reviews Weekly</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-lightgray p-8 rounded-3xl space-y-6 relative hover:shadow-lg transition-shadow">
              <div className="flex space-x-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Icons.Star key={i} filled />
                ))}
              </div>
              <p className="text-charcoal font-medium leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-sagelife flex items-center justify-center text-sage font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-charcoal">{t.name}, {t.location}</p>
                  <p className="text-xs text-softgray flex items-center gap-1">
                    <Icons.Check /> Verified Purchase
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
