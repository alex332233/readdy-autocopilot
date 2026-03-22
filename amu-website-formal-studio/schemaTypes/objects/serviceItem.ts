import {defineField, defineType} from 'sanity'

export const serviceItem = defineType({
  name: 'serviceItem',
  title: 'Service item',
  type: 'object',
  fields: [
    defineField({name: 'number', title: 'Number', type: 'string'}),
    defineField({name: 'icon', title: 'Icon class', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'subtitle'},
  },
})
