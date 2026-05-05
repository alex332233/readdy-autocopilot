import {defineField, defineType} from 'sanity'

export const doctorSpecialtyGroup = defineType({
  name: 'doctorSpecialtyGroup',
  title: '專長科別',
  type: 'object',
  fields: [
    defineField({
      name: 'slug',
      title: '科別類型',
      type: 'string',
      description: '影響前台 icon 與樣式，請選擇最接近的科別類型。',
      options: {
        list: [
          {title: '內科', value: 'internal'},
          {title: '婦科', value: 'gynecology'},
          {title: '兒科', value: 'pediatrics'},
          {title: '皮膚科', value: 'dermatology'},
          {title: '針灸科', value: 'acupuncture'},
          {title: '中醫美容', value: 'beauty'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: '科別名稱',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: '專長項目',
      type: 'array',
      of: [{type: 'string'}],
      description: '可選。若未來需要在前台顯示更細的專長項目時再填寫。',
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})
