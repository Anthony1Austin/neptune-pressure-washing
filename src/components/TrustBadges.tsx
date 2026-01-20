'use client'

import { motion } from 'framer-motion'

export default function TrustBadges() {
  const badges = [
    {
      icon: '✓',
      text: 'Licensed & Insured',
      description: 'Fully licensed and insured for your protection',
    },
    {
      icon: '✓',
      text: 'Years in Business',
      description: 'X+ years of experience serving Massillon', // Update X with actual years
    },
    {
      icon: '✓',
      text: 'Locally Owned & Operated',
      description: 'Proudly serving Massillon and surrounding areas',
    },
    {
      icon: '✓',
      text: '100% Satisfaction',
      description: 'We guarantee your satisfaction or your money back',
    },
    {
      icon: '✓',
      text: 'Free Estimates',
      description: 'No obligation, free quotes for all services',
    },
    {
      icon: '✓',
      text: 'Eco-Friendly',
      description: 'Safe cleaning solutions for your family and pets',
    },
    {
      icon: '✓',
      text: 'Professional Team',
      description: 'Experienced technicians with quality equipment',
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neptune-dark-blue mb-4">
            Why Choose Neptune Pressure Washing?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the highest quality pressure washing services
            with exceptional customer care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-neptune-gold"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-neptune-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-neptune-dark-blue text-2xl font-bold">
                    {badge.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-neptune-dark-blue mb-1">
                    {badge.text}
                  </h3>
                  <p className="text-gray-600 text-sm">{badge.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
