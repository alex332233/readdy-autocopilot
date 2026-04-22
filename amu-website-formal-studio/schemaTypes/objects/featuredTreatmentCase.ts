import {defineField, defineType} from 'sanity'

export const featuredTreatmentCase = defineType({
  name: 'featuredTreatmentCase',
  title: 'Featured Treatment Case',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'text', title: 'Text', type: 'text', rows: 4}),
    defineField({name: 'content', title: 'Content', type: 'text', rows: 4}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'label'},
    prepare(selection) {
      return {
        title: selection.title || selection.subtitle || '案例',
        subtitle: selection.subtitle,
      }
    },
  },
})
