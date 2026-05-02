import { createSeoMeta, pageSeo } from "../seo/meta";
import { fetchHealthEducationPageContent } from "../sanity/fetchHealthEducationContent";
import { getPreviewState } from "../sanity/previewState.server";
import { createSanityServerClient } from "../sanity/serverClient";

export { default } from "../pages/health-education/page";

export async function loader({ request }: { request: Request }) {
  const preview = await getPreviewState(request);
  return fetchHealthEducationPageContent(createSanityServerClient(preview.perspective));
}

export const meta = () => createSeoMeta(pageSeo.healthEducation);
