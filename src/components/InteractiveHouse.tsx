'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface ServiceBubble {
  id: string
  label: string
  href: string
  position: { x: number; y: number }
  mobilePosition?: { x: number; y: number }
  target: { x: number; y: number } // Where the line should point on the house
  description: string
  icon?: string
}

const services: ServiceBubble[] = [
  {
    id: 'gutter-cleaning',
    label: 'Gutter Cleaning',
    href: '/services/gutter-cleaning',
    position: { x: 27, y: 35 },
    mobilePosition: { x: 23, y: 28 },
    target: { x: 32, y: 28 },
    description: 'Keep your gutters clean and functional year-round',
  },
  {
    id: 'roof-washing',
    label: 'Roof Washing',
    href: '/services/roof-washing',
    position: { x: 60, y: 36 },
    mobilePosition: { x: 60, y: 30 },
    target: { x: 50, y: 38 },
    description: 'Professional roof cleaning to extend roof life',
  },
  {
    id: 'concrete-cleaning',
    label: 'Concrete Cleaning',
    href: '/services/concrete-cleaning',
    position: { x: 78, y: 80 },
    mobilePosition: { x: 78, y: 72 },
    target: { x: 72, y: 74 },
    description: 'Driveway and concrete surface restoration',
  },
  {
    id: 'house-wash',
    label: 'House Wash',
    href: '/services/house-wash',
    position: { x: 76, y: 42 },
    mobilePosition: { x: 78, y: 40 },
    target: { x: 58, y: 45 },
    description: 'Complete exterior house cleaning service',
  },
  {
    id: 'fences-decks',
    label: 'Fences & Decks',
    href: '/services/fences-decks',
    position: { x: 50, y: 84 },
    mobilePosition: { x: 50, y: 86 },
    target: { x: 50, y: 76 },
    description: 'Restore and protect your fences and decks',
  },
  {
    id: 'brick-cleaning',
    label: 'Brick Cleaning',
    href: '/services/brick-cleaning',
    position: { x: 10, y: 60 },
    mobilePosition: { x: 16, y: 60 },
    target: { x: 28, y: 58 },
    description: 'Expert brick and stone surface cleaning',
  },
  {
    id: 'patio-deck-cleaning',
    label: 'Patio & Deck Cleaning',
    href: '/services/patio-deck-cleaning',
    position: { x: 14, y: 76 },
    mobilePosition: { x: 22, y: 76 },
    target: { x: 24, y: 72 },
    description: 'Transform your outdoor living spaces',
  },
]

