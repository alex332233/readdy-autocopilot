import {useState} from 'react';
import type {InsuranceOverviewCard} from '../../../sanity/types';
import {getInsurancePageDataAttribute} from '../../../sanity/dataAttributes';

interface Props {
  categoryRefs: React.RefObject<HTMLDivElement>[];
  categories: InsuranceOverviewCard[];
}

export default function CategoryOverviewSection({categoryRefs, categories}: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    const ref = categoryRefs[index];
    if (ref?.current) {
      const offset = 100;
      const top = ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({top, behavior: 'smooth'});
    }
  };

  return (
    <section className="bg-[#faf6f0]">
      <div className="w-full">
        <div className="flex gap-0 h-[520px]">
          {categories.map((cat, index) => (
            <div
              key={`${cat.title}-${index}`}
              className="relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out flex-shrink-0"
              style={{
                flex: hoveredIndex === index ? '3.5' : '1',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleClick(index)}
            >
              <div className="absolute inset-0" data-sanity-edit-group data-sanity-edit-target>
                <img
                  src={cat.image.url}
                  alt={cat.image.alt}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700"
                  style={{transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'}}
                  data-sanity={getInsurancePageDataAttribute(`overviewCards[${index}].image`)}
                />
              </div>

              <div
                className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    hoveredIndex === index
                      ? 'linear-gradient(to top, rgba(80,50,20,0.72) 0%, rgba(80,50,20,0.25) 55%, rgba(80,50,20,0.08) 100%)'
                      : 'linear-gradient(to top, rgba(60,38,14,0.55) 0%, rgba(60,38,14,0.18) 60%, rgba(60,38,14,0.04) 100%)',
                }}
              ></div>

              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-400 pointer-events-none"
                style={{opacity: hoveredIndex === index ? 0 : 1}}
              >
                <p
                  className="text-white/70 text-xs tracking-[0.25em] uppercase font-light"
                  data-sanity={getInsurancePageDataAttribute(`overviewCards[${index}].englishTitle`)}
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    letterSpacing: '0.2em',
                  }}
                >
                  {cat.englishTitle}
                </p>
              </div>

              <div
                className="absolute inset-0 flex flex-col justify-end p-7 transition-all duration-500 pointer-events-none"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(16px)',
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full mb-4"
                  style={{backgroundColor: 'rgba(205,150,81,0.80)'}}
                >
                  <i
                    className={`${cat.icon} text-white text-lg`}
                    data-sanity={getInsurancePageDataAttribute(`overviewCards[${index}].icon`)}
                  ></i>
                </div>

                <p className="text-[#e8c48a] text-xs tracking-[0.25em] uppercase mb-2 font-light" data-sanity={getInsurancePageDataAttribute(`overviewCards[${index}].englishTitle`)}>
                  {cat.englishTitle}
                </p>

                <h3
                  className="text-white text-2xl font-bold mb-3 leading-snug"
                  data-sanity={getInsurancePageDataAttribute(`overviewCards[${index}].title`)}
                  style={{fontFamily: "'Noto Serif TC', serif"}}
                >
                  {cat.title}
                </h3>

                <div className="w-8 h-px bg-[#cd9651]/70 mb-4"></div>

                <p className="text-white/70 text-sm leading-relaxed" data-sanity={getInsurancePageDataAttribute(`overviewCards[${index}].subtitle`)}>
                  {cat.subtitle}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[#e8c48a] text-sm font-medium">
                  <span>了解更多</span>
                  <i className="ri-arrow-down-line text-base"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
