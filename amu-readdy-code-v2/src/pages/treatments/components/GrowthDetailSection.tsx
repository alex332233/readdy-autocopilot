import { growthDetailData } from '../../../mocks/treatments';

export default function GrowthDetailSection() {
  const sections = growthDetailData.sections;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8f6f1]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section 0：適合對象 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-full bg-[#a67c52] flex items-center justify-center flex-shrink-0">
              <i className={`${sections[0].icon} text-base text-white`}></i>
            </div>
            <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide">
              {sections[0].title}
            </h3>
          </div>
          <div className="pl-12">
            {/* 年紀／客群小標題 */}
            <p className="text-sm lg:text-base font-semibold text-[#a67c52] mb-3 tracking-wide">
              專為 8–16 歲生長板開放期的青少年設計
            </p>
            <p className="text-sm lg:text-base text-gray-600 leading-loose">
              {sections[0].content?.replace('專為 8-16 歲生長板開放期的青少年設計。', '').trim()}
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#a67c52]/30 to-transparent mb-16" />

        {/* Section 1：不只是身高，更是成長路上的卡關 — 左文右圖 */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border border-[#ede8df]">
          <div className="bg-white p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#a67c52] flex items-center justify-center flex-shrink-0">
                <i className={`${sections[1].icon} text-base text-white`}></i>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide">
                {sections[1].title}
              </h3>
            </div>
            {sections[1].items && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sections[1].items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-[#faf8f5] rounded-lg p-4 border border-[#e8ddd0] hover:border-[#a67c52]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-[#a67c52] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {itemIdx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-gray-800 tracking-wide">
                        {item.subtitle}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed pl-7">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative min-h-[320px] lg:min-h-0">
            <img
              src="https://readdy.ai/api/search-image?query=A%20warm%20and%20gentle%20scene%20of%20a%20young%20Asian%20child%20standing%20tall%20and%20smiling%20confidently%20next%20to%20a%20height%20measurement%20chart%20on%20a%20soft%20cream%20wall%2C%20natural%20warm%20sunlight%20streaming%20through%20a%20window%2C%20cozy%20and%20nurturing%20atmosphere%2C%20soft%20bokeh%20background%20with%20light%20beige%20and%20warm%20ivory%20tones%2C%20the%20child%20wearing%20casual%20comfortable%20clothing%2C%20hopeful%20and%20joyful%20expression%2C%20minimalist%20clean%20background%2C%20professional%20lifestyle%20photography%20style&width=600&height=500&seq=growth-concern-img-01&orientation=landscape"
              alt="兒少成長關懷"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
        </div>

        {/* Section 2：艾苜的解方 — 右文左圖 */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border border-[#ede8df]">
          <div className="relative min-h-[320px] lg:min-h-0 order-2 lg:order-1">
            <img
              src="https://readdy.ai/api/search-image?query=A%20calm%20and%20professional%20traditional%20Chinese%20medicine%20clinic%20interior%20with%20warm%20ambient%20lighting%2C%20a%20wooden%20consultation%20desk%20with%20herbal%20medicine%20jars%20arranged%20neatly%2C%20a%20gentle%20doctor%20in%20white%20coat%20sitting%20across%20from%20a%20young%20patient%20and%20parent%2C%20soft%20beige%20and%20warm%20wood%20tones%20throughout%20the%20room%2C%20potted%20green%20plants%20adding%20life%2C%20serene%20healing%20environment%2C%20architectural%20interior%20photography%20with%20natural%20light&width=600&height=500&seq=growth-solution-img-02&orientation=landscape"
              alt="艾苜轉骨解方"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent" />
          </div>
          <div className="bg-[#fdfaf6] p-8 lg:p-10 flex flex-col justify-center order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#a67c52] flex items-center justify-center flex-shrink-0">
                <i className={`${sections[2].icon} text-base text-white`}></i>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide">
                {sections[2].title}
              </h3>
            </div>
            {sections[2].content && (
              <p className="text-sm lg:text-base text-gray-600 leading-loose mb-5">
                {sections[2].content}
              </p>
            )}
            {sections[2].items && (
              <div className="space-y-3">
                {sections[2].items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#a67c52]/10 border border-[#a67c52]/30 text-[#a67c52] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {itemIdx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-1 tracking-wide">
                        {item.subtitle}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#a67c52]/30 to-transparent mb-16" />

        {/* Section 3：體質調理帶來的正向循環 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#a67c52] flex items-center justify-center flex-shrink-0">
              <i className={`${sections[3].icon} text-base text-white`}></i>
            </div>
            <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide">
              {sections[3].title}
            </h3>
          </div>

          {sections[3].items && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 mt-6">
              {sections[3].items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="bg-white rounded-xl border border-[#ede8df] p-6 hover:border-[#a67c52]/50 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#a67c52]/10 border border-[#a67c52]/30 text-[#a67c52] text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {itemIdx + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-800 mb-2 tracking-wide">
                        {item.subtitle}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {sections[3].cases && (
            <div className="space-y-3">
              {sections[3].cases.map((caseItem, caseIdx) => (
                <div key={caseIdx} className="bg-[#fdfaf6] rounded-xl p-5 border border-[#ede8df]">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong className="text-[#a67c52]">{caseItem.label}：</strong>
                    {caseItem.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section 4：治療流程 — 步驟卡片 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#a67c52] flex items-center justify-center flex-shrink-0">
              <i className={`${sections[4].icon} text-base text-white`}></i>
            </div>
            <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide">
              {sections[4].title}
            </h3>
          </div>
          <p className="text-sm text-gray-500 pl-12 mb-8">四個階段，層層守護孩子的成長旅程。</p>

          {sections[4].items && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {sections[4].items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="bg-white rounded-xl border border-[#ede8df] p-6 hover:border-[#a67c52]/50 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#a67c52]/10 border border-[#a67c52]/30 text-[#a67c52] text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {itemIdx + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-800 mb-2 tracking-wide">
                        {item.subtitle}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 免責聲明 */}
        <div className="bg-[#fdfaf6] rounded-xl p-6 border border-[#ede8df] border-l-4 border-l-[#a67c52]">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i className="ri-information-line text-[#a67c52] text-base"></i>
            </div>
            <p className="text-xs lg:text-sm text-gray-500 leading-relaxed">
              {growthDetailData.disclaimer}
            </p>
          </div>
        </div>

        {/* 底部 CTA */}
        <div className="mt-16 rounded-3xl overflow-hidden relative bg-[#cd9651]">
          <div className="relative z-10 py-16 px-10 text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-serif font-normal mb-4">
              艾苜中醫，您的健康護身符
            </h3>
            <p className="text-base text-white/80 mb-8 max-w-xl mx-auto">
              讓我們一起守護您與家人的健康，在生活的縫隙中，築起最溫柔的防線。
            </p>
            <button
              onClick={() => window.REACT_APP_NAVIGATE?.('/#booking')}
              className="group inline-flex items-center gap-2 bg-white text-[#cd9651] px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              立即預約初診
              <i className="ri-arrow-right-line text-base transition-transform duration-300 group-hover:translate-x-1"></i>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
