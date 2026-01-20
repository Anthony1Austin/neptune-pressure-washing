import { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import BookingForm from '@/components/BookingForm'
import { getKeywordsForService } from '@/lib/keywords'
import { generateServiceSchema } from '@/lib/schema'
import { serviceAreas } from '@/lib/keywords'

export const metadata: Metadata = {
  title: 'Soft Washing Services in Massillon, OH | Gentle Pressure Washing',
  description: 'Professional soft washing services in Massillon, Ohio. Gentle, effective cleaning for delicate surfaces. Free estimates!',
  keywords: getKeywordsForService('soft-washing').join(', '),
}

const serviceSchema = generateServiceSchema({
  name: 'Soft Washing Service',
  description: 'Professional soft washing services in Massillon, Ohio. Gentle, effective cleaning for delicate surfaces.',
  provider: { name: 'Neptune Pressure Washing', url: 'https://www.neptunewashpros.com' },
  areaServed: serviceAreas,
  serviceType: 'Soft Washing',
})

export default function SoftWashingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <section className="bg-gradient-to-br from-neptune-blue to-neptune-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Soft Washing Services in Massillon, OH</h1>
            <p className="text-xl mb-8 text-gray-200">Gentle, effective cleaning for delicate surfaces using low-pressure soft wash technology.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="bg-neptune-gold hover:bg-neptune-gold/90 text-neptune-dark-blue font-bold py-4 px-8 rounded-full">Get Free Quote</a>
              <a href="tel:330-412-9330" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-neptune-blue">Call 330-412-9330</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6">What is Soft Washing?</h2>
            <p className="text-gray-700 mb-6 text-lg">Soft washing uses low pressure (under 500 PSI) combined with specialized cleaning solutions to safely clean delicate surfaces like roofs, siding, and painted surfaces.</p>
            <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">When to Use Soft Washing</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
              <li>Roof cleaning</li>
              <li>Delicate siding materials</li>
              <li>Painted surfaces</li>
              <li>Areas where high pressure could cause damage</li>
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
