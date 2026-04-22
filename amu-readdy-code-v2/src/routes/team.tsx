import { createSeoMeta, pageSeo } from "../seo/meta";

export { default } from "../pages/team/page";
export { fetchTeamPageContent as clientLoader } from "../sanity/fetchTeamContent";

export const meta = () => createSeoMeta(pageSeo.team);
