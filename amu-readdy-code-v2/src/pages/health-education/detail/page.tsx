import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import { healthEducationData } from '../../../mocks/health-education';

export default function HealthEducationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const article = healthEducationData.find(a => a.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">找不到此文章</p>
          <button
            onClick={() => navigate('/health-education')}
            className="text-sm text-[#cd9651] underline cursor-pointer"
          >
            返回健康教育列表
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />

      {/* Hero 封面圖 */}
      <div className="relative w-full h-[420px] mt-24 overflow-hidden">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-3xl mx-auto">
          <span className="inline-block text-[10px] font-semibold tracking-widest uppercase bg-[#cd9651] text-white px-3 py-1 rounded-sm mb-3">
            {article.subcategory}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            {article.title}
          </h1>
        </div>
      </div>

      {/* 文章主體 */}
      <main className="max-w-3xl mx-auto px-6 py-14">

        {/* 返回按鈕 + meta */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/health-education')}
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#cd9651] transition-colors cursor-pointer group whitespace-nowrap"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-left-line text-sm group-hover:-translate-x-0.5 transition-transform"></i>
            </div>
            返回健康教育列表
          </button>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-gray-400 tracking-wide">{article.updatedDate}</span>
            <span className="text-gray-200">·</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-user-line text-[#cd9651]" style={{ fontSize: '12px' }}></i>
              </div>
              <span className="text-[11px] text-[#cd9651] font-medium tracking-wide">{article.author}</span>
            </div>
          </div>
        </div>

        {/* 文章 meta 資訊 */}
        <div className="flex items-center gap-4 mb-8 text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-eye-line" style={{ fontSize: '13px' }}></i>
            </div>
            <span>{article.views.toLocaleString()} 次閱讀</span>
          </div>
          <span className="text-gray-200">·</span>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-time-line" style={{ fontSize: '13px' }}></i>
            </div>
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* 摘要 */}
        <p className="text-sm text-gray-500 leading-relaxed mb-10 border-l-2 border-[#cd9651]/30 pl-4">
          {article.summary}
        </p>

        {/* 文章內容段落 */}
        {article.content.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wide">
              {section.heading}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {section.text}
            </p>
            {section.image && (
              <div className="w-full h-[420px] rounded-xl overflow-hidden mb-4">
                <img
                  src={section.image}
                  alt={section.heading}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}
          </div>
        ))}

        {/* 貼心小提醒 */}
        {article.tips && (
          <div className="border border-stone-100 rounded-xl p-6 mb-10">
            <p className="text-xs font-semibold text-[#cd9651] tracking-widest mb-3 uppercase">
              {article.tips.title}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              {article.tips.content}
            </p>
          </div>
        )}

        {/* 延伸閱讀 */}
        {article.references && article.references.length > 0 && (
          <div className="border-t border-gray-100 pt-6 mb-8">
            <p className="text-xs font-semibold text-gray-300 tracking-widest mb-3 uppercase">延伸閱讀</p>
            <div className="flex flex-col gap-2">
              {article.references.map((ref, idx) => (
                <a
                  key={idx}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#cd9651] transition-colors cursor-pointer"
                >
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <i className="ri-link text-xs"></i>
                  </div>
                  <span className="underline underline-offset-2 break-all">{ref.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* 標籤 */}
        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] text-gray-400 tracking-wide bg-gray-50 px-2.5 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* 返回按鈕 */}
        <div className="border-t border-gray-100 pt-6">
          <button
            onClick={() => navigate('/health-education')}
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#cd9651] transition-colors cursor-pointer group whitespace-nowrap"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-left-line text-sm group-hover:-translate-x-0.5 transition-transform"></i>
            </div>
            返回健康教育列表
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}