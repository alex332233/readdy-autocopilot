import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import RelatedTreatmentsSection from './components/RelatedTreatmentsSection';
import BodyDetailSection from './components/BodyDetailSection';
import EyeDetailSection from './components/EyeDetailSection';
import LaserDetailSection from './components/LaserDetailSection';
import DecoctionDetailSection from './components/DecoctionDetailSection';
import type { FeaturedTreatmentDetailContent, FeaturedTreatmentPageContent } from '../../sanity/types';
import { getFeaturedTreatmentDetailDataAttribute } from '../../sanity/dataAttributes';

const divider = (color: string) => ({ background: `linear-gradient(to right, transparent, ${color}4d, transparent)` });

const detailHeroBackgrounds: Record<string, string> = {
  body: '#faf6f0',
  eye: '#f2f7f7',
  laser: '#fdf8f2',
  decoction: '#f2f7f5',
};

const specializedDetailSections: Record<string, (detail: FeaturedTreatmentDetailContent) => React.ReactNode> = {
  body: (detail) => <BodyDetailSection detail={detail} />,
  eye: (detail) => <EyeDetailSection detail={detail} />,
  laser: (detail) => <LaserDetailSection detail={detail} />,
  decoction: (detail) => <DecoctionDetailSection detail={detail} />,
};

export default function FeaturedTreatmentDetailPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { detail, page } = useLoaderData() as {
    detail: FeaturedTreatmentDetailContent;
    page: FeaturedTreatmentPageContent;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(10px)',
    transition: `opacity 1800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 1800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  });

  return (
    <div className="relative">
      <Navbar scrolled={scrolled} />
      <main>
        <section
          className="relative pt-24 overflow-hidden"
          style={{ backgroundColor: detailHeroBackgrounds[detail.slug] ?? '#faf6f0' }}
        >
          <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Noto Serif TC', serif", color: detail.themeColor, ...fadeUp(100) }}>
              <span data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, 'title')}>{detail.title}</span>
            </h1>
            <p className="text-base text-gray-600 max-w-lg leading-relaxed" style={fadeUp(300)}>
              <span data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, 'subtitle')}>{detail.subtitle}</span>
            </p>
          </div>
        </section>

        {specializedDetailSections[detail.slug]?.(detail) ?? (
        <section className="py-20 bg-gradient-to-b from-white to-[#f8f6f1]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            {detail.sections.map((section, sectionIndex) => {
              const showDivider = sectionIndex > 0 && section.layout !== 'textImage' && section.layout !== 'imageText';
              return (
                <div key={`${section.title}-${sectionIndex}`}>
                  {showDivider && <div className="w-full h-px mb-16" style={divider(detail.themeColor)} />}

                  {section.layout === 'textOnly' && (
                    <div className="mb-16">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: detail.themeColor }}>
                          <i className={`${section.icon} text-base text-white`} />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].title`)}>
                          {section.title}
                        </h3>
                      </div>
                      <div className="pl-12">
                        {section.eyebrow && <p className="text-sm lg:text-base font-semibold mb-3 tracking-wide" style={{ color: detail.themeColor }} data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].eyebrow`)}>{section.eyebrow}</p>}
                        {section.content && <p className="text-sm lg:text-base text-gray-600 leading-loose" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].content`)}>{section.content}</p>}
                      </div>
                    </div>
                  )}

                  {(section.layout === 'textImage' || section.layout === 'imageText') && (
                    <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border border-[#ede8df]">
                      {section.layout === 'imageText' && section.image && (
                        <div className="relative min-h-[320px] lg:min-h-0 order-2 lg:order-1" data-sanity-edit-group data-sanity-edit-target>
                          <img src={section.image.url} alt={section.image.alt} className="absolute inset-0 w-full h-full object-cover object-top" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].image`)} />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white/20 to-transparent" />
                        </div>
                      )}
                      <div className={`p-8 lg:p-10 flex flex-col justify-center ${section.layout === 'imageText' ? 'bg-[#fdfaf6] order-1 lg:order-2' : 'bg-white'}`}>
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: detail.themeColor }}>
                            <i className={`${section.icon} text-base text-white`} />
                          </div>
                          <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].title`)}>
                            {section.title}
                          </h3>
                        </div>
                        {section.content && <p className="text-sm lg:text-base text-gray-600 leading-loose mb-5" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].content`)}>{section.content}</p>}
                        {section.additionalContent && <p className="text-sm lg:text-base text-gray-600 leading-loose mb-5" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].additionalContent`)}>{section.additionalContent}</p>}
                        {section.items && section.items.length > 0 && (
                          section.layout === 'textImage' ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {section.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="bg-[#faf8f5] rounded-lg p-4 border border-[#e8ddd0]" >
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0" style={{ backgroundColor: detail.themeColor }}>{itemIdx + 1}</span>
                                    <h4 className="text-sm font-bold text-gray-800 tracking-wide" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].items[${itemIdx}].subtitle`)}>{item.subtitle}</h4>
                                  </div>
                                  <p className="text-xs text-gray-600 leading-relaxed pl-7" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].items[${itemIdx}].text`)}>{item.text}</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="space-y-3">
                              {section.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="flex gap-3 items-start">
                                  <div className="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${detail.themeColor}1a`, border: `1px solid ${detail.themeColor}4d`, color: detail.themeColor }}>{itemIdx + 1}</div>
                                  <div>
                                    <h4 className="text-sm font-semibold text-gray-800 mb-1 tracking-wide" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].items[${itemIdx}].subtitle`)}>{item.subtitle}</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].items[${itemIdx}].text`)}>{item.text}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )
                        )}
                      </div>
                      {section.layout === 'textImage' && section.image && (
                        <div className="relative min-h-[320px] lg:min-h-0" data-sanity-edit-group data-sanity-edit-target>
                          <img src={section.image.url} alt={section.image.alt} className="absolute inset-0 w-full h-full object-cover object-top" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].image`)} />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                        </div>
                      )}
                    </div>
                  )}

                  {section.layout === 'cardsCases' && (
                    <div className="mb-16">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: detail.themeColor }}>
                          <i className={`${section.icon} text-base text-white`} />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].title`)}>
                          {section.title}
                        </h3>
                      </div>
                      {section.items && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 mt-6">
                          {section.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="bg-white rounded-xl border border-[#ede8df] p-6 hover:shadow-sm transition-all duration-200">
                              <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${detail.themeColor}1a`, border: `1px solid ${detail.themeColor}4d`, color: detail.themeColor }}>{itemIdx + 1}</div>
                                <div>
                                  <h4 className="text-base font-semibold text-gray-800 mb-2 tracking-wide" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].items[${itemIdx}].subtitle`)}>{item.subtitle}</h4>
                                  <p className="text-sm text-gray-600 leading-relaxed" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].items[${itemIdx}].text`)}>{item.text}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {section.cases && (
                        <div className="space-y-3">
                          {section.cases.map((caseItem, caseIdx) => (
                            <div key={caseIdx} className="bg-[#fdfaf6] rounded-xl p-5 border border-[#ede8df]">
                              <p className="text-sm text-gray-600 leading-relaxed">
                                <strong style={{ color: detail.themeColor }} data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].cases[${caseIdx}].label`)}>{caseItem.label}：</strong>
                                <span data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].cases[${caseIdx}].text`)}>{caseItem.text}</span>
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {section.layout === 'processCards' && (
                    <div className="mb-16">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: detail.themeColor }}>
                          <i className={`${section.icon} text-base text-white`} />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 tracking-wide" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].title`)}>
                          {section.title}
                        </h3>
                      </div>
                      {section.content && <p className="text-sm text-gray-500 pl-12 mb-8" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].content`)}>{section.content}</p>}
                      {section.items && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {section.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="bg-white rounded-xl border border-[#ede8df] p-6 hover:shadow-sm transition-all duration-200">
                              <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${detail.themeColor}1a`, border: `1px solid ${detail.themeColor}4d`, color: detail.themeColor }}>{itemIdx + 1}</div>
                                <div>
                                  <h4 className="text-base font-semibold text-gray-800 mb-2 tracking-wide" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].items[${itemIdx}].subtitle`)}>{item.subtitle}</h4>
                                  <p className="text-sm text-gray-600 leading-relaxed" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, `sections[${sectionIndex}].items[${itemIdx}].text`)}>{item.text}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            {detail.disclaimer && (
              <div className="bg-[#fdfaf6] rounded-xl p-6 border border-[#ede8df] border-l-4" style={{ borderLeftColor: detail.themeColor }}>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-information-line text-base" style={{ color: detail.themeColor }} />
                  </div>
                  <p className="text-xs lg:text-sm text-gray-500 leading-relaxed" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, 'disclaimer')}>{detail.disclaimer}</p>
                </div>
              </div>
            )}

            <div className="mt-16 rounded-3xl overflow-hidden relative" style={{ backgroundColor: detail.themeColor }}>
              <div className="relative z-10 py-16 px-10 text-center text-white">
                <h3 className="text-2xl lg:text-3xl font-serif font-normal mb-4" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, 'ctaTitle')}>{detail.cta.title}</h3>
                <p className="text-base text-white/80 mb-8 max-w-xl mx-auto" data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, 'ctaDescription')}>{detail.cta.description}</p>
                <button
                  onClick={() => window.REACT_APP_NAVIGATE?.('/#booking')}
                  className="group inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-colors duration-300 whitespace-nowrap cursor-pointer"
                  style={{ color: detail.themeColor }}
                  data-sanity={getFeaturedTreatmentDetailDataAttribute(detail.slug, 'ctaButtonText')}
                >
                  {detail.cta.buttonText}
                  <i className="ri-arrow-right-line text-base transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </section>
        )}

        {page && <RelatedTreatmentsSection cards={page.cards} currentSlug={detail.slug} extraCard={page.relatedExtraCard} />}
      </main>
      <Footer />
    </div>
  );
}
