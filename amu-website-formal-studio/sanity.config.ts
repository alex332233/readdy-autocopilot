import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {studioStructure} from './structure'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your_project_id'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const previewOrigin = process.env.SANITY_STUDIO_PREVIEW_ORIGIN || 'http://localhost:3000'
const allowOrigins = Array.from(
  new Set([
    previewOrigin,
    'http://localhost:3000',
    'https://amu-readdy-code-v2.vercel.app',
    'https://amu-readdy-code-v2-2uhppzfxp-alex332233s-projects.vercel.app',
  ]),
)

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
      allowOrigins,
      previewUrl: {
        initial: previewOrigin,
        previewMode: {
          enable: '/api/preview-mode/enable',
          disable: '/api/preview-mode/disable',
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes,
    templates: (prev) =>
      prev.filter(
        (template) =>
          template.id !== 'featuredTreatmentDetail' &&
          template.id !== 'treatmentTaxonomyItem',
      ),
  },
})
