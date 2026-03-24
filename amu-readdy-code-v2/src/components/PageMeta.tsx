import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
}

const DEFAULT_TITLE = '艾苜中醫診所';

const upsertMetaTag = (
  selector: string,
  attributes: Record<string, string>,
  content: string,
) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => tag?.setAttribute(key, value));
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

export default function PageMeta({
  title,
  description,
  image,
  imageAlt,
  type = 'article',
}: PageMetaProps) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = title || DEFAULT_TITLE;

    upsertMetaTag('meta[name="description"]', { name: 'description' }, description);
    upsertMetaTag('meta[property="og:title"]', { property: 'og:title' }, title || DEFAULT_TITLE);
    upsertMetaTag('meta[property="og:description"]', { property: 'og:description' }, description);
    upsertMetaTag('meta[property="og:type"]', { property: 'og:type' }, type);
    upsertMetaTag('meta[property="og:url"]', { property: 'og:url' }, window.location.href);
    upsertMetaTag('meta[name="twitter:card"]', { name: 'twitter:card' }, image ? 'summary_large_image' : 'summary');
    upsertMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' }, title || DEFAULT_TITLE);
    upsertMetaTag('meta[name="twitter:description"]', { name: 'twitter:description' }, description);

    if (image) {
      upsertMetaTag('meta[property="og:image"]', { property: 'og:image' }, image);
      upsertMetaTag('meta[name="twitter:image"]', { name: 'twitter:image' }, image);
      if (imageAlt) {
        upsertMetaTag('meta[property="og:image:alt"]', { property: 'og:image:alt' }, imageAlt);
        upsertMetaTag('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt' }, imageAlt);
      }
    }

    return () => {
      document.title = previousTitle || DEFAULT_TITLE;
    };
  }, [description, image, imageAlt, title, type]);

  return null;
}
