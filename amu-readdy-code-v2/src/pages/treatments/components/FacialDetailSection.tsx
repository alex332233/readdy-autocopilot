import { facialDetailData } from '../../../mocks/treatments';

export default function FacialDetailSection() {
  const sections = facialDetailData.sections;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8f6f1]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section 0：適合對象 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-full bg-[#cd9651] flex items-center justify-center flex-shrink-0">
              <i className={`${sections[0].icon} text-base text-white`}></i>
            </div>
            <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide">
              {sections[0].title}
            </h3>
          </div>
          <div className="pl-12">
            {/* 年紀／客群小標題 */}
            <p className="text-sm lg:text-base font-semibold text-[#cd9651] mb-3 tracking-wide">
              專為 25–50 歲的都會女性、上班族與忙碌媽媽量身打造
            </p>
            <p className="text-sm lg:text-base text-gray-600 leading-loose">
              {sections[0].content
                ?.replace('專為 25-50 歲的都會女性、上班族與忙碌媽媽量身打造。', '')
                .trim()}
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#cd9651]/30 to-transparent mb-16" />

        {/* Section 1：妳的困擾，我們懂 — 左文右圖 */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border border-[#ede8df]">
          <div className="bg-white p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#cd9651] flex items-center justify-center flex-shrink-0">
                <i className={`${sections[1].icon} text-base text-white`}></i>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide">
                {sections[1].title}
              </h3>
            </div>
            <p className="text-sm lg:text-base text-gray-600 leading-loose">
              {sections[1].content}
            </p>
          </div>
          <div className="relative min-h-[320px] lg:min-h-0">
            <img
              src="https://readdy.ai/api/search-image?query=A%20serene%20and%20elegant%20portrait%20of%20an%20Asian%20woman%20in%20her%20thirties%20gently%20touching%20her%20face%20with%20both%20hands%2C%20soft%20natural%20lighting%20highlighting%20her%20smooth%20skin%20and%20peaceful%20expression%2C%20warm%20cream%20and%20soft%20beige%20tones%20creating%20a%20spa-like%20atmosphere%2C%20minimalist%20clean%20background%20with%20subtle%20botanical%20elements%2C%20professional%20beauty%20photography%20with%20shallow%20depth%20of%20field%20emphasizing%20facial%20features%20and%20natural%20radiance&width=600&height=500&seq=facial-concern-img-01&orientation=landscape"
              alt="美顏關懷"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
        </div>

        {/* Section 2：艾苜的解方 — 右文左圖 */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border border-[#ede8df]">
          <div className="relative min-h-[320px] lg:min-h-0 order-2 lg:order-1">
            <img
              src="https://readdy.ai/api/search-image?query=A%20professional%20and%20calming%20scene%20of%20traditional%20Chinese%20medicine%20facial%20acupuncture%20treatment%2C%20ultra-fine%20needles%20delicately%20placed%20on%20an%20Asian%20womans%20face%2C%20soft%20warm%20lighting%20in%20a%20modern%20clean%20clinic%20setting%20with%20cream%20and%20sage%20green%20tones%2C%20the%20practitioner%20wearing%20white%20coat%20with%20gentle%20hands%2C%20serene%20healing%20atmosphere%20with%20subtle%20herbal%20medicine%20jars%20in%20soft%20focus%20background%2C%20medical%20photography%20style%20with%20natural%20light&width=600&height=500&seq=facial-solution-img-02&orientation=landscape"
              alt="美顏針療程"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent" />
          </div>
          <div className="bg-[#fdfaf6] p-8 lg:p-10 flex flex-col justify-center order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#cd9651] flex items-center justify-center flex-shrink-0">
                <i className={`${sections[2].icon} text-base text-white`}></i>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide">
                {sections[2].title}
              </h3>
            </div>
            <p className="text-sm lg:text-base text-gray-600 leading-loose mb-4">
              {sections[2].content}
            </p>
            {sections[2].additionalContent && (
              <p className="text-sm lg:text-base text-gray-600 leading-loose">
                {sections[2].additionalContent}
              </p>
            )}
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#cd9651]/30 to-transparent mb-16" />

        {/* Section 3：療程體驗 — 步驟卡片 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#cd9651] flex items-center justify-center flex-shrink-0">
              <i className={`${sections[3].icon} text-base text-white`}></i>
            </div>
            <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide">
              {sections[3].title}
            </h3>
          </div>
          <p className="text-sm text-gray-500 pl-12 mb-8">{sections[3].content}</p>

          {sections[3].items && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {sections[3].items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="bg-white rounded-xl border border-[#ede8df] p-6 hover:border-[#cd9651]/50 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#cd9651]/10 border border-[#cd9651]/30 text-[#cd9651] text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
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
        <div className="bg-[#fdfaf6] rounded-xl p-6 border border-[#ede8df] border-l-4 border-l-[#cd9651]">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i className="ri-information-line text-[#cd9651] text-base"></i>
            </div>
            <p className="text-xs lg:text-sm text-gray-500 leading-relaxed">
              {facialDetailData.disclaimer}
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
