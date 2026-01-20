'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  variant?: 'default' | 'dark' | 'gold'
}

export default function CTASection({
  title = "Ready to Transform Your Property?",
  description = "Get a free quote today and see why Neptune Pressure Washing is the trusted choice in Massillon, Ohio.",
  primaryButtonText = "Get Free Quote",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Call 330-412-9330",
  secondaryButtonLink = "tel:330-412-9330",
  variant = 'default',
}: CTASectionProps) {
  const bgColor =
    variant === 'dark'
      ? 'bg-neptune-dark-blue'
      : variant === 'gold'
      ? 'bg-neptune-gold'
      : 'bg-neptune-blue'
  
  const textColor = variant === 'gold' ? 'text-neptune-dark-blue' : 'text-white'
  const buttonPrimary =
    variant === 'gold'
      ? 'bg-neptune-dark-blue text-white hover:bg-neptune-blue'
      : 'bg-neptune-gold text-neptune-dark-blue hover:bg-neptune-gold/90'
  const buttonSecondary =
    variant === 'gold'
      ? 'bg-white text-neptune-dark-blue hover:bg-gray-100'
      : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-neptune-blue'

  return (
    <section className={`${bgColor} ${textColor} py-16 px-4`}>
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryButtonLink}
              className={`${buttonPrimary} font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}
            >
              {primaryButtonText}
            </Link>
            <a
              href={secondaryButtonLink}
              className={`${buttonSecondary} font-bold py-4 px-8 rounded-full transition-all duration-300`}
            >
              {secondaryButtonText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
