import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const fallbackDownloadUrl =
  'https://readdy.ai/api/search-image?query=A%20serene%20and%20modern%20traditional%20Chinese%20medicine%20clinic%20interior%2C%20a%20doctor%20in%20white%20coat%20performing%20acupuncture%20treatment%20on%20a%20patient%20lying%20on%20a%20clean%20treatment%20bed%2C%20warm%20soft%20lighting%20with%20earthy%20beige%20and%20warm%20wood%20tones%2C%20neatly%20arranged%20herbal%20medicine%20jars%20in%20the%20background%2C%20potted%20green%20plants%20adding%20calm%20vitality%2C%20the%20atmosphere%20is%20professional%20yet%20gentle%20and%20healing%2C%20medical%20lifestyle%20photography%20with%20natural%20window%20light%20streaming%20in&width=600&height=500&seq=body-solution-img-02&orientation=landscape'

const images = [
  {
    draftId: 'drafts.featuredTreatmentDetail-body',
    field: 'primaryImage',
    filename: 'featured-detail-body-primary-fallback.jpg',
    alt: '體態困擾',
    url: 'https://readdy.ai/api/search-image?query=A%20thoughtful%20Asian%20woman%20in%20her%20thirties%20looking%20at%20herself%20in%20a%20mirror%20with%20a%20gentle%20concerned%20expression%2C%20wearing%20casual%20comfortable%20clothing%20in%20soft%20morning%20light%2C%20a%20clean%20minimal%20bedroom%20setting%20with%20warm%20ivory%20and%20soft%20beige%20tones%2C%20subtle%20natural%20light%20casting%20soft%20shadows%2C%20the%20scene%20evokes%20quiet%20determination%20and%20self-reflection%20rather%20than%20distress%2C%20peaceful%20mood%2C%20professional%20lifestyle%20photography%20with%20shallow%20depth%20of%20field%2C%20warm%20neutral%20background%20tones&width=600&height=500&seq=body-concern-img-01&orientation=landscape',
  },
  {
    draftId: 'drafts.featuredTreatmentDetail-body',
    field: 'secondaryImage',
    filename: 'featured-detail-body-secondary-fallback.jpg',
    alt: '艾苜體雕解方',
    url: 'https://readdy.ai/api/search-image?query=A%20serene%20and%20modern%20traditional%20Chinese%20medicine%20clinic%20interior%2C%20a%20doctor%20in%20white%20coat%20performing%20acupuncture%20treatment%20on%20a%20patient%20lying%20on%20a%20clean%20treatment%20bed%2C%20warm%20soft%20lighting%20with%20earthy%20beige%20and%20warm%20wood%20tones%2C%20neatly%20arranged%20herbal%20medicine%20jars%20in%20the%20background%2C%20potted%20green%20plants%20adding%20calm%20vitality%2C%20the%20atmosphere%20is%20professional%20yet%20gentle%20and%20healing%2C%20medical%20lifestyle%20photography%20with%20natural%20window%20light%20streaming%20in&width=600&height=500&seq=body-solution-img-02&orientation=landscape',
  },
  {
    draftId: 'drafts.featuredTreatmentDetail-eye',
    field: 'primaryImage',
    filename: 'featured-detail-eye-primary-fallback.jpg',
    alt: '眼部困擾',
    url: 'https://readdy.ai/api/search-image?query=A%20tired%20Asian%20office%20worker%20in%20his%20late%20twenties%20sitting%20at%20a%20desk%20in%20a%20modern%20bright%20office%2C%20rubbing%20his%20eyes%20with%20both%20hands%2C%20multiple%20computer%20monitors%20glowing%20in%20the%20background%20showing%20code%20and%20spreadsheets%2C%20a%20clean%20minimal%20workspace%20with%20soft%20warm%20white%20and%20light%20gray%20tones%2C%20the%20scene%20conveys%20digital%20eye%20strain%20and%20fatigue%20from%20prolonged%20screen%20use%2C%20professional%20lifestyle%20photography%20with%20shallow%20depth%20of%20field%2C%20natural%20morning%20light%20from%20the%20side%20windows&width=600&height=500&seq=eye-concern-img-01&orientation=landscape',
  },
  {
    draftId: 'drafts.featuredTreatmentDetail-eye',
    field: 'secondaryImage',
    filename: 'featured-detail-eye-secondary-fallback.jpg',
    alt: '艾苜眼針解方',
    url: 'https://readdy.ai/api/search-image?query=A%20serene%20modern%20traditional%20Chinese%20medicine%20clinic%20consultation%20room%2C%20an%20Asian%20doctor%20in%20a%20white%20coat%20speaking%20gently%20with%20an%20adult%20patient%2C%20warm%20natural%20window%20light%2C%20green%20potted%20plants%20and%20wooden%20shelving%20with%20herbal%20jars%2C%20clean%20clinical%20yet%20warm%20atmosphere%2C%20peaceful%20healing%20medical%20photography%20with%20soft%20teal%20and%20ivory%20color%20palette&width=600&height=500&seq=eye-solution-safe-02&orientation=landscape',
  },
  {
    draftId: 'drafts.featuredTreatmentDetail-laser',
    field: 'primaryImage',
    filename: 'featured-detail-laser-primary-fallback.jpg',
    alt: '光能修復困擾',
    url: 'https://readdy.ai/api/search-image?query=A%20worried%20parent%20sitting%20beside%20a%20young%20child%20in%20a%20warm%20Chinese%20medicine%20clinic%20waiting%20room%2C%20the%20child%20looking%20nervous%20and%20hesitant%20about%20the%20upcoming%20treatment%2C%20soft%20amber%20warm%20lighting%20illuminating%20the%20cozy%20interior%20space%2C%20potted%20green%20plants%20and%20wooden%20shelves%20with%20herbal%20jars%20in%20background%2C%20gentle%20calming%20environment%20with%20beige%20ivory%20and%20warm%20gold%20tones%2C%20lifestyle%20medical%20photography%20with%20a%20sense%20of%20empathy%20and%20care%2C%20shallow%20depth%20of%20field&width=600&height=500&seq=laser-concern-v2-01&orientation=landscape',
  },
  {
    draftId: 'drafts.featuredTreatmentDetail-laser',
    field: 'secondaryImage',
    filename: 'featured-detail-laser-secondary-fallback.jpg',
    alt: '光能解方',
    url: 'https://readdy.ai/api/search-image?query=A%20skilled%20Chinese%20medicine%20practitioner%20gently%20holding%20a%20small%20low-level%20laser%20therapy%20device%20near%20acupuncture%20points%20on%20a%20relaxed%20child%20patient%20lying%20on%20a%20clean%20treatment%20bed%2C%20soft%20warm%20amber%20golden%20light%20effect%20emanating%20from%20the%20laser%2C%20no%20needles%20visible%2C%20peaceful%20modern%20clinical%20setting%20with%20wooden%20elements%20and%20green%20plants%2C%20the%20child%20looks%20calm%20and%20comfortable%2C%20warm%20beige%20and%20ivory%20interior%20palette%2C%20professional%20medical%20photography&width=600&height=500&seq=laser-solution-v2-02&orientation=landscape',
  },
  {
    draftId: 'drafts.featuredTreatmentDetail-decoction',
    field: 'secondaryImage',
    filename: 'featured-detail-decoction-secondary-fallback.jpg',
    alt: '艾苜水煎藥解方',
    url: 'https://readdy.ai/api/search-image?query=A%20professional%20Chinese%20medicine%20doctor%20in%20a%20clean%20white%20coat%20carefully%20measuring%20and%20blending%20dried%20herbal%20ingredients%20at%20a%20wooden%20apothecary%20counter%2C%20vacuum-sealed%20herbal%20decoction%20pouches%20arranged%20neatly%20beside%20the%20workspace%2C%20warm%20natural%20daylight%20streaming%20through%20large%20windows%2C%20organized%20wooden%20shelving%20with%20labeled%20herbal%20jars%20in%20the%20background%2C%20the%20scene%20conveys%20precision%20craftsmanship%20and%20personalized%20care%2C%20forest%20green%20and%20warm%20earth%20tones%2C%20calm%20clinical%20aesthetic&width=600&height=500&seq=decoction-solution-v2-01&orientation=landscape',
  },
]

