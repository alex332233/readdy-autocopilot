import { createSeoMeta, pageSeo } from "../seo/meta";

export { default } from "../pages/cases/page";
export { fetchCasesPageContent as clientLoader } from "../sanity/fetchCasesContent";

export const meta = () => createSeoMeta(pageSeo.cases);
