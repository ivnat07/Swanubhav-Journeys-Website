import React from 'react'

interface SectionProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  className?: string
  bgColor?: 'white' | 'lavender' | 'transparent'
}

export default function Section({
  children,
  title,
  subtitle,
  className = '',
  bgColor = 'transparent',
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    lavender: 'bg-lavender',
    transparent: 'bg-transparent',
  }

  return (
    <section className={`py-16 px-4 ${bgClasses[bgColor]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

