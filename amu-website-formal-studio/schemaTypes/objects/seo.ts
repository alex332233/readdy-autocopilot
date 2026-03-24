import {defineField, defineType} from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Meta title', type: 'string'}),
    defineField({name: 'description', title: 'Meta description', type: 'text', rows: 3}),
    defineField({name: 'ogTitle', title: 'OG title', type: 'string', hidden: true}),
    defineField({name: 'ogDescription', title: 'OG description', type: 'text', rows: 3, hidden: true}),
    defineField({name: 'canonicalUrl', title: 'Canonical URL', type: 'url', hidden: true}),
  ],
})
