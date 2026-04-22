import { createSeoMeta, pageSeo } from "../seo/meta";

export { default } from "../pages/featured-treatments/page";
export { fetchFeaturedTreatmentsPageContent as clientLoader } from "../sanity/fetchFeaturedTreatmentsContent";

export const meta = () => createSeoMeta(pageSeo.featuredTreatments);
