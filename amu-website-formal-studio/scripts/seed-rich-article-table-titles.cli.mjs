import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})
const isEnabled = (value) => value === '1' || value === 'true'

const shouldApply =
  process.argv.includes('--apply') || isEnabled(process.env.SEED_TABLE_TITLES_APPLY)
const includeDrafts =
  process.argv.includes('--include-drafts') ||
  isEnabled(process.env.SEED_TABLE_TITLES_INCLUDE_DRAFTS)

const docs = await client.fetch(
  `
    *[
      _type in ["healthEducationArticle", "caseArticle"] &&
      ($includeDrafts || !(_id in path("drafts.**"))) &&
      count(body[_type == "table" && !defined(title)]) > 0
    ]{
      _id,
      _type,
      title,
      body[]{
        _key,
        _type,
        title
      }
    }
  `,
  {includeDrafts},
)

let changedDocCount = 0
let changedTableCount = 0

for (const doc of docs) {
  const tableIndexes = Array.isArray(doc.body)
    ? doc.body
        .map((block, index) => ({block, index}))
        .filter(({block}) => block?._type === 'table' && !block.title)
        .map(({index}) => index)
    : []

  if (tableIndexes.length === 0) continue

  changedDocCount += 1
  changedTableCount += tableIndexes.length

  const patchValues = Object.fromEntries(
    tableIndexes.map((index) => [`body[${index}].title`, '表格']),
  )

  if (shouldApply) {
    await client.patch(doc._id).set(patchValues).commit()
    console.log(`Patched ${doc.title || doc._id}: ${tableIndexes.length} table block(s)`)
  } else {
    console.log(`Would patch ${doc.title || doc._id}: ${tableIndexes.length} table block(s)`)
  }
}

console.log(
  `Done. ${shouldApply ? 'Patched' : 'Found'} ${changedTableCount} table block(s) in ${changedDocCount} document(s). Drafts ${
    includeDrafts ? 'included' : 'excluded'
  }.${shouldApply ? '' : ' Run again with --apply or SEED_TABLE_TITLES_APPLY=true to patch.'}`,
)
