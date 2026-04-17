import {buildRequestUrl, serializePreviewSessionCookie} from './shared'

type PreviewResponse = {
  setHeader: (name: string, value: string | string[]) => void
  redirect: (statusCode: number, url: string) => void
}

type PreviewRequest = {
  url?: string
  headers: {
    host?: string
  }
}

function safeRedirectTarget(baseUrl: string, requestUrl: URL) {
  const rawRedirect =
    requestUrl.searchParams.get('redirectTo') ||
    requestUrl.searchParams.get('redirect') ||
    requestUrl.searchParams.get('url') ||
    '/'

  try {
    const redirectUrl = new URL(rawRedirect, baseUrl)
    if (redirectUrl.origin !== baseUrl) return '/'
    redirectUrl.searchParams.delete('sanity-preview-perspective')
    return `${redirectUrl.pathname}${redirectUrl.search}${redirectUrl.hash}`
  } catch {
    return '/'
  }
}

export default function handler(request: PreviewRequest, response: PreviewResponse) {
  const requestUrl = buildRequestUrl(request)
  const baseUrl = requestUrl.origin
  const redirectTo = safeRedirectTarget(baseUrl, requestUrl)
  const redirectUrl = new URL(redirectTo, baseUrl)

  response.setHeader('Set-Cookie', [
    serializePreviewSessionCookie(false, 'published'),
    `__sanity_preview=; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=0`,
    `__sanity_preview_perspective=; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=0`,
  ])
  response.redirect(307, redirectUrl.toString())
}
