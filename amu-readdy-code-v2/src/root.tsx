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
import {
  hasGaTracking,
  hasMetaPixelTracking,
  trackingEnv,
} from "./analytics/tracking";
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
        {hasGaTracking ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingEnv.gaMeasurementId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${trackingEnv.gaMeasurementId}', {send_page_view: false});
                `,
              }}
            />
          </>
        ) : null}
        {hasMetaPixelTracking ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${trackingEnv.metaPixelId}');
              `,
            }}
          />
        ) : null}
        <Meta />
        <Links />
      </head>
      <body>
        {hasMetaPixelTracking ? (
          <noscript>
            <img
              height="1"
              width="1"
              style={{display: "none"}}
              src={`https://www.facebook.com/tr?id=${trackingEnv.metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        ) : null}
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
