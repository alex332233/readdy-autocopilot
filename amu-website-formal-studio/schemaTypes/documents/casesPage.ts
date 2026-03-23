import {defineField, defineType} from 'sanity'

export const casesPage = defineType({
  name: 'casesPage',
  title: '真實見證頁',
  type: 'document',
  fields: [
    defineField({name: 'title', title: '文件名稱', type: 'string', initialValue: '真實見證'}),
    defineField({name: 'heroTitle', title: '主標題', type: 'string'}),
    defineField({name: 'heroSubtitle', title: '副標題', type: 'text', rows: 3}),
    defineField({name: 'ctaTitle', title: 'CTA 標題', type: 'string'}),
    defineField({name: 'ctaDescription', title: 'CTA 說明', type: 'text', rows: 3}),
    defineField({name: 'ctaButtonText', title: 'CTA 按鈕文字', type: 'string'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title'},
    prepare(selection) {
      return {
        title: selection.title || '真實見證',
        subtitle: '單例文件',
      }
    },
  },
})
