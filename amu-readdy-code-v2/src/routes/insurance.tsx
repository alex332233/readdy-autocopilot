import { createSeoMeta, pageSeo } from "../seo/meta";

export { default } from "../pages/insurance/page";
export { fetchInsurancePageContent as clientLoader } from "../sanity/fetchInsurancePageContent";

export const meta = () => createSeoMeta(pageSeo.insurance);
