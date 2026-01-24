import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: 'Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID' },
      { status: 400 }
    )
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total,name&key=${apiKey}`

  try {
    const res = await fetch(url, { cache: 'no-store' })
    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch Google reviews' }, { status: 500 })
  }
}
