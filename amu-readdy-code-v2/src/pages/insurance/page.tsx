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
              <div key={index} id={category.treatmentKey} ref={categoryRefs[index]}>
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
    </div>
  );
}
