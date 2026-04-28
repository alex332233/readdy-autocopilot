import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const ref = (key) => ({
  _key: key.replace(/[^a-zA-Z0-9_-]/g, '-'),
  _type: 'reference',
  _ref: `treatmentTaxonomyItem-${key}`,
  _weak: true,
})

const insuranceKeyBySlug = {
  internal: 'herbal-internal',
  gynecology: 'women-health',
  pediatrics: 'pediatric-growth',
  dermatology: 'dermatology',
  acupuncture: 'acupuncture',
}

const insuranceKeyByName = {
  內科: 'herbal-internal',
  婦科: 'women-health',
  兒科: 'pediatric-growth',
  兒少科: 'pediatric-growth',
  皮膚科: 'dermatology',
  針灸科: 'acupuncture',
}

const featuredKeyByText = [
  [/美顏針|中醫美容|膚況|膚質|針灸雕塑/, 'facial'],
  [/轉骨|兒少成長|小兒轉骨/, 'growth'],
  [/減重|體雕|漢方減重|中藥減重/, 'body'],
  [/眼針|框內針|近視/, 'eye'],
  [/雷射針灸|雷射/, 'laser'],
  [/水藥|水煎藥|珍貴藥材|客製化水藥/, 'decoction'],
]

const uniqueRefs = (keys) =>
  Array.from(new Set(keys.filter(Boolean))).map((key) => ref(key))

const getInsuranceKey = (group) => insuranceKeyBySlug[group?.slug] || insuranceKeyByName[group?.name]

const getFeaturedKeysFromText = (text) => {
  if (!text) return []

  return featuredKeyByText
    .filter(([pattern]) => pattern.test(text))
    .map(([, key]) => key)
}

const getFeaturedKeysFromDoctor = (doctor) => {
  const texts = [
    ...(doctor.specialTreatments || []),
    ...(doctor.specialtyGroups || [])
      .filter((group) => group.slug === 'beauty' || group.name === '中醫美容')
      .flatMap((group) => [group.name, ...(group.items || [])]),
  ]

  return texts.flatMap(getFeaturedKeysFromText)
}

const publishedDoctors = await client.fetch(`
  *[_type == "doctorProfile" && !(_id in path("drafts.**"))] | order(doctorId asc){
    ...,
    specialtyGroups[]{
      ...,
      items
    },
    specialTreatments
  }
`)

if (!publishedDoctors.length) {
  throw new Error('No published doctorProfile documents found. Draft seed needs existing doctor data as a base.')
}

let seededCount = 0

for (const doctor of publishedDoctors) {
  const insuranceKeys = (doctor.specialtyGroups || []).map(getInsuranceKey)
  const featuredKeys = getFeaturedKeysFromDoctor(doctor)
  const draftId = doctor._id.startsWith('drafts.') ? doctor._id : `drafts.${doctor._id}`
  const draftDoc = {
    ...doctor,
    _id: draftId,
    _type: 'doctorProfile',
    insuranceSpecialtyRefs: uniqueRefs(insuranceKeys),
    featuredTreatmentRefs: uniqueRefs(featuredKeys),
  }

  delete draftDoc._createdAt
  delete draftDoc._updatedAt
  delete draftDoc._rev

  await client.createOrReplace(draftDoc)
  seededCount += 1

  console.log(
    `Seeded ${draftId}: ${draftDoc.insuranceSpecialtyRefs.length} insurance refs, ${draftDoc.featuredTreatmentRefs.length} featured refs.`,
  )
}

console.log(`Done. Seeded ${seededCount} doctorProfile draft documents.`)
console.log('Published doctorProfile documents were not patched.')
