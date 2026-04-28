import {defineField, defineType} from 'sanity'

export const serviceItem = defineType({
  name: 'serviceItem',
  title: 'Service item',
  type: 'object',
  fields: [
    defineField({
      name: 'treatmentRef',
      title: '療程項目',
      type: 'reference',
      to: [{type: 'treatmentTaxonomyItem'}],
      weak: true,
      options: {
        filter: 'category in ["insurance", "featured"]',
        disableNew: true,
      },
      description: '從全站療程項目選擇，前台名稱、icon 與了解更多連結會依療程項目固定帶入；預留項目不會出現在此選單。',
    }),
    defineField({name: 'number', title: '編號', type: 'string'}),
    defineField({
      name: 'icon',
      title: 'Icon class（舊欄位）',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      title: 'Title（舊欄位）',
      description: '前台標題已改由「療程項目」固定帶入，此欄位僅作舊資料 fallback。',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'subtitle',
      title: '卡片副標題（舊欄位）',
      description: '前台副標題已改由全站療程項目的「首頁主治項目卡片副標題」帶入，此欄位僅作舊資料 fallback。',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'description',
      title: '卡片說明（舊欄位）',
      description: '前台說明已改由全站療程項目的「首頁主治項目卡片說明」帶入，此欄位僅作舊資料 fallback。',
      type: 'text',
      rows: 4,
      readOnly: true,
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'treatmentRef.insuranceName',
      featuredTitle: 'treatmentRef.featuredName',
      fallbackTitle: 'title',
      subtitle: 'subtitle',
    },
    prepare(selection) {
      return {
        title: selection.title || selection.featuredTitle || selection.fallbackTitle || '主治項目',
        subtitle: selection.subtitle,
      }
    },
  },
})
