import {defineField, defineType} from 'sanity'

export const aboutBranch = defineType({
  name: 'aboutBranch',
  title: 'About Branch',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'tag', title: 'Tag', type: 'string'}),
    defineField({name: 'address', title: 'Address', type: 'string'}),
    defineField({name: 'phone', title: 'Phone', type: 'string'}),
    defineField({name: 'hours', title: 'Hours', type: 'text', rows: 3}),
    defineField({name: 'mapSrc', title: 'Map Embed URL', type: 'url'}),
    defineField({name: 'mapLink', title: 'Map Link', type: 'url'}),
    defineField({name: 'image', title: 'Image', type: 'externalImage'}),
  ],
  preview: {
    select: {title: 'name', subtitle: 'address', media: 'image'},
  },
})
