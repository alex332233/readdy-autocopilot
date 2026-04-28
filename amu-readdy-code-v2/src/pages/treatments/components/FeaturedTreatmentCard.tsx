import { useNavigate } from 'react-router-dom';

interface FeaturedTreatmentCardProps {
  category: {
    treatmentKey?: string;
    title: string;
    englishTitle: string;
    icon: string;
    color: string;
    treatments: {
      title: string;
      description: string;
      tags: string[];
    }[];
  };
  hasDetail?: boolean;
  detailPath?: string;
  iconDataAttribute?: string;
}

const forestToneColors: Record<string, string> = {
  laser: '#5a8a6a',
  decoction: '#4a7a5c',
};

const forestToneTitles = new Set(['光能・修復', '深癒・淬鍊']);

export default function FeaturedTreatmentCard({
  category,
  hasDetail,
  detailPath,
  iconDataAttribute,
}: FeaturedTreatmentCardProps) {
  const navigate = useNavigate();
  const treatment = category.treatments[0];
  const treatmentColor =
    (category.treatmentKey && forestToneColors[category.treatmentKey]) ||
    category.color;
  const isForestTone =
    (category.treatmentKey && category.treatmentKey in forestToneColors) ||
    forestToneTitles.has(category.title);
  const titleColor = isForestTone ? treatmentColor : '#2f2a25';
  const cardBackground = isForestTone ? '#fcfaf6' : '#ffffff';

  const handleCardClick = () => {
    if (hasDetail && detailPath) {
      navigate(detailPath);
    }
  };

  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-[28px] transition-all duration-500"
      style={{
        backgroundColor: cardBackground,
        boxShadow: '0 1px 8px 0 rgba(205,150,81,0.06)',
        border: '1px solid #e8dece',
      }}
      onClick={handleCardClick}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 24px 0 rgba(205,150,81,0.13)`;
        (e.currentTarget as HTMLDivElement).style.border = `1px solid ${treatmentColor}70`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 8px 0 rgba(205,150,81,0.06)';
        (e.currentTarget as HTMLDivElement).style.border = '1px solid #e8dece';
      }}
    >
      <div className="h-1 w-full" style={{ backgroundColor: `${treatmentColor}85` }} />

      <div className="flex h-full flex-col p-7">
        <div className="flex items-center gap-4 mb-5">
          <div
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${treatmentColor}15`, border: `1.5px solid ${treatmentColor}55` }}
          >
            <i
              className={`${category.icon} text-xl`}
              style={{ color: treatmentColor }}
              data-sanity={iconDataAttribute}
            ></i>
          </div>
          <div>
            <h3
              className="text-xl font-bold leading-tight"
              style={{ fontFamily: "'Noto Serif TC', serif", color: titleColor }}
            >
              {category.title}
            </h3>
            <p className="text-xs tracking-widest mt-0.5" style={{ color: treatmentColor, opacity: 0.8 }}>
              {category.englishTitle}
            </p>
          </div>
        </div>

        <div className="w-full h-px mb-5" style={{ background: `linear-gradient(to right, ${treatmentColor}40, transparent)` }} />

        <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">
          {treatment.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {treatment.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-medium tracking-wide"
              style={{
                backgroundColor: `${treatmentColor}15`,
                color: treatmentColor,
                border: `1px solid ${treatmentColor}40`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {hasDetail && detailPath && (
          <div
            className="flex items-center gap-2 text-sm font-medium pt-1 w-fit transition-all duration-300 group-hover:scale-105 origin-left"
            style={{ color: treatmentColor }}
          >
            <span
              className="relative pb-0.5"
              style={{
                backgroundImage: `linear-gradient(${treatmentColor}, ${treatmentColor})`,
                backgroundSize: '0% 1px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left bottom',
                transition: 'background-size 0.35s ease',
              }}
            >
              了解詳細介紹
            </span>
            <i className="ri-arrow-right-line text-base transition-transform duration-300 group-hover:translate-x-1"></i>
          </div>
        )}
      </div>
    </div>
  );
}
