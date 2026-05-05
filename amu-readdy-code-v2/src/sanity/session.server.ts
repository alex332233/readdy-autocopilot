import { createCookieSessionStorage } from "react-router";
import { getServerEnv } from "./serverEnv";

export const previewSessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__sanity_preview_session",
    httpOnly: true,
    maxAge: 60 * 60,
    path: "/",
    sameSite: "none",
    secrets: [getServerEnv("SANITY_SESSION_SECRET") || "local-dev-preview-secret"],
    secure: true,
  },
});

export async function getPreviewSession(request: Request) {
  return previewSessionStorage.getSession(request.headers.get("Cookie"));
}

export function readPreviewSessionCookie(request: Request) {
  const cookieHeader = request.headers.get("Cookie") || "";
  const match = cookieHeader.match(/(?:^|;\s*)__sanity_preview_session=([^;]+)/);
  if (!match) return null;

  try {
    const decoded = JSON.parse(Buffer.from(match[1], "base64url").toString("utf8")) as {
      enabled?: boolean;
      perspective?: string;
    };
    return decoded;
  } catch {
    return null;
  }
}
