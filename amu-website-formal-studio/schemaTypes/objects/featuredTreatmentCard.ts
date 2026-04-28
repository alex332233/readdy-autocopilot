import {defineArrayMember, defineField, defineType} from 'sanity'

export const featuredTreatmentCard = defineType({
  name: 'featuredTreatmentCard',
  title: 'Featured Treatment Card',
  type: 'object',
  fields: [
    defineField({
      name: 'treatmentRef',
      title: '療程項目',
      type: 'reference',
      to: [{type: 'treatmentTaxonomyItem'}],
      weak: true,
      options: {
        filter: 'category == "featured"',
        disableNew: true,
      },
    }),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'englishTitle', title: 'English Title', type: 'string'}),
    defineField({
      name: 'icon',
      title: 'Icon（舊欄位）',
      description: '已改由「療程項目」固定帶入 icon。此欄位僅作舊資料 fallback。',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'color',
      title: 'Color（舊欄位）',
      description: '後續會收斂到設計 token。此欄位暫時保留作舊畫面 fallback。',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
    }),
    defineField({name: 'treatmentTitle', title: 'Treatment Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 5, validation: (rule) => rule.required()}),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({type: 'featuredTreatmentTag'})],
    }),
    defineField({
      name: 'detailSlug',
      title: 'Detail Slug（舊欄位）',
      description: '連結身份已改由療程項目處理。此欄位僅作舊資料 fallback。',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'englishTitle'},
  },
})
