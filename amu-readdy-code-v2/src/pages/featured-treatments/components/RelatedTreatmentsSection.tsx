import { useNavigate } from 'react-router-dom';
import { getFeaturedTreatmentsPageDataAttribute } from '../../../sanity/dataAttributes';
import type { FeaturedTreatmentCardContent } from '../../../sanity/types';

interface RelatedTreatmentsSectionProps {
  cards: FeaturedTreatmentCardContent[];
  currentSlug: string;
  extraCard?: FeaturedTreatmentCardContent;
}

const sectionBackgrounds: Record<string, string> = {
  body: '#fdfaf6',
  eye: '#f2f7f7',
  laser: '#fdf8f2',
  decoction: '#f2f7f5',
};

const headingAccents: Record<string, string> = {
  body: '#b87d3a',
  eye: '#5c8f8c',
  laser: '#c9965a',
  decoction: '#5a7a6e',
};

export default function RelatedTreatmentsSection({ cards, currentSlug, extraCard }: RelatedTreatmentsSectionProps) {
  const navigate = useNavigate();
  const otherTreatments = cards
    .map((card, index) => ({ card, index }))
    .filter(({ card }) => card.detailSlug !== currentSlug);
  const displayTreatments = extraCard
    ? [...otherTreatments, { card: extraCard, index: -1 }]
    : otherTreatments;
  const headingAccent = headingAccents[currentSlug] ?? '#cd9651';

  return (
    <section
      className="py-20"
      style={{ backgroundColor: sectionBackgrounds[currentSlug] ?? '#fdfaf6' }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs tracking-[0.25em] uppercase mb-3 font-medium" style={{ color: headingAccent }}>Explore More</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3" style={{ fontFamily: "'Noto Serif TC', serif" }}>
            探索更多特色療程
          </h2>
          <div className="w-10 h-px mt-1" style={{ backgroundColor: headingAccent }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayTreatments.map(({ card: item, index }, idx) => {
            const hasDetail = Boolean(item.detailSlug);
            const path = item.detailSlug ? `/featured-treatments/${item.detailSlug}` : undefined;
            const fieldBase = index >= 0 ? `cards[${index}]` : 'relatedExtraCard';

            return (
              <div
                key={idx}
                className={`group bg-white rounded-2xl border border-[#ede8df] overflow-hidden transition-all duration-300 ${hasDetail ? 'cursor-pointer hover:shadow-md hover:border-[#cd9651]/40' : 'cursor-default'}`}
                onClick={() => hasDetail && path && navigate(path)}
                data-sanity={getFeaturedTreatmentsPageDataAttribute(`${fieldBase}.title`)}
                data-sanity-edit-group
                data-sanity-edit-target
              >
                <div className="h-1 w-full" style={{ backgroundColor: item.color }} data-sanity={getFeaturedTreatmentsPageDataAttribute(`${fieldBase}.color`)} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}18`, border: `1.5px solid ${item.color}55` }}
                      data-sanity={getFeaturedTreatmentsPageDataAttribute(`${fieldBase}.icon`)}
                    >
                      <i className={`${item.icon} text-lg`} style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3
                        className="text-base font-bold text-gray-800 leading-tight"
                        style={{ fontFamily: "'Noto Serif TC', serif" }}
                        data-sanity={getFeaturedTreatmentsPageDataAttribute(`${fieldBase}.title`)}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-[11px] tracking-widest mt-0.5"
                        style={{ color: item.color, opacity: 0.8 }}
                        data-sanity={getFeaturedTreatmentsPageDataAttribute(`${fieldBase}.englishTitle`)}
                      >
                        {item.englishTitle}
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4"
                    data-sanity={getFeaturedTreatmentsPageDataAttribute(`${fieldBase}.description`)}
                  >
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                        style={{ backgroundColor: `${item.color}12`, color: item.color, border: `1px solid ${item.color}35` }}
                        data-sanity={getFeaturedTreatmentsPageDataAttribute(`${fieldBase}.tags[${tIdx}]`)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#f0ebe2] flex items-center justify-between">
                    {hasDetail ? (
                      <span className="flex items-center gap-1.5 text-xs font-medium transition-all duration-300" style={{ color: item.color }}>
                        了解詳細介紹
                        <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs text-gray-400">
                        <i className="ri-stethoscope-line text-sm" />
                        歡迎來診諮詢
                      </span>
                    )}
                    <button
                      className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer hover:opacity-90"
                      style={{ backgroundColor: `${item.color}15`, color: item.color, border: `1px solid ${item.color}40` }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.REACT_APP_NAVIGATE?.('/#booking');
                      }}
                    >
                      立即預約
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
