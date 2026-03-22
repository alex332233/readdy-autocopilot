import {defineField, defineType} from 'sanity'

export const footerLinkGroup = defineType({
  name: 'footerLinkGroup',
  title: 'Footer 連結群組',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: '群組標題',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'links',
      title: '連結',
      type: 'array',
      of: [{type: 'siteLink'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
