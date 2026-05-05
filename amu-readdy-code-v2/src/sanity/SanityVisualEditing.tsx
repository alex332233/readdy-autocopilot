import { VisualEditing } from '@sanity/visual-editing/react-router';
import { useRevalidator, useRouteLoaderData } from 'react-router';
import { sanityClient } from './client';
import { sanityEnv } from './env';
import { useLiveMode } from './reactLoader';

type RootRouteData =
  | {
      preview?: boolean;
      perspective?: string;
      siteSettings?: unknown;
    }
  | undefined;

function SanityVisualEditingEnabled({ isDraftPreview }: { isDraftPreview: boolean }) {
  const revalidator = useRevalidator();

  useLiveMode({
    client: sanityClient,
    studioUrl: sanityEnv.studioUrl,
  });

  return (
    <VisualEditing
      refresh={(payload, refreshDefault) => {
        if (payload.source === 'mutation') {
          if (!isDraftPreview && payload.document._id.startsWith('drafts.')) {
            return false;
          }
          revalidator.revalidate();
          return Promise.resolve();
        }
        return refreshDefault();
      }}
    />
  );
}

export default function SanityVisualEditing() {
  const rootData = useRouteLoaderData('root') as RootRouteData;
  const isDraftPreview = rootData?.preview === true || rootData?.perspective === 'drafts';

  if (!sanityEnv.visualEditingEnabled || !isDraftPreview || !sanityClient) {
    return null;
  }

  return <SanityVisualEditingEnabled isDraftPreview={isDraftPreview} />;
}
