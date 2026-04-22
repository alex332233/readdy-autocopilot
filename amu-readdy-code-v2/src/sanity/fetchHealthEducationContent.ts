import type { SanityClient } from '@sanity/client';
import type {LoaderFunctionArgs} from 'react-router-dom';
import {sanityClient} from './client';
import {defaultHealthEducationPageContent} from './defaults/healthEducationPage';
import {healthEducationArticleQuery, healthEducationPageQuery} from './queries';
import type {
  HealthEducationArticleContent,
  HealthEducationCategory,
  HealthEducationFaqItem,
  HealthEducationPageContent,
  HealthEducationSubcategory,
  LinkItem,
  RichArticleBlock,
  SanityImage,
  SeoMetadata,
} from './types';

type SanityFetchClient = Pick<SanityClient, 'fetch'>;

const mergeImage = (incoming: unknown, fallback?: SanityImage): SanityImage => {
  const image = incoming as Partial<SanityImage> | null;
  return {
    url: image?.url || fallback?.url || '',
    alt: image?.alt || fallback?.alt || '',
  };
};

const mergeOptionalImage = (incoming: unknown): SanityImage | undefined => {
  const image = incoming as Partial<SanityImage> | null;
  if (!image?.url) return undefined;

  return {
    url: image.url,
    alt: image.alt || '',
  };
};

const mergeLink = (incoming: unknown, fallback?: LinkItem): LinkItem => {
  const link = incoming as Partial<LinkItem> | null;
  return {
    text: link?.text || fallback?.text || '',
    href: link?.href || fallback?.href || '',
  };
};

const mergeSeo = (incoming: unknown, fallback?: SeoMetadata): SeoMetadata | undefined => {
  if (!incoming && !fallback) return undefined;
  const seo = incoming as Partial<SeoMetadata> | null;
  return {
    title: seo?.title || fallback?.title || '',
    description: seo?.description || fallback?.description || '',
  };
};

const mergeSubcategory = (
  incoming: unknown,
  fallback?: HealthEducationSubcategory,
): HealthEducationSubcategory => {
  const subcategory = incoming as Partial<HealthEducationSubcategory> | null;
  return {
    id: subcategory?.id || fallback?.id || '',
    name: subcategory?.name || fallback?.name || '',
  };
};

const mergeCategory = (incoming: unknown, fallback?: HealthEducationCategory): HealthEducationCategory => {
  const category = incoming as Partial<HealthEducationCategory> | null;
  return {
    id: category?.id || fallback?.id || '',
    name: category?.name || fallback?.name || '',
    subcategories: Array.isArray(category?.subcategories)
      ? category.subcategories.map((subcategory, index) =>
          mergeSubcategory(subcategory, fallback?.subcategories[index]),
        )
      : fallback?.subcategories || [],
  };
};

const mergeFaqItem = (incoming: unknown, fallback?: HealthEducationFaqItem): HealthEducationFaqItem => {
  const item = incoming as Partial<HealthEducationFaqItem> | null;
  return {
    question: item?.question || fallback?.question || '',
    answer: item?.answer || fallback?.answer || '',
  };
};

const mergeRichArticleBody = (incoming: unknown): RichArticleBlock[] | undefined => {
  if (!Array.isArray(incoming) || incoming.length === 0) return undefined;

  const blocks = incoming
    .map((item) => {
      const block = item as Partial<RichArticleBlock> | null;
      if (!block?._type || !block?._key) return null;

      if (block._type === 'image') {
        const imageBlock = block as Partial<Extract<RichArticleBlock, {_type: 'image'}>>;
        if (!imageBlock.url) return null;
        return {
          _key: imageBlock._key,
          _type: 'image' as const,
          url: imageBlock.url,
          alt: imageBlock.alt || '',
          caption: imageBlock.caption || '',
        };
      }

      if (block._type === 'richArticleDivider') {
        return {
          _key: block._key,
          _type: 'richArticleDivider' as const,
          style: 'line' as const,
        };
      }

      if (block._type === 'block') {
        const textBlock = block as Partial<Extract<RichArticleBlock, {_type: 'block'}>>;
        return {
          _key: textBlock._key,
          _type: 'block' as const,
          style: textBlock.style || 'normal',
          listItem: textBlock.listItem,
          level: textBlock.level,
          children: Array.isArray(textBlock.children)
            ? textBlock.children
                .map((child) => {
                  const span = child as { _key?: string; _type?: string; text?: string; marks?: string[] };
                  if (span?._type !== 'span' || !span?._key) return null;
                  return {
                    _key: span._key,
                    _type: 'span' as const,
                    text: span.text || '',
                    marks: Array.isArray(span.marks) ? span.marks : [],
                  };
                })
                .filter(Boolean)
            : [],
          markDefs: Array.isArray(textBlock.markDefs)
            ? textBlock.markDefs
                .map((mark) => {
                  const item = mark as { _key?: string; _type?: string; href?: string; openInNewTab?: boolean };
                  if (item?._type !== 'link' || !item?._key || !item?.href) return null;
                  return {
                    _key: item._key,
                    _type: 'link' as const,
                    href: item.href,
                    openInNewTab: item.openInNewTab,
                  };
                })
                .filter(Boolean)
            : [],
        };
      }

      return null;
    })
    .filter(Boolean) as RichArticleBlock[];

  return blocks.length > 0 ? blocks : undefined;
};

