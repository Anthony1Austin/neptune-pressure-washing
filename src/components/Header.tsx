'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { sortedManualReviews } from '@/lib/reviews'
import { trackEvent } from '@/lib/gtag'
import { SocialLinks } from '@/components/SocialLinks'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const reviewSnippets = sortedManualReviews.map(
    (review) => `${review.highlight ?? `“${review.text}”`} — ${review.name}`
  )
  const showTicker = pathname === '/' && reviewSnippets.length > 0
  const tickerHeight = 36

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  const marqueeItems = [...reviewSnippets, ...reviewSnippets]

  return (
    <>
      {showTicker && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-neptune-dark-blue/95 text-white text-sm">
          <div className="overflow-hidden border-b border-white/10">
            <div className="marquee py-2">
              {marqueeItems.map((text, index) => (
                <span key={index} className="marquee-item">
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <header
        style={{ top: showTicker ? `${tickerHeight}px` : '0px' }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 overflow-hidden relative bg-[url('/images/hongwei-fan-abBfg-mwKfA-unsplash.jpg')] bg-cover bg-center ${
          isScrolled
            ? 'before:bg-neptune-dark-blue/95 backdrop-blur-md shadow-lg'
            : 'before:bg-neptune-dark-blue/80'
        } before:content-[''] before:absolute before:inset-0 before:z-0`}
      >
        <nav className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 ml-4">
              <div className="w-44 h-44 sm:w-48 sm:h-48 -my-8 sm:-my-10 flex items-center justify-center">
                <img
                  src="/images/image1.png"
                  alt="Neptune Pressure Washing logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-neptune-gold transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <SocialLinks variant="header" />
              <a
                href="tel:330-412-9330"
                onClick={() => trackEvent('click_phone', { location: 'header_desktop' })}
                className="bg-neptune-gold text-neptune-dark-blue px-6 py-2 rounded-full font-bold hover:bg-neptune-gold/90 transition-colors"
              >
              Call 330-412-9330
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4"
              >
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:text-neptune-gold transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="flex justify-center pt-2">
                    <SocialLinks
                      variant="header"
                      onNavigate={() => setIsMobileMenuOpen(false)}
                    />
                  </div>
                  <a
                    href="tel:330-412-9330"
                    onClick={() => trackEvent('click_phone', { location: 'header_mobile' })}
                    className="bg-neptune-gold text-neptune-dark-blue px-6 py-3 rounded-full font-bold text-center hover:bg-neptune-gold/90 transition-colors"
                  >
                    Call 330-412-9330
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  )
}
