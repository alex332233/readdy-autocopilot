import {defineField, defineType} from 'sanity'

export const doctorProfile = defineType({
  name: 'doctorProfile',
  title: '醫師資料',
  type: 'document',
  fields: [
    defineField({
      name: 'displayOrder',
      title: '顯示順序',
      type: 'number',
      description: '可選。數字越小越前面；未填則排在已設定順序的醫師後面。',
      validation: (Rule) => Rule.integer().positive(),
    }),
    defineField({
      name: 'doctorId',
      title: '醫師編號（舊欄位）',
      type: 'number',
      readOnly: true,
      hidden: true,
    }),
    defineField({name: 'name', title: '姓名', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'title', title: '職稱', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'bio', title: '醫師介紹', type: 'text', rows: 5, validation: (Rule) => Rule.required()}),
    defineField({
      name: 'image',
      title: '醫師照片',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: '替代文字',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'education',
      title: '學歷',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'experience',
      title: '經歷',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'insuranceSpecialtyRefs',
      title: '專長科別（健保項目）',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'treatmentTaxonomyItem'}],
          weak: true,
          options: {
            filter: 'category == "insurance"',
            disableNew: true,
          },
        },
      ],
      description: '從全站療程項目選擇醫師擅長的健保項目；前台會顯示對應的醫師 Tag 名稱與固定 icon。',
    }),
    defineField({
      name: 'specialtyGroups',
      title: '專長科別（舊欄位）',
      type: 'array',
      of: [{type: 'doctorSpecialtyGroup'}],
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'featuredTreatmentRefs',
      title: '特色治療',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'treatmentTaxonomyItem'}],
          weak: true,
          options: {
            filter: 'category == "featured"',
            disableNew: true,
          },
        },
      ],
      description: '從全站療程項目選擇醫師擅長的特色治療；前台會顯示對應的醫師 Tag 名稱與固定 icon。',
    }),
    defineField({
      name: 'specialTreatments',
      title: '特色治療（舊欄位）',
      type: 'array',
      of: [{type: 'string'}],
      readOnly: true,
      hidden: true,
    }),
    defineField({name: 'schedule', title: '門診時刻表', type: 'doctorSchedule'}),
    defineField({name: 'scheduleNote', title: '門診備註', type: 'text', rows: 2}),
  ],
  orderings: [
    {
      title: '顯示順序',
      name: 'displayOrderAsc',
      by: [
        {field: 'displayOrder', direction: 'asc'},
        {field: 'doctorId', direction: 'asc'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      displayOrder: 'displayOrder',
      media: 'image',
    },
    prepare(selection) {
      const prefix = selection.displayOrder ? `排序 #${selection.displayOrder}` : ''
      return {
        title: selection.title,
        subtitle: [prefix, selection.subtitle].filter(Boolean).join(' / '),
        media: selection.media,
      }
    },
  },
})
