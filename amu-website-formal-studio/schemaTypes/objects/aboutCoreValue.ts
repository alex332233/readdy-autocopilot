import {defineField, defineType} from 'sanity'

export const aboutCoreValue = defineType({
  name: 'aboutCoreValue',
  title: 'About Core Value',
  type: 'object',
  fields: [
    defineField({name: 'number', title: 'Number', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 5}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'number', media: 'image'},
  },
})
