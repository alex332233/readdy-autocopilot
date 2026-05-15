import {defineField, defineType} from 'sanity'

export const caseBeforeAfterSection = defineType({
  name: 'caseBeforeAfterSection',
  title: 'Before / After 摘要區塊',
  type: 'object',
  initialValue: {
    enabled: false,
    before: {
      title: '',
      items: [],
    },
    after: {
      title: '',
      phases: [],
    },
  },
  fields: [
    defineField({
      name: 'enabled',
      title: '顯示 Before / After 區塊',
      type: 'boolean',
      description: '開啟後會顯示在文章內容上方。',
    }),
    defineField({
      name: 'before',
      title: 'Before',
      type: 'caseBeforeSection',
      hidden: ({parent}) => parent?.enabled !== true,
    }),
    defineField({
      name: 'after',
      title: 'After',
      type: 'caseAfterSection',
      hidden: ({parent}) => parent?.enabled !== true,
    }),
  ],
  preview: {
    select: {
      enabled: 'enabled',
      beforeTitle: 'before.title',
      afterTitle: 'after.title',
    },
    prepare({enabled, beforeTitle, afterTitle}) {
      return {
        title: enabled ? '顯示 Before / After' : '不顯示 Before / After',
        subtitle: [beforeTitle, afterTitle].filter(Boolean).join(' / '),
      }
    },
  },
})
