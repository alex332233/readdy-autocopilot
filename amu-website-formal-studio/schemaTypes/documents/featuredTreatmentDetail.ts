import {defineArrayMember, defineField, defineType} from 'sanity'

export const featuredTreatmentDetail = defineType({
  name: 'featuredTreatmentDetail',
  title: '特色療程子頁',
  type: 'document',
  fields: [
    defineField({name: 'title', title: '標題', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      title: '網址代稱',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'subtitle', title: '副標題', type: 'text', rows: 3}),
    defineField({name: 'themeColor', title: '主題色', type: 'string'}),
    defineField({
      name: 'primaryImage',
      title: '主要圖片',
      description: '新設計稿個別頁主內容第一張圖。',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
    }),
    defineField({
      name: 'secondaryImage',
      title: '次要圖片',
      description: '新設計稿個別頁主內容第二張圖。',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
    }),
    defineField({
      name: 'sections',
      title: '內容區塊',
      type: 'array',
      of: [defineArrayMember({type: 'featuredTreatmentSection'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'featuredCases',
      title: '真實見證',
      type: 'array',
      of: [defineArrayMember({type: 'featuredTreatmentCase'})],
    }),
    defineField({name: 'disclaimer', title: '注意事項', type: 'text', rows: 5}),
    defineField({name: 'ctaTitle', title: 'CTA 標題', type: 'string'}),
    defineField({name: 'ctaDescription', title: 'CTA 說明', type: 'text', rows: 3}),
    defineField({name: 'ctaButtonText', title: 'CTA 按鈕文字', type: 'string'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current'},
  },
})
