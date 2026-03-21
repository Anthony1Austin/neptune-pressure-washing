import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

const isPreview = process.env.VERCEL_ENV === 'preview'
const authUser = process.env.BASIC_AUTH_USER
const authPass = process.env.BASIC_AUTH_PASS

async function requireAdminSession(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })
    if (!token) {
      const login = new URL('/admin/login', request.url)
      login.searchParams.set('callbackUrl', pathname)
      return NextResponse.redirect(login)
    }
  }
  return NextResponse.next()
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // NextAuth must not sit behind preview Basic Auth (browser won't send credentials on form POST)
  if (pathname.startsWith('/api/auth')) {
    return requireAdminSession(request)
  }

  if (isPreview && authUser && authPass) {
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
  }

  return requireAdminSession(request)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
