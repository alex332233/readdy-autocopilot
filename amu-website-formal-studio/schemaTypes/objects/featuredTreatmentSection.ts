import {defineArrayMember, defineField, defineType} from 'sanity'

export const featuredTreatmentSection = defineType({
  name: 'featuredTreatmentSection',
  title: 'Featured Treatment Section',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'icon', title: 'Icon', type: 'string'}),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Text Only', value: 'textOnly'},
          {title: 'Text + Image', value: 'textImage'},
          {title: 'Image + Text', value: 'imageText'},
          {title: 'Cards + Cases', value: 'cardsCases'},
          {title: 'Process Cards', value: 'processCards'},
        ],
        layout: 'radio',
      },
      initialValue: 'textOnly',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
    defineField({name: 'content', title: 'Content', type: 'text', rows: 5}),
    defineField({name: 'additionalContent', title: 'Additional Content', type: 'text', rows: 5}),
    defineField({name: 'image', title: 'Image', type: 'externalImage'}),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [defineArrayMember({type: 'featuredTreatmentSectionItem'})],
    }),
    defineField({
      name: 'cases',
      title: 'Cases',
      type: 'array',
      of: [defineArrayMember({type: 'featuredTreatmentCase'})],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'layout'},
  },
})
