import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import OriginStorySection from './components/OriginStorySection';
import PhilosophySection from './components/PhilosophySection';
import CoreValuesSection from './components/CoreValuesSection';
import ClosingStorySection from './components/ClosingStorySection';
import BranchesSection from './components/BranchesSection';
import type { AboutPageContent } from '../../sanity/types';

export default function AboutV2Page() {
  const content = useLoaderData() as AboutPageContent;
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
        <OriginStorySection content={content.originStory} />
        <PhilosophySection title={content.philosophyTitle} cards={content.philosophyCards} />
        <CoreValuesSection values={content.coreValues} />
        <BranchesSection title={content.branchesTitle} subtitle={content.branchesSubtitle} branches={content.branches} />
        <ClosingStorySection />
      </main>
      <Footer />
    </div>
  );
}
