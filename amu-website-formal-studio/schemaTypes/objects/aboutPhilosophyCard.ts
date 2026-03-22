import {defineField, defineType} from 'sanity'

export const aboutPhilosophyCard = defineType({
  name: 'aboutPhilosophyCard',
  title: 'About Philosophy Card',
  type: 'object',
  fields: [
    defineField({name: 'number', title: 'Number', type: 'string'}),
    defineField({name: 'icon', title: 'Icon', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'number'},
  },
})
