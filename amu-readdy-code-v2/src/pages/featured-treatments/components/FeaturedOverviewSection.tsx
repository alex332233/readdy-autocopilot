import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FeaturedTreatmentCardContent } from '../../../sanity/types';
import { getFeaturedTreatmentsPageDataAttribute } from '../../../sanity/dataAttributes';

interface FeaturedOverviewSectionProps {
  cards: FeaturedTreatmentCardContent[];
}

const overviewMeta: Record<string, { subtitle: string }> = {
  facial: {
    subtitle: '美顏針・膠原蛋白喚醒・無創微雕',
  },
  growth: {
    subtitle: '兒少成長・雷射針灸・體質衝刺',
  },
  body: {
    subtitle: '埋線體態・代謝重啟・局部調理',
  },
  eye: {
    subtitle: '眼針調理・乾眼・眼壓・假性近視',
  },
  laser: {
    subtitle: '無痛光能・穴位導引・兒童友善',
  },
  decoction: {
    subtitle: '全客製水煎藥・備孕・產後・深層調理',
  },
};

const HOVER_EXTRA = 80;

const getCardFieldBase = (card: FeaturedTreatmentCardContent, index: number) =>
  card._key ? `cards[_key=="${card._key}"]` : `cards[${index}]`;

export default function FeaturedOverviewSection({ cards }: FeaturedOverviewSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [baseWidth, setBaseWidth] = useState(280);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const categories = useMemo(
    () =>
      cards.map((card) => {
        const meta = overviewMeta[card.detailSlug || ''] || {
          subtitle: card.treatmentTitle,
        };

        return {
          ...card,
          path: card.detailSlug ? `/featured-treatments/${card.detailSlug}` : undefined,
          subtitle: meta.subtitle,
          image: card.image?.url || '',
        };
      }),
    [cards],
  );

  useEffect(() => {
    const calcWidth = () => {
      if (!containerRef.current || categories.length === 0) return;
      const total = containerRef.current.clientWidth;
      const perCard = Math.floor(total / categories.length);
      setBaseWidth(Math.max(200, perCard));
    };

    calcWidth();
    const observer = new ResizeObserver(calcWidth);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [categories.length]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const updateScrollState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
    };

    updateScrollState();
    element.addEventListener('scroll', updateScrollState, { passive: true });
    return () => element.removeEventListener('scroll', updateScrollState);
  }, [categories.length]);

  const getCardWidth = (index: number) => {
    if (hoveredIndex === null || categories.length <= 1) return baseWidth;
    const shrink = HOVER_EXTRA / (categories.length - 1);
    return index === hoveredIndex ? baseWidth + HOVER_EXTRA : baseWidth - shrink;
  };

  const scrollBy = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  if (categories.length === 0) return null;

  return (
    <section className="bg-[#faf6f0] py-4 pb-10">
      <div ref={containerRef} className="relative w-full">
        <button
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 md:left-5"
          style={{
            border: '1px solid #e8c48a',
            backgroundColor: 'rgba(20,12,4,0.25)',
            color: '#e8c48a',
            opacity: canScrollLeft ? 1 : 0,
            pointerEvents: canScrollLeft ? 'auto' : 'none',
            transform: `translateY(-50%) scale(${canScrollLeft ? 1 : 0.8})`,
          }}
          onClick={() => scrollBy('left')}
          aria-label="向左滑動"
        >
          <i className="ri-arrow-left-s-line text-lg" />
        </button>

        <button
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 md:right-5"
          style={{
            border: '1px solid #e8c48a',
            backgroundColor: 'rgba(20,12,4,0.25)',
            color: '#e8c48a',
            opacity: canScrollRight ? 1 : 0,
            pointerEvents: canScrollRight ? 'auto' : 'none',
            transform: `translateY(-50%) scale(${canScrollRight ? 1 : 0.8})`,
          }}
          onClick={() => scrollBy('right')}
          aria-label="向右滑動"
        >
          <i className="ri-arrow-right-s-line text-lg" />
        </button>

        <div ref={scrollRef} className="scrollbar-hide w-full overflow-x-auto">
          <div className="flex gap-0" style={{ minWidth: '100%' }}>
            {categories.map((category, index) => {
              const isHovered = hoveredIndex === index;
              const cardWidth = getCardWidth(index);
              const fieldBase = getCardFieldBase(cards[index], index);

              return (
                <div
                  key={`${category.title}-${index}`}
                  className="relative flex-shrink-0 overflow-hidden"
                  style={{
                    width: `${cardWidth}px`,
                    height: '400px',
                    cursor: category.path ? 'pointer' : 'default',
                    transition: 'width 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => category.path && navigate(category.path)}
                  data-sanity={getFeaturedTreatmentsPageDataAttribute(`${fieldBase}.title`)}
                >
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.title}
                      className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-top transition-transform duration-700 ease-in-out"
                      style={{ transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
                      draggable={false}
                      data-sanity={getFeaturedTreatmentsPageDataAttribute(`${fieldBase}.image`)}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#eadfce]" />
                  )}

                  <div
                    className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: isHovered
                        ? 'linear-gradient(to top, rgba(20,12,4,0.88) 0%, rgba(20,12,4,0.45) 45%, rgba(20,12,4,0.05) 100%)'
                        : 'linear-gradient(to top, rgba(20,12,4,0.72) 0%, rgba(20,12,4,0.22) 50%, rgba(20,12,4,0.02) 100%)',
                    }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p
                      className="mb-1.5 text-xs font-light uppercase tracking-[0.22em] transition-all duration-400"
                      style={{ color: category.color, opacity: isHovered ? 1 : 0.8 }}
                      data-sanity={getFeaturedTreatmentsPageDataAttribute(`${fieldBase}.englishTitle`)}
                    >
                      {category.englishTitle}
                    </p>

                    <h3
                      className="mb-0 whitespace-nowrap text-xl font-bold leading-snug text-white transition-all duration-400"
                      style={{
                        fontFamily: "'Noto Serif TC', serif",
                        marginBottom: isHovered ? '10px' : '0px',
                      }}
                      data-sanity={getFeaturedTreatmentsPageDataAttribute(`${fieldBase}.title`)}
                    >
                      {category.title}
                    </h3>

                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: isHovered ? '120px' : '0px',
                        opacity: isHovered ? 1 : 0,
                      }}
                    >
                      <div className="mb-3 h-px w-7" style={{ backgroundColor: `${category.color}aa` }} />
                      <p
                        className="mb-4 whitespace-nowrap text-sm leading-relaxed text-white/70"
                        data-sanity={getFeaturedTreatmentsPageDataAttribute(`${fieldBase}.treatmentTitle`)}
                      >
                        {category.subtitle}
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: '#e8c48a' }}>
                        <span>了解療程</span>
                        <i className="ri-arrow-right-line text-base" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
