import {defineArrayMember, defineField, defineType} from 'sanity'

export const featuredTreatmentDetail = defineType({
  name: 'featuredTreatmentDetail',
  title: '特色療程子頁',
  type: 'document',
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
    defineField({name: 'title', title: '標題', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      title: '網址代稱',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'subtitle', title: '副標題', type: 'text', rows: 3}),
    defineField({
      name: 'themeColor',
      title: '主題色',
      description: '由設計系統與療程 taxonomy 控管，僅保留作舊資料 fallback。',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'primaryImage',
      title: '內容第一張圖片',
      description: '不是頁首 hero；用於下方主內容區塊的第一張情境圖。',
      type: 'image',
      hidden: ({document}) =>
        (document?.slug as {_type?: 'slug'; current?: string} | undefined)?.current === 'decoction',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
    }),
    defineField({
      name: 'secondaryImage',
      title: '內容第二張圖片',
      description: '用於下方主內容區塊的第二張情境圖。',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
    }),
    defineField({
      name: 'sections',
      title: '內容區塊',
      type: 'array',
      of: [defineArrayMember({type: 'featuredTreatmentSection'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'featuredCases',
      title: '真實見證',
      type: 'array',
      of: [defineArrayMember({type: 'featuredTreatmentCase'})],
    }),
    defineField({name: 'disclaimer', title: '注意事項', type: 'text', rows: 5}),
    defineField({name: 'ctaTitle', title: 'CTA 標題', type: 'string'}),
    defineField({name: 'ctaDescription', title: 'CTA 說明', type: 'text', rows: 3}),
    defineField({name: 'ctaButtonText', title: 'CTA 按鈕文字', type: 'string'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current'},
  },
})
