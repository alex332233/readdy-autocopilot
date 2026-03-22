import {defineField, defineType} from 'sanity'

export const caseBeforeSection = defineType({
  name: 'caseBeforeSection',
  title: 'Case Before Section',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})
