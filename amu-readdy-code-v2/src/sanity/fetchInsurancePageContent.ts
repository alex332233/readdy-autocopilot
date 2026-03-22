import {sanityClient} from './client';
import {defaultInsurancePageContent} from './defaults/insurancePage';
import {insurancePageQuery} from './queries';
import type {InsuranceOverviewCard, InsurancePageContent, InsuranceTreatmentCategory, InsuranceTreatmentItem, SanityImage} from './types';

const mergeImage = (incoming: unknown, fallback?: SanityImage): SanityImage => {
  const image = incoming as Partial<SanityImage> | null;
  return {
    url: image?.url || fallback?.url || '',
    alt: image?.alt || fallback?.alt || '',
  };
};

const mergeOverviewCard = (incoming: unknown, fallback?: InsuranceOverviewCard): InsuranceOverviewCard => {
  const card = incoming as Partial<InsuranceOverviewCard> | null;
  return {
    title: card?.title || fallback?.title || '',
    englishTitle: card?.englishTitle || fallback?.englishTitle || '',
    subtitle: card?.subtitle || fallback?.subtitle || '',
    icon: card?.icon || fallback?.icon || '',
    anchorId: card?.anchorId || fallback?.anchorId || '',
    image: mergeImage(card?.image, fallback?.image),
  };
};

const mergeTreatmentItem = (incoming: unknown, fallback?: InsuranceTreatmentItem): InsuranceTreatmentItem => {
  const item = incoming as Partial<InsuranceTreatmentItem> | null;
  return {
    title: item?.title || fallback?.title || '',
    description: item?.description || fallback?.description || '',
    tags: Array.isArray(item?.tags) ? item.tags.filter(Boolean) : fallback?.tags || [],
    caseLink: typeof item?.caseLink === 'boolean' ? item.caseLink : fallback?.caseLink,
  };
};

const mergeTreatmentCategory = (
  incoming: unknown,
  fallback?: InsuranceTreatmentCategory,
): InsuranceTreatmentCategory => {
  const category = incoming as Partial<InsuranceTreatmentCategory> | null;
  return {
    title: category?.title || fallback?.title || '',
    subtitle: category?.subtitle || fallback?.subtitle || '',
    englishTitle: category?.englishTitle || fallback?.englishTitle || '',
    icon: category?.icon || fallback?.icon || '',
    color: category?.color || fallback?.color || '#cd9651',
    treatments:
      Array.isArray(category?.treatments) && category.treatments.length > 0
        ? category.treatments.map((item, index) => mergeTreatmentItem(item, fallback?.treatments[index]))
        : fallback?.treatments || [],
  };
};

export async function fetchInsurancePageContent() {
  if (!sanityClient) return defaultInsurancePageContent;

  const data = (await sanityClient.fetch(insurancePageQuery)) as Partial<InsurancePageContent> | null;
  if (!data) return defaultInsurancePageContent;

  return {
    title: data.title || defaultInsurancePageContent.title,
    heroTitle: data.heroTitle || defaultInsurancePageContent.heroTitle,
    heroSubtitle: data.heroSubtitle || defaultInsurancePageContent.heroSubtitle,
    overviewCards:
      Array.isArray(data.overviewCards) && data.overviewCards.length > 0
        ? data.overviewCards.map((card, index) => mergeOverviewCard(card, defaultInsurancePageContent.overviewCards[index]))
        : defaultInsurancePageContent.overviewCards,
    detailedCategories:
      Array.isArray(data.detailedCategories) && data.detailedCategories.length > 0
        ? data.detailedCategories.map((category, index) =>
            mergeTreatmentCategory(category, defaultInsurancePageContent.detailedCategories[index]),
          )
        : defaultInsurancePageContent.detailedCategories,
  };
}
