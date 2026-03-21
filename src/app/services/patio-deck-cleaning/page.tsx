import { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import BookingForm from '@/components/BookingForm'
import { getKeywordsForService } from '@/lib/keywords'
import { generateServiceSchema } from '@/lib/schema'
import { serviceAreas } from '@/lib/keywords'

export const metadata: Metadata = {
  title: 'Patio & Deck Cleaning Services',
  description: 'Professional patio and deck cleaning services in Massillon, Ohio. Transform your outdoor living spaces. Free estimates!',
  keywords: getKeywordsForService('patio-deck-cleaning').join(', '),
}

const serviceSchema = generateServiceSchema({
  name: 'Patio & Deck Cleaning Service',
  description: 'Professional patio and deck cleaning services in Massillon, Ohio.',
  provider: { name: 'Neptune Pressure Washing', url: 'https://www.neptunewashpros.com' },
  areaServed: serviceAreas,
  serviceType: 'Patio & Deck Cleaning',
})

export default function PatioDeckCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <section className="bg-gradient-to-br from-neptune-blue to-neptune-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Patio & Deck Cleaning Services</h1>
            <p className="text-xl mb-8 text-gray-200">Transform your outdoor living spaces with expert patio and deck cleaning.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="bg-neptune-gold hover:bg-neptune-gold/90 text-neptune-dark-blue font-bold py-4 px-8 rounded-full">Get Free Quote</a>
              <a href="tel:330-412-9330" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-neptune-blue">Call or Text 330-412-9330</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6">Professional Patio & Deck Cleaning</h2>
            <p className="text-gray-700 mb-6 text-lg">Revitalize your outdoor living spaces with our expert cleaning services.</p>
            <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">What We Include</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
              <li>Complete patio and deck surface cleaning</li>
              <li>Mold, mildew, and algae removal</li>
              <li>Stain removal</li>
              <li>Safe cleaning for all materials</li>
            </ul>
            <p className="text-gray-700 mb-6"><strong>Contact us for a free estimate!</strong></p>
          </div>
        </div>
      </section>
      <section id="quote" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-neptune-dark-blue mb-4">Get Your Free Quote</h2>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
