import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: '關於頁',
  type: 'document',
  fields: [
    defineField({name: 'title', title: '文件名稱', type: 'string', initialValue: '關於艾苜'}),
    defineField({name: 'summary', title: '頁面摘要', type: 'text', rows: 4}),
    defineField({name: 'originStory', title: '品牌起源', type: 'aboutOriginStory'}),
    defineField({
      name: 'philosophyTitle',
      title: '理念標題',
      type: 'string',
    }),
    defineField({
      name: 'philosophyCards',
      title: '理念卡片',
      type: 'array',
      of: [{type: 'aboutPhilosophyCard'}],
    }),
    defineField({
      name: 'coreValues',
      title: '核心價值',
      type: 'array',
      of: [{type: 'aboutCoreValue'}],
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title'},
    prepare(selection) {
      return {
        title: selection.title || '關於艾苜',
        subtitle: '單例文件',
      }
    },
  },
})
