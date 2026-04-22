import {sanityClient} from './client';
import {defaultSiteSettingsContent} from './defaults/siteSettings';
import {siteSettingsQuery} from './queries';
import type {
  FooterLinkGroupContent,
  SanityImage,
  SiteLinkContent,
  SiteNavItemContent,
  SiteSettingsContent,
  SocialLinkContent,
} from './types';

const mergeImage = (incoming: unknown, fallback: SanityImage): SanityImage => {
  const image = incoming as Partial<SanityImage> | null;
  return {
    url: image?.url || fallback.url,
    alt: image?.alt || fallback.alt,
  };
};

const mergeSiteLink = (incoming: unknown, fallback?: SiteLinkContent): SiteLinkContent => {
  const link = incoming as Partial<SiteLinkContent> | null;
  return {
    label: link?.label || fallback?.label || '',
    kind: link?.kind || fallback?.kind || 'route',
    target: link?.target || fallback?.target || '',
  };
};

const mergeNavItem = (incoming: unknown, fallback?: SiteNavItemContent): SiteNavItemContent => {
  const item = incoming as Partial<SiteNavItemContent> | null;
  const incomingChildren = Array.isArray(item?.children) ? item.children : [];
  const fallbackChildren = fallback?.children || [];
  const children = incomingChildren.length > 0 || fallbackChildren.length > 0
    ? Array.from({length: Math.max(incomingChildren.length, fallbackChildren.length)}, (_, index) =>
        mergeSiteLink(incomingChildren[index], fallbackChildren[index]),
      )
    : undefined;

  return {
    label: item?.label || fallback?.label || '',
    kind: item?.kind || fallback?.kind || 'route',
    target: item?.target || fallback?.target || '',
    ...(children && children.length > 0 ? {children} : {}),
  };
};

const mergeFooterGroup = (incoming: unknown, fallback?: FooterLinkGroupContent): FooterLinkGroupContent => {
  const group = incoming as Partial<FooterLinkGroupContent> | null;
  return {
    title: group?.title || fallback?.title || '',
    links:
      Array.isArray(group?.links) && group.links.length > 0
        ? group.links.map((link, index) => mergeSiteLink(link, fallback?.links?.[index]))
        : fallback?.links || [],
  };
};

const mergeSocialLink = (incoming: unknown, fallback?: SocialLinkContent): SocialLinkContent => {
  const link = incoming as Partial<SocialLinkContent> | null;
  return {
    platform: link?.platform || fallback?.platform || '',
    icon: link?.icon || fallback?.icon || '',
    url: link?.url || fallback?.url || '',
  };
};

const mergeLocationSection = (
  incoming: unknown,
  fallback: SiteSettingsContent['locationSection'],
): SiteSettingsContent['locationSection'] => {
  const section = incoming as Partial<SiteSettingsContent['locationSection']> | null;
  return {
    title: section?.title || fallback.title,
    subtitle: section?.subtitle || fallback.subtitle,
    clinicName: section?.clinicName || fallback.clinicName,
    clinicDescription: section?.clinicDescription || fallback.clinicDescription,
    hours: section?.hours || fallback.hours,
    mapLink: section?.mapLink || fallback.mapLink,
    mapEmbedUrl: section?.mapEmbedUrl || fallback.mapEmbedUrl,
    image: mergeImage(section?.image, fallback.image),
  };
};

export const normalizeSiteSettings = (incoming: unknown): SiteSettingsContent => {
  const settings = incoming as Partial<SiteSettingsContent> | null;
  const fallback = defaultSiteSettingsContent;
  return {
    title: settings?.title || fallback.title,
    headerLogo: mergeImage(settings?.headerLogo, fallback.headerLogo),
    headerNavItems:
      Array.isArray(settings?.headerNavItems) && settings.headerNavItems.length > 0
        ? settings.headerNavItems.map((item, index) => mergeNavItem(item, fallback.headerNavItems[index]))
        : fallback.headerNavItems,
    headerCta: mergeSiteLink(settings?.headerCta, fallback.headerCta),
    footerLogo: mergeImage(settings?.footerLogo, fallback.footerLogo),
    footerTagline: settings?.footerTagline || fallback.footerTagline,
    footerLinkGroups:
      Array.isArray(settings?.footerLinkGroups) && settings.footerLinkGroups.length > 0
        ? settings.footerLinkGroups.map((group, index) => mergeFooterGroup(group, fallback.footerLinkGroups[index]))
        : fallback.footerLinkGroups,
    clinicInfoTitle: settings?.clinicInfoTitle || fallback.clinicInfoTitle,
    address: settings?.address || fallback.address,
    phone: settings?.phone || fallback.phone,
    email: settings?.email || fallback.email,
    socialLinks:
      Array.isArray(settings?.socialLinks) && settings.socialLinks.length > 0
        ? settings.socialLinks.map((link, index) => mergeSocialLink(link, fallback.socialLinks[index]))
        : fallback.socialLinks,
    locationSection: mergeLocationSection(settings?.locationSection, fallback.locationSection),
    copyright: settings?.copyright || fallback.copyright,
    builderLink:
      settings?.builderLink && (settings.builderLink.label || settings.builderLink.target)
        ? {
            label: settings.builderLink.label || '',
            kind: settings.builderLink.kind || 'external',
            target: settings.builderLink.target || '',
          }
        : undefined,
    floatingLineButton: {
      enabled: settings?.floatingLineButton?.enabled ?? fallback.floatingLineButton.enabled,
      ariaLabel:
        settings?.floatingLineButton?.ariaLabel || fallback.floatingLineButton.ariaLabel,
      link: mergeSiteLink(settings?.floatingLineButton?.link, fallback.floatingLineButton.link),
    },
  };
};

export async function fetchSiteSettingsContent(): Promise<SiteSettingsContent> {
  if (!sanityClient) return defaultSiteSettingsContent;

  try {
    const data = await sanityClient.fetch(siteSettingsQuery);
    return normalizeSiteSettings(data);
  } catch (error) {
    console.error('Failed to fetch site settings content from Sanity', error);
    return defaultSiteSettingsContent;
  }
}
