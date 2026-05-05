import { createSeoMeta, pageSeo } from "../seo/meta";
import { fetchTeamPageContent } from "../sanity/fetchTeamContent";
import { getPreviewState } from "../sanity/previewState.server";
import { createSanityServerClient } from "../sanity/serverClient";

export { default } from "../pages/team/page";

export async function loader({ request }: { request: Request }) {
  const preview = await getPreviewState(request);
  return fetchTeamPageContent(createSanityServerClient(preview.perspective));
}

export const meta = () => createSeoMeta(pageSeo.team);
