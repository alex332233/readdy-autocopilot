import { VisualEditing } from '@sanity/visual-editing/react-router';
import { sanityEnv } from './env';

export default function SanityVisualEditing() {
  if (!sanityEnv.visualEditingEnabled) return null;
  return (
    <VisualEditing
      refresh={(payload, refreshDefault) => {
        if (payload.source === 'mutation') {
          if (payload.document._id.startsWith('drafts.')) {
            return false;
          }
          window.location.reload();
          return Promise.resolve();
        }
        return refreshDefault();
      }}
    />
  );
}
