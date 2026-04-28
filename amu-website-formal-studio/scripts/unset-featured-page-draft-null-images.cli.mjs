import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const draft = await client.fetch(`
  *[_id == "drafts.featuredTreatmentsPage"][0]{
    cards[]{
      _key,
      image
    }
  }
`)

if (!draft) {
  console.log('No draft featuredTreatmentsPage found. Nothing to unset.')
  process.exit(0)
}

let patch = client.patch('drafts.featuredTreatmentsPage')
let count = 0

for (const card of draft.cards || []) {
  if (card?._key && card.image === null) {
    patch = patch.unset([`cards[_key=="${card._key}"].image`])
    count += 1
  }
}

if (count > 0) {
  await patch.commit()
}

console.log(`Unset ${count} null image fields from draft featuredTreatmentsPage cards.`)
console.log('Published featuredTreatmentsPage was not patched.')
