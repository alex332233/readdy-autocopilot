import {defineArrayMember, defineField, defineType} from 'sanity'
import {iconFieldOptions} from '../iconOptions'

export const featuredTreatmentCard = defineType({
  name: 'featuredTreatmentCard',
  title: 'Featured Treatment Card',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'englishTitle', title: 'English Title', type: 'string'}),
    defineField({name: 'icon', title: 'Icon', type: 'string', options: iconFieldOptions}),
    defineField({name: 'color', title: 'Color', type: 'string'}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
    }),
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
