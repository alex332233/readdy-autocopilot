import { useNavigate } from 'react-router-dom';
import type { CaseArticleContent } from '../../../sanity/types';
import {
  getCaseArticleDataAttribute,
  getCaseArticleDocumentDataAttribute,
} from '../../../sanity/dataAttributes';
import {getSanityImageUrl} from '../../../sanity/imageUrl';

interface BlogCardProps {
  caseData: CaseArticleContent;
}

export default function BlogCard({ caseData }: BlogCardProps) {
  const navigate = useNavigate();
  const casePath = caseData.slug || (caseData.caseId ? String(caseData.caseId) : caseData.documentId || '');
  const getDataAttribute = (path: string) =>
    caseData.documentId
      ? getCaseArticleDocumentDataAttribute(caseData.documentId, path)
      : getCaseArticleDataAttribute(caseData.caseId, path);

  return (
    <article
      className="bg-white group cursor-pointer"
      onClick={() => casePath && navigate(`/cases/${encodeURIComponent(casePath)}`)}
    >
      {/* 封面圖 */}
      <div className="relative w-full h-52 overflow-hidden" data-sanity-edit-group data-sanity-edit-target>
        <img
          src={getSanityImageUrl(caseData.coverImage, {width: 768, height: 416, fit: 'crop', quality: 85})}
          alt={caseData.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          data-sanity={getDataAttribute('coverImage')}
        />
        <span
          className="absolute top-3 right-3 text-[10px] font-semibold tracking-widest uppercase bg-white/90 text-[#cd9651] px-2.5 py-1 rounded-sm"
          data-sanity={getDataAttribute('category')}
        >
          {caseData.category}
        </span>
      </div>

      {/* 內容 */}
      <div className="pt-4 pb-6 px-1">
        <div className="flex items-center gap-3 mb-2">
          <p className="text-[11px] text-gray-400 tracking-wide" data-sanity={getDataAttribute('publishDate')}>
            {caseData.publishDate}
          </p>
          <span className="text-gray-300">·</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-user-line text-[#cd9651]" style={{ fontSize: '12px' }}></i>
            </div>
            <span className="text-[11px] text-[#cd9651] font-medium tracking-wide" data-sanity={getDataAttribute('doctor')}>
              {caseData.doctor}
            </span>
          </div>
        </div>
        <h3
          className="text-sm font-bold text-gray-800 leading-snug mb-2 group-hover:text-[#cd9651] transition-colors line-clamp-2"
          data-sanity={getDataAttribute('title')}
        >
          {caseData.title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-4" data-sanity={getDataAttribute('description')}>
          {caseData.description}
        </p>
        <span className="text-[11px] font-semibold text-gray-700 tracking-widest uppercase border-b border-gray-700 pb-0.5 group-hover:text-[#cd9651] group-hover:border-[#cd9651] transition-colors">
          READ MORE
        </span>
      </div>
    </article>
  );
}
