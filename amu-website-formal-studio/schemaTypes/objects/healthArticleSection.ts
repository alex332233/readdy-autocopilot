import {defineField, defineType} from 'sanity'

export const healthArticleSection = defineType({
  name: 'healthArticleSection',
  title: '文章段落',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: '段落標題', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'text', title: '段落內容', type: 'text', rows: 6, validation: (Rule) => Rule.required()}),
    defineField({name: 'image', title: '段落圖片', type: 'externalImage'}),
  ],
  preview: {
    select: {title: 'heading', media: 'image'},
  },
})
