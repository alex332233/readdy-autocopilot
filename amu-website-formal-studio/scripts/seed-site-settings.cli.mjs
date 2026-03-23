import {getCliClient} from 'sanity/cli'
import {siteSettingsSeed} from '../seed/siteSettingsSeed.mjs'

const client = getCliClient({apiVersion: '2025-01-01'})

const uploadImageFromUrl = async (image, assetId) => {
  if (!image?.url) return undefined

  const response = await fetch(image.url)
  if (!response.ok) {
    throw new Error(`Failed to download site settings image: ${image.url}`)
  }

  const contentType = response.headers.get('content-type') || 'image/png'
  const extension = contentType.split('/')[1]?.split(';')[0] || 'png'
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
  ...siteSettingsSeed,
  headerLogo: await uploadImageFromUrl(siteSettingsSeed.headerLogo, 'site-settings-header-logo'),
  footerLogo: await uploadImageFromUrl(siteSettingsSeed.footerLogo, 'site-settings-footer-logo'),
})
console.log(`Seeded siteSettings: ${siteSettingsSeed._id}`)
