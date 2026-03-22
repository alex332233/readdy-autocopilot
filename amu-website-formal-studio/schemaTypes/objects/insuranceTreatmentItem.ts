import {defineField, defineType} from 'sanity'

export const insuranceTreatmentItem = defineType({
  name: 'insuranceTreatmentItem',
  title: 'Insurance Treatment Item',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 6}),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'caseLink',
      title: 'Has Case Link',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})
