import {defineField, defineType} from 'sanity'
import {iconFieldOptions} from '../iconOptions'

export const insuranceOverviewCard = defineType({
  name: 'insuranceOverviewCard',
  title: '健保總覽卡片',
  type: 'object',
  fields: [
    defineField({name: 'title', title: '標題', type: 'string'}),
    defineField({name: 'englishTitle', title: '英文標題', type: 'string'}),
    defineField({name: 'subtitle', title: '副標題', type: 'string'}),
    defineField({name: 'icon', title: '圖示', type: 'string', options: iconFieldOptions}),
    defineField({name: 'anchorId', title: '錨點 ID', type: 'string'}),
    defineField({
      name: 'image',
      title: '圖片',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'englishTitle', media: 'image'},
  },
})
