import type { MetaDescriptor } from 'react-router';

export const SITE_NAME = '艾苜中醫診所';
export const DEFAULT_TITLE = '艾苜中醫診所 - 以艾醫身，以苜養心';
export const DEFAULT_DESCRIPTION =
  '艾苜中醫診所提供全方位中醫診療服務，包含婦科調理、兒童生長發育、美顏針灸、體質調理等專業療程。';
export const DEFAULT_OG_IMAGE = '/og-default.jpg';

const SITE_URL =
  import.meta.env.VITE_SITE_URL ||
  import.meta.env.VITE_PUBLIC_SITE_URL ||
  'https://amu-readdy-code-v2.vercel.app';

export const getSiteUrl = () => SITE_URL.replace(/\/$/, '');

export const isSiteNoIndex = () => import.meta.env.VITE_SITE_NOINDEX === 'true';

export interface SeoMetaInput {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
}

export const withSiteName = (title?: string) => {
  if (!title) return DEFAULT_TITLE;
  return title.includes(SITE_NAME) ? title : `${title}｜${SITE_NAME}`;
};

const absoluteUrl = (value?: string) => {
  if (!value) return undefined;
  if (/^https?:\/\//.test(value)) return value;
  return `${getSiteUrl()}${value.startsWith('/') ? value : `/${value}`}`;
};

export const getCanonicalUrl = (path = '/') => {
  const cleanPath = path.split('?')[0].split('#')[0] || '/';
  return absoluteUrl(cleanPath) || getSiteUrl();
};

export const createSeoMeta = ({
  title,
  description,
  path = '/',
  image,
  imageAlt,
  type = 'website',
  noIndex = false,
}: SeoMetaInput = {}): MetaDescriptor[] => {
  const finalTitle = withSiteName(title);
  const finalDescription = description || DEFAULT_DESCRIPTION;
  const canonical = getCanonicalUrl(path);
  const ogImage = absoluteUrl(image) || absoluteUrl(DEFAULT_OG_IMAGE);
  const twitterCard = ogImage ? 'summary_large_image' : 'summary';

  const descriptors: MetaDescriptor[] = [
    { title: finalTitle },
    { name: 'description', content: finalDescription },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:title', content: finalTitle },
    { property: 'og:description', content: finalDescription },
    { property: 'og:type', content: type },
    { property: 'og:url', content: canonical },
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:title', content: finalTitle },
    { name: 'twitter:description', content: finalDescription },
    { tagName: 'link', rel: 'canonical', href: canonical },
  ];

  if (ogImage) {
    descriptors.push(
      { property: 'og:image', content: ogImage },
      { name: 'twitter:image', content: ogImage },
    );
  }

  if (imageAlt) {
    descriptors.push(
      { property: 'og:image:alt', content: imageAlt },
      { name: 'twitter:image:alt', content: imageAlt },
    );
  }

  if (noIndex) {
    descriptors.push({ name: 'robots', content: 'noindex,nofollow' });
  }

  return descriptors;
};

export const pageSeo = {
  home: {
    title: DEFAULT_TITLE,
    description:
      '艾苜中醫診所位於台南市北區，以中醫婦科、兒科、針灸、美顏針與體質調理，守護您與家人的日常健康。',
    path: '/',
  },
  about: {
    title: '關於艾苜',
    description: '認識艾苜中醫診所的品牌理念、診所故事與中醫照護哲學。',
    path: '/about',
  },
  insurance: {
    title: '健保項目',
    description: '了解艾苜中醫診所提供的健保中醫診療項目與常見適應症。',
    path: '/insurance',
  },
  treatments: {
    title: '療程項目',
    description: '瀏覽艾苜中醫診所的中醫調理、針灸、美顏與各式療程服務。',
    path: '/treatments',
  },
  featuredTreatments: {
    title: '特色療程',
    description: '探索艾苜中醫診所的美顏針、轉骨、眼針、雷射針灸與客製化調理方案。',
    path: '/featured-treatments',
  },
  cases: {
    title: '真實見證',
    description: '閱讀艾苜中醫診所真實調理案例，了解不同體質與症狀的中醫照護歷程。',
    path: '/cases',
  },
  team: {
    title: '醫師團隊',
    description: '認識艾苜中醫診所專業醫師團隊與各醫師專長。',
    path: '/team',
  },
  healthEducation: {
    title: '衛教資訊',
    description: '由艾苜中醫診所整理的中醫衛教文章，分享體質調理、針灸、婦兒與日常保健知識。',
    path: '/health-education',
  },
  notFound: {
    title: '找不到頁面',
    description: '找不到您要瀏覽的頁面，請返回艾苜中醫診所網站首頁。',
    path: '/',
  },
} satisfies Record<string, SeoMetaInput>;
