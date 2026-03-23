import {getCliClient} from 'sanity/cli'
import {caseArticlesSeed} from '../seed/caseArticlesSeed.mjs'
import {casesPageSeed} from '../seed/casesPageSeed.mjs'

const client = getCliClient({apiVersion: '2025-01-01'})

const uploadImageFromUrl = async (url, alt, caseId) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to download case cover image for ${caseId}: ${response.status} ${response.statusText}`)
  }

  const contentType = response.headers.get('content-type') || 'image/jpeg'
  const extension = contentType.split('/')[1]?.split(';')[0] || 'jpg'
  const arrayBuffer = await response.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const asset = await client.assets.upload('image', buffer, {
    filename: `case-article-${caseId}.${extension}`,
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

await client.createOrReplace(casesPageSeed)
for (const article of caseArticlesSeed) {
  const coverImage = await uploadImageFromUrl(
    article.coverImage.url,
    article.coverImage.alt,
    article.caseId,
  )
  await client.createOrReplace({
    ...article,
    coverImage,
  })
}

console.log(`Seeded casesPage: ${casesPageSeed._id}`)
console.log(`Seeded case articles: ${caseArticlesSeed.length}`)
