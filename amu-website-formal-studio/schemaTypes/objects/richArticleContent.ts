import {defineArrayMember, defineField, defineType} from 'sanity'

export const richArticleContent = defineType({
  name: 'richArticleContent',
  title: '文章內文',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: '段落', value: 'normal'},
        {title: '標題 H2', value: 'h2'},
        {title: '標題 H3', value: 'h3'},
        {title: '引用', value: 'blockquote'},
      ],
      lists: [
        {title: '項目清單', value: 'bullet'},
        {title: '數字清單', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: '粗體', value: 'strong'},
          {title: '斜體', value: 'em'},
        ],
        annotations: [
          defineArrayMember({
            name: 'link',
            title: '連結',
            type: 'object',
            fields: [
              defineField({
                name: 'href',
                title: '網址',
                type: 'url',
                validation: (rule) => rule.required(),
              }),
              defineField({
                name: 'openInNewTab',
                title: '另開新分頁',
                type: 'boolean',
                initialValue: true,
              }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: '替代文字',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'caption',
          title: '圖片說明',
          type: 'string',
        }),
      ],
    }),
    defineArrayMember({
      type: 'richArticleDivider',
    }),
  ],
})