export default function InteractiveHouse() {
  const [hoveredBubble, setHoveredBubble] = useState<string | null>(null)
  const [activeBubble, setActiveBubble] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 639px)')
    const handleChange = () => setIsMobile(media.matches)

    handleChange()
    if (media.addEventListener) {
      media.addEventListener('change', handleChange)
    } else {
      media.addListener(handleChange)
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', handleChange)
      } else {
        media.removeListener(handleChange)
      }
    }
  }, [])

  return (
    <div className="relative w-full my-0">
      {/* House Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-neptune-dark-blue">
        {/* Placeholder for house image - replace with actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-blue-500 opacity-20" />
        <img
          src="/images/Untitled design (2).png"
          alt="Neptune Pressure Washing Services - Professional exterior cleaning"
          className="w-full h-full object-cover brightness-110 scale-110 origin-center object-left"
          onError={(e) => {
            // Fallback if image doesn't exist
            e.currentTarget.style.display = 'none'
          }}
        />
        
        {/* Service Bubbles */}
        <div className="hidden sm:block">
          {services.map((service, index) => {
          // Determine tooltip position - directly above or below based on bubble location
          const currentPosition = isMobile && service.mobilePosition ? service.mobilePosition : service.position
          const isTop = currentPosition.y < 50 // If bubble is in upper half, show tooltip below
          
          // Tooltip always centered horizontally above or below bubble
          const tooltipVerticalClass = isTop 
            ? 'top-full mt-4' 
            : 'bottom-full mb-4'
          
          const arrowDirection = isTop
            ? 'border-l-8 border-r-8 border-b-8 border-transparent border-b-white'
            : 'border-l-8 border-r-8 border-t-8 border-transparent border-t-white'
          
          const roofOffsetLeft = service.id === 'roof-washing' ? 'calc(50% - 3.5rem)' : undefined

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.6,
                type: "spring",
                stiffness: 200
              }}
              className="absolute z-20 pointer-events-auto"
              style={{
                left: `${currentPosition.x}%`,
                top: `${currentPosition.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setHoveredBubble(service.id)}
              onMouseLeave={() => setHoveredBubble(null)}
              onClick={() => setActiveBubble(activeBubble === service.id ? null : service.id)}
            >
              <Link href={service.href}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group cursor-pointer touch-manipulation"
                  style={{
                    position: 'relative',
                  }}
                >
                  {/* Animated Bubble */}
                  <motion.div
                    animate={{
                      scale: hoveredBubble === service.id ? 1.1 : 1,
                      boxShadow: hoveredBubble === service.id
                        ? '0 0 30px rgba(212, 175, 55, 0.6)'
                        : '0 4px 15px rgba(0, 0, 0, 0.3)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-neptune-blue/95 backdrop-blur-sm text-white px-3 py-2 sm:px-5 sm:py-3 rounded-full shadow-xl border-2 border-neptune-gold/50 hover:border-neptune-gold transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: hoveredBubble === service.id ? ['-100%', '200%'] : '-100%',
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: hoveredBubble === service.id ? Infinity : 0,
                        repeatDelay: 0.5,
                      }}
                    />
                    <span className="font-bold text-[11px] sm:text-sm md:text-base whitespace-nowrap relative z-10">
                      {service.label}
                    </span>
                  </motion.div>
                  
                  {/* Hover Description Tooltip */}
                <AnimatePresence>
                  {hoveredBubble === service.id && (
                    <motion.div
                      initial={{ opacity: 0, y: isTop ? 10 : -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: isTop ? 10 : -10, scale: 0.9 }}
                      className={`absolute ${tooltipVerticalClass} ${
                        service.id === 'house-wash' || service.id === 'fences-decks' || service.id === 'concrete-cleaning'
                          ? 'right-0'
                          : 'left-1/2 -translate-x-1/2'
                      } w-56 z-20`}
                      style={roofOffsetLeft ? { left: roofOffsetLeft } : undefined}
                    >
                      <div className="bg-white text-neptune-dark-blue p-4 rounded-xl shadow-2xl border-2 border-neptune-gold/30 relative">
                        <p className="text-sm font-medium text-center">{service.description}</p>
                        {/* Arrow pointing to bubble - centered, or adjusted for Fences & Decks */}
                        <div
                          className={`absolute ${isTop ? 'top-0' : 'bottom-0'} ${
                            service.id === 'house-wash' || service.id === 'fences-decks' || service.id === 'concrete-cleaning'
                              ? 'right-8'
                              : 'left-1/2 -translate-x-1/2'
                          } ${isTop ? '-translate-y-full' : 'translate-y-full'}`}
                          style={roofOffsetLeft ? { left: roofOffsetLeft } : undefined}
                        >
                          <div className={`w-0 h-0 ${arrowDirection}`}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          </motion.div>
          )
          })}
        </div>

        {/* Satisfaction Badge - Smooth Circular Design */}
        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          className="absolute top-12 right-10 z-20"
        >
          <div className="relative">
            {/* Smooth circular badge */}
            <div 
              className="bg-neptune-gold text-neptune-dark-blue shadow-2xl relative flex items-center justify-center rounded-full"
              style={{
                width: '140px',
                height: '140px',
                border: '4px solid white',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div className="flex flex-col items-center justify-center h-full px-4 py-2">
                {/* Main "100%" text */}
                <div className="font-black text-3xl leading-tight mb-1">100%</div>
                
                {/* "SATISFACTION" text */}
                <div className="font-bold text-[10px] uppercase leading-tight tracking-tight">SATISFACTION</div>
                
                {/* "GUARANTEED" text */}
                <div className="font-bold text-[10px] uppercase leading-tight tracking-tight mt-0.5">
                  GUARANTEED
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  )
}
