import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import type { BookingFormData } from '@/types'
import { insertBookingLead } from '@/lib/booking-db'
import { getRequestClientIp } from '@/lib/request-client-ip'
import { verifyTurnstileToken } from '@/lib/verify-turnstile'

export async function POST(request: NextRequest) {
  try {
    const data: BookingFormData = await request.json()

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
    if (turnstileSecret) {
      const token = data.turnstileToken
      if (!token || typeof token !== 'string') {
        return NextResponse.json(
          { error: 'Verification required' },
          { status: 400 }
        )
      }
      const ip = getRequestClientIp(request)
      const ok = await verifyTurnstileToken(token, ip)
      if (!ok) {
        return NextResponse.json(
          { error: 'Verification failed' },
          { status: 400 }
        )
      }
    }

    const { turnstileToken: _t, ...lead } = data

    // Validate required fields
    if (
      !lead.name ||
      !lead.email ||
      !lead.phone ||
      !lead.propertyType ||
      !lead.service ||
      !lead.address
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY is not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
    const to = process.env.RESEND_TO_EMAIL || 'neptunewashpros@gmail.com'

    await resend.emails.send({
      from,
      to,
      subject: `New Booking Request: ${lead.service}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Phone:</strong> ${lead.phone}</p>
        <p><strong>Property type:</strong> ${lead.propertyType}</p>
        <p><strong>Service:</strong> ${lead.service}</p>
        <p><strong>Address:</strong> ${lead.address}</p>
        <p><strong>Preferred Date:</strong> ${lead.preferredDate || 'Not specified'}</p>
        <p><strong>Preferred Time:</strong> ${lead.preferredTime || 'Not specified'}</p>
        <p><strong>Message:</strong> ${lead.message || 'None'}</p>
      `,
    })

    await insertBookingLead(lead)

    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Booking request received. We will contact you soon!' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Booking request error:', error)
    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    )
  }
}
