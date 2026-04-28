import {defineArrayMember, defineField, defineType} from 'sanity'

export const featuredTreatmentsPage = defineType({
  name: 'featuredTreatmentsPage',
  title: '特色療程頁',
  type: 'document',
  fields: [
    defineField({name: 'title', title: '文件名稱', type: 'string', initialValue: '特色療程'}),
    defineField({name: 'heroTitle', title: '主標題', type: 'string', initialValue: '特色療程'}),
    defineField({name: 'heroDescription', title: '主視覺說明', type: 'text', rows: 3}),
    defineField({
      name: 'cards',
      title: '療程卡片',
      type: 'array',
      of: [defineArrayMember({type: 'featuredTreatmentCard'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title'},
    prepare(selection) {
      return {
        title: selection.title || '特色療程',
        subtitle: '列表頁',
      }
    },
  },
})
