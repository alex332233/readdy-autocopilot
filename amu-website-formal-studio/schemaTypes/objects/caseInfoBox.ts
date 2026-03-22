import {defineField, defineType} from 'sanity'

export const caseInfoBox = defineType({
  name: 'caseInfoBox',
  title: 'Case Info Box',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'content', title: 'Content', type: 'text', rows: 5}),
  ],
  preview: {
    select: {title: 'title'},
  },
})
