import { VisualEditing } from "@sanity/visual-editing/react-router";
import { sanityEnv } from "./env";

export default function SanityVisualEditing() {
  if (!sanityEnv.enableVisualEditing) return null;
  return <VisualEditing />;
}
