import { useEffect, useState } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import OriginStorySection from './components/OriginStorySection';
import PhilosophySection from './components/PhilosophySection';
import CoreValuesSection from './components/CoreValuesSection';
import ClosingStorySection from './components/ClosingStorySection';
import BranchesSection from './components/BranchesSection';

export default function AboutV2Page() {
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
        <OriginStorySection />
        <PhilosophySection />
        <CoreValuesSection />
        <BranchesSection />
        <ClosingStorySection />
      </main>
      <Footer />
    </div>
  );
}
