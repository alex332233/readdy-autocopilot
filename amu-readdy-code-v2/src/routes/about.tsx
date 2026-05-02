import { createSeoMeta, pageSeo } from "../seo/meta";
import { fetchAboutPageContent } from "../sanity/fetchAboutPageContent";
import { getPreviewState } from "../sanity/previewState.server";
import { createSanityServerClient } from "../sanity/serverClient";

export { default } from "../pages/about-v2/page";

export async function loader({ request }: { request: Request }) {
  const preview = await getPreviewState(request);
  return fetchAboutPageContent(createSanityServerClient(preview.perspective));
}

export const meta = () => createSeoMeta(pageSeo.about);
