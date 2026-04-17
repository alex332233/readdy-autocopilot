import {
  buildRequestUrl,
  resolvePreviewRedirect,
  serializePreviewSessionCookie,
} from "../../api/preview-mode/shared";

function safeRedirectTarget(baseUrl: string, rawRedirect: string) {
  try {
    const redirectUrl = new URL(rawRedirect, baseUrl);
    if (redirectUrl.origin !== baseUrl) return "/";
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
  const resolved = await resolvePreviewRedirect({
    url: request.url,
    headers: {
      host: request.headers.get("host") || undefined,
    },
  });

  if (!resolved.ok) {
    return new Response("Invalid preview URL", { status: resolved.statusCode });
  }

  const redirectTo = safeRedirectTarget(baseUrl, resolved.redirectTo);
  const headers = new Headers();
  headers.append("Set-Cookie", serializePreviewSessionCookie(true, resolved.perspective));
  headers.append(
    "Set-Cookie",
    `__sanity_preview=1; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=3600`,
  );
  headers.append(
    "Set-Cookie",
    `__sanity_preview_perspective=${encodeURIComponent(
      resolved.perspective,
    )}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=3600`,
  );
  headers.set("Location", new URL(redirectTo, baseUrl).toString());

  return new Response(null, {
    status: resolved.statusCode,
    headers,
  });
}
