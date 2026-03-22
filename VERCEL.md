# Deploying on Vercel

Step-by-step for environment variables, admin login, analytics, and optional database.

**Cloudflare in front of Vercel (proxied DNS):** see [CLOUDFLARE.md](./CLOUDFLARE.md).

---

## 1. Connect the project

1. Push this repo to GitHub (if it isn’t already).
2. In [Vercel](https://vercel.com) → **Add New** → **Project** → import the repo.
3. Use defaults (Next.js). Deploy once; then add variables below and **redeploy**.

---

## 2. Required: admin dashboard (`/admin`)

These power NextAuth and the credentials login at `/admin/login`.

| Variable | Production | Notes |
|----------|------------|--------|
| `NEXTAUTH_SECRET` | Random string, 32+ chars | Generate: `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Your live URL | Example: `https://www.neptunewashpros.com` — **no trailing slash**. Must match the URL visitors use (`www` vs non-`www`). |
| `ADMIN_USER` | Your admin username | Same username you type on `/admin/login` (case-sensitive, trimmed). |
| `ADMIN_PASSWORD` | Strong password | Same password you type on the login form. |

**In Vercel:** **Settings** → **Environment Variables** → add each name and value → choose **Production** (and **Preview** if you need `/admin` on preview URLs).

**After saving:** **Deployments** → **⋯** on the latest deployment → **Redeploy**.

**Preview tip:** If you use Basic Auth on previews, `/api/auth` is excluded so NextAuth still works. Set the same four variables for **Preview** if you test admin there; `NEXTAUTH_URL` for Preview is often easiest as your **production** URL, or your exact `https://xxx.vercel.app` URL.

---

## 3. Required: booking emails (Resend)

| Variable | Notes |
|----------|--------|
| `RESEND_API_KEY` | From [Resend](https://resend.com) |
| `RESEND_FROM_EMAIL` | Verified sender domain |
| `RESEND_TO_EMAIL` | Where booking notifications go |

Without `RESEND_API_KEY`, the booking API returns 500 (by design).

### Cloudflare Turnstile (spam protection on booking form)

| Variable | Notes |
|----------|--------|
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Site key from [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile) |
| `TURNSTILE_SECRET_KEY` | Secret key (same widget); required for server verification |

If `TURNSTILE_SECRET_KEY` is set, `/api/booking` rejects requests without a valid Turnstile token. If the secret is unset, verification is skipped (useful for local dev without keys). For production, set both keys and add your domain hostnames to the Turnstile widget.

---

## 4. Optional: Google Analytics 4

| Variable | Notes |
|----------|--------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | e.g. `G-XXXXXXXXXX` |

Creates the GA4 script and sends events such as `click_phone` and `generate_lead`. In GA4, mark those as conversions if you want.

---

## 5. Optional: save booking leads in Neon

1. Vercel **Storage** (or Marketplace) → create **Neon** Postgres.
2. Copy **`DATABASE_URL`** into Vercel env vars (Production / Preview as needed).
3. In Neon’s **SQL Editor**, run the contents of **`scripts/booking-leads.sql`**.
4. Redeploy. Successful bookings still email via Resend and also insert a row when the DB is available.

The admin dashboard shows lead **count** when `DATABASE_URL` is set and the table exists.

---

## 6. Optional: password-protect Preview only

| Variable | Notes |
|----------|--------|
| `BASIC_AUTH_USER` | Only used when `VERCEL_ENV=preview` |
| `BASIC_AUTH_PASS` | Hobby-friendly preview gate |

Production is **not** protected by this.

---

## 7. Vercel Analytics (dashboard, not env)

1. Vercel project → **Analytics** (or **Speed Insights**).
2. Enable **Web Analytics** for traffic / Web Vitals.

No secret key required for the default `@vercel/analytics` integration in this app.

---

## 8. Checklist before going live

- [ ] `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `ADMIN_USER`, `ADMIN_PASSWORD` (Production)
- [ ] `RESEND_*` for booking email
- [ ] Custom domain assigned; `NEXTAUTH_URL` matches that domain exactly
- [ ] Redeploy after any env change
- [ ] Test `/admin/login` on production
- [ ] Test booking form → email received

---

## 9. Local development

```bash
cp .env.example .env.local
```

Edit `.env.local`. For local admin:

- `NEXTAUTH_URL=http://localhost:3000`
- Use `npm run dev` and open `http://localhost:3000/admin/login`

See **`.env.example`** for all variable names.

---

## Troubleshooting

| Issue | What to check |
|-------|----------------|
| Admin login loops or fails | `NEXTAUTH_URL` must match browser URL (`https`, `www`). Redeploy after changes. |
| “Invalid username or password” | `ADMIN_USER` / `ADMIN_PASSWORD` in Vercel match what you type (username is case-sensitive); no leading/trailing spaces in env values. |
| Booking 500 | `RESEND_API_KEY` set and valid. |
| Lead count shows “—” | `DATABASE_URL` not set, or `booking_leads` table not created (run `scripts/booking-leads.sql`). |
