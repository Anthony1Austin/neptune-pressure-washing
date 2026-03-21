'use client'

import { FaFacebookF, FaGoogle, FaYelp } from 'react-icons/fa'
import { GOOGLE_REVIEWS_URL } from '@/lib/google-reviews-url'
import { trackEvent } from '@/lib/gtag'

const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/profile.php?id=100063620580327',
    label: 'Facebook',
    network: 'facebook',
    Icon: FaFacebookF,
  },
  {
    href: GOOGLE_REVIEWS_URL,
    label: 'Google reviews',
    network: 'google_reviews',
    Icon: FaGoogle,
  },
  {
    href: 'https://www.yelp.com/biz/neptune-pressure-washing-massillon?osq=Neptune+Pressure+Washing',
    label: 'Yelp',
    network: 'yelp',
    Icon: FaYelp,
  },
] as const

const variantStyles = {
  header:
    'flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-neptune-gold hover:text-neptune-dark-blue',
  footer:
    'flex h-10 w-10 items-center justify-center rounded-full bg-neptune-blue text-white transition-colors hover:bg-neptune-gold hover:text-neptune-dark-blue',
} as const

type SocialLinksProps = {
  variant: keyof typeof variantStyles
  className?: string
  onNavigate?: () => void
}

export function SocialLinks({ variant, className = '', onNavigate }: SocialLinksProps) {
  const linkClass = variantStyles[variant]
  const gapClass = variant === 'footer' ? 'gap-4' : 'gap-2'

  return (
    <div className={`flex items-center ${gapClass} ${className}`.trim()}>
      {SOCIAL_LINKS.map(({ href, label, network, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackEvent('click_social', {
              network,
              location: variant,
            })
            onNavigate?.()
          }}
          aria-label={label}
          className={linkClass}
        >
          <Icon className="h-[18px] w-[18px]" aria-hidden />
        </a>
      ))}
    </div>
  )
}
