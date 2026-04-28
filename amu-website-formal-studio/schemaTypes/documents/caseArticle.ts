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
    defineField({name: 'caseId', title: '文章編號', type: 'number', validation: (rule) => rule.required()}),
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
      name: 'body',
      title: '新版文章內文',
      type: 'richArticleContent',
      description: '新版文章編輯器欄位。若有填寫，前台將優先使用此欄位。',
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
      title: '說明',
      type: 'text',
      rows: 5,
      description: '舊版欄位，保留給既有文章使用。',
    }),
    defineField({
      name: 'before',
      title: '治療前',
      type: 'caseBeforeSection',
      description: '舊版欄位，保留給既有文章使用。',
    }),
    defineField({
      name: 'after',
      title: '治療後',
      type: 'caseAfterSection',
      description: '舊版欄位，保留給既有文章使用。',
    }),
    defineField({
      name: 'conclusion',
      title: '結語',
      type: 'text',
      rows: 5,
      description: '舊版欄位，保留給既有文章使用。',
    }),
    defineField({
      name: 'tips',
      title: '貼心提醒',
      type: 'caseInfoBox',
      description: '舊版欄位，保留給既有文章使用。',
    }),
    defineField({
      name: 'medicalInfo',
      title: '醫療資訊',
      type: 'caseInfoBox',
      description: '舊版欄位，保留給既有文章使用。',
    }),
    defineField({
      name: 'references',
      title: '延伸閱讀',
      type: 'array',
      of: [{type: 'url'}],
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title', categoryName: 'categoryRef.name', legacyCategory: 'category'},
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.categoryName || selection.legacyCategory,
      }
    },
  },
})
