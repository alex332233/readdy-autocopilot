import {defineField, defineType} from 'sanity'

export const section = defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3}),
    defineField({name: 'image', title: 'Image', type: 'image'}),
    defineField({name: 'linkUrl', title: 'Link URL', type: 'url'}),
    defineField({name: 'linkText', title: 'Link Text', type: 'string'}),
    defineField({name: 'enabled', title: 'Enabled', type: 'boolean', initialValue: true}),
  ],
})
