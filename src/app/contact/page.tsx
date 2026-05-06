import { Metadata } from 'next'
import BookingForm from '@/components/BookingForm'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Contact Neptune Pressure Washing | Massillon, OH | Free Estimates',
  description:
    'Contact Neptune Pressure Washing for residential or commercial pressure washing in Massillon, Ohio. Call or text 330-412-9330 or request a free quote online.',
  keywords:
    'contact neptune pressure washing, commercial pressure washing estimate, pressure washing massillon ohio phone number, free pressure washing estimate',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-neptune-blue to-neptune-dark-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl md:pl-4 lg:pl-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8 text-gray-200">
              Get in touch for a free estimate or to schedule service — residential jobs, commercial buildings, and
              multi-site work welcome.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 rounded-xl border border-neptune-gold/40 bg-neptune-dark-blue/5 px-6 py-4 text-center text-neptune-dark-blue">
            <p className="text-base md:text-lg font-medium">
              <strong>Commercial & multi-site:</strong> include property address, approximate scope, and best contact
              for approvals — we will follow up with a tailored quote.
            </p>
          </div>
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
                    Call or Text 330-412-9330
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Call or text anytime</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-neptune-blue mb-2">Email</h3>
                  <a
                    href="mailto:neptunewashpros@gmail.com"
                    className="text-neptune-dark-blue hover:text-neptune-blue transition-colors"
                  >
                    neptunewashpros@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-neptune-blue mb-2">Operating Hours</h3>
                  <p className="text-neptune-dark-blue">Monday - Sunday: 9am - 9pm</p>
                  <p className="text-gray-600 text-sm mt-1">Available 7 days a week</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-neptune-blue mb-2">Service Areas</h3>
                  <p className="text-neptune-dark-blue mb-2">
                    We serve Barberton, Belden Village, Canton, Clinton, Green, Hartville, Jackson Township, Jackson, Massillon, New Franklin, North Canton, Norton, Plain Township, Portage Lakes, Uniontown, and throughout Stark and Summit Counties.
                  </p>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-bold text-lg text-neptune-blue mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=100063620580327"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-neptune-blue rounded-full flex items-center justify-center hover:bg-neptune-gold transition-colors"
                      aria-label="Facebook"
                    >
                      <span className="text-white font-bold">f</span>
                    </a>
                    <a
                      href="https://www.yelp.com/biz/neptune-pressure-washing-massillon?osq=Neptune"
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
                Fill out the form below and we will contact you within 24 hours. For commercial work, note access and
                scope in the details field so we can quote accurately.
              </p>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer to Talk?"
        description="Give us a call or text at 330-412-9330 - we're here to help!"
      />
    </>
  )
}
