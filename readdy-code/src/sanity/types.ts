export interface HomeHeroContent {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText: string;
  ctaTarget: "booking" | "about";
  heroImageUrl: string;
  heroImageAlt: string;
}

export interface HomeServiceItem {
  number: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface HomePageContent {
  hero: HomeHeroContent;
  servicesTitle: string;
  servicesItems: HomeServiceItem[];
}
