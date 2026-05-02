import { createSeoMeta, pageSeo } from "../seo/meta";
import { fetchFeaturedTreatmentsPageContent } from "../sanity/fetchFeaturedTreatmentsContent";
import { getPreviewState } from "../sanity/previewState.server";
import { createSanityServerClient } from "../sanity/serverClient";

export { default } from "../pages/featured-treatments/page";

export async function loader({ request }: { request: Request }) {
  const preview = await getPreviewState(request);
  return fetchFeaturedTreatmentsPageContent(createSanityServerClient(preview.perspective));
}

export const meta = () => createSeoMeta(pageSeo.featuredTreatments);
