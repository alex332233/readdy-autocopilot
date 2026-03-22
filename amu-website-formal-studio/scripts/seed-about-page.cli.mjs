import {getCliClient} from 'sanity/cli'
import {aboutPageSeed} from '../seed/aboutPageSeed.mjs'

const client = getCliClient({apiVersion: '2025-01-01'})

await client.createOrReplace(aboutPageSeed)
console.log(`Seeded aboutPage: ${aboutPageSeed._id}`)
