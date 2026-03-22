import {defineField, defineType} from 'sanity'

export const insurancePage = defineType({
  name: 'insurancePage',
  title: 'Insurance Page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Document title', type: 'string', initialValue: '健保項目'}),
    defineField({name: 'heroTitle', title: 'Hero Title', type: 'string'}),
    defineField({name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', rows: 3}),
    defineField({
      name: 'overviewCards',
      title: 'Overview Cards',
      type: 'array',
      of: [{type: 'insuranceOverviewCard'}],
    }),
    defineField({
      name: 'detailedCategories',
      title: 'Detailed Categories',
      type: 'array',
      of: [{type: 'insuranceTreatmentCategory'}],
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title'},
    prepare(selection) {
      return {
        title: selection.title || 'Insurance Page',
        subtitle: 'Singleton document',
      }
    },
  },
})
