import { createSeoMeta, pageSeo } from "../seo/meta";
import InsurancePage from "../pages/insurance/page";
import { normalizeInsurancePageContent } from "../sanity/fetchInsurancePageContent";
import { getPreviewState } from "../sanity/previewState.server";
import { insurancePageQuery } from "../sanity/queries";
import { createSanityServerClient } from "../sanity/serverClient";

export async function loader({ request }: { request: Request }) {
  const preview = await getPreviewState(request);
  const client = createSanityServerClient(preview.perspective);
  const data = await client.fetch(insurancePageQuery);

  return normalizeInsurancePageContent(data);
}

export default InsurancePage;

export const meta = () => createSeoMeta(pageSeo.insurance);
