import Link from 'next/link'

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
    'Massillon, OH',
    'Canton, OH',
    'North Canton, OH',
    'Barberton, OH',
    'Green, OH',
    'Jackson, OH',
    'Hartville, OH',
    'Uniontown, OH',
  ]

  return (
    <footer className="bg-neptune-dark-blue text-white">
      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-neptune-gold rounded-full flex items-center justify-center">
                <span className="text-neptune-dark-blue font-bold text-xl">N</span>
              </div>
              <div>
                <div className="font-bold text-xl">NEPTUNE</div>
                <div className="text-xs text-neptune-gold">PRESSURE WASHING</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional pressure washing services in Massillon, Ohio and surrounding areas.
              Licensed, insured, and committed to 100% customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100063620580327"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neptune-blue rounded-full flex items-center justify-center hover:bg-neptune-gold transition-colors"
                aria-label="Facebook"
              >
                <span className="text-white font-bold">f</span>
              </a>
              <a
                href="https://www.yelp.com/biz/neptune-pressure-washing-massillon?osq=Neptune+Pressure+Washing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neptune-blue rounded-full flex items-center justify-center hover:bg-neptune-gold transition-colors"
                aria-label="Yelp"
              >
                <span className="text-white font-bold">Y</span>
              </a>
            </div>
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
                  330-412-9330
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
                <p className="text-gray-300">Location:</p>
                <p className="text-white">Massillon, OH</p>
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
            <span className="bg-neptune-blue px-3 py-1 rounded-full text-sm text-gray-300">
              Stark County, OH
            </span>
            <span className="bg-neptune-blue px-3 py-1 rounded-full text-sm text-gray-300">
              Summit County, OH
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neptune-blue text-center text-gray-400 text-sm">
          <p>
            © {currentYear} Neptune Pressure Washing LLC. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  )
}
