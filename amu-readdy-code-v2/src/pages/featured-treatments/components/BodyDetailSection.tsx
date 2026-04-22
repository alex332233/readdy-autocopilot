import { bodyCases, bodyDetailData } from './specializedDetailContent';
import TreatmentCasesSection from './TreatmentCasesSection';
import type { FeaturedTreatmentDetailContent } from '../../../sanity/types';

const ACCENT = '#b87d3a';

interface BodyDetailSectionProps {
  detail: FeaturedTreatmentDetailContent;
}

export default function BodyDetailSection({ detail }: BodyDetailSectionProps) {
  const sections = bodyDetailData.sections;
  const primaryImage = detail.primaryImage?.url || 'https://readdy.ai/api/search-image?query=A%20thoughtful%20Asian%20woman%20in%20her%20thirties%20looking%20at%20herself%20in%20a%20mirror%20with%20a%20gentle%20concerned%20expression%2C%20wearing%20casual%20comfortable%20clothing%20in%20soft%20morning%20light%2C%20a%20clean%20minimal%20bedroom%20setting%20with%20warm%20ivory%20and%20soft%20beige%20tones%2C%20subtle%20natural%20light%20casting%20soft%20shadows%2C%20the%20scene%20evokes%20quiet%20determination%20and%20self-reflection%20rather%20than%20distress%2C%20peaceful%20mood%2C%20professional%20lifestyle%20photography%20with%20shallow%20depth%20of%20field%2C%20warm%20neutral%20background%20tones&width=600&height=500&seq=body-concern-img-01&orientation=landscape';
  const secondaryImage = detail.secondaryImage?.url || 'https://readdy.ai/api/search-image?query=A%20serene%20and%20modern%20traditional%20Chinese%20medicine%20clinic%20interior%2C%20a%20doctor%20in%20white%20coat%20performing%20acupuncture%20treatment%20on%20a%20patient%20lying%20on%20a%20clean%20treatment%20bed%2C%20warm%20soft%20lighting%20with%20earthy%20beige%20and%20warm%20wood%20tones%2C%20neatly%20arranged%20herbal%20medicine%20jars%20in%20the%20background%2C%20potted%20green%20plants%20adding%20calm%20vitality%2C%20the%20atmosphere%20is%20professional%20yet%20gentle%20and%20healing%2C%20medical%20lifestyle%20photography%20with%20natural%20window%20light%20streaming%20in&width=600&height=500&seq=body-solution-img-02&orientation=landscape';
  const cases = detail.featuredCases?.length
    ? detail.featuredCases.map((item) => ({
        label: item.label,
        name: item.name || '',
        content: item.text,
        link: item.link || '#',
        image: item.image?.url,
      }))
    : bodyCases;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8f6f1]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
              <i className={`${sections[0].icon} text-base text-white`} />
            </div>
            <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide">{sections[0].title}</h3>
          </div>
          <div className="pl-12">
            <p className="text-sm lg:text-base font-semibold mb-3 tracking-wide" style={{ color: ACCENT }}>{sections[0].subtitle}</p>
            <p className="text-sm lg:text-base text-gray-600 leading-loose">{sections[0].content}</p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#b8956a]/30 to-transparent mb-16" />

        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#ede8df] min-h-[560px]">
          <div className="bg-white px-12 py-16 lg:px-16 lg:py-20 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
                <i className={`${sections[1].icon} text-base text-white`} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide">{sections[1].title}</h3>
            </div>
            <p className="text-base text-gray-600 leading-[2.2]">{sections[1].content}</p>
          </div>
          <div className="relative min-h-[400px] lg:min-h-0">
            <img src={primaryImage} alt="體態困擾" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#ede8df] min-h-[560px]">
          <div className="relative min-h-[400px] lg:min-h-0 order-2 lg:order-1">
            <img src={secondaryImage} alt="艾苜體雕解方" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent" />
          </div>
          <div className="bg-[#fdfaf6] px-12 py-16 lg:px-16 lg:py-20 flex flex-col justify-center order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
                <i className={`${sections[2].icon} text-base text-white`} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide">{sections[2].title}</h3>
            </div>
            <p className="text-base text-gray-600 leading-[2.2] mb-6">{sections[2].content}</p>
            <p className="text-base text-gray-600 leading-[2.2]">{sections[2].additionalContent}</p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#b8956a]/30 to-transparent mb-16" />

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
              <i className={`${sections[3].icon} text-base text-white`} />
            </div>
            <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide">{sections[3].title}</h3>
          </div>
          <p className="text-sm text-gray-500 pl-12 mb-8">在艾苜，每一次的輕盈體驗，都有我們專業嚴謹的流程把關：</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sections[3].items.map((item, itemIdx) => (
              <div key={itemIdx} className="bg-white rounded-xl border border-[#ede8df] p-6 hover:border-[#b8956a]/50 hover:shadow-sm transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${ACCENT}18`, border: `1px solid ${ACCENT}55`, color: ACCENT }}>{itemIdx + 1}</div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-800 mb-2 tracking-wide">{item.subtitle}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#fdfaf6] rounded-xl p-6 border border-[#ede8df]" style={{ borderLeftWidth: '4px', borderLeftColor: ACCENT }}>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"><i className="ri-information-line text-base" style={{ color: ACCENT }} /></div>
            <p className="text-xs lg:text-sm text-gray-500 leading-relaxed">{bodyDetailData.disclaimer}</p>
          </div>
        </div>

        <TreatmentCasesSection cases={cases} accent="#b8956a" />

        <div className="mt-16 rounded-3xl overflow-hidden relative" style={{ backgroundColor: ACCENT }}>
          <div className="relative z-10 py-16 px-10 text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-serif font-normal mb-4">艾苜中醫，您的健康護身符</h3>
            <p className="text-base text-white/80 mb-8 max-w-xl mx-auto">讓我們一起守護您與家人的健康，在生活的縫隙中，築起最溫柔的防線。</p>
            <button onClick={() => window.REACT_APP_NAVIGATE?.('/#booking')} className="group inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-colors duration-300 whitespace-nowrap cursor-pointer" style={{ color: ACCENT }}>
              立即預約初診
              <i className="ri-arrow-right-line text-base transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
