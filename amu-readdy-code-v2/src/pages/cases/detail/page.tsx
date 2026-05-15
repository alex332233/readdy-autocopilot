import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import CTASection from '../components/CTASection';
import RichArticleRenderer from '../../../components/RichArticleRenderer';
import type { CaseArticleContent, CasesPageContent } from '../../../sanity/types';
import {getCaseArticleDocumentDataAttribute} from '../../../sanity/dataAttributes';
import {getSanityImageUrl} from '../../../sanity/imageUrl';

export default function CaseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const content = useLoaderData() as { page: CasesPageContent; article: CaseArticleContent } | null;
  const caseData = content?.article || null;
  const getDataAttribute = (path: string) =>
    caseData?.documentId
      ? getCaseArticleDocumentDataAttribute(caseData.documentId, path)
      : undefined;
  const isExternalHref = (href: string) => /^https?:\/\//i.test(href);
  const hasText = (value?: string) => Boolean(value?.trim());
  const beforeItems =
    caseData?.beforeAfter?.before?.items
      ?.map((item, sourceIndex) => ({item, sourceIndex}))
      .filter(({item}) => hasText(item)) || [];
  const afterPhases =
    caseData?.beforeAfter?.after?.phases
      ?.map((phase, sourceIndex) => ({
        phase,
        sourceIndex,
        improvements: phase.improvements
          .map((item, improvementIndex) => ({item, improvementIndex}))
          .filter(({item}) => hasText(item)),
      }))
      .filter(({phase, improvements}) => hasText(phase.period) || improvements.length > 0) || [];
  const showBefore = hasText(caseData?.beforeAfter?.before?.title) || beforeItems.length > 0;
  const showAfter = hasText(caseData?.beforeAfter?.after?.title) || afterPhases.length > 0;
  const hasBeforeAfter =
    caseData?.beforeAfter?.enabled && (showBefore || showAfter);
  const coverImageUrl = getSanityImageUrl(caseData?.coverImage, {width: 1920, height: 420, fit: 'crop', quality: 88});

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

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />

      {/* Hero 封面圖 */}
      <div className="relative w-full h-[420px] mt-24 overflow-hidden bg-stone-200" data-sanity-edit-group data-sanity-edit-target>
        {coverImageUrl && (
          <img
            src={coverImageUrl}
            alt={caseData.title}
            className="w-full h-full object-cover object-top"
            data-sanity={getDataAttribute('coverImage')}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-3xl mx-auto">
          <span
            className="inline-block text-[10px] font-semibold tracking-widest uppercase bg-[#cd9651] text-white px-3 py-1 rounded-sm mb-3"
            data-sanity={getDataAttribute('category')}
          >
            {caseData.category}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug" data-sanity={getDataAttribute('title')}>
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
            <span className="text-[11px] text-gray-400 tracking-wide" data-sanity={getDataAttribute('publishDate')}>
              {caseData.publishDate}
            </span>
            <span className="text-gray-200">·</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-user-line text-[#cd9651]" style={{ fontSize: '12px' }}></i>
              </div>
              <span className="text-[11px] text-[#cd9651] font-medium tracking-wide" data-sanity={getDataAttribute('doctor')}>
                {caseData.doctor}
              </span>
            </div>
          </div>
        </div>

        {hasBeforeAfter && (
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {showBefore && caseData.beforeAfter?.before && (
              <div className="bg-[#fdf8f8] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-red-300 flex-shrink-0"></span>
                  <span
                    className="text-sm font-bold text-gray-700 tracking-widest"
                    data-sanity={getDataAttribute('beforeAfter.before.title')}
                  >
                    {caseData.beforeAfter.before.title}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {beforeItems.map(({item, sourceIndex}) => (
                    <li key={sourceIndex} className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-subtract-line text-red-300 text-sm"></i>
                      </div>
                      <span
                        className="text-xs text-gray-600 leading-relaxed whitespace-pre-wrap"
                        data-sanity={getDataAttribute(`beforeAfter.before.items[${sourceIndex}]`)}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {showAfter && caseData.beforeAfter?.after && (
              <div className="bg-[#f7fdf9] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  <span
                    className="text-sm font-bold text-gray-700 tracking-widest"
                    data-sanity={getDataAttribute('beforeAfter.after.title')}
                  >
                    {caseData.beforeAfter.after.title}
                  </span>
                </div>
                <div className="space-y-4">
                  {afterPhases.map(({phase, sourceIndex, improvements}) => (
                    <div key={sourceIndex}>
                      <span
                        className="text-xs text-emerald-600 font-semibold mb-2 block"
                        data-sanity={getDataAttribute(`beforeAfter.after.phases[${sourceIndex}].period`)}
                      >
                        {phase.period}
                      </span>
                      <ul className="space-y-1.5">
                        {improvements.map(({item, improvementIndex}) => (
                          <li key={improvementIndex} className="flex items-start gap-2">
                            <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <i className="ri-check-line text-emerald-400 text-sm"></i>
                            </div>
                            <span
                              className="text-xs text-gray-600 leading-relaxed whitespace-pre-wrap"
                              data-sanity={getDataAttribute(`beforeAfter.after.phases[${sourceIndex}].improvements[${improvementIndex}]`)}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {caseData.body && caseData.body.length > 0 ? (
          <RichArticleRenderer
            getDataAttribute={getDataAttribute}
            blocks={caseData.body}
          />
        ) : (
          <>
            <p
              className="text-sm text-gray-500 leading-relaxed mb-10 border-l-2 border-[#cd9651]/30 pl-4 whitespace-pre-wrap"
            >
              {caseData.description}
            </p>

            {!hasBeforeAfter && <div className="grid md:grid-cols-2 gap-5 mb-10">
              <div className="bg-[#fdf8f8] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-red-300 flex-shrink-0"></span>
                  <span className="text-sm font-bold text-gray-700 tracking-widest">
                    {caseData.before.title}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {caseData.before.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-subtract-line text-red-300 text-sm"></i>
                      </div>
                      <span className="text-xs text-gray-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#f7fdf9] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  <span className="text-sm font-bold text-gray-700 tracking-widest">
                    {caseData.after.title}
                  </span>
                </div>
                <div className="space-y-4">
                  {caseData.after.phases.map((phase, idx) => (
                    <div key={idx}>
                      <span className="text-xs text-emerald-600 font-semibold mb-2 block">
                        {phase.period}
                      </span>
                      <ul className="space-y-1.5">
                        {phase.improvements.map((item, impIdx) => (
                          <li key={impIdx} className="flex items-start gap-2">
                            <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <i className="ri-check-line text-emerald-400 text-sm"></i>
                            </div>
                            <span
                              className="text-xs text-gray-600 leading-relaxed"
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>}

            <div className="flex items-start gap-3 mb-10 bg-[#faf6f0] rounded-xl p-6">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-double-quotes-l text-[#cd9651] text-xl"></i>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic whitespace-pre-wrap">
                {caseData.conclusion}
              </p>
            </div>
          </>
        )}

        {/* 貼心小提醒 / 醫學小知識 */}
        {(caseData.tips || caseData.medicalInfo) && (
          <div className="border border-stone-100 rounded-xl p-6 mb-10">
            <p className="text-xs font-semibold text-[#cd9651] tracking-widest mb-3 uppercase">
              <span data-sanity={getDataAttribute(caseData.tips ? 'tips.title' : 'medicalInfo.title')}>
                {caseData.tips?.title || caseData.medicalInfo?.title}
              </span>
            </p>
            <p
              className="text-xs text-gray-500 leading-relaxed whitespace-pre-wrap"
              data-sanity={getDataAttribute(caseData.tips ? 'tips.content' : 'medicalInfo.content')}
            >
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
                  href={ref.href}
                  target={isExternalHref(ref.href) ? '_blank' : undefined}
                  rel={isExternalHref(ref.href) ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#cd9651] transition-colors cursor-pointer"
                >
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <i className="ri-link text-xs"></i>
                  </div>
                  <span className="underline underline-offset-2 break-all" data-sanity={getDataAttribute(`references[${idx}].text`)}>
                    {ref.text || ref.href}
                  </span>
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
              <span data-sanity={getDataAttribute(`tags[${idx}]`)}>#{tag}</span>
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
            data-sanity={getDataAttribute('fbLink')}
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-facebook-fill text-base"></i>
            </div>
            查看 Facebook 原文
          </a>
        </div>
      </main>

      <CTASection
        title={content?.page.ctaTitle || '您也想擁有健康的身體嗎？'}
        description={content?.page.ctaDescription || '每個人的體質不同，需要的調理方式也不同\n讓我們的專業醫師為您量身打造專屬的治療計畫'}
        buttonText={content?.page.ctaButtonText || '立即預約諮詢'}
        enableVisualEditing
      />
      <Footer />
    </div>
  );
}
