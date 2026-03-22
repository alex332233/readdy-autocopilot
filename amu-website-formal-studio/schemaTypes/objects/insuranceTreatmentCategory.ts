import {defineField, defineType} from 'sanity'

export const insuranceTreatmentCategory = defineType({
  name: 'insuranceTreatmentCategory',
  title: 'Insurance Treatment Category',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'englishTitle', title: 'English Title', type: 'string'}),
    defineField({name: 'icon', title: 'Icon', type: 'string'}),
    defineField({name: 'color', title: 'Color', type: 'string'}),
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
