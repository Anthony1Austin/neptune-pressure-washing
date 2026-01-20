# Setup Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your house hero image:**
   - Copy your house image (`2576503457600639908.PNG`) to:
     ```
     public/images/house-hero.png
     ```
   - Or update the image path in `src/components/InteractiveHouse.tsx`

3. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` with your settings (optional for basic setup)

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open browser:**
   Navigate to http://localhost:3000

## Image Setup

The website uses an interactive house image with clickable service bubbles. 

**Required Image:**
- Place your house image at: `public/images/house-hero.png`
- The image should show a house with service areas visible
- Recommended size: 1920x1200px or similar aspect ratio

**If image is missing:**
- The component will show a gradient fallback
- Update the path in `src/components/InteractiveHouse.tsx` if needed

## Service Bubble Positions

The interactive house component has service bubbles positioned at:
- Gutter Cleaning: 15% left, 25% top
- Roof Washing: 50% left, 10% top
- Concrete Cleaning: 45% left, 75% top
- House Wash: 50% left, 40% top
- Fences & Decks: 80% left, 60% top
- Brick Cleaning: 75% left, 45% top
- Patio & Deck Cleaning: 25% left, 70% top

You can adjust these positions in `src/components/InteractiveHouse.tsx` to match your image.

## Next Steps

1. **Customize Content:**
   - Update company information in About page
   - Add more testimonials
   - Customize service descriptions

2. **Set Up Email (Optional):**
   - Configure email service for booking form
   - Update `src/app/api/booking/route.ts`

3. **Set Up CMS (Optional):**
   - Create Sanity project
   - Configure environment variables
   - Set up schemas

4. **Deploy:**
   - Push to GitHub
   - Deploy to Vercel
   - Update domain settings

## Important Notes

- All service pages are created and SEO-optimized
- Schema markup is included on all pages
- The booking form is functional (needs email service for notifications)
- Placeholder content is ready for testimonials and photos
- CMS integration is prepared but optional

## Troubleshooting

**Image not showing?**
- Check file path: `public/images/house-hero.png`
- Verify file exists and is readable
- Check browser console for errors

**Build errors?**
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (18+ required)
- Clear `.next` folder and rebuild

**Styling issues?**
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.js` for correct paths
- Verify `postcss.config.js` exists
