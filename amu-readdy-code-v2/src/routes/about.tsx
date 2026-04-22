import { createSeoMeta, pageSeo } from "../seo/meta";

export { default } from "../pages/about-v2/page";
export { fetchAboutPageContent as clientLoader } from "../sanity/fetchAboutPageContent";

export const meta = () => createSeoMeta(pageSeo.about);
