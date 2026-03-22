import {defineField, defineType} from 'sanity'

export const doctorSummary = defineType({
  name: 'doctorSummary',
  title: 'Doctor summary',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
  ],
  preview: {
    select: {title: 'name', subtitle: 'title'},
  },
})
