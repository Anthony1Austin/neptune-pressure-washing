import type { Metadata } from 'next'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { authOptions } from '@/lib/auth'
import { getFullSiteStats } from '@/lib/admin-stats'
import { SignOutButton } from '@/components/admin/SignOutButton'

export const metadata: Metadata = {
  title: 'Analytics dashboard',
}

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/admin/login')
  }

  const stats = await getFullSiteStats()

  const cards = [
    { label: 'Reviews (on site)', value: stats.reviewsCount, hint: 'From manual reviews list' },
    { label: 'Gallery projects', value: stats.galleryProjectsCount, hint: 'Before/after entries' },
    { label: 'Gallery photo slots', value: stats.galleryPhotoSlotsCount, hint: 'Before + after images' },
    {
      label: 'Booking / contact leads',
      value: stats.leadsCount === null ? '—' : stats.leadsCount,
      hint: stats.leadsStorageConfigured
        ? 'Stored in database (Neon)'
        : 'Add DATABASE_URL + run scripts/booking-leads.sql to track',
    },
    {
      label: 'Chat contacts',
      value: stats.chatContactsCount,
      hint: stats.chatConfigured ? 'Live chat connected' : 'Add chat + webhook later to count',
    },
  ]

  return (
    <div className="min-h-[70vh] bg-slate-950 text-white py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold">Analytics &amp; stats</h1>
            <p className="text-slate-400 mt-1">
              Signed in as {session.user?.name ?? session.user?.email ?? 'admin'}
            </p>
          </div>
          <SignOutButton />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {cards.map((card) => (
            <div
              key={card.label}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg"
            >
              <p className="text-sm text-slate-400 font-medium">{card.label}</p>
              <p className="text-3xl font-bold text-neptune-gold mt-2">{card.value}</p>
              <p className="text-xs text-slate-500 mt-2">{card.hint}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
          <h2 className="text-xl font-bold">Traffic &amp; behavior</h2>
          <p className="text-slate-400 text-sm">
            Visitor analytics are handled by <strong>Vercel Analytics</strong> (enabled on this site) and
            optionally <strong>Google Analytics 4</strong> when you set{' '}
            <code className="text-neptune-gold">NEXT_PUBLIC_GA_MEASUREMENT_ID</code> in Vercel.
          </p>
          <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
            <li>
              In GA4, mark key events: <code className="text-slate-400">click_phone</code>,{' '}
              <code className="text-slate-400">generate_lead</code> (after successful booking).
            </li>
            <li>
              Vercel: open your project → <strong>Analytics</strong> for Web Vitals and page views.
            </li>
          </ul>
          <p className="text-sm text-slate-500 pt-2">
            <Link href="/" className="text-neptune-gold hover:underline">
              ← Back to website
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
