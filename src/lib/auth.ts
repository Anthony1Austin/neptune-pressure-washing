import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { timingSafeEqual } from 'crypto'

function safeCompareStrings(a: string, b: string): boolean {
  try {
    const bufA = Buffer.from(a, 'utf8')
    const bufB = Buffer.from(b, 'utf8')
    if (bufA.length !== bufB.length) {
      return false
    }
    return timingSafeEqual(bufA, bufB)
  } catch {
    return false
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'admin' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null
        }

        const adminUser = process.env.ADMIN_USER
        const adminPassword = process.env.ADMIN_PASSWORD

        if (!adminUser || !adminPassword) {
          console.warn('ADMIN_USER or ADMIN_PASSWORD is not set; admin login disabled.')
          return null
        }

        const usernameOk = safeCompareStrings(
          credentials.username.trim(),
          adminUser.trim()
        )
        const passwordOk = safeCompareStrings(
          credentials.password.trim(),
          adminPassword.trim()
        )

        if (!usernameOk || !passwordOk) {
          return null
        }

        return { id: 'admin', name: adminUser.trim() }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.name) {
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = (token.name as string) ?? session.user.name
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
