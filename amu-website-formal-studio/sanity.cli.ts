import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your_project_id',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  studioHost: process.env.SANITY_STUDIO_HOSTNAME || 'amu-readdy-formal-studio',
  deployment: {
    appId: 'zr783ymq00oca8yld7996jsu',
  },
})
