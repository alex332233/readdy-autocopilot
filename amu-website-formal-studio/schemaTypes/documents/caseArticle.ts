import {defineField, defineType} from 'sanity'

const today = () => new Date().toISOString().slice(0, 10)

export const caseArticle = defineType({
  name: 'caseArticle',
  title: '真實見證文章',
  type: 'document',
  initialValue: () => ({
    publishDate: today(),
    tags: [],
    body: [],
    references: [],
  }),
  fields: [
    defineField({
      name: 'priorityOrder',
      title: '優先排序',
      type: 'number',
      description: '可選。數字越小越前面；未填則依發布日期由新到舊排列。同序號會再依發布日期排序。',
      validation: (rule) => rule.integer().positive(),
    }),
    defineField({
      name: 'caseId',
      title: '文章編號（舊欄位）',
      type: 'number',
      readOnly: true,
      hidden: true,
    }),
    defineField({name: 'title', title: '標題', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      title: '網址代稱',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required().warning('建議填寫，將用於前台文章網址與 SEO。'),
      description: '用於前台網址，例如 cases/acupuncture-sleep-case。若暫時未填，前台會保留文章編號網址。',
    }),
    defineField({
      name: 'categoryRef',
      title: '分類',
      type: 'reference',
      to: [{type: 'caseCategory'}],
      weak: true,
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: 'category',
      title: '分類（舊欄位）',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'tags',
      title: '標籤',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'doctor', title: '醫師', type: 'string'}),
    defineField({name: 'fbLink', title: 'Facebook 連結', type: 'url'}),
    defineField({name: 'publishDate', title: '發布日期', type: 'date'}),
    defineField({
      name: 'beforeAfter',
      title: 'Before / After 摘要區塊',
      type: 'caseBeforeAfterSection',
      description: '選填。若啟用，會顯示在文章內文上方。',
    }),
    defineField({
      name: 'body',
      title: '文章內文',
      type: 'richArticleContent',
    }),
    defineField({
      name: 'coverImage',
      title: '封面圖',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
    }),
    defineField({
      name: 'description',
      title: '說明（舊欄位）',
      type: 'text',
      rows: 5,
      description: '舊版欄位，保留給既有文章使用。',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'before',
      title: '治療前（舊欄位）',
      type: 'caseBeforeSection',
      description: '舊版欄位，保留給既有文章使用。',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'after',
      title: '治療後（舊欄位）',
      type: 'caseAfterSection',
      description: '舊版欄位，保留給既有文章使用。',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'conclusion',
      title: '結語（舊欄位）',
      type: 'text',
      rows: 5,
      description: '舊版欄位，保留給既有文章使用。',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'tips',
      title: '貼心提醒（舊欄位）',
      type: 'caseInfoBox',
      description: '舊版欄位，保留給既有文章使用。',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'medicalInfo',
      title: '醫療資訊（舊欄位）',
      type: 'caseInfoBox',
      description: '舊版欄位，保留給既有文章使用。',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'references',
      title: '延伸閱讀',
      type: 'array',
      of: [{type: 'link'}],
      description: '可選內部頁面或外部網址。舊 URL 資料前台仍保留 fallback，後續 migration 轉成連結項目。',
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {
      title: 'title',
      categoryName: 'categoryRef.name',
      legacyCategory: 'category',
      publishDate: 'publishDate',
      priorityOrder: 'priorityOrder',
    },
    prepare(selection) {
      const category = selection.categoryName || selection.legacyCategory
      const prefix = selection.priorityOrder ? `置頂 #${selection.priorityOrder}` : ''
      const details = [selection.publishDate, category].filter(Boolean).join(' / ')
      return {
        title: selection.title,
        subtitle: [prefix, details].filter(Boolean).join(' / '),
      }
    },
  },
})
