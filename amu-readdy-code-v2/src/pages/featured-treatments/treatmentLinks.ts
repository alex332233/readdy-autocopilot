import type { FeaturedTreatmentCardContent } from '../../sanity/types';

const canonicalSlugs = new Set(['facial', 'growth', 'body', 'eye', 'laser', 'decoction']);

const canonicalSlugByCardKey: Record<string, string> = {
  'card-facial': 'facial',
  'card-growth': 'growth',
  'card-pain': 'body',
  'card-fertility': 'eye',
  'card-weight': 'laser',
  'card-allergy': 'decoction',
};

export const getFeaturedTreatmentDetailPath = (
  card: Pick<FeaturedTreatmentCardContent, '_key' | 'treatmentKey' | 'detailSlug'>,
) => {
  const slug =
    (card.treatmentKey && canonicalSlugs.has(card.treatmentKey) && card.treatmentKey) ||
    (card._key && canonicalSlugByCardKey[card._key]) ||
    (card.detailSlug && canonicalSlugs.has(card.detailSlug) && card.detailSlug);

  return slug ? `/featured-treatments/${slug}` : undefined;
};
