import {defineField, defineType} from 'sanity'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({name: 'text', title: 'Text', type: 'string'}),
    defineField({name: 'target', title: 'Target', type: 'string'}),
    defineField({name: 'href', title: 'Href', type: 'url'}),
  ],
})
