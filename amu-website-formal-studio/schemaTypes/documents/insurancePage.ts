import {defineField, defineType} from 'sanity'

export const insurancePage = defineType({
  name: 'insurancePage',
  title: '健保項目頁',
  type: 'document',
  fields: [
    defineField({name: 'title', title: '文件名稱', type: 'string', initialValue: '健保項目'}),
    defineField({name: 'heroTitle', title: '主標題', type: 'string'}),
    defineField({name: 'heroSubtitle', title: '副標題', type: 'text', rows: 3}),
    defineField({
      name: 'overviewCards',
      title: '總覽卡片',
      type: 'array',
      of: [{type: 'insuranceOverviewCard'}],
    }),
    defineField({
      name: 'detailedCategories',
      title: '詳細分類',
      type: 'array',
      of: [{type: 'insuranceTreatmentCategory'}],
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title'},
    prepare(selection) {
      return {
        title: selection.title || '健保項目',
        subtitle: '單例文件',
      }
    },
  },
})
