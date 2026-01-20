import { Metadata } from 'next'
import TestimonialCard from '@/components/TestimonialCard'
import CTASection from '@/components/CTASection'
import type { Testimonial } from '@/types'

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | Neptune Pressure Washing',
  description: 'Read what our satisfied customers have to say about Neptune Pressure Washing services in Massillon, Ohio. Real reviews from real customers.',
  keywords: 'neptune pressure washing reviews, pressure washing testimonials massillon ohio, customer reviews',
}

// Placeholder testimonials - will be replaced with CMS content
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mary F.',
    service: 'House Wash, Deck Cleaning, Fence Cleaning',
    rating: 5,
    text: 'Thomas is very professional & meticulous. My house looks like I had it painted. The gutters had that black stuff & now that are the original color. He went above & beyond in pressure cleaning my house, wood deck, white composite fence & other small things that were not even in the quote. Would give him a 10 star review if I could. I\'m very happy & very satisfied.',
    date: '2024',
  },
  // Add more testimonials here as they become available
]

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-neptune-blue to-neptune-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl mb-8 text-gray-200">
              See what our satisfied customers have to say about our services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {testimonials.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neptune-dark-blue mb-4">
                  Don't Just Take Our Word For It
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Read real reviews from our satisfied customers
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4 text-lg">Customer reviews coming soon!</p>
              <p className="text-gray-400">
                Check back soon to see what our customers have to say about our services.
              </p>
            </div>
          )}

          <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-neptune-dark-blue mb-4">
              Share Your Experience
            </h2>
            <p className="text-gray-700 mb-6">
              Had a great experience with Neptune Pressure Washing? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neptune-blue hover:bg-neptune-dark-blue text-white font-bold py-3 px-6 rounded-full transition-all"
              >
                Leave a Google Review
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neptune-gold hover:bg-neptune-gold/90 text-neptune-dark-blue font-bold py-3 px-6 rounded-full transition-all"
              >
                Leave a Facebook Review
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Join Our Satisfied Customers?"
        description="Get a free quote today and experience the Neptune Pressure Washing difference!"
      />
    </>
  )
}
