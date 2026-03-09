import { useEffect, useState } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import BeliefSection from './components/BeliefSection';
import CoreValuesSection from './components/CoreValuesSection';
import FeaturesSectionV6 from './components/FeaturesSectionV6';
import FeaturesSectionV7 from './components/FeaturesSectionV7';

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f6f1]">
      <Navbar scrolled={scrolled} />
      <main>
        <HeroSection />
        <PhilosophySection />
        <BeliefSection />
        <CoreValuesSection />

        {/* 版型六：橫向列表，直接顯示文字 */}
        <div className="relative">
          <FeaturesSectionV6 />
        </div>

      </main>
      <Footer />
    </div>
  );
}
