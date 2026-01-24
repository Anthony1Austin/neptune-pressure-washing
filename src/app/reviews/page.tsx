import { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import { sortedManualReviews, renderStars } from '@/lib/reviews'

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | Neptune Pressure Washing',
  description: 'Read what our satisfied customers have to say about Neptune Pressure Washing services in Massillon, Ohio. Real reviews from real customers.',
  keywords: 'neptune pressure washing reviews, pressure washing testimonials massillon ohio, customer reviews',
}

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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neptune-dark-blue mb-4">
              Don't Just Take Our Word For It
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our satisfied customers have to say about our services
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
                href="https://www.google.com/search?sca_esv=117b27425e35d41b&rlz=1C5CHFA_enUS1170US1172&sxsrf=ANbL-n610Vtffk4rGszmZ5TE-QMU7wYQ0A:1769281975388&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOf1NYxwurv2R_3O-hmZPKyC7D1acgM4Fzem48c9Yeg4eqzMpEmMH9y6ge9P7-NRL-_OUAum5y9bOIxPgy-NZngaimXmkqFCa5D6jB6Qgup942gOsRw%3D%3D&q=Neptune+Pressure+Washing+Reviews&sa=X&ved=2ahUKEwjc8Jn98KSSAxW61skDHaGyOrgQ0bkNegQIOhAF&biw=1280&bih=586&dpr=2&aic=0"
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
