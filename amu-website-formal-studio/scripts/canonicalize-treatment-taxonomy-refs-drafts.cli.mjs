import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const canonicalizeRef = (ref) => (typeof ref === 'string' ? ref.replace(/^drafts\./, '') : ref)

let tx = client.transaction()
let count = 0

const featuredPage = await client.fetch(`
  *[_id == "drafts.featuredTreatmentsPage"][0]{
    cards[]{
      _key,
      treatmentRef
    }
  }
`)

for (const card of featuredPage?.cards || []) {
  const ref = card?.treatmentRef?._ref
  const nextRef = canonicalizeRef(ref)

  if (ref && nextRef !== ref) {
    tx = tx.patch('drafts.featuredTreatmentsPage', (patch) =>
      patch.set({[`cards[_key=="${card._key}"].treatmentRef._ref`]: nextRef}),
    )
    count += 1
  }
}

const detailIds = [
  'drafts.featuredTreatmentDetail-body',
  'drafts.featuredTreatmentDetail-eye',
  'drafts.featuredTreatmentDetail-laser',
  'drafts.featuredTreatmentDetail-decoction',
]

const details = await client.fetch(
  `
    *[_id in $detailIds]{
      _id,
      treatmentRef
    }
  `,
  {detailIds},
)

for (const detail of details || []) {
  const ref = detail?.treatmentRef?._ref
  const nextRef = canonicalizeRef(ref)

  if (ref && nextRef !== ref) {
    tx = tx.patch(detail._id, (patch) => patch.set({'treatmentRef._ref': nextRef}))
    count += 1
  }
}

if (count > 0) {
  await tx.commit()
}

console.log(`Canonicalized ${count} draft treatment taxonomy references.`)
console.log('Published documents were not patched.')
