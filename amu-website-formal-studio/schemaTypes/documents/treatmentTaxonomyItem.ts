import {defineField, defineType} from 'sanity'

const categoryOptions = [
  {title: '健保項目', value: 'insurance'},
  {title: '特色療程', value: 'featured'},
  {title: '預留', value: 'reserved'},
]

export const treatmentTaxonomyItem = defineType({
  name: 'treatmentTaxonomyItem',
  title: '全站療程項目',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: '系統 Key',
      description: '穩定識別用於 seed、migration、debug 與前端 fallback，不提供內容端修改。',
      type: 'string',
      readOnly: true,
      hidden: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: '分類',
      type: 'string',
      options: {list: categoryOptions},
      readOnly: true,
      hidden: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: '固定 Icon',
      description: '由療程 taxonomy 固定控管，不在各頁分別填 icon class。',
      type: 'string',
      readOnly: true,
      hidden: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'insuranceName',
      title: '健保頁名稱',
      type: 'string',
      hidden: ({document}) => document?.category !== 'insurance',
    }),
    defineField({
      name: 'featuredName',
      title: '特色療程名稱',
      type: 'string',
      hidden: ({document}) => document?.category !== 'featured',
    }),
    defineField({name: 'doctorTagName', title: '醫師 Tag 名稱', type: 'string'}),
    defineField({
      name: 'homeCardSubtitle',
      title: '首頁主治項目卡片副標題',
      type: 'string',
    }),
    defineField({
      name: 'homeCardDescription',
      title: '首頁主治項目卡片說明',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    select: {
      key: 'key',
      category: 'category',
      insuranceName: 'insuranceName',
      featuredName: 'featuredName',
      doctorTagName: 'doctorTagName',
    },
    prepare(selection) {
      const categoryTitle =
        categoryOptions.find((option) => option.value === selection.category)?.title || selection.category
      const subtitle = [categoryTitle, selection.doctorTagName].filter(Boolean).join(' / ')

      return {
        title: selection.featuredName || selection.insuranceName || selection.doctorTagName || selection.key,
        subtitle,
      }
    },
  },
})
