import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import HeroSection from './components/HeroSection';
import ArticleCard from './components/ArticleCard';
import CTASection from '../cases/components/CTASection';
import { getHealthEducationPageDataAttribute } from '../../sanity/dataAttributes';
import type { HealthEducationPageContent } from '../../sanity/types';

export default function HealthEducationPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('全部');
  const [activeSubcategory, setActiveSubcategory] = useState('全部');
  const content = useLoaderData() as HealthEducationPageContent;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentCategoryObj = content.categories.find((c) => c.name === activeCategory);
  const subcategories = currentCategoryObj ? ['全部', ...currentCategoryObj.subcategories] : [];

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    setActiveSubcategory('全部');
  };

  const filtered = content.articles.filter((a) => {
    if (activeCategory === '全部') return true;
    if (a.category !== activeCategory) return false;
    if (activeSubcategory === '全部') return true;
    return a.subcategory === activeSubcategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />
      <HeroSection title={content.heroTitle} subtitle={content.heroSubtitle} />

      <section className="pt-12 pb-0 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 pb-5">
            <button
              onClick={() => handleCategoryClick('全部')}
              data-sanity={getHealthEducationPageDataAttribute('title')}
              className={`text-xs tracking-widest px-4 py-1.5 rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === '全部'
                  ? 'bg-[#cd9651] border-[#cd9651] text-white'
                  : 'bg-white border-gray-200 text-gray-500 hover:border-[#cd9651] hover:text-[#cd9651]'
              }`}
            >
              全部
            </button>
            {content.categories.map((cat, index) => (
              <button
                key={cat.name}
                onClick={() => handleCategoryClick(cat.name)}
                data-sanity={getHealthEducationPageDataAttribute(`categories[${index}].name`)}
                className={`text-xs tracking-widest px-4 py-1.5 rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.name
                    ? 'bg-[#cd9651] border-[#cd9651] text-white'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-[#cd9651] hover:text-[#cd9651]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {activeCategory !== '全部' && subcategories.length > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-2 pb-4 pt-1">
              {subcategories.map((sub) => {
                const subIndex = currentCategoryObj?.subcategories.findIndex((value) => value === sub) ?? -1;
                return (
                  <button
                    key={sub}
                    onClick={() => setActiveSubcategory(sub)}
                    data-sanity={
                      sub !== '全部' && subIndex >= 0 && currentCategoryObj
                        ? getHealthEducationPageDataAttribute(
                            `categories[${content.categories.findIndex((item) => item.name === currentCategoryObj.name)}].subcategories[${subIndex}]`,
                          )
                        : undefined
                    }
                    className={`text-[11px] tracking-wider px-3.5 py-1 rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                      activeSubcategory === sub
                        ? 'bg-[#4a5d4a] border-[#4a5d4a] text-white'
                        : 'bg-white border-gray-200 text-gray-400 hover:border-[#4a5d4a] hover:text-[#4a5d4a]'
                    }`}
                  >
                    {sub}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400 text-sm tracking-widest">此分類尚無文章，敬請期待</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {filtered.map((article, index) => (
                <ArticleCard key={article.articleId} article={article} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title={content.ctaTitle}
        description={content.ctaDescription}
        buttonText={content.ctaButtonText}
        enableVisualEditing
        getDataAttribute={getHealthEducationPageDataAttribute}
      />
      <Footer />
    </div>
  );
}
