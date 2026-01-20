import { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import { generateFAQSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Pressure Washing FAQ | Massillon, OH',
  description: 'Common questions about pressure washing services in Massillon, Ohio. Learn about our services, pricing, process, and more.',
  keywords: 'pressure washing faq, house washing questions, pressure washing cost, how often to pressure wash',
}

const faqs = [
  {
    question: 'How often should I pressure wash my house?',
    answer: 'Most homes benefit from pressure washing every 1-2 years. However, this can vary based on factors like tree coverage, climate, and visible dirt buildup. Homes with many trees or in humid climates may need more frequent cleaning.',
  },
  {
    question: 'Do I need to be home during the service?',
    answer: 'While it\'s not required, we recommend being available for the initial walkthrough and final inspection. You don\'t need to be present for the entire cleaning process, but we\'ll need access to water and electricity.',
  },
  {
    question: 'Will pressure washing damage my siding?',
    answer: 'No, when done correctly by professionals. We use appropriate pressure levels and techniques for each surface type. For delicate surfaces like vinyl siding, we use soft wash technology with low pressure to ensure no damage occurs.',
  },
  {
    question: 'What\'s the difference between pressure washing and soft washing?',
    answer: 'Pressure washing uses high pressure (typically 1,500-3,000 PSI) for durable surfaces like concrete. Soft washing uses low pressure (under 500 PSI) combined with cleaning solutions for delicate surfaces like roofs, siding, and painted areas. We use the appropriate method for each surface.',
  },
  {
    question: 'How long does a typical house wash take?',
    answer: 'Most house washing jobs take 2-4 hours, depending on the size of your home, level of dirt, and accessibility. We\'ll provide a time estimate when we give you a quote.',
  },
  {
    question: 'Do you use eco-friendly cleaning solutions?',
    answer: 'Yes! We use eco-friendly, biodegradable cleaning solutions that are safe for your family, pets, and landscaping. These solutions are highly effective while being environmentally responsible.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, checks, credit cards, and digital payment options. Payment is typically due upon completion of the service.',
  },
  {
    question: 'Do you offer warranties on your work?',
    answer: 'Yes, we offer a 100% satisfaction guarantee. If you\'re not happy with the results, we\'ll return to make it right at no additional charge.',
  },
  {
    question: 'Can you clean my roof?',
    answer: 'Yes! We offer professional roof washing services using safe soft wash technology. This removes algae, moss, and debris without damaging your shingles.',
  },
  {
    question: 'How do I prepare for pressure washing?',
    answer: 'We\'ll handle most preparation, but you can help by: removing outdoor furniture and decorations, closing windows, moving vehicles, and securing pets. We\'ll discuss specific preparation steps when we schedule your service.',
  },
  {
    question: 'Do you clean gutters?',
    answer: 'Yes! We offer comprehensive gutter cleaning services to remove leaves, debris, and dirt. This helps prevent water damage and keeps your gutters functioning properly.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve Massillon, Ohio and surrounding areas including Canton, North Canton, Barberton, Green, Jackson, Hartville, Uniontown, and throughout Stark and Summit Counties.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, we are fully licensed and insured. This protects both you and us, and ensures we meet all local business requirements.',
  },
  {
    question: 'How much does pressure washing cost?',
    answer: 'Pricing varies based on the size of the area, surface type, condition, and accessibility. We provide free estimates with no obligation. Contact us for a personalized quote!',
  },
  {
    question: 'Can pressure washing remove oil stains from my driveway?',
    answer: 'Yes! We use specialized cleaning solutions and techniques to remove oil stains, tire marks, and other stubborn stains from concrete driveways. Results vary based on the age and severity of the stain.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-br from-neptune-blue to-neptune-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl mb-8 text-gray-200">
              Common questions about our pressure washing services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 border-l-4 border-neptune-gold"
                >
                  <h2 className="text-xl font-bold text-neptune-dark-blue mb-3">
                    {faq.question}
                  </h2>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-neptune-blue text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="mb-6">We're here to help! Contact us and we'll answer any questions you have.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-neptune-gold hover:bg-neptune-gold/90 text-neptune-dark-blue font-bold py-3 px-6 rounded-full transition-all"
                >
                  Contact Us
                </a>
                <a
                  href="tel:330-412-9330"
                  className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-neptune-blue transition-all"
                >
                  Call 330-412-9330
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
