import {defineField, defineType} from 'sanity'

export const processStep = defineType({
  name: 'processStep',
  title: '流程步驟',
  type: 'object',
  fields: [
    defineField({name: 'step', title: '步驟編號', type: 'string'}),
    defineField({name: 'title', title: '標題', type: 'string'}),
    defineField({name: 'description', title: '說明', type: 'text', rows: 3}),
    defineField({
      name: 'image',
      title: '圖片',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'step'},
  },
})
