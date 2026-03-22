import { createRef, useState, useEffect, useMemo } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import HeroSection from './components/HeroSection';
import CategoryOverviewSection from './components/CategoryOverviewSection';
import TreatmentCategory from '../treatments/components/TreatmentCategory';
import type { InsurancePageContent } from '../../sanity/types';
import { getInsurancePageDataAttribute } from '../../sanity/dataAttributes';

export default function InsurancePage() {
  const content = useLoaderData() as InsurancePageContent;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 詳細分類內容現已正式納入 insurancePage，避免設計確認獨立後仍依賴舊 mock 資料來源。
  const categoryRefs = useMemo(
    () => content.detailedCategories.map(() => createRef<HTMLDivElement>()),
    [content.detailedCategories],
  );

  return (
    <div className="relative">
      <Navbar scrolled={scrolled} />
      <main>
        <HeroSection title={content.heroTitle} subtitle={content.heroSubtitle} />
        <CategoryOverviewSection categoryRefs={categoryRefs} categories={content.overviewCards} />

        {/* 健保項目列表 */}
        <section className="py-20 bg-gradient-to-b from-white to-[#f8f6f1]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {content.detailedCategories.map((category, index) => (
              <div key={index} ref={categoryRefs[index]}>
                <TreatmentCategory
                  category={category}
                  index={index}
                  dataPathPrefix={`detailedCategories[${index}]`}
                  getDataAttribute={getInsurancePageDataAttribute}
                />
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
