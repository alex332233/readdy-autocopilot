import {defineField, defineType} from 'sanity'

export const doctorSpecialtyGroup = defineType({
  name: 'doctorSpecialtyGroup',
  title: '專長科別',
  type: 'object',
  fields: [
    defineField({
      name: 'slug',
      title: '識別代號',
      type: 'string',
      hidden: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: '科別名稱',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: '專長項目',
      type: 'array',
      of: [{type: 'string'}],
      hidden: true,
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})
