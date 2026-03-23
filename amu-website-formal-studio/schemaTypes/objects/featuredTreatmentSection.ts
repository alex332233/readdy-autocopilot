import {defineArrayMember, defineField, defineType} from 'sanity'

export const featuredTreatmentSection = defineType({
  name: 'featuredTreatmentSection',
  title: '特色療程區塊',
  type: 'object',
  fields: [
    defineField({name: 'title', title: '標題', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'icon', title: '圖示', type: 'string'}),
    defineField({
      name: 'layout',
      title: '版型',
      type: 'string',
      options: {
        list: [
          {title: '純文字', value: 'textOnly'},
          {title: '文字加圖片', value: 'textImage'},
          {title: '圖片加文字', value: 'imageText'},
          {title: '卡片加案例', value: 'cardsCases'},
          {title: '流程卡片', value: 'processCards'},
        ],
        layout: 'radio',
      },
      initialValue: 'textOnly',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'eyebrow', title: '前導文字', type: 'string'}),
    defineField({name: 'content', title: '內容', type: 'text', rows: 5}),
    defineField({name: 'additionalContent', title: '補充內容', type: 'text', rows: 5}),
    defineField({
      name: 'image',
      title: '圖片',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
    }),
    defineField({
      name: 'items',
      title: '項目',
      type: 'array',
      of: [defineArrayMember({type: 'featuredTreatmentSectionItem'})],
    }),
    defineField({
      name: 'cases',
      title: '案例',
      type: 'array',
      of: [defineArrayMember({type: 'featuredTreatmentCase'})],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'layout'},
  },
})
