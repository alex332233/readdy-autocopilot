import {defineField, defineType} from 'sanity'

export const teamPage = defineType({
  name: 'teamPage',
  title: '醫師團隊頁',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '頁面名稱',
      type: 'string',
      initialValue: '醫師團隊',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: '主標題',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: '副標題',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'heroTitle'},
  },
})
