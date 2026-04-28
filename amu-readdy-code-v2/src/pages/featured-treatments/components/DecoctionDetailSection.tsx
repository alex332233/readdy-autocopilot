import { decoctionCases, decoctionDetailData } from './specializedDetailContent';
import TreatmentCasesSection from './TreatmentCasesSection';
import type { FeaturedTreatmentDetailContent } from '../../../sanity/types';
import {
  getFeaturedTreatmentDetailDataAttribute,
  getFeaturedTreatmentDetailDocumentDataAttribute,
} from '../../../sanity/dataAttributes';

const ACCENT = '#5a7a6e';

interface DecoctionDetailSectionProps {
  detail: FeaturedTreatmentDetailContent;
}

export default function DecoctionDetailSection({ detail }: DecoctionDetailSectionProps) {
  const d = decoctionDetailData;
  const dataAttribute = (path: string) =>
    detail._id
      ? getFeaturedTreatmentDetailDocumentDataAttribute(detail._id, path)
      : getFeaturedTreatmentDetailDataAttribute(detail.slug, path);
  const section = (index: number) => detail.sections?.[index];
  const sectionTitle = (index: number, fallback: string) => section(index)?.title || fallback;
  const sectionContent = (index: number, fallback = '') => section(index)?.content || fallback;
  const sectionEyebrow = (index: number, fallback = '') => section(index)?.eyebrow || fallback;
  const sectionAdditionalContent = (index: number, fallback = '') => section(index)?.additionalContent || fallback;
  const sectionItem = (sectionIndex: number, itemIndex: number, fallback: {title?: string; subtitle?: string; text: string}) => {
    const item = section(sectionIndex)?.items?.[itemIndex];
    return {
      title: item?.subtitle || fallback.title || fallback.subtitle || '',
      text: item?.text || fallback.text,
    };
  };
  const secondaryImage = detail.secondaryImage?.url || 'https://readdy.ai/api/search-image?query=A%20professional%20Chinese%20medicine%20doctor%20in%20a%20clean%20white%20coat%20carefully%20measuring%20and%20blending%20dried%20herbal%20ingredients%20at%20a%20wooden%20apothecary%20counter%2C%20vacuum-sealed%20herbal%20decoction%20pouches%20arranged%20neatly%20beside%20the%20workspace%2C%20warm%20natural%20daylight%20streaming%20through%20large%20windows%2C%20organized%20wooden%20shelving%20with%20labeled%20herbal%20jars%20in%20the%20background%2C%20the%20scene%20conveys%20precision%20craftsmanship%20and%20personalized%20care%2C%20forest%20green%20and%20warm%20earth%20tones%2C%20calm%20clinical%20aesthetic&width=600&height=500&seq=decoction-solution-v2-01&orientation=landscape';
  const cases = detail.featuredCases?.length
    ? detail.featuredCases.map((item, index) => ({
        label: item.label,
        name: item.name || '',
        content: item.text,
        link: item.link || '/cases',
        image: item.image?.url,
        dataPathPrefix: `featuredCases[${index}]`,
      }))
    : decoctionCases;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f2f7f5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
              <i className="ri-user-heart-line text-base text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide" data-sanity={dataAttribute('sections[0].title')}>{sectionTitle(0, d.audience.title)}</h3>
          </div>
          <div className="pl-12">
            <p className="text-sm lg:text-base text-gray-600 leading-loose" data-sanity={dataAttribute('sections[0].content')}>{sectionContent(0, d.audience.content)}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['備孕族', '產後媽媽', '慢性病患者', '術後調養', '亞健康族群', '複雜體質', '兒少成長', '疲勞族'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: `${ACCENT}15`, color: ACCENT, border: `1px solid ${ACCENT}35` }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#5a7a6e]/30 to-transparent mb-16" />

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
              <i className="ri-scales-line text-base text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide" data-sanity={dataAttribute('sections[1].title')}>{sectionTitle(1, d.comparison.title)}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pl-0">
            {d.comparison.items.map((item, i) => {
              const cmsItem = sectionItem(1, i, item);
              return (
              <div key={i} className="bg-white rounded-xl border border-[#c4d8d0] p-6 flex flex-col gap-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: `${ACCENT}18`, border: `1.5px solid ${ACCENT}40` }}>
                  <i className={`${item.icon} text-lg`} style={{ color: ACCENT }} />
                </div>
                <h4 className="text-base font-bold text-gray-800 tracking-wide" style={{ fontFamily: "'Noto Serif TC', serif" }} data-sanity={dataAttribute(`sections[1].items[${i}].subtitle`)}>{cmsItem.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed" data-sanity={dataAttribute(`sections[1].items[${i}].text`)}>{cmsItem.text}</p>
              </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#c4d8d0] min-h-[560px]">
          <div className="relative min-h-[400px] lg:min-h-0 order-2 lg:order-1" data-sanity-edit-group data-sanity-edit-target>
            <img src={secondaryImage} alt="艾苜水煎藥解方" className="absolute inset-0 w-full h-full object-cover object-top" data-sanity={dataAttribute('secondaryImage')} />
            <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent pointer-events-none" />
          </div>
          <div className="bg-[#f2f7f5] px-12 py-16 lg:px-16 lg:py-20 flex flex-col justify-center order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
                <i className="ri-drop-fill text-base text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide" data-sanity={dataAttribute('sections[2].title')}>{sectionTitle(2, d.solution.title)}</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed" data-sanity={dataAttribute('sections[2].content')}>{sectionContent(2, d.solution.intro)}</p>
            <div className="space-y-4">
              {d.solution.items.map((item, i) => {
                const cmsItem = sectionItem(2, i, item);
                return (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border" style={{ borderColor: `${ACCENT}25` }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${ACCENT}20` }}>
                    <i className={`${item.icon} text-sm`} style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-1 text-gray-800" data-sanity={dataAttribute(`sections[2].items[${i}].subtitle`)}>{cmsItem.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed" data-sanity={dataAttribute(`sections[2].items[${i}].text`)}>{cmsItem.text}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#5a7a6e]/30 to-transparent mb-16" />

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
              <i className="ri-shield-star-line text-base text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide" data-sanity={dataAttribute('sections[3].title')}>{sectionTitle(3, d.keyStages.title)}</h3>
          </div>
          <p className="text-sm text-gray-500 pl-12 mb-3" data-sanity={dataAttribute('sections[3].eyebrow')}>{sectionEyebrow(3, d.keyStages.subtitle)}</p>
          <p className="text-sm lg:text-base text-gray-600 leading-loose pl-12 mb-8" data-sanity={dataAttribute('sections[3].content')}>{sectionContent(3, d.keyStages.intro)}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {d.keyStages.items.map((item, i) => {
              const cmsItem = sectionItem(3, i, item);
              return (
              <div key={i} className={`bg-white rounded-xl border border-[#c4d8d0] p-6 hover:border-[#5a7a6e]/50 transition-all duration-200 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <h4 className="text-base font-semibold text-gray-800 mb-2 tracking-wide" style={{ fontFamily: "'Noto Serif TC', serif" }} data-sanity={dataAttribute(`sections[3].items[${i}].subtitle`)}>{cmsItem.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed" data-sanity={dataAttribute(`sections[3].items[${i}].text`)}>{cmsItem.text}</p>
              </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
              <i className="ri-heart-add-line text-base text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide" data-sanity={dataAttribute('sections[4].title')}>{sectionTitle(4, d.beyond.title)}</h3>
          </div>
          <div className="bg-white rounded-xl border border-[#c4d8d0] p-8 lg:p-10 pl-12">
            <p className="text-sm lg:text-base text-gray-600 leading-loose mb-6" data-sanity={dataAttribute('sections[4].content')}>{sectionContent(4, d.beyond.intro)}</p>
            <ul className="space-y-3 mb-6">
              {d.beyond.conditions.map((condition, i) => {
                const cmsItem = sectionItem(4, i, {subtitle: condition, text: condition});
                return (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${ACCENT}20` }}>
                    <i className="ri-check-line text-xs" style={{ color: ACCENT }} />
                  </span>
                  <span className="text-sm lg:text-base text-gray-600 leading-relaxed" data-sanity={dataAttribute(`sections[4].items[${i}].subtitle`)}>{cmsItem.title}</span>
                </li>
                );
              })}
            </ul>
            <p className="text-sm lg:text-base text-gray-600 leading-loose pt-6 border-t" style={{ borderColor: `${ACCENT}20` }} data-sanity={dataAttribute('sections[4].additionalContent')}>{sectionAdditionalContent(4, d.beyond.closing)}</p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#5a7a6e]/30 to-transparent mb-16" />

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT }}>
              <i className="ri-map-pin-time-line text-base text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide" data-sanity={dataAttribute('sections[5].title')}>{sectionTitle(5, d.flow.title)}</h3>
          </div>
          <p className="text-sm text-gray-500 pl-12 mb-8" data-sanity={dataAttribute('sections[5].content')}>{sectionContent(5, '在艾苜，每一帖水藥的誕生，都有我們嚴謹的流程把關：')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {d.flow.items.map((item, i) => {
              const cmsItem = sectionItem(5, i, item);
              return (
              <div key={i} className="bg-white rounded-xl border border-[#c4d8d0] p-6 hover:border-[#5a7a6e]/50 transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${ACCENT}18`, border: `1px solid ${ACCENT}55`, color: ACCENT }}>{i + 1}</div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-800 mb-2 tracking-wide" style={{ fontFamily: "'Noto Serif TC', serif" }} data-sanity={dataAttribute(`sections[5].items[${i}].subtitle`)}>{cmsItem.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed" data-sanity={dataAttribute(`sections[5].items[${i}].text`)}>{cmsItem.text}</p>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[#f2f7f5] rounded-xl p-6 border border-[#c4d8d0] mb-16" style={{ borderLeftWidth: '4px', borderLeftColor: ACCENT }}>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"><i className="ri-information-line text-base" style={{ color: ACCENT }} /></div>
            <p className="text-xs lg:text-sm text-gray-500 leading-relaxed" data-sanity={dataAttribute('disclaimer')}>{detail.disclaimer || d.disclaimer}</p>
          </div>
        </div>

        <TreatmentCasesSection cases={cases} accent="#5a7a6e" getDataAttribute={dataAttribute} />

        <div className="rounded-3xl overflow-hidden relative" style={{ backgroundColor: ACCENT }}>
          <div className="relative z-10 py-16 px-10 text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-serif font-normal mb-4" data-sanity={dataAttribute('ctaTitle')}>{detail.cta.title}</h3>
            <p className="text-base text-white/80 mb-8 max-w-xl mx-auto" data-sanity={dataAttribute('ctaDescription')}>{detail.cta.description}</p>
            <button onClick={() => window.REACT_APP_NAVIGATE?.('/#booking')} className="group inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-colors duration-300 whitespace-nowrap cursor-pointer" style={{ color: ACCENT }}>
              <span data-sanity={dataAttribute('ctaButtonText')}>{detail.cta.buttonText}</span>
              <i className="ri-arrow-right-line text-base transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
