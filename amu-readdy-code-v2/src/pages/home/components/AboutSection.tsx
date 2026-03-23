import { useRef, useEffect, useState } from 'react';
import FadeIn from '../../../components/base/FadeIn';
import { useHomePageContent } from '../useHomePageContent';
import { getHomePageDataAttribute } from '../../../sanity/dataAttributes';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  const { about } = useHomePageContent();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionCenter = rect.top + rect.height / 2;
      const viewCenter = windowHeight / 2;
      const offset = (sectionCenter - viewCenter) * 0.02;
      setParallaxY(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" ref={sectionRef} className="w-full bg-[#f5ede0] overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[700px] lg:min-h-[750px]">
        {/* 左側文字區 */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 py-24 lg:py-32 px-8 lg:pl-24 lg:pr-16">
          <FadeIn direction="up" delay={0}>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#cd9651] leading-tight mb-3">
              {about.title}
            </h2>
            <p className="text-sm text-[#cd9651] italic tracking-widest mb-8">
              {about.englishTitle}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={120}>
            <p className="text-xl font-medium mb-6 leading-relaxed" style={{ color: '#374151' }}>
              {about.lead}
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#374151' }}>
              {about.description}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={240}>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {about.features.map((feature, index) => (
                <div key={index} className="border-l-2 border-[#cd9651] pl-4">
                  <p className="font-bold text-gray-800 text-base mb-1">{feature.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={360}>
            <button
              onClick={scrollToServices}
              className="group inline-flex items-center px-7 py-3.5 bg-[#cd9651] hover:bg-[#b8843d] text-white rounded-full font-medium cursor-pointer transition-all duration-300 hover:shadow-lg whitespace-nowrap"
            >
              <span className="text-[14px] font-medium tracking-[0.1em]">{about.ctaText}</span>
              <i className="ri-arrow-right-line ml-3 transition-all duration-300 group-hover:translate-x-1.5"></i>
            </button>
          </FadeIn>
        </div>

        {/* 右側圖片區 */}
        <FadeIn direction="left" delay={100} className="w-full lg:w-1/2 h-[480px] lg:h-auto overflow-hidden">
          <div
            className="w-full h-full"
            data-sanity-edit-group
            data-sanity-edit-target
            style={{ overflow: 'hidden' }}
          >
            <img
              alt={about.image.alt}
              className="w-full h-full object-cover object-top"
              data-sanity={getHomePageDataAttribute('about.image')}
              src={about.image.url}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
