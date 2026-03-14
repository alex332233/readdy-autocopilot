
import { useEffect } from 'react';

interface Phase {
  period: string;
  improvements: string[];
}

interface BlogDetailModalProps {
  caseData: {
    id: number;
    title: string;
    category: string;
    tags: string[];
    doctor: string;
    fbLink: string;
    description: string;
    before: { title: string; items: string[] };
    after: { title: string; phases: Phase[] };
    conclusion: string;
    tips?: { title: string; content: string };
    medicalInfo?: { title: string; content: string };
    references?: string[];
  };
  onClose: () => void;
}

export default function BlogDetailModal({ caseData, onClose }: BlogDetailModalProps) {
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
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-8 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#cd9651] font-semibold tracking-widest uppercase border-b border-[#cd9651] pb-0.5">
              {caseData.category}
            </span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">{caseData.doctor}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors cursor-pointer rounded-full hover:bg-gray-100"
          >
            <i className="ri-close-line text-lg"></i>
          </button>
        </div>

        <div className="px-8 py-7 space-y-6">
          {/* 標題 */}
          <h2 className="text-2xl font-bold text-gray-900 leading-snug">{caseData.title}</h2>

          {/* 描述 */}
          <p className="text-sm text-gray-500 leading-relaxed">{caseData.description}</p>

          {/* 治療前後 */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* 治療前 */}
            <div className="bg-[#fdf8f8] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-300 flex-shrink-0"></span>
                <span className="text-sm font-bold text-gray-700 tracking-widest">治療前症狀</span>
              </div>
              <ul className="space-y-2">
                {caseData.before.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <i className="ri-subtract-line text-red-300 text-sm mt-0.5 flex-shrink-0"></i>
                    <span className="text-xs text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 治療後 */}
            <div className="bg-[#f7fdf9] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                <span className="text-sm font-bold text-gray-700 tracking-widest">治療後成果</span>
              </div>
              <div className="space-y-3">
                {caseData.after.phases.map((phase, idx) => (
                  <div key={idx}>
                    <span className="text-xs text-emerald-600 font-medium mb-1.5 block">{phase.period}</span>
                    <ul className="space-y-1.5">
                      {phase.improvements.map((item, impIdx) => (
                        <li key={impIdx} className="flex items-start gap-2">
                          <i className="ri-check-line text-emerald-400 text-sm mt-0.5 flex-shrink-0"></i>
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
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i className="ri-double-quotes-l text-[#cd9651] text-base"></i>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed italic">{caseData.conclusion}</p>
          </div>

          {/* 貼心小提醒 / 醫學小知識 */}
          {(caseData.tips || caseData.medicalInfo) && (
            <div className="border-t border-gray-100 pt-5">
              <p className="text-xs font-semibold text-gray-400 tracking-widest mb-2">
                {caseData.tips?.title || caseData.medicalInfo?.title}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                {caseData.tips?.content || caseData.medicalInfo?.content}
              </p>
            </div>
          )}

          {/* 延伸閱讀 */}
          {caseData.references && caseData.references.length > 0 && (
            <div className="border-t border-gray-100 pt-5 flex flex-wrap gap-3">
              <span className="text-xs text-gray-300 tracking-widest self-center">延伸閱讀</span>
              {caseData.references.map((ref, idx) => (
                <a
                  key={idx}
                  href={ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-[#cd9651] transition-colors cursor-pointer"
                >
                  <i className="ri-link text-xs"></i>
                  <span className="underline underline-offset-2 break-all">{ref}</span>
                </a>
              ))}
            </div>
          )}

          {/* 標籤 */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {caseData.tags.map((tag, idx) => (
              <span key={idx} className="text-xs text-gray-300 tracking-wide">#{tag}</span>
            ))}
          </div>

          {/* Facebook 連結 */}
          <div className="border-t border-gray-100 pt-5 flex justify-end">
            <a
              href={caseData.fbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#1877F2] transition-colors cursor-pointer"
            >
              <i className="ri-facebook-fill text-base"></i>
              <span>查看 Facebook 原文</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
