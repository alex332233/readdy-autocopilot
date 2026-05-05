import { getPreviewSession, readPreviewSessionCookie } from "./session.server";

export type PreviewState = {
  enabled: boolean;
  perspective: "published" | "drafts";
};

export async function getPreviewState(request: Request): Promise<PreviewState> {
  const url = new URL(request.url);
  const session = await getPreviewSession(request);
  const cookieState = readPreviewSessionCookie(request);

  const enabled = session.get("enabled") === true;
  const perspective = session.get("perspective");
  if (enabled && perspective === "drafts") {
    return {
      enabled: true,
      perspective: "drafts",
    };
  }

  if (cookieState?.enabled === true && cookieState.perspective === "drafts") {
    return {
      enabled: true,
      perspective: "drafts",
    };
  }

  const queryPerspective = url.searchParams.get("sanity-preview-perspective");
  if (queryPerspective === "drafts") {
    return {
      enabled: true,
      perspective: "drafts",
    };
  }

  return {
    enabled: false,
    perspective: "published",
  };
}
