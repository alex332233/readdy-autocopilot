import {getCliClient} from 'sanity/cli'
import {doctorProfilesSeed} from '../seed/doctorProfilesSeed.mjs'

const client = getCliClient({apiVersion: '2025-01-01'})
const doctor2 = doctorProfilesSeed.find((item) => item._id === 'doctorProfile-2')

if (!doctor2) throw new Error('doctorProfile-2 seed not found')

await client.patch('doctorProfile-2').set({
  name: doctor2.name,
  title: doctor2.title,
  bio: doctor2.bio,
}).commit()

console.log('Normalized doctorProfile-2 to seed content')
