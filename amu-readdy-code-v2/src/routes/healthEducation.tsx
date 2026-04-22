import { createSeoMeta, pageSeo } from "../seo/meta";

export { default } from "../pages/health-education/page";
export { fetchHealthEducationPageContent as clientLoader } from "../sanity/fetchHealthEducationContent";

export const meta = () => createSeoMeta(pageSeo.healthEducation);
