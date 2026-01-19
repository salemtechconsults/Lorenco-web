
import React from 'react';
import { PRODUCTS, Icons } from '../constants';

export const ProductDetailSection: React.FC = () => {
  return (
    <div className="space-y-32">
      {PRODUCTS.map((product, idx) => (
        <div key={product.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
          <div className="flex-1 w-full">
            <div className="relative group">
              <div className="absolute -inset-4 bg-sagelife/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-square bg-lightgray">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              {product.oldPrice && (
                <div className="absolute top-6 right-6 bg-mutedgold text-charcoal font-bold px-4 py-1 rounded-full shadow-lg transform rotate-3">
                  SAVE 15%
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <p className="text-sage font-bold tracking-[0.2em] uppercase text-sm">{product.category}</p>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-charcoal leading-tight">
              {product.title}
            </h3>
            <p className="text-softgray text-lg leading-relaxed italic">
              {product.description}
            </p>
            
            <div className="space-y-4 pt-4">
              <p className="font-bold text-charcoal uppercase tracking-widest text-sm">Key Benefits</p>
              <ul className="space-y-3">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-charcoal/80">
                    <span className="mt-1"><Icons.Check /></span>
                    <span className="text-sm md:text-base font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex flex-col">
                <span className="text-softgray line-through text-sm">${product.oldPrice}</span>
                <span className="text-3xl font-display font-bold text-charcoal">${product.price}</span>
              </div>
              <button className="flex-1 w-full bg-sage text-white font-bold py-4 px-8 rounded-xl hover:bg-earthy transition-all transform hover:scale-[1.02] shadow-lg uppercase tracking-wider text-sm">
                Add to Cart — Only Today
              </button>
            </div>
            <p className="text-xs text-center sm:text-left text-softgray font-medium">
              Don’t miss the opportunity to feel better every day — shop only today and save 15% off.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
