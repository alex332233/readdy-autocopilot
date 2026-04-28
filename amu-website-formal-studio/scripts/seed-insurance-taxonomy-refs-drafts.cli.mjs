import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const treatmentKeyByOverviewCardKey = {
  'insurance-card-01': 'herbal-internal',
  'insurance-card-02': 'women-health',
  'insurance-card-03': 'pediatric-growth',
  'insurance-card-04': 'dermatology',
  'insurance-card-05': 'acupuncture',
}

const treatmentKeyByCategoryKey = {
  'insurance-category-01': 'herbal-internal',
  'insurance-category-02': 'women-health',
  'insurance-category-03': 'pediatric-growth',
  'insurance-category-04': 'dermatology',
  'insurance-category-05': 'acupuncture',
}

const taxonomyId = (key) => `treatmentTaxonomyItem-${key}`
const draftReference = (key) => ({_type: 'reference', _ref: taxonomyId(key), _weak: true})

const source = await client.fetch(`
  *[_id == "insurancePage"][0]{
    title,
    heroTitle,
    heroSubtitle,
    seo,
    overviewCards[]{
      _key,
      _type,
      title,
      englishTitle,
      subtitle,
      icon,
      anchorId,
      image
    },
    detailedCategories[]{
      _key,
      _type,
      title,
      subtitle,
      englishTitle,
      icon,
      color,
      treatments
    }
  }
`)

if (!source) {
  throw new Error('Missing published insurancePage. Draft seed needs the current published page as a base.')
}

const overviewCards = (source.overviewCards || []).map((card) => {
  const treatmentKey = treatmentKeyByOverviewCardKey[card._key]

  if (!treatmentKey) {
    console.warn(`No insurance taxonomy mapping for overview card ${card._key || 'missing-key'}`)
    return card
  }

  return {
    ...card,
    treatmentRef: draftReference(treatmentKey),
  }
})

const detailedCategories = (source.detailedCategories || []).map((category) => {
  const treatmentKey = treatmentKeyByCategoryKey[category._key]

  if (!treatmentKey) {
    console.warn(`No insurance taxonomy mapping for detailed category ${category._key || 'missing-key'}`)
    return category
  }

  return {
    ...category,
    treatmentRef: draftReference(treatmentKey),
  }
})

const draftDoc = {
  _id: 'drafts.insurancePage',
  _type: 'insurancePage',
  title: source.title,
  heroTitle: source.heroTitle,
  heroSubtitle: source.heroSubtitle,
  overviewCards,
  detailedCategories,
}

if (source.seo) draftDoc.seo = source.seo

await client.createOrReplace(draftDoc)

console.log(
  `Seeded draft insurancePage with ${overviewCards.length} overview references and ${detailedCategories.length} category references.`,
)
console.log('Done. Published insurancePage was not patched.')
