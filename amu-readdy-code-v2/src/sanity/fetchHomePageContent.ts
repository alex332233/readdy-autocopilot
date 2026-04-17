import { sanityClient } from './client';
import { defaultHomePageContent } from './defaults/homePage';
import { homePageQuery } from './queries';
import type {
  BookingCard,
  FaqItem,
  GalleryImage,
  HomeAboutContent,
  HomeAboutFeature,
  HomeBookingContent,
  HomeFaqContent,
  HomeGalleryContent,
  HomeHeroContent,
  HomePageContent,
  HomeProcessContent,
  HomeProcessStep,
  HomeServiceItem,
  HomeServicesContent,
  HomeTeamContent,
  HomeTestimonialsContent,
  HomeWhyChooseContent,
  HomeDoctorSummary,
  TestimonialItem,
} from './types';

const mergeImage = (incoming: unknown, fallback: { url: string; alt: string }) => {
  const image = incoming as Partial<{ url: string; alt: string }> | null;
  return {
    url: image?.url || fallback.url,
    alt: image?.alt || fallback.alt,
  };
};

const mergeArray = <T>(incoming: unknown, fallback: T[], mapper: (item: unknown, fallbackItem?: T) => T) => {
  if (!Array.isArray(incoming) || incoming.length === 0) return fallback;
  return incoming.map((item, index) => mapper(item, fallback[index]));
};

const mergeHero = (incoming: unknown): HomeHeroContent => {
  const hero = incoming as Partial<HomeHeroContent> | null;
  const fallback = defaultHomePageContent.hero;
  return {
    titleLine1: hero?.titleLine1 || fallback.titleLine1,
    titleLine2: hero?.titleLine2 || fallback.titleLine2,
    subtitle: hero?.subtitle || fallback.subtitle,
    ctaText: hero?.ctaText || fallback.ctaText,
    ctaTarget: hero?.ctaTarget || fallback.ctaTarget,
    image: mergeImage(hero?.image, fallback.image),
  };
};

const mergeAboutFeature = (incoming: unknown, fallback?: HomeAboutFeature): HomeAboutFeature => {
  const feature = incoming as Partial<HomeAboutFeature> | null;
  return {
    title: feature?.title || fallback?.title || '',
    description: feature?.description || fallback?.description || '',
  };
};

const mergeAbout = (incoming: unknown): HomeAboutContent => {
  const about = incoming as Partial<HomeAboutContent> | null;
  const fallback = defaultHomePageContent.about;
  return {
    title: about?.title || fallback.title,
    englishTitle: about?.englishTitle || fallback.englishTitle,
    lead: about?.lead || fallback.lead,
    description: about?.description || fallback.description,
    features: mergeArray(about?.features, fallback.features, mergeAboutFeature),
    ctaText: about?.ctaText || fallback.ctaText,
    ctaTarget: about?.ctaTarget || fallback.ctaTarget,
    image: mergeImage(about?.image, fallback.image),
  };
};

const mergeServiceItem = (incoming: unknown, fallback?: HomeServiceItem): HomeServiceItem => {
  const item = incoming as Partial<HomeServiceItem> | null;
  return {
    number: item?.number || fallback?.number || '',
    icon: item?.icon || fallback?.icon || '',
    title: item?.title || fallback?.title || '',
    subtitle: item?.subtitle || fallback?.subtitle || '',
    description: item?.description || fallback?.description || '',
  };
};

const mergeServices = (incoming: unknown): HomeServicesContent => {
  const services = incoming as Partial<HomeServicesContent> | null;
  const fallback = defaultHomePageContent.services;
  return {
    title: services?.title || fallback.title,
    description: services?.description || fallback.description,
    items: mergeArray(services?.items, fallback.items, mergeServiceItem),
  };
};

const mergeWhyChoose = (incoming: unknown): HomeWhyChooseContent => {
  const whyChoose = incoming as Partial<HomeWhyChooseContent> | null;
  const fallback = defaultHomePageContent.whyChoose;
  return {
    titleLine1: whyChoose?.titleLine1 || fallback.titleLine1,
    titleLine2: whyChoose?.titleLine2 || fallback.titleLine2,
    paragraphs:
      Array.isArray(whyChoose?.paragraphs) && whyChoose.paragraphs.length > 0
        ? whyChoose.paragraphs
        : fallback.paragraphs,
    ctaText: whyChoose?.ctaText || fallback.ctaText,
    ctaTarget: whyChoose?.ctaTarget || fallback.ctaTarget,
    image: mergeImage(whyChoose?.image, fallback.image),
  };
};

const mergeDoctor = (incoming: unknown, fallback?: HomeDoctorSummary): HomeDoctorSummary => {
  const doctor = incoming as Partial<HomeDoctorSummary> | null;
  return {
    name: doctor?.name || fallback?.name || '',
    title: doctor?.title || fallback?.title || '',
  };
};

