import type {SanityClient} from '@sanity/client';
import {sanityClient} from './client';
import {defaultTeamPageContent} from './defaults/teamPage';
import {teamPageQuery} from './queries';
import type {
  DoctorProfileContent,
  DoctorSchedule,
  DoctorScheduleSession,
  DoctorSpecialtyGroup,
  DoctorTreatmentTag,
  SanityImage,
  TeamPageContent,
} from './types';

type DoctorProfileInfoInput = string | { _key?: string; text?: string; url?: string } | null | undefined;

type SanityFetchClient = Pick<SanityClient, 'fetch'>;

const mergeImage = (incoming: unknown, fallback?: SanityImage): SanityImage => {
  const image = incoming as Partial<SanityImage> | null;
  return {
    ...fallback,
    ...image,
    url: image?.url || fallback?.url || '',
    alt: image?.alt || fallback?.alt || '',
  };
};

const mergeSpecialtyGroup = (incoming: unknown, fallback?: DoctorSpecialtyGroup): DoctorSpecialtyGroup => {
  const group = incoming as Partial<DoctorSpecialtyGroup> | null;
  return {
    _key: group?._key || fallback?._key,
    slug: group?.slug || fallback?.slug || '',
    name: group?.name || fallback?.name || '',
    icon: group?.icon || fallback?.icon,
    sourceField: group?.sourceField || fallback?.sourceField || 'specialtyGroups',
    items: Array.isArray(group?.items) ? group.items.filter(Boolean) : fallback?.items || [],
  };
};

const mergeTreatmentTag = (incoming: unknown, fallback?: DoctorTreatmentTag): DoctorTreatmentTag => {
  const tag = incoming as Partial<DoctorTreatmentTag> | null;
  return {
    _key: tag?._key || fallback?._key,
    key: tag?.key || fallback?.key,
    name: tag?.name || fallback?.name || '',
    icon: tag?.icon || fallback?.icon,
    sourceField: tag?.sourceField || fallback?.sourceField || 'specialTreatments',
  };
};

const mergeScheduleSession = (
  incoming: unknown,
  fallback?: DoctorScheduleSession,
): DoctorScheduleSession => {
  const session = incoming as Partial<DoctorScheduleSession> | null;
  return {
    label: session?.label || fallback?.label || '',
    time: session?.time || fallback?.time || '',
    mon: Boolean(session?.mon ?? fallback?.mon),
    tue: Boolean(session?.tue ?? fallback?.tue),
    wed: Boolean(session?.wed ?? fallback?.wed),
    thu: Boolean(session?.thu ?? fallback?.thu),
    fri: Boolean(session?.fri ?? fallback?.fri),
    sat: Boolean(session?.sat ?? fallback?.sat),
    sun: Boolean(session?.sun ?? fallback?.sun),
  };
};

const mergeSchedule = (incoming: unknown, fallback?: DoctorSchedule): DoctorSchedule | undefined => {
  if (!incoming && !fallback) return undefined;
  const schedule = incoming as Partial<DoctorSchedule> | null;
  return {
    morning: mergeScheduleSession(schedule?.morning, fallback?.morning),
    afternoon: mergeScheduleSession(schedule?.afternoon, fallback?.afternoon),
    evening: mergeScheduleSession(schedule?.evening, fallback?.evening),
  };
};

const mergeProfileInfoItems = (
  incoming: unknown,
  fallback?: DoctorProfileContent['education'],
): DoctorProfileContent['education'] => {
  const source = Array.isArray(incoming) && incoming.length > 0 ? incoming : fallback || [];

  return source
    .map((item: DoctorProfileInfoInput) => {
      if (typeof item === 'string') {
        const text = item.trim();
        return text ? {text} : null;
      }

      const text = item?.text?.trim();
      if (!text) return null;

      const url = item.url?.trim();
      return {
        _key: item._key,
        text,
        ...(url ? {url} : {}),
      };
    })
    .filter((item): item is DoctorProfileContent['education'][number] => Boolean(item));
};

