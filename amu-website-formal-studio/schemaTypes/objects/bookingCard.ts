import {defineField, defineType} from 'sanity'

export const bookingCard = defineType({
  name: 'bookingCard',
  title: 'Booking card',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'value', title: 'Value', type: 'string'}),
    defineField({name: 'href', title: 'Href', type: 'string'}),
    defineField({name: 'buttonText', title: 'Button text', type: 'string'}),
    defineField({name: 'icon', title: 'Icon class', type: 'string'}),
    defineField({
      name: 'buttonTheme',
      title: 'Button theme',
      type: 'string',
      options: {
        list: [
          {title: 'Brand', value: 'brand'},
          {title: 'Line', value: 'line'},
        ],
      },
      initialValue: 'brand',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'value'},
  },
})
