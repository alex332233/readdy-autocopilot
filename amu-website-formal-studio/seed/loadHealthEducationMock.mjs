import {spawnSync} from 'node:child_process'
import {fileURLToPath, pathToFileURL} from 'node:url'
import path from 'node:path'

const currentDir = path.dirname(fileURLToPath(import.meta.url))
const mockFile = path.resolve(currentDir, '../../amu-readdy-code-v2/src/mocks/health-education.ts')
const mockUrl = pathToFileURL(mockFile).href

export function loadHealthEducationMock() {
  const script = `import(${JSON.stringify(mockUrl)}).then((m) => console.log(JSON.stringify({healthCategories: m.healthCategories, healthEducationData: m.healthEducationData})))`
  const result = spawnSync(process.execPath, ['--experimental-strip-types', '-e', script], {
    encoding: 'utf8',
  })

  if (result.status !== 0) {
    throw new Error(result.stderr || 'Failed to load health education mock')
  }

  return JSON.parse(result.stdout)
}
