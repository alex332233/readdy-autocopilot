import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})
const slug = process.argv[2] || 'facial'
const result = await client.fetch(
  `*[_type == "featuredTreatmentDetail" && slug.current == $slug][0]{title, "slug": slug.current, subtitle, sections[]{title}}`,
  {slug},
)
console.log(JSON.stringify(result, null, 2))
