
import { useState, useEffect, useRef } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import HeroSection from './components/HeroSection';
import CategoryOverviewSection from './components/CategoryOverviewSection';
import TreatmentCategory from '../treatments/components/TreatmentCategory';
import { treatmentsData } from '../../mocks/treatments';

export default function InsurancePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 前5個為健保項目：內科、婦科、兒少、皮膚科、針灸
  const insuranceTreatments = treatmentsData.slice(0, 5);

  // 每個分類對應的 ref，供總覽卡片點擊後滑動定位
  const categoryRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <div className="relative">
      <Navbar scrolled={scrolled} />
      <main>
        <HeroSection />
        <CategoryOverviewSection categoryRefs={categoryRefs} />

        {/* 健保項目列表 */}
        <section className="py-20 bg-gradient-to-b from-white to-[#f8f6f1]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {insuranceTreatments.map((category, index) => (
              <div key={index} ref={categoryRefs[index]}>
                <TreatmentCategory category={category} index={index} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      {/* LINE 客服懸浮按鈕 */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#cd9651] hover:bg-[#b8843d] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 scale-100 cursor-pointer"
        aria-label="Line客服"
        onClick={() => window.open('https://lin.ee/EeONEJc', '_blank')}
      >
        <i className="ri-line-fill text-white text-2xl"></i>
      </button>
    </div>
  );
}
