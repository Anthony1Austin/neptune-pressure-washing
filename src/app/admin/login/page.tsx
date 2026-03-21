'use client'

import { signIn } from 'next-auth/react'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

function LoginForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/admin'

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await signIn('credentials', {
        username,
        password,
        redirect: false,
      })
      if (res?.error) {
        setError('Invalid username or password.')
        setLoading(false)
        return
      }
      window.location.href = callbackUrl
    } catch {
      setError('Something went wrong. Try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-slate-950 text-white">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-2">Admin sign in</h1>
        <p className="text-slate-400 text-sm text-center mb-8">
          Analytics dashboard — authorized users only
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neptune-gold"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neptune-gold"
            />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-neptune-gold py-3 font-bold text-neptune-dark-blue hover:bg-neptune-gold/90 disabled:opacity-50"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">
          <Link href="/" className="text-neptune-gold hover:underline">
            ← Back to site
          </Link>
        </p>
      </div>
    </div>
  )
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center bg-slate-950 text-slate-400">
          Loading…
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  )
}
