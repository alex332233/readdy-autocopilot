import { sanityClient } from './client';
import { defaultFeaturedTreatmentDetails, defaultFeaturedTreatmentsPageContent } from './defaults/featuredTreatments';
import { featuredTreatmentDetailQuery, featuredTreatmentsPageQuery } from './queries';
import type {
  FeaturedTreatmentCardContent,
  FeaturedTreatmentDetailContent,
  FeaturedTreatmentSection,
  FeaturedTreatmentSectionItem,
  FeaturedTreatmentCase,
  SanityImage,
} from './types';

const mergeImage = (incoming: unknown, fallback?: SanityImage): SanityImage | undefined => {
  const image = incoming as Partial<SanityImage> | null;
  if (!image && !fallback) return undefined;
  return {
    url: image?.url || fallback?.url || '',
    alt: image?.alt || fallback?.alt || '',
  };
};

const mergeTags = (incoming: unknown, fallback: string[]) => {
  if (!Array.isArray(incoming) || incoming.length === 0) return fallback;
  return incoming.map((tag) => String(tag));
};

const mergeCard = (incoming: unknown, fallback?: FeaturedTreatmentCardContent): FeaturedTreatmentCardContent => {
  const card = incoming as Partial<FeaturedTreatmentCardContent> | null;
  return {
    _key: card?._key || fallback?._key,
    title: fallback?.title || card?.title || '',
    englishTitle: fallback?.englishTitle || card?.englishTitle || '',
    icon: fallback?.icon || card?.icon || '',
    color: fallback?.color || card?.color || '#cd9651',
    image: mergeImage(card?.image, fallback?.image),
    treatmentTitle: fallback?.treatmentTitle || card?.treatmentTitle || '',
    description: card?.description || fallback?.description || '',
    tags: mergeTags(card?.tags, fallback?.tags || []),
    detailSlug: fallback?.detailSlug || card?.detailSlug,
  };
};

const findMatchingCard = (
  cards: FeaturedTreatmentCardContent[],
  fallback: FeaturedTreatmentCardContent,
) =>
  cards.find((card) =>
    (card.detailSlug && fallback.detailSlug && card.detailSlug === fallback.detailSlug) ||
    (card.title && card.title === fallback.title) ||
    (card.englishTitle && card.englishTitle === fallback.englishTitle),
  );

const mergeItem = (incoming: unknown, fallback?: FeaturedTreatmentSectionItem): FeaturedTreatmentSectionItem => {
  const item = incoming as Partial<FeaturedTreatmentSectionItem> | null;
  return {
    subtitle: item?.subtitle || fallback?.subtitle || '',
    text: item?.text || fallback?.text || '',
  };
};

const mergeCase = (incoming: unknown, fallback?: FeaturedTreatmentCase): FeaturedTreatmentCase => {
  const item = incoming as Partial<FeaturedTreatmentCase> | null;
  return {
    label: item?.label || fallback?.label || '',
    name: item?.name || fallback?.name,
    text: item?.text || fallback?.text || '',
    link: item?.link || fallback?.link,
    image: mergeImage(item?.image, fallback?.image),
  };
};

const mergeSection = (incoming: unknown, fallback?: FeaturedTreatmentSection): FeaturedTreatmentSection => {
  const section = incoming as Partial<FeaturedTreatmentSection> | null;
  return {
    title: section?.title || fallback?.title || '',
    icon: section?.icon || fallback?.icon,
    layout: section?.layout || fallback?.layout || 'textOnly',
    eyebrow: section?.eyebrow || fallback?.eyebrow,
    content: section?.content || fallback?.content,
    additionalContent: section?.additionalContent || fallback?.additionalContent,
    image: mergeImage(section?.image, fallback?.image),
    items: Array.isArray(section?.items) && section.items.length > 0 ? section.items.map((item, index) => mergeItem(item, fallback?.items?.[index])) : fallback?.items,
    cases: Array.isArray(section?.cases) && section.cases.length > 0 ? section.cases.map((item, index) => mergeCase(item, fallback?.cases?.[index])) : fallback?.cases,
  };
};

export async function fetchFeaturedTreatmentsPageContent() {
  if (!sanityClient) return defaultFeaturedTreatmentsPageContent;

  const data = (await sanityClient.fetch(featuredTreatmentsPageQuery)) as Partial<typeof defaultFeaturedTreatmentsPageContent> | null;
  if (!data) return defaultFeaturedTreatmentsPageContent;

  const incomingCards = Array.isArray(data.cards) ? (data.cards as Partial<FeaturedTreatmentCardContent>[]) : [];
  const mergedCards =
    incomingCards.length > 0
      ? incomingCards.map((card) => {
          const fallback = findMatchingCard(defaultFeaturedTreatmentsPageContent.cards, {
            _key: card._key,
            title: card.title || '',
            englishTitle: card.englishTitle || '',
            icon: card.icon || '',
            color: card.color || '#cd9651',
            image: undefined,
            treatmentTitle: card.treatmentTitle || '',
            description: card.description || '',
            tags: Array.isArray(card.tags) ? card.tags.map((tag) => String(tag)) : [],
            detailSlug: card.detailSlug,
          });

          return mergeCard(card, fallback);
        })
      : defaultFeaturedTreatmentsPageContent.cards;

  return {
    title: data.title || defaultFeaturedTreatmentsPageContent.title,
    heroTitle: data.heroTitle || defaultFeaturedTreatmentsPageContent.heroTitle,
    heroDescription: data.heroDescription || defaultFeaturedTreatmentsPageContent.heroDescription,
    cards: mergedCards,
    relatedExtraCard: mergeCard(
      (data as { relatedExtraCard?: unknown } | null)?.relatedExtraCard,
      defaultFeaturedTreatmentsPageContent.relatedExtraCard,
    ),
  };
}

export async function fetchFeaturedTreatmentDetailContent({ params }: { params: { slug?: string } }) {
  const slug = params.slug || 'facial';
  const fallback = defaultFeaturedTreatmentDetails[slug] || defaultFeaturedTreatmentDetails.facial;
  if (!sanityClient) return fallback;

  const data = (await sanityClient.fetch(featuredTreatmentDetailQuery, { slug })) as Partial<FeaturedTreatmentDetailContent> | null;
  if (!data) return fallback;

  return {
    title: fallback.title || data.title || '',
    slug: data.slug || fallback.slug,
    subtitle: fallback.subtitle || data.subtitle || '',
    themeColor: fallback.themeColor || data.themeColor || '#cd9651',
    primaryImage: mergeImage(data.primaryImage, fallback.primaryImage),
    secondaryImage: mergeImage(data.secondaryImage, fallback.secondaryImage),
    sections: Array.isArray(data.sections) && data.sections.length > 0
      ? data.sections.map((section, index) => mergeSection(section, fallback.sections[index]))
      : fallback.sections,
    featuredCases:
      Array.isArray(data.featuredCases) && data.featuredCases.length > 0
        ? data.featuredCases.map((item, index) => mergeCase(item, fallback.featuredCases?.[index]))
        : fallback.featuredCases,
    disclaimer: data.disclaimer || fallback.disclaimer,
    cta: {
      title: data.cta?.title || fallback.cta.title,
      description: data.cta?.description || fallback.cta.description,
      buttonText: data.cta?.buttonText || fallback.cta.buttonText,
    },
  };
}
