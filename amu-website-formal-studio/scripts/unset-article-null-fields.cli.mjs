import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})
const isEnabled = (value) => value === '1' || value === 'true'

const shouldApply = isEnabled(process.env.UNSET_ARTICLE_NULL_FIELDS_APPLY)
const includeDrafts = isEnabled(process.env.UNSET_ARTICLE_NULL_FIELDS_INCLUDE_DRAFTS)
const draftsOnly = isEnabled(process.env.UNSET_ARTICLE_NULL_FIELDS_DRAFTS_ONLY)

const nullableFieldsByType = {
  caseArticle: [
    'body',
    'before',
    'after',
    'tips',
    'medicalInfo',
    'references',
    'coverImage',
    'seo',
  ],
  healthEducationArticle: ['body', 'content', 'faq', 'tips', 'references', 'coverImage', 'seo'],
}

let changedCount = 0

for (const [type, fields] of Object.entries(nullableFieldsByType)) {
  const docs = await client.fetch(
    `
      *[
        _type == $type &&
        (
          ($draftsOnly && _id in path("drafts.**")) ||
          (!$draftsOnly && ($includeDrafts || !(_id in path("drafts.**"))))
        )
      ]
    `,
    {type, includeDrafts, draftsOnly},
  )

  for (const doc of docs) {
    const fieldsToUnset = fields.filter((field) => Object.hasOwn(doc, field) && doc[field] === null)
    if (fieldsToUnset.length === 0) continue

    changedCount += 1
    if (shouldApply) {
      await client.patch(doc._id).unset(fieldsToUnset).commit()
      console.log(`Unset null fields for ${doc.title || doc._id}: ${fieldsToUnset.join(', ')}`)
    } else {
      console.log(`Would unset null fields for ${doc.title || doc._id}: ${fieldsToUnset.join(', ')}`)
    }
  }
}

console.log(
  `Done. ${shouldApply ? 'Patched' : 'Found'} ${changedCount} document(s). ${
    draftsOnly ? 'Drafts only' : `Drafts ${includeDrafts ? 'included' : 'excluded'}`
  }.${shouldApply ? '' : ' Run again with UNSET_ARTICLE_NULL_FIELDS_APPLY=true to patch.'}`,
)
