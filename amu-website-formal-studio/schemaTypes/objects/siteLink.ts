import {defineField, defineType} from 'sanity'

export const siteLink = defineType({
  name: 'siteLink',
  title: '站內連結',
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
      description: 'route 填 /about，scroll 填 booking，external 填完整網址',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'target',
    },
    prepare({title, subtitle}) {
      return {
        title: title || '未命名連結',
        subtitle,
      }
    },
  },
})
