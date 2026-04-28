import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const categoryRefByName = {
  內科: 'drafts.caseCategory-internal',
  婦科: 'drafts.caseCategory-gynecology',
}

const articles = await client.fetch(`
  *[_type == "caseArticle" && !(_id in path("drafts.**"))] | order(caseId asc){
    _id,
    caseId,
    title,
    slug,
    category,
    categoryRef,
    tags,
    doctor,
    fbLink,
    publishDate,
    body,
    coverImage,
    description,
    before,
    after,
    conclusion,
    tips,
    medicalInfo,
    references,
    seo
  }
`)

for (const article of articles) {
  const categoryRef = categoryRefByName[article.category]

  if (!categoryRef) {
    console.warn(`Skip ${article._id}: no draft caseCategory mapping for "${article.category || 'empty'}"`)
    continue
  }

  const draftId = `drafts.${article._id}`
  const draftExists = await client.fetch(`defined(*[_id == $draftId][0]._id)`, {draftId})
  const patch = {
    categoryRef: {
      _type: 'reference',
      _ref: categoryRef,
      _weak: true,
    },
  }

  if (draftExists) {
    await client.patch(draftId).set(patch).commit()
    console.log(`Patched ${draftId}.categoryRef -> ${article.category}`)
    continue
  }

  const {_id, ...fields} = article
  await client.createOrReplace({
    _id: draftId,
    _type: 'caseArticle',
    ...fields,
    ...patch,
  })
  console.log(`Created ${draftId} with categoryRef -> ${article.category}`)
}

console.log('Done. Draft case article category references were seeded. Published documents were not patched.')
