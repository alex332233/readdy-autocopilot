import {defineField, defineType} from 'sanity'

export const healthEducationArticle = defineType({
  name: 'healthEducationArticle',
  title: '衛教文章',
  type: 'document',
  fields: [
    defineField({name: 'articleId', title: '文章編號', type: 'number', validation: (Rule) => Rule.required()}),
    defineField({name: 'title', title: '標題', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'category', title: '主分類', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'subcategory', title: '次分類', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'tags', title: '標籤', type: 'array', of: [{type: 'string'}], validation: (Rule) => Rule.required()}),
    defineField({name: 'author', title: '作者', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'publishDate', title: '發布日期', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'updatedDate', title: '更新日期', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'readTime', title: '閱讀時間', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'views', title: '瀏覽次數', type: 'number', validation: (Rule) => Rule.required()}),
    defineField({name: 'summary', title: '摘要', type: 'text', rows: 4, validation: (Rule) => Rule.required()}),
    defineField({
      name: 'coverImage',
      title: '封面圖',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: '文章段落',
      type: 'array',
      of: [{type: 'healthArticleSection'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({name: 'tips', title: '提醒區塊', type: 'caseInfoBox'}),
    defineField({name: 'references', title: '延伸閱讀', type: 'array', of: [{type: 'link'}]}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  orderings: [
    {title: '文章編號', name: 'articleIdAsc', by: [{field: 'articleId', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'subcategory', media: 'coverImage'},
  },
})
