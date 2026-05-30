const getEnv = (key: string) => import.meta.env[key] as string | undefined;

export const trackingEnv = {
  gaMeasurementId: getEnv('VITE_GA_MEASUREMENT_ID') || '',
  metaPixelId: getEnv('VITE_META_PIXEL_ID') || '',
};

export const hasGaTracking = Boolean(trackingEnv.gaMeasurementId);
export const hasMetaPixelTracking = Boolean(trackingEnv.metaPixelId);
export const hasTracking = hasGaTracking || hasMetaPixelTracking;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackPageView(path: string) {
  if (typeof window === 'undefined') return;

  const url = `${window.location.origin}${path}`;
  const title = document.title;

  window.gtag?.('event', 'page_view', {
    page_location: url,
    page_path: path,
    page_title: title,
  });

  window.fbq?.('track', 'PageView');
}
