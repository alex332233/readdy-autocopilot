import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const shouldApply = process.env.MIGRATE_FOOTER_LINKS_APPLY === 'true'
const draftsOnly = process.env.MIGRATE_FOOTER_LINKS_DRAFTS_ONLY === 'true'

const footerScrollTargetMap = {
  services: '/insurance',
  'why-choose': '/about',
  location: '/about',
  booking: '/',
}

const normalizeLink = (link) => {
  if (!link || typeof link !== 'object') return link

  const kind = link.kind === 'scroll' ? 'route' : link.kind || 'route'
  const target =
    link.kind === 'scroll'
      ? footerScrollTargetMap[link.target] || '/'
      : link.target || ''

  return {
    ...link,
    _type: 'footerSiteLink',
    kind,
    target,
  }
}

const normalizeGroups = (groups = []) =>
  groups.map((group) => ({
    ...group,
    links: Array.isArray(group?.links) ? group.links.map(normalizeLink) : [],
  }))

const docs = await client.fetch(`
  *[_id in ["siteSettings", "drafts.siteSettings"]]{
    _id,
    footerLinkGroups
  }
`)

const targets = docs.filter((doc) => !draftsOnly || doc._id.startsWith('drafts.'))
let changedCount = 0

for (const doc of targets) {
  const normalizedGroups = normalizeGroups(doc.footerLinkGroups || [])
  const before = JSON.stringify(doc.footerLinkGroups || [])
  const after = JSON.stringify(normalizedGroups)

  if (before === after) {
    console.log(`No footer link migration needed for ${doc._id}.`)
    continue
  }

  changedCount += 1
  if (shouldApply) {
    await client.patch(doc._id).set({footerLinkGroups: normalizedGroups}).commit()
    console.log(`Migrated footer links for ${doc._id}.`)
  } else {
    console.log(`Would migrate footer links for ${doc._id}.`)
  }
}

console.log(
  shouldApply
    ? `Done. Migrated ${changedCount} document(s).`
    : `Done. Found ${changedCount} document(s) needing migration. Run with MIGRATE_FOOTER_LINKS_APPLY=true to patch.`,
)

if (draftsOnly) {
  console.log('Drafts-only mode was enabled. Published siteSettings was not patched.')
}
