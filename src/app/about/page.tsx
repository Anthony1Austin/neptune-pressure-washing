import { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import TrustBadges from '@/components/TrustBadges'

export const metadata: Metadata = {
  title: 'About Neptune Pressure Washing | Massillon, OH',
  description: 'Learn about Neptune Pressure Washing, a locally owned and operated pressure washing company serving Massillon, Ohio and surrounding areas. Licensed, insured, and committed to excellence.',
  keywords: 'about neptune pressure washing, pressure washing company massillon ohio, local pressure washing business',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-neptune-blue to-neptune-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Neptune Pressure Washing</h1>
            <p className="text-xl mb-8 text-gray-200">
              Locally owned and operated, serving Stark and Summit Counties with excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Neptune Pressure Washing was founded with a simple mission: to provide exceptional pressure washing services that transform properties and exceed customer expectations. As a locally owned and operated business, we understand the importance of maintaining your home's appearance and value.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                We pride ourselves on using state-of-the-art equipment, eco-friendly cleaning solutions, and proven techniques to deliver outstanding results. Every job is completed with attention to detail and a commitment to customer satisfaction.
              </p>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">Why Choose Neptune?</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">Licensed & Insured</h3>
                  <p className="text-gray-700">Fully licensed and insured for your protection and peace of mind.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">100% Satisfaction Guaranteed</h3>
                  <p className="text-gray-700">We stand behind our work. If you're not satisfied, we'll make it right.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">Eco-Friendly Solutions</h3>
                  <p className="text-gray-700">Safe cleaning solutions for your family, pets, and the environment.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-neptune-blue mb-2">Locally Owned</h3>
                  <p className="text-gray-700">Proudly serving Stark and Summit Counties.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">Our Commitment</h2>
              <p className="text-gray-700 mb-4 text-lg">
                At Neptune Pressure Washing, we're committed to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>Providing exceptional customer service</li>
                <li>Using the best equipment and techniques</li>
                <li>Delivering consistent, high-quality results</li>
                <li>Respecting your property and landscaping</li>
                <li>Being transparent with pricing and communication</li>
                <li>Standing behind our work with our satisfaction guarantee</li>
              </ul>

              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6 mt-12">Service Areas</h2>
              <p className="text-gray-700 mb-4 text-lg">
                We proudly serve Massillon, Ohio and surrounding areas including:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Barberton, OH</li>
                  <li>Belden Village, OH</li>
                  <li>Canton, OH</li>
                  <li>Clinton, OH</li>
                  <li>Green, OH</li>
                  <li>Hartville, OH</li>
                  <li>Jackson Township, OH</li>
                  <li>Jackson, OH</li>
                  <li>Massillon, OH</li>
                </ul>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>New Franklin, OH</li>
                  <li>North Canton, OH</li>
                  <li>Norton, OH</li>
                  <li>Plain Township, OH</li>
                  <li>Portage Lakes, OH</li>
                  <li>Stark County, OH</li>
                  <li>Summit County, OH</li>
                  <li>Uniontown, OH</li>
                </ul>
              </div>

              <div className="bg-neptune-gold/10 border-l-4 border-neptune-gold p-6 rounded-lg mb-8">
                <p className="text-neptune-dark-blue font-semibold text-lg">
                  Ready to experience the Neptune difference? Contact us today for a free estimate!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      <CTASection
        title="Ready to Work With Us?"
        description="Get your free quote today and discover why Neptune Pressure Washing is the trusted choice."
      />
    </>
  )
}
