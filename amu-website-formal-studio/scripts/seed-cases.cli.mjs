import {getCliClient} from 'sanity/cli'
import {caseArticlesSeed} from '../seed/caseArticlesSeed.mjs'
import {casesPageSeed} from '../seed/casesPageSeed.mjs'

const client = getCliClient({apiVersion: '2025-01-01'})

await client.createOrReplace(casesPageSeed)
for (const article of caseArticlesSeed) {
  await client.createOrReplace(article)
}

console.log(`Seeded casesPage: ${casesPageSeed._id}`)
console.log(`Seeded case articles: ${caseArticlesSeed.length}`)
