import {loadHealthEducationMock} from './loadHealthEducationMock.mjs'

const {healthCategories, healthEducationData} = loadHealthEducationMock()

const getCategoryId = (categoryIndex) => `healthEducationCategory-${categoryIndex + 1}`

const getSubcategoryId = (categoryIndex, subcategoryIndex) =>
  `healthEducationSubcategory-${categoryIndex + 1}-${subcategoryIndex + 1}`

const categoryIdByName = new Map()
const subcategoryIdByKey = new Map()

healthCategories.forEach((category, categoryIndex) => {
  categoryIdByName.set(category.name, getCategoryId(categoryIndex))
  category.subcategories.forEach((subcategory, subcategoryIndex) => {
    subcategoryIdByKey.set(
      `${category.name}::${subcategory}`,
      getSubcategoryId(categoryIndex, subcategoryIndex),
    )
  })
})

export const healthEducationCategoryDocsSeed = healthCategories.map((category, categoryIndex) => ({
  _id: getCategoryId(categoryIndex),
  _type: 'healthEducationCategory',
  name: category.name,
  subcategories: category.subcategories.map((subcategory, subcategoryIndex) => ({
    _type: 'reference',
    _ref: getSubcategoryId(categoryIndex, subcategoryIndex),
    _key: `${category.name}-${subcategory}`,
  })),
}))

export const healthEducationSubcategoryDocsSeed = healthCategories.flatMap((category) =>
  category.subcategories.map((subcategory, subcategoryIndex) => ({
    _id: subcategoryIdByKey.get(`${category.name}::${subcategory}`),
    _type: 'healthEducationSubcategory',
    name: subcategory,
    categoryId: categoryIdByName.get(category.name),
    categoryName: category.name,
  })),
)

export const healthEducationPageSeed = {
  _id: 'healthEducationPage',
  _type: 'healthEducationPage',
  title: '衛教資訊',
  heroTitle: '衛教資訊',
  heroSubtitle: '專業醫師撰寫，讓您更了解中醫調理的知識與日常保健之道',
  visibleCategoryRefs: healthCategories.map((category) => ({
    _type: 'reference',
    _ref: categoryIdByName.get(category.name),
    _key: category.name,
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
  category: {
    _type: 'reference',
    _ref: categoryIdByName.get(article.category),
  },
  subcategory: {
    _type: 'reference',
    _ref: subcategoryIdByKey.get(`${article.category}::${article.subcategory}`),
  },
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
