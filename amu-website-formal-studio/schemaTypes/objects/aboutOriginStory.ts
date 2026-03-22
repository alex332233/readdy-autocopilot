import {defineField, defineType} from 'sanity'

export const aboutOriginStory = defineType({
  name: 'aboutOriginStory',
  title: 'About Origin Story',
  type: 'object',
  fields: [
    defineField({name: 'introQuote', title: 'Intro Quote', type: 'text', rows: 2}),
    defineField({name: 'scrollLabel', title: 'Scroll Label', type: 'string'}),
    defineField({
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [{type: 'aboutStoryBlock'}],
    }),
  ],
  preview: {
    select: {title: 'introQuote'},
    prepare(selection) {
      return {
        title: selection.title || 'About Origin Story',
      }
    },
  },
})
