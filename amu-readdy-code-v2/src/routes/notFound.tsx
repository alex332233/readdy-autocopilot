import { createSeoMeta, pageSeo } from "../seo/meta";

export { default } from "../pages/NotFound";

export const meta = () => createSeoMeta({...pageSeo.notFound, noIndex: true});
