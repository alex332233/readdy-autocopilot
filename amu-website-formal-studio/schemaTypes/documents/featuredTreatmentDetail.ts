import {defineArrayMember, defineField, defineType} from 'sanity'

export const featuredTreatmentDetail = defineType({
  name: 'featuredTreatmentDetail',
  title: 'Featured Treatment Detail',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3}),
    defineField({name: 'themeColor', title: 'Theme Color', type: 'string'}),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [defineArrayMember({type: 'featuredTreatmentSection'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({name: 'disclaimer', title: 'Disclaimer', type: 'text', rows: 5}),
    defineField({name: 'ctaTitle', title: 'CTA Title', type: 'string'}),
    defineField({name: 'ctaDescription', title: 'CTA Description', type: 'text', rows: 3}),
    defineField({name: 'ctaButtonText', title: 'CTA Button Text', type: 'string'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current'},
  },
})
