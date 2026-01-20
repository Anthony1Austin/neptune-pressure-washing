import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BookingForm from '@/components/BookingForm'
import { getKeywordsForService, primaryKeywords } from '@/lib/keywords'
import { generateServiceSchema } from '@/lib/schema'
import { serviceAreas } from '@/lib/keywords'

export const metadata: Metadata = {
  title: 'Professional House Washing Services in Massillon, OH | Free Estimates',
  description: 'Expert house washing services in Massillon, Ohio. Remove dirt, grime, mold, and mildew from your home\'s exterior. Eco-friendly cleaning solutions. Licensed & insured. 100% satisfaction guaranteed.',
  keywords: getKeywordsForService('house-wash').join(', ') + ', ' + primaryKeywords.house,
  openGraph: {
    title: 'Professional House Washing Services in Massillon, OH',
    description: 'Expert house washing services to restore your home\'s curb appeal. Free estimates!',
  },
}

const serviceSchema = generateServiceSchema({
  name: 'House Washing Service',
  description: 'Professional exterior house washing services in Massillon, Ohio and surrounding areas. Remove dirt, grime, mold, and mildew to restore your home\'s appearance.',
  provider: {
    name: 'Neptune Pressure Washing',
    url: 'https://www.neptunewashpros.com',
  },
  areaServed: serviceAreas,
  serviceType: 'House Washing',
})

export default function HouseWashPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neptune-blue to-neptune-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional House Washing Services in Massillon, OH
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Restore your home's curb appeal with our expert house washing services. We remove dirt, grime, mold, and mildew to make your home look like new.
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

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6">
                What is House Washing?
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                House washing is a comprehensive exterior cleaning service that removes accumulated dirt, grime, mold, mildew, and other contaminants from your home's siding, trim, and other exterior surfaces. Over time, these elements can make your home look dull and can even cause damage if left untreated.
              </p>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                What We Include in Our House Washing Service
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>Complete exterior siding cleaning (vinyl, brick, stucco, wood, etc.)</li>
                <li>Window frame and trim cleaning</li>
                <li>Door cleaning and restoration</li>
                <li>Gutter exterior cleaning</li>
                <li>Foundation cleaning</li>
                <li>Eco-friendly cleaning solutions safe for your family and pets</li>
                <li>Thorough rinse to remove all cleaning agents</li>
                <li>Protection of landscaping and outdoor furniture</li>
              </ul>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                Why Choose Neptune for House Washing?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">Expert Techniques</h3>
                  <p className="text-gray-700">
                    We use the right pressure and cleaning solutions for your specific siding type to ensure effective cleaning without damage.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">Eco-Friendly Solutions</h3>
                  <p className="text-gray-700">
                    Our cleaning solutions are safe for your family, pets, and the environment while being highly effective.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">Licensed & Insured</h3>
                  <p className="text-gray-700">
                    Fully licensed and insured for your protection and peace of mind.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">100% Satisfaction</h3>
                  <p className="text-gray-700">
                    We guarantee your satisfaction with our work or your money back.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                Our House Washing Process
              </h2>
              <ol className="list-decimal pl-6 space-y-4 text-gray-700 mb-8">
                <li>
                  <strong>Inspection:</strong> We inspect your home's exterior to identify problem areas and determine the best cleaning approach.
                </li>
                <li>
                  <strong>Preparation:</strong> We protect your landscaping, outdoor furniture, and other items from cleaning solutions.
                </li>
                <li>
                  <strong>Pre-treatment:</strong> We apply eco-friendly cleaning solutions to break down dirt, grime, and organic growth.
                </li>
                <li>
                  <strong>Washing:</strong> Using appropriate pressure and techniques, we thoroughly clean all exterior surfaces.
                </li>
                <li>
                  <strong>Rinse:</strong> We thoroughly rinse all surfaces to remove cleaning agents and debris.
                </li>
                <li>
                  <strong>Final Inspection:</strong> We do a final walkthrough to ensure everything meets our high standards.
                </li>
              </ol>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                Benefits of Regular House Washing
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>Restores your home's curb appeal and appearance</li>
                <li>Prevents damage from mold, mildew, and organic growth</li>
                <li>Protects your home's exterior surfaces and paint</li>
                <li>Increases your home's value</li>
                <li>Removes allergens and improves air quality around your home</li>
                <li>Prepares surfaces for painting or staining</li>
              </ul>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">
                Pricing
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                House washing pricing varies based on several factors:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Size of your home (square footage)</li>
                <li>Type of siding material</li>
                <li>Level of dirt and contamination</li>
                <li>Accessibility of the property</li>
                <li>Additional services requested</li>
              </ul>
              <p className="text-gray-700 mb-6">
                <strong>We offer free estimates!</strong> Contact us today for a personalized quote for your home.
              </p>

              <div className="bg-neptune-gold/10 border-l-4 border-neptune-gold p-6 rounded-lg mb-8">
                <p className="text-neptune-dark-blue font-semibold text-lg">
                  💡 Tip: Most homes benefit from house washing every 1-2 years to maintain appearance and prevent damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="quote" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-neptune-dark-blue mb-4">
                Get Your Free House Washing Quote
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll contact you within 24 hours with a free estimate
              </p>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Home's Exterior?"
        description="Get a free quote today and see why Neptune Pressure Washing is the trusted choice for house washing in Massillon, Ohio."
      />
    </>
  )
}
