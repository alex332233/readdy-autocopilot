import {defineField, defineType} from 'sanity'

export const featuredTreatmentTag = defineType({
  name: 'featuredTreatmentTag',
  title: 'Featured Treatment Tag',
  type: 'object',
  fields: [defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()})],
  preview: {
    select: {title: 'label'},
  },
})
