import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const CARD_IMAGE_SEEDS = {
  'card-facial': {
    url: 'https://readdy.ai/api/search-image?query=Elegant%20close%20up%20of%20a%20beautiful%20Asian%20woman%20glowing%20radiant%20skin%20soft%20warm%20golden%20light%20cream%20ivory%20background%20subtle%20botanical%20herbs%20nearby%20serene%20beauty%20ritual%20spa%20atmosphere%20minimal%20luxurious%20tranquil%20wellness%20aesthetic%20smooth%20porcelain%20complexion&width=600&height=780&seq=feat_facial_hero_01&orientation=portrait',
    alt: '御顏・緊緻',
  },
  'card-growth': {
    url: 'https://readdy.ai/api/search-image?query=Tiny%20green%20bamboo%20shoots%20sprouting%20upward%20strong%20sunlight%20filtering%20through%20soft%20misty%20morning%20air%20sage%20mint%20and%20warm%20earth%20tones%20clean%20minimal%20background%20growth%20vitality%20youth%20energy%20nature%20healing%20botanical%20wellness%20serene%20peaceful&width=600&height=780&seq=feat_growth_hero_01&orientation=portrait',
    alt: '登峰・轉骨',
  },
  'card-pain': {
    url: 'https://readdy.ai/api/search-image?query=Serene%20Asian%20woman%20in%20soft%20athleisure%20silhouette%20standing%20near%20window%20warm%20morning%20backlight%20cream%20and%20ivory%20linen%20tones%20gentle%20shadow%20play%20on%20smooth%20skin%20healthy%20body%20wellness%20balance%20minimal%20calm%20lifestyle%20photography%20flowing%20fabric&width=600&height=780&seq=feat_body_hero_01&orientation=portrait',
    alt: '輕盈・體雕',
  },
  'card-fertility': {
    url: 'https://readdy.ai/api/search-image?query=Extreme%20close%20up%20of%20a%20beautiful%20Asian%20eye%20with%20crystal%20clear%20iris%20and%20glowing%20dewy%20skin%20soft%20natural%20light%20soft%20sage%20green%20and%20ivory%20tones%20clear%20vision%20eye%20health%20wellness%20serene%20healing%20beauty%20ritual%20calm%20peaceful%20atmosphere&width=600&height=780&seq=feat_eye_hero_01&orientation=portrait',
    alt: '明眸・亮視',
  },
  'card-weight': {
    url: 'https://readdy.ai/api/search-image?query=Soft%20warm%20laser%20light%20beams%20over%20smooth%20skin%20surface%20golden%20amber%20light%20rays%20healing%20energy%20flow%20minimal%20clean%20background%20warm%20honey%20tones%20futuristic%20yet%20natural%20medical%20wellness%20atmosphere%20serene%20glow%20technology%20meets%20nature&width=600&height=780&seq=feat_laser_hero_01&orientation=portrait',
    alt: '光能・修復',
  },
  'card-allergy': {
    url: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20medicine%20herbal%20decoction%20simmering%20in%20clay%20pot%20gentle%20steam%20rising%20warm%20amber%20golden%20broth%20dried%20herbs%20scattered%20around%20warm%20earthy%20tones%20moody%20healing%20atmosphere%20ancient%20wisdom%20wellness%20ritual%20minimal%20elegant%20background&width=600&height=780&seq=feat_decoction_hero_01&orientation=portrait',
    alt: '深癒・淬鍊',
  },
}

async function uploadImageFromUrl(url, alt, filename) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to download featured image ${filename}: ${response.status} ${response.statusText}`)
  }

  const contentType = response.headers.get('content-type') || 'image/jpeg'
  const extension = contentType.split('/')[1]?.split(';')[0] || 'jpg'
  const arrayBuffer = await response.arrayBuffer()
  const asset = await client.assets.upload('image', Buffer.from(arrayBuffer), {
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

const page = await client.fetch(`*[_id == "drafts.featuredTreatmentsPage"][0]{_id, cards[]{_key, title, image}}`)

if (!page?._id) {
  throw new Error('drafts.featuredTreatmentsPage not found')
}

const cards = Array.isArray(page.cards) ? page.cards : []
let patchedCount = 0

for (const card of cards) {
  if (card?.image?.asset?._ref) continue
  const seed = CARD_IMAGE_SEEDS[card?._key]
  if (!seed) continue

  const image = await uploadImageFromUrl(seed.url, seed.alt, `featured-card-${card._key || card.title}`)
  await client
    .patch(page._id)
    .set({
      [`cards[_key=="${card._key}"].image`]: image,
    })
    .commit()

  patchedCount += 1
  console.log(`Seeded draft featured card image for ${card.title || card._key}`)
}

console.log(`Done. Seeded ${patchedCount} draft featured treatment card images.`)
console.log('Published featuredTreatmentsPage was not patched.')
