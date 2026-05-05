import { useRouteLoaderData } from 'react-router';
import { defaultHomePageContent } from '../../sanity/defaults/homePage';
import { normalizeHomePageContent } from '../../sanity/fetchHomePageContent';
import type { HomePageContent } from '../../sanity/types';
import { useHomePageContentContext } from './HomePageContentContext';

type HomeRouteData =
  | HomePageContent
  | {
      initial?: {
        data: unknown;
      };
    };

export function useHomePageContent() {
  const contextValue = useHomePageContentContext();
  if (contextValue) return contextValue;

  const routeData = useRouteLoaderData('home') as HomeRouteData | undefined;
  if (!routeData) return defaultHomePageContent;
  if ('initial' in routeData && routeData.initial) {
    return normalizeHomePageContent(routeData.initial.data as HomePageContent);
  }
  return routeData as HomePageContent;
}
