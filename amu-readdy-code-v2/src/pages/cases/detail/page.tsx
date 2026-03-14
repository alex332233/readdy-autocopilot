import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import CTASection from '../components/CTASection';
import { casesData } from '../../../mocks/cases';

const cardImages: Record<number, string> = {
  1: 'https://readdy.ai/api/search-image?query=peaceful%20bedroom%20scene%20with%20soft%20warm%20lighting%20traditional%20Chinese%20medicine%20herbs%20on%20bedside%20table%20calm%20serene%20atmosphere%20minimal%20clean%20background%20neutral%20tones&width=1200&height=500&seq=blog1cover&orientation=landscape',
  2: 'https://readdy.ai/api/search-image?query=traditional%20Chinese%20medicine%20herbs%20and%20acupuncture%20needles%20arranged%20neatly%20on%20clean%20white%20surface%20warm%20natural%20lighting%20minimal%20aesthetic%20background&width=1200&height=500&seq=blog2cover&orientation=landscape',
  3: 'https://readdy.ai/api/search-image?query=delicate%20pink%20cherry%20blossom%20flowers%20soft%20bokeh%20background%20warm%20pastel%20tones%20hopeful%20and%20gentle%20atmosphere%20minimal%20clean%20style&width=1200&height=500&seq=blog3cover&orientation=landscape',
  4: 'https://readdy.ai/api/search-image?query=soft%20morning%20light%20through%20window%20with%20green%20plant%20on%20windowsill%20calm%20hopeful%20atmosphere%20warm%20neutral%20tones%20minimal%20clean%20background&width=1200&height=500&seq=blog4cover&orientation=landscape',
  5: 'https://readdy.ai/api/search-image?query=fresh%20herbal%20tea%20in%20ceramic%20cup%20with%20dried%20herbs%20scattered%20around%20warm%20natural%20light%20wooden%20table%20minimal%20clean%20background%20wellness%20theme&width=1200&height=500&seq=blog5cover&orientation=landscape',
};

const dateMap: Record<number, string> = {
  1: 'January 4, 2023',
  2: 'January 4, 2023',
  3: 'January 4, 2023',
  4: 'January 4, 2023',
  5: 'January 4, 2023',
};

export default function CaseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const caseData = casesData.find(c => c.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  if (!caseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">找不到此案例</p>
          <button
            onClick={() => navigate('/cases')}
            className="text-sm text-[#cd9651] underline cursor-pointer"
          >
            返回案例列表
          </button>
        </div>
      </div>
    );
  }

  const img = cardImages[caseData.id];
  const date = dateMap[caseData.id];

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />

      {/* Hero 封面圖 */}
      <div className="relative w-full h-[420px] mt-24 overflow-hidden">
        <img
          src={img}
          alt={caseData.title}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-3xl mx-auto">
          <span className="inline-block text-[10px] font-semibold tracking-widest uppercase bg-[#cd9651] text-white px-3 py-1 rounded-sm mb-3">
            {caseData.category}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            {caseData.title}
          </h1>
        </div>
      </div>

      {/* 文章主體 */}
      <main className="max-w-3xl mx-auto px-6 py-14">

        {/* 返回按鈕 + meta */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/cases')}
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#cd9651] transition-colors cursor-pointer group"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-left-line text-sm group-hover:-translate-x-0.5 transition-transform"></i>
            </div>
            返回案例列表
          </button>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-gray-400 tracking-wide">{date}</span>
            <span className="text-gray-200">·</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-user-line text-[#cd9651]" style={{ fontSize: '12px' }}></i>
              </div>
              <span className="text-[11px] text-[#cd9651] font-medium tracking-wide">{caseData.doctor}</span>
            </div>
          </div>
        </div>

        {/* 描述 */}
        <p className="text-sm text-gray-500 leading-relaxed mb-10 border-l-2 border-[#cd9651]/30 pl-4">
          {caseData.description}
        </p>

        {/* 治療前後 */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {/* 治療前 */}
          <div className="bg-[#fdf8f8] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-300 flex-shrink-0"></span>
              <span className="text-sm font-bold text-gray-700 tracking-widest">治療前症狀</span>
            </div>
            <ul className="space-y-2.5">
              {caseData.before.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-subtract-line text-red-300 text-sm"></i>
                  </div>
                  <span className="text-xs text-gray-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 治療後 */}
          <div className="bg-[#f7fdf9] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
              <span className="text-sm font-bold text-gray-700 tracking-widest">治療後成果</span>
            </div>
            <div className="space-y-4">
              {caseData.after.phases.map((phase, idx) => (
                <div key={idx}>
                  <span className="text-xs text-emerald-600 font-semibold mb-2 block">{phase.period}</span>
                  <ul className="space-y-1.5">
                    {phase.improvements.map((item, impIdx) => (
                      <li key={impIdx} className="flex items-start gap-2">
                        <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <i className="ri-check-line text-emerald-400 text-sm"></i>
                        </div>
                        <span className="text-xs text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 醫師總結 */}
        <div className="flex items-start gap-3 mb-10 bg-[#faf6f0] rounded-xl p-6">
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
            <i className="ri-double-quotes-l text-[#cd9651] text-xl"></i>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed italic">{caseData.conclusion}</p>
        </div>

        {/* 貼心小提醒 / 醫學小知識 */}
        {(caseData.tips || caseData.medicalInfo) && (
          <div className="border border-stone-100 rounded-xl p-6 mb-10">
            <p className="text-xs font-semibold text-[#cd9651] tracking-widest mb-3 uppercase">
              {caseData.tips?.title || caseData.medicalInfo?.title}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              {caseData.tips?.content || caseData.medicalInfo?.content}
            </p>
          </div>
        )}

        {/* 延伸閱讀 */}
        {caseData.references && caseData.references.length > 0 && (
          <div className="border-t border-gray-100 pt-6 mb-8">
            <p className="text-xs font-semibold text-gray-300 tracking-widest mb-3 uppercase">延伸閱讀</p>
            <div className="flex flex-col gap-2">
              {caseData.references.map((ref, idx) => (
                <a
                  key={idx}
                  href={ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#cd9651] transition-colors cursor-pointer"
                >
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <i className="ri-link text-xs"></i>
                  </div>
                  <span className="underline underline-offset-2 break-all">{ref}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* 標籤 */}
        <div className="flex flex-wrap gap-2 mb-8">
          {caseData.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] text-gray-400 tracking-wide bg-gray-50 px-2.5 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Facebook 連結 */}
        <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
          <button
            onClick={() => navigate('/cases')}
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#cd9651] transition-colors cursor-pointer group"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-left-line text-sm group-hover:-translate-x-0.5 transition-transform"></i>
            </div>
            返回案例列表
          </button>
          <a
            href={caseData.fbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#1877F2] transition-colors cursor-pointer"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-facebook-fill text-base"></i>
            </div>
            查看 Facebook 原文
          </a>
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
