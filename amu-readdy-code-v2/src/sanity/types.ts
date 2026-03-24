export interface SanityImage {
  url: string;
  alt: string;
}

export interface SeoMetadata {
  title?: string;
  description?: string;
}

export interface AboutOriginStoryContent {
  introQuote: string;
  scrollLabel: string;
  blocks: AboutStoryBlock[];
}

export type AboutStoryBlockLayout = 'imageText' | 'textImage' | 'splitImagesText' | 'logoText';

export interface AboutStoryBlock {
  layout: AboutStoryBlockLayout;
  introText?: string;
  heading?: string;
  subheading?: string;
  paragraphs: string[];
  primaryImage?: SanityImage;
  secondaryImage?: SanityImage;
}

export interface AboutPhilosophyCard {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutCoreValue {
  number: string;
  title: string;
  description: string;
  image: SanityImage;
}

export interface AboutBranch {
  name: string;
  tag: string;
  address: string;
  phone: string;
  hours: string;
  mapSrc: string;
  mapLink: string;
  image: SanityImage;
}

export interface AboutPageContent {
  title: string;
  summary: string;
  originStory: AboutOriginStoryContent;
  philosophyTitle: string;
  philosophyCards: AboutPhilosophyCard[];
  coreValues: AboutCoreValue[];
}

export interface InsuranceOverviewCard {
  title: string;
  englishTitle: string;
  subtitle: string;
  icon: string;
  anchorId: string;
  image: SanityImage;
}

export interface InsuranceTreatmentItem {
  title: string;
  description: string;
  tags: string[];
  caseLink?: boolean;
}

export interface InsuranceTreatmentCategory {
  title: string;
  subtitle: string;
  englishTitle: string;
  icon: string;
  color: string;
  treatments: InsuranceTreatmentItem[];
}

export interface InsurancePageContent {
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  overviewCards: InsuranceOverviewCard[];
  detailedCategories: InsuranceTreatmentCategory[];
}

export interface CaseBeforeSection {
  title: string;
  items: string[];
}

export interface CaseAfterPhase {
  period: string;
  improvements: string[];
}

export interface CaseAfterSection {
  title: string;
  phases: CaseAfterPhase[];
}

export interface CaseInfoBox {
  title: string;
  content: string;
}

export interface CaseArticleContent {
  caseId: number;
  title: string;
  category: string;
  tags: string[];
  doctor: string;
  fbLink: string;
  publishDate: string;
  coverImage: SanityImage;
  description: string;
  before: CaseBeforeSection;
  after: CaseAfterSection;
  conclusion: string;
  tips?: CaseInfoBox;
  medicalInfo?: CaseInfoBox;
  references?: string[];
  seo?: SeoMetadata;
}

export interface CasesPageContent {
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  articles: CaseArticleContent[];
}

export interface DoctorSpecialtyGroup {
  slug: string;
  name: string;
  items: string[];
}

export interface DoctorScheduleSession {
  label: string;
  time: string;
  mon: boolean;
  tue: boolean;
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
  sun: boolean;
}

export interface DoctorSchedule {
  morning: DoctorScheduleSession;
  afternoon: DoctorScheduleSession;
  evening: DoctorScheduleSession;
}

export interface DoctorProfileContent {
  doctorId: number;
  name: string;
  title: string;
  bio: string;
  image: SanityImage;
  education: string[];
  experience: string[];
  specialtyGroups: DoctorSpecialtyGroup[];
  specialTreatments: string[];
  schedule?: DoctorSchedule;
  scheduleNote?: string;
}

export interface TeamPageContent {
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  doctors: DoctorProfileContent[];
}

export interface LinkItem {
  text: string;
  href: string;
}

export type SiteLinkKind = 'route' | 'scroll' | 'external';

export interface SiteLinkContent {
  label: string;
  kind: SiteLinkKind;
  target: string;
}

export interface SiteNavItemContent extends SiteLinkContent {
  children?: SiteLinkContent[];
}

export interface FooterLinkGroupContent {
  title: string;
  links: SiteLinkContent[];
}

export interface SocialLinkContent {
  platform: string;
  icon: string;
  url: string;
}

export interface SiteSettingsContent {
  title: string;
  headerLogo: SanityImage;
  headerNavItems: SiteNavItemContent[];
  headerCta: SiteLinkContent;
  footerLogo: SanityImage;
  footerTagline: string;
  footerLinkGroups: FooterLinkGroupContent[];
  clinicInfoTitle: string;
  address: string;
  phone: string;
  email: string;
  socialLinks: SocialLinkContent[];
  locationSection: {
    title: string;
    subtitle: string;
    clinicName: string;
    clinicDescription: string;
    hours: string;
    mapLink: string;
    mapEmbedUrl: string;
    image: SanityImage;
  };
  copyright: string;
  builderLink: {
    label: string;
  };
  floatingLineButton: {
    enabled: boolean;
    ariaLabel: string;
    link: SiteLinkContent;
  };
}

export interface HealthEducationCategory {
  id: string;
  name: string;
  subcategories: HealthEducationSubcategory[];
}

export interface HealthEducationSubcategory {
  id: string;
  name: string;
}

export interface HealthEducationArticleSection {
  heading: string;
  text: string;
  image?: SanityImage;
}

export interface HealthEducationArticleContent {
  articleId: number;
  title: string;
  category: string;
  subcategory: string;
  tags: string[];
  author: string;
  publishDate: string;
  updatedDate: string;
  readTime: string;
  views: number;
  summary: string;
  coverImage: SanityImage;
  content: HealthEducationArticleSection[];
  tips?: CaseInfoBox;
  references?: LinkItem[];
  seo?: SeoMetadata;
}

export interface HealthEducationPageContent {
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  categories: HealthEducationCategory[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  articles: HealthEducationArticleContent[];
}

export interface HomeHeroContent {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText: string;
  ctaTarget: string;
  image: SanityImage;
}

export interface HomeAboutFeature {
  title: string;
  description: string;
}

export interface HomeAboutContent {
  title: string;
  englishTitle: string;
  lead: string;
  description: string;
  features: HomeAboutFeature[];
  ctaText: string;
  ctaTarget: string;
  image: SanityImage;
}

export interface HomeServiceItem {
  number: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface HomeServicesContent {
  title: string;
  description: string;
  items: HomeServiceItem[];
}

export interface HomeWhyChooseContent {
  titleLine1: string;
  titleLine2: string;
  paragraphs: string[];
  ctaText: string;
  ctaTarget: string;
  image: SanityImage;
}

export interface HomeDoctorSummary {
  name: string;
  title: string;
}

export interface HomeTeamContent {
  title: string;
  subtitle: string;
  description: string;
  doctors: HomeDoctorSummary[];
  image: SanityImage;
}

export interface HomeProcessStep {
  step: string;
  title: string;
  description: string;
  image: SanityImage;
}

export interface HomeProcessContent {
  title: string;
  subtitle: string;
  steps: HomeProcessStep[];
}

export interface BookingCard {
  title: string;
  value: string;
  href: string;
  buttonText: string;
  icon: string;
  buttonTheme?: 'brand' | 'line';
}

export interface HomeBookingContent {
  title: string;
  subtitle: string;
  cards: BookingCard[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HomeFaqContent {
  titleLine1: string;
  titleLine2: string;
  description: string;
  items: FaqItem[];
}

export interface GalleryImage {
  url: string;
  alt?: string;
  label: string;
  labelZh: string;
}

export interface HomeGalleryContent {
  images: GalleryImage[];
}

export interface TestimonialItem {
  name: string;
  service: string;
  content: string;
  time: string;
}

export interface HomeTestimonialsContent {
  title: string;
  description: string;
  items: TestimonialItem[];
  ctaText: string;
}

export interface HomePageContent {
  hero: HomeHeroContent;
  about: HomeAboutContent;
  services: HomeServicesContent;
  whyChoose: HomeWhyChooseContent;
  team: HomeTeamContent;
  process: HomeProcessContent;
  booking: HomeBookingContent;
  faq: HomeFaqContent;
  gallery: HomeGalleryContent;
  testimonials: HomeTestimonialsContent;
}

export interface FeaturedTreatmentCardContent {
  title: string;
  englishTitle: string;
  icon: string;
  color: string;
  treatmentTitle: string;
  description: string;
  tags: string[];
  detailSlug?: string;
}

export interface FeaturedTreatmentPageContent {
  title: string;
  heroTitle: string;
  heroDescription: string;
  cards: FeaturedTreatmentCardContent[];
}

export type FeaturedTreatmentSectionLayout = 'textOnly' | 'textImage' | 'imageText' | 'cardsCases' | 'processCards';

export interface FeaturedTreatmentSectionItem {
  subtitle: string;
  text: string;
}

export interface FeaturedTreatmentCase {
  label: string;
  text: string;
}

export interface FeaturedTreatmentSection {
  title: string;
  icon?: string;
  layout: FeaturedTreatmentSectionLayout;
  eyebrow?: string;
  content?: string;
  additionalContent?: string;
  image?: SanityImage;
  items?: FeaturedTreatmentSectionItem[];
  cases?: FeaturedTreatmentCase[];
}

export interface FeaturedTreatmentCta {
  title: string;
  description: string;
  buttonText: string;
}

export interface FeaturedTreatmentDetailContent {
  title: string;
  slug: string;
  subtitle: string;
  themeColor: string;
  sections: FeaturedTreatmentSection[];
  disclaimer: string;
  cta: FeaturedTreatmentCta;
}
