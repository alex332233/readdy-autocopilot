import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {studioStructure} from './structure'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your_project_id'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const previewOrigin = process.env.SANITY_STUDIO_PREVIEW_ORIGIN || 'http://localhost:3000'

export default defineConfig({
  name: 'default',
  title: 'amu-website-formal-studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: studioStructure,
    }),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: previewOrigin,
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
