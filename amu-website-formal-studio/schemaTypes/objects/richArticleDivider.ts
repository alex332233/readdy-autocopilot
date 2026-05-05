import {defineField, defineType} from 'sanity'

export const richArticleDivider = defineType({
  name: 'richArticleDivider',
  title: '分隔線',
  type: 'object',
  fields: [
    defineField({
      name: 'style',
      title: '樣式',
      type: 'string',
      options: {
        list: [
          {title: '細線', value: 'line'},
        ],
        layout: 'radio',
      },
      initialValue: 'line',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: '分隔線',
      }
    },
  },
})
