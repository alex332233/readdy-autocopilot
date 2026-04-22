import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

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

let patchedCount = 0
let skippedCount = 0

for (const [type, fields] of Object.entries(dateFieldsByType)) {
  const docs = await client.fetch(
    `
      *[_type == $type]{
        _id,
        title,
        ${fields.join(',\n        ')}
      }
    `,
    {type},
  )

  for (const doc of docs) {
    const patchValues = {}

    for (const field of fields) {
      const normalized = formatDateValue(doc[field])
      if (!normalized || normalized === doc[field]) continue
      patchValues[field] = normalized
    }

    if (Object.keys(patchValues).length === 0) continue

    await client.patch(doc._id).set(patchValues).commit()
    patchedCount += 1
    console.log(`Normalized dates for ${doc.title || doc._id}: ${JSON.stringify(patchValues)}`)
  }
}

console.log(`Done. Patched ${patchedCount} documents. Skipped ${skippedCount}.`)
