import {getCliClient} from 'sanity/cli'
import {featuredTreatmentDetailSeeds, featuredTreatmentsPageSeed} from '../seed/featuredTreatmentsSeed.mjs'

const client = getCliClient({apiVersion: '2025-01-01'})

await client.createOrReplace(featuredTreatmentsPageSeed)
for (const document of featuredTreatmentDetailSeeds) {
  await client.createOrReplace(document)
}

console.log(`Seeded featuredTreatmentsPage and ${featuredTreatmentDetailSeeds.length} detail documents`)
