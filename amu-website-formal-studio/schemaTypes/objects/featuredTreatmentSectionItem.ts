import {defineField, defineType} from 'sanity'

export const featuredTreatmentSectionItem = defineType({
  name: 'featuredTreatmentSectionItem',
  title: 'Featured Treatment Section Item',
  type: 'object',
  fields: [
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'text', title: 'Text', type: 'text', rows: 4, validation: (rule) => rule.required()}),
  ],
  preview: {
    select: {title: 'subtitle'},
  },
})
