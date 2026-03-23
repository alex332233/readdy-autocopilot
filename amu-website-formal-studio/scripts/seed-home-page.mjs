import {getCliClient} from 'sanity/cli'
import {homePageSeed} from '../seed/homePageSeed.mjs'

const client = getCliClient({apiVersion: '2025-01-01'})

async function main() {
  const uploadImageFromUrl = async (url, alt, filename) => {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to download homepage image ${filename}: ${response.status} ${response.statusText}`)
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg'
    const extension = contentType.split('/')[1]?.split(';')[0] || 'jpg'
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const asset = await client.assets.upload('image', buffer, {
      filename: `${filename}.${extension}`,
      contentType,
    })

    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
      alt,
    }
  }

  const result = await client.createOrReplace({
    ...homePageSeed,
    hero: {
      ...homePageSeed.hero,
      image: await uploadImageFromUrl(homePageSeed.hero.image.url, homePageSeed.hero.image.alt, 'home-hero'),
    },
    about: {
      ...homePageSeed.about,
      image: await uploadImageFromUrl(homePageSeed.about.image.url, homePageSeed.about.image.alt, 'home-about'),
    },
    whyChoose: {
      ...homePageSeed.whyChoose,
      image: await uploadImageFromUrl(
        homePageSeed.whyChoose.image.url,
        homePageSeed.whyChoose.image.alt,
        'home-why-choose',
      ),
    },
    team: {
      ...homePageSeed.team,
      image: await uploadImageFromUrl(homePageSeed.team.image.url, homePageSeed.team.image.alt, 'home-team'),
    },
    process: {
      ...homePageSeed.process,
      steps: await Promise.all(
        homePageSeed.process.steps.map(async (step, index) => ({
          ...step,
          image: await uploadImageFromUrl(step.image.url, step.image.alt, `home-process-${index + 1}`),
        })),
      ),
    },
    gallery: {
      ...homePageSeed.gallery,
      images: await Promise.all(
        homePageSeed.gallery.images.map(async (image, index) => ({
          _key: image._key,
          image: await uploadImageFromUrl(image.image.url, image.image.alt, `home-gallery-${index + 1}`),
          label: image.label,
          labelZh: image.labelZh,
        })),
      ),
    },
  })
  console.log(`Seeded homePage: ${result._id}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
