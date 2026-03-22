import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutStoryBlock = defineType({
  name: 'aboutStoryBlock',
  title: 'About Story Block',
  type: 'object',
  fields: [
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Image + Text', value: 'imageText'},
          {title: 'Text + Image', value: 'textImage'},
          {title: 'Split Images + Text', value: 'splitImagesText'},
          {title: 'Logo + Text', value: 'logoText'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'introText', title: 'Intro Text', type: 'text', rows: 3}),
    defineField({name: 'heading', title: 'Heading', type: 'text', rows: 3}),
    defineField({name: 'subheading', title: 'Subheading', type: 'text', rows: 3}),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [defineArrayMember({type: 'text', rows: 4})],
    }),
    defineField({name: 'primaryImage', title: 'Primary Image', type: 'externalImage'}),
    defineField({name: 'secondaryImage', title: 'Secondary Image', type: 'externalImage'}),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'layout', media: 'primaryImage'},
    prepare(selection) {
      return {
        title: selection.title || 'Story block',
        subtitle: selection.subtitle || 'No layout',
        media: selection.media,
      }
    },
  },
})
