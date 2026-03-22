import {defineField, defineType} from 'sanity'

export const caseAfterSection = defineType({
  name: 'caseAfterSection',
  title: 'Case After Section',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'phases',
      title: 'Phases',
      type: 'array',
      of: [{type: 'caseAfterPhase'}],
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})
