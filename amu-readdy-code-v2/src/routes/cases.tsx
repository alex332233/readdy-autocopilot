import { createSeoMeta, pageSeo } from "../seo/meta";
import { fetchCasesPageContent } from "../sanity/fetchCasesContent";
import { getPreviewState } from "../sanity/previewState.server";
import { createSanityServerClient } from "../sanity/serverClient";

export { default } from "../pages/cases/page";

export async function loader({ request }: { request: Request }) {
  const preview = await getPreviewState(request);
  return fetchCasesPageContent(createSanityServerClient(preview.perspective));
}

export const meta = () => createSeoMeta(pageSeo.cases);
