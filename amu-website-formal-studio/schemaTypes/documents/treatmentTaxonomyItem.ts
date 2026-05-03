import {createElement, useEffect, useState} from 'react'
import {defineField, defineType} from 'sanity'
import type {StringInputProps} from 'sanity'

const categoryOptions = [
  {title: '健保項目', value: 'insurance'},
  {title: '特色療程', value: 'featured'},
  {title: '預留', value: 'reserved'},
]

const iconSymbols: Record<string, string> = {
  'ri-hearts-line': '心',
  'ri-women-line': '月',
  'ri-seedling-line': '苗',
  'ri-bard-line': '膚',
  'ri-crosshair-2-line': '針',
  'ri-magic-line': '顏',
  'ri-rocket-2-line': '長',
  'ri-bluesky-line': '體',
  'ri-eye-line': '眼',
  'ri-flashlight-line': '光',
  'ri-flask-line': '藥',
  'ri-flower-line': '備',
}

const ensureRemixIconStylesheet = () => {
  if (typeof document === 'undefined') return
  if (document.querySelector('link[data-amu-remixicon="true"]')) return

  const link = document.createElement('link')
  link.dataset.amuRemixicon = 'true'
  link.rel = 'stylesheet'
  link.href = 'https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.min.css'
  document.head.appendChild(link)
}

const renderIconPreview = (icon?: string) =>
  createElement(
    'span',
    {
      style: {
        alignItems: 'center',
        background: '#2d2f35',
        border: '1px solid #4b5563',
        borderRadius: 8,
        color: '#f4d6a1',
        display: 'inline-flex',
        fontSize: 14,
        fontWeight: 700,
        height: 32,
        justifyContent: 'center',
        width: 32,
      },
    },
    createElement('i', {
      className: icon || '',
      title: iconSymbols[icon || ''] || undefined,
      'aria-hidden': true,
    }),
  )

function FixedIconPreviewInput(props: StringInputProps) {
  const icon = props.value || ''
  const [iconStylesReady, setIconStylesReady] = useState(false)

  useEffect(() => {
    ensureRemixIconStylesheet()
    setIconStylesReady(true)
  }, [])

  return createElement(
    'div',
    {
      style: {
        alignItems: 'center',
        display: 'flex',
        padding: '4px 0 0',
      },
    },
    createElement(
      'span',
      {
        style: {
          alignItems: 'center',
          background: '#2d2f35',
          border: '1px solid #4b5563',
          borderRadius: 12,
          color: '#f4d6a1',
          display: 'inline-flex',
          fontSize: 34,
          height: 68,
          justifyContent: 'center',
          width: 68,
        },
      },
      createElement('i', {className: icon, 'aria-hidden': true}, iconStylesReady ? undefined : iconSymbols[icon]),
    ),
  )
}

export const treatmentTaxonomyItem = defineType({
  name: 'treatmentTaxonomyItem',
  title: '全站療程項目',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: '系統 Key',
      description: '穩定識別用於 seed、migration、debug 與前端 fallback，不提供內容端修改。',
      type: 'string',
      readOnly: true,
      hidden: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: '分類',
      type: 'string',
      options: {list: categoryOptions},
      readOnly: true,
      hidden: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      readOnly: true,
      components: {
        input: FixedIconPreviewInput,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'insuranceName',
      title: '健保頁名稱',
      type: 'string',
      hidden: ({document}) => document?.category !== 'insurance',
    }),
    defineField({
      name: 'featuredName',
      title: '特色療程名稱',
      type: 'string',
      hidden: ({document}) => document?.category !== 'featured',
    }),
    defineField({name: 'doctorTagName', title: '醫師 Tag 名稱', type: 'string'}),
    defineField({
      name: 'homeCardSubtitle',
      title: '首頁主治項目卡片副標題',
      type: 'string',
    }),
    defineField({
      name: 'homeCardDescription',
      title: '首頁主治項目卡片說明',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    select: {
      key: 'key',
      category: 'category',
      icon: 'icon',
      insuranceName: 'insuranceName',
      featuredName: 'featuredName',
      doctorTagName: 'doctorTagName',
    },
    prepare(selection) {
      const categoryTitle =
        categoryOptions.find((option) => option.value === selection.category)?.title || selection.category
      const subtitle = [categoryTitle, selection.doctorTagName].filter(Boolean).join(' / ')

      return {
        title: selection.featuredName || selection.insuranceName || selection.doctorTagName || selection.key,
        subtitle,
        media: renderIconPreview(selection.icon),
      }
    },
  },
})
