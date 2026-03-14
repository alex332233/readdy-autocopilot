import FadeIn from '../../../components/base/FadeIn';

export default function TeamSection() {
  return (
    <section id="team" className="py-32 bg-[#f9f7f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* 左側文字 */}
          <div className="lg:col-span-4">
            <FadeIn direction="up" delay={0}>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-[#cd9651]">醫師陣容</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                以仁心仁術，守護您與家人的健康
              </p>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                艾苜中醫診所匯聚三位專業中醫師，各具深厚學術背景與豐富臨床經驗，涵蓋內科、婦科、皮膚科、針灸及中醫美容等多元領域，為每位患者提供最適切的個人化調理方案。
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { name: '李俊廷 醫師', title: '內科・針灸・自律神經' },
                  { name: '歐陽汝亭 醫師', title: '皮膚科・婦科・中醫美容' },
                  { name: '吳雅筠 醫師', title: '婦科・兒科・物理治療' },
                ].map((doc, i) => (
                  <FadeIn key={i} direction="up" delay={200 + i * 100}>
                    <div className="flex items-center gap-3 py-3 border-b border-gray-200 last:border-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#cd9651] flex-shrink-0"></div>
                      <div>
                        <span className="text-sm font-semibold text-gray-800">{doc.name}</span>
                        <span className="text-xs text-gray-400 ml-2">{doc.title}</span>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* 右側團體照 */}
          <div className="lg:col-span-8">
            <FadeIn direction="up" delay={150}>
              <div className="relative overflow-hidden rounded-2xl shadow-xl w-full h-[520px]">
                <img
                  src="https://readdy.ai/api/search-image?query=Three%20professional%20Chinese%20medicine%20doctors%20group%20portrait%20in%20white%20medical%20coats%20standing%20together%20in%20a%20modern%20bright%20clinic%20interior%20warm%20natural%20lighting%20elegant%20minimalist%20background%20all%20smiling%20confidently%20high%20quality%20professional%20medical%20team%20photography%20warm%20tones&width=900&height=600&seq=team-group-photo-clinic&orientation=landscape"
                  alt="艾苜中醫診所醫師團隊"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                />
                {/* 底部漸層名牌 */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-8 py-6">
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
