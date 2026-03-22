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
    title: card?.title || fallback?.title || '',
    englishTitle: card?.englishTitle || fallback?.englishTitle || '',
    icon: card?.icon || fallback?.icon || '',
    color: card?.color || fallback?.color || '#cd9651',
    treatmentTitle: card?.treatmentTitle || fallback?.treatmentTitle || '',
    description: card?.description || fallback?.description || '',
    tags: mergeTags(card?.tags, fallback?.tags || []),
    detailSlug: card?.detailSlug || fallback?.detailSlug,
  };
};

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
    text: item?.text || fallback?.text || '',
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

  return {
    title: data.title || defaultFeaturedTreatmentsPageContent.title,
    heroTitle: data.heroTitle || defaultFeaturedTreatmentsPageContent.heroTitle,
    heroDescription: data.heroDescription || defaultFeaturedTreatmentsPageContent.heroDescription,
    cards: Array.isArray(data.cards) && data.cards.length > 0
      ? data.cards.map((card, index) => mergeCard(card, defaultFeaturedTreatmentsPageContent.cards[index]))
      : defaultFeaturedTreatmentsPageContent.cards,
  };
}

export async function fetchFeaturedTreatmentDetailContent({ params }: { params: { slug?: string } }) {
  const slug = params.slug || 'facial';
  const fallback = defaultFeaturedTreatmentDetails[slug] || defaultFeaturedTreatmentDetails.facial;
  if (!sanityClient) return fallback;

  const data = (await sanityClient.fetch(featuredTreatmentDetailQuery, { slug })) as Partial<FeaturedTreatmentDetailContent> | null;
  if (!data) return fallback;

  return {
    title: data.title || fallback.title,
    slug: data.slug || fallback.slug,
    subtitle: data.subtitle || fallback.subtitle,
    themeColor: data.themeColor || fallback.themeColor,
    sections: Array.isArray(data.sections) && data.sections.length > 0
      ? data.sections.map((section, index) => mergeSection(section, fallback.sections[index]))
      : fallback.sections,
    disclaimer: data.disclaimer || fallback.disclaimer,
    cta: {
      title: data.cta?.title || fallback.cta.title,
      description: data.cta?.description || fallback.cta.description,
      buttonText: data.cta?.buttonText || fallback.cta.buttonText,
    },
  };
}
