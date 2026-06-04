import {defineField, defineType} from 'sanity'

export const doctorProfileInfoItem = defineType({
  name: 'doctorProfileInfoItem',
  title: '文字項目（可加外部連結）',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: '文字',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: '外部連結',
      type: 'url',
      description: '選填。若填寫，前台會將此項目變成可點擊連結。',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
          allowRelative: false,
        }),
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'url',
    },
  },
})
