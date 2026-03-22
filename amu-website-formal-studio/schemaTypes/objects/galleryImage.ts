import {defineField, defineType} from 'sanity'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Gallery image',
  type: 'object',
  fields: [
    defineField({name: 'url', title: 'Image URL', type: 'url'}),
    defineField({name: 'label', title: 'Label', type: 'string'}),
    defineField({name: 'labelZh', title: 'Chinese label', type: 'string'}),
  ],
  preview: {
    select: {title: 'labelZh', subtitle: 'label'},
  },
})
