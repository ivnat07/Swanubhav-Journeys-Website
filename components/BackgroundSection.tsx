'use client'

import Image from 'next/image'
import { ReactNode } from 'react'

interface BackgroundSectionProps {
  image: string
  children: ReactNode
  className?: string
  overlayClassName?: string
  minHeight?: string
}

export default function BackgroundSection({
  image,
  children,
  className = '',
  overlayClassName = '',
  minHeight = 'auto',
}: BackgroundSectionProps) {
  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Background"
          fill
          className="object-cover object-center"
          priority={false}
          quality={90}
        />
      </div>

      {/* Gradient Overlay (neutral dark, no pink shade) */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 ${overlayClassName}`}
      />

      {/* Content */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </section>
  )
}

