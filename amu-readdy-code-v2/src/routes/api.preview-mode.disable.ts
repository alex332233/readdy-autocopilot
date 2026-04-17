import { buildRequestUrl, serializePreviewSessionCookie } from "../../api/preview-mode/shared";

function safeRedirectTarget(baseUrl: string, requestUrl: URL) {
  const rawRedirect =
    requestUrl.searchParams.get("redirectTo") ||
    requestUrl.searchParams.get("redirect") ||
    requestUrl.searchParams.get("url") ||
    "/";

  try {
    const redirectUrl = new URL(rawRedirect, baseUrl);
    if (redirectUrl.origin !== baseUrl) return "/";
    redirectUrl.searchParams.delete("sanity-preview-perspective");
    return `${redirectUrl.pathname}${redirectUrl.search}${redirectUrl.hash}`;
  } catch {
    return "/";
  }
}

export async function loader({ request }: { request: Request }) {
  const requestUrl = buildRequestUrl({
    url: request.url,
    headers: {
      host: request.headers.get("host") || undefined,
    },
  });
  const baseUrl = requestUrl.origin;
  const redirectTo = safeRedirectTarget(baseUrl, requestUrl);

  const headers = new Headers();
  headers.append("Set-Cookie", serializePreviewSessionCookie(false, "published"));
  headers.append(
    "Set-Cookie",
    `__sanity_preview=; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=0`,
  );
  headers.append(
    "Set-Cookie",
    `__sanity_preview_perspective=; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=0`,
  );
  headers.set("Location", new URL(redirectTo, baseUrl).toString());

  return new Response(null, {
    status: 307,
    headers,
  });
}
