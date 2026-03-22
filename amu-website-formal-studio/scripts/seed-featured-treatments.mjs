import {createClient} from '@sanity/client'
import {featuredTreatmentDetailSeeds, featuredTreatmentsPageSeed} from '../seed/featuredTreatmentsSeed.mjs'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET
const token = process.env.SANITY_AUTH_TOKEN

if (!projectId || !dataset || !token) {
  throw new Error('Missing SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET, or SANITY_AUTH_TOKEN')
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-01-01',
  token,
  useCdn: false,
})

await client.createOrReplace(featuredTreatmentsPageSeed)
for (const document of featuredTreatmentDetailSeeds) {
  await client.createOrReplace(document)
}

console.log(`Seeded featuredTreatmentsPage and ${featuredTreatmentDetailSeeds.length} detail documents`)
