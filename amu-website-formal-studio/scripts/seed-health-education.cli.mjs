import {getCliClient} from 'sanity/cli'
import {
  healthEducationArticlesSeed,
  healthEducationPageSeed,
} from '../seed/healthEducationSeed.mjs'

const client = getCliClient({apiVersion: '2025-01-01'})

await client.createOrReplace(healthEducationPageSeed)
for (const article of healthEducationArticlesSeed) {
  await client.createOrReplace(article)
}

console.log(`Seeded healthEducationPage: ${healthEducationPageSeed._id}`)
console.log(`Seeded health education articles: ${healthEducationArticlesSeed.length}`)
