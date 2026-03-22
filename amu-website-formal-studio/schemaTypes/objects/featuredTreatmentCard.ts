import {defineArrayMember, defineField, defineType} from 'sanity'

export const featuredTreatmentCard = defineType({
  name: 'featuredTreatmentCard',
  title: 'Featured Treatment Card',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'englishTitle', title: 'English Title', type: 'string'}),
    defineField({name: 'icon', title: 'Icon', type: 'string'}),
    defineField({name: 'color', title: 'Color', type: 'string'}),
    defineField({name: 'treatmentTitle', title: 'Treatment Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 5, validation: (rule) => rule.required()}),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({type: 'featuredTreatmentTag'})],
    }),
    defineField({name: 'detailSlug', title: 'Detail Slug', type: 'string'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'englishTitle'},
  },
})
