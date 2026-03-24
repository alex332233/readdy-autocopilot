import {healthCategories, healthEducationData} from '../../mocks/health-education';
import type {HealthEducationArticleContent, HealthEducationPageContent} from '../types';

const defaultArticles: HealthEducationArticleContent[] = healthEducationData.map((article) => ({
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
  content: article.content.map((section) => ({
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
  references: article.references?.map((reference) => ({
    text: reference.label,
    href: reference.url,
  })),
}));

export const defaultHealthEducationPageContent: HealthEducationPageContent = {
  title: '衛教資訊',
  heroTitle: '衛教資訊',
  heroSubtitle: '專業醫師撰寫，讓您更了解中醫調理的知識與日常保健之道',
  categories: healthCategories.map((category) => ({
    id: category.name,
    name: category.name,
    subcategories: category.subcategories.map((subcategory) => ({
      id: `${category.name}-${subcategory}`,
      name: subcategory,
    })),
  })),
  ctaTitle: '您也想擁有健康的身體嗎？',
  ctaDescription: '每個人的體質不同，需要的調理方式也不同\n讓我們的專業醫師為您量身打造專屬的治療計畫',
  ctaButtonText: '立即預約諮詢',
  articles: defaultArticles,
};
