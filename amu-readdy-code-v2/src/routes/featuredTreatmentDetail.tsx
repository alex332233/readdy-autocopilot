export { default } from "../pages/featured-treatments/DetailPage";
import {
  fetchFeaturedTreatmentDetailContent,
  fetchFeaturedTreatmentsPageContent,
} from "../sanity/fetchFeaturedTreatmentsContent";
import type { FeaturedTreatmentDetailContent } from "../sanity/types";
import { createSeoMeta } from "../seo/meta";

export async function clientLoader({ params }: { params: { slug?: string } }) {
  const [detail, page] = await Promise.all([
    fetchFeaturedTreatmentDetailContent({ params }),
    fetchFeaturedTreatmentsPageContent(),
  ]);

  return { detail, page };
}

export const meta = ({ data, location }: { data?: { detail?: FeaturedTreatmentDetailContent } | null; location: Location }) => {
  const detail = data?.detail;
  return createSeoMeta({
    title: detail?.title || '特色療程',
    description: detail?.subtitle || '探索艾苜中醫診所特色療程與客製化調理方案。',
    path: detail?.slug ? `/featured-treatments/${detail.slug}` : location.pathname,
    image: detail?.primaryImage?.url || detail?.secondaryImage?.url,
    imageAlt: detail?.primaryImage?.alt || detail?.secondaryImage?.alt || detail?.title,
    type: 'article',
  });
};
