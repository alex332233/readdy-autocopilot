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
  CaseBeforeAfterSection,
  CaseInfoBox,
  CasesPageContent,
  LinkItem,
  RichArticleBlock,
  SanityImage,
  SeoMetadata,
} from './types';

type SanityFetchClient = Pick<SanityClient, 'fetch'>;

const mergeImage = (incoming: unknown, fallback?: SanityImage): SanityImage => {
  const image = incoming as Partial<SanityImage> | null;
  return {
    ...fallback,
    ...image,
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

const mergeBeforeAfter = (incoming: unknown, fallback?: CaseBeforeAfterSection): CaseBeforeAfterSection | undefined => {
  if (!incoming && !fallback) return undefined;
  const section = incoming as Partial<CaseBeforeAfterSection> | null;
  return {
    enabled: section?.enabled ?? fallback?.enabled ?? false,
    before: mergeBefore(section?.before, fallback?.before),
    after: mergeAfter(section?.after, fallback?.after),
  };
};

const mergeLink = (incoming: unknown, fallback?: LinkItem): LinkItem => {
  if (typeof incoming === 'string') {
    return {
      text: fallback?.text || incoming,
      href: incoming,
      kind: incoming.startsWith('/') ? 'internal' : 'external',
    };
  }

  const link = incoming as Partial<LinkItem> | null;
  const href = link?.href || fallback?.href || '';
  return {
    text: link?.text || fallback?.text || href,
    href,
    kind: link?.kind || fallback?.kind || (href.startsWith('/') ? 'internal' : 'external'),
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
  const useFallback = !article?.documentId;
  const legacyDescription = article?.description || (useFallback ? fallback?.description : '') || '';
  return {
    documentId: article?.documentId || fallback?.documentId,
    caseId: Number(article?.caseId || (useFallback ? fallback?.caseId : 0) || 0),
    priorityOrder: article?.priorityOrder ?? (useFallback ? fallback?.priorityOrder : undefined),
    slug: article?.slug || (useFallback ? fallback?.slug : undefined),
    title: article?.title || fallback?.title || '',
    category: article?.category || fallback?.category || '',
    tags: Array.isArray(article?.tags) ? article.tags.filter(Boolean) : useFallback ? fallback?.tags || [] : [],
    doctor: article?.doctor || (useFallback ? fallback?.doctor : '') || '',
    fbLink: article?.fbLink || (useFallback ? fallback?.fbLink : '') || '',
    publishDate: article?.publishDate || (useFallback ? fallback?.publishDate : '') || '',
    coverImage: mergeImage(article?.coverImage, useFallback ? fallback?.coverImage : undefined),
    summary: article?.summary || legacyDescription,
    body: mergeRichArticleBody(article?.body),
    beforeAfter: mergeBeforeAfter(article?.beforeAfter, useFallback ? fallback?.beforeAfter : undefined),
    description: legacyDescription,
    before: mergeBefore(article?.before, useFallback ? fallback?.before : undefined),
    after: mergeAfter(article?.after, useFallback ? fallback?.after : undefined),
    conclusion: article?.conclusion || (useFallback ? fallback?.conclusion : '') || '',
    tips: mergeInfoBox(article?.tips, useFallback ? fallback?.tips : undefined),
    medicalInfo: mergeInfoBox(article?.medicalInfo, useFallback ? fallback?.medicalInfo : undefined),
    references: Array.isArray(article?.references)
      ? article.references.map((reference, index) =>
          mergeLink(reference, useFallback ? fallback?.references?.[index] : undefined),
        )
      : useFallback
        ? fallback?.references
        : undefined,
    seo: mergeSeo(article?.seo, useFallback ? fallback?.seo : undefined),
  };
};

export async function fetchCasesPageContent(clientOverride?: SanityFetchClient | null) {
  const client = clientOverride || sanityClient;
  if (!client) return defaultCasesPageContent;

  const data = (await client.fetch(casesPageQuery)) as { page?: Partial<CasesPageContent>; articles?: unknown[] } | null;
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
  const documentId = decodeURIComponent(slugOrId);
  const draftDocumentId = documentId.startsWith('drafts.') ? documentId : `drafts.${documentId}`;
  if (!slugOrId) return null;
  const client = clientOverride || sanityClient;

  if (!client) {
    const article =
      defaultCasesPageContent.articles.find(
        (item) =>
          item.slug === slugOrId ||
          (caseId !== null && item.caseId === caseId) ||
          item.documentId === documentId ||
          item.documentId === draftDocumentId,
      ) || null;
    return article ? { page: defaultCasesPageContent, article } : null;
  }

  const [pageData, articleData] = await Promise.all([
    client.fetch(casesPageQuery),
    client.fetch(caseArticleQuery, { caseId, slug: slugOrId, documentId, draftDocumentId }),
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
        (article) =>
          article.slug === slugOrId ||
          (caseId !== null && article.caseId === caseId) ||
          article.documentId === documentId ||
          article.documentId === draftDocumentId,
      ) || null;
    return fallbackArticle ? { page, article: fallbackArticle } : null;
  }

  const fallback = defaultCasesPageContent.articles.find(
    (article) =>
      article.slug === slugOrId ||
      (caseId !== null && article.caseId === caseId) ||
      article.documentId === documentId ||
      article.documentId === draftDocumentId,
  );
  return {
    page,
    article: mergeArticle(articleData, fallback),
  };
}
