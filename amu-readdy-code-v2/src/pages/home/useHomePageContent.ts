import { useRouteLoaderData } from 'react-router-dom';
import { defaultHomePageContent } from '../../sanity/defaults/homePage';
import type { HomePageContent } from '../../sanity/types';

export function useHomePageContent() {
  return (useRouteLoaderData('home') as HomePageContent | undefined) || defaultHomePageContent;
}
