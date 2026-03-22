import {defineField, defineType} from 'sanity'

export const processStep = defineType({
  name: 'processStep',
  title: 'Process step',
  type: 'object',
  fields: [
    defineField({name: 'step', title: 'Step number', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'image', title: 'Image URL', type: 'url'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'step'},
  },
})
