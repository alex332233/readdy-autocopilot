import { createSeoMeta, pageSeo } from "../seo/meta";

export { default } from "../pages/treatments/page";

export const meta = () => createSeoMeta(pageSeo.treatments);
