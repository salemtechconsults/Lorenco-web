
import React, { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { BrandSection } from './components/BrandSection';
import { OutcomeCategories } from './components/OutcomeCategories';
import { ProductDetailSection } from './components/ProductDetailSection';
import { BundleSection } from './components/BundleSection';
import { MidPageCTA } from './components/MidPageCTA';
import { SocialProof } from './components/SocialProof';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AnnouncementBar } from './components/AnnouncementBar';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-sage/30">
      <AnnouncementBar />
      <Nav scrolled={scrolled} />
      
      <main>
        <Hero />
        <TrustStrip />
        <BrandSection />
        
        <div id="outcomes">
          <OutcomeCategories />
        </div>

        <section className="py-16 bg-white overflow-hidden">
          <div className="max-container px-6">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-charcoal text-center mb-16">
              Our Bestselling Essentials
            </h2>
            <ProductDetailSection />
          </div>
        </section>

        <MidPageCTA />
        
        <BundleSection />
        
        <SocialProof />
        
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
