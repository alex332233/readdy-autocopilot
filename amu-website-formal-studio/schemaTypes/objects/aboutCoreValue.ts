import {defineField, defineType} from 'sanity'

export const aboutCoreValue = defineType({
  name: 'aboutCoreValue',
  title: 'About Core Value',
  type: 'object',
  fields: [
    defineField({name: 'number', title: 'Number', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 5}),
    defineField({name: 'image', title: 'Image', type: 'externalImage'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'number', media: 'image'},
  },
})
