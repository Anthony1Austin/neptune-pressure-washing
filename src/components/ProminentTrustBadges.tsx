'use client'

import { motion } from 'framer-motion'

export default function ProminentTrustBadges() {
  const startYear = 2018
  const yearsInBusiness = Math.max(new Date().getFullYear() - startYear, 1)

  const badges = [
    {
      icon: '🛡️',
      text: 'Licensed & Insured',
      description: 'Fully licensed and insured for your protection',
    },
    {
      icon: '🏆',
      text: 'Years in Business',
      description: `${yearsInBusiness} years of trusted services.`,
    },
    {
      icon: '🏠',
      text: 'Locally Owned & Operated',
      description: 'Proudly serving Stark and Summit Counties.',
    },
  ]

  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="flex items-center space-x-3 bg-neptune-blue/95 px-6 py-4 rounded-full border-2 border-neptune-gold/30 hover:border-neptune-gold transition-all duration-300"
            >
              <motion.div 
                className="text-2xl"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15 + 0.2,
                  type: "spring",
                  stiffness: 300
                }}
              >
                {badge.icon}
              </motion.div>
              <div>
                <div className="font-bold text-white text-sm md:text-base">
                  {badge.text}
                </div>
                <div className="text-xs text-white/80 hidden md:block">
                  {badge.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
