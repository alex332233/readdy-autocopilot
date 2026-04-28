import {defineField, defineType} from 'sanity'

const today = () => new Date().toISOString().slice(0, 10)
type ReferenceLike = {_ref?: string}

export const healthEducationArticle = defineType({
  name: 'healthEducationArticle',
  title: '衛教文章',
  type: 'document',
  initialValue: () => ({
    publishDate: today(),
    updatedDate: today(),
    tags: [],
    body: [],
    content: [],
    faq: [],
    references: [],
  }),
  fields: [
    defineField({name: 'articleId', title: '文章編號', type: 'number', validation: (Rule) => Rule.required()}),
    defineField({name: 'title', title: '標題', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      title: '網址代稱',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required().warning('建議填寫，將用於前台文章網址與 SEO。'),
      description: '用於前台網址，例如 health-education/skin-care-basics。若暫時未填，前台會保留文章編號網址。',
    }),
    defineField({
      name: 'category',
      title: '主分類',
      type: 'reference',
      to: [{type: 'healthEducationCategory'}],
      options: {
        disableNew: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subcategory',
      title: '次分類',
      type: 'reference',
      to: [{type: 'healthEducationSubcategory'}],
      options: {
        disableNew: true,
        filter: ({document}) => {
          const categoryRef = (document?.category as ReferenceLike | undefined)?._ref
          if (!categoryRef) {
            return {
              filter: '_type == "healthEducationSubcategory" && false',
            }
          }

          return {
            filter: 'categoryId == $categoryRef',
            params: {categoryRef},
          }
        },
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'tags', title: '標籤', type: 'array', of: [{type: 'string'}], validation: (Rule) => Rule.required()}),
    defineField({name: 'author', title: '作者', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'publishDate', title: '發布日期', type: 'date', validation: (Rule) => Rule.required()}),
    defineField({name: 'updatedDate', title: '更新日期', type: 'date', validation: (Rule) => Rule.required()}),
    defineField({name: 'readTime', title: '閱讀時間', type: 'string', validation: (Rule) => Rule.required()}),
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
      name: 'body',
      title: '新版文章內文',
      type: 'richArticleContent',
      description: '新版文章編輯器欄位。若有填寫，前台將優先使用此欄位。',
    }),
    defineField({
      name: 'content',
      title: '文章段落',
      type: 'array',
      of: [{type: 'healthArticleSection'}],
      description: '舊版欄位，保留給既有文章使用。新版文章請優先使用「新版文章內文」。',
    }),
    defineField({
      name: 'faq',
      title: '問答區塊',
      type: 'array',
      of: [{type: 'faqItem'}],
      validation: (Rule) => Rule.max(7),
      description: '可選，最多 7 題。',
    }),
    defineField({name: 'tips', title: '提醒區塊', type: 'caseInfoBox'}),
    defineField({name: 'references', title: '延伸閱讀', type: 'array', of: [{type: 'link'}]}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  orderings: [
    {title: '文章編號', name: 'articleIdAsc', by: [{field: 'articleId', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'subcategory.name', media: 'coverImage'},
  },
})
