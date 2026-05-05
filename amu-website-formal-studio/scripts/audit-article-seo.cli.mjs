import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const targets = [
  {
    type: 'healthEducationArticle',
    idField: 'articleId',
    prefixPattern: /^health-education-\d+$/,
    label: '衛教文章',
    pathPrefix: '/health-education',
    summaryField: 'summary',
  },
  {
    type: 'caseArticle',
    idField: 'caseId',
    prefixPattern: /^case-\d+$/,
    label: '真實見證文章',
    pathPrefix: '/cases',
    summaryField: 'description',
  },
]

const isBlank = (value) => typeof value !== 'string' || value.trim().length === 0

const issueLabels = {
  duplicateId: '重複文章編號',
  missingSlug: '缺 slug',
  transitionSlug: '過渡 slug',
  missingSeoTitle: '缺 SEO title',
  missingSeoDescription: '缺 SEO description',
  missingCoverAlt: '缺封面 alt',
  missingSummary: '缺摘要/說明',
}

const rows = []
const summary = {
  total: 0,
  duplicateId: 0,
  missingSlug: 0,
  transitionSlug: 0,
  missingSeoTitle: 0,
  missingSeoDescription: 0,
  missingCoverAlt: 0,
  missingSummary: 0,
}

for (const target of targets) {
  const docs = await client.fetch(
    `
      *[_type == $type && !(_id in path("drafts.**"))] | order(${target.idField} asc){
        _id,
        title,
        "${target.idField}": ${target.idField},
        "slug": slug.current,
        "seoTitle": seo.title,
        "seoDescription": seo.description,
        "coverAlt": coverImage.alt,
        "${target.summaryField}": ${target.summaryField}
      }
    `,
    {type: target.type},
  )

  const idCounts = new Map()

  for (const doc of docs) {
    const id = doc[target.idField]

    if (id !== undefined && id !== null && id !== '') {
      const idKey = String(id)
      idCounts.set(idKey, (idCounts.get(idKey) || 0) + 1)
    }
  }

  for (const doc of docs) {
    const slug = typeof doc.slug === 'string' ? doc.slug.trim() : ''
    const issues = []
    const id = doc[target.idField]
    const idKey = id === undefined || id === null ? '' : String(id)

    if (idKey && idCounts.get(idKey) > 1) {
      issues.push('duplicateId')
      summary.duplicateId += 1
    }

    if (!slug) {
      issues.push('missingSlug')
      summary.missingSlug += 1
    } else if (target.prefixPattern.test(slug)) {
      issues.push('transitionSlug')
      summary.transitionSlug += 1
    }

    if (isBlank(doc.seoTitle)) {
      issues.push('missingSeoTitle')
      summary.missingSeoTitle += 1
    }

    if (isBlank(doc.seoDescription)) {
      issues.push('missingSeoDescription')
      summary.missingSeoDescription += 1
    }

    if (isBlank(doc.coverAlt)) {
      issues.push('missingCoverAlt')
      summary.missingCoverAlt += 1
    }

    if (isBlank(doc[target.summaryField])) {
      issues.push('missingSummary')
      summary.missingSummary += 1
    }

    summary.total += 1
    rows.push({
      type: target.label,
      id: id ?? '',
      title: doc.title || '(未命名)',
      slug: slug || '(空)',
      url: slug ? `${target.pathPrefix}/${slug}` : '(無)',
      issues: issues.map((issue) => issueLabels[issue]).join('、') || 'OK',
    })
  }
}

console.log('\nSEO 內容盤點摘要')
console.log('='.repeat(72))
console.log('盤點範圍: 已發布文章（不含 drafts）')
console.log(`總文章數: ${summary.total}`)
console.log(`重複文章編號: ${summary.duplicateId}`)
console.log(`缺 slug: ${summary.missingSlug}`)
console.log(`過渡 slug: ${summary.transitionSlug}`)
console.log(`缺 SEO title: ${summary.missingSeoTitle}`)
console.log(`缺 SEO description: ${summary.missingSeoDescription}`)
console.log(`缺封面 alt: ${summary.missingCoverAlt}`)
console.log(`缺摘要/說明: ${summary.missingSummary}`)

console.log('\n需處理清單')
console.log('='.repeat(72))

const rowsWithIssues = rows.filter((row) => row.issues !== 'OK')

if (rowsWithIssues.length === 0) {
  console.log('全部文章 SEO 基礎欄位看起來都 OK。')
} else {
  console.table(rowsWithIssues)
}

console.log('\n完整清單')
console.log('='.repeat(72))
console.table(rows)
