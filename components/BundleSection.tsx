
import React from 'react';
import { BUNDLES, PRODUCTS, Icons } from '../constants';

export const BundleSection: React.FC = () => {
  return (
    <section className="py-24 bg-lightgray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal">Better Together</h2>
          <p className="text-softgray">Save more with our curated wellness bundles</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {BUNDLES.map((bundle) => {
            const bundledProducts = PRODUCTS.filter(p => bundle.products.includes(p.id));
            
            return (
              <div key={bundle.id} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-charcoal/5 flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-shrink-0 flex -space-x-12 hover:space-x-4 transition-all duration-500">
                  {bundledProducts.map((p, i) => (
                    <div key={i} className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <div>
                    <span className="text-sage font-bold text-xs uppercase tracking-widest">{bundle.discount}</span>
                    <h3 className="text-2xl font-display font-bold text-charcoal mt-1">{bundle.name}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {bundledProducts.map(p => (
                      <div key={p.id} className="flex items-center gap-2 text-sm text-softgray justify-center md:justify-start">
                        <Icons.Check /> <span>{p.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <span className="text-3xl font-display font-bold text-charcoal">${bundle.price}</span>
                    <button className="bg-sage text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-earthy transition-all shadow-md">
                      Add Bundle
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
