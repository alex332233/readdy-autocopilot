import {buildRequestUrl, resolvePreviewRedirect, serializePreviewSessionCookie} from './shared'

type PreviewResponse = {
  setHeader: (name: string, value: string | string[]) => void
  redirect: (statusCode: number, url: string) => void
  status?: (statusCode: number) => PreviewResponse
  end?: (body?: string) => void
}

type PreviewRequest = {
  url?: string
  headers: {
    host?: string
  }
}

function safeRedirectTarget(baseUrl: string, rawRedirect: string) {
  try {
    const redirectUrl = new URL(rawRedirect, baseUrl)
    if (redirectUrl.origin !== baseUrl) return '/'
    return `${redirectUrl.pathname}${redirectUrl.search}${redirectUrl.hash}`
  } catch {
    return '/'
  }
}

export default async function handler(request: PreviewRequest, response: PreviewResponse) {
  const requestUrl = buildRequestUrl(request)
  const baseUrl = requestUrl.origin
  const resolved = await resolvePreviewRedirect(request)

  if (!resolved.ok) {
    if (response.status && response.end) {
      response.status(resolved.statusCode).end('Invalid preview URL')
      return
    }
    response.redirect(resolved.statusCode, new URL('/', baseUrl).toString())
    return
  }

  const redirectTo = safeRedirectTarget(baseUrl, resolved.redirectTo)
  const perspective = resolved.perspective
  const redirectUrl = new URL(redirectTo, baseUrl)

  response.setHeader('Set-Cookie', [
    serializePreviewSessionCookie(true, perspective),
    `__sanity_preview=1; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=3600`,
    `__sanity_preview_perspective=${encodeURIComponent(perspective)}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=3600`,
  ])
  response.redirect(resolved.statusCode, redirectUrl.toString())
}
