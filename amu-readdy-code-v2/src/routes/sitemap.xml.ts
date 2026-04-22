import {hasSanityConfig} from '../sanity/env';
import {createSanityServerClient} from '../sanity/serverClient';
import {getSiteUrl} from '../seo/meta';

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: 'weekly' | 'monthly';
  priority?: string;
}

interface SlugDoc {
  slug?: string;
  lastmod?: string;
}

const staticEntries: SitemapEntry[] = [
  {path: '/', changefreq: 'weekly', priority: '1.0'},
  {path: '/about', changefreq: 'monthly', priority: '0.8'},
  {path: '/insurance', changefreq: 'monthly', priority: '0.8'},
  {path: '/treatments', changefreq: 'monthly', priority: '0.8'},
  {path: '/featured-treatments', changefreq: 'monthly', priority: '0.8'},
  {path: '/team', changefreq: 'monthly', priority: '0.8'},
  {path: '/cases', changefreq: 'weekly', priority: '0.8'},
  {path: '/health-education', changefreq: 'weekly', priority: '0.8'},
];

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const normalizeDate = (value?: string) => {
  if (!value) return undefined;
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString().slice(0, 10);
};

const renderSitemap = (entries: SitemapEntry[]) => {
  const siteUrl = getSiteUrl();
  const urls = entries
    .map((entry) => {
      const loc = `${siteUrl}${entry.path === '/' ? '' : entry.path}`;
      return [
        '  <url>',
        `    <loc>${escapeXml(loc || siteUrl)}</loc>`,
        entry.lastmod ? `    <lastmod>${escapeXml(entry.lastmod)}</lastmod>` : '',
        entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : '',
        entry.priority ? `    <priority>${entry.priority}</priority>` : '',
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};

async function fetchDynamicEntries(): Promise<SitemapEntry[]> {
  if (!hasSanityConfig) return [];

  const client = createSanityServerClient('published');
  const data = await client.fetch<{
    healthEducationArticles?: SlugDoc[];
    caseArticles?: SlugDoc[];
    featuredTreatments?: SlugDoc[];
  }>(`
    {
      "healthEducationArticles": *[_type == "healthEducationArticle" && defined(slug.current)] | order(articleId asc){
        "slug": slug.current,
        "lastmod": coalesce(updatedDate, publishDate)
      },
      "caseArticles": *[_type == "caseArticle" && defined(slug.current)] | order(caseId asc){
        "slug": slug.current,
        "lastmod": publishDate
      },
      "featuredTreatments": *[_type == "featuredTreatmentDetail" && defined(slug.current)] | order(slug.current asc){
        "slug": slug.current
      }
    }
  `);

  return [
    ...(data.healthEducationArticles || []).map((doc) => ({
      path: `/health-education/${doc.slug}`,
      lastmod: normalizeDate(doc.lastmod),
      changefreq: 'monthly' as const,
      priority: '0.7',
    })),
    ...(data.caseArticles || []).map((doc) => ({
      path: `/cases/${doc.slug}`,
      lastmod: normalizeDate(doc.lastmod),
      changefreq: 'monthly' as const,
      priority: '0.7',
    })),
    ...(data.featuredTreatments || []).map((doc) => ({
      path: `/featured-treatments/${doc.slug}`,
      changefreq: 'monthly' as const,
      priority: '0.7',
    })),
  ].filter((entry) => !entry.path.endsWith('/undefined'));
}

export async function loader() {
  let dynamicEntries: SitemapEntry[] = [];

  try {
    dynamicEntries = await fetchDynamicEntries();
  } catch (error) {
    console.error('Failed to generate dynamic sitemap entries', error);
  }

  const body = renderSitemap([...staticEntries, ...dynamicEntries]);

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  });
}
