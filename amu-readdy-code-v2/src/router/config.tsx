import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { fetchAboutPageContent } from '../sanity/fetchAboutPageContent';
import { fetchCaseArticleContent, fetchCasesPageContent } from '../sanity/fetchCasesContent';
import { fetchFeaturedTreatmentDetailContent, fetchFeaturedTreatmentsPageContent } from '../sanity/fetchFeaturedTreatmentsContent';
import { fetchHealthEducationArticleContent, fetchHealthEducationPageContent } from '../sanity/fetchHealthEducationContent';
import { fetchHomePageContent } from '../sanity/fetchHomePageContent';
import { fetchInsurancePageContent } from '../sanity/fetchInsurancePageContent';
import { fetchSiteSettingsContent } from '../sanity/fetchSiteSettingsContent';
import { fetchTeamPageContent } from '../sanity/fetchTeamContent';
import RootLayout from './RootLayout';

const HomePage = lazy(() => import('../pages/home/page'));
const TreatmentsPage = lazy(() => import('../pages/treatments/page'));
const AboutPage = lazy(() => import('../pages/about-v2/page'));
const TeamPage = lazy(() => import('../pages/team/page'));
const CasesPage = lazy(() => import('../pages/cases/page'));
const CaseDetailPage = lazy(() => import('../pages/cases/detail/page'));
const InsurancePage = lazy(() => import('../pages/insurance/page'));
const FeaturedTreatmentsPage = lazy(() => import('../pages/featured-treatments/page'));
const FeaturedTreatmentDetailPage = lazy(() => import('../pages/featured-treatments/DetailPage'));
const HealthEducationPage = lazy(() => import('../pages/health-education/page'));
const HealthEducationDetailPage = lazy(() => import('../pages/health-education/detail/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    id: 'root',
    loader: fetchSiteSettingsContent,
    element: <RootLayout />,
    children: [
      {
        path: '/',
        id: 'home',
        loader: fetchHomePageContent,
        element: <HomePage />,
      },
      {
        path: '/treatments',
        element: <TreatmentsPage />,
      },
      {
        path: '/insurance',
        id: 'insurance',
        loader: fetchInsurancePageContent,
        element: <InsurancePage />,
      },
      {
        path: '/featured-treatments',
        id: 'featuredTreatments',
        loader: fetchFeaturedTreatmentsPageContent,
        element: <FeaturedTreatmentsPage />,
      },
      {
        path: '/featured-treatments/:slug',
        loader: fetchFeaturedTreatmentDetailContent,
        element: <FeaturedTreatmentDetailPage />,
      },
      {
        path: '/about',
        id: 'about',
        loader: fetchAboutPageContent,
        element: <AboutPage />,
      },
      {
        path: '/cases',
        id: 'cases',
        loader: fetchCasesPageContent,
        element: <CasesPage />,
      },
      {
        path: '/cases/:id',
        loader: fetchCaseArticleContent,
        element: <CaseDetailPage />,
      },
      {
        path: '/team',
        id: 'team',
        loader: fetchTeamPageContent,
        element: <TeamPage />,
      },
      {
        path: '/health-education',
        id: 'healthEducation',
        loader: fetchHealthEducationPageContent,
        element: <HealthEducationPage />,
      },
      {
        path: '/health-education/:id',
        loader: fetchHealthEducationArticleContent,
        element: <HealthEducationDetailPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
