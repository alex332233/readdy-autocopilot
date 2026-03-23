import {defineField, defineType} from 'sanity'

export const caseArticle = defineType({
  name: 'caseArticle',
  title: 'Case Article',
  type: 'document',
  fields: [
    defineField({name: 'caseId', title: 'Case ID', type: 'number', validation: (rule) => rule.required()}),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'category', title: 'Category', type: 'string'}),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'doctor', title: 'Doctor', type: 'string'}),
    defineField({name: 'fbLink', title: 'Facebook Link', type: 'url'}),
    defineField({name: 'publishDate', title: 'Publish Date', type: 'string'}),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: '替代文字', type: 'string'})],
    }),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 5}),
    defineField({name: 'before', title: 'Before Section', type: 'caseBeforeSection'}),
    defineField({name: 'after', title: 'After Section', type: 'caseAfterSection'}),
    defineField({name: 'conclusion', title: 'Conclusion', type: 'text', rows: 5}),
    defineField({name: 'tips', title: 'Tips Box', type: 'caseInfoBox'}),
    defineField({name: 'medicalInfo', title: 'Medical Info Box', type: 'caseInfoBox'}),
    defineField({
      name: 'references',
      title: 'References',
      type: 'array',
      of: [{type: 'url'}],
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'category'},
  },
})
