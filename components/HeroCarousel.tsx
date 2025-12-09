'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Destination } from '@/lib/destinations'

interface HeroCarouselProps {
  destinations: Destination[]
  interval?: number
  children: React.ReactNode
}

export default function HeroCarousel({
  destinations,
  interval = 5000,
  children,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length)
    }, interval)

    return () => clearInterval(timer)
  }, [destinations.length, interval])

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={destinations[currentIndex].image}
            alt={destinations[currentIndex].name}
            fill
            className="object-cover object-center"
            priority={currentIndex === 0}
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 to-primary/40"></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        {children}
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 55C840 60 960 60 1080 50C1200 40 1320 20 1380 10L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>

      {/* Indicator dots (optional) */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}


