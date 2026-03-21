import { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import BookingForm from '@/components/BookingForm'
import { getKeywordsForService, primaryKeywords } from '@/lib/keywords'
import { generateServiceSchema } from '@/lib/schema'
import { serviceAreas } from '@/lib/keywords'

export const metadata: Metadata = {
  title: 'Professional Roof Washing Services | Soft Wash Roof Cleaning',
  description: 'Expert roof washing and cleaning services in Massillon, Ohio. Remove algae, moss, and debris to extend your roof\'s lifespan. Soft wash technology. Licensed & insured.',
  keywords: getKeywordsForService('roof-washing').join(', ') + ', ' + primaryKeywords.roof,
  openGraph: {
    title: 'Professional Roof Washing Services',
    description: 'Expert roof cleaning to protect and extend your roof\'s life. Free estimates!',
  },
}

const serviceSchema = generateServiceSchema({
  name: 'Roof Washing Service',
  description: 'Professional roof washing and cleaning services in Massillon, Ohio. Remove algae, moss, and debris using safe soft wash technology.',
  provider: {
    name: 'Neptune Pressure Washing',
    url: 'https://www.neptunewashpros.com',
  },
  areaServed: serviceAreas,
  serviceType: 'Roof Washing',
})

export default function RoofWashingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="bg-gradient-to-br from-neptune-blue to-neptune-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Roof Washing Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Extend your roof's lifespan and restore its appearance with our professional roof washing services. We use safe soft wash technology to remove algae, moss, and debris without damaging your shingles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#quote"
                className="bg-neptune-gold hover:bg-neptune-gold/90 text-neptune-dark-blue font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Free Quote
              </a>
              <a
                href="tel:330-412-9330"
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-neptune-blue transition-all duration-300"
              >
                Call or Text 330-412-9330
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6">
                What is Roof Washing?
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Roof washing is a specialized cleaning service that removes algae, moss, lichen, dirt, and debris from your roof. Unlike high-pressure washing that can damage shingles, we use soft wash technology that safely and effectively cleans your roof without causing harm.
              </p>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                Why Roof Cleaning is Important
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">Extends Roof Life</h3>
                  <p className="text-gray-700">
                    Algae and moss can break down roofing materials over time. Regular cleaning extends your roof's lifespan.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">Improves Curb Appeal</h3>
                  <p className="text-gray-700">
                    A clean roof dramatically improves your home's appearance and can increase property value.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">Prevents Damage</h3>
                  <p className="text-gray-700">
                    Organic growth can trap moisture and cause shingle deterioration, leading to leaks and costly repairs.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">Energy Efficiency</h3>
                  <p className="text-gray-700">
                    A clean roof reflects sunlight better, helping to keep your home cooler and reduce energy costs.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                Our Soft Wash Technology
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                We use <strong>soft wash technology</strong>, which is the industry standard for roof cleaning. This method:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>Uses low pressure (under 500 PSI) to protect your shingles</li>
                <li>Applies eco-friendly cleaning solutions that kill algae and moss at the root</li>
                <li>Prevents regrowth for up to 2-3 years with proper treatment</li>
                <li>Is safe for all roofing materials including asphalt shingles, tile, and metal</li>
                <li>Protects your landscaping from overspray</li>
              </ul>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                What We Include
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>Complete roof surface cleaning</li>
                <li>Algae, moss, and lichen removal</li>
                <li>Debris removal from roof valleys and gutters</li>
                <li>Eco-friendly cleaning solution application</li>
                <li>Gentle low-pressure rinse</li>
                <li>Protection of landscaping and property</li>
                <li>Roof inspection for damage or needed repairs</li>
              </ul>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                How Often Should You Clean Your Roof?
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                Most roofs benefit from cleaning every 2-3 years, but this depends on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Tree coverage and shade around your home</li>
                <li>Climate and humidity levels</li>
                <li>Roof orientation (north-facing roofs need more frequent cleaning)</li>
                <li>Visible signs of algae or moss growth</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
                <p className="text-neptune-dark-blue font-semibold">
                  ⚠️ Warning: Never use high-pressure washing on your roof! It can void warranties, damage shingles, and cause leaks. Always use soft wash technology.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                Pricing
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                Roof washing pricing is based on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Roof square footage</li>
                <li>Roof pitch and accessibility</li>
                <li>Level of algae/moss growth</li>
                <li>Roofing material type</li>
              </ul>
              <p className="text-gray-700 mb-6">
                <strong>Contact us for a free estimate!</strong> We'll provide a detailed quote after inspecting your roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-neptune-dark-blue mb-4">
                Get Your Free Roof Washing Quote
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll contact you within 24 hours
              </p>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      <CTASection
        title="Protect Your Investment with Professional Roof Cleaning"
        description="Extend your roof's life and improve your home's appearance. Get a free quote today!"
      />
    </>
  )
}
