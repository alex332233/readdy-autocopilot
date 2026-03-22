import {getCliClient} from 'sanity/cli'
import {teamPageSeed} from '../seed/teamPageSeed.mjs'
import {doctorProfilesSeed} from '../seed/doctorProfilesSeed.mjs'

const client = getCliClient({apiVersion: '2025-01-01'})

const uploadImageFromUrl = async (url, alt, doctorId) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to download doctor image for ${doctorId}: ${response.status} ${response.statusText}`)
  }

  const contentType = response.headers.get('content-type') || 'image/jpeg'
  const extension = contentType.split('/')[1]?.split(';')[0] || 'jpg'
  const arrayBuffer = await response.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const asset = await client.assets.upload('image', buffer, {
    filename: `doctor-${doctorId}.${extension}`,
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

await client.createOrReplace(teamPageSeed)
for (const doctor of doctorProfilesSeed) {
  const image = await uploadImageFromUrl(doctor.image.url, doctor.image.alt, doctor.doctorId)
  await client.createOrReplace({
    ...doctor,
    image,
  })
}

console.log(`Seeded teamPage: ${teamPageSeed._id}`)
console.log(`Seeded doctor profiles: ${doctorProfilesSeed.length}`)
