import groq from "groq";

export const homePageQuery = groq`*[_type == "homePage"][0]{
  "hero": {
    "titleLine1": coalesce(hero.titleLine1, "以艾醫身"),
    "titleLine2": coalesce(hero.titleLine2, "以苜養心"),
    "subtitle": coalesce(hero.subtitle, "在這裡,我們用溫柔的雙手與傳承千年的智慧,\n守護妳與家人的每一刻健康時光"),
    "ctaText": coalesce(hero.ctaText, "立即預約諮詢"),
    "ctaTarget": coalesce(hero.ctaTarget, "booking"),
    "heroImageUrl": coalesce(hero.heroImageUrl, "https://static.readdy.ai/image/8d6cf5771052b01e9700d88a6623b6b6/86c1fda8d4a973044d459bcf3069ab1e.png"),
    "heroImageAlt": coalesce(hero.heroImageAlt, "艾草意象")
  },
  "servicesTitle": coalesce(servicesTitle, "主治項目"),
  "servicesItems": servicesItems[]{
    number,
    icon,
    title,
    subtitle,
    description
  }
}`;
