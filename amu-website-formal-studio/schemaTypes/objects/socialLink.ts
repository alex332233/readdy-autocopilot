import {defineField, defineType} from 'sanity'
import {iconFieldOptions} from '../iconOptions'

export const socialLink = defineType({
  name: 'socialLink',
  title: '社群連結',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: '平台名稱',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon class',
      type: 'string',
      options: iconFieldOptions,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: '網址',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'platform',
      subtitle: 'url',
    },
  },
})
