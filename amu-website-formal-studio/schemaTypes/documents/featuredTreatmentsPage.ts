import {defineArrayMember, defineField, defineType} from 'sanity'

export const featuredTreatmentsPage = defineType({
  name: 'featuredTreatmentsPage',
  title: 'Featured Treatments Page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Page Title', type: 'string', initialValue: '特色療程'}),
    defineField({name: 'heroTitle', title: 'Hero Title', type: 'string', initialValue: '特色療程'}),
    defineField({name: 'heroDescription', title: 'Hero Description', type: 'text', rows: 3}),
    defineField({
      name: 'cards',
      title: 'Treatment Cards',
      type: 'array',
      of: [defineArrayMember({type: 'featuredTreatmentCard'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title'},
    prepare(selection) {
      return {
        title: selection.title || 'Featured Treatments Page',
        subtitle: 'List page',
      }
    },
  },
})
