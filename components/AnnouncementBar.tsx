
import React, { useState, useEffect } from 'react';

export const AnnouncementBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60 - 3450); // Just for demo, fixed countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-charcoal py-2 text-center text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.2em] relative z-[60]">
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-4">
        <span>Limited Offer: 15% OFF + Free Shipping Ends In:</span>
        <span className="bg-sage px-2 py-0.5 rounded text-white font-mono tabular-nums min-w-[80px]">
          {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
};
