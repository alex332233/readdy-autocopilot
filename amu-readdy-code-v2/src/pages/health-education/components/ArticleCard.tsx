import { useNavigate } from 'react-router-dom';
import FadeIn from '../../../components/base/FadeIn';
import {getHealthEducationArticleDocumentDataAttribute} from '../../../sanity/dataAttributes';
import {getSanityImageUrl} from '../../../sanity/imageUrl';
import type { HealthEducationArticleContent } from '../../../sanity/types';

interface ArticleCardProps {
  article: HealthEducationArticleContent;
  index?: number;
}

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  const navigate = useNavigate();
  const articlePath = article.slug || article.documentId || String(article.articleId);
  const getDataAttribute = (path: string) =>
    article.documentId
      ? getHealthEducationArticleDocumentDataAttribute(article.documentId, path)
      : undefined;

  return (
    <FadeIn delay={index * 80} direction="up" duration={1400}>
      <article className="bg-white group cursor-pointer" onClick={() => navigate(`/health-education/${encodeURIComponent(articlePath)}`)}>
        <div className="relative w-full h-52 overflow-hidden rounded-lg">
          <div
            className="w-full h-full"
            data-sanity-edit-group
            data-sanity-edit-target
          >
            <img
              src={getSanityImageUrl(article.coverImage, {width: 768, height: 416, fit: 'crop', quality: 85})}
              alt={article.coverImage.alt || article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-sanity={getDataAttribute('coverImage')}
            />
          </div>
          <span
            className="absolute top-3 right-3 text-[10px] font-semibold tracking-widest uppercase bg-white/90 text-[#cd9651] px-2.5 py-1 rounded-sm"
            data-sanity={getDataAttribute('subcategory')}
          >
            {article.subcategory}
          </span>
        </div>

        <div className="pt-4 pb-6 px-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <p className="text-[11px] text-gray-400 tracking-wide" data-sanity={getDataAttribute('updatedDate')}>
              {article.updatedDate} 更新
            </p>
            <span className="text-gray-300">·</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-time-line text-gray-400" style={{ fontSize: '11px' }}></i>
              </div>
              <span className="text-[11px] text-gray-400" data-sanity={getDataAttribute('readTime')}>
                {article.readTime}
              </span>
            </div>
          </div>
          <h3 className="text-sm font-bold text-gray-800 leading-snug mb-2 group-hover:text-[#cd9651] transition-colors line-clamp-2" data-sanity={getDataAttribute('title')}>
            {article.title}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-4" data-sanity={getDataAttribute('summary')}>
            {article.summary}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-user-line text-[#cd9651]" style={{ fontSize: '11px' }}></i>
              </div>
              <span className="text-[11px] text-[#cd9651] font-medium tracking-wide" data-sanity={getDataAttribute('author')}>
                {article.author}
              </span>
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