const mergeDoctorProfile = (incoming: unknown, fallback?: DoctorProfileContent): DoctorProfileContent => {
  const doctor = incoming as
    | (Partial<DoctorProfileContent> & {
        _id?: string;
        educationItems?: unknown[];
        experienceItems?: unknown[];
        insuranceSpecialtyGroups?: unknown[];
        featuredTreatmentItems?: unknown[];
      })
    | null;
  const specialtyGroups =
    Array.isArray(doctor?.insuranceSpecialtyGroups) && doctor.insuranceSpecialtyGroups.length > 0
      ? doctor.insuranceSpecialtyGroups.map((group, index) => mergeSpecialtyGroup(group, fallback?.specialtyGroups[index]))
      : Array.isArray(doctor?.specialtyGroups) && doctor.specialtyGroups.length > 0
        ? doctor.specialtyGroups.map((group, index) => mergeSpecialtyGroup(group, fallback?.specialtyGroups[index]))
        : fallback?.specialtyGroups || [];
  const specialTreatmentItems =
    Array.isArray(doctor?.featuredTreatmentItems) && doctor.featuredTreatmentItems.length > 0
      ? doctor.featuredTreatmentItems.map((tag, index) =>
          mergeTreatmentTag(tag, fallback?.specialTreatmentItems?.[index]),
        )
      : undefined;
  const specialTreatments = specialTreatmentItems
    ? specialTreatmentItems.map((tag) => tag.name).filter(Boolean)
    : Array.isArray(doctor?.specialTreatments)
      ? doctor.specialTreatments.filter(Boolean)
      : fallback?.specialTreatments || [];

  return {
    documentId: doctor?._id || doctor?.documentId || fallback?.documentId || '',
    doctorId: Number(doctor?.doctorId || fallback?.doctorId || 0),
    displayOrder: doctor?.displayOrder ?? fallback?.displayOrder,
    name: doctor?.name || fallback?.name || '',
    title: doctor?.title || fallback?.title || '',
    bio: doctor?.bio || fallback?.bio || '',
    image: doctor?.image ? mergeImage(doctor.image) : {url: '', alt: ''},
    education: mergeProfileInfoItems(
      Array.isArray(doctor?.educationItems) && doctor.educationItems.length > 0
        ? doctor.educationItems
        : doctor?.education,
      fallback?.education,
    ),
    experience: mergeProfileInfoItems(
      Array.isArray(doctor?.experienceItems) && doctor.experienceItems.length > 0
        ? doctor.experienceItems
        : doctor?.experience,
      fallback?.experience,
    ),
    licenseItems: mergeProfileInfoItems(doctor?.licenseItems, fallback?.licenseItems),
    specialtyGroups,
    specialTreatments,
    specialTreatmentItems,
    schedule: mergeSchedule(doctor?.schedule, fallback?.schedule),
    scheduleNote: doctor?.scheduleNote || fallback?.scheduleNote,
  };
};

export async function fetchTeamPageContent(clientOverride?: SanityFetchClient | null) {
  const client = clientOverride || sanityClient;
  if (!client) return defaultTeamPageContent;

  const data = (await client.fetch(teamPageQuery)) as
    | {page?: Partial<TeamPageContent>; doctors?: unknown[]}
    | null;
  if (!data) return defaultTeamPageContent;

  return {
    title: data.page?.title || defaultTeamPageContent.title,
    heroTitle: data.page?.heroTitle || defaultTeamPageContent.heroTitle,
    heroSubtitle: data.page?.heroSubtitle || defaultTeamPageContent.heroSubtitle,
    doctors:
      Array.isArray(data.doctors) && data.doctors.length > 0
        ? data.doctors.map((doctor, index) => mergeDoctorProfile(doctor, defaultTeamPageContent.doctors[index]))
        : defaultTeamPageContent.doctors,
  };
}
