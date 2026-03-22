import {defineField, defineType} from 'sanity'

export const insuranceOverviewCard = defineType({
  name: 'insuranceOverviewCard',
  title: 'Insurance Overview Card',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'englishTitle', title: 'English Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'icon', title: 'Icon', type: 'string'}),
    defineField({name: 'anchorId', title: 'Anchor ID', type: 'string'}),
    defineField({name: 'image', title: 'Image', type: 'externalImage'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'englishTitle', media: 'image'},
  },
})
