import { Metadata } from 'next'
import BookingForm from '@/components/BookingForm'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Contact Neptune Pressure Washing | Massillon, OH | Free Estimates',
  description: 'Contact Neptune Pressure Washing for professional pressure washing services in Massillon, Ohio. Call 330-412-9330 or request a free quote online.',
  keywords: 'contact neptune pressure washing, pressure washing massillon ohio phone number, free pressure washing estimate',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-neptune-blue to-neptune-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8 text-gray-200">
              Get in touch for a free estimate or to schedule your service
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-neptune-blue mb-2">Phone</h3>
                  <a
                    href="tel:330-412-9330"
                    className="text-neptune-dark-blue text-xl font-bold hover:text-neptune-blue transition-colors"
                  >
                    330-412-9330
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Call or text anytime</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-neptune-blue mb-2">Email</h3>
                  <a
                    href="mailto:neptunepwcllc@gmail.com"
                    className="text-neptune-dark-blue hover:text-neptune-blue transition-colors"
                  >
                    neptunepwcllc@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-neptune-blue mb-2">Location</h3>
                  <p className="text-neptune-dark-blue">Massillon, OH</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Serving Massillon and surrounding areas
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-neptune-blue mb-2">Operating Hours</h3>
                  <p className="text-neptune-dark-blue">Monday - Sunday: 9am - 9pm</p>
                  <p className="text-gray-600 text-sm mt-1">Available 7 days a week</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-neptune-blue mb-2">Service Areas</h3>
                  <p className="text-neptune-dark-blue mb-2">
                    We serve Massillon, Canton, North Canton, Barberton, Green, Jackson, Hartville, Uniontown, and throughout Stark and Summit Counties.
                  </p>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-bold text-lg text-neptune-blue mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-neptune-blue rounded-full flex items-center justify-center hover:bg-neptune-gold transition-colors"
                      aria-label="Facebook"
                    >
                      <span className="text-white font-bold">f</span>
                    </a>
                    <a
                      href="https://www.yelp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-neptune-blue rounded-full flex items-center justify-center hover:bg-neptune-gold transition-colors"
                      aria-label="Yelp"
                    >
                      <span className="text-white font-bold">Y</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <h2 className="text-3xl font-bold text-neptune-dark-blue mb-6">
                Request a Free Quote
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll contact you within 24 hours with a free estimate for your project.
              </p>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer to Talk?"
        description="Give us a call at 330-412-9330 - we're here to help!"
      />
    </>
  )
}