const mergeArticle = (
  incoming: unknown,
  fallback?: HealthEducationArticleContent,
): HealthEducationArticleContent => {
  const article = incoming as Partial<HealthEducationArticleContent> | null;
  return {
    articleId: Number(article?.articleId || fallback?.articleId || 0),
    slug: article?.slug || fallback?.slug,
    title: article?.title || fallback?.title || '',
    category: article?.category || fallback?.category || '',
    subcategory: article?.subcategory || fallback?.subcategory || '',
    tags: Array.isArray(article?.tags) ? article.tags.filter(Boolean) : fallback?.tags || [],
    author: article?.author || fallback?.author || '',
    publishDate: article?.publishDate || fallback?.publishDate || '',
    updatedDate: article?.updatedDate || fallback?.updatedDate || '',
    readTime: article?.readTime || fallback?.readTime || '',
    summary: article?.summary || fallback?.summary || '',
    coverImage: mergeImage(article?.coverImage, fallback?.coverImage),
    body: mergeRichArticleBody(article?.body),
    content:
      Array.isArray(article?.content) && article.content.length > 0
        ? article.content.map((section, index) => {
            const incomingSection = section as Partial<HealthEducationArticleContent['content'][number]> | null;
            const fallbackSection = fallback?.content[index];
            return {
              heading: incomingSection?.heading || fallbackSection?.heading || '',
              text: incomingSection?.text || fallbackSection?.text || '',
              image: mergeOptionalImage(incomingSection?.image),
            };
          })
        : fallback?.content || [],
    faq:
      Array.isArray(article?.faq) && article.faq.length > 0
        ? article.faq
            .map((item, index) => mergeFaqItem(item, fallback?.faq[index]))
            .filter((item) => item.question || item.answer)
        : fallback?.faq || [],
    tips: article?.tips || fallback?.tips,
    references: Array.isArray(article?.references)
      ? article.references.map((reference, index) => mergeLink(reference, fallback?.references?.[index]))
      : fallback?.references,
    seo: mergeSeo(article?.seo, fallback?.seo),
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
      Array.isArray((data as {categories?: unknown[]})?.categories) && (data as {categories?: unknown[]}).categories!.length > 0
        ? (data as {categories?: unknown[]}).categories!.map((category, index) =>
            mergeCategory(category, defaultHealthEducationPageContent.categories[index]),
          )
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

export async function fetchHealthEducationArticleContent(
  {params}: Pick<LoaderFunctionArgs, 'params'>,
  clientOverride?: SanityFetchClient | null,
) {
  const slugOrId = params.id || '';
  const parsedArticleId = Number(slugOrId);
  const articleId = Number.isFinite(parsedArticleId) ? parsedArticleId : null;
  if (!slugOrId) return null;
  const client = clientOverride || sanityClient;

  if (!client) {
    const article =
      defaultHealthEducationPageContent.articles.find(
        (item) => item.slug === slugOrId || (articleId !== null && item.articleId === articleId),
      ) || null;
    return article ? {page: defaultHealthEducationPageContent, article} : null;
  }

  const [pageData, articleData] = await Promise.all([
    client.fetch(healthEducationPageQuery),
    client.fetch(healthEducationArticleQuery, {articleId, slug: slugOrId}),
  ]);

  const page = {
    title: pageData?.page?.title || defaultHealthEducationPageContent.title,
    heroTitle: pageData?.page?.heroTitle || defaultHealthEducationPageContent.heroTitle,
    heroSubtitle: pageData?.page?.heroSubtitle || defaultHealthEducationPageContent.heroSubtitle,
    categories:
      Array.isArray(pageData?.categories) && pageData.categories.length > 0
        ? pageData.categories.map((category: unknown, index: number) =>
            mergeCategory(category, defaultHealthEducationPageContent.categories[index]),
          )
        : defaultHealthEducationPageContent.categories,
    ctaTitle: pageData?.page?.ctaTitle || defaultHealthEducationPageContent.ctaTitle,
    ctaDescription: pageData?.page?.ctaDescription || defaultHealthEducationPageContent.ctaDescription,
    ctaButtonText: pageData?.page?.ctaButtonText || defaultHealthEducationPageContent.ctaButtonText,
    articles: defaultHealthEducationPageContent.articles,
  };

  if (!articleData) {
    const fallbackArticle =
      defaultHealthEducationPageContent.articles.find(
        (article) => article.slug === slugOrId || (articleId !== null && article.articleId === articleId),
      ) || null;
    return fallbackArticle ? {page, article: fallbackArticle} : null;
  }

  const fallback = defaultHealthEducationPageContent.articles.find(
    (article) => article.slug === slugOrId || (articleId !== null && article.articleId === articleId),
  );
  return {
    page,
    article: mergeArticle(articleData, fallback),
  };
}
