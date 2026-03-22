import { createDataAttribute } from '@sanity/visual-editing';
import { sanityEnv } from './env';

const homePageAttribute = createDataAttribute({
  id: 'homePage',
  type: 'homePage',
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
});

export const getHomePageDataAttribute = (path: string) => homePageAttribute(path).toString();

const siteSettingsAttribute = createDataAttribute({
  id: 'siteSettings',
  type: 'siteSettings',
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
});

export const getSiteSettingsDataAttribute = (path: string) => siteSettingsAttribute(path).toString();

const aboutPageAttribute = createDataAttribute({
  id: 'aboutPage',
  type: 'aboutPage',
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
});

export const getAboutPageDataAttribute = (path: string) => aboutPageAttribute(path).toString();

const insurancePageAttribute = createDataAttribute({
  id: 'insurancePage',
  type: 'insurancePage',
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
});

export const getInsurancePageDataAttribute = (path: string) => insurancePageAttribute(path).toString();

const casesPageAttribute = createDataAttribute({
  id: 'casesPage',
  type: 'casesPage',
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
});

export const getCasesPageDataAttribute = (path: string) => casesPageAttribute(path).toString();

export const getCaseArticleDataAttribute = (caseId: number | string, path: string) =>
  createDataAttribute({
    id: `caseArticle-${caseId}`,
    type: 'caseArticle',
    projectId: sanityEnv.projectId,
    dataset: sanityEnv.dataset,
  })(path).toString();

const teamPageAttribute = createDataAttribute({
  id: 'teamPage',
  type: 'teamPage',
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
});

export const getTeamPageDataAttribute = (path: string) => teamPageAttribute(path).toString();

export const getDoctorProfileDataAttribute = (doctorId: number | string, path: string) =>
  createDataAttribute({
    id: `doctorProfile-${doctorId}`,
    type: 'doctorProfile',
    projectId: sanityEnv.projectId,
    dataset: sanityEnv.dataset,
  })(path).toString();

const healthEducationPageAttribute = createDataAttribute({
  id: 'healthEducationPage',
  type: 'healthEducationPage',
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
});

export const getHealthEducationPageDataAttribute = (path: string) =>
  healthEducationPageAttribute(path).toString();

export const getHealthEducationArticleDataAttribute = (
  articleId: number | string,
  path: string,
) =>
  createDataAttribute({
    id: `healthEducationArticle-${articleId}`,
    type: 'healthEducationArticle',
    projectId: sanityEnv.projectId,
    dataset: sanityEnv.dataset,
  })(path).toString();

const featuredTreatmentsPageAttribute = createDataAttribute({
  id: 'featuredTreatmentsPage',
  type: 'featuredTreatmentsPage',
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
});

export const getFeaturedTreatmentsPageDataAttribute = (path: string) =>
  featuredTreatmentsPageAttribute(path).toString();

export const getFeaturedTreatmentDetailDataAttribute = (slug: string, path: string) =>
  createDataAttribute({
    id: `featuredTreatmentDetail-${slug}`,
    type: 'featuredTreatmentDetail',
    projectId: sanityEnv.projectId,
    dataset: sanityEnv.dataset,
  })(path).toString();
