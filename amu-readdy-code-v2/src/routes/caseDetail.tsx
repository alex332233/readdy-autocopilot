import { createSeoMeta } from "../seo/meta";
import type { CaseArticleContent } from "../sanity/types";
import type { LoaderFunctionArgs } from "react-router";
import { fetchCaseArticleContent } from "../sanity/fetchCasesContent";
import { getPreviewState } from "../sanity/previewState.server";
import { createSanityServerClient } from "../sanity/serverClient";

export { default } from "../pages/cases/detail/page";

export async function loader({ request, params }: LoaderFunctionArgs) {
  const preview = await getPreviewState(request);
  return fetchCaseArticleContent(
    { params },
    createSanityServerClient(preview.perspective),
  );
}

export const meta = ({ data, location }: { data?: { article?: CaseArticleContent } | null; location: Location }) => {
  const article = data?.article;
  return createSeoMeta({
    title: article?.seo?.title || article?.title || '真實見證',
    description: article?.seo?.description || article?.description || '閱讀艾苜中醫診所真實調理案例。',
    path: article?.slug ? `/cases/${article.slug}` : location.pathname,
    image: article?.coverImage?.url,
    imageAlt: article?.coverImage?.alt || article?.title,
    type: 'article',
  });
};
