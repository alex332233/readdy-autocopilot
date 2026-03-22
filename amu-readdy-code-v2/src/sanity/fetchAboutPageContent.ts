import {sanityClient} from './client';
import {defaultAboutPageContent} from './defaults/aboutPage';
import {aboutPageQuery} from './queries';
import type {
  AboutBranch,
  AboutCoreValue,
  AboutOriginStoryContent,
  AboutPageContent,
  AboutPhilosophyCard,
  AboutStoryBlock,
  SanityImage,
} from './types';

const mergeImage = (incoming: unknown, fallback?: SanityImage): SanityImage => {
  const image = incoming as Partial<SanityImage> | null;
  return {
    url: image?.url || fallback?.url || '',
    alt: image?.alt || fallback?.alt || '',
  };
};

const mergeStoryBlock = (incoming: unknown, fallback?: AboutStoryBlock): AboutStoryBlock => {
  const block = incoming as Partial<AboutStoryBlock> | null;
  return {
    layout: block?.layout || fallback?.layout || 'imageText',
    introText: block?.introText || fallback?.introText,
    heading: block?.heading || fallback?.heading,
    subheading: block?.subheading || fallback?.subheading,
    paragraphs:
      Array.isArray(block?.paragraphs) && block.paragraphs.length > 0
        ? block.paragraphs.map((paragraph) => String(paragraph))
        : fallback?.paragraphs || [],
    primaryImage: block?.primaryImage || fallback?.primaryImage ? mergeImage(block?.primaryImage, fallback?.primaryImage) : undefined,
    secondaryImage: block?.secondaryImage || fallback?.secondaryImage ? mergeImage(block?.secondaryImage, fallback?.secondaryImage) : undefined,
  };
};

const mergeOriginStory = (incoming: unknown): AboutOriginStoryContent => {
  const origin = incoming as Partial<AboutOriginStoryContent> | null;
  const fallback = defaultAboutPageContent.originStory;
  return {
    introQuote: origin?.introQuote || fallback.introQuote,
    scrollLabel: origin?.scrollLabel || fallback.scrollLabel,
    blocks:
      Array.isArray(origin?.blocks) && origin.blocks.length > 0
        ? origin.blocks.map((block, index) => mergeStoryBlock(block, fallback.blocks[index]))
        : fallback.blocks,
  };
};

const mergePhilosophyCard = (incoming: unknown, fallback?: AboutPhilosophyCard): AboutPhilosophyCard => {
  const card = incoming as Partial<AboutPhilosophyCard> | null;
  return {
    number: card?.number || fallback?.number || '',
    icon: card?.icon || fallback?.icon || '',
    title: card?.title || fallback?.title || '',
    description: card?.description || fallback?.description || '',
  };
};

const mergeCoreValue = (incoming: unknown, fallback?: AboutCoreValue): AboutCoreValue => {
  const item = incoming as Partial<AboutCoreValue> | null;
  return {
    number: item?.number || fallback?.number || '',
    title: item?.title || fallback?.title || '',
    description: item?.description || fallback?.description || '',
    image: mergeImage(item?.image, fallback?.image),
  };
};

const mergeBranch = (incoming: unknown, fallback?: AboutBranch): AboutBranch => {
  const branch = incoming as Partial<AboutBranch> | null;
  return {
    name: branch?.name || fallback?.name || '',
    tag: branch?.tag || fallback?.tag || '',
    address: branch?.address || fallback?.address || '',
    phone: branch?.phone || fallback?.phone || '',
    hours: branch?.hours || fallback?.hours || '',
    mapSrc: branch?.mapSrc || fallback?.mapSrc || '',
    mapLink: branch?.mapLink || fallback?.mapLink || '',
    image: mergeImage(branch?.image, fallback?.image),
  };
};

export async function fetchAboutPageContent() {
  if (!sanityClient) return defaultAboutPageContent;

  const data = (await sanityClient.fetch(aboutPageQuery)) as Partial<AboutPageContent> | null;
  if (!data) return defaultAboutPageContent;

  return {
    title: data.title || defaultAboutPageContent.title,
    summary: data.summary || defaultAboutPageContent.summary,
    originStory: mergeOriginStory(data.originStory),
    philosophyTitle: data.philosophyTitle || defaultAboutPageContent.philosophyTitle,
    philosophyCards:
      Array.isArray(data.philosophyCards) && data.philosophyCards.length > 0
        ? data.philosophyCards.map((card, index) => mergePhilosophyCard(card, defaultAboutPageContent.philosophyCards[index]))
        : defaultAboutPageContent.philosophyCards,
    coreValues:
      Array.isArray(data.coreValues) && data.coreValues.length > 0
        ? data.coreValues.map((item, index) => mergeCoreValue(item, defaultAboutPageContent.coreValues[index]))
        : defaultAboutPageContent.coreValues,
    branchesTitle: data.branchesTitle || defaultAboutPageContent.branchesTitle,
    branchesSubtitle: data.branchesSubtitle || defaultAboutPageContent.branchesSubtitle,
    branches:
      Array.isArray(data.branches) && data.branches.length > 0
        ? data.branches.map((branch, index) => mergeBranch(branch, defaultAboutPageContent.branches[index]))
        : defaultAboutPageContent.branches,
  };
}
