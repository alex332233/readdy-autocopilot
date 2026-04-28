import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const categories = [
  {
    _id: 'drafts.caseCategory-internal',
    _type: 'caseCategory',
    name: '內科',
    slug: {_type: 'slug', current: 'internal'},
  },
  {
    _id: 'drafts.caseCategory-gynecology',
    _type: 'caseCategory',
    name: '婦科',
    slug: {_type: 'slug', current: 'gynecology'},
  },
]

for (const category of categories) {
  await client.createOrReplace(category)
  console.log(`Seeded draft case category ${category.name}`)
}

console.log('Done. Draft case categories were created. Published documents were not patched.')
