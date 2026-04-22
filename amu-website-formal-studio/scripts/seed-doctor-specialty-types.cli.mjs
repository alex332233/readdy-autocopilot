import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const SPECIALTY_TYPE_BY_NAME = new Map([
  ['內科', 'internal'],
  ['婦科', 'gynecology'],
  ['兒科', 'pediatrics'],
  ['皮膚科', 'dermatology'],
  ['針灸科', 'acupuncture'],
  ['中醫美容', 'beauty'],
  ['美容', 'beauty'],
])

const doctors = await client.fetch(`
  *[_type == "doctorProfile"]{
    _id,
    name,
    specialtyGroups[]{
      _key,
      slug,
      name
    }
  }
`)

let patchedCount = 0
let skippedCount = 0

for (const doctor of doctors) {
  const groups = Array.isArray(doctor.specialtyGroups) ? doctor.specialtyGroups : []
  const patchValues = {}

  for (const group of groups) {
    if (!group?._key || group.slug) continue

    const specialtyType = SPECIALTY_TYPE_BY_NAME.get(group.name)
    if (!specialtyType) {
      skippedCount += 1
      console.warn(`Skipped ${doctor.name || doctor._id}: unknown specialty "${group.name || 'empty'}"`)
      continue
    }

    patchValues[`specialtyGroups[_key=="${group._key}"].slug`] = specialtyType
  }

  if (Object.keys(patchValues).length === 0) continue

  await client.patch(doctor._id).set(patchValues).commit()
  patchedCount += 1
  console.log(`Seeded specialty types for ${doctor.name || doctor._id}`)
}

console.log(`Done. Patched ${patchedCount} doctor documents. Skipped ${skippedCount} unknown specialty groups.`)
