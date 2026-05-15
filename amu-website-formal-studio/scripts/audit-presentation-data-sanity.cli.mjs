import fs from 'node:fs'
import path from 'node:path'

const studioRoot = process.cwd()
const projectRoot = path.resolve(studioRoot, '..')
const frontendSrc = path.join(projectRoot, 'amu-readdy-code-v2', 'src')
const schemaRoot = path.join(studioRoot, 'schemaTypes')

const walk = (dir, predicate = () => true) => {
  const entries = fs.readdirSync(dir, {withFileTypes: true})
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(fullPath, predicate)
    return predicate(fullPath) ? [fullPath] : []
  })
}

const lineNumberAt = (content, index) => content.slice(0, index).split('\n').length

const schemaFieldMeta = new Map()
const explicitLegacyFieldNames = new Set([
  'description',
  'before',
  'after',
  'conclusion',
  'tips',
  'medicalInfo',
])

for (const file of walk(schemaRoot, (filePath) => filePath.endsWith('.ts'))) {
  const content = fs.readFileSync(file, 'utf8')
  const lines = content.split('\n')

  lines.forEach((line, index) => {
    const match = line.match(/\bname:\s*['"]([^'"]+)['"]/)
    if (!match) return

    const nextFieldOffset = lines
      .slice(index + 1)
      .findIndex((nextLine) => /\bdefineField\s*\(/.test(nextLine))
    const fieldEnd =
      nextFieldOffset === -1
        ? Math.min(index + 28, lines.length)
        : Math.min(index + 1 + nextFieldOffset, lines.length)
    const window = lines.slice(index, fieldEnd).join('\n')
    const fieldName = match[1]
    const existing = schemaFieldMeta.get(fieldName) || {
      files: new Set(),
      total: 0,
      hiddenCount: 0,
      readOnlyCount: 0,
      legacyCount: 0,
      reference: false,
    }

    existing.files.add(path.relative(projectRoot, file))
    existing.total += 1
    if (/\bhidden\s*:/.test(window)) existing.hiddenCount += 1
    if (/\breadOnly\s*:\s*true|\breadOnly\s*:/.test(window)) existing.readOnlyCount += 1
    if (/舊欄位/.test(window)) existing.legacyCount += 1
    existing.reference ||= /\btype:\s*['"]reference['"]/.test(window)
    schemaFieldMeta.set(fieldName, existing)
  })
}

const frontendFiles = walk(frontendSrc, (filePath) => /\.(tsx?|jsx?)$/.test(filePath))
const findings = []

const addFinding = ({priority, type, file, line, pathValue, reason, suggestion}) => {
  findings.push({
    priority,
    type,
    file: path.relative(projectRoot, file),
    line,
    pathValue,
    reason,
    suggestion,
  })
}

const stripPathSyntax = (pathValue) =>
  pathValue
    .replace(/\$\{[^}]+\}/g, '$dynamic')
    .replace(/\[[^\]]+\]/g, '')
    .split('.')[0]

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const maybeAddFilteredIndexFinding = ({file, content, match, pathValue, idxName}) => {
  addFinding({
    priority: 'P2',
    type: 'filtered-array-index-path',
    file,
    line: lineNumberAt(content, match.index),
    pathValue,
    reason: `A filtered array appears to map with "${idxName}" and reuse it in a Sanity array path. If hidden/empty items were filtered out, Presentation may focus the wrong item or fall back to the document root.`,
    suggestion: 'Keep the original source index before filtering, e.g. map to {item, sourceIndex}, filter display items, then use sourceIndex in data-sanity paths.',
  })
}

