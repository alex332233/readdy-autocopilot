import {defineField, defineType} from 'sanity'

export const aboutFeature = defineType({
  name: 'aboutFeature',
  title: 'About feature',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'description'},
  },
})
