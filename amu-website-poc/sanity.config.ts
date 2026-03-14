import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'amu-website-poc',

  projectId: 'ddxhhkaw',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: 'http://localhost:3000',
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
