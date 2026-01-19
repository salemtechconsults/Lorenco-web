
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sagelife/20 rounded-l-full blur-3xl -z-10 transform translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-left">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-charcoal leading-tight">
              Everyday Wellness,<br /> 
              <span className="text-sage italic">Designed to Support You.</span>
            </h1>
            <p className="text-lg md:text-xl text-softgray max-w-xl leading-relaxed">
              From posture and joint support to relaxation and better breathing, LorenCo creates simple tools for everyday wellness.
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <button className="bg-sage text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-earthy transition-all transform hover:-translate-y-1 shadow-lg w-fit uppercase tracking-wider">
              Explore Comfort Solutions
            </button>
            <p className="text-sm text-softgray flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage"></span>
              </span>
              Limited-time comfort upgrade — Only a few left today
            </p>
          </div>

          <div className="pt-8 flex items-center space-x-8 opacity-60 grayscale">
            <img src="https://picsum.photos/id/101/60/30" alt="Brand Logo" className="h-6" />
            <img src="https://picsum.photos/id/102/60/30" alt="Brand Logo" className="h-6" />
            <img src="https://picsum.photos/id/103/60/30" alt="Brand Logo" className="h-6" />
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
              alt="Everyday wellness products in a calm environment" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
          </div>
          
          {/* Product Floating Cards */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden lg:block animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sagelife rounded-full flex items-center justify-center text-sage">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-softgray uppercase tracking-tighter">Bestseller</p>
                <p className="text-sm font-bold text-charcoal">Knee Relief Wrap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = `
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}
`;
