import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({name: 'titleLine1', title: 'Title line 1', type: 'string'}),
        defineField({name: 'titleLine2', title: 'Title line 2', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3}),
        defineField({name: 'ctaText', title: 'CTA text', type: 'string'}),
        defineField({
          name: 'ctaTarget',
          title: 'CTA target',
          type: 'string',
          options: {list: [{title: 'Booking', value: 'booking'}, {title: 'About', value: 'about'}]},
          initialValue: 'booking',
        }),
        defineField({
          name: 'heroImageUrl',
          title: 'Hero image URL',
          type: 'url',
          validation: (rule) => rule.uri({allowRelative: false, scheme: ['http', 'https']}),
        }),
        defineField({name: 'heroImageAlt', title: 'Hero image alt', type: 'string'}),
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{type: 'section'}],
    }),
    defineField({
      name: 'servicesTitle',
      title: 'Services section title',
      type: 'string',
      initialValue: '主治項目',
    }),
    defineField({
      name: 'servicesItems',
      title: 'Services items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'number', title: 'Number', type: 'string'}),
            defineField({name: 'icon', title: 'Icon class', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Home Page',
      subtitle: 'Singleton document',
    }),
  },
})
