import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import CTASection from '../../cases/components/CTASection';
import RichArticleRenderer from '../../../components/RichArticleRenderer';
import {
  getHealthEducationArticleDocumentDataAttribute,
  getHealthEducationPageDataAttribute,
} from '../../../sanity/dataAttributes';
import {getSanityImageUrl} from '../../../sanity/imageUrl';
import type { HealthEducationArticleContent, HealthEducationPageContent } from '../../../sanity/types';

export default function HealthEducationDetailPage() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const data = useLoaderData() as { page: HealthEducationPageContent; article: HealthEducationArticleContent } | null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">找不到此文章</p>
          <button
            onClick={() => navigate('/health-education')}
            className="text-sm text-[#cd9651] underline cursor-pointer"
          >
            返回健康教育列表
          </button>
        </div>
      </div>
    );
  }

  const { page, article } = data;
  const getArticleDataAttribute = (path: string) =>
    article.documentId
      ? getHealthEducationArticleDocumentDataAttribute(article.documentId, path)
      : undefined;
  const isExternalHref = (href: string) => /^https?:\/\//i.test(href);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />

      <div className="relative w-full h-[420px] mt-24 overflow-hidden" data-sanity-edit-group data-sanity-edit-target>
        <img
          src={getSanityImageUrl(article.coverImage, {width: 1920, height: 420, fit: 'crop', quality: 88})}
          alt={article.coverImage.alt || article.title}
          className="w-full h-full object-cover object-top"
          data-sanity={getArticleDataAttribute('coverImage')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-3xl mx-auto pointer-events-none">
          <span
            className="inline-block text-[10px] font-semibold tracking-widest uppercase bg-[#cd9651] text-white px-3 py-1 rounded-sm mb-3"
            data-sanity={getArticleDataAttribute('subcategory')}
          >
            {article.subcategory}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug" data-sanity={getArticleDataAttribute('title')}>
            {article.title}
          </h1>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/health-education')}
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#cd9651] transition-colors cursor-pointer group whitespace-nowrap"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-left-line text-sm group-hover:-translate-x-0.5 transition-transform"></i>
            </div>
            返回健康教育列表
          </button>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-gray-400 tracking-wide" data-sanity={getArticleDataAttribute('updatedDate')}>
              {article.updatedDate}
            </span>
            <span className="text-gray-200">·</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-user-line text-[#cd9651]" style={{ fontSize: '12px' }}></i>
              </div>
              <span className="text-[11px] text-[#cd9651] font-medium tracking-wide" data-sanity={getArticleDataAttribute('author')}>
                {article.author}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8 text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-time-line" style={{ fontSize: '13px' }}></i>
            </div>
            <span data-sanity={getArticleDataAttribute('readTime')}>{article.readTime}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-10 border-l-2 border-[#cd9651]/30 pl-4" data-sanity={getArticleDataAttribute('summary')}>
          {article.summary}
        </p>

        {article.body && article.body.length > 0 ? (
          <RichArticleRenderer
            getDataAttribute={getArticleDataAttribute}
            blocks={article.body}
          />
        ) : (
          article.content.map((section, idx) => (
            <div key={idx} className="mb-10">
              <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wide" data-sanity={getArticleDataAttribute(`content[${idx}].heading`)}>
                {section.heading}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4" data-sanity={getArticleDataAttribute(`content[${idx}].text`)}>
                {section.text}
              </p>
              {section.image?.url && (
                <div className="w-full h-[420px] rounded-xl overflow-hidden mb-4" data-sanity-edit-group data-sanity-edit-target>
                  <img
                    src={getSanityImageUrl(section.image, { width: 1200, height: 620, fit: 'crop', quality: 86 })}
                    alt={section.image.alt || section.heading}
                    className="w-full h-full object-cover object-top"
                    data-sanity={getArticleDataAttribute(`content[${idx}].image.url`)}
                  />
                </div>
              )}
            </div>
          ))
        )}

        {article.tips && (
          <div className="border border-stone-100 rounded-xl p-6 mb-10">
            <p className="text-xs font-semibold text-[#cd9651] tracking-widest mb-3 uppercase">
              {article.tips.title}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              {article.tips.content}
            </p>
          </div>
        )}

        {article.faq.length > 0 && (
          <section className="mt-12 mb-10 rounded-2xl overflow-hidden border border-[#e8ddd0] bg-[#faf7f2]">
            {article.faqTitle && (
              <div className="px-8 pt-8 pb-6">
                <h2
                  className="text-xl font-bold tracking-wide text-[#cd9651]"
                  style={{ fontFamily: "'Noto Serif TC', serif" }}
                  data-sanity={getArticleDataAttribute('faqTitle')}
                >
                  {article.faqTitle}
                </h2>
              </div>
            )}

            <div className="divide-y divide-[#e8ddd0]">
              {article.faq.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={`${article.articleId}-faq-${idx}`}>
                    <button
                      type="button"
                      className="w-full flex items-center gap-5 px-8 py-5 text-left hover:bg-[#f5f0e8] transition-colors duration-200 cursor-pointer"
                      onClick={() => setOpenFaqIndex((prev) => (prev === idx ? null : idx))}
                      aria-expanded={isOpen}
                    >
                      <span
                        className="text-sm font-semibold flex-shrink-0 w-8 text-[#cd9651]"
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <span
                        className="flex-1 text-sm font-semibold text-gray-800 leading-relaxed tracking-wide"
                        data-sanity={getArticleDataAttribute(`faq[${idx}].question`)}
                      >
                        {item.question}
                      </span>

                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-lg font-light text-[#cd9651] transition-transform duration-300">
                        {isOpen ? <i className="ri-close-line text-base"></i> : <i className="ri-add-line text-base"></i>}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p
                        className="pl-[52px] pr-8 pb-6 text-sm text-gray-600 leading-relaxed whitespace-pre-wrap"
                        data-sanity={getArticleDataAttribute(`faq[${idx}].answer`)}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {article.references && article.references.length > 0 && (
          <div className="border-t border-gray-100 pt-6 mb-8">
            <p className="text-xs font-semibold text-gray-300 tracking-widest mb-3 uppercase">延伸閱讀</p>
            <div className="flex flex-col gap-2">
              {article.references.map((ref, idx) => (
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
                  <span className="underline underline-offset-2 break-all" data-sanity={getArticleDataAttribute(`references[${idx}].text`)}>
                    {ref.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] text-gray-400 tracking-wide bg-gray-50 px-2.5 py-1 rounded-full"
              data-sanity={getArticleDataAttribute(`tags[${idx}]`)}
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-6">
          <button
            onClick={() => navigate('/health-education')}
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#cd9651] transition-colors cursor-pointer group whitespace-nowrap"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-left-line text-sm group-hover:-translate-x-0.5 transition-transform"></i>
            </div>
            返回健康教育列表
          </button>
        </div>
      </main>

      <CTASection
        title={page.ctaTitle}
        description={page.ctaDescription}
        buttonText={page.ctaButtonText}
        enableVisualEditing
        getDataAttribute={getHealthEducationPageDataAttribute}
      />
      <Footer />
    </div>
  );
}
