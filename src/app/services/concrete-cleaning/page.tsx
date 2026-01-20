import { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import BookingForm from '@/components/BookingForm'
import { getKeywordsForService, primaryKeywords } from '@/lib/keywords'
import { generateServiceSchema } from '@/lib/schema'
import { serviceAreas } from '@/lib/keywords'

export const metadata: Metadata = {
  title: 'Professional Concrete Cleaning Services in Massillon, OH | Driveway Pressure Washing',
  description: 'Expert concrete and driveway cleaning services in Massillon, Ohio. Remove oil stains, dirt, and grime. Restore your concrete surfaces. Free estimates!',
  keywords: getKeywordsForService('concrete-cleaning').join(', ') + ', ' + primaryKeywords.concrete + ', ' + primaryKeywords.driveway,
  openGraph: {
    title: 'Professional Concrete Cleaning Services in Massillon, OH',
    description: 'Expert driveway and concrete cleaning to restore your surfaces. Free estimates!',
  },
}

const serviceSchema = generateServiceSchema({
  name: 'Concrete Cleaning Service',
  description: 'Professional concrete and driveway cleaning services in Massillon, Ohio. Remove stains, dirt, and restore your concrete surfaces.',
  provider: {
    name: 'Neptune Pressure Washing',
    url: 'https://www.neptunewashpros.com',
  },
  areaServed: serviceAreas,
  serviceType: 'Concrete Cleaning',
})

export default function ConcreteCleaningPage() {
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
              Professional Concrete Cleaning Services in Massillon, OH
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Transform your driveway, sidewalks, and concrete surfaces with our professional cleaning services. Remove oil stains, dirt, grime, and restore your concrete to like-new condition.
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
                Call 330-412-9330
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
                What is Concrete Cleaning?
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Concrete cleaning uses specialized pressure washing techniques and cleaning solutions to remove stains, dirt, grime, oil, and other contaminants from concrete surfaces. This service restores your driveway, sidewalks, patios, and other concrete areas to their original appearance.
              </p>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                What We Clean
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">Driveways</h3>
                  <p className="text-gray-700">Remove oil stains, tire marks, and years of dirt buildup</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">Sidewalks</h3>
                  <p className="text-gray-700">Clean walkways for safety and appearance</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">Patios</h3>
                  <p className="text-gray-700">Restore outdoor living spaces</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">Pool Decks</h3>
                  <p className="text-gray-700">Remove algae, mold, and slippery buildup</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                Common Stains We Remove
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>Oil and grease stains</li>
                <li>Tire marks</li>
                <li>Dirt and mud</li>
                <li>Algae and moss</li>
                <li>Mold and mildew</li>
                <li>Rust stains</li>
                <li>Paint spills</li>
                <li>Chewing gum</li>
                <li>Food and beverage stains</li>
              </ul>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                Our Process
              </h2>
              <ol className="list-decimal pl-6 space-y-4 text-gray-700 mb-8">
                <li><strong>Inspection:</strong> We assess the condition and identify problem areas</li>
                <li><strong>Pre-treatment:</strong> We apply specialized cleaning solutions to break down stains</li>
                <li><strong>Pressure Washing:</strong> We use appropriate pressure to clean without damaging concrete</li>
                <li><strong>Stain Treatment:</strong> We treat stubborn stains with specialized products</li>
                <li><strong>Final Rinse:</strong> We thoroughly rinse all surfaces</li>
                <li><strong>Inspection:</strong> We ensure all areas meet our high standards</li>
              </ol>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                Benefits
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>Restores curb appeal and property value</li>
                <li>Removes slippery algae and mold for safety</li>
                <li>Prevents permanent staining</li>
                <li>Extends the life of your concrete</li>
                <li>Improves overall property appearance</li>
              </ul>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                Pricing
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                Concrete cleaning pricing depends on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Square footage of concrete</li>
                <li>Type and severity of stains</li>
                <li>Accessibility</li>
                <li>Additional treatments needed</li>
              </ul>
              <p className="text-gray-700 mb-6">
                <strong>Contact us for a free estimate!</strong>
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
                Get Your Free Concrete Cleaning Quote
              </h2>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
