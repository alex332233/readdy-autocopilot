import { createSeoMeta } from "../seo/meta";
import type { HealthEducationArticleContent } from "../sanity/types";
import type { LoaderFunctionArgs } from "react-router";
import { fetchHealthEducationArticleContent } from "../sanity/fetchHealthEducationContent";
import { getPreviewState } from "../sanity/previewState.server";
import { createSanityServerClient } from "../sanity/serverClient";

export { default } from "../pages/health-education/detail/page";

export async function loader({ request, params }: LoaderFunctionArgs) {
  const preview = await getPreviewState(request);
  return fetchHealthEducationArticleContent(
    { params },
    createSanityServerClient(preview.perspective),
  );
}

export const meta = ({ data, location }: { data?: { article?: HealthEducationArticleContent } | null; location: Location }) => {
  const article = data?.article;
  return createSeoMeta({
    title: article?.seo?.title || article?.title || '衛教資訊',
    description: article?.seo?.description || article?.summary || '閱讀艾苜中醫診所整理的中醫衛教文章。',
    path: article?.slug ? `/health-education/${article.slug}` : location.pathname,
    image: article?.coverImage?.url,
    imageAlt: article?.coverImage?.alt || article?.title,
    type: 'article',
  });
};
