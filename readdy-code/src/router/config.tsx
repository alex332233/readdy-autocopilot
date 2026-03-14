import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { fetchHomePageContent } from '../sanity/fetchHomeHero';

const HomePage = lazy(() => import('../pages/home/page'));
const TreatmentsPage = lazy(() => import('../pages/treatments/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const TeamPage = lazy(() => import('../pages/team/page'));
const CasesPage = lazy(() => import('../pages/cases/page'));
const InsurancePage = lazy(() => import('../pages/insurance/page'));
const FeaturedTreatmentsPage = lazy(() => import('../pages/featured-treatments/page'));
const FacialDetailPage = lazy(() => import('../pages/featured-treatments/facial/page'));
const GrowthDetailPage = lazy(() => import('../pages/featured-treatments/growth/page'));
const HealthEducationPage = lazy(() => import('../pages/health-education/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    id: 'home',
    path: '/',
    loader: fetchHomePageContent,
    element: <HomePage />,
  },
  {
    path: '/treatments',
    element: <TreatmentsPage />,
  },
  {
    path: '/insurance',
    element: <InsurancePage />,
  },
  {
    path: '/featured-treatments',
    element: <FeaturedTreatmentsPage />,
  },
  {
    path: '/featured-treatments/facial',
    element: <FacialDetailPage />,
  },
  {
    path: '/featured-treatments/growth',
    element: <GrowthDetailPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/cases',
    element: <CasesPage />,
  },
  {
    path: '/team',
    element: <TeamPage />,
  },
  {
    path: '/health-education',
    element: <HealthEducationPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
