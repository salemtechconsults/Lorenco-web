
import React from 'react';
import { Icons } from '../constants';

export const TrustStrip: React.FC = () => {
  const items = [
    { icon: <Icons.Support />, text: 'Designed for everyday comfort' },
    { icon: <Icons.Star filled />, text: 'Popular wellness essentials' },
    { icon: <Icons.Truck />, text: 'Free shipping today' },
    { icon: <Icons.Shield />, text: 'Easy returns' },
  ];

  return (
    <div className="bg-sagelife py-6 border-y border-sage/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-center space-x-3 text-charcoal font-medium text-sm md:text-base">
              <span className="text-mutedgold flex-shrink-0">
                {item.icon}
              </span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
