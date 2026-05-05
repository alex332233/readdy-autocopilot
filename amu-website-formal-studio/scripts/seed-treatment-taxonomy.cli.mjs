import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})
const shouldApply = process.argv.includes('--apply')

const taxonomyItems = [
  {
    _id: 'treatmentTaxonomyItem-herbal-internal',
    _type: 'treatmentTaxonomyItem',
    key: 'herbal-internal',
    category: 'insurance',
    icon: 'ri-hearts-line',
    insuranceName: '本草・歸元',
    doctorTagName: '內科',
  },
  {
    _id: 'treatmentTaxonomyItem-women-health',
    _type: 'treatmentTaxonomyItem',
    key: 'women-health',
    category: 'insurance',
    icon: 'ri-women-line',
    insuranceName: '月・悅・圓',
    doctorTagName: '婦科',
  },
  {
    _id: 'treatmentTaxonomyItem-pediatric-growth',
    _type: 'treatmentTaxonomyItem',
    key: 'pediatric-growth',
    category: 'insurance',
    icon: 'ri-seedling-line',
    insuranceName: '小苗・茁壯',
    doctorTagName: '兒少科',
  },
  {
    _id: 'treatmentTaxonomyItem-dermatology',
    _type: 'treatmentTaxonomyItem',
    key: 'dermatology',
    category: 'insurance',
    icon: 'ri-bard-line',
    insuranceName: '肌膚・煥采',
    doctorTagName: '皮膚科',
  },
  {
    _id: 'treatmentTaxonomyItem-acupuncture',
    _type: 'treatmentTaxonomyItem',
    key: 'acupuncture',
    category: 'insurance',
    icon: 'ri-crosshair-2-line',
    insuranceName: '經絡・導引',
    doctorTagName: '針灸科',
  },
  {
    _id: 'treatmentTaxonomyItem-facial',
    _type: 'treatmentTaxonomyItem',
    key: 'facial',
    category: 'featured',
    icon: 'ri-magic-line',
    featuredName: '御顏・緊緻',
    doctorTagName: '美顏針',
  },
  {
    _id: 'treatmentTaxonomyItem-growth',
    _type: 'treatmentTaxonomyItem',
    key: 'growth',
    category: 'featured',
    icon: 'ri-rocket-2-line',
    featuredName: '登峰・轉骨',
    doctorTagName: '轉骨',
  },
  {
    _id: 'treatmentTaxonomyItem-body',
    _type: 'treatmentTaxonomyItem',
    key: 'body',
    category: 'featured',
    icon: 'ri-bluesky-line',
    featuredName: '輕盈・體雕',
    doctorTagName: '體雕',
  },
  {
    _id: 'treatmentTaxonomyItem-eye',
    _type: 'treatmentTaxonomyItem',
    key: 'eye',
    category: 'featured',
    icon: 'ri-eye-line',
    featuredName: '明眸・亮視',
    doctorTagName: '眼針',
  },
  {
    _id: 'treatmentTaxonomyItem-laser',
    _type: 'treatmentTaxonomyItem',
    key: 'laser',
    category: 'featured',
    icon: 'ri-flashlight-line',
    featuredName: '光能・修復',
    doctorTagName: '雷射針灸',
  },
  {
    _id: 'treatmentTaxonomyItem-decoction',
    _type: 'treatmentTaxonomyItem',
    key: 'decoction',
    category: 'featured',
    icon: 'ri-flask-line',
    featuredName: '深癒・淬鍊',
    doctorTagName: '客製水煎藥',
  },
  {
    _id: 'treatmentTaxonomyItem-fertility-reserved',
    _type: 'treatmentTaxonomyItem',
    key: 'fertility-reserved',
    category: 'reserved',
    icon: 'ri-flower-line',
    featuredName: '預留',
    doctorTagName: '備孕',
  },
]

const featuredCardKeyToTreatmentKey = {
  'card-facial': 'facial',
  'card-growth': 'growth',
  'card-pain': 'body',
  'card-fertility': 'eye',
  'card-weight': 'laser',
  'card-allergy': 'decoction',
}

const detailIdOrSlugToTreatmentKey = {
  'featuredTreatmentDetail-facial': 'facial',
  'featuredTreatmentDetail-growth': 'growth',
  facial: 'facial',
  growth: 'growth',
  body: 'body',
  eye: 'eye',
  laser: 'laser',
  decoction: 'decoction',
}

const treatmentDocIdByKey = new Map(taxonomyItems.map((item) => [item.key, item._id]))

const featuredPage = await client.fetch(`
  *[_id == "featuredTreatmentsPage"][0]{
    _id,
    cards[]{
      _key,
      title,
      detailSlug,
      treatmentRef
    }
  }
`)

const detailDocs = await client.fetch(`
  *[_type == "featuredTreatmentDetail" && !(_id in path("drafts.**"))]{
    _id,
    title,
    "slug": slug.current,
    treatmentRef
  }
`)

console.log(shouldApply ? 'Applying treatment taxonomy migration...' : 'Auditing treatment taxonomy migration...')
console.log(`Taxonomy documents: ${taxonomyItems.length}`)

for (const item of taxonomyItems) {
  console.log(`${shouldApply ? 'upsert' : 'would upsert'} ${item._id} (${item.category}/${item.key})`)
  if (shouldApply) await client.createOrReplace(item)
}

const pagePatch = {}
for (const card of featuredPage?.cards || []) {
  const treatmentKey = featuredCardKeyToTreatmentKey[card._key]
  const treatmentDocId = treatmentKey ? treatmentDocIdByKey.get(treatmentKey) : undefined

  if (!treatmentDocId) {
    console.warn(`No featured treatment mapping for card ${card._key || 'missing-key'} (${card.title || 'untitled'})`)
    continue
  }

  if (card.treatmentRef?._ref === treatmentDocId) {
    console.log(`already linked card ${card._key} -> ${treatmentKey}`)
    continue
  }

  pagePatch[`cards[_key=="${card._key}"].treatmentRef`] = {
    _type: 'reference',
    _ref: treatmentDocId,
  }
  console.log(`${shouldApply ? 'patch' : 'would patch'} card ${card._key} (${card.title || 'untitled'}) -> ${treatmentKey}`)
}

if (Object.keys(pagePatch).length > 0 && shouldApply) {
  await client.patch(featuredPage._id).set(pagePatch).commit()
}

for (const doc of detailDocs) {
  const treatmentKey = detailIdOrSlugToTreatmentKey[doc._id] || detailIdOrSlugToTreatmentKey[doc.slug]
  const treatmentDocId = treatmentKey ? treatmentDocIdByKey.get(treatmentKey) : undefined

  if (!treatmentDocId) {
    console.warn(`No detail treatment mapping for ${doc._id} (${doc.title || 'untitled'}, slug=${doc.slug || 'none'})`)
    continue
  }

  if (doc.treatmentRef?._ref === treatmentDocId) {
    console.log(`already linked detail ${doc._id} -> ${treatmentKey}`)
    continue
  }

  console.log(`${shouldApply ? 'patch' : 'would patch'} detail ${doc._id} -> ${treatmentKey}`)
  if (shouldApply) {
    await client
      .patch(doc._id)
      .set({treatmentRef: {_type: 'reference', _ref: treatmentDocId}})
      .commit()
  }
}

console.log(shouldApply ? 'Done.' : 'Audit complete. Re-run with --apply to write changes.')
