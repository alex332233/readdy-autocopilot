import { useEffect } from 'react';
import { sanityEnv } from '../sanity/env';

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

export default function NoIndexMeta() {
  useEffect(() => {
    if (!sanityEnv.siteNoIndex) return;

    upsertMetaTag('meta[name="robots"]', {name: 'robots'}, 'noindex, nofollow');
    upsertMetaTag('meta[name="googlebot"]', {name: 'googlebot'}, 'noindex, nofollow');

    return () => {
      const robots = document.head.querySelector('meta[name="robots"]');
      const googlebot = document.head.querySelector('meta[name="googlebot"]');
      robots?.remove();
      googlebot?.remove();
    };
  }, []);

  return null;
}
