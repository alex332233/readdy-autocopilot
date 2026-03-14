import { useState, useEffect } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import HeroSection from './components/HeroSection';
import TreatmentCategory from './components/TreatmentCategory';
import FeaturedTreatmentCard from './components/FeaturedTreatmentCard';
import GrowthDetailSection from './components/GrowthDetailSection';
import FacialDetailSection from './components/FacialDetailSection';
import { treatmentsData, featuredTreatmentsData } from '../../mocks/treatments';

export default function TreatmentsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 分割數據：前5個為健保項目
  const insuranceTreatments = treatmentsData.slice(0, 5);

  return (
    <div className="relative">
      <Navbar scrolled={scrolled} />
      <main>
        <HeroSection />
        
        {/* 健保項目 */}
        <section className="py-20 bg-gradient-to-b from-white to-[#f8f6f1]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800">
                健保項目
              </h2>
            </div>
            
            {insuranceTreatments.map((category, index) => (
              <TreatmentCategory key={index} category={category} index={index} />
            ))}
          </div>
        </section>

        {/* 特色療程 */}
        <section className="py-20 bg-gradient-to-b from-[#f8f6f1] to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800">
                特色療程
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {featuredTreatmentsData.map((category, index) => (
                <FeaturedTreatmentCard key={index} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* 登峰・轉骨詳細內容 */}
        <GrowthDetailSection />

        {/* 御顏・緊緻詳細內容 */}
        <FacialDetailSection />
      </main>
      <Footer />
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