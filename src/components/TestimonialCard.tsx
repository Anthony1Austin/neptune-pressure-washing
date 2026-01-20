'use client'

import { motion } from 'framer-motion'
import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
  delay?: number
}

export default function TestimonialCard({ testimonial, delay = 0 }: TestimonialCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={i < testimonial.rating ? 'text-neptune-gold' : 'text-gray-300'}
    >
      ★
    </span>
  ))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-md p-6 h-full border-t-4 border-neptune-gold"
    >
      <div className="flex items-center mb-4">
        <div className="flex text-xl">{stars}</div>
      </div>
      <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
      <div className="border-t pt-4">
        <p className="font-bold text-neptune-dark-blue">{testimonial.name}</p>
        <p className="text-sm text-gray-600">{testimonial.service}</p>
        <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
      </div>
    </motion.div>
  )
}
