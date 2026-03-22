import {defineField, defineType} from 'sanity'

export const healthCategory = defineType({
  name: 'healthCategory',
  title: '衛教分類',
  type: 'object',
  fields: [
    defineField({name: 'name', title: '分類名稱', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'subcategories',
      title: '次分類',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})
