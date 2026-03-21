import Link from 'next/link'
import { SocialLinks } from '@/components/SocialLinks'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'House Washing', href: '/services/house-wash' },
    { name: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
    { name: 'Roof Washing', href: '/services/roof-washing' },
    { name: 'Deck Cleaning', href: '/services/fences-decks' },
    { name: 'Driveway Cleaning', href: '/services/concrete-cleaning' },
    { name: 'Patio Cleaning', href: '/services/patio-deck-cleaning' },
  ]

  const areas = [
    'Barberton, OH',
    'Belden Village, OH',
    'Canton, OH',
    'Clinton, OH',
    'Green, OH',
    'Hartville, OH',
    'Jackson Township, OH',
    'Jackson, OH',
    'Massillon, OH',
    'New Franklin, OH',
    'North Canton, OH',
    'Norton, OH',
    'Plain Township, OH',
    'Portage Lakes, OH',
    'Stark County, OH',
    'Summit County, OH',
    'Uniontown, OH',
  ]

  return (
    <footer className="bg-neptune-dark-blue text-white">
      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-44 h-44 sm:w-48 sm:h-48 -my-8 sm:-my-10 flex items-center justify-center">
                <img
                  src="/images/image1.png"
                  alt="Neptune Pressure Washing logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional pressure washing services in Stark and Summit Counties.
              Licensed, insured, and committed to 100% customer satisfaction.
            </p>
            <SocialLinks variant="footer" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-neptune-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-neptune-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-neptune-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-neptune-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-neptune-gold transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-neptune-gold transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-neptune-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-neptune-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-neptune-gold">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-neptune-gold transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-neptune-gold">Contact Us</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300">Phone:</p>
                <a
                  href="tel:330-412-9330"
                  className="text-white font-bold hover:text-neptune-gold transition-colors"
                >
                  Call or Text 330-412-9330
                </a>
              </div>
              <div>
                <p className="text-gray-300">Email:</p>
                <a
                  href="mailto:neptunepwcllc@gmail.com"
                  className="text-white hover:text-neptune-gold transition-colors"
                >
                  neptunepwcllc@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-300 mb-2">Hours:</p>
                <p className="text-white text-sm">Mon - Sun: 9am - 9pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-8 pt-8 border-t border-neptune-blue">
          <h3 className="font-bold text-lg mb-4 text-neptune-gold">Areas We Serve</h3>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <span
                key={area}
                className="bg-neptune-blue px-3 py-1 rounded-full text-sm text-gray-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neptune-blue text-center text-gray-400 text-sm">
          <p>
            © {currentYear} Neptune Pressure Washing LLC. All rights reserved. | Licensed & Insured
          </p>
          <p className="mt-2 text-gray-500 text-sm">
            Website by{' '}
            <a
              href="https://webopsdevelopment.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neptune-gold hover:underline"
            >
              WebOps Development
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
