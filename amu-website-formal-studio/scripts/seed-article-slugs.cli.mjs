import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const targets = [
  {
    type: 'healthEducationArticle',
    idField: 'articleId',
    prefix: 'health-education',
    label: '衛教文章',
  },
  {
    type: 'caseArticle',
    idField: 'caseId',
    prefix: 'case',
    label: '真實見證文章',
  },
]

let patchedCount = 0
let skippedCount = 0

for (const target of targets) {
  const docs = await client.fetch(
    `
      *[_type == $type && !defined(slug.current)]{
        _id,
        title,
        "${target.idField}": ${target.idField}
      }
    `,
    {type: target.type},
  )

  for (const doc of docs) {
    const numericId = doc?.[target.idField]
    if (typeof numericId !== 'number') {
      skippedCount += 1
      console.warn(`Skipped ${target.label} ${doc?._id}: missing ${target.idField}`)
      continue
    }

    const slug = `${target.prefix}-${numericId}`
    await client
      .patch(doc._id)
      .set({
        slug: {
          _type: 'slug',
          current: slug,
        },
      })
      .commit()

    patchedCount += 1
    console.log(`Seeded ${target.label}: ${doc.title || doc._id} -> ${slug}`)
  }
}

console.log(`Done. Patched ${patchedCount} article documents. Skipped ${skippedCount}.`)
