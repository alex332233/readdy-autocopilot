import {getSiteUrl, isSiteNoIndex} from '../seo/meta';

export function loader() {
  const siteUrl = getSiteUrl();
  const body = isSiteNoIndex()
    ? `User-agent: *
Disallow: /
`
    : `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  });
}
