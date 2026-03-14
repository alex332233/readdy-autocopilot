import { useEffect, useState } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import HeroSection from './components/HeroSection';
import BlogCard from './components/BlogCard';
import CTASection from './components/CTASection';
import FadeIn from '../../components/base/FadeIn';
import { casesData } from '../../mocks/cases';

const allCategories = ['全部', ...Array.from(new Set(casesData.map(c => c.category)))];

export default function CasesPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('全部');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filtered = activeCategory === '全部'
    ? casesData
    : casesData.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />
      <HeroSection />

      {/* 篩選標籤 */}
      <section className="pt-12 pb-2">
        <FadeIn delay={0} direction="up" duration={1600}>
          <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-2">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs tracking-widest px-4 py-1.5 rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#cd9651] border-[#cd9651] text-white'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-[#cd9651] hover:text-[#cd9651]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* 部落格網格 */}
      <section className="py-10 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {filtered.map((caseItem, index) => (
              <FadeIn key={caseItem.id} delay={index * 120} direction="up" duration={1600}>
                <BlogCard caseData={caseItem} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
