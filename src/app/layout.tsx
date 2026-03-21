import type { Metadata } from 'next'
import { Merriweather, Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from '@/components/Providers'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { generateOrganizationSchema } from '@/lib/schema'

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '700'],
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Neptune Pressure Washing - Professional Exterior Cleaning in Massillon, OH',
    template: '%s | Neptune Pressure Washing',
  },
  description: 'Professional pressure washing services in Massillon, Ohio. House washing, roof cleaning, deck restoration, and more. Licensed, insured, and 100% satisfaction guaranteed. Free estimates!',
  keywords: 'pressure washing massillon ohio, house washing, deck cleaning, gutter cleaning, roof washing, power washing massillon',
  authors: [{ name: 'Neptune Pressure Washing' }],
  creator: 'Neptune Pressure Washing',
  publisher: 'Neptune Pressure Washing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.neptunewashpros.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.neptunewashpros.com',
    title: 'Neptune Pressure Washing - Professional Exterior Cleaning in Massillon, OH',
    description: 'Professional pressure washing services in Massillon, Ohio. Licensed, insured, and 100% satisfaction guaranteed.',
    siteName: 'Neptune Pressure Washing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neptune Pressure Washing - Professional Exterior Cleaning',
    description: 'Professional pressure washing services in Massillon, Ohio.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = generateOrganizationSchema()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${openSans.className} ${merriweather.variable} ${openSans.variable} overflow-x-hidden`}>
        <GoogleAnalytics />
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
