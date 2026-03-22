/**
 * Client IP when the app is behind Cloudflare and/or Vercel.
 * Prefer CF-Connecting-IP (set by Cloudflare when proxied), then X-Forwarded-For (Vercel forwards the client chain).
 */
export function getRequestClientIp(request: { headers: Headers }): string | null {
  const cf = request.headers.get('cf-connecting-ip')
  if (cf?.trim()) return cf.trim()

  const xff = request.headers.get('x-forwarded-for')
  if (xff) {
    const first = xff.split(',')[0]?.trim()
    if (first) return first
  }

  const realIp = request.headers.get('x-real-ip')
  if (realIp?.trim()) return realIp.trim()

  return null
}
