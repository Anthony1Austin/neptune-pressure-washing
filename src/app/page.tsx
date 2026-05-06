import { Metadata } from 'next'
import InteractiveHouse from '@/components/InteractiveHouse'
import CTASection from '@/components/CTASection'
import TrustBadges from '@/components/TrustBadges'
import ProminentTrustBadges from '@/components/ProminentTrustBadges'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import FeaturedResults from '@/components/FeaturedResults'
import ServiceCard from '@/components/ServiceCard'
import { generateLocalBusinessSchema } from '@/lib/schema'
import { beforeAfterGalleryItems } from '@/lib/before-after-items'
import { featuredResults } from '@/lib/featured-results'

export const metadata: Metadata = {
  title: 'Professional Pressure Washing Services in Massillon, OH',
  description:
    'Neptune Pressure Washing offers residential and commercial exterior cleaning in Massillon, Ohio: house washing, roof cleaning, concrete, storefronts, campuses, and more. Licensed, insured, 100% satisfaction guaranteed. Free estimates!',
  keywords:
    'pressure washing massillon ohio, commercial pressure washing massillon ohio, house washing massillon, deck cleaning massillon, gutter cleaning massillon, roof washing massillon, storefront cleaning, building exterior cleaning, professional pressure washing',
  openGraph: {
    title: 'Neptune Pressure Washing - Professional Exterior Cleaning in Massillon, OH',
    description:
      'Residential and commercial pressure washing in Massillon, Ohio. Licensed, insured, and 100% satisfaction guaranteed.',
    url: 'https://www.neptunewashpros.com',
  },
}

const localBusinessSchema = generateLocalBusinessSchema({
  name: 'Neptune Pressure Washing',
  description:
    'Residential and commercial pressure washing and exterior cleaning in Massillon, Ohio and surrounding areas.',
  url: 'https://www.neptunewashpros.com',
  telephone: '+1-330-412-9330',
  email: 'neptunewashpros@gmail.com',
  address: {
    streetAddress: 'Massillon',
    addressLocality: 'Massillon',
    addressRegion: 'OH',
    postalCode: '44646',
    addressCountry: 'US',
  },
  openingHours: [
    'Mo-Su 09:00-21:00',
  ],
  priceRange: '$$',
  sameAs: [
    'https://www.facebook.com/profile.php?id=100063620580327',
    'https://www.yelp.com/biz/neptune-pressure-washing-massillon?osq=Neptune+Pressure+Washing',
  ],
})

const services = [
  {
    title: 'House Washing',
    description: 'Complete exterior house cleaning to restore your home\'s curb appeal and protect your investment.',
    href: '/services/house-wash',
    icon: '🏠',
  },
  {
    title: 'Gutter Cleaning',
    description: 'Keep your gutters clean and functional year-round to prevent water damage and maintain your home.',
    href: '/services/gutter-cleaning',
    icon: '🌊',
  },
  {
    title: 'Roof Washing',
    description: 'Professional roof cleaning to remove algae, moss, and debris, extending your roof\'s lifespan.',
    href: '/services/roof-washing',
    icon: '🏡',
  },
  {
    title: 'Deck Cleaning',
    description: 'Restore and protect your deck with professional cleaning and treatment services.',
    href: '/services/fences-decks',
    icon: '🪵',
  },
  {
    title: 'Driveway Cleaning',
    description: 'Transform your driveway with professional concrete cleaning and restoration.',
    href: '/services/concrete-cleaning',
    icon: '🚗',
  },
  {
    title: 'Patio Cleaning',
    description: 'Revitalize your outdoor living spaces with expert patio and deck cleaning.',
    href: '/services/patio-deck-cleaning',
    icon: '🌳',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section - House Image Background */}
      <section className="relative w-full text-white bg-neptune-dark-blue pb-2 sm:pb-0 sm:bg-gradient-to-b sm:from-[#c8b3d6] sm:via-[#d8c6e0] sm:to-[#c8b3d6]">
        <div className="w-full">
          <InteractiveHouse />
        </div>

        {/* Hero Text Overlay */}
        <div className="relative z-10 mt-6 md:mt-0 md:absolute md:top-0 md:left-0 md:right-0 md:z-30 pointer-events-none">
          <div className="container mx-auto px-4 pt-6 sm:pt-10 md:pt-16 text-center">
            <h1 className="mb-4 animate-fade-in text-3xl font-bold text-white drop-shadow-lg [text-shadow:0_2px_8px_rgba(15,31,53,0.55),0_4px_20px_rgba(15,31,53,0.35)] sm:text-4xl md:text-6xl">
              Expert Power Cleaning
            </h1>
            <div className="mx-auto mb-0 flex max-w-3xl flex-col items-center gap-3 sm:mb-6 sm:gap-4">
              <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.28em] text-neptune-gold [text-shadow:0_0_2px_rgba(15,31,53,1),0_0_4px_rgba(15,31,53,0.85),0_1px_0_rgba(15,31,53,0.95),0_2px_4px_rgba(15,31,53,0.95),0_3px_10px_rgba(15,31,53,0.8),0_4px_20px_rgba(15,31,53,0.55)] sm:text-xs md:text-sm">
                Residential & commercial · exterior cleaning
              </p>
              <div className="flex flex-col gap-0.5 text-center leading-snug sm:gap-1">
                <p className="text-base font-normal text-white [text-shadow:0_1px_3px_rgba(15,31,53,0.75),0_2px_12px_rgba(15,31,53,0.4)] sm:text-lg md:text-xl">
                  Revitalize your property with <span className="font-bold">professional,</span>
                </p>
                <p className="text-base font-normal text-white [text-shadow:0_1px_3px_rgba(15,31,53,0.75),0_2px_12px_rgba(15,31,53,0.4)] sm:text-lg md:text-xl">
                  <span className="font-bold">eco-friendly</span> pressure washing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Independent Background */}
      <section className="relative text-center bg-neptune-dark-blue py-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/hongwei-fan-abBfg-mwKfA-unsplash.jpg')] bg-cover bg-center"
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-neptune-dark-blue/70" aria-hidden="true"></div>

        <div className="relative z-10">
          <p className="hidden sm:block text-white text-lg mb-4 font-medium">
            Click any service above to learn more, or get a free quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-neptune-blue hover:bg-neptune-dark-blue text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Free Quote
            </a>
            <a
              href="tel:330-412-9330"
              className="bg-neptune-gold hover:bg-neptune-gold/90 text-neptune-dark-blue font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Call or Text 330-412-9330
            </a>
          </div>
        </div>
      </section>

      {/* Prominent Trust Badges */}
      <ProminentTrustBadges />

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neptune-dark-blue mb-4">
              Complete Exterior Cleaning Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From house washing to deck restoration, we handle homes plus commercial sites — retail, offices, healthcare
              campuses, HOAs, and multi-building properties throughout the area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.description}
                href={service.href}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <BeforeAfterGallery items={beforeAfterGalleryItems} />

      {/* Featured Finished Results */}
      <FeaturedResults items={featuredResults} />

      {/* Why Choose Us */}
      <TrustBadges />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
