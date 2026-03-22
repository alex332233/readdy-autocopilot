import {createClient} from '@sanity/client'
import {homePageSeed} from '../seed/homePageSeed.mjs'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const token = process.env.SANITY_AUTH_TOKEN
const apiVersion = process.env.SANITY_API_VERSION || '2025-01-01'

if (!projectId) {
  console.error('Missing SANITY_STUDIO_PROJECT_ID')
  process.exit(1)
}

if (!token) {
  console.error('Missing SANITY_AUTH_TOKEN')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

async function main() {
  const result = await client.createOrReplace(homePageSeed)
  console.log(`Seeded homePage: ${result._id}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