const mergeTeam = (incoming: unknown): HomeTeamContent => {
  const team = incoming as Partial<HomeTeamContent> | null;
  const fallback = defaultHomePageContent.team;
  return {
    title: team?.title || fallback.title,
    subtitle: team?.subtitle || fallback.subtitle,
    description: team?.description || fallback.description,
    doctors: mergeArray(team?.doctors, fallback.doctors, mergeDoctor),
    image: mergeImage(team?.image, fallback.image),
  };
};

const mergeProcessStep = (incoming: unknown, fallback?: HomeProcessStep): HomeProcessStep => {
  const step = incoming as Partial<HomeProcessStep> | null;
  return {
    step: step?.step || fallback?.step || '',
    title: step?.title || fallback?.title || '',
    description: step?.description || fallback?.description || '',
    image: mergeImage(step?.image, fallback?.image),
  };
};

const mergeProcess = (incoming: unknown): HomeProcessContent => {
  const process = incoming as Partial<HomeProcessContent> | null;
  const fallback = defaultHomePageContent.process;
  return {
    title: process?.title || fallback.title,
    subtitle: process?.subtitle || fallback.subtitle,
    steps: mergeArray(process?.steps, fallback.steps, mergeProcessStep),
  };
};

const mergeBookingCard = (incoming: unknown, fallback?: BookingCard): BookingCard => {
  const card = incoming as Partial<BookingCard> | null;
  return {
    title: card?.title || fallback?.title || '',
    value: card?.value || fallback?.value || '',
    href: card?.href || fallback?.href || '',
    buttonText: card?.buttonText || fallback?.buttonText || '',
    icon: card?.icon || fallback?.icon || '',
    buttonTheme: card?.buttonTheme || fallback?.buttonTheme || 'brand',
  };
};

const mergeBooking = (incoming: unknown): HomeBookingContent => {
  const booking = incoming as Partial<HomeBookingContent> | null;
  const fallback = defaultHomePageContent.booking;
  return {
    title: booking?.title || fallback.title,
    subtitle: booking?.subtitle || fallback.subtitle,
    cards: mergeArray(booking?.cards, fallback.cards, mergeBookingCard),
  };
};

const mergeFaqItem = (incoming: unknown, fallback?: FaqItem): FaqItem => {
  const item = incoming as Partial<FaqItem> | null;
  return {
    question: item?.question || fallback?.question || '',
    answer: item?.answer || fallback?.answer || '',
  };
};

const mergeFaq = (incoming: unknown): HomeFaqContent => {
  const faq = incoming as Partial<HomeFaqContent> | null;
  const fallback = defaultHomePageContent.faq;
  return {
    titleLine1: faq?.titleLine1 || fallback.titleLine1,
    titleLine2: faq?.titleLine2 || fallback.titleLine2,
    description: faq?.description || fallback.description,
    items: mergeArray(faq?.items, fallback.items, mergeFaqItem),
  };
};

const mergeGalleryImage = (incoming: unknown, fallback?: GalleryImage): GalleryImage => {
  const item = incoming as Partial<GalleryImage> | null;
  return {
    url: item?.url || fallback?.url || '',
    alt: item?.alt || fallback?.alt || '',
    label: item?.label || fallback?.label || '',
    labelZh: item?.labelZh || fallback?.labelZh || '',
  };
};

const mergeGallery = (incoming: unknown): HomeGalleryContent => {
  const gallery = incoming as Partial<HomeGalleryContent> | null;
  const fallback = defaultHomePageContent.gallery;
  return {
    images: mergeArray(gallery?.images, fallback.images, mergeGalleryImage),
  };
};

const mergeTestimonial = (incoming: unknown, fallback?: TestimonialItem): TestimonialItem => {
  const item = incoming as Partial<TestimonialItem> | null;
  return {
    name: item?.name || fallback?.name || '',
    service: item?.service || fallback?.service || '',
    content: item?.content || fallback?.content || '',
    time: item?.time || fallback?.time || '',
  };
};

const mergeTestimonials = (incoming: unknown): HomeTestimonialsContent => {
  const testimonials = incoming as Partial<HomeTestimonialsContent> | null;
  const fallback = defaultHomePageContent.testimonials;
  return {
    title: testimonials?.title || fallback.title,
    description: testimonials?.description || fallback.description,
    items: mergeArray(testimonials?.items, fallback.items, mergeTestimonial),
    ctaText: testimonials?.ctaText || fallback.ctaText,
  };
};

export function normalizeHomePageContent(data: Partial<HomePageContent> | null | undefined): HomePageContent {
  if (!data) return defaultHomePageContent;
  return {
    hero: mergeHero(data.hero),
    about: mergeAbout(data.about),
    services: mergeServices(data.services),
    whyChoose: mergeWhyChoose(data.whyChoose),
    team: mergeTeam(data.team),
    process: mergeProcess(data.process),
    booking: mergeBooking(data.booking),
    faq: mergeFaq(data.faq),
    gallery: mergeGallery(data.gallery),
    testimonials: mergeTestimonials(data.testimonials),
  };
}

export async function fetchHomePageContent(): Promise<HomePageContent> {
  if (!sanityClient) return defaultHomePageContent;

  const data = (await sanityClient.fetch(homePageQuery)) as Partial<HomePageContent> | null;
  return normalizeHomePageContent(data);
}
