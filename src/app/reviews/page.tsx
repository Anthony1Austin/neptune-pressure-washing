import { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import { GOOGLE_REVIEWS_URL } from '@/lib/google-reviews-url'
import { sortedManualReviews, renderStars } from '@/lib/reviews'

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | Neptune Pressure Washing',
  description:
    'Reviews from homeowners and commercial clients for Neptune Pressure Washing in Massillon, Ohio — residential and large-scale exterior cleaning projects.',
  keywords:
    'neptune pressure washing reviews, commercial pressure washing reviews, pressure washing testimonials massillon ohio, customer reviews',
}

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-neptune-blue to-neptune-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl md:pl-4 lg:pl-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl mb-8 text-gray-200">
              Homeowners and commercial clients share what it is like to work with us — from single homes to large
              facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neptune-dark-blue mb-4">
              Don't Just Take Our Word For It
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from residential and commercial projects across Northeast Ohio.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-md max-w-4xl mx-auto mb-10">
            <div className="space-y-6">
              {sortedManualReviews.map((review) => (
                <div
                  key={`${review.name}-${review.date}`}
                  className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <p className="font-bold text-neptune-dark-blue">{review.name}</p>
                  </div>
                  <div className="text-neptune-gold font-semibold mb-2">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-neptune-dark-blue mb-4">
              Share Your Experience
            </h2>
            <p className="text-gray-700 mb-6">
              Had a great experience with Neptune Pressure Washing? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neptune-blue hover:bg-neptune-dark-blue text-white font-bold py-3 px-6 rounded-full transition-all"
              >
                Leave a Google Review
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063620580327"
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
