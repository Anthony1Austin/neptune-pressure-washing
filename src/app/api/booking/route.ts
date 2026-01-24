import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import type { BookingFormData } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const data: BookingFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.service || !data.address) {
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
    const to = process.env.RESEND_TO_EMAIL || 'neptunepwcllc@gmail.com'

    await resend.emails.send({
      from,
      to,
      subject: `New Booking Request: ${data.service}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Preferred Date:</strong> ${data.preferredDate || 'Not specified'}</p>
        <p><strong>Preferred Time:</strong> ${data.preferredTime || 'Not specified'}</p>
        <p><strong>Message:</strong> ${data.message || 'None'}</p>
      `,
    })

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
