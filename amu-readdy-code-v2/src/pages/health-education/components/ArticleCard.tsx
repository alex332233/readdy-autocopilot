import { useNavigate } from 'react-router-dom';
import FadeIn from '../../../components/base/FadeIn';
import { HealthArticle } from '../../../mocks/health-education';

interface ArticleCardProps {
  article: HealthArticle;
  index?: number;
}

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  const navigate = useNavigate();

  return (
    <FadeIn delay={index * 80} direction="up" duration={1400}>
      <article className="bg-white group cursor-pointer" onClick={() => navigate(`/health-education/${article.id}`)}>
        {/* 封面圖 */}
        <div className="relative w-full h-52 overflow-hidden rounded-lg">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-widest uppercase bg-white/90 text-[#cd9651] px-2.5 py-1 rounded-sm">
            {article.subcategory}
          </span>
        </div>

        {/* 內容 */}
        <div className="pt-4 pb-6 px-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <p className="text-[11px] text-gray-400 tracking-wide">{article.updatedDate} 更新</p>
            <span className="text-gray-300">·</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-eye-line text-gray-400" style={{ fontSize: '11px' }}></i>
              </div>
              <span className="text-[11px] text-gray-400">{article.views.toLocaleString()}</span>
            </div>
            <span className="text-gray-300">·</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-time-line text-gray-400" style={{ fontSize: '11px' }}></i>
              </div>
              <span className="text-[11px] text-gray-400">{article.readTime}</span>
            </div>
          </div>
          <h3 className="text-sm font-bold text-gray-800 leading-snug mb-2 group-hover:text-[#cd9651] transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-4">
            {article.summary}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-user-line text-[#cd9651]" style={{ fontSize: '11px' }}></i>
              </div>
              <span className="text-[11px] text-[#cd9651] font-medium tracking-wide">{article.author}</span>
            </div>
            <span className="text-[11px] font-semibold text-gray-700 tracking-widest uppercase border-b border-gray-700 pb-0.5 group-hover:text-[#cd9651] group-hover:border-[#cd9651] transition-colors">
              READ MORE
            </span>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}