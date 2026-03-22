import type {LoaderFunctionArgs} from 'react-router-dom';
import {sanityClient} from './client';
import {defaultHealthEducationPageContent} from './defaults/healthEducationPage';
import {healthEducationArticleQuery, healthEducationPageQuery} from './queries';
import type {
  HealthEducationArticleContent,
  HealthEducationCategory,
  HealthEducationPageContent,
  LinkItem,
  SanityImage,
} from './types';

const mergeImage = (incoming: unknown, fallback?: SanityImage): SanityImage => {
  const image = incoming as Partial<SanityImage> | null;
  return {
    url: image?.url || fallback?.url || '',
    alt: image?.alt || fallback?.alt || '',
  };
};

const mergeLink = (incoming: unknown, fallback?: LinkItem): LinkItem => {
  const link = incoming as Partial<LinkItem> | null;
  return {
    text: link?.text || fallback?.text || '',
    href: link?.href || fallback?.href || '',
  };
};

const mergeCategory = (incoming: unknown, fallback?: HealthEducationCategory): HealthEducationCategory => {
  const category = incoming as Partial<HealthEducationCategory> | null;
  return {
    name: category?.name || fallback?.name || '',
    subcategories: Array.isArray(category?.subcategories)
      ? category.subcategories.filter(Boolean)
      : fallback?.subcategories || [],
  };
};

const mergeArticle = (
  incoming: unknown,
  fallback?: HealthEducationArticleContent,
): HealthEducationArticleContent => {
  const article = incoming as Partial<HealthEducationArticleContent> | null;
  return {
    articleId: Number(article?.articleId || fallback?.articleId || 0),
    title: article?.title || fallback?.title || '',
    category: article?.category || fallback?.category || '',
    subcategory: article?.subcategory || fallback?.subcategory || '',
    tags: Array.isArray(article?.tags) ? article.tags.filter(Boolean) : fallback?.tags || [],
    author: article?.author || fallback?.author || '',
    publishDate: article?.publishDate || fallback?.publishDate || '',
    updatedDate: article?.updatedDate || fallback?.updatedDate || '',
    readTime: article?.readTime || fallback?.readTime || '',
    views: Number(article?.views || fallback?.views || 0),
    summary: article?.summary || fallback?.summary || '',
    coverImage: mergeImage(article?.coverImage, fallback?.coverImage),
    content:
      Array.isArray(article?.content) && article.content.length > 0
        ? article.content.map((section, index) => {
            const incomingSection = section as Partial<HealthEducationArticleContent['content'][number]> | null;
            const fallbackSection = fallback?.content[index];
            return {
              heading: incomingSection?.heading || fallbackSection?.heading || '',
              text: incomingSection?.text || fallbackSection?.text || '',
              image: incomingSection?.image || fallbackSection?.image
                ? mergeImage(incomingSection?.image, fallbackSection?.image)
                : undefined,
            };
          })
        : fallback?.content || [],
    tips: article?.tips || fallback?.tips,
    references: Array.isArray(article?.references)
      ? article.references.map((reference, index) => mergeLink(reference, fallback?.references?.[index]))
      : fallback?.references,
  };
};

export async function fetchHealthEducationPageContent() {
  if (!sanityClient) return defaultHealthEducationPageContent;

  const data = (await sanityClient.fetch(healthEducationPageQuery)) as
    | {page?: Partial<HealthEducationPageContent>; articles?: unknown[]}
    | null;
  if (!data) return defaultHealthEducationPageContent;

  return {
    title: data.page?.title || defaultHealthEducationPageContent.title,
    heroTitle: data.page?.heroTitle || defaultHealthEducationPageContent.heroTitle,
    heroSubtitle: data.page?.heroSubtitle || defaultHealthEducationPageContent.heroSubtitle,
    categories:
      Array.isArray(data.page?.categories) && data.page.categories.length > 0
        ? data.page.categories.map((category, index) => mergeCategory(category, defaultHealthEducationPageContent.categories[index]))
        : defaultHealthEducationPageContent.categories,
    ctaTitle: data.page?.ctaTitle || defaultHealthEducationPageContent.ctaTitle,
    ctaDescription: data.page?.ctaDescription || defaultHealthEducationPageContent.ctaDescription,
    ctaButtonText: data.page?.ctaButtonText || defaultHealthEducationPageContent.ctaButtonText,
    articles:
      Array.isArray(data.articles) && data.articles.length > 0
        ? data.articles.map((article, index) => mergeArticle(article, defaultHealthEducationPageContent.articles[index]))
        : defaultHealthEducationPageContent.articles,
  };
}

export async function fetchHealthEducationArticleContent({params}: LoaderFunctionArgs) {
  const articleId = Number(params.id);
  if (!Number.isFinite(articleId)) return null;

  if (!sanityClient) {
    const article = defaultHealthEducationPageContent.articles.find((item) => item.articleId === articleId) || null;
    return article ? {page: defaultHealthEducationPageContent, article} : null;
  }

  const [pageData, articleData] = await Promise.all([
    sanityClient.fetch(healthEducationPageQuery),
    sanityClient.fetch(healthEducationArticleQuery, {articleId}),
  ]);

  const page = {
    title: pageData?.page?.title || defaultHealthEducationPageContent.title,
    heroTitle: pageData?.page?.heroTitle || defaultHealthEducationPageContent.heroTitle,
    heroSubtitle: pageData?.page?.heroSubtitle || defaultHealthEducationPageContent.heroSubtitle,
    categories:
      Array.isArray(pageData?.page?.categories) && pageData.page.categories.length > 0
        ? pageData.page.categories.map((category: unknown, index: number) =>
            mergeCategory(category, defaultHealthEducationPageContent.categories[index]),
          )
        : defaultHealthEducationPageContent.categories,
    ctaTitle: pageData?.page?.ctaTitle || defaultHealthEducationPageContent.ctaTitle,
    ctaDescription: pageData?.page?.ctaDescription || defaultHealthEducationPageContent.ctaDescription,
    ctaButtonText: pageData?.page?.ctaButtonText || defaultHealthEducationPageContent.ctaButtonText,
    articles: defaultHealthEducationPageContent.articles,
  };

  if (!articleData) {
    const fallbackArticle = defaultHealthEducationPageContent.articles.find((article) => article.articleId === articleId) || null;
    return fallbackArticle ? {page, article: fallbackArticle} : null;
  }

  const fallback = defaultHealthEducationPageContent.articles.find((article) => article.articleId === articleId);
  return {
    page,
    article: mergeArticle(articleData, fallback),
  };
}
