import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})
const isEnabled = (value) => value === '1' || value === 'true'
const shouldApply = process.argv.includes('--apply') || isEnabled(process.env.SEED_DOCTOR_INFO_ITEMS_APPLY)
const includeDrafts = process.argv.includes('--include-drafts') || isEnabled(process.env.SEED_DOCTOR_INFO_ITEMS_INCLUDE_DRAFTS)

const toInfoItems = (items) =>
  Array.isArray(items)
    ? items
        .map((item) => (typeof item === 'string' ? item.trim() : ''))
        .filter(Boolean)
        .map((text, index) => ({
          _type: 'doctorProfileInfoItem',
          _key: `legacy-${index}-${Buffer.from(text).toString('base64url').slice(0, 12)}`,
          text,
        }))
    : []

const docs = await client.fetch(
  `
    *[
      _type == "doctorProfile" &&
      ($includeDrafts || !(_id in path("drafts.**")))
    ] | order(displayOrder asc, doctorId asc, _createdAt asc) {
      _id,
      name,
      education,
      educationItems,
      experience,
      experienceItems
    }
  `,
  {includeDrafts},
)

let changedCount = 0

for (const doc of docs) {
  const patchValues = {}

  if ((!Array.isArray(doc.educationItems) || doc.educationItems.length === 0) && Array.isArray(doc.education)) {
    const items = toInfoItems(doc.education)
    if (items.length > 0) patchValues.educationItems = items
  }

  if ((!Array.isArray(doc.experienceItems) || doc.experienceItems.length === 0) && Array.isArray(doc.experience)) {
    const items = toInfoItems(doc.experience)
    if (items.length > 0) patchValues.experienceItems = items
  }

  if (Object.keys(patchValues).length === 0) continue

  changedCount += 1
  const summary = Object.fromEntries(
    Object.entries(patchValues).map(([field, items]) => [field, items.map((item) => item.text)]),
  )

  if (shouldApply) {
    await client.patch(doc._id).set(patchValues).commit()
    console.log(`Patched ${doc.name || doc._id}: ${JSON.stringify(summary)}`)
  } else {
    console.log(`Would patch ${doc.name || doc._id}: ${JSON.stringify(summary)}`)
  }
}

console.log(
  `Done. ${shouldApply ? 'Patched' : 'Found'} ${changedCount} doctor profile(s). Drafts ${
    includeDrafts ? 'included' : 'excluded'
  }.${shouldApply ? '' : ' Run again with --apply or SEED_DOCTOR_INFO_ITEMS_APPLY=true to patch.'}`,
)
