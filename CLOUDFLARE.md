# Cloudflare (proxied) + Vercel

Use this when DNS lives in **Cloudflare** with the **orange cloud (Proxied)** on web records, and the Next.js app is hosted on **Vercel**.

---

## 1. DNS / Vercel

### Before Cloudflare

1. In **Vercel** → Project → **Settings** → **Domains**, add every hostname you will use (`@`, `www`, and any alternates).
2. Copy the **exact** DNS targets Vercel shows for **each** domain (they may be `76.76.21.21` + a project-specific `*.vercel-dns-*.com` CNAME, or other values Vercel displays). Do not assume generic blog values.

### Records in Cloudflare (typical)

| Name | Type | Target | Proxy status |
|------|------|--------|----------------|
| `@` (apex) | **A** | IP shown by Vercel for apex (often `76.76.21.21` — **use Vercel’s value**) | **Proxied** (orange cloud) |
| `www` | **CNAME** | Exact hostname Vercel shows (e.g. `xxxx.vercel-dns-017.com` or `cname.vercel-dns.com`) | **Proxied** |

- **Proxied** is correct for `A`/`CNAME` web records so traffic goes through Cloudflare to Vercel.
- **DNS only** (grey cloud) is for records that must not be proxied (see below).

### Never proxy (DNS only)

- **MX** — mail must point directly at your mail provider; keep **DNS only**.
- **TXT** used for email (SPF, DKIM, DMARC) — usually **DNS only**; do not put mail auth behind the proxy.
- Any subdomain that is not HTTP(S) to Vercel (e.g. third-party verification) — follow that provider’s instructions.

### SSL for email

If you add email later, configure MX/TXT at Cloudflare as **DNS only** and use your mail host’s values; Cloudflare proxy does not apply to MX.

---

## 2. SSL/TLS on Cloudflare

1. **SSL/TLS** → set mode to **Full (strict)**.  
   Vercel serves a valid certificate for your domain; Full (strict) validates it end-to-end.

2. **Edge Certificates**: enable **Always Use HTTPS** (recommended).

3. **Things that break SSL or mixed content**

   - Mixed content: pages loading `http://` scripts, images, or APIs while the page is `https://`. This repo uses HTTPS for external assets; avoid hardcoding `http://` URLs in content.
   - **Authenticated Origin Pulls** / custom origin rules: not required for standard Vercel; leave defaults unless you have a specific enterprise setup.

---

## 3. Caching

- **API routes** (`/api/*`): `next.config.js` sets `Cache-Control: private, no-store` for `/api/:path*` so responses are not treated as cacheable by default.
- **HTML / app routes**: Next.js dynamic responses should not be cached as static files; in Cloudflare avoid a global **Cache Everything** rule that caches `/` or all HTML without exceptions.
- **Recommended Cloudflare**: use **Cache Rules** (or Page Rules) to:
  - **Bypass** cache for `/api/*` and optionally for dynamic paths if you ever enable aggressive caching.
  - Cache **static assets** aggressively: paths under `/_next/static/*` and public files with long TTL (Vercel already fingerprints hashed assets).

---

## 4. Client IP / rate limiting

- This app does **not** currently rate-limit by IP. If you add server-side limits or logging, read the client IP via `getRequestClientIp` in `src/lib/request-client-ip.ts` (prefers `CF-Connecting-IP`, then first hop of `X-Forwarded-For`, then `X-Real-IP`).
- Behind **Cloudflare Proxied**, `CF-Connecting-IP` is the end-user IP Vercel can see when Cloudflare forwards the request.
- Vercel sets `x-forwarded-for`; when Cloudflare is in front, the chain usually includes the real client (confirm in logs once live).

---

## 5. Cloudflare Turnstile (optional)

Not wired in this repo yet. If you add Turnstile to forms:

| Variable | Where |
|----------|--------|
| `TURNSTILE_SITE_KEY` | Public (e.g. `NEXT_PUBLIC_…` if used in browser) |
| `TURNSTILE_SECRET_KEY` | Server-only (Vercel env, never commit) |

- Verify the token on the server (e.g. in `/api/booking`).
- If you add **Content-Security-Policy** headers, allow Turnstile: `script-src` / `frame-src` must include `https://challenges.cloudflare.com` (exact directives depend on your CSP). This project does not set CSP in `next.config.js` today.

---

## 6. Checklist (ops)

### Vercel

1. **Settings** → **Domains**: add apex + `www` (and any redirect domains).
2. Note **exact** DNS records Vercel shows per hostname.
3. **Environment variables**: production values for `NEXTAUTH_URL`, Resend, DB, etc. (see `VERCEL.md`).
4. **Redeploy** after env or domain changes.

### Cloudflare

1. Add/update **A** for `@` and **CNAME** for `www` per Vercel (Proxied).
2. Remove conflicting duplicate records for the same name.
3. **SSL/TLS** → **Full (strict)**; enable **Always Use HTTPS**.
4. Ensure **MX** / mail **TXT** are **DNS only**, not proxied.
5. Add **Cache Rules**: bypass `/api/*`; optionally cache `/_next/static/*` only if needed.
6. (Optional) Turnstile keys in Vercel + form + CSP when implemented.

### Verify

1. `curl -I https://yourdomain.com/api/booking` — expect `cache-control` containing `no-store`.
2. Load site over HTTPS; no mixed-content warnings in browser devtools.
3. If using IP logging, log `getRequestClientIp` once and confirm it matches your real IP (not a Cloudflare edge IP).
