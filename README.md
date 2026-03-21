# Neptune Pressure Washing Website

A modern, award-winning website for Neptune Pressure Washing built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: State-of-the-art design with interactive elements and animations
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- 🚀 **Performance**: Built with Next.js 14 for optimal performance and SEO
- 🔍 **SEO Optimized**: Complete meta tags, schema markup, and keyword optimization
- 🎯 **Interactive Elements**: Clickable service bubbles on homepage with animations
- 📝 **CMS Ready**: Sanity CMS integration for easy content management
- 📧 **Booking System**: Custom booking form with API integration
- 🎭 **Animations**: Smooth animations using Framer Motion

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **CMS**: Sanity (optional)
- **Hosting**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` with your configuration (see `.env.example` for all keys):
   - Sanity CMS credentials (if using)
   - Site URL
   - Email service credentials (for booking form)
   - Admin dashboard / analytics (see **Analytics & admin** below)

3. **Add your house hero image:**
   - Place your house image at `public/images/house-hero.png`
   - Or update the path in `src/components/InteractiveHouse.tsx`

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── page.tsx     # Homepage
│   │   ├── about/       # About page
│   │   ├── services/    # Service pages
│   │   ├── pricing/     # Pricing page
│   │   ├── faq/         # FAQ page
│   │   ├── reviews/     # Reviews page
│   │   ├── contact/     # Contact page
│   │   └── api/         # API routes
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── InteractiveHouse.tsx
│   │   ├── BookingForm.tsx
│   │   └── ...
│   ├── lib/             # Utility functions
│   │   ├── keywords.ts  # SEO keywords
│   │   ├── schema.ts    # Schema markup
│   │   └── sanity.ts    # CMS client
│   └── types/           # TypeScript types
├── public/              # Static assets
│   └── images/         # Images
└── ...
```

## Key Pages

- **Homepage** (`/`): Interactive house with clickable service bubbles
- **Services** (`/services`): Overview and individual service pages
- **About** (`/about`): Company information
- **Pricing** (`/pricing`): Pricing guide
- **FAQ** (`/faq`): Frequently asked questions
- **Reviews** (`/reviews`): Customer testimonials
- **Contact** (`/contact`): Contact information and booking form

## Service Pages

All service pages include:
- SEO-optimized content
- Schema markup
- Booking form integration
- Detailed service descriptions
- Pricing information

Services available:
- House Washing
- Gutter Cleaning
- Roof Washing
- Concrete Cleaning
- Fences & Decks
- Brick Cleaning
- Patio & Deck Cleaning
- Soft Washing
- Power Washing
- Sidewalk Cleaning

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  'neptune-blue': '#1e3a5f',
  'neptune-dark-blue': '#0f1f35',
  'neptune-light-blue': '#3b82f6',
  'neptune-gold': '#d4af37',
}
```

### Content

1. **Testimonials**: Update `src/app/reviews/page.tsx` and `src/app/page.tsx`
2. **Service Content**: Edit individual service pages in `src/app/services/`
3. **Company Info**: Update `src/app/about/page.tsx`
4. **Contact Info**: Update `src/components/Footer.tsx` and `src/app/contact/page.tsx`

### CMS Integration (Optional)

To enable Sanity CMS:

1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Set up environment variables in `.env.local`
3. Create Sanity schemas for:
   - Testimonials
   - Before/After photos
   - Blog posts
   - Service content
4. Update `src/lib/sanity.ts` with queries

## Booking Form

The booking form is set up with an API route at `/api/booking`. To enable email notifications:

1. Set up an email service (Resend, SendGrid, etc.)
2. Update `src/app/api/booking/route.ts` with your email service
3. Configure environment variables

## Analytics & admin dashboard

- **Vercel Analytics**: Included via `@vercel/analytics`. In the Vercel project, enable **Web Analytics** (Speed Insights is optional) so traffic and Web Vitals appear in the Vercel dashboard.
- **Google Analytics 4 (optional)**: Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` (e.g. `G-XXXXXXXXXX`). The site loads gtag and sends custom events:
  - `click_phone` — header phone buttons (desktop / mobile)
  - `generate_lead` — successful booking form submit  
  Mark these as conversions in GA4 if you want.
- **Admin dashboard**: Visit `/admin` (sign in at `/admin/login`).
  - **Required env vars:** `NEXTAUTH_SECRET`, `NEXTAUTH_URL` (production URL, e.g. `https://www.neptunewashpros.com`), `ADMIN_USER`, `ADMIN_PASSWORD`.
  - Shows counts for reviews, gallery entries, booking leads (if DB configured), and a placeholder for future chat leads.
- **Booking leads in the database (optional)**: Add Neon Postgres from the Vercel Storage / Marketplace, set `DATABASE_URL`, then run `scripts/booking-leads.sql` in the Neon SQL editor. Successful bookings are still emailed via Resend; rows are inserted when the DB is available.

**Preview deployments:** Preview Basic Auth no longer applies to `/api/auth/*`, so NextAuth sign-in works. You still use `BASIC_AUTH_*` for the rest of the preview site if configured.

**Vercel setup (env vars, checklist, troubleshooting):** see **[VERCEL.md](./VERCEL.md)**.

## SEO Features

- ✅ Meta tags on all pages
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Schema markup (LocalBusiness, Service, FAQ)
- ✅ Sitemap (auto-generated by Next.js)
- ✅ Optimized keywords for Massillon, OH area
- ✅ Semantic HTML structure

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables (see **[VERCEL.md](./VERCEL.md)** for a full checklist: NextAuth, Resend, optional GA4, Neon, preview auth)
4. Deploy and redeploy after changing env vars

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Future Enhancements

- [ ] Live chat integration
- [ ] Online payment processing
- [ ] Customer portal
- [ ] Blog section
- [ ] Video testimonials
- [ ] Before/after photo gallery (CMS)
- [ ] Google Business Profile integration
- [ ] Review collection system

## Support

For questions or issues, contact:
- Email: neptunepwcllc@gmail.com
- Phone: 330-412-9330

## License

© 2024 Neptune Pressure Washing LLC. All rights reserved.
