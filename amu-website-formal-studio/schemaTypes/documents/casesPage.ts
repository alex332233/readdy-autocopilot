import {defineField, defineType} from 'sanity'

export const casesPage = defineType({
  name: 'casesPage',
  title: 'Cases Page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Document title', type: 'string', initialValue: '真實見證'}),
    defineField({name: 'heroTitle', title: 'Hero Title', type: 'string'}),
    defineField({name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', rows: 3}),
    defineField({name: 'ctaTitle', title: 'CTA Title', type: 'string'}),
    defineField({name: 'ctaDescription', title: 'CTA Description', type: 'text', rows: 3}),
    defineField({name: 'ctaButtonText', title: 'CTA Button Text', type: 'string'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title'},
    prepare(selection) {
      return {
        title: selection.title || 'Cases Page',
        subtitle: 'Singleton document',
      }
    },
  },
})
