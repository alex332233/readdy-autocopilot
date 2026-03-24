import {getCliClient} from 'sanity/cli'
import {aboutPageSeed} from '../seed/aboutPageSeed.mjs'

const client = getCliClient({apiVersion: '2025-01-01'})

const uploadImageFromUrl = async (image, assetId) => {
  if (!image?.url) return undefined

  const response = await fetch(image.url)
  if (!response.ok) {
    throw new Error(`Failed to download about page image: ${image.url}`)
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

await client.createOrReplace({
  ...aboutPageSeed,
  originStory: {
    ...aboutPageSeed.originStory,
    blocks: await Promise.all(
      aboutPageSeed.originStory.blocks.map(async (block, index) => ({
        ...block,
        primaryImage: await uploadImageFromUrl(block.primaryImage, `about-origin-primary-${index + 1}`),
        secondaryImage: block.secondaryImage
          ? await uploadImageFromUrl(block.secondaryImage, `about-origin-secondary-${index + 1}`)
          : undefined,
      })),
    ),
  },
  coreValues: await Promise.all(
    aboutPageSeed.coreValues.map(async (item, index) => ({
      ...item,
      image: await uploadImageFromUrl(item.image, `about-core-value-${index + 1}`),
    })),
  ),
})
console.log(`Seeded aboutPage: ${aboutPageSeed._id}`)
