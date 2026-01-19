
import React from 'react';
import { Icons } from '../constants';

const categories = [
  {
    title: 'Support While You Sit',
    description: 'Ergonomic solutions designed to make long hours of sitting feel more comfortable and supported.',
    image: 'https://images.unsplash.com/photo-1544450173-8c8d2ba069de?auto=format&fit=crop&q=80&w=800',
    tag: 'Focus'
  },
  {
    title: 'Relief & Recovery for Joints',
    description: 'Targeted support and gentle heat designed to soothe discomfort and improve circulation.',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800',
    tag: 'Mobility'
  },
  {
    title: 'Rest & Recovery Essentials',
    description: 'Thoughtful tools designed to support relaxation, breathing, and nighttime comfort.',
    image: 'https://images.unsplash.com/photo-1511295744334-f4d57407f590?auto=format&fit=crop&q=80&w=800',
    tag: 'Rest'
  }
];

export const OutcomeCategories: React.FC = () => {
  return (
    <section className="py-24 bg-lightgray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-charcoal mb-4 capitalize">Find what supports you</h2>
          <p className="text-softgray text-lg">Select a solution tailored to your daily needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-sage uppercase tracking-widest shadow-sm">
                  {cat.tag}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-display font-bold text-charcoal">{cat.title}</h3>
                <p className="text-softgray leading-relaxed text-sm md:text-base">
                  {cat.description}
                </p>
                <button className="flex items-center text-sage font-bold group-hover:translate-x-2 transition-transform">
                  Shop Now <Icons.ArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
