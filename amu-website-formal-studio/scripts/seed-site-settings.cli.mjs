import {getCliClient} from 'sanity/cli'
import {siteSettingsSeed} from '../seed/siteSettingsSeed.mjs'

const client = getCliClient({apiVersion: '2025-01-01'})

await client.createOrReplace(siteSettingsSeed)
console.log(`Seeded siteSettings: ${siteSettingsSeed._id}`)
