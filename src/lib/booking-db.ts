import type { BookingFormData } from '@/types'

/**
 * Persist booking to Neon when DATABASE_URL is set and `booking_leads` table exists.
 * Failures are logged; returns false so the API can still succeed if email was sent.
 */
export async function insertBookingLead(data: BookingFormData): Promise<boolean> {
  const url = process.env.DATABASE_URL
  if (!url) {
    return false
  }

  try {
    const { neon } = await import('@neondatabase/serverless')
    const sql = neon(url)
    await sql`
      INSERT INTO booking_leads (
        name,
        email,
        phone,
        service,
        address,
        preferred_date,
        preferred_time,
        message
      )
      VALUES (
        ${data.name},
        ${data.email},
        ${data.phone},
        ${data.service},
        ${data.address},
        ${data.preferredDate ?? null},
        ${data.preferredTime ?? null},
        ${data.message ?? null}
      )
    `
    return true
  } catch (e) {
    console.error('insertBookingLead:', e)
    return false
  }
}
