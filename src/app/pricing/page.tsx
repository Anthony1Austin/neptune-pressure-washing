import { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import BookingForm from '@/components/BookingForm'

export const metadata: Metadata = {
  title: 'Pressure Washing Pricing Guide | Massillon, OH | Free Estimates',
  description: 'Transparent pricing guide for pressure washing services in Massillon, Ohio. Get free estimates for house washing, deck cleaning, roof washing, and more.',
  keywords: 'pressure washing prices massillon ohio, pressure washing cost, house washing prices, deck cleaning cost',
}

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-neptune-blue to-neptune-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl md:pl-4 lg:pl-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing Guide</h1>
            <p className="text-xl mb-8 text-gray-200">
              Transparent pricing for all our pressure washing services. Free estimates available!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6">Our Pricing Philosophy</h2>
              <p className="text-gray-700 mb-6 text-lg">
                We believe in fair, transparent pricing. Every project is unique, so we provide personalized quotes based on your specific needs. All estimates are free with no obligation.
              </p>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">Pricing Factors</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Several factors influence pricing for pressure washing services:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li><strong>Size:</strong> Square footage of the area to be cleaned</li>
                <li><strong>Surface Type:</strong> Different materials require different techniques</li>
                <li><strong>Condition:</strong> Level of dirt, stains, and organic growth</li>
                <li><strong>Accessibility:</strong> Ease of access to the cleaning area</li>
                <li><strong>Additional Services:</strong> Extra treatments or services requested</li>
              </ul>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">General Price Ranges</h2>
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-neptune-gold">
                  <h3 className="font-bold text-xl text-neptune-dark-blue mb-2">House Washing</h3>
                  <p className="text-gray-700 mb-2">Small homes (under 1,500 sq ft): Starting at $150</p>
                  <p className="text-gray-700 mb-2">Medium homes (1,500-2,500 sq ft): $200-$350</p>
                  <p className="text-gray-700">Large homes (2,500+ sq ft): $350-$500+</p>
                  <p className="text-sm text-gray-500 mt-2">*Pricing varies based on home size, condition, and accessibility</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-neptune-gold">
                  <h3 className="font-bold text-xl text-neptune-dark-blue mb-2">Deck Cleaning</h3>
                  <p className="text-gray-700 mb-2">Small decks (under 200 sq ft): Starting at $100</p>
                  <p className="text-gray-700 mb-2">Medium decks (200-400 sq ft): $150-$250</p>
                  <p className="text-gray-700">Large decks (400+ sq ft): $250-$400+</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-neptune-gold">
                  <h3 className="font-bold text-xl text-neptune-dark-blue mb-2">Driveway Cleaning</h3>
                  <p className="text-gray-700 mb-2">Single car driveway: Starting at $75</p>
                  <p className="text-gray-700 mb-2">Double car driveway: $100-$200</p>
                  <p className="text-gray-700">Large driveways: $200-$350+</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-neptune-gold">
                  <h3 className="font-bold text-xl text-neptune-dark-blue mb-2">Gutter Cleaning</h3>
                  <p className="text-gray-700 mb-2">Single story: Starting at $100</p>
                  <p className="text-gray-700 mb-2">Two story: $150-$250</p>
                  <p className="text-gray-700">Three story+: $250-$400+</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-neptune-gold">
                  <h3 className="font-bold text-xl text-neptune-dark-blue mb-2">Roof Washing</h3>
                  <p className="text-gray-700 mb-2">Small roofs (under 1,500 sq ft): Starting at $200</p>
                  <p className="text-gray-700 mb-2">Medium roofs (1,500-2,500 sq ft): $300-$500</p>
                  <p className="text-gray-700">Large roofs (2,500+ sq ft): $500-$800+</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
                <p className="text-neptune-dark-blue font-semibold">
                  ⚠️ These are general price ranges. Actual pricing may vary based on your specific project. Contact us for a free, personalized estimate!
                </p>
              </div>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">What's Included</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>Professional cleaning service</li>
                <li>Eco-friendly cleaning solutions</li>
                <li>Protection of landscaping and property</li>
                <li>Complete cleanup</li>
                <li>100% satisfaction guarantee</li>
              </ul>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">Payment Options</h2>
              <p className="text-gray-700 mb-4 text-lg">
                We accept various payment methods for your convenience:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>Cash</li>
                <li>Check</li>
                <li>Credit/Debit Cards</li>
                <li>Digital payment options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-neptune-dark-blue mb-4">
                Get Your Free Estimate
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll provide a personalized quote for your project
              </p>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Contact us today for a free, no-obligation estimate on any of our services!"
      />
    </>
  )
}
