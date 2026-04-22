import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const docs = await client.fetch(
  `*[_type == "healthEducationArticle" && defined(views)]{_id, title, views}`
)

if (!docs.length) {
  console.log('No healthEducationArticle documents with legacy views field found.')
  process.exit(0)
}

for (const doc of docs) {
  await client.patch(doc._id).unset(['views']).commit()
  console.log(`Cleared views from ${doc._id} (${doc.title || 'untitled'})`)
}

console.log(`Done. Cleared legacy views from ${docs.length} health education articles.`)
