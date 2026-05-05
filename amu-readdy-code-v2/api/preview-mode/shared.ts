import { createClient } from '@sanity/client'
import {
  urlSearchParamPreviewPathname,
  urlSearchParamPreviewSecret,
  validatePreviewUrl,
} from '@sanity/preview-url-secret'
import { getServerEnv } from '../../src/sanity/serverEnv'

type PreviewRequest = {
  url?: string
  headers: {
    host?: string
  }
}

const projectId =
  getServerEnv('SANITY_STUDIO_PROJECT_ID') || getServerEnv('VITE_SANITY_PROJECT_ID') || ''
const dataset =
  getServerEnv('SANITY_STUDIO_DATASET') || getServerEnv('VITE_SANITY_DATASET') || 'production'
const apiVersion = getServerEnv('VITE_SANITY_API_VERSION') || '2025-02-19'
const previewToken = getServerEnv('SANITY_API_READ_TOKEN')

const validationClient =
  projectId && dataset && previewToken
    ? createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: false,
        token: previewToken,
      })
    : null

export function buildRequestUrl(request: PreviewRequest) {
  const protocol = request.headers.host?.includes('localhost') ? 'http' : 'https'
  const baseUrl = `${protocol}://${request.headers.host}`
  return new URL(request.url || '/', baseUrl)
}

export function serializePreviewSessionCookie(enabled: boolean, perspective: string) {
  const value = enabled
    ? Buffer.from(JSON.stringify({enabled, perspective}), 'utf8').toString('base64url')
    : ''

  return enabled
    ? `__sanity_preview_session=${value}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=3600`
    : `__sanity_preview_session=; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=0`
}

export async function resolvePreviewRedirect(request: PreviewRequest) {
  const requestUrl = buildRequestUrl(request)
  const fallbackPerspective = requestUrl.searchParams.get('sanity-preview-perspective') || 'drafts'
  const rawRedirect =
    requestUrl.searchParams.get('redirectTo') ||
    requestUrl.searchParams.get('redirect') ||
    requestUrl.searchParams.get('url') ||
    requestUrl.searchParams.get(urlSearchParamPreviewPathname) ||
    '/'

  if (requestUrl.searchParams.has(urlSearchParamPreviewSecret) && validationClient) {
    const validation = await validatePreviewUrl(validationClient, requestUrl.toString())
    if (!validation.isValid) {
      return {
        ok: false as const,
        statusCode: 401,
        perspective: fallbackPerspective,
        redirectTo: '/',
      }
    }

    return {
      ok: true as const,
      statusCode: 307,
      perspective: validation.studioPreviewPerspective || fallbackPerspective,
      redirectTo: validation.redirectTo || rawRedirect || '/',
    }
  }

  return {
    ok: true as const,
    statusCode: 307,
    perspective: fallbackPerspective,
    redirectTo: rawRedirect,
  }
}
