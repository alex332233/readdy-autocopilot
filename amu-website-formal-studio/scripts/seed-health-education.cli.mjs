import {getCliClient} from 'sanity/cli'
import {
  healthEducationArticlesSeed,
  healthEducationCategoryDocsSeed,
  healthEducationPageSeed,
  healthEducationSubcategoryDocsSeed,
} from '../seed/healthEducationSeed.mjs'

const client = getCliClient({apiVersion: '2025-01-01'})

const uploadImageFromUrl = async (url, alt, articleId) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(
      `Failed to download health education cover image for ${articleId}: ${response.status} ${response.statusText}`,
    )
  }

  const contentType = response.headers.get('content-type') || 'image/jpeg'
  const extension = contentType.split('/')[1]?.split(';')[0] || 'jpg'
  const arrayBuffer = await response.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const asset = await client.assets.upload('image', buffer, {
    filename: `health-education-${articleId}.${extension}`,
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

for (const subcategory of healthEducationSubcategoryDocsSeed) {
  await client.createOrReplace(subcategory)
}

for (const category of healthEducationCategoryDocsSeed) {
  await client.createOrReplace(category)
}

await client.createOrReplace(healthEducationPageSeed)
await client
  .patch(healthEducationPageSeed._id)
  .unset(['categories', 'categoryRefs'])
  .commit()
for (const article of healthEducationArticlesSeed) {
  const existing = await client.getDocument(article._id)
  const coverImage =
    existing?.coverImage?.asset?._ref
      ? existing.coverImage
      : await uploadImageFromUrl(article.coverImage.url, article.coverImage.alt, article.articleId)
  await client.createOrReplace({
    ...article,
    coverImage,
  })
}

console.log(`Seeded healthEducationPage: ${healthEducationPageSeed._id}`)
console.log(`Seeded health education categories: ${healthEducationCategoryDocsSeed.length}`)
console.log(`Seeded health education subcategories: ${healthEducationSubcategoryDocsSeed.length}`)
console.log(`Seeded health education articles: ${healthEducationArticlesSeed.length}`)
