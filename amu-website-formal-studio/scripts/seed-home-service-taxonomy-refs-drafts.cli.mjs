import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const treatmentKeyByServiceTitle = {
  '本草・歸元': 'herbal-internal',
  '月・悅・圓': 'women-health',
  '小苗・茁壯': 'pediatric-growth',
  '肌膚・煥采': 'dermatology',
  '御顏・緊緻': 'facial',
  '輕盈・體雕': 'body',
  '登峰・轉骨': 'growth',
  '明眸・亮視': 'eye',
}

const ref = (key) => ({
  _type: 'reference',
  _ref: `treatmentTaxonomyItem-${key}`,
  _weak: true,
})

const published = await client.fetch(`*[_id == "homePage"][0]{...}`)

if (!published?._id) {
  throw new Error('Missing published homePage. Draft seed needs the current published page as a base.')
}

const draftExists = await client.fetch(`defined(*[_id == "drafts.homePage"][0]._id)`)

if (!draftExists) {
  const draft = {...published, _id: 'drafts.homePage'}
  delete draft._createdAt
  delete draft._updatedAt
  delete draft._rev

  await client.createIfNotExists(draft)
  console.log('Created drafts.homePage from published homePage.')
}

const draft = await client.fetch(`
  *[_id == "drafts.homePage"][0]{
    services{
      items[]{
        _key,
        title,
        treatmentRef,
        subtitle,
        description
      }
    }
  }
`)

const items = (draft?.services?.items || []).slice(0, 8)
let patch = client.patch('drafts.homePage')
let count = 0
const serviceTreatmentRefs = []

for (let index = 0; index < items.length; index += 1) {
  const item = items[index]
  const treatmentKey =
    item?.treatmentRef?._ref?.replace(/^drafts\./, '').replace(/^treatmentTaxonomyItem-/, '') ||
    treatmentKeyByServiceTitle[item?.title]

  if (!treatmentKey) {
    console.warn(`No treatment taxonomy mapping for service item ${item?.title || item?._key || index}`)
    continue
  }

  const path = item._key
    ? `services.items[_key=="${item._key}"].treatmentRef`
    : `services.items[${index}].treatmentRef`

  patch = patch.set({[path]: ref(treatmentKey)})
  serviceTreatmentRefs.push({
    _key: item._key || `service-treatment-${index}`,
    ...ref(treatmentKey),
  })
  count += 1
}

if (count > 0) {
  patch = patch.set({'services.serviceTreatmentRefs': serviceTreatmentRefs})
  await patch.commit()
}

console.log(`Seeded ${count} home service treatment references on drafts.homePage.`)
console.log(`Seeded services.serviceTreatmentRefs with ${serviceTreatmentRefs.length} references.`)
console.log('Published homePage was not patched.')
