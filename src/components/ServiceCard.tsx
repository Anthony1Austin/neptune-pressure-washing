'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon?: string
  delay?: number
}

export default function ServiceCard({ title, description, href, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link href={href}>
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full border-l-4 border-neptune-gold cursor-pointer group">
          {icon && (
            <div className="w-16 h-16 bg-neptune-blue rounded-full flex items-center justify-center mb-4 group-hover:bg-neptune-gold transition-colors">
              <span className="text-2xl">{icon}</span>
            </div>
          )}
          <h3 className="text-xl font-bold text-neptune-dark-blue mb-2 group-hover:text-neptune-blue transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <span className="text-neptune-blue font-semibold group-hover:text-neptune-gold transition-colors">
            Learn More →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
