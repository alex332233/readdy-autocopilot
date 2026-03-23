import {getCliClient} from 'sanity/cli'
import {featuredTreatmentDetailSeeds, featuredTreatmentsPageSeed} from '../seed/featuredTreatmentsSeed.mjs'

const client = getCliClient({apiVersion: '2025-01-01'})

async function uploadImageFromUrl(image, assetId) {
  if (!image?.url) return undefined

  const response = await fetch(image.url)
  if (!response.ok) {
    throw new Error(`Failed to download image: ${image.url}`)
  }

  const contentType = response.headers.get('content-type') || 'image/jpeg'
  const arrayBuffer = await response.arrayBuffer()
  const asset = await client.assets.upload('image', Buffer.from(arrayBuffer), {
    contentType,
    filename: `${assetId}.jpg`,
    source: {
      name: 'featured-treatments-seed',
      id: assetId,
    },
  })

  return {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: asset._id,
    },
    alt: image.alt || '',
  }
}

await client.createOrReplace(featuredTreatmentsPageSeed)
for (const document of featuredTreatmentDetailSeeds) {
  const migratedSections = await Promise.all(
    (document.sections || []).map(async (section, index) => ({
      ...section,
      image: await uploadImageFromUrl(section.image, `${document._id}-section-${index}`),
    })),
  )

  await client.createOrReplace({
    ...document,
    sections: migratedSections,
  })
}

console.log(`Seeded featuredTreatmentsPage and ${featuredTreatmentDetailSeeds.length} detail documents`)
