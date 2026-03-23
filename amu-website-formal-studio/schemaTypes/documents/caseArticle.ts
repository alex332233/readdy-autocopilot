import {defineField, defineType} from 'sanity'

export const caseArticle = defineType({
  name: 'caseArticle',
  title: '真實見證文章',
  type: 'document',
  fields: [
    defineField({name: 'caseId', title: '文章編號', type: 'number', validation: (rule) => rule.required()}),
    defineField({name: 'title', title: '標題', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'category', title: '分類', type: 'string'}),
    defineField({
      name: 'tags',
      title: '標籤',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'doctor', title: '醫師', type: 'string'}),
    defineField({name: 'fbLink', title: 'Facebook 連結', type: 'url'}),
    defineField({name: 'publishDate', title: '發布日期', type: 'string'}),
    defineField({
      name: 'coverImage',
      title: '封面圖',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
    }),
    defineField({name: 'description', title: '說明', type: 'text', rows: 5}),
    defineField({name: 'before', title: '治療前', type: 'caseBeforeSection'}),
    defineField({name: 'after', title: '治療後', type: 'caseAfterSection'}),
    defineField({name: 'conclusion', title: '結語', type: 'text', rows: 5}),
    defineField({name: 'tips', title: '貼心提醒', type: 'caseInfoBox'}),
    defineField({name: 'medicalInfo', title: '醫療資訊', type: 'caseInfoBox'}),
    defineField({
      name: 'references',
      title: '延伸閱讀',
      type: 'array',
      of: [{type: 'url'}],
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'category'},
  },
})
