import { useNavigate } from 'react-router-dom';

interface BlogCardProps {
  caseData: {
    id: number;
    title: string;
    category: string;
    tags: string[];
    doctor: string;
    fbLink: string;
    description: string;
    before: { title: string; items: string[] };
    after: { title: string; phases: { period: string; improvements: string[] }[] };
    conclusion: string;
    tips?: { title: string; content: string };
    medicalInfo?: { title: string; content: string };
    references?: string[];
  };
}

const cardImages: Record<number, string> = {
  1: 'https://readdy.ai/api/search-image?query=peaceful%20bedroom%20scene%20with%20soft%20warm%20lighting%20traditional%20Chinese%20medicine%20herbs%20on%20bedside%20table%20calm%20serene%20atmosphere%20minimal%20clean%20background%20neutral%20tones&width=600&height=400&seq=blog1cover&orientation=landscape',
  2: 'https://readdy.ai/api/search-image?query=traditional%20Chinese%20medicine%20herbs%20and%20acupuncture%20needles%20arranged%20neatly%20on%20clean%20white%20surface%20warm%20natural%20lighting%20minimal%20aesthetic%20background&width=600&height=400&seq=blog2cover&orientation=landscape',
  3: 'https://readdy.ai/api/search-image?query=delicate%20pink%20cherry%20blossom%20flowers%20soft%20bokeh%20background%20warm%20pastel%20tones%20hopeful%20and%20gentle%20atmosphere%20minimal%20clean%20style&width=600&height=400&seq=blog3cover&orientation=landscape',
  4: 'https://readdy.ai/api/search-image?query=soft%20morning%20light%20through%20window%20with%20green%20plant%20on%20windowsill%20calm%20hopeful%20atmosphere%20warm%20neutral%20tones%20minimal%20clean%20background&width=600&height=400&seq=blog4cover&orientation=landscape',
  5: 'https://readdy.ai/api/search-image?query=fresh%20herbal%20tea%20in%20ceramic%20cup%20with%20dried%20herbs%20scattered%20around%20warm%20natural%20light%20wooden%20table%20minimal%20clean%20background%20wellness%20theme&width=600&height=400&seq=blog5cover&orientation=landscape',
};

const dateMap: Record<number, string> = {
  1: 'January 4, 2023',
  2: 'January 4, 2023',
  3: 'January 4, 2023',
  4: 'January 4, 2023',
  5: 'January 4, 2023',
};

export default function BlogCard({ caseData }: BlogCardProps) {
  const navigate = useNavigate();
  const img = cardImages[caseData.id];
  const date = dateMap[caseData.id];

  return (
    <article
      className="bg-white group cursor-pointer"
      onClick={() => navigate(`/cases/${caseData.id}`)}
    >
      {/* 封面圖 */}
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={img}
          alt={caseData.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-widest uppercase bg-white/90 text-[#cd9651] px-2.5 py-1 rounded-sm">
          {caseData.category}
        </span>
      </div>

      {/* 內容 */}
      <div className="pt-4 pb-6 px-1">
        <div className="flex items-center gap-3 mb-2">
          <p className="text-[11px] text-gray-400 tracking-wide">{date}</p>
          <span className="text-gray-300">·</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-user-line text-[#cd9651]" style={{ fontSize: '12px' }}></i>
            </div>
            <span className="text-[11px] text-[#cd9651] font-medium tracking-wide">{caseData.doctor}</span>
          </div>
        </div>
        <h3 className="text-sm font-bold text-gray-800 leading-snug mb-2 group-hover:text-[#cd9651] transition-colors line-clamp-2">
          {caseData.title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-4">
          {caseData.description}
        </p>
        <span className="text-[11px] font-semibold text-gray-700 tracking-widest uppercase border-b border-gray-700 pb-0.5 group-hover:text-[#cd9651] group-hover:border-[#cd9651] transition-colors">
          READ MORE
        </span>
      </div>
    </article>
  );
}
