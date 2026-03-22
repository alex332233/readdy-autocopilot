import {defineField, defineType} from 'sanity'

export const externalImage = defineType({
  name: 'externalImage',
  title: 'External image',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Image URL',
      type: 'url',
      validation: (rule) => rule.uri({allowRelative: false, scheme: ['http', 'https']}),
    }),
    defineField({name: 'alt', title: 'Alt text', type: 'string'}),
  ],
  preview: {
    select: {
      title: 'alt',
      subtitle: 'url',
    },
  },
})
