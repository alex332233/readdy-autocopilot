import FeaturedTreatmentCard from '../../treatments/components/FeaturedTreatmentCard';
import { getFeaturedTreatmentsPageDataAttribute } from '../../../sanity/dataAttributes';
import type { FeaturedTreatmentCardContent } from '../../../sanity/types';
import { getFeaturedTreatmentDetailPath } from '../treatmentLinks';

interface RelatedTreatmentsSectionProps {
  cards: FeaturedTreatmentCardContent[];
  currentSlug: string;
}

const sectionBackgrounds: Record<string, string> = {
  body: '#fdfaf6',
  eye: '#fdfaf6',
  laser: '#f2f7f5',
  decoction: '#f2f7f5',
};

const headingAccents: Record<string, string> = {
  body: '#b87d3a',
  eye: '#b87d3a',
  laser: '#5a7a6e',
  decoction: '#5a7a6e',
};

export default function RelatedTreatmentsSection({ cards, currentSlug }: RelatedTreatmentsSectionProps) {
  const displayTreatments = cards.map((card, index) => ({ card, index }));
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayTreatments.map(({ card: item, index }) => {
            const path = getFeaturedTreatmentDetailPath(item);
            const hasDetail = Boolean(path);

            return (
              <div
                key={item._key || item.detailSlug || index}
                data-sanity={getFeaturedTreatmentsPageDataAttribute(
                  item._key ? `cards[_key=="${item._key}"].title` : `cards[${index}].title`,
                )}
                data-sanity-edit-group
                data-sanity-edit-target
              >
                <FeaturedTreatmentCard
                  category={{
                    treatmentKey: item.treatmentKey,
                    title: item.title,
                    englishTitle: item.englishTitle,
                    icon: item.icon,
                    color: item.color,
                    treatments: [
                      {
                        title: item.treatmentTitle,
                        description: item.description,
                        tags: item.tags,
                      },
                    ],
                  }}
                  hasDetail={hasDetail}
                  detailPath={path}
                  iconDataAttribute={getFeaturedTreatmentsPageDataAttribute(
                    item._key ? `cards[_key=="${item._key}"].icon` : `cards[${index}].icon`,
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
