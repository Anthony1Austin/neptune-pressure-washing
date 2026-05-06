import { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'All Pressure Washing Services',
  description:
    'Residential and commercial pressure washing in Massillon, Ohio: house washing, roof cleaning, concrete, storefronts, campuses, and more from Neptune Pressure Washing.',
  keywords:
    'pressure washing services massillon ohio, commercial pressure washing, house washing, roof cleaning, deck cleaning, gutter cleaning, concrete cleaning, building exterior cleaning, patio cleaning',
}

const allServices = [
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
    title: 'Concrete Cleaning',
    description: 'Transform your driveway, sidewalks, and concrete surfaces with professional cleaning.',
    href: '/services/concrete-cleaning',
    icon: '🚗',
  },
  {
    title: 'Fences & Decks',
    description: 'Restore and protect your fences and decks with professional cleaning and treatment services.',
    href: '/services/fences-decks',
    icon: '🪵',
  },
  {
    title: 'Brick Cleaning',
    description: 'Expert brick and stone surface cleaning to restore your home\'s beautiful brickwork.',
    href: '/services/brick-cleaning',
    icon: '🧱',
  },
  {
    title: 'Patio & Deck Cleaning',
    description: 'Revitalize your outdoor living spaces with expert patio and deck cleaning.',
    href: '/services/patio-deck-cleaning',
    icon: '🌳',
  },
  {
    title: 'Soft Washing',
    description: 'Gentle, effective cleaning for delicate surfaces using low-pressure soft wash technology.',
    href: '/services/soft-washing',
    icon: '💧',
  },
  {
    title: 'Power Washing',
    description: 'High-intensity power washing for tough cleaning jobs on durable surfaces.',
    href: '/services/power-washing',
    icon: '⚡',
  },
  {
    title: 'Sidewalk Cleaning',
    description: 'Professional sidewalk cleaning to improve safety and appearance of your walkways.',
    href: '/services/sidewalk-cleaning',
    icon: '🚶',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-neptune-blue to-neptune-dark-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Professional Pressure Washing Services
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Comprehensive exterior cleaning for homes, businesses, retail, healthcare and office campuses, HOAs, and
            multi-site properties in Massillon, Ohio and surrounding areas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Whether you need a single-family home or a commercial facility maintained, the same licensed, insured team
            delivers consistent results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 text-center">
              Why Choose Neptune Pressure Washing?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-neptune-blue mb-2">Licensed & Insured</h3>
                <p className="text-gray-700">Fully licensed and insured for your protection</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-neptune-blue mb-2">100% Satisfaction</h3>
                <p className="text-gray-700">We guarantee your satisfaction or your money back</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-neptune-blue mb-2">Eco-Friendly</h3>
                <p className="text-gray-700">Safe cleaning solutions for your family and pets</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-neptune-blue mb-2">Free Estimates</h3>
                <p className="text-gray-700">No obligation, free quotes for all services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Contact us today for a free estimate on any of our services!"
      />
    </>
  )
}