const existingAssetIdByFilename = async (filename) =>
  client.fetch(`*[_type == "sanity.imageAsset" && originalFilename == $filename][0]._id`, {
    filename,
  })

const uploadImage = async ({filename, url}) => {
  const existingAssetId = await existingAssetIdByFilename(filename)
  if (existingAssetId) {
    console.log(`Reusing asset ${filename} (${existingAssetId})`)
    return existingAssetId
  }

  let response = await fetch(url)
  if (!response.ok) {
    console.warn(
      `Failed to download ${filename}: ${response.status} ${response.statusText}. Using generic clinic fallback image.`,
    )
    response = await fetch(fallbackDownloadUrl)
  }

  if (!response.ok) {
    throw new Error(`Failed to download fallback image for ${filename}: ${response.status} ${response.statusText}`)
  }

  const arrayBuffer = await response.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  const contentType = response.headers.get('content-type') || 'image/jpeg'
  const asset = await client.assets.upload('image', buffer, {
    filename,
    contentType,
  })

  console.log(`Uploaded asset ${filename} (${asset._id})`)
  return asset._id
}

for (const image of images) {
  const draftExists = await client.fetch(`defined(*[_id == $draftId][0]._id)`, {
    draftId: image.draftId,
  })

  if (!draftExists) {
    console.warn(`Skip ${image.draftId}.${image.field}: draft document does not exist`)
    continue
  }

  const assetId = await uploadImage(image)

  await client
    .patch(image.draftId)
    .set({
      [image.field]: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: assetId,
        },
        alt: image.alt,
      },
    })
    .commit()

  console.log(`Linked ${image.draftId}.${image.field} -> ${image.filename}`)
}

console.log('Done. Draft image fields are linked to Sanity assets. Published content documents were not patched.')
