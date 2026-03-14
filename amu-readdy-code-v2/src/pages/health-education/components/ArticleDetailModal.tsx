
import { useEffect } from 'react';
import { HealthArticle } from '../../../mocks/health-education';

interface ArticleDetailModalProps {
  article: HealthArticle;
  onClose: () => void;
}

export default function ArticleDetailModal({ article, onClose }: ArticleDetailModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-8 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-[#cd9651] font-semibold tracking-widest border-b border-[#cd9651] pb-0.5">
              {article.category}
            </span>
            <span className="text-gray-200">›</span>
            <span className="text-xs text-gray-400">{article.subcategory}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors cursor-pointer rounded-full hover:bg-gray-100 flex-shrink-0"
          >
            <i className="ri-close-line text-lg"></i>
          </button>
        </div>

        <div className="px-8 py-7 space-y-6">
          {/* 封面圖 */}
          <div className="w-full h-56 overflow-hidden rounded-xl">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* 標題與 meta */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3">{article.title}</h2>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-user-line text-[#cd9651]" style={{ fontSize: '12px' }}></i>
                </div>
                <span className="text-xs text-[#cd9651] font-medium">{article.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-calendar-line text-gray-400" style={{ fontSize: '11px' }}></i>
                </div>
                <span className="text-xs text-gray-400">更新：{article.updatedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-eye-line text-gray-400" style={{ fontSize: '11px' }}></i>
                </div>
                <span className="text-xs text-gray-400">{article.views.toLocaleString()} 次閱讀</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-time-line text-gray-400" style={{ fontSize: '11px' }}></i>
                </div>
                <span className="text-xs text-gray-400">{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* 摘要 */}
          <p className="text-sm text-gray-500 leading-relaxed border-l-2 border-[#cd9651] pl-4 italic">
            {article.summary}
          </p>

          {/* 文章內容 */}
          <div className="space-y-6">
            {article.content.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cd9651] flex-shrink-0"></span>
                  {section.heading}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-3.5">{section.text}</p>
                {section.image && (
                  <div className="mt-3 w-full h-44 overflow-hidden rounded-lg">
                    <img
                      src={section.image}
                      alt={section.heading}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 貼心小提醒 */}
          {article.tips && (
            <div className="bg-[#faf6f0] rounded-xl p-5 border-l-4 border-[#cd9651]">
              <p className="text-xs font-bold text-[#cd9651] tracking-widest mb-2 uppercase">
                {article.tips.title}
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">{article.tips.content}</p>
            </div>
          )}

          {/* 延伸閱讀 */}
          {article.references && article.references.length > 0 && (
            <div className="border-t border-gray-100 pt-5">
              <p className="text-xs text-gray-400 tracking-widest mb-3 font-semibold">延伸閱讀</p>
              <div className="space-y-2">
                {article.references.map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#cd9651] transition-colors cursor-pointer group"
                  >
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <i className="ri-external-link-line text-xs group-hover:text-[#cd9651]"></i>
                    </div>
                    <span className="underline underline-offset-2">{ref.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 標籤 */}
          <div className="flex flex-wrap gap-1.5 pt-1 border-t border-gray-100">
            {article.tags.map((tag, idx) => (
              <span key={idx} className="text-[11px] text-gray-300 tracking-wide">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