for (const file of frontendFiles) {
  const content = fs.readFileSync(file, 'utf8')
  const filteredVars = new Set()

  const filteredVarPattern =
    /\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*[\s\S]{0,500}?\.filter\s*\(/g

  for (const match of content.matchAll(filteredVarPattern)) {
    filteredVars.add(match[1])
  }

  const directFilteredMapPattern =
    /\.filter\s*\([\s\S]{0,600}?\)\s*\.map\s*\(\s*\(?\s*[A-Za-z_$][\w$]*\s*,\s*([A-Za-z_$][\w$]*)[\s\S]{0,1200}?\[\$\{\1\}\]/g

  for (const match of content.matchAll(directFilteredMapPattern)) {
    maybeAddFilteredIndexFinding({
      file,
      content,
      match,
      pathValue: match[0].replace(/\s+/g, ' ').slice(0, 220),
      idxName: match[1],
    })
  }

  for (const variable of filteredVars) {
    const filteredVarMapPattern = new RegExp(
      `\\b${escapeRegExp(variable)}\\s*\\.map\\s*\\(\\s*\\(?\\s*[A-Za-z_$][\\w$]*\\s*,\\s*([A-Za-z_$][\\w$]*)[\\s\\S]{0,1200}?\\[\\$\\{\\1\\}\\]`,
      'g',
    )

    for (const match of content.matchAll(filteredVarMapPattern)) {
      maybeAddFilteredIndexFinding({
        file,
        content,
        match,
        pathValue: match[0].replace(/\s+/g, ' ').slice(0, 220),
        idxName: match[1],
      })
    }
  }

  const pathCallPattern =
    /\b(?:getDataAttribute|getArticleDataAttribute|getCaseArticleDataAttribute|getCaseArticleDocumentDataAttribute|getHealthEducationArticleDataAttribute|getHealthEducationArticleDocumentDataAttribute|dataAttribute|detailDataAttribute|getSiteSettingsDataAttribute)\(\s*(['`])([\s\S]*?)\1/g

  for (const match of content.matchAll(pathCallPattern)) {
    const pathValue = match[2].replace(/\n/g, '').trim()
    const line = lineNumberAt(content, match.index)
    const rootField = stripPathSyntax(pathValue)
    const meta = schemaFieldMeta.get(rootField)

    if (!pathValue) continue

    if (/\$\{|__idx__|\[[^\]]+\]/.test(pathValue)) {
      addFinding({
        priority: 'P2',
        type: 'array-or-dynamic-path',
        file,
        line,
        pathValue,
        reason: 'Path uses array indexes or template variables. Presentation may fail to focus after item reordering or fallback rendering.',
        suggestion: 'Prefer stable _key mapping where possible, or manually verify this field in Presentation.',
      })
    }

    const isLegacyField =
      explicitLegacyFieldNames.has(rootField) ||
      Boolean(meta?.total && meta.legacyCount === meta.total)

    if (isLegacyField) {
      addFinding({
        priority: 'P1',
        type: 'hidden-legacy-field',
        file,
        line,
        pathValue,
        reason: `Root field "${rootField}" appears to be a legacy field hidden/readOnly in Studio.`,
        suggestion: 'Remove data-sanity from non-editable fallback fields, or point to the visible editable source field.',
      })
    }

    if (meta?.reference || /(?:Ref|Refs)(?:\.|\[|$)/.test(pathValue)) {
      addFinding({
        priority: 'P2',
        type: 'reference-or-computed-field',
        file,
        line,
        pathValue,
        reason: 'Path appears to involve reference-derived content. Presentation may open the current document instead of the referenced document.',
        suggestion: 'If this text is global/reference-owned content, avoid making it directly clickable here or point users to the source document.',
      })
    }

    if (!meta && rootField && !rootField.startsWith('$')) {
      addFinding({
        priority: 'P3',
        type: 'unknown-root-field',
        file,
        line,
        pathValue,
        reason: `Root field "${rootField}" was not found by the simple schema scanner.`,
        suggestion: 'Check whether this is a computed/fallback field or whether the scanner needs to understand this schema pattern.',
      })
    }
  }

  const fallbackIdPattern =
    /\bget(?:HealthEducationArticle|CaseArticle|Doctor|FeaturedTreatment)?DataAttribute\([^)]*(?:articleId|caseId|doctorId|slug)/g

  for (const match of content.matchAll(fallbackIdPattern)) {
    addFinding({
      priority: 'P1',
      type: 'fallback-id-data-attribute',
      file,
      line: lineNumberAt(content, match.index),
      pathValue: match[0],
      reason: 'Data attribute may be built from a fallback id instead of the real Sanity _id.',
      suggestion: 'Prefer documentId/_id based data attributes. Keep numeric ids only as route/fallback, not Presentation identity.',
    })
  }
}

findings.sort((a, b) => {
  const order = {P1: 1, P2: 2, P3: 3}
  return order[a.priority] - order[b.priority] || a.file.localeCompare(b.file) || a.line - b.line
})

const byPriority = findings.reduce((acc, finding) => {
  acc[finding.priority] = (acc[finding.priority] || 0) + 1
  return acc
}, {})

const byType = findings.reduce((acc, finding) => {
  acc[finding.type] = (acc[finding.type] || 0) + 1
  return acc
}, {})

console.log('# Presentation data-sanity audit')
console.log('')
console.log(`Scanned frontend files: ${frontendFiles.length}`)
console.log(`Schema fields indexed: ${schemaFieldMeta.size}`)
console.log(`Findings: ${findings.length}`)
console.log(`P1: ${byPriority.P1 || 0}, P2: ${byPriority.P2 || 0}, P3: ${byPriority.P3 || 0}`)
console.log('')
console.log('Finding categories:')
console.log(`- fallback identity: ${byType['fallback-id-data-attribute'] || 0}`)
console.log(`- filtered array index: ${byType['filtered-array-index-path'] || 0}`)
console.log(`- hidden legacy field: ${byType['hidden-legacy-field'] || 0}`)
console.log(`- reference/computed field: ${byType['reference-or-computed-field'] || 0}`)
console.log(`- array/dynamic path: ${byType['array-or-dynamic-path'] || 0}`)
console.log(`- unknown root field: ${byType['unknown-root-field'] || 0}`)
console.log('')

if (findings.length === 0) {
  console.log('No high-risk data-sanity patterns found by the static scanner.')
  process.exit(0)
}

const verbose = process.env.AUDIT_PRESENTATION_VERBOSE === 'true'
const findingsToPrint = verbose ? findings : findings.slice(0, 40)

if (!verbose && findings.length > findingsToPrint.length) {
  console.log(`Showing first ${findingsToPrint.length} findings. Re-run with AUDIT_PRESENTATION_VERBOSE=true for full output.`)
  console.log('')
}

for (const finding of findingsToPrint) {
  console.log(`- [${finding.priority}] ${finding.type}`)
  console.log(`  file: ${finding.file}:${finding.line}`)
  console.log(`  path: ${finding.pathValue}`)
  console.log(`  reason: ${finding.reason}`)
  console.log(`  suggestion: ${finding.suggestion}`)
  console.log('')
}
