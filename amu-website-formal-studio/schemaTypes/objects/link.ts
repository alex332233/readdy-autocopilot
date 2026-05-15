import {defineField, defineType} from 'sanity'

export const link = defineType({
  name: 'link',
  title: '連結',
  type: 'object',
  initialValue: {
    kind: 'healthEducationArticle',
  },
  fields: [
    defineField({name: 'text', title: '顯示文字', type: 'string'}),
    defineField({
      name: 'kind',
      title: '連結類型',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: '衛教文章', value: 'healthEducationArticle'},
          {title: '真實見證文章', value: 'caseArticle'},
          {title: '外部連結', value: 'external'},
          {title: '內部頁面路徑（特殊情況）', value: 'internal'},
        ],
      },
    }),
    defineField({
      name: 'healthEducationArticleRef',
      title: '選擇衛教文章',
      type: 'reference',
      to: [{type: 'healthEducationArticle'}],
      options: {
        disableNew: true,
      },
      hidden: ({parent}) => parent?.kind !== 'healthEducationArticle',
      validation: (rule) =>
        rule.custom((value, context) => {
          if ((context.parent as {kind?: string} | undefined)?.kind !== 'healthEducationArticle') return true
          return value?._ref ? true : '請選擇衛教文章'
        }),
    }),
    defineField({
      name: 'caseArticleRef',
      title: '選擇真實見證文章',
      type: 'reference',
      to: [{type: 'caseArticle'}],
      options: {
        disableNew: true,
      },
      hidden: ({parent}) => parent?.kind !== 'caseArticle',
      validation: (rule) =>
        rule.custom((value, context) => {
          if ((context.parent as {kind?: string} | undefined)?.kind !== 'caseArticle') return true
          return value?._ref ? true : '請選擇真實見證文章'
        }),
    }),
    defineField({
      name: 'internalPath',
      title: '內部頁面路徑（特殊情況）',
      type: 'string',
      description: '一般內部文章請直接選「衛教文章」或「真實見證文章」。此欄只給特殊頁面路徑使用，例如 /team。',
      hidden: ({parent}) => parent?.kind !== 'internal',
      validation: (rule) =>
        rule.custom((value, context) => {
          if ((context.parent as {kind?: string} | undefined)?.kind !== 'internal') return true
          if (!value) return '請填寫內部頁面路徑'
          return value.startsWith('/') ? true : '內部頁面路徑請以 / 開頭'
        }),
    }),
    defineField({
      name: 'href',
      title: '外部網址',
      type: 'url',
      hidden: ({parent}) => parent?.kind !== 'external',
      validation: (rule) =>
        rule.custom((value, context) => {
          if ((context.parent as {kind?: string} | undefined)?.kind !== 'external') return true
          return value ? true : '請填寫外部網址'
        }),
    }),
    defineField({
      name: 'target',
      title: 'Target（舊欄位）',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'text',
      kind: 'kind',
      internalPath: 'internalPath',
      href: 'href',
      healthTitle: 'healthEducationArticleRef.title',
      caseTitle: 'caseArticleRef.title',
    },
    prepare({title, kind, internalPath, href, healthTitle, caseTitle}) {
      const referencedTitle = kind === 'healthEducationArticle' ? healthTitle : kind === 'caseArticle' ? caseTitle : ''
      return {
        title: title || referencedTitle || internalPath || href || '未命名連結',
        subtitle:
          kind === 'healthEducationArticle'
            ? '衛教文章'
            : kind === 'caseArticle'
              ? '真實見證文章'
              : kind === 'external'
                ? href
                : internalPath,
      }
    },
  },
})
