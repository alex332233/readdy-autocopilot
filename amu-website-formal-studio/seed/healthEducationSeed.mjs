import {loadHealthEducationMock} from './loadHealthEducationMock.mjs'

const {healthCategories, healthEducationData} = loadHealthEducationMock()

export const healthEducationPageSeed = {
  _id: 'healthEducationPage',
  _type: 'healthEducationPage',
  title: '衛教資訊',
  heroTitle: '衛教資訊',
  heroSubtitle: '專業醫師撰寫，讓您更了解中醫調理的知識與日常保健之道',
  categories: healthCategories.map((category) => ({
    _key: category.name,
    name: category.name,
    subcategories: category.subcategories,
  })),
  ctaTitle: '您也想擁有健康的身體嗎？',
  ctaDescription: '每個人的體質不同，需要的調理方式也不同\n讓我們的專業醫師為您量身打造專屬的治療計畫',
  ctaButtonText: '立即預約諮詢',
}

export const healthEducationArticlesSeed = healthEducationData.map((article) => ({
  _id: `healthEducationArticle-${article.id}`,
  _type: 'healthEducationArticle',
  articleId: article.id,
  title: article.title,
  category: article.category,
  subcategory: article.subcategory,
  tags: article.tags,
  author: article.author,
  publishDate: article.date,
  updatedDate: article.updatedDate,
  readTime: article.readTime,
  views: article.views,
  summary: article.summary,
  coverImage: {
    url: article.coverImage,
    alt: article.title,
  },
  content: article.content.map((section, index) => ({
    _key: `${article.id}-${index}`,
    heading: section.heading,
    text: section.text,
    image: section.image
      ? {
          url: section.image,
          alt: section.heading,
        }
      : undefined,
  })),
  tips: article.tips || undefined,
  references: article.references?.map((reference, index) => ({
    _key: `${article.id}-ref-${index}`,
    text: reference.label,
    href: reference.url,
  })),
}))
