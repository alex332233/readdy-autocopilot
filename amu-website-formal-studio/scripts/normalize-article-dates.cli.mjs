import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})
const isEnabled = (value) => value === '1' || value === 'true'
const shouldApply = process.argv.includes('--apply') || isEnabled(process.env.NORMALIZE_DATES_APPLY)
const includeDrafts = process.argv.includes('--include-drafts') || isEnabled(process.env.NORMALIZE_DATES_INCLUDE_DRAFTS)
const draftsOnly = isEnabled(process.env.NORMALIZE_DATES_DRAFTS_ONLY)

if (draftsOnly && !includeDrafts) {
  console.log('NORMALIZE_DATES_DRAFTS_ONLY=true enabled. Only draft documents will be checked.')
}

const dateFieldsByType = {
  healthEducationArticle: ['publishDate', 'updatedDate'],
  caseArticle: ['publishDate'],
}

const formatDateValue = (value) => {
  if (typeof value !== 'string' || value.length === 0) return null
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value

  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return null

  return parsed.toISOString().slice(0, 10)
}

let changedCount = 0
let skippedCount = 0

for (const [type, fields] of Object.entries(dateFieldsByType)) {
  const docs = await client.fetch(
    `
      *[
        _type == $type &&
        (
          ($draftsOnly && _id in path("drafts.**")) ||
          (!$draftsOnly && ($includeDrafts || !(_id in path("drafts.**"))))
        )
      ]{
        _id,
        title,
        ${fields.join(',\n        ')}
      }
    `,
    {type, includeDrafts, draftsOnly},
  )

  for (const doc of docs) {
    const patchValues = {}

    for (const field of fields) {
      const normalized = formatDateValue(doc[field])
      if (!normalized && typeof doc[field] === 'string' && doc[field].length > 0) {
        skippedCount += 1
        console.log(`Could not normalize ${doc.title || doc._id}.${field}: ${JSON.stringify(doc[field])}`)
      }
      if (!normalized || normalized === doc[field]) continue
      patchValues[field] = normalized
    }

    if (Object.keys(patchValues).length === 0) continue

    changedCount += 1
    if (shouldApply) {
      await client.patch(doc._id).set(patchValues).commit()
      console.log(`Patched dates for ${doc.title || doc._id}: ${JSON.stringify(patchValues)}`)
    } else {
      console.log(`Would normalize dates for ${doc.title || doc._id}: ${JSON.stringify(patchValues)}`)
    }
  }
}

console.log(
  `Done. ${shouldApply ? 'Patched' : 'Found'} ${changedCount} document(s). Skipped ${skippedCount}. ${
    draftsOnly ? 'Drafts only' : `Drafts ${includeDrafts ? 'included' : 'excluded'}`
  }.${shouldApply ? '' : ' Run again with NORMALIZE_DATES_APPLY=true to patch.'}`,
)
