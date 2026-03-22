import {defineField, defineType} from 'sanity'

export const siteNavItem = defineType({
  name: 'siteNavItem',
  title: '導覽項目',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: '文字',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'kind',
      title: '連結類型',
      type: 'string',
      initialValue: 'route',
      options: {
        list: [
          {title: '頁面路由', value: 'route'},
          {title: '頁內區塊', value: 'scroll'},
          {title: '外部連結', value: 'external'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'target',
      title: '目標值',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'children',
      title: '下拉選單',
      type: 'array',
      of: [{type: 'siteLink'}],
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'target',
    },
    prepare({title, subtitle}) {
      return {
        title: title || '未命名導覽項目',
        subtitle,
      }
    },
  },
})
