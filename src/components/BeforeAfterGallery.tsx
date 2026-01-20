'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { BeforeAfter } from '@/types'

interface BeforeAfterGalleryProps {
  items: BeforeAfter[]
  title?: string
}

export default function BeforeAfterGallery({ items, title = "Before & After Gallery" }: BeforeAfterGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  // Placeholder data if none provided
  const displayItems = items.length > 0 ? items : [
    {
      id: 'placeholder-1',
      service: 'House Washing',
      beforeImage: '/images/placeholder-before-after.jpg',
      afterImage: '/images/placeholder-before-after.jpg',
      description: 'Professional house washing results',
    },
    {
      id: 'placeholder-2',
      service: 'Deck Cleaning',
      beforeImage: '/images/placeholder-before-after.jpg',
      afterImage: '/images/placeholder-before-after.jpg',
      description: 'Deck restoration and cleaning',
    },
    {
      id: 'placeholder-3',
      service: 'Driveway Cleaning',
      beforeImage: '/images/placeholder-before-after.jpg',
      afterImage: '/images/placeholder-before-after.jpg',
      description: 'Concrete driveway cleaning',
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
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the transformation our professional pressure washing services deliver
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedItem(index)}
              className="cursor-pointer group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative aspect-video">
                  <div className="absolute inset-0 flex">
                    <div className="flex-1 relative overflow-hidden">
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
                        BEFORE
                      </div>
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Before Image</span>
                      </div>
                    </div>
                    <div className="w-1 bg-neptune-gold"></div>
                    <div className="flex-1 relative overflow-hidden">
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
                        AFTER
                      </div>
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">After Image</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-neptune-dark-blue mb-1">{item.service}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {displayItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Photo gallery coming soon!</p>
            <p className="text-sm text-gray-400">
              Check back soon to see our amazing before and after transformations.
            </p>
          </div>
        )}

        {/* Modal for full-size view */}
        <AnimatePresence>
          {selectedItem !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="max-w-4xl w-full bg-white rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video">
                  <div className="absolute inset-0 flex">
                    <div className="flex-1 relative">
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded font-bold z-10">
                        BEFORE
                      </div>
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Before Image</span>
                      </div>
                    </div>
                    <div className="w-2 bg-neptune-gold"></div>
                    <div className="flex-1 relative">
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded font-bold z-10">
                        AFTER
                      </div>
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">After Image</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-neptune-dark-blue mb-2">
                    {displayItems[selectedItem].service}
                  </h3>
                  <p className="text-gray-600">{displayItems[selectedItem].description}</p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
