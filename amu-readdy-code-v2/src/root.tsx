import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "react-router";
import { loadQuery, setServerClient } from "@sanity/react-loader";
import { I18nextProvider } from "react-i18next";
import RootLayout from "./router/RootLayout";
import NoIndexMeta from "./components/NoIndexMeta";
import i18n from "./i18n";
import { normalizeSiteSettings } from "./sanity/fetchSiteSettingsContent";
import { getPreviewState } from "./sanity/previewState.server";
import { siteSettingsQuery } from "./sanity/queries";
import { createSanityServerClient } from "./sanity/serverClient";
import "./index.css";

export async function loader({ request }: { request: Request }) {
  const preview = await getPreviewState(request);
  setServerClient(createSanityServerClient(preview.perspective));
  const initial = await loadQuery(siteSettingsQuery, {}, { perspective: preview.perspective });

  return {
    preview: preview.enabled,
    perspective: preview.perspective,
    siteSettings: normalizeSiteSettings(initial.data),
  };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const rootData = useRouteLoaderData("root") as
    | {
        preview?: boolean;
        perspective?: string;
      }
    | undefined;
  const previewStateScript = JSON.stringify({
    preview: rootData?.preview === true,
    perspective: rootData?.perspective === "drafts" ? "drafts" : "published",
  }).replace(/</g, "\\u003c");

  return (
    <html
      lang="zh-TW"
      data-sanity-preview={rootData?.preview === true ? "true" : "false"}
      data-sanity-perspective={rootData?.perspective === "drafts" ? "drafts" : "published"}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="台南中醫,中醫診所,婦科調理,美顏針,兒童轉骨,體質調理,針灸"
        />
        <meta name="geo.region" content="TW-TNN" />
        <meta name="geo.placename" content="台南市北區" />
        <meta name="geo.position" content="23.012694;120.200711" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <I18nextProvider i18n={i18n}>
          <NoIndexMeta />
          {children}
        </I18nextProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__SANITY_PREVIEW_STATE__ = ${previewStateScript};`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <RootLayout />;
}

export function HydrateFallback() {
  return (
    <div className="min-h-screen bg-white">
      <Outlet />
    </div>
  );
}
