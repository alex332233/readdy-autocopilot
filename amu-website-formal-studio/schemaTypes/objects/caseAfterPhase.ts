import {defineField, defineType} from 'sanity'

export const caseAfterPhase = defineType({
  name: 'caseAfterPhase',
  title: 'Case After Phase',
  type: 'object',
  fields: [
    defineField({name: 'period', title: 'Period', type: 'string'}),
    defineField({
      name: 'improvements',
      title: 'Improvements',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {title: 'period'},
  },
})
