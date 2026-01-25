import { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import BookingForm from '@/components/BookingForm'
import { getKeywordsForService, primaryKeywords } from '@/lib/keywords'
import { generateServiceSchema } from '@/lib/schema'
import { serviceAreas } from '@/lib/keywords'

export const metadata: Metadata = {
  title: 'Professional Gutter Cleaning Services | Free Estimates',
  description: 'Expert gutter cleaning services in Massillon, Ohio. Keep your gutters clean and functional year-round. Prevent water damage and maintain your home. Licensed & insured.',
  keywords: getKeywordsForService('gutter-cleaning').join(', ') + ', ' + primaryKeywords.gutter,
  openGraph: {
    title: 'Professional Gutter Cleaning Services',
    description: 'Expert gutter cleaning to protect your home from water damage. Free estimates!',
  },
}

const serviceSchema = generateServiceSchema({
  name: 'Gutter Cleaning Service',
  description: 'Professional gutter cleaning services in Massillon, Ohio. Keep your gutters clean and functional to prevent water damage and maintain your home.',
  provider: {
    name: 'Neptune Pressure Washing',
    url: 'https://www.neptunewashpros.com',
  },
  areaServed: serviceAreas,
  serviceType: 'Gutter Cleaning',
})

export default function GutterCleaningPage() {
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
              Professional Gutter Cleaning Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Keep your gutters clean and functional year-round. Prevent water damage, protect your foundation, and maintain your home's value with professional gutter cleaning.
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
                What is Gutter Cleaning?
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Gutter cleaning involves removing leaves, debris, dirt, and other materials that accumulate in your gutters and downspouts. Clogged gutters can cause water to overflow, leading to foundation damage, basement flooding, roof damage, and landscape erosion.
              </p>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                What We Include
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>Complete removal of leaves, debris, and dirt from all gutters</li>
                <li>Downspout cleaning and flushing</li>
                <li>Gutter inspection for damage or needed repairs</li>
                <li>Removal of gutter guards for thorough cleaning (if applicable)</li>
                <li>Safe disposal of all debris</li>
                <li>Final flush to ensure proper water flow</li>
              </ul>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                Why Regular Gutter Cleaning is Essential
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-red-700 mb-2">Prevents Water Damage</h3>
                  <p className="text-gray-700">
                    Clogged gutters cause water to overflow, potentially damaging your roof, siding, foundation, and basement.
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-blue-700 mb-2">Protects Your Foundation</h3>
                  <p className="text-gray-700">
                    Properly functioning gutters direct water away from your foundation, preventing costly foundation repairs.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-green-700 mb-2">Prevents Pest Infestations</h3>
                  <p className="text-gray-700">
                    Standing water in clogged gutters attracts mosquitoes, rodents, and other pests.
                  </p>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-yellow-700 mb-2">Extends Roof Life</h3>
                  <p className="text-gray-700">
                    Clean gutters prevent water backup that can damage your roof shingles and structure.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                How Often Should You Clean Your Gutters?
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                Most homes should have their gutters cleaned at least twice a year:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Spring:</strong> After trees finish blooming and shedding</li>
                <li><strong>Fall:</strong> After leaves have fallen</li>
                <li><strong>Additional cleanings:</strong> May be needed if you have many trees nearby or after severe storms</li>
              </ul>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                Our Gutter Cleaning Process
              </h2>
              <ol className="list-decimal pl-6 space-y-4 text-gray-700 mb-8">
                <li><strong>Safety Setup:</strong> We use proper safety equipment and ladders to access your gutters safely.</li>
                <li><strong>Debris Removal:</strong> We manually remove all leaves, twigs, and debris from gutters.</li>
                <li><strong>Downspout Cleaning:</strong> We flush downspouts to ensure they're clear and functioning.</li>
                <li><strong>Inspection:</strong> We check for damage, loose connections, or needed repairs.</li>
                <li><strong>Final Flush:</strong> We run water through the system to verify proper flow.</li>
                <li><strong>Cleanup:</strong> We remove all debris from your property.</li>
              </ol>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                Pricing
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                Gutter cleaning pricing depends on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Linear feet of gutters</li>
                <li>Number of stories</li>
                <li>Level of debris and clogging</li>
                <li>Accessibility</li>
              </ul>
              <p className="text-gray-700 mb-6">
                <strong>Contact us for a free estimate!</strong> We provide transparent pricing with no hidden fees.
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
                Get Your Free Gutter Cleaning Quote
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
        title="Protect Your Home with Professional Gutter Cleaning"
        description="Don't wait for water damage. Schedule your gutter cleaning today!"
      />
    </>
  )
}
