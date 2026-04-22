import { createClient } from '@sanity/client';
import { hasSanityConfig, sanityEnv } from './env';

declare global {
  interface Window {
    __SANITY_PREVIEW_STATE__?:
      | {
          preview?: boolean;
          perspective?: string;
        }
      | undefined;
  }
}

function getBrowserPreviewState() {
  if (typeof window === 'undefined') {
    return {
      preview: false,
      perspective: 'published',
    } as const;
  }

  const previewState = window.__SANITY_PREVIEW_STATE__;
  return {
    preview: previewState?.preview === true,
    perspective: previewState?.perspective === 'drafts' ? 'drafts' : 'published',
  } as const;
}

const browserPreviewState = getBrowserPreviewState();

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId: sanityEnv.projectId,
      dataset: sanityEnv.dataset,
      apiVersion: sanityEnv.apiVersion,
      useCdn: browserPreviewState.preview ? false : sanityEnv.useCdn,
      perspective: browserPreviewState.perspective,
      withCredentials: browserPreviewState.preview,
      stega: {
        enabled: sanityEnv.visualEditingEnabled,
        studioUrl: sanityEnv.studioUrl,
      },
    })
  : null;
