import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'about', title: 'About'},
    {name: 'services', title: 'Services'},
    {name: 'whyChoose', title: 'Why Choose'},
    {name: 'team', title: 'Team'},
    {name: 'process', title: 'Process'},
    {name: 'booking', title: 'Booking'},
    {name: 'faq', title: 'FAQ'},
    {name: 'gallery', title: 'Gallery'},
    {name: 'testimonials', title: 'Testimonials'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({name: 'title', title: 'Document title', type: 'string', initialValue: '首頁'}),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({name: 'titleLine1', title: 'Title line 1', type: 'string'}),
        defineField({name: 'titleLine2', title: 'Title line 2', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3}),
        defineField({name: 'ctaText', title: 'CTA text', type: 'string'}),
        defineField({name: 'ctaTarget', title: 'CTA target', type: 'string'}),
        defineField({name: 'image', title: 'Image', type: 'externalImage'}),
      ],
    }),
    defineField({
      name: 'about',
      title: 'About section',
      type: 'object',
      group: 'about',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'englishTitle', title: 'English title', type: 'string'}),
        defineField({name: 'lead', title: 'Lead', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
        defineField({name: 'features', title: 'Features', type: 'array', of: [{type: 'aboutFeature'}]}),
        defineField({name: 'ctaText', title: 'CTA text', type: 'string'}),
        defineField({name: 'ctaTarget', title: 'CTA target', type: 'string'}),
        defineField({name: 'image', title: 'Image', type: 'externalImage'}),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services section',
      type: 'object',
      group: 'services',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
        defineField({name: 'items', title: 'Items', type: 'array', of: [{type: 'serviceItem'}]}),
      ],
    }),
    defineField({
      name: 'whyChoose',
      title: 'Why choose section',
      type: 'object',
      group: 'whyChoose',
      fields: [
        defineField({name: 'titleLine1', title: 'Title line 1', type: 'string'}),
        defineField({name: 'titleLine2', title: 'Title line 2', type: 'string'}),
        defineField({name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{type: 'string'}]}),
        defineField({name: 'ctaText', title: 'CTA text', type: 'string'}),
        defineField({name: 'ctaTarget', title: 'CTA target', type: 'string'}),
        defineField({name: 'image', title: 'Image', type: 'externalImage'}),
      ],
    }),
    defineField({
      name: 'team',
      title: 'Team section',
      type: 'object',
      group: 'team',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
        defineField({name: 'doctors', title: 'Doctors', type: 'array', of: [{type: 'doctorSummary'}]}),
        defineField({name: 'image', title: 'Image', type: 'externalImage'}),
      ],
    }),
    defineField({
      name: 'process',
      title: 'Process section',
      type: 'object',
      group: 'process',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
        defineField({name: 'steps', title: 'Steps', type: 'array', of: [{type: 'processStep'}]}),
      ],
    }),
    defineField({
      name: 'booking',
      title: 'Booking section',
      type: 'object',
      group: 'booking',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
        defineField({name: 'cards', title: 'Cards', type: 'array', of: [{type: 'bookingCard'}]}),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ section',
      type: 'object',
      group: 'faq',
      fields: [
        defineField({name: 'titleLine1', title: 'Title line 1', type: 'string'}),
        defineField({name: 'titleLine2', title: 'Title line 2', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
        defineField({name: 'items', title: 'Items', type: 'array', of: [{type: 'faqItem'}]}),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery section',
      type: 'object',
      group: 'gallery',
      fields: [
        defineField({name: 'images', title: 'Images', type: 'array', of: [{type: 'galleryImage'}]}),
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials section',
      type: 'object',
      group: 'testimonials',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
        defineField({name: 'items', title: 'Items', type: 'array', of: [{type: 'testimonialItem'}]}),
        defineField({name: 'ctaText', title: 'CTA text', type: 'string'}),
      ],
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Home Page',
        subtitle: 'Singleton document',
      }
    },
  },
})
