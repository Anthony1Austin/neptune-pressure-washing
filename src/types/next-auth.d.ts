import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      name?: string | null
      email?: string | null
    }
  }

  interface User {
    name?: string | null
    email?: string | null
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    name?: string
    email?: string
  }
}
