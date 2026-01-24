import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const isPreview = process.env.VERCEL_ENV === 'preview'
const authUser = process.env.BASIC_AUTH_USER
const authPass = process.env.BASIC_AUTH_PASS

export function middleware(request: NextRequest) {
  if (!isPreview) {
    return NextResponse.next()
  }

  if (!authUser || !authPass) {
    return NextResponse.next()
  }

  const authHeader = request.headers.get('authorization')
  if (!authHeader?.startsWith('Basic ')) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Preview"',
      },
    })
  }

  const encoded = authHeader.replace('Basic ', '')
  const decoded = Buffer.from(encoded, 'base64').toString('utf-8')
  const [user, pass] = decoded.split(':')

  if (user !== authUser || pass !== authPass) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Preview"',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
