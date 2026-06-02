import {getCliClient} from 'sanity/cli'

const shouldApply = process.argv.includes('--apply')
const client = getCliClient({apiVersion: '2025-01-01'})

const ref = (key) => ({
  _type: 'reference',
  _ref: `treatmentTaxonomyItem-${key}`,
  _weak: true,
})

const homeServiceRefs = [
  ['service-01', 'herbal-internal'],
  ['service-02', 'women-health'],
  ['service-03', 'pediatric-growth'],
  ['service-04', 'dermatology'],
  ['service-05', 'facial'],
  ['service-06', 'body'],
  ['service-07', 'growth'],
  ['service-08', 'eye'],
]

const insuranceOverviewRefs = [
  ['insurance-card-01', 'herbal-internal'],
  ['insurance-card-02', 'women-health'],
  ['insurance-card-03', 'pediatric-growth'],
  ['insurance-card-04', 'dermatology'],
  ['insurance-card-05', 'acupuncture'],
]

const insuranceCategoryRefs = [
  ['insurance-category-01', 'herbal-internal'],
  ['insurance-category-02', 'women-health'],
  ['insurance-category-03', 'pediatric-growth'],
  ['insurance-category-04', 'dermatology'],
  ['insurance-category-05', 'acupuncture'],
]

const featuredCardRefs = [
  ['card-facial', 'facial'],
  ['card-pain', 'body'],
  ['card-growth', 'growth'],
  ['card-fertility', 'eye'],
  ['card-weight', 'laser'],
  ['card-allergy', 'decoction'],
]

const assertTaxonomyItemsExist = async () => {
  const keys = Array.from(
    new Set([
      ...homeServiceRefs,
      ...insuranceOverviewRefs,
      ...insuranceCategoryRefs,
      ...featuredCardRefs,
    ].map(([, key]) => key)),
  )
  const existingKeys = await client.fetch(
    `*[_type == "treatmentTaxonomyItem" && key in $keys].key`,
    {keys},
  )
  const missingKeys = keys.filter((key) => !existingKeys.includes(key))

  if (missingKeys.length > 0) {
    throw new Error(`Missing treatment taxonomy items: ${missingKeys.join(', ')}`)
  }
}

const assertDocumentExists = async (id) => {
  const exists = await client.fetch(`defined(*[_id == $id][0]._id)`, {id})
  if (!exists) throw new Error(`Missing published document: ${id}`)
}

const setArrayRefsByKey = (patch, fieldPath, mappings) => {
  for (const [itemKey, treatmentKey] of mappings) {
    patch = patch.set({[`${fieldPath}[_key=="${itemKey}"].treatmentRef`]: ref(treatmentKey)})
    console.log(`${shouldApply ? 'patch' : 'would patch'} ${fieldPath} ${itemKey} -> ${treatmentKey}`)
  }

  return patch
}

console.log(
  shouldApply
    ? 'Applying published taxonomy reference patch...'
    : 'Auditing published taxonomy reference patch...',
)

await assertTaxonomyItemsExist()
await Promise.all([
  assertDocumentExists('homePage'),
  assertDocumentExists('insurancePage'),
  assertDocumentExists('featuredTreatmentsPage'),
])

let homePatch = client.patch('homePage')
const serviceTreatmentRefs = homeServiceRefs.map(([itemKey, treatmentKey]) => ({
  _key: itemKey,
  ...ref(treatmentKey),
}))

homePatch = homePatch.set({'services.serviceTreatmentRefs': serviceTreatmentRefs})
homePatch = setArrayRefsByKey(homePatch, 'services.items', homeServiceRefs)
console.log(
  `${shouldApply ? 'patch' : 'would patch'} homePage services.serviceTreatmentRefs (${serviceTreatmentRefs.length})`,
)

let insurancePatch = client.patch('insurancePage')
insurancePatch = setArrayRefsByKey(insurancePatch, 'overviewCards', insuranceOverviewRefs)
insurancePatch = setArrayRefsByKey(insurancePatch, 'detailedCategories', insuranceCategoryRefs)

let featuredPatch = client.patch('featuredTreatmentsPage')
featuredPatch = setArrayRefsByKey(featuredPatch, 'cards', featuredCardRefs)

if (shouldApply) {
  await client.transaction().patch(homePatch).patch(insurancePatch).patch(featuredPatch).commit()
  console.log('Done.')
} else {
  console.log('Audit complete. Re-run with --apply to write changes.')
}
