import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Document title', type: 'string', initialValue: '關於艾苜'}),
    defineField({name: 'summary', title: 'Summary', type: 'text', rows: 4}),
    defineField({name: 'originStory', title: 'Origin Story', type: 'aboutOriginStory'}),
    defineField({
      name: 'philosophyTitle',
      title: 'Philosophy Title',
      type: 'string',
    }),
    defineField({
      name: 'philosophyCards',
      title: 'Philosophy Cards',
      type: 'array',
      of: [{type: 'aboutPhilosophyCard'}],
    }),
    defineField({
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [{type: 'aboutCoreValue'}],
    }),
    defineField({name: 'branchesTitle', title: 'Branches Title', type: 'string'}),
    defineField({name: 'branchesSubtitle', title: 'Branches Subtitle', type: 'text', rows: 3}),
    defineField({
      name: 'branches',
      title: 'Branches',
      type: 'array',
      of: [{type: 'aboutBranch'}],
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title'},
    prepare(selection) {
      return {
        title: selection.title || 'About Page',
        subtitle: 'Skeleton only',
      }
    },
  },
})
