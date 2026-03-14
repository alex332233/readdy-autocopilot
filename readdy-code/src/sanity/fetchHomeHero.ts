import { sanityClient } from "./client";
import { servicesData } from "../mocks/services";
import { homePageQuery } from "./queries";
import type { HomeHeroContent, HomePageContent, HomeServiceItem } from "./types";

const fallbackHero: HomeHeroContent = {
  titleLine1: "以艾醫身",
  titleLine2: "以苜養心",
  subtitle:
    "在這裡,我們用溫柔的雙手與傳承千年的智慧,\n守護妳與家人的每一刻健康時光",
  ctaText: "立即預約諮詢",
  ctaTarget: "booking",
  heroImageUrl:
    "https://static.readdy.ai/image/8d6cf5771052b01e9700d88a6623b6b6/86c1fda8d4a973044d459bcf3069ab1e.png",
  heroImageAlt: "艾草意象",
};

const fallbackServices: HomeServiceItem[] = servicesData.map((service) => ({
  number: service.number,
  icon: service.icon,
  title: service.title,
  subtitle: service.subtitle,
  description: service.description,
}));

const fallbackHomePageContent: HomePageContent = {
  hero: fallbackHero,
  servicesTitle: "主治項目",
  servicesItems: fallbackServices,
};

export async function fetchHomePageContent(): Promise<HomePageContent> {
  if (!sanityClient) return fallbackHomePageContent;

  try {
    const data = await sanityClient.fetch<HomePageContent | null>(homePageQuery);
    if (!data) return fallbackHomePageContent;
    return {
      hero: {
        ...data.hero,
        ctaTarget: data.hero?.ctaTarget === "about" ? "about" : "booking",
      },
      servicesTitle: data.servicesTitle || fallbackHomePageContent.servicesTitle,
      servicesItems:
        data.servicesItems && data.servicesItems.length > 0
          ? data.servicesItems
          : fallbackHomePageContent.servicesItems,
    };
  } catch (error) {
    console.warn("Failed to load Sanity home page content, fallback to defaults.", error);
    return fallbackHomePageContent;
  }
}
