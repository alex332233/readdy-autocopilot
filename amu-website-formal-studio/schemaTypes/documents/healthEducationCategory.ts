import {defineArrayMember, defineField, defineType} from 'sanity'

export const healthEducationCategory = defineType({
  name: 'healthEducationCategory',
  title: '衛教主分類',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '分類名稱',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subcategories',
      title: '次分類',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'healthEducationSubcategory'}],
          options: {disableNew: true},
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})
