import {getCliClient} from 'sanity/cli'
import {insurancePageSeed} from '../seed/insurancePageSeed.mjs'

const client = getCliClient({apiVersion: '2025-01-01'})

const uploadImageFromUrl = async (image, assetId) => {
  if (!image?.url) return undefined

  const response = await fetch(image.url)
  if (!response.ok) {
    throw new Error(`Failed to download insurance overview image: ${image.url}`)
  }

  const contentType = response.headers.get('content-type') || 'image/jpeg'
  const extension = contentType.split('/')[1]?.split(';')[0] || 'jpg'
  const arrayBuffer = await response.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const asset = await client.assets.upload('image', buffer, {
    filename: `${assetId}.${extension}`,
    contentType,
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

const overviewCards = await Promise.all(
  insurancePageSeed.overviewCards.map(async (card, index) => ({
    ...card,
    image: await uploadImageFromUrl(card.image, `insurance-overview-${index + 1}`),
  })),
)

await client.createOrReplace({
  ...insurancePageSeed,
  overviewCards,
})
console.log(`Seeded insurancePage: ${insurancePageSeed._id}`)
