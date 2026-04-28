import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

await client.patch('drafts.insurancePage').unset(['seo']).commit()

console.log('Unset drafts.insurancePage.seo. Published insurancePage was not patched.')
