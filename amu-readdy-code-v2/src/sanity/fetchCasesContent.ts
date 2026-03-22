import type { LoaderFunctionArgs } from 'react-router-dom';
import { sanityClient } from './client';
import { defaultCasesPageContent } from './defaults/casesPage';
import { caseArticleQuery, casesPageQuery } from './queries';
import type {
  CaseAfterPhase,
  CaseAfterSection,
  CaseArticleContent,
  CaseBeforeSection,
  CaseInfoBox,
  CasesPageContent,
  SanityImage,
} from './types';

const mergeImage = (incoming: unknown, fallback?: SanityImage): SanityImage => {
  const image = incoming as Partial<SanityImage> | null;
  return {
    url: image?.url || fallback?.url || '',
    alt: image?.alt || fallback?.alt || '',
  };
};

const mergeBefore = (incoming: unknown, fallback?: CaseBeforeSection): CaseBeforeSection => {
  const section = incoming as Partial<CaseBeforeSection> | null;
  return {
    title: section?.title || fallback?.title || '',
    items: Array.isArray(section?.items) ? section.items.filter(Boolean) : fallback?.items || [],
  };
};

const mergePhase = (incoming: unknown, fallback?: CaseAfterPhase): CaseAfterPhase => {
  const phase = incoming as Partial<CaseAfterPhase> | null;
  return {
    period: phase?.period || fallback?.period || '',
    improvements: Array.isArray(phase?.improvements) ? phase.improvements.filter(Boolean) : fallback?.improvements || [],
  };
};

const mergeAfter = (incoming: unknown, fallback?: CaseAfterSection): CaseAfterSection => {
  const section = incoming as Partial<CaseAfterSection> | null;
  return {
    title: section?.title || fallback?.title || '',
    phases:
      Array.isArray(section?.phases) && section.phases.length > 0
        ? section.phases.map((phase, index) => mergePhase(phase, fallback?.phases[index]))
        : fallback?.phases || [],
  };
};

const mergeInfoBox = (incoming: unknown, fallback?: CaseInfoBox): CaseInfoBox | undefined => {
  if (!incoming && !fallback) return undefined;
  const box = incoming as Partial<CaseInfoBox> | null;
  return {
    title: box?.title || fallback?.title || '',
    content: box?.content || fallback?.content || '',
  };
};

const mergeArticle = (incoming: unknown, fallback?: CaseArticleContent): CaseArticleContent => {
  const article = incoming as Partial<CaseArticleContent> | null;
  return {
    caseId: Number(article?.caseId || fallback?.caseId || 0),
    title: article?.title || fallback?.title || '',
    category: article?.category || fallback?.category || '',
    tags: Array.isArray(article?.tags) ? article.tags.filter(Boolean) : fallback?.tags || [],
    doctor: article?.doctor || fallback?.doctor || '',
    fbLink: article?.fbLink || fallback?.fbLink || '',
    publishDate: article?.publishDate || fallback?.publishDate || '',
    coverImage: mergeImage(article?.coverImage, fallback?.coverImage),
    description: article?.description || fallback?.description || '',
    before: mergeBefore(article?.before, fallback?.before),
    after: mergeAfter(article?.after, fallback?.after),
    conclusion: article?.conclusion || fallback?.conclusion || '',
    tips: mergeInfoBox(article?.tips, fallback?.tips),
    medicalInfo: mergeInfoBox(article?.medicalInfo, fallback?.medicalInfo),
    references: Array.isArray(article?.references) ? article.references.filter(Boolean) : fallback?.references,
  };
};

export async function fetchCasesPageContent() {
  if (!sanityClient) return defaultCasesPageContent;

  const data = (await sanityClient.fetch(casesPageQuery)) as { page?: Partial<CasesPageContent>; articles?: unknown[] } | null;
  if (!data) return defaultCasesPageContent;

  return {
    title: data.page?.title || defaultCasesPageContent.title,
    heroTitle: data.page?.heroTitle || defaultCasesPageContent.heroTitle,
    heroSubtitle: data.page?.heroSubtitle || defaultCasesPageContent.heroSubtitle,
    ctaTitle: data.page?.ctaTitle || defaultCasesPageContent.ctaTitle,
    ctaDescription: data.page?.ctaDescription || defaultCasesPageContent.ctaDescription,
    ctaButtonText: data.page?.ctaButtonText || defaultCasesPageContent.ctaButtonText,
    articles:
      Array.isArray(data.articles) && data.articles.length > 0
        ? data.articles.map((article, index) => mergeArticle(article, defaultCasesPageContent.articles[index]))
        : defaultCasesPageContent.articles,
  };
}

export async function fetchCaseArticleContent({ params }: LoaderFunctionArgs) {
  const caseId = Number(params.id);
  if (!Number.isFinite(caseId)) return null;

  if (!sanityClient) {
    const article = defaultCasesPageContent.articles.find((item) => item.caseId === caseId) || null;
    return article ? { page: defaultCasesPageContent, article } : null;
  }

  const [pageData, articleData] = await Promise.all([
    sanityClient.fetch(casesPageQuery),
    sanityClient.fetch(caseArticleQuery, { caseId }),
  ]);

  const page = {
    title: pageData?.page?.title || defaultCasesPageContent.title,
    heroTitle: pageData?.page?.heroTitle || defaultCasesPageContent.heroTitle,
    heroSubtitle: pageData?.page?.heroSubtitle || defaultCasesPageContent.heroSubtitle,
    ctaTitle: pageData?.page?.ctaTitle || defaultCasesPageContent.ctaTitle,
    ctaDescription: pageData?.page?.ctaDescription || defaultCasesPageContent.ctaDescription,
    ctaButtonText: pageData?.page?.ctaButtonText || defaultCasesPageContent.ctaButtonText,
    articles: defaultCasesPageContent.articles,
  };

  if (!articleData) {
    const fallbackArticle = defaultCasesPageContent.articles.find((article) => article.caseId === caseId) || null;
    return fallbackArticle ? { page, article: fallbackArticle } : null;
  }

  const fallback = defaultCasesPageContent.articles.find((article) => article.caseId === caseId);
  return {
    page,
    article: mergeArticle(articleData, fallback),
  };
}
