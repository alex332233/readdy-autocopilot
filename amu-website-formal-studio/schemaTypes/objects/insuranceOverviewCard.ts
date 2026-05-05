import {defineField, defineType} from 'sanity'

export const insuranceOverviewCard = defineType({
  name: 'insuranceOverviewCard',
  title: '健保總覽卡片',
  type: 'object',
  fields: [
    defineField({
      name: 'treatmentRef',
      title: '療程項目',
      type: 'reference',
      to: [{type: 'treatmentTaxonomyItem'}],
      weak: true,
      options: {
        filter: 'category == "insurance"',
      },
    }),
    defineField({name: 'title', title: '標題', type: 'string'}),
    defineField({name: 'englishTitle', title: '英文標題', type: 'string'}),
    defineField({name: 'subtitle', title: '副標題', type: 'string'}),
    defineField({
      name: 'icon',
      title: '圖示（舊欄位）',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
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
