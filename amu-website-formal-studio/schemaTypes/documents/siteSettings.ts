import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: '全站設定',
  type: 'document',
  fields: [
    defineField({name: 'title', title: '文件名稱', type: 'string', initialValue: '全站設定'}),
    defineField({
      name: 'headerLogo',
      title: 'Header Logo',
      type: 'externalImage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headerNavItems',
      title: 'Header 導覽',
      type: 'array',
      of: [{type: 'siteNavItem'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'headerCta',
      title: 'Header 主要按鈕',
      type: 'siteLink',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'externalImage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footerTagline',
      title: 'Footer 標語',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footerLinkGroups',
      title: 'Footer 連結群組',
      type: 'array',
      of: [{type: 'footerLinkGroup'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'clinicInfoTitle',
      title: '診所資訊標題',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: '地址',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: '電話',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: '電子信箱',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'socialLinks',
      title: '社群連結',
      type: 'array',
      of: [{type: 'socialLink'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'copyright',
      title: '版權文字',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'builderLink',
      title: '右下角品牌連結',
      type: 'siteLink',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'headerLogo',
    },
  },
})
