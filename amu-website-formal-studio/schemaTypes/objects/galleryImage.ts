import {defineField, defineType} from 'sanity'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: '診所照片',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: '圖片',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
    }),
    defineField({name: 'label', title: '英文標籤', type: 'string'}),
    defineField({name: 'labelZh', title: '中文標籤', type: 'string'}),
  ],
  preview: {
    select: {title: 'labelZh', subtitle: 'label', media: 'image'},
  },
})
