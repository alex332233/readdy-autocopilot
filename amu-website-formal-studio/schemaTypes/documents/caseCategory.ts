import {defineField, defineType} from 'sanity'

export const caseCategory = defineType({
  name: 'caseCategory',
  title: '真實見證分類',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '分類名稱',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '網址代稱',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (rule) => rule.required().warning('建議填寫，後續分類頁或篩選會使用。'),
    }),
    defineField({
      name: 'description',
      title: '分類說明',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'slug.current'},
  },
})
