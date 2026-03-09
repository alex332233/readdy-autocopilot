import { useNavigate } from 'react-router-dom';

interface FeaturedTreatmentCardProps {
  category: {
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
}

export default function FeaturedTreatmentCard({ category, hasDetail, detailPath }: FeaturedTreatmentCardProps) {
  const navigate = useNavigate();
  const treatment = category.treatments[0];

  const handleCardClick = () => {
    if (hasDetail && detailPath) {
      navigate(detailPath);
    }
  };

  return (
    <div
      className="group bg-white rounded-xl overflow-hidden transition-all duration-500 cursor-pointer"
      style={{
        boxShadow: '0 1px 8px 0 rgba(205,150,81,0.06)',
        border: '1px solid #e8dece',
      }}
      onClick={handleCardClick}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 24px 0 rgba(205,150,81,0.13)`;
        (e.currentTarget as HTMLDivElement).style.border = `1px solid ${category.color}70`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 8px 0 rgba(205,150,81,0.06)';
        (e.currentTarget as HTMLDivElement).style.border = '1px solid #e8dece';
      }}
    >
      {/* 頂部細線 */}
      <div className="h-px w-full" style={{ backgroundColor: `${category.color}60` }} />

      <div className="p-7 flex flex-col h-full">
        {/* 圖示 + 標題 */}
        <div className="flex items-center gap-4 mb-5">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${category.color}18`, border: `1.5px solid ${category.color}55` }}
          >
            <i className={`${category.icon} text-xl`} style={{ color: category.color }}></i>
          </div>
          <div>
            <h3
              className="text-xl font-bold text-gray-800 leading-tight"
              style={{ fontFamily: "'Noto Serif TC', serif" }}
            >
              {category.title}
            </h3>
            <p className="text-xs tracking-widest mt-0.5" style={{ color: category.color, opacity: 0.8 }}>
              {category.englishTitle}
            </p>
          </div>
        </div>

        {/* 細分隔線 */}
        <div className="w-full h-px mb-5" style={{ background: `linear-gradient(to right, ${category.color}40, transparent)` }} />

        <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">
          {treatment.description}
        </p>

        {/* 標籤 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {treatment.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-medium tracking-wide"
              style={{
                backgroundColor: `${category.color}15`,
                color: category.color,
                border: `1px solid ${category.color}40`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 查看詳細介紹 — 質感文字連結，滑入放大 */}
        {hasDetail && detailPath && (
          <div
            className="flex items-center gap-2 text-sm font-medium pt-1 w-fit transition-all duration-300 group-hover:scale-105 origin-left"
            style={{ color: category.color }}
          >
            <span
              className="relative pb-0.5"
              style={{
                backgroundImage: `linear-gradient(${category.color}, ${category.color})`,
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
