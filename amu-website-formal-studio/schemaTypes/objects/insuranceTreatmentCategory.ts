import {defineField, defineType} from 'sanity'

export const insuranceTreatmentCategory = defineType({
  name: 'insuranceTreatmentCategory',
  title: 'Insurance Treatment Category',
  type: 'object',
  fields: [
    defineField({
      name: 'treatmentRef',
      title: '療程項目',
      type: 'reference',
      to: [{type: 'treatmentTaxonomyItem'}],
      weak: true,
      options: {
        filter: 'category == "insurance"',
      },
    }),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'englishTitle', title: 'English Title', type: 'string'}),
    defineField({
      name: 'icon',
      title: 'Icon（舊欄位）',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'color',
      title: 'Color（舊欄位）',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'treatments',
      title: 'Treatments',
      type: 'array',
      of: [{type: 'insuranceTreatmentItem'}],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'englishTitle'},
  },
})
