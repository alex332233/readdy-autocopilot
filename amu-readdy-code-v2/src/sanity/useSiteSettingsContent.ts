import { useRouteLoaderData } from "react-router-dom";
import { defaultSiteSettingsContent } from "./defaults/siteSettings";
import type { SiteSettingsContent } from "./types";

type RootRouteData =
  | SiteSettingsContent
  | {
      preview?: boolean;
      perspective?: string;
      siteSettings: SiteSettingsContent;
    };

export function useSiteSettingsContent() {
  const data = useRouteLoaderData("root") as RootRouteData | undefined;

  if (!data) return defaultSiteSettingsContent;
  if ("siteSettings" in data) return data.siteSettings;
  return data;
}
