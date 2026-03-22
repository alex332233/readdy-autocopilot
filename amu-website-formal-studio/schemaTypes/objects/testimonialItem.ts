import {defineField, defineType} from 'sanity'

export const testimonialItem = defineType({
  name: 'testimonialItem',
  title: 'Testimonial item',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'service', title: 'Service', type: 'string'}),
    defineField({name: 'content', title: 'Content', type: 'text', rows: 5}),
    defineField({name: 'time', title: 'Time label', type: 'string'}),
  ],
  preview: {
    select: {title: 'name', subtitle: 'service'},
  },
})
