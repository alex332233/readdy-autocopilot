import {defineField, defineType} from 'sanity'

export const healthEducationSubcategory = defineType({
  name: 'healthEducationSubcategory',
  title: '衛教次分類',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '次分類名稱',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryId',
      title: '主分類 ID',
      type: 'string',
      hidden: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryName',
      title: '所屬主分類',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'categoryName'},
  },
})
