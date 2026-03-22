import {getCliClient} from 'sanity/cli'
import {insurancePageSeed} from '../seed/insurancePageSeed.mjs'

const client = getCliClient({apiVersion: '2025-01-01'})

await client.createOrReplace(insurancePageSeed)
console.log(`Seeded insurancePage: ${insurancePageSeed._id}`)
