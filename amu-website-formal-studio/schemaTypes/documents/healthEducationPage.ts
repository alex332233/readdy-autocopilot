import {defineField, defineType} from 'sanity'

export const healthEducationPage = defineType({
  name: 'healthEducationPage',
  title: '衛教資訊頁',
  type: 'document',
  fields: [
    defineField({name: 'title', title: '頁面名稱', type: 'string', initialValue: '衛教資訊', validation: (Rule) => Rule.required()}),
    defineField({name: 'heroTitle', title: '主標題', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'heroSubtitle', title: '副標題', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
    defineField({name: 'ctaTitle', title: 'CTA 標題', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'ctaDescription', title: 'CTA 說明', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
    defineField({name: 'ctaButtonText', title: 'CTA 按鈕文字', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'heroTitle'},
  },
})
