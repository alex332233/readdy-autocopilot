import {defineField, defineType} from 'sanity'

export const featuredTreatmentCase = defineType({
  name: 'featuredTreatmentCase',
  title: 'Featured Treatment Case',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'text', title: 'Text', type: 'text', rows: 4, validation: (rule) => rule.required()}),
  ],
  preview: {
    select: {title: 'label'},
  },
})
