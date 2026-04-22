import type { SanityClient } from '@sanity/client';
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

const mergeSeo = (incoming: unknown, fallback?: SeoMetadata): SeoMetadata | undefined => {
  if (!incoming && !fallback) return undefined;
  const seo = incoming as Partial<SeoMetadata> | null;
  return {
    title: seo?.title || fallback?.title || '',
    description: seo?.description || fallback?.description || '',
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

const mergeArticle = (incoming: unknown, fallback?: CaseArticleContent): CaseArticleContent => {
  const article = incoming as Partial<CaseArticleContent> | null;
  return {
    caseId: Number(article?.caseId || fallback?.caseId || 0),
    slug: article?.slug || fallback?.slug,
    title: article?.title || fallback?.title || '',
    category: article?.category || fallback?.category || '',
    tags: Array.isArray(article?.tags) ? article.tags.filter(Boolean) : fallback?.tags || [],
    doctor: article?.doctor || fallback?.doctor || '',
    fbLink: article?.fbLink || fallback?.fbLink || '',
    publishDate: article?.publishDate || fallback?.publishDate || '',
    coverImage: mergeImage(article?.coverImage, fallback?.coverImage),
    body: mergeRichArticleBody(article?.body),
    description: article?.description || fallback?.description || '',
    before: mergeBefore(article?.before, fallback?.before),
    after: mergeAfter(article?.after, fallback?.after),
    conclusion: article?.conclusion || fallback?.conclusion || '',
    tips: mergeInfoBox(article?.tips, fallback?.tips),
    medicalInfo: mergeInfoBox(article?.medicalInfo, fallback?.medicalInfo),
    references: Array.isArray(article?.references) ? article.references.filter(Boolean) : fallback?.references,
    seo: mergeSeo(article?.seo, fallback?.seo),
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

export async function fetchCaseArticleContent(
  { params }: Pick<LoaderFunctionArgs, 'params'>,
  clientOverride?: SanityFetchClient | null,
) {
  const slugOrId = params.id || '';
  const parsedCaseId = Number(slugOrId);
  const caseId = Number.isFinite(parsedCaseId) ? parsedCaseId : null;
  if (!slugOrId) return null;
  const client = clientOverride || sanityClient;

  if (!client) {
    const article =
      defaultCasesPageContent.articles.find(
        (item) => item.slug === slugOrId || (caseId !== null && item.caseId === caseId),
      ) || null;
    return article ? { page: defaultCasesPageContent, article } : null;
  }

  const [pageData, articleData] = await Promise.all([
    client.fetch(casesPageQuery),
    client.fetch(caseArticleQuery, { caseId, slug: slugOrId }),
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
    const fallbackArticle =
      defaultCasesPageContent.articles.find(
        (article) => article.slug === slugOrId || (caseId !== null && article.caseId === caseId),
      ) || null;
    return fallbackArticle ? { page, article: fallbackArticle } : null;
  }

  const fallback = defaultCasesPageContent.articles.find(
    (article) => article.slug === slugOrId || (caseId !== null && article.caseId === caseId),
  );
  return {
    page,
    article: mergeArticle(articleData, fallback),
  };
}
