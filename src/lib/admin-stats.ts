import { manualReviews } from '@/lib/reviews'
import { beforeAfterGalleryItems } from '@/lib/before-after-items'

export type SiteStatsSnapshot = {
  reviewsCount: number
  galleryProjectsCount: number
  galleryPhotoSlotsCount: number
  chatContactsCount: number
  chatConfigured: boolean
  leadsCount: number | null
  leadsStorageConfigured: boolean
}

export function getStaticSiteStats(): Omit<
  SiteStatsSnapshot,
  'leadsCount' | 'leadsStorageConfigured'
> {
  const galleryProjectsCount = beforeAfterGalleryItems.length
  const galleryPhotoSlotsCount = beforeAfterGalleryItems.reduce((acc, item) => {
    let n = 0
    if (item.beforeImage) n += 1
    if (item.afterImage) n += 1
    return acc + n
  }, 0)

  return {
    reviewsCount: manualReviews.length,
    galleryProjectsCount,
    galleryPhotoSlotsCount,
    chatContactsCount: 0,
    chatConfigured: false,
  }
}

/** Count booking rows when DATABASE_URL (Neon) is configured and table exists. */
export async function getBookingLeadsCount(): Promise<number | null> {
  const url = process.env.DATABASE_URL
  if (!url) {
    return null
  }

  try {
    const { neon } = await import('@neondatabase/serverless')
    const sql = neon(url)
    const rows = await sql`SELECT count(*)::int AS c FROM booking_leads`
    const row = rows[0] as { c: number | string } | undefined
    return Number(row?.c ?? 0)
  } catch (e) {
    console.error('getBookingLeadsCount:', e)
    return null
  }
}

export async function getFullSiteStats(): Promise<SiteStatsSnapshot> {
  const staticPart = getStaticSiteStats()
  const leadsCount = await getBookingLeadsCount()

  return {
    ...staticPart,
    leadsCount,
    leadsStorageConfigured: Boolean(process.env.DATABASE_URL),
  }
}
