import { useRef, useEffect, useState } from 'react';
import FadeIn from '../../../components/base/FadeIn';
import { useHomePageContent } from '../useHomePageContent';
import { getHomePageDataAttribute } from '../../../sanity/dataAttributes';

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  const { whyChoose } = useHomePageContent();

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

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why-choose" ref={sectionRef} className="py-20 lg:py-28" style={{ backgroundColor: '#f5ede0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <FadeIn direction="up" delay={0}>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-[#cd9651]">
                {whyChoose.titleLine1}
                <br />
                {whyChoose.titleLine2}
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={120}>
              <div className="space-y-5">
                {whyChoose.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed" style={{ color: '#374151' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={240}>
              <div className="pt-4">
                <button
                  onClick={scrollToBooking}
                  className="group inline-flex items-center px-8 py-3 bg-[#cd9651] hover:bg-[#b8843d] text-white rounded-full font-medium transition-all whitespace-nowrap text-sm cursor-pointer"
                >
                  {whyChoose.ctaText}
                  <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                </button>
              </div>
            </FadeIn>
          </div>

          {/* 右側圖片區（視差效果） */}
          <FadeIn direction="left" delay={100}>
            <div
              className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl"
              data-sanity-edit-group
              data-sanity-edit-target
            >
              <img
                alt={whyChoose.image.alt}
                className="w-full object-cover object-top absolute inset-0"
                data-sanity={getHomePageDataAttribute('whyChoose.image')}
                style={{
                  height: 'calc(100% + 80px)',
                  top: '-40px',
                  transform: `translateY(${parallaxY}px)`,
                  transition: 'transform 0.15s linear',
                  willChange: 'transform',
                }}
                src={whyChoose.image.url}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
