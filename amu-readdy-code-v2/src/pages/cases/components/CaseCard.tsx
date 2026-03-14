interface Phase {
  period: string;
  improvements: string[];
}

interface CaseCardProps {
  caseData: {
    id: number;
    title: string;
    category: string;
    tags: string[];
    doctor: string;
    fbLink: string;
    description: string;
    before: {
      title: string;
      items: string[];
    };
    after: {
      title: string;
      phases: Phase[];
    };
    conclusion: string;
    tips?: {
      title: string;
      content: string;
    };
    medicalInfo?: {
      title: string;
      content: string;
    };
    references?: string[];
  };
  index: number;
}

const beforeAfterImages: Record<number, { before: string; after: string }> = {
  1: {
    before: 'https://readdy.ai/api/search-image?query=elderly%20woman%20lying%20in%20bed%20at%20night%20unable%20to%20sleep%20looking%20tired%20and%20exhausted%20dark%20room%20soft%20lighting%20simple%20clean%20background%20medical%20illustration%20style&width=480&height=320&seq=case1before&orientation=landscape',
    after: 'https://readdy.ai/api/search-image?query=elderly%20woman%20sleeping%20peacefully%20in%20bed%20calm%20expression%20soft%20morning%20light%20coming%20through%20window%20rested%20and%20relaxed%20simple%20clean%20background%20warm%20tones&width=480&height=320&seq=case1after&orientation=landscape',
  },
  2: {
    before: 'https://readdy.ai/api/search-image?query=young%20man%20looking%20dizzy%20and%20unwell%20holding%20glucose%20meter%20showing%20high%20blood%20sugar%20reading%20worried%20expression%20simple%20clean%20white%20background%20medical%20style&width=480&height=320&seq=case2before&orientation=landscape',
    after: 'https://readdy.ai/api/search-image?query=young%20man%20smiling%20healthy%20energetic%20holding%20glucose%20meter%20showing%20normal%20blood%20sugar%20reading%20happy%20expression%20simple%20clean%20white%20background%20warm%20tones&width=480&height=320&seq=case2after&orientation=landscape',
  },
  3: {
    before: 'https://readdy.ai/api/search-image?query=woman%20in%20her%20late%20thirties%20looking%20sad%20and%20worried%20sitting%20alone%20holding%20negative%20pregnancy%20test%20soft%20neutral%20background%20simple%20clean%20style&width=480&height=320&seq=case3before&orientation=landscape',
    after: 'https://readdy.ai/api/search-image?query=happy%20pregnant%20woman%20in%20her%20late%20thirties%20smiling%20holding%20positive%20pregnancy%20test%20joyful%20expression%20soft%20warm%20background%20simple%20clean%20style&width=480&height=320&seq=case3after&orientation=landscape',
  },
  4: {
    before: 'https://readdy.ai/api/search-image?query=woman%20in%20her%20thirties%20looking%20tired%20and%20stressed%20difficulty%20sleeping%20worried%20about%20fertility%20sitting%20on%20bed%20soft%20neutral%20background%20simple%20clean%20style&width=480&height=320&seq=case4before&orientation=landscape',
    after: 'https://readdy.ai/api/search-image?query=happy%20pregnant%20woman%20in%20her%20thirties%20smiling%20touching%20baby%20bump%20third%20trimester%20joyful%20relaxed%20expression%20soft%20warm%20background%20simple%20clean%20style&width=480&height=320&seq=case4after&orientation=landscape',
  },
  5: {
    before: 'https://readdy.ai/api/search-image?query=young%20woman%20looking%20uncomfortable%20and%20in%20pain%20holding%20lower%20abdomen%20worried%20expression%20sitting%20on%20couch%20soft%20neutral%20background%20simple%20clean%20style&width=480&height=320&seq=case5before&orientation=landscape',
    after: 'https://readdy.ai/api/search-image?query=young%20woman%20smiling%20healthy%20and%20comfortable%20relaxed%20posture%20happy%20expression%20sitting%20on%20couch%20soft%20warm%20background%20simple%20clean%20style%20recovered&width=480&height=320&seq=case5after&orientation=landscape',
  },
};

export default function CaseCard({ caseData }: CaseCardProps) {
  const images = beforeAfterImages[caseData.id];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* 頂部標題 */}
      <div className="px-8 pt-8 pb-6 border-b border-gray-50">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-[#cd9651] font-medium tracking-widest uppercase border-b border-[#cd9651] pb-0.5">
                {caseData.category}
              </span>
              <span className="text-gray-200">·</span>
              <span className="text-xs text-gray-400">{caseData.doctor}</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 leading-snug">{caseData.title}</h3>
          </div>
          <a
            href={caseData.fbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-[#1877F2] transition-colors cursor-pointer flex-shrink-0 mt-1"
          >
            <i className="ri-facebook-fill text-lg"></i>
          </a>
        </div>
      </div>

      {/* 主要內容 */}
      <div className="px-8 py-7 space-y-7">

        {/* 案例描述 */}
        <p className="text-sm text-gray-500 leading-relaxed">{caseData.description}</p>

        {/* 治療前後對比 */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* 治療前 */}
          <div className="bg-[#fdf8f8] rounded-xl overflow-hidden">
            {images && (
              <div className="relative w-full h-64">
                <img
                  src={images.before}
                  alt="治療前"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-sm font-semibold text-white bg-red-400/80 px-3 py-1.5 rounded-full tracking-widest">
                  治療前
                </span>
              </div>
            )}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-red-300 flex-shrink-0"></span>
                <span className="text-xl font-bold text-gray-700 tracking-widest">治療前症狀</span>
              </div>
              <ul className="space-y-2.5">
                {caseData.before.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <i className="ri-subtract-line text-red-300 text-sm mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 治療後 */}
          <div className="bg-[#f7fdf9] rounded-xl overflow-hidden">
            {images && (
              <div className="relative w-full h-64">
                <img
                  src={images.after}
                  alt="治療後"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-sm font-semibold text-white bg-emerald-500/80 px-3 py-1.5 rounded-full tracking-widest">
                  治療後
                </span>
              </div>
            )}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                <span className="text-xl font-bold text-gray-700 tracking-widest">治療後成果</span>
              </div>
              <div className="space-y-4">
                {caseData.after.phases.map((phase, idx) => (
                  <div key={idx}>
                    <span className="text-xs text-emerald-600 font-medium mb-2 block">{phase.period}</span>
                    <ul className="space-y-1.5">
                      {phase.improvements.map((item, impIdx) => (
                        <li key={impIdx} className="flex items-start gap-2.5">
                          <i className="ri-check-line text-emerald-400 text-sm mt-0.5 flex-shrink-0"></i>
                          <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 醫師總結 */}
        <div className="flex items-start gap-3 pt-1">
          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
            <i className="ri-double-quotes-l text-[#cd9651] text-base"></i>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed italic">{caseData.conclusion}</p>
        </div>

        {/* 貼心小提醒 / 醫學小知識 */}
        {(caseData.tips || caseData.medicalInfo) && (
          <div className="border-t border-gray-50 pt-5">
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
          <div className="border-t border-gray-50 pt-5 flex flex-wrap gap-3">
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
      </div>
    </div>
  );
}
