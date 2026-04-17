import { loadQuery, setServerClient } from "@sanity/react-loader";
import { useLoaderData } from "react-router-dom";
import HomePage from "../pages/home/page";
import { HomePageContentProvider } from "../pages/home/HomePageContentContext";
import { normalizeHomePageContent } from "../sanity/fetchHomePageContent";
import { getPreviewState } from "../sanity/previewState.server";
import { homePageQuery } from "../sanity/queries";
import { useQuery } from "../sanity/reactLoader";
import { createSanityServerClient } from "../sanity/serverClient";

export async function loader({ request }: { request: Request }) {
  const preview = await getPreviewState(request);
  setServerClient(createSanityServerClient(preview.perspective));
  const initial = await loadQuery(homePageQuery, {}, { perspective: preview.perspective });

  return {
    preview: preview.enabled,
    perspective: preview.perspective,
    initial,
  };
}

export default function HomeRoute() {
  const { initial } = useLoaderData() as {
    initial: Awaited<ReturnType<typeof loadQuery>>;
  };
  const { data } = useQuery(homePageQuery, {}, { initial });
  const content = normalizeHomePageContent(data);

  return (
    <HomePageContentProvider value={content}>
      <HomePage />
    </HomePageContentProvider>
  );
}
