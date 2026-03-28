const getEnv = (key: string) => import.meta.env[key] as string | undefined;

export const sanityEnv = {
  projectId: getEnv('VITE_SANITY_PROJECT_ID') || '',
  dataset: getEnv('VITE_SANITY_DATASET') || 'production',
  apiVersion: getEnv('VITE_SANITY_API_VERSION') || '2025-01-01',
  useCdn: getEnv('VITE_SANITY_USE_CDN') !== 'false',
  studioUrl: getEnv('VITE_SANITY_STUDIO_URL') || 'http://localhost:3333',
  visualEditingEnabled: getEnv('VITE_ENABLE_VISUAL_EDITING') === 'true',
  siteNoIndex: getEnv('VITE_SITE_NOINDEX') === 'true',
};

export const hasSanityConfig = Boolean(sanityEnv.projectId && sanityEnv.dataset);
